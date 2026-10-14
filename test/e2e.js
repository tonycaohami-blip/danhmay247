/**
 * Kiểm thử tích hợp: npm test
 * - Mặc định chạy với kho lưu trữ tệp (thư mục tạm, xóa khi xong) — không cần cài gì.
 * - Nếu .env có DB_USER/DB_NAME: chạy trên MySQL với bảng tiền tố riêng (t<ngẫu nhiên>_) và XÓA sạch khi xong.
 * - Chặn email để lấy liên kết đăng nhập.
 */
const path = require("path"), fs = require("fs"), os = require("os");
const ROOT = path.join(__dirname, "..");
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), "dm247-"));
const PREFIX = "t" + Math.random().toString(36).slice(2, 7) + "_";
Object.assign(process.env, { PORT: "3999", DATA_DIR: DATA, DB_PREFIX: PREFIX, ADMIN_PASSWORD: "mat-khau-thu", SEPAY_API_KEY: "k", SITE_URL: "http://localhost:3999", SMTP_HOST: "", SMTP_USER: "", SMTP_PASS: "", NODE_ENV: "test" });

const config = require(path.join(ROOT, "server/config.js"));
const mailer = require(path.join(ROOT, "server/mailer.js"));
const sent = [];
mailer.ready = true;
mailer.loginLink = async (email, url) => { sent.push({ email, url }); return true; };

const db = require(path.join(ROOT, "server/db.js"));
const { purgeOldFiles } = require(path.join(ROOT, "server/api.js"));
const { start } = require(path.join(ROOT, "server.js"));

const B = "http://localhost:3999";
const H = { Origin: B };
let pass = 0, fail = 0;
const ok = (name, cond, extra) => { cond ? pass++ : fail++; console.log((cond ? "  ✓ " : "  ✗ ") + name + (extra ? " — " + extra : "")); };
const j = (method, url, body, headers) => fetch(B + url, { method, headers: Object.assign({ "Content-Type": "application/json" }, H, headers), body: body ? JSON.stringify(body) : undefined, redirect: "manual" });

let server;
async function cleanup() {
  if (db.kind === "mysql") { try { for (const t of Object.values(db.TABLES)) await db.query("DROP TABLE IF EXISTS `" + t + "`"); } catch (e) { console.error("Không xóa được bảng thử:", e.message); } }
  await db.close().catch(() => {});
  if (server) server.close();
  fs.rmSync(DATA, { recursive: true, force: true });
}

(async () => {
  server = await start();
  await new Promise((r) => setTimeout(r, 300));
  console.log(db.kind === "mysql" ? "  (MySQL — bảng thử nghiệm: " + PREFIX + "*)" : "  (lưu trữ tệp — thư mục tạm " + DATA + ")");

  // --- Đặt hàng hợp lệ & không hợp lệ
  const mk = (over) => { const f = new FormData(); const v = Object.assign({ service: "transcription", type: "interview", urgency: "48h", qty: "30", speakers: "2", extras: "timestamps", name: "Lê Văn Đạt", email: "Dat.Le@Example.com", phone: "+84 988058030", agree: "on", instructions: "Ghi chú có dấu: Việt Nam 🇻🇳" }, over); for (const k in v) f.append(k, v[k]); return f; };
  const withFile = mk(); withFile.append("files", new Blob(["noi dung"]), "Biên bản họp.pdf");
  let r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: withFile });
  let d = await r.json();
  ok("tạo đơn chuyển âm kèm tệp", r.status === 201, d.order && d.order.id + " " + d.order.price.total + "đ");
  const id = d.order.id, token = d.token;
  ok("email được chuẩn hóa chữ thường", d.order.email === "dat.le@example.com");

  let saved;
  if (db.kind === "mysql") {
    const row = (await db.query("SELECT * FROM `" + db.TABLES.orders + "` WHERE id = ?", [id]))[0];
    saved = row && { total: row.total, name: row.name, instructions: row.instructions, tokenHash: row.token_hash };
  } else {
    db.flush();
    const o = JSON.parse(fs.readFileSync(db.file, "utf8")).orders.find((x) => x.id === id);
    saved = o && { total: o.price.total, name: o.name, instructions: o.instructions, tokenHash: o.tokenHash };
  }
  ok("đơn được ghi xuống " + (db.kind === "mysql" ? "MySQL" : "tệp db.json"), !!saved && saved.total === d.order.price.total && saved.name === "Lê Văn Đạt");
  ok("tiếng Việt + emoji lưu đúng", saved.instructions === "Ghi chú có dấu: Việt Nam 🇻🇳");
  ok("không lưu mã truy cập dạng rõ", saved.tokenHash.length === 64 && saved.tokenHash !== token);
  const frows = (await db.orders.get(id)).files;
  ok("tệp khách gửi được lưu", frows.length === 1 && frows[0].name === "Biên bản họp.pdf" && fs.existsSync(path.join(config.UPLOAD_DIR, frows[0].stored)));

  for (const [k, v, msg] of [["urgency", "14d", "thời hạn không có cho chuyển âm"], ["qty", "0", "số lượng 0"], ["email", "sai", "email sai"], ["agree", "", "chưa đồng ý"], ["type", "abc", "loại sai"]]) {
    r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk({ [k]: v }) });
    ok("từ chối: " + msg, r.status === 400, (await r.json()).error);
  }
  const big = mk(); for (let i = 0; i < 7; i++) big.append("files", new Blob(["x"]), "f" + i + ".pdf");
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: big });
  ok("từ chối quá 6 tệp", r.status === 400, (await r.json()).error);
  const bad = mk(); bad.append("files", new Blob(["<script>"]), "hack.html");
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: bad });
  ok("từ chối tệp .html", r.status === 400, (await r.json()).error);
  ok("không để lại tệp tạm khi lỗi", fs.readdirSync(path.join(DATA, "uploads/_tmp")).length === 0);
  ok("đơn lỗi không được lưu", (await db.orders.all()).length === 1);

  // --- Xem đơn
  r = await fetch(B + "/api/orders/" + id); ok("không có mã truy cập → 404", r.status === 404);
  r = await fetch(B + "/api/orders/" + id, { headers: { "X-Order-Token": token } });
  d = await r.json(); ok("có mã truy cập → xem được đơn", r.ok && d.order.id === id && d.order.messages.length === 1);
  r = await j("POST", "/api/orders/" + id + "/messages", { text: "Khi nào xong ạ?" }, { "X-Order-Token": token });
  ok("khách gửi tin nhắn", (await r.json()).order.messages.length === 2);
  r = await j("POST", "/api/orders/" + id + "/messages", { text: "x" }, { "X-Order-Token": token, Origin: "https://evil.com" });
  ok("chặn CSRF (Origin lạ)", r.status === 403);

  // --- Đăng nhập bằng liên kết email
  r = await j("POST", "/api/auth/request-link", { email: "dat.le@example.com" });
  ok("gửi liên kết đăng nhập", r.ok && sent.length === 1);
  const link = sent[0].url.replace("http://localhost:3999", "");
  r = await fetch(B + link, { redirect: "manual" });
  const cookie = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("liên kết đăng nhập → đặt cookie & chuyển /tai-khoan", r.status === 302 && r.headers.get("location") === "/tai-khoan" && cookie.startsWith("dm_session="));
  r = await fetch(B + link, { redirect: "manual" });
  ok("liên kết chỉ dùng 1 lần", r.headers.get("location") === "/tai-khoan?login=expired");
  r = await fetch(B + "/api/orders", { headers: { Cookie: cookie } });
  d = await r.json();
  ok("đăng nhập xem được đơn của mình", d.orders.length === 1 && d.orders[0].id === id);
  r = await fetch(B + "/api/me", { headers: { Cookie: cookie } });
  ok("/api/me trả đúng người dùng", (await r.json()).user.name === "Lê Văn Đạt");
  r = await fetch(B + "/api/orders/" + id, { headers: { Cookie: "dm_session=gia.mao" } });
  ok("cookie giả mạo bị từ chối", r.status === 404);

  // --- Thanh toán: khách báo đã chuyển, webhook SePay (thiếu → đủ → trùng)
  r = await j("POST", "/api/orders/" + id + "/claim-paid", null, { "X-Order-Token": token });
  ok("khách báo đã chuyển khoản → verifying", (await r.json()).order.status === "verifying");
  const total = (await db.orders.get(id)).price.total;
  const hook = (body, key) => fetch(B + "/api/webhooks/sepay", { method: "POST", headers: { "Content-Type": "application/json", Authorization: "Apikey " + (key || "k") }, body: JSON.stringify(body) });
  r = await hook({ id: 1, transferType: "in", transferAmount: 1000, content: id }, "sai"); ok("webhook sai khóa → 401", r.status === 401);
  await hook({ id: 101, transferType: "in", transferAmount: 100000, content: "CK " + id + " FT1" });
  ok("chuyển thiếu → chưa xác nhận", (await db.orders.get(id)).status === "verifying");
  await hook({ id: 102, transferType: "in", transferAmount: total - 100000, content: "thanh toan " + id.toLowerCase() });
  let o = await db.orders.get(id);
  ok("đủ tiền → tự xác nhận", o.status === "paid" && o.paySource === "sepay" && o.receivedAmount === total && !!o.deadline);
  await hook({ id: 102, transferType: "in", transferAmount: 999999, content: id });
  ok("giao dịch gửi lại không bị cộng trùng", (await db.orders.get(id)).receivedAmount === total);
  const pays = await db.payments.recent();
  ok("lịch sử giao dịch được lưu", pays.length === 2 && pays.some((p) => p.result === "Đã xác nhận tự động"));

  // --- Liên hệ & đánh giá
  r = await j("POST", "/api/contact", { name: "Á", email: "a@b.vn", message: "Cần báo giá 100 trang" });
  ok("gửi liên hệ", r.status === 201);
  r = await j("POST", "/api/reviews", { name: "Hà", text: "Dịch vụ rất tốt, giao đúng hẹn và chính xác.", rating: 5 });
  ok("gửi đánh giá (chờ duyệt)", r.status === 201);
  r = await fetch(B + "/api/reviews"); ok("đánh giá chưa duyệt không hiển thị", (await r.json()).reviews.length === 0);

  // --- Quản trị
  r = await j("POST", "/api/admin/login", { password: "sai" }); ok("sai mật khẩu quản trị → 401", r.status === 401);
  r = await j("POST", "/api/admin/login", { password: "mat-khau-thu" });
  const admin = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("đăng nhập quản trị", r.ok && admin.startsWith("dm_admin="));
  r = await fetch(B + "/api/admin/summary", { headers: { Cookie: admin } });
  d = await r.json();
  ok("bảng điều khiển đọc đúng số liệu", d.stats.orders === 1 && d.stats.paid === 1 && d.stats.revenue === total && d.stats.newContacts === 1 && d.stats.pendingReviews === 1);
  r = await j("PATCH", "/api/admin/reviews/" + d.reviews[0].id, { approved: true }, { Cookie: admin });
  r = await fetch(B + "/api/reviews"); ok("duyệt → đánh giá hiển thị", (await r.json()).reviews.length === 1);
  r = await j("PATCH", "/api/admin/contacts/" + d.contacts[0].id, { read: true }, { Cookie: admin });
  ok("đánh dấu liên hệ đã xử lý", (await db.contacts.unread()) === 0);
  r = await j("POST", "/api/admin/orders/" + id + "/messages", { text: "Chào anh, em đang làm ạ." }, { Cookie: admin });
  ok("quản trị nhắn tin", (await r.json()).order.messages.some((m) => m.text === "Chào anh, em đang làm ạ."));
  const up = new FormData(); up.append("files", new Blob(["ket qua"]), "Kết quả.docx"); up.append("complete", "1");
  r = await fetch(B + "/api/admin/orders/" + id + "/result", { method: "POST", headers: Object.assign({ Cookie: admin }, H), body: up });
  d = await r.json();
  ok("gửi tệp hoàn thành → đơn done", d.order.status === "done" && d.order.files.some((f) => f.by === "admin" && f.name === "Kết quả.docx"));
  const result = d.order.files.find((f) => f.by === "admin");
  r = await fetch(B + "/api/orders/" + id + "/files/" + result.id + "?t=" + token);
  ok("khách tải được tệp hoàn thành", r.ok && (await r.text()) === "ket qua");
  r = await j("PATCH", "/api/admin/orders/" + id, { status: "progress", notes: "Ưu tiên" }, { Cookie: admin });
  d = await r.json();
  ok("đổi trạng thái + ghi chú nội bộ", d.order.status === "progress" && d.order.notes === "Ưu tiên");
  r = await fetch(B + "/api/orders/" + id, { headers: { "X-Order-Token": token } });
  ok("khách không thấy ghi chú nội bộ", !("notes" in (await r.json()).order));
  ok("lịch sử trạng thái đầy đủ", (await db.orders.get(id)).history.map((h) => h.status).join(">") === "unpaid>verifying>paid>done>progress");

  r = await fetch(B + "/api/admin/export.csv"); ok("xuất Excel cần đăng nhập quản trị", r.status === 401);
  r = await fetch(B + "/api/admin/export.csv", { headers: { Cookie: admin } });
  const bytes = Buffer.from(await r.arrayBuffer()), csv = bytes.toString("utf8");
  ok("xuất danh sách đơn ra Excel (CSV, tiếng Việt)", r.ok && bytes[0] === 0xef && bytes[1] === 0xbb && bytes[2] === 0xbf && csv.includes(id) && csv.includes("Lê Văn Đạt") && /attachment/.test(r.headers.get("content-disposition")));
  if (db.kind === "json") ok("có bản sao lưu hằng ngày", fs.readdirSync(path.join(DATA, "backups")).some((n) => /^db-\d{4}-\d{2}-\d{2}\.json$/.test(n)));

  // --- Tự xóa tệp sau 30 ngày
  await j("PATCH", "/api/admin/orders/" + id, { status: "done" }, { Cookie: admin });
  if (db.kind === "mysql") await db.query("UPDATE `" + db.TABLES.history + "` SET created_at = DATE_SUB(NOW(), INTERVAL 31 DAY) WHERE order_id = ?", [id]);
  else db._raw().orders.find((x) => x.id === id).history.forEach((h) => { h.at -= 31 * 86400e3; });
  const n = await purgeOldFiles();
  o = await db.orders.get(id);
  ok("tệp quá 30 ngày đã bị xóa", n === 2 && o.files.every((f) => f.purged && !f.stored) && !fs.existsSync(path.join(config.UPLOAD_DIR, frows[0].stored)));
  r = await fetch(B + "/api/orders/" + id + "/files/" + result.id + "?t=" + token);
  ok("tải tệp đã xóa → 410", r.status === 410);

  // --- Khóa phiên lưu trong MySQL (không đổi sau khi khởi động lại)
  ok("khóa phiên được lưu (không đăng xuất khách khi khởi động lại)", (await db.settings.get("session_secret")) === config.SESSION_SECRET);

  console.log(`\n${pass} đạt, ${fail} lỗi`);
  await cleanup();
  process.exit(fail ? 1 : 0);
})().catch(async (e) => { console.error(e); await cleanup(); process.exit(1); });
