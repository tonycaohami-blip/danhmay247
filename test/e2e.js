/**
 * Kiểm thử tích hợp: npm test
 * - Mặc định chạy với kho lưu trữ tệp (thư mục tạm, xóa khi xong) - không cần cài gì.
 * - Nếu .env có DB_USER/DB_NAME: chạy trên MySQL với bảng tiền tố riêng (t<ngẫu nhiên>_) và XÓA sạch khi xong.
 * - Chặn email để lấy liên kết đăng nhập.
 */
const path = require("path"), fs = require("fs"), os = require("os");
const ROOT = path.join(__dirname, "..");
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), "dm247-"));
const PREFIX = "t" + Math.random().toString(36).slice(2, 7) + "_";
Object.assign(process.env, { DM_NO_AUTOSTART: "1", PORT: "3999", DATA_DIR: DATA, DB_PREFIX: PREFIX, ADMIN_PASSWORD: "mat-khau-thu", SEPAY_API_KEY: "k", SITE_URL: "http://localhost:3999", SMTP_HOST: "", SMTP_USER: "", SMTP_PASS: "", NODE_ENV: "test" });

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
const ok = (name, cond, extra) => { cond ? pass++ : fail++; console.log((cond ? "  ✓ " : "  ✗ ") + name + (extra ? " - " + extra : "")); };
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
  console.log(db.kind === "mysql" ? "  (MySQL - bảng thử nghiệm: " + PREFIX + "*)" : "  (lưu trữ tệp - thư mục tạm " + DATA + ")");

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
  ok("bảo mật: tệp tải về luôn ở dạng tệp đính kèm, chặn chạy mã", /attachment/.test(r.headers.get("content-disposition") || "") && /sandbox/.test(r.headers.get("content-security-policy") || "") && r.headers.get("x-content-type-options") === "nosniff");
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

  // ================= NHÂN VIÊN =================
  // Đơn thứ hai, đã thanh toán, có tệp khách gửi
  const f2 = mk({ name: "Trần Bí Mật", email: "bimat@khach.vn", phone: "0911222333", promo: "DANHMAY10", instructions: "Gõ lại 3 trang đầu" });
  f2.append("files", new Blob(["anh goc"]), "Trang 1.jpg");
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: f2 });
  d = await r.json();
  const id2 = d.order.id, token2 = d.token;
  await j("PATCH", "/api/admin/orders/" + id2, { status: "paid" }, { Cookie: admin });

  // Tạo tài khoản
  ok("chỉ quản trị mới tạo được nhân viên", (await j("POST", "/api/admin/staff", { username: "x.y", name: "X", password: "matkhau123" })).status === 401);
  r = await j("POST", "/api/admin/staff", { username: "lan.nv", name: "Nguyễn Thị Lan", email: "lan@nv.vn", password: "matkhau123" }, { Cookie: admin });
  d = await r.json();
  const sid = d.staff && d.staff.id;
  ok("quản trị tạo tài khoản nhân viên", r.status === 201 && !!sid && !("passHash" in d.staff));
  r = await j("POST", "/api/admin/staff", { username: "lan.nv", name: "Trùng", password: "matkhau123" }, { Cookie: admin });
  ok("không cho trùng tên đăng nhập", r.status === 409);
  r = await j("POST", "/api/admin/staff", { username: "hoa", name: "Hoa", password: "123" }, { Cookie: admin });
  ok("từ chối mật khẩu ngắn", r.status === 400);
  await j("POST", "/api/admin/staff", { username: "minh.nv", name: "Lê Minh", password: "matkhau456" }, { Cookie: admin });

  // Đăng nhập nhân viên
  r = await j("POST", "/api/staff/login", { username: "lan.nv", password: "sai-mat-khau" });
  ok("nhân viên sai mật khẩu → 401", r.status === 401);
  r = await j("POST", "/api/staff/login", { username: "LAN.NV", password: "matkhau123" });
  let staffCk = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("nhân viên đăng nhập", r.ok && staffCk.startsWith("dm_staff="));
  r = await j("POST", "/api/staff/login", { username: "minh.nv", password: "matkhau456" });
  const minhCk = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("nhân viên chưa được giao thì không thấy đơn nào", (await (await fetch(B + "/api/staff/orders", { headers: { Cookie: staffCk } })).json()).orders.length === 0);

  // Giao đơn
  r = await j("PATCH", "/api/admin/orders/" + id2, { assignedTo: sid }, { Cookie: admin });
  d = await r.json();
  ok("quản trị giao đơn cho nhân viên", d.order.assignedTo === sid && d.order.internal.some((n) => /Nguyễn Thị Lan/.test(n.text)));
  r = await fetch(B + "/api/staff/orders", { headers: { Cookie: staffCk } });
  d = await r.json();
  ok("nhân viên thấy đơn được giao", d.orders.length === 1 && d.orders[0].id === id2);
  const sv = d.orders[0], svJson = JSON.stringify(sv);
  ok("nhân viên KHÔNG thấy tên/email/SĐT khách", !("name" in sv) && !("email" in sv) && !("phone" in sv) && !/Trần Bí Mật|bimat@khach\.vn|0911222333/.test(svJson));
  ok("nhân viên KHÔNG thấy giá, mã giảm giá, tiền đã nhận", !("price" in sv) && !("promo" in sv) && !("paidAmount" in sv) && !("receivedAmount" in sv) && !/DANHMAY10|"total"|%\)/.test(svJson));
  ok("nhân viên KHÔNG thấy tin nhắn với khách và ghi chú riêng của quản trị", !("messages" in sv) && !("notes" in sv) && !("tokenHash" in sv));
  ok("nhân viên thấy thông tin chuyên môn", sv.typeLabel === "Phỏng vấn / Hội thảo / Tọa đàm" && sv.qty === 30 && sv.instructions === "Gõ lại 3 trang đầu" && sv.extras[0] === "Gắn mốc thời gian" && !!sv.deadline);
  r = await fetch(B + "/api/staff/orders/" + id2 + "/files/" + sv.files[0].id, { headers: { Cookie: staffCk } });
  ok("nhân viên tải được tệp khách gửi", r.ok && (await r.text()) === "anh goc");
  ok("nhân viên khác không xem được đơn này", (await fetch(B + "/api/staff/orders/" + id2, { headers: { Cookie: minhCk } })).status === 404);
  ok("nhân viên không gọi được API quản trị", (await fetch(B + "/api/admin/summary", { headers: { Cookie: staffCk } })).status === 401);
  ok("nhân viên không xem được đơn qua API khách", (await fetch(B + "/api/orders/" + id2, { headers: { Cookie: staffCk } })).status === 404);

  // Nhân viên làm việc
  r = await j("PATCH", "/api/staff/orders/" + id2, { status: "done" }, { Cookie: staffCk });
  ok("nhân viên không tự hoàn thành đơn được", r.status === 400);
  r = await j("PATCH", "/api/staff/orders/" + id2, { status: "progress" }, { Cookie: staffCk });
  ok("nhân viên bắt đầu làm → đang thực hiện", (await r.json()).order.status === "progress");
  r = await j("POST", "/api/staff/orders/" + id2 + "/notes", { text: "Trang 2 bị mờ, em đánh dấu [?]" }, { Cookie: staffCk });
  ok("nhân viên ghi chú nội bộ", (await r.json()).order.internal.some((n) => n.role === "staff" && /bị mờ/.test(n.text)));
  const up2 = new FormData(); up2.append("files", new Blob(["ban danh may"]), "Kết quả nhân viên.docx");
  r = await fetch(B + "/api/staff/orders/" + id2 + "/files", { method: "POST", headers: Object.assign({ Cookie: staffCk }, H), body: up2 });
  d = await r.json();
  const staffFile = d.order.files.find((f) => f.by === "staff");
  ok("nhân viên tải tệp kết quả lên", r.ok && !!staffFile && !staffFile.shared);
  r = await j("PATCH", "/api/staff/orders/" + id2, { status: "review" }, { Cookie: staffCk });
  ok("nhân viên gửi kiểm tra", (await r.json()).order.status === "review");

  // Khách chưa thấy tệp, ghi chú nội bộ, người được giao
  r = await fetch(B + "/api/orders/" + id2, { headers: { "X-Order-Token": token2 } });
  d = await r.json();
  ok("khách KHÔNG thấy tệp nhân viên chưa duyệt", !d.order.files.some((f) => f.name === "Kết quả nhân viên.docx"));
  ok("khách KHÔNG thấy ghi chú nội bộ và nhân viên phụ trách", !("internal" in d.order) && !("assignedTo" in d.order) && !/Nguyễn Thị Lan|bị mờ/.test(JSON.stringify(d.order)));
  r = await fetch(B + "/api/orders/" + id2 + "/files/" + staffFile.id + "?t=" + token2);
  ok("khách không tải được tệp chưa duyệt (đoán mã tệp)", r.status === 404);

  // Quản trị duyệt & chuyển cho khách
  r = await fetch(B + "/api/admin/summary", { headers: { Cookie: admin } });
  d = await r.json();
  ok("quản trị thấy tệp nhân viên + ghi chú + số đơn chờ kiểm tra", d.stats.toReview === 1 && d.staff.length === 2 && d.orders.find((x) => x.id === id2).internal.length >= 4);
  r = await j("POST", "/api/admin/orders/" + id2 + "/files/" + staffFile.id + "/share", { complete: true }, { Cookie: admin });
  ok("quản trị duyệt tệp → đơn hoàn thành", (await r.json()).order.status === "done");
  r = await fetch(B + "/api/orders/" + id2 + "/files/" + staffFile.id + "?t=" + token2);
  ok("khách tải được tệp đã duyệt", r.ok && (await r.text()) === "ban danh may");
  d = await (await fetch(B + "/api/orders/" + id2, { headers: { "X-Order-Token": token2 } })).json();
  ok("khách thấy tệp như do Đánh máy 247 gửi", d.order.files.some((f) => f.name === "Kết quả nhân viên.docx" && f.by === "admin"));

  // --- Thông báo
  await j("POST", "/api/admin/orders/" + id2 + "/internal", { text: "Cảm ơn Lan, bản rất tốt" }, { Cookie: admin });
  r = await fetch(B + "/api/admin/notifications", { headers: { Cookie: admin } });
  d = await r.json();
  const aev = d.events || [];
  ok("thông báo quản trị: đơn mới, khách báo chuyển khoản, khách nhắn tin, nhân viên cập nhật",
    r.ok && d.now > 0 && aev.some((e) => e.kind === "new" && e.orderId === id2) && aev.some((e) => e.kind === "pay" && e.orderId === id) &&
    aev.some((e) => e.kind === "msg" && /Khi nào xong/.test(e.text)) && aev.some((e) => e.kind === "staff" && e.orderId === id2 && /gửi quản trị kiểm tra/.test(e.text)));
  ok("thông báo quản trị: mới nhất trước, mã không trùng", aev.every((e, i) => !i || aev[i - 1].at >= e.at) && new Set(aev.map((e) => e.id)).size === aev.length);
  ok("thông báo quản trị: chỉ quản trị xem được", (await fetch(B + "/api/admin/notifications", { headers: { Cookie: staffCk } })).status === 401 && (await fetch(B + "/api/admin/notifications")).status === 401);
  r = await fetch(B + "/api/staff/notifications", { headers: { Cookie: staffCk } });
  d = await r.json();
  const sev = d.events || [], sevJson = JSON.stringify(sev);
  ok("thông báo nhân viên: được giao đơn, quản trị nhắn, đơn hoàn thành",
    r.ok && sev.some((e) => e.kind === "assign" && e.orderId === id2) && sev.some((e) => e.kind === "note" && /bản rất tốt/.test(e.text)) && sev.some((e) => e.kind === "done" && e.orderId === id2));
  ok("thông báo nhân viên: không lộ thông tin khách, giá, đơn của người khác", !/Trần Bí Mật|bimat@khach\.vn|0911222333|đ"|DANHMAY10/.test(sevJson) && sev.every((e) => e.orderId === id2));
  ok("thông báo nhân viên: nhân viên khác không thấy", ((await (await fetch(B + "/api/staff/notifications", { headers: { Cookie: minhCk } })).json()).events || []).length === 0);
  r = await j("POST", "/api/notifications", { tokens: { [id2]: token2 } });
  d = await r.json();
  const cev = d.events || [], cevJson = JSON.stringify(cev);
  ok("thông báo khách: tin từ Đánh máy 247 (thanh toán, hoàn thành) theo mã truy cập", r.ok && cev.some((e) => e.orderId === id2 && /hoàn thành/.test(e.text)) && cev.some((e) => /nhận được thanh toán/.test(e.text)));
  ok("thông báo khách: không lộ trao đổi nội bộ, tên nhân viên, tin nhắn của chính khách", !/Nguyễn Thị Lan|bản rất tốt|bị mờ/.test(cevJson) && cev.every((e) => e.orderId === id2));
  r = await j("POST", "/api/notifications", { tokens: { [id2]: "ma-sai", [id]: token2 } });
  ok("thông báo khách: mã truy cập sai → không thấy gì", r.ok && (await r.json()).events.length === 0);
  ok("thông báo khách: chặn gọi từ trang lạ", (await j("POST", "/api/notifications", { tokens: {} }, { Origin: "https://evil.com" })).status === 403);

  // Đổi mật khẩu & khóa tài khoản
  r = await j("POST", "/api/staff/password", { old: "matkhau123", password: "matkhaumoi789" }, { Cookie: staffCk });
  const newCk = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("nhân viên đổi mật khẩu", r.ok);
  ok("phiên cũ bị đăng xuất sau khi đổi mật khẩu", (await fetch(B + "/api/staff/me", { headers: { Cookie: staffCk } })).status === 401);
  ok("phiên mới vẫn dùng được", (await fetch(B + "/api/staff/me", { headers: { Cookie: newCk } })).ok);
  await j("PATCH", "/api/admin/staff/" + sid, { active: false }, { Cookie: admin });
  ok("khóa tài khoản → đăng xuất ngay", (await fetch(B + "/api/staff/orders", { headers: { Cookie: newCk } })).status === 401);
  ok("tài khoản bị khóa không đăng nhập được", (await j("POST", "/api/staff/login", { username: "lan.nv", password: "matkhaumoi789" })).status === 401);
  r = await j("PATCH", "/api/admin/orders/" + id2, { assignedTo: sid }, { Cookie: admin });
  ok("không giao đơn cho nhân viên đã khóa", r.status === 400 || (await r.json()).order.assignedTo === sid);
  const raw = db.kind === "json" ? JSON.stringify(db._raw().staff) : JSON.stringify(await db.staff.list());
  ok("mật khẩu nhân viên lưu dạng băm", !/matkhau123|matkhaumoi789|matkhau456/.test(raw) && /scrypt\$/.test(raw));

  // --- Tự xóa tệp sau 30 ngày
  await j("PATCH", "/api/admin/orders/" + id, { status: "done" }, { Cookie: admin });
  if (db.kind === "mysql") await db.query("UPDATE `" + db.TABLES.history + "` SET created_at = DATE_SUB(NOW(), INTERVAL 31 DAY) WHERE order_id = ?", [id]);
  else db._raw().orders.find((x) => x.id === id).history.forEach((h) => { h.at -= 31 * 86400e3; });
  const n = await purgeOldFiles();
  o = await db.orders.get(id);
  ok("tệp quá 30 ngày đã bị xóa", n === 2 && o.files.every((f) => f.purged && !f.stored) && !fs.existsSync(path.join(config.UPLOAD_DIR, frows[0].stored)));
  r = await fetch(B + "/api/orders/" + id + "/files/" + result.id + "?t=" + token);
  ok("tải tệp đã xóa → 410", r.status === 410);

  // ================= SEO: HTML thô (như Google / Facebook / Zalo nhận được, không chạy JS) =================
  const getRaw = async (u) => { const x = await fetch(B + u, { redirect: "manual" }); return { s: x.status, loc: x.headers.get("location"), h: x.status === 200 ? await x.text() : "" }; };
  const ld = (h) => [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  let pg = await getRaw("/blog/go-10-ngon-30-ngay");
  ok("bài viết dựng sẵn: tiêu đề riêng trong HTML", pg.s === 200 && /<title>Gõ 10 ngón trong 30 ngày[^<]*- Đánh máy 247<\/title>/.test(pg.h));
  ok("bài viết dựng sẵn: nội dung có trong HTML", pg.h.includes("Nền tảng: hàng phím cơ sở") && pg.h.includes('<article class="prose"'));
  ok("bài viết: mục lục + id tiêu đề", /<nav class="toc"/.test(pg.h) && /<h2 id="muc-1">/.test(pg.h));
  ok("bài viết: canonical đường dẫn sạch", pg.h.includes('<link rel="canonical" href="http://localhost:3999/blog/go-10-ngon-30-ngay">'));
  ok("bài viết: ảnh chia sẻ PNG cho Facebook/Zalo", /<meta property="og:image" content="[^"]+\/assets\/img\/og\/go-10-ngon-30-ngay\.png">/.test(pg.h) && (await fetch(B + "/assets/img/og/go-10-ngon-30-ngay.png")).headers.get("content-type") === "image/png");
  ok("bài viết: og:type article + mô tả riêng", pg.h.includes('<meta property="og:type" content="article">') && /<meta name="description" content="Gõ mổ cò/.test(pg.h));
  const pld = ld(pg.h);
  ok("bài viết: JSON-LD BlogPosting + Breadcrumb hợp lệ", pld.some((x) => x["@type"] === "BlogPosting" && x.headline && x.datePublished) && pld.some((x) => x["@type"] === "BreadcrumbList" && x.itemListElement.length === 3));
  pg = await getRaw("/blog/go-cong-thuc-hoa-hoc-trong-word");
  const fld = ld(pg.h).find((x) => x["@type"] === "FAQPage");
  ok("bài có hỏi đáp: tiêu đề SEO riêng + mục Câu hỏi thường gặp + JSON-LD FAQPage", /<title>Cách gõ công thức hóa học trong Word nhanh, chuẩn - Đánh máy 247<\/title>/.test(pg.h) &&
    pg.h.includes('class="post-faq"') && fld && fld.mainEntity.length === 3 && fld.mainEntity.every((q) => q.name && q.acceptedAnswer.text));
  pg = await getRaw("/bai-viet?slug=telex-hay-vni");
  ok("đường dẫn cũ /bai-viet?slug= → 301 /blog/…", pg.s === 301 && pg.loc === "/blog/telex-hay-vni");
  ok("bài không tồn tại → 404", (await getRaw("/blog/khong-co-bai-nay")).s === 404);
  pg = await getRaw("/blog");
  ok("trang /blog: danh sách bài có sẵn trong HTML", pg.s === 200 && (pg.h.match(/class="post-card" href="\/blog\/[a-z0-9-]+"/g) || []).length === 9 && pg.h.includes('class="post-feature"'));

  pg = await getRaw("/dich-vu/pdf-sang-word");
  ok("dịch vụ dựng sẵn: tiêu đề, nội dung, giá", pg.s === 200 && /<title>Chuyển PDF sang Word - Đánh máy 247/.test(pg.h) && pg.h.includes("Bạn nhận được gì?") && pg.h.includes("Chỉ từ"));
  ok("dịch vụ: JSON-LD Service có giá VND", ld(pg.h).some((x) => x["@type"] === "Service" && x.offers.priceCurrency === "VND" && x.offers.price > 0));
  ok("đường dẫn cũ /dich-vu?slug= → 301 /dich-vu/…", (await getRaw("/dich-vu?slug=danh-may-latex")).loc === "/dich-vu/danh-may-latex");
  pg = await getRaw("/dich-vu");
  ok("danh sách dịch vụ dựng sẵn", pg.s === 200 && (pg.h.match(/class="svc-card" href="\/dich-vu\//g) || []).length >= 10);

  pg = await getRaw("/");
  const hld = ld(pg.h);
  ok("trang chủ: JSON-LD Organization (logo, SĐT, email) + WebSite", hld.some((x) => x["@type"] === "Organization" && /logo-512\.png$/.test(x.logo) && x.telephone === "+84988058030") && hld.some((x) => x["@type"] === "WebSite"));
  ok("trang chủ: canonical + og:image mặc định PNG", pg.h.includes('<link rel="canonical" href="http://localhost:3999/">') && /og\/default\.png/.test(pg.h));
  ok("trang chủ: không có thẻ og:title trùng lặp", (pg.h.match(/property="og:title"/g) || []).length === 1);
  ok("không gắn điểm đánh giá giả vào dữ liệu có cấu trúc", !/aggregateRating|"Review"/i.test(pg.h + (await getRaw("/danh-gia")).h));
  pg = await getRaw("/hoi-dap");
  ok("hỏi đáp: JSON-LD FAQPage đủ câu hỏi", ld(pg.h).some((x) => x["@type"] === "FAQPage" && x.mainEntity.length >= 10 && !/<[a-z]/i.test(JSON.stringify(x))));
  ok("trang riêng tư không bị chèn thẻ SEO", !(await getRaw("/quan-tri")).h.includes("og:image") && !(await getRaw("/tai-khoan")).h.includes("canonical"));
  pg = await getRaw("/sitemap.xml");
  ok("sitemap: đường dẫn sạch + ảnh PNG, không có trang riêng tư", pg.h.includes("/blog/telex-hay-vni") && pg.h.includes("/dich-vu/pdf-sang-word") && /og\/[a-z0-9-]+\.png/.test(pg.h) && !/bai-viet|\?slug=|dat-hang|tai-khoan/.test(pg.h));

  // --- Khóa phiên lưu trong MySQL (không đổi sau khi khởi động lại)
  // ================= ĐỐI TÁC (AFFILIATE) =================
  const affReg = { shop: "Photocopy Minh Anh", name: "Trần Minh Anh", phone: "0977 111 222", email: "minhanh@photo.vn", address: "12 Lê Lợi", city: "Huế", bankName: "Vietcombank", bankAccount: "0123 456 789", bankHolder: "tran minh anh", password: "doitac1234", agree: true };
  r = await j("POST", "/api/aff/register", affReg);
  d = await r.json();
  const affCk = (r.headers.get("set-cookie") || "").split(";")[0];
  const aff = d.affiliate || {};
  ok("đối tác đăng ký → chờ duyệt, có mã giới thiệu, đăng nhập luôn", r.status === 201 && aff.status === "pending" && /^[A-Z0-9]{4,12}$/.test(aff.code) && affCk.startsWith("dm_aff=") && !("passHash" in aff) && aff.bank.account === "0123456789" && aff.bank.holder === "TRAN MINH ANH");
  ok("đối tác: không cho trùng email", (await j("POST", "/api/aff/register", affReg)).status === 409);
  ok("đối tác: bắt buộc đồng ý điều khoản, mật khẩu đủ dài", (await j("POST", "/api/aff/register", Object.assign({}, affReg, { email: "x@y.vn", agree: false }))).status === 400 && (await j("POST", "/api/aff/register", Object.assign({}, affReg, { email: "x@y.vn", password: "123" }))).status === 400);
  d = await (await fetch(B + "/api/admin/notifications", { headers: { Cookie: admin } })).json();
  ok("thông báo quản trị: có đối tác mới chờ duyệt", d.events.some((e) => e.kind === "aff:" + aff.id && /Photocopy Minh Anh/.test(e.title)));
  ok("đối tác: mã chưa duyệt thì chưa dùng được", (await (await fetch(B + "/api/aff/check?code=" + aff.code)).json()).valid === false);
  ok("đối tác: chỉ quản trị mới duyệt được", (await j("PATCH", "/api/admin/affiliates/" + aff.id, { status: "active" }, { Cookie: affCk })).status === 401);
  r = await j("PATCH", "/api/admin/affiliates/" + aff.id, { status: "active" }, { Cookie: admin });
  ok("quản trị duyệt đối tác", r.ok && (await r.json()).affiliate.status === "active");
  d = await (await fetch(B + "/api/aff/check?code=" + aff.code.toLowerCase())).json();
  ok("kiểm tra mã: hợp lệ, chỉ lộ tên cửa hàng", d.valid === true && d.shop === "Photocopy Minh Anh" && !("email" in d) && !("phone" in d));
  await j("POST", "/api/aff/click", { code: aff.code });
  await j("POST", "/api/aff/click", { code: "KHONGCO99" });

  // Đơn qua mã giới thiệu
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk({ name: "Khách Của Tiệm", email: "khach@tiem.vn", phone: "0909000111", ref: aff.code, qty: "10" }) });
  d = await r.json();
  const refId = d.order.id, refTok = d.token, refTotal = d.order.price.total;
  ok("đơn đặt bằng mã giới thiệu được gắn đối tác; khách không thấy dữ liệu hoa hồng", d.order.affCode === aff.code && !("affId" in d.order) && !("affRate" in d.order));
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk({ name: "Chính Chủ Tiệm", email: "minhanh@photo.vn", ref: aff.code }) });
  d = await r.json();
  ok("không tính hoa hồng khi đối tác tự đặt đơn (cùng email)", !d.order.affCode);
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk({ email: "khac@vd.vn", phone: "0977111222", ref: aff.code }) });
  ok("không tính hoa hồng khi trùng số điện thoại đối tác", !(await r.json()).order.affCode);

  r = await fetch(B + "/api/aff/me", { headers: { Cookie: affCk } });
  d = await r.json();
  const affJson = JSON.stringify(d.orders);
  ok("trang đối tác: thấy đơn, lượt bấm, hoa hồng dự kiến 30%", r.ok && d.stats.clicks === 1 && d.orders.length === 1 && d.orders[0].id === refId && d.orders[0].commission === Math.round(refTotal * 0.3) && d.orders[0].cstatus === "waiting");
  ok("trang đối tác: KHÔNG lộ tên, email, SĐT khách", !/Khách Của Tiệm|khach@tiem\.vn|0909000111/.test(affJson) && !("name" in d.orders[0]) && !("email" in d.orders[0]));
  ok("trang đối tác: chỉ đối tác đăng nhập mới xem được", (await fetch(B + "/api/aff/me")).status === 401 && (await fetch(B + "/api/aff/me", { headers: { Cookie: staffCk } })).status === 401);
  r = await fetch(B + "/api/aff/qr.svg", { headers: { Cookie: affCk } });
  ok("đối tác tải được mã QR (SVG)", r.ok && /image\/svg/.test(r.headers.get("content-type")) && (await r.text()).includes("<svg"));

  // Hoàn thành đơn → duyệt hoa hồng → chi trả
  ok("chưa có hoa hồng đã duyệt thì không chi trả được", (await j("POST", "/api/admin/affiliates/" + aff.id + "/payout", {}, { Cookie: admin })).status === 400);
  await j("PATCH", "/api/admin/orders/" + refId, { status: "paid" }, { Cookie: admin });
  d = await (await fetch(B + "/api/aff/me", { headers: { Cookie: affCk } })).json();
  ok("đơn đã thanh toán → hoa hồng 'đang thực hiện'", d.orders[0].cstatus === "processing" && d.stats.processing === Math.round(refTotal * 0.3));
  await j("PATCH", "/api/admin/orders/" + refId, { status: "done" }, { Cookie: admin });
  d = await (await fetch(B + "/api/aff/me", { headers: { Cookie: affCk } })).json();
  ok("đơn hoàn thành → hoa hồng được duyệt", d.orders[0].cstatus === "approved" && d.stats.approved === Math.round(refTotal * 0.3) && d.stats.done === 1);
  r = await fetch(B + "/api/admin/affiliates", { headers: { Cookie: admin } });
  d = await r.json();
  ok("quản trị xem danh sách đối tác + số liệu", r.ok && d.affiliates.some((a) => a.id === aff.id && a.stats.approved === Math.round(refTotal * 0.3) && a.stats.clicks === 1) && d.orders.some((o) => o.id === refId && o.customer === "Khách Của Tiệm"));
  r = await j("POST", "/api/admin/affiliates/" + aff.id + "/payout", { note: "CK 01" }, { Cookie: admin });
  d = await r.json();
  ok("quản trị chi trả hoa hồng", r.ok && d.payout.amount === Math.round(refTotal * 0.3) && d.payout.orderIds[0] === refId);
  d = await (await fetch(B + "/api/aff/me", { headers: { Cookie: affCk } })).json();
  ok("đối tác thấy đã chi trả + lịch sử", d.orders[0].cstatus === "paid" && d.stats.paid === Math.round(refTotal * 0.3) && d.stats.approved === 0 && d.payouts.length === 1);
  ok("không chi trả trùng lần hai", (await j("POST", "/api/admin/affiliates/" + aff.id + "/payout", {}, { Cookie: admin })).status === 400);
  ok("không đổi được đối tác của đơn đã chi hoa hồng", (await j("POST", "/api/admin/orders/" + refId + "/affiliate", { code: "" }, { Cookie: admin })).status === 400);
  d = await (await fetch(B + "/api/aff/notifications", { headers: { Cookie: affCk } })).json();
  ok("thông báo đối tác: duyệt tài khoản, đơn mới, hoa hồng duyệt, chi trả", ["done", "new", "paid", "pay"].every((k) => d.events.some((e) => e.kind === k)) && !/Khách Của Tiệm|khach@tiem/.test(JSON.stringify(d.events)));
  r = await fetch(B + "/api/admin/export.csv", { headers: { Cookie: admin } });
  ok("tệp Excel có cột mã giới thiệu và hoa hồng", (await r.text()).includes(aff.code));

  // Quản trị gắn mã cho đơn khách quên nhập
  r = await j("POST", "/api/admin/orders/" + id2 + "/affiliate", { code: aff.code }, { Cookie: admin });
  ok("quản trị gắn mã giới thiệu cho đơn", r.ok && (await r.json()).affCode === aff.code);
  ok("quản trị: mã sai bị từ chối", (await j("POST", "/api/admin/orders/" + id2 + "/affiliate", { code: "SAIMA123" }, { Cookie: admin })).status === 400);

  // Đổi mật khẩu, khóa
  r = await j("POST", "/api/aff/login", { email: "MINHANH@photo.vn", password: "sai-mat-khau" });
  ok("đối tác sai mật khẩu → 401", r.status === 401);
  r = await j("POST", "/api/aff/login", { email: "MINHANH@photo.vn", password: "doitac1234" });
  ok("đối tác đăng nhập", r.ok);
  r = await j("PATCH", "/api/aff/me", { bankName: "MB Bank", bankAccount: "999 888", bankHolder: "Tran Minh Anh", phone: "abc" }, { Cookie: affCk });
  ok("đối tác: kiểm tra dữ liệu khi sửa thông tin", r.status === 400);
  await j("PATCH", "/api/admin/affiliates/" + aff.id, { status: "locked" }, { Cookie: admin });
  ok("khóa đối tác → đăng xuất ngay, không đăng nhập lại được", (await fetch(B + "/api/aff/me", { headers: { Cookie: affCk } })).status === 401 && (await j("POST", "/api/aff/login", { email: "minhanh@photo.vn", password: "doitac1234" })).status === 403);
  r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk({ email: "moi@vd.vn", phone: "0911999888", ref: aff.code }) });
  ok("mã của đối tác bị khóa không còn được tính", !(await r.json()).order.affCode);
  ok("quản trị: tỷ lệ hoa hồng tối đa 50%", (await j("PATCH", "/api/admin/affiliates/" + aff.id, { rate: 0.9 }, { Cookie: admin })).status === 400);

  // --- Header bảo mật
  r = await fetch(B + "/");
  const csp = r.headers.get("content-security-policy") || "";
  ok("bảo mật: có CSP chặn mã/khung từ nguồn lạ", /default-src 'self'/.test(csp) && /object-src 'none'/.test(csp) && /frame-ancestors 'self'/.test(csp) && r.headers.get("x-frame-options") === "SAMEORIGIN" && r.headers.get("x-content-type-options") === "nosniff");
  ok("bảo mật: HTTP thường không gửi HSTS", !r.headers.get("strict-transport-security"));
  r = await fetch(B + "/", { headers: { "X-Forwarded-Proto": "https" } });
  ok("bảo mật: HTTPS (sau proxy) bật HSTS", /max-age=\d+/.test(r.headers.get("strict-transport-security") || ""));
  r = await j("POST", "/api/staff/login", { username: "minh.nv", password: "matkhau456" }, { "X-Forwarded-Proto": "https" });
  ok("bảo mật: cookie đăng nhập qua HTTPS có Secure + HttpOnly + SameSite", /;\s*Secure/.test(r.headers.get("set-cookie") || "") && /HttpOnly/.test(r.headers.get("set-cookie") || "") && /SameSite=Lax/.test(r.headers.get("set-cookie") || ""));
  ok("bảo mật: không lộ phiên bản máy chủ", !r.headers.get("x-powered-by"));
  ok("bảo mật: không đọc được tệp ngoài thư mục website", (await fetch(B + "/..%2f..%2fpackage.json")).status === 404 && (await fetch(B + "/%2e%2e/server.js")).status === 404);
  ok("khóa phiên được lưu (không đăng xuất khách khi khởi động lại)", (await db.settings.get("session_secret")) === config.SESSION_SECRET);

  console.log(`\n${pass} đạt, ${fail} lỗi`);
  await cleanup();
  process.exit(fail ? 1 : 0);
})().catch(async (e) => { console.error(e); await cleanup(); process.exit(1); });
