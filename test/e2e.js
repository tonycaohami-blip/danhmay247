// Kiểm thử tích hợp: chạy server với dữ liệu tạm, chặn email để lấy liên kết đăng nhập
const path = require("path"), fs = require("fs"), os = require("os");
const ROOT = path.join(__dirname, "..");
const DATA = fs.mkdtempSync(path.join(os.tmpdir(), "dm247-"));
Object.assign(process.env, { PORT: "3999", DATA_DIR: DATA, ADMIN_PASSWORD: "mat-khau-thu", SEPAY_API_KEY: "k", SITE_URL: "http://localhost:3999", SMTP_HOST: "", SMTP_USER: "", SMTP_PASS: "" });

const mailer = require(path.join(ROOT, "server/mailer.js"));
const sent = [];
mailer.ready = true;
mailer.loginLink = async (email, url) => { sent.push({ email, url }); return true; };

require(path.join(ROOT, "server.js"));
const { db, flush } = require(path.join(ROOT, "server/store.js"));
const { purgeOldFiles } = require(path.join(ROOT, "server/api.js"));

const B = "http://localhost:3999";
const H = { Origin: B };
let pass = 0, fail = 0;
const ok = (name, cond, extra) => { cond ? pass++ : fail++; console.log((cond ? "  ✓ " : "  ✗ ") + name + (extra ? " — " + extra : "")); };
const j = (method, url, body, headers) => fetch(B + url, { method, headers: Object.assign({ "Content-Type": "application/json" }, H, headers), body: body ? JSON.stringify(body) : undefined, redirect: "manual" });

(async () => {
  await new Promise((r) => setTimeout(r, 300));

  // --- Đặt hàng hợp lệ & không hợp lệ
  const mk = (over) => { const f = new FormData(); const v = Object.assign({ service: "transcription", type: "interview", urgency: "48h", qty: "30", speakers: "2", extras: "timestamps", name: "Lê Văn Đạt", email: "Dat.Le@Example.com", phone: "+84 988058030", agree: "on" }, over); for (const k in v) f.append(k, v[k]); return f; };
  let r = await fetch(B + "/api/orders", { method: "POST", headers: H, body: mk() });
  let d = await r.json();
  ok("tạo đơn chuyển âm", r.status === 201, d.order && d.order.id + " " + d.order.price.total + "đ");
  const id = d.order.id, token = d.token;
  ok("email được chuẩn hóa chữ thường", d.order.email === "dat.le@example.com");
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

  // --- Liên hệ & đánh giá
  r = await j("POST", "/api/contact", { name: "A", email: "a@b.vn", message: "Cần báo giá 100 trang" });
  ok("gửi liên hệ", r.status === 201);
  r = await j("POST", "/api/reviews", { name: "Hà", text: "Dịch vụ rất tốt, giao đúng hẹn và chính xác.", rating: 5 });
  ok("gửi đánh giá (chờ duyệt)", r.status === 201);
  r = await fetch(B + "/api/reviews"); ok("đánh giá chưa duyệt không hiển thị", (await r.json()).reviews.length === 0);

  // --- Quản trị
  r = await j("POST", "/api/admin/login", { password: "mat-khau-thu" });
  const admin = (r.headers.get("set-cookie") || "").split(";")[0];
  ok("đăng nhập quản trị", r.ok && admin.startsWith("dm_admin="));
  const rid = db.reviews[0].id;
  r = await j("PATCH", "/api/admin/reviews/" + rid, { approved: true }, { Cookie: admin });
  r = await fetch(B + "/api/reviews"); ok("duyệt → đánh giá hiển thị", (await r.json()).reviews.length === 1);
  r = await j("PATCH", "/api/admin/orders/" + id, { status: "paid" }, { Cookie: admin });
  d = await r.json();
  ok("quản trị xác nhận thanh toán thủ công", d.order.status === "paid" && d.order.paySource === "admin" && !!d.order.deadline);
  r = await j("PATCH", "/api/admin/orders/" + id, { status: "done" }, { Cookie: admin });
  ok("hoàn thành đơn", (await r.json()).order.status === "done");

  // --- Tự xóa tệp sau 30 ngày
  const o = db.orders.find((x) => x.id === id);
  fs.mkdirSync(path.join(DATA, "uploads", id), { recursive: true });
  fs.writeFileSync(path.join(DATA, "uploads", id, "x.pdf"), "x");
  o.files.push({ id: "f1", name: "cu.pdf", size: 1, by: "customer", stored: id + "/x.pdf" });
  o.history[o.history.length - 1].at = Date.now() - 31 * 86400e3;
  purgeOldFiles();
  await new Promise((res) => setTimeout(res, 200));
  ok("tệp quá 30 ngày đã bị xóa", !fs.existsSync(path.join(DATA, "uploads", id, "x.pdf")) && o.files[0].purged);
  r = await fetch(B + "/api/orders/" + id + "/files/f1?t=" + token);
  ok("tải tệp đã xóa → 410", r.status === 410);

  // --- Dữ liệu ghi xuống đĩa
  flush();
  const saved = JSON.parse(fs.readFileSync(path.join(DATA, "db.json"), "utf8"));
  ok("db.json lưu đơn, không lưu mã truy cập dạng rõ", saved.orders.length === 1 && !JSON.stringify(saved).includes(token));

  console.log(`\n${pass} đạt, ${fail} lỗi`);
  fs.rmSync(DATA, { recursive: true, force: true });
  process.exit(fail ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
