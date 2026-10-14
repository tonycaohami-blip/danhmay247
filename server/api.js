/**
 * API của Đánh máy 247 — gắn tại /api. Dữ liệu lưu trong MySQL (xem server/db.js).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const express = require("express");
const multer = require("multer");

const config = require("./config");
const db = require("./db");
const { DM, STATUS } = require("./shared");
const mail = require("./mailer");
const sec = require("./security");

const router = express.Router();
router.use(sec.sessionMiddleware);

/* =========================================================
   Tiện ích
   ========================================================= */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const str = (v, max) => String(v == null ? "" : v).trim().slice(0, max);
const now = () => Date.now();
const PAID = ["paid", "progress", "review", "done"];

class HttpError extends Error { constructor(status, msg) { super(msg); this.status = status; } }
const wrap = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

async function newOrderId() {
  for (;;) {
    const id = "DM" + Math.floor(100000 + Math.random() * 900000);
    if (!(await db.orders.exists(id))) return id;
  }
}

/** Multer giải mã tên tệp UTF-8 thành latin1 — sửa lại để giữ tiếng Việt. */
function fixName(name) {
  if (/^[\x00-\xff]*$/.test(name)) {
    const u = Buffer.from(name, "latin1").toString("utf8");
    if (!u.includes("�")) return u;
  }
  return name;
}
function safeFileName(name) {
  return fixName(name).replace(/[\\/:*?"<>|\x00-\x1f]/g, "_").slice(0, 150) || "tep";
}

/** Ai được xem đơn: quản trị, chủ tài khoản (đã đăng nhập), hoặc người có mã truy cập của đơn. */
function canAccess(req, o) {
  if (req.isAdmin) return true;
  if (req.userEmail && req.userEmail === o.email) return true;
  const t = req.get("X-Order-Token") || req.query.t;
  return !!(t && sec.safeEqual(sec.sha256(t), o.tokenHash));
}
async function getAccessibleOrder(req) {
  const o = await db.orders.get(String(req.params.id).slice(0, 12));
  if (!o || !canAccess(req, o)) throw new HttpError(404, "Không tìm thấy đơn hàng.");
  return o;
}
async function getOrderOr404(id) {
  const o = await db.orders.get(String(id).slice(0, 12));
  if (!o) throw new HttpError(404, "Không tìm thấy đơn.");
  return o;
}

/** Dữ liệu đơn trả về trình duyệt (bỏ thông tin nội bộ). */
function publicOrder(o, admin) {
  const out = Object.assign({}, o);
  delete out.tokenHash;
  out.files = o.files.map((f) => ({ id: f.id, name: f.name, size: f.size, by: f.by, at: f.at, purged: !!f.purged }));
  if (!admin) delete out.notes;
  return out;
}

/** Đổi trạng thái + ghi lịch sử. `from`: chỉ đổi khi trạng thái hiện tại thuộc danh sách này. */
async function setStatus(id, status, from) {
  const changed = await db.orders.update(id, { status }, from);
  if (changed) await db.orders.addHistory(id, status);
  return changed;
}

/** Ghi nhận thanh toán (từ webhook ngân hàng hoặc quản trị xác nhận). Trả về true nếu lần này mới chuyển sang "đã thanh toán". */
async function markPaid(id, amount, source) {
  const o = await db.orders.get(id);
  if (!o) return false;
  const t = now();
  const changed = await db.orders.update(id, {
    status: "paid", paidAt: t, paidAmount: amount, paySource: source, deadline: t + o.hours * 3600e3
  }, ["unpaid", "verifying", "cancelled"]);
  if (!changed) return false;
  await db.orders.addHistory(id, "paid", t);
  await db.orders.addMessage(id, false, "Hỗ trợ Đánh máy 247", "Chúng tôi đã nhận được thanh toán. Đơn hàng đang được phân công cho chuyên viên phù hợp.");
  mail.paymentConfirmed(await db.orders.get(id));
  return true;
}

/* =========================================================
   Tải tệp (lưu trên đĩa, thông tin tệp lưu MySQL)
   ========================================================= */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    const dir = path.join(config.UPLOAD_DIR, "_tmp");
    fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename(req, file, cb) {
    cb(null, sec.randomToken(12) + path.extname(safeFileName(file.originalname)).toLowerCase().slice(0, 10));
  }
});
const BLOCKED_EXT = /\.(exe|bat|cmd|com|msi|scr|ps1|vbs|js|jar|sh|php|html?|svg)$/i;
const upload = multer({
  storage,
  limits: { files: config.MAX_FILES, fileSize: config.MAX_FILE_MB * 1024 * 1024, fields: 30, fieldSize: 20000 },
  fileFilter(req, file, cb) {
    if (BLOCKED_EXT.test(file.originalname)) return cb(new HttpError(400, "Định dạng tệp “" + safeFileName(file.originalname) + "” không được hỗ trợ."));
    cb(null, true);
  }
});
function removeTemp(files) { (files || []).forEach((f) => fs.unlink(f.path, () => {})); }
/** Chuyển tệp tạm vào DATA_DIR/uploads/<mã đơn>/ và trả về thông tin tệp để lưu MySQL. */
function moveFiles(orderId, files, by) {
  if (!files || !files.length) return [];
  const dir = path.join(config.UPLOAD_DIR, orderId);
  fs.mkdirSync(dir, { recursive: true });
  return files.map((f) => {
    const id = sec.randomToken(9);
    const dest = path.join(dir, id + path.extname(f.filename));
    fs.renameSync(f.path, dest);
    return { id, name: safeFileName(f.originalname), size: f.size, type: f.mimetype, by, at: now(), stored: path.relative(config.UPLOAD_DIR, dest).split(path.sep).join("/") };
  });
}

/* =========================================================
   ĐƠN HÀNG
   ========================================================= */
router.post("/orders", sec.rateLimit("order", 15, 3600e3), upload.array("files", config.MAX_FILES), wrap(async (req, res) => {
  const b = req.body;
  let moved = [];
  try {
    const service = str(b.service, 20);
    const svc = DM.prices[service];
    if (!svc || !svc.types) throw new HttpError(400, "Loại dịch vụ không hợp lệ.");
    const type = svc.types.find((t) => t.key === b.type);
    if (!type) throw new HttpError(400, "Loại chuyển đổi không hợp lệ.");
    const urg = DM.urgencies.find((u) => u.key === b.urgency && svc.base[u.key]);
    if (!urg) throw new HttpError(400, "Thời hạn không hợp lệ.");
    const qty = parseInt(b.qty, 10);
    if (!(qty >= 1 && qty <= 5000)) throw new HttpError(400, "Số lượng phải từ 1 đến 5000.");
    const speakers = service === "transcription" ? (svc.speakers.find((s) => s.key === b.speakers) || svc.speakers[0]) : null;
    const extras = str(b.extras, 100).split(",").filter((k) => svc.extras.some((e) => e.key === k));
    const promoCode = str(b.promo, 30).toUpperCase();
    const promo = DM.prices.promos[promoCode] ? promoCode : null;

    const name = str(b.name, 100), email = str(b.email, 160).toLowerCase(), phone = str(b.phone, 30);
    if (!name) throw new HttpError(400, "Vui lòng nhập họ tên.");
    if (!EMAIL_RE.test(email)) throw new HttpError(400, "Email không hợp lệ.");
    if (!/^\+?[0-9 .\-]{8,20}$/.test(phone)) throw new HttpError(400, "Số điện thoại không hợp lệ.");
    if (b.agree !== "on" && b.agree !== "true") throw new HttpError(400, "Vui lòng đồng ý với điều khoản.");
    const docType = DM.docTypes.includes(b.docType) ? b.docType : DM.docTypes[0];

    // Máy chủ tự tính giá — không dùng giá gửi từ trình duyệt
    const price = DM.calcPrice({ service, type: type.key, urgency: urg.key, qty, speakers: speakers && speakers.key, extras, promo });

    const token = sec.randomToken(24);
    const t = now();
    const id = await newOrderId();
    moved = moveFiles(id, req.files, "customer");
    const o = {
      id, created: t, tokenHash: sec.sha256(token),
      name, email, phone,
      service, serviceLabel: service === "retyping" ? "Đánh máy lại" : "Chuyển âm",
      type: type.key, typeLabel: type.label,
      urgency: urg.key, urgencyLabel: urg.label, hours: urg.hours,
      qty, unit: svc.unit, speakers: speakers ? speakers.label : null,
      extras: extras.map((k) => { const x = svc.extras.find((e) => e.key === k); return x.label.replace(/<[^>]+>/g, "") + " (+" + x.pct + "%)"; }),
      docType, instructions: str(b.instructions, 5000),
      files: moved, price, promo,
      status: "unpaid", history: [{ status: "unpaid", at: t }],
      messages: [{ me: false, from: "Hỗ trợ Đánh máy 247", text: "Cảm ơn bạn đã đặt hàng! Chúng tôi sẽ phân công chuyên viên ngay sau khi nhận được thanh toán.", at: t }]
    };
    await db.orders.create(o);
    await db.users.ensure(email, name, phone);
    mail.orderCreated(o, token);
    res.status(201).json({ order: publicOrder(o), token });
  } catch (e) {
    removeTemp(req.files);
    moved.forEach((f) => fs.rm(path.join(config.UPLOAD_DIR, f.stored), { force: true }, () => {}));
    throw e;
  }
}));

router.get("/orders", wrap(async (req, res) => {
  if (!req.userEmail) return res.json({ orders: [] });
  res.json({ orders: (await db.orders.byEmail(req.userEmail)).map((o) => publicOrder(o)) });
}));

router.get("/orders/:id", wrap(async (req, res) => {
  res.json({ order: publicOrder(await getAccessibleOrder(req)) });
}));

router.post("/orders/:id/claim-paid", sec.rateLimit("claim", 10, 600e3), wrap(async (req, res) => {
  const o = await getAccessibleOrder(req);
  if (await setStatus(o.id, "verifying", ["unpaid"])) {
    await db.orders.addMessage(o.id, false, "Hỗ trợ Đánh máy 247", "Chúng tôi đang đối soát giao dịch chuyển khoản của bạn và sẽ xác nhận trong ít phút (giờ hành chính).");
    mail.paymentClaimed(o);
  }
  res.json({ order: publicOrder(await db.orders.get(o.id)) });
}));

router.post("/orders/:id/cancel", wrap(async (req, res) => {
  const o = await getAccessibleOrder(req);
  if (!(await setStatus(o.id, "cancelled", ["unpaid", "verifying"]))) {
    throw new HttpError(400, "Đơn đã thanh toán không thể tự hủy. Vui lòng liên hệ hỗ trợ.");
  }
  res.json({ order: publicOrder(await db.orders.get(o.id)) });
}));

router.post("/orders/:id/messages", sec.rateLimit("msg", 30, 600e3), wrap(async (req, res) => {
  const o = await getAccessibleOrder(req);
  const text = str(req.body && req.body.text, 2000);
  if (!text) throw new HttpError(400, "Tin nhắn trống.");
  await db.orders.addMessage(o.id, true, o.name, text);
  mail.newMessage(o, true, text);
  res.json({ order: publicOrder(await db.orders.get(o.id)) });
}));

router.get("/orders/:id/files/:fileId", wrap(async (req, res) => {
  const o = await getAccessibleOrder(req);
  const f = o.files.find((x) => x.id === req.params.fileId);
  if (!f) throw new HttpError(404, "Không tìm thấy tệp.");
  if (!f.stored) throw new HttpError(410, "Tệp đã được xóa theo chính sách lưu trữ 30 ngày.");
  const full = path.join(config.UPLOAD_DIR, f.stored);
  if (!full.startsWith(config.UPLOAD_DIR + path.sep) || !fs.existsSync(full)) throw new HttpError(404, "Tệp không còn tồn tại trên máy chủ.");
  res.setHeader("Cache-Control", "private, no-store");
  res.download(full, f.name);
}));

/* =========================================================
   TÀI KHOẢN — đăng nhập bằng liên kết gửi qua email (không mật khẩu)
   ========================================================= */
router.post("/auth/request-link", sec.rateLimit("login", 5, 900e3), wrap(async (req, res) => {
  const email = str(req.body && req.body.email, 160).toLowerCase();
  if (!EMAIL_RE.test(email)) throw new HttpError(400, "Email không hợp lệ.");
  if (!mail.ready) throw new HttpError(503, "Hệ thống email chưa được cấu hình. Vui lòng dùng liên kết trong email đơn hàng hoặc liên hệ " + DM.site.phone + ".");
  const token = sec.randomToken(32);
  await db.loginTokens.create(sec.sha256(token), email, now() + 30 * 60e3);
  await mail.loginLink(email, config.SITE_URL + "/api/auth/verify?token=" + encodeURIComponent(token));
  res.json({ ok: true });
}));

router.get("/auth/verify", wrap(async (req, res) => {
  const email = await db.loginTokens.consume(sec.sha256(String(req.query.token || "")));
  if (!email) return res.redirect("/tai-khoan?login=expired");
  await db.users.ensure(email, email.split("@")[0], null);
  sec.startUserSession(res, email);
  res.redirect("/tai-khoan");
}));

router.post("/auth/logout", (req, res) => {
  sec.clearSession(res, sec.USER_COOKIE);
  res.json({ ok: true });
});

router.get("/me", wrap(async (req, res) => {
  const u = req.userEmail && (await db.users.get(req.userEmail));
  res.json({ user: u ? { email: u.email, name: u.name, phone: u.phone || "" } : null, emailReady: mail.ready });
}));

router.patch("/me", wrap(async (req, res) => {
  const u = req.userEmail && (await db.users.get(req.userEmail));
  if (!u) throw new HttpError(401, "Vui lòng đăng nhập.");
  const name = str(req.body.name, 100), phone = str(req.body.phone, 30);
  if (!name) throw new HttpError(400, "Vui lòng nhập họ tên.");
  await db.users.update(u.email, name, phone);
  res.json({ user: { email: u.email, name, phone } });
}));

/* =========================================================
   LIÊN HỆ & ĐÁNH GIÁ
   ========================================================= */
router.post("/contact", sec.rateLimit("contact", 5, 3600e3), wrap(async (req, res) => {
  const b = req.body || {};
  const c = {
    id: sec.randomToken(8), at: now(),
    name: str(b.name, 100), email: str(b.email, 160), phone: str(b.phone, 30),
    subject: str(b.subject, 80) || "Khác", message: str(b.message, 3000)
  };
  if (!c.name || !EMAIL_RE.test(c.email) || c.message.length < 10) throw new HttpError(400, "Vui lòng điền đầy đủ họ tên, email hợp lệ và nội dung (tối thiểu 10 ký tự).");
  await db.contacts.create(c);
  mail.contact(c);
  res.status(201).json({ ok: true });
}));

const publicReview = (r) => ({ id: r.id, name: r.name, job: r.job, type: r.type, rating: r.rating, text: r.text, date: r.date });
router.get("/reviews", wrap(async (req, res) => {
  res.json({ reviews: (await db.reviews.approved()).map(publicReview) });
}));
router.post("/reviews", sec.rateLimit("review", 3, 3600e3), wrap(async (req, res) => {
  const b = req.body || {};
  const r = {
    id: sec.randomToken(8), approved: false, at: now(),
    name: str(b.name, 40), job: str(b.job, 40) || "Khách hàng", type: str(b.type, 40) || "Đánh máy lại",
    rating: Math.min(5, Math.max(1, parseInt(b.rating, 10) || 5)), text: str(b.text, 800)
  };
  if (!r.name || r.text.length < 20) throw new HttpError(400, "Vui lòng nhập tên và nội dung tối thiểu 20 ký tự.");
  await db.reviews.create(r);
  res.status(201).json({ ok: true, pending: true });
}));

/* =========================================================
   WEBHOOK ĐỐI SOÁT CHUYỂN KHOẢN — SePay (https://sepay.vn)
   Cấu hình trên SePay: URL = {SITE_URL}/api/webhooks/sepay, kiểu xác thực "API Key".
   ========================================================= */
router.post("/webhooks/sepay", wrap(async (req, res) => {
  if (!config.SEPAY_API_KEY) return res.status(503).json({ success: false, message: "Webhook chưa bật" });
  const auth = req.get("Authorization") || "";
  if (!sec.safeEqual(auth.replace(/^Apikey\s+/i, ""), config.SEPAY_API_KEY)) return res.status(401).json({ success: false });

  const p = req.body || {};
  if (p.transferType !== "in") return res.json({ success: true });
  const content = [p.code, p.content, p.description].filter(Boolean).join(" ");
  const m = content.toUpperCase().match(/DM\s?(\d{6})/);
  const amount = Math.round(Number(p.transferAmount) || 0);
  const orderId = m ? "DM" + m[1] : null;

  // tx_id là khóa duy nhất → giao dịch gửi lại (retry) sẽ bị bỏ qua
  const payId = await db.payments.record({ txId: String(p.id || p.referenceCode || "") || null, amount, content: String(p.content || "").slice(0, 300), account: p.accountNumber, orderId });
  if (payId === false) return res.json({ success: true });

  let result;
  const o = orderId && (await db.orders.get(orderId));
  if (!o) result = "Không khớp mã đơn";
  else {
    await db.orders.addReceived(o.id, amount);
    // Đọc lại sau khi cộng nguyên tử trong MySQL, để hai giao dịch đến cùng lúc vẫn được tính đủ
    const received = (await db.orders.get(o.id)).receivedAmount;
    if (received >= o.price.total) {
      result = (await markPaid(o.id, received, "sepay")) ? "Đã xác nhận tự động" : "Đơn đã thanh toán trước đó";
    } else {
      result = "Thiếu tiền (" + received + "/" + o.price.total + ")";
      await db.orders.addMessage(o.id, false, "Hệ thống", "Đã nhận " + amount.toLocaleString("vi-VN") + " đ, còn thiếu " + (o.price.total - received).toLocaleString("vi-VN") + " đ so với tổng đơn.");
    }
  }
  await db.payments.setResult(payId, result);
  res.json({ success: true });
}));

/* =========================================================
   QUẢN TRỊ
   ========================================================= */
router.post("/admin/login", sec.rateLimit("admin-login", 8, 900e3), (req, res) => {
  if (!config.ADMIN_PASSWORD) return res.status(503).json({ error: "Chưa đặt mật khẩu quản trị (biến môi trường ADMIN_PASSWORD)." });
  if (!sec.safeEqual(String((req.body && req.body.password) || ""), config.ADMIN_PASSWORD)) return res.status(401).json({ error: "Mật khẩu không đúng." });
  sec.startAdminSession(res);
  res.json({ ok: true });
});
router.post("/admin/logout", (req, res) => { sec.clearSession(res, sec.ADMIN_COOKIE); res.json({ ok: true }); });

const adminOnly = (req, res, next) => (req.isAdmin ? next() : res.status(401).json({ error: "Vui lòng đăng nhập quản trị." }));

router.get("/admin/summary", adminOnly, wrap(async (req, res) => {
  const [orders, stats, contacts, newContacts, reviews, pendingReviews, payments] = await Promise.all([
    db.orders.all(1000), db.orders.stats(), db.contacts.list(), db.contacts.unread(), db.reviews.all(), db.reviews.pending(), db.payments.recent()
  ]);
  res.json({
    stats: Object.assign(stats, { newContacts, pendingReviews }),
    orders: orders.map((o) => publicOrder(o, true)),
    contacts, reviews, payments,
    email: mail.ready, sepay: !!config.SEPAY_API_KEY
  });
}));

router.patch("/admin/orders/:id", adminOnly, wrap(async (req, res) => {
  const o = await getOrderOr404(req.params.id);
  const status = String(req.body.status || "");
  if (!STATUS[status]) throw new HttpError(400, "Trạng thái không hợp lệ.");
  if (status === "paid" && !o.paidAt) await markPaid(o.id, o.price.total, "admin");
  else if (status !== o.status) {
    await setStatus(o.id, status);
    await db.orders.addMessage(o.id, false, "Hệ thống", "Trạng thái đơn hàng: “" + STATUS[status] + "”.");
    mail.statusChanged(Object.assign({}, o, { status }));
  }
  if (typeof req.body.notes === "string") await db.orders.update(o.id, { notes: str(req.body.notes, 3000) });
  res.json({ order: publicOrder(await db.orders.get(o.id), true) });
}));

router.post("/admin/orders/:id/messages", adminOnly, wrap(async (req, res) => {
  const o = await getOrderOr404(req.params.id);
  const text = str(req.body && req.body.text, 2000);
  if (!text) throw new HttpError(400, "Tin nhắn trống.");
  await db.orders.addMessage(o.id, false, "Chuyên viên Đánh máy 247", text);
  mail.newMessage(o, false, text);
  res.json({ order: publicOrder(await db.orders.get(o.id), true) });
}));

router.post("/admin/orders/:id/result", adminOnly, upload.array("files", config.MAX_FILES), wrap(async (req, res) => {
  let o;
  try { o = await getOrderOr404(req.params.id); } catch (e) { removeTemp(req.files); throw e; }
  if (!req.files || !req.files.length) throw new HttpError(400, "Chưa chọn tệp.");
  for (const f of moveFiles(o.id, req.files, "admin")) await db.orders.addFile(o.id, f);
  if (req.body.complete === "1" && o.status !== "done") {
    await setStatus(o.id, "done");
    await db.orders.addMessage(o.id, false, "Chuyên viên Đánh máy 247", "Tài liệu của bạn đã hoàn thành! Bấm vào tệp để tải về. Nếu cần chỉnh sửa, hãy nhắn cho chúng tôi trong vòng 14 ngày.");
    mail.statusChanged(Object.assign({}, o, { status: "done" }));
  } else {
    await db.orders.addMessage(o.id, false, "Chuyên viên Đánh máy 247", "Đã gửi tệp: " + req.files.map((f) => safeFileName(f.originalname)).join(", "));
  }
  res.json({ order: publicOrder(await db.orders.get(o.id), true) });
}));

router.patch("/admin/contacts/:id", adminOnly, wrap(async (req, res) => {
  res.json({ ok: await db.contacts.setRead(req.params.id, !!req.body.read) });
}));
router.patch("/admin/reviews/:id", adminOnly, wrap(async (req, res) => {
  res.json({ ok: await db.reviews.setApproved(req.params.id, !!req.body.approved) });
}));
router.delete("/admin/reviews/:id", adminOnly, wrap(async (req, res) => {
  res.json({ ok: await db.reviews.remove(req.params.id) });
}));

/* =========================================================
   Tự xóa tệp 30 ngày sau khi đơn hoàn thành / hủy (theo Chính sách bảo mật)
   ========================================================= */
const RETAIN_MS = 30 * 86400e3;
async function purgeOldFiles() {
  try {
    const rows = await db.orders.closedWithFiles(now() - RETAIN_MS);
    for (const r of rows) {
      await fs.promises.rm(path.join(config.UPLOAD_DIR, r.stored), { force: true });
      await db.orders.markFilePurged(r.file_id);
    }
    // Tệp tạm bị bỏ dở (tải lên lỗi) quá 1 ngày
    const tmp = path.join(config.UPLOAD_DIR, "_tmp");
    for (const n of await fs.promises.readdir(tmp).catch(() => [])) {
      const st = await fs.promises.stat(path.join(tmp, n)).catch(() => null);
      if (st && now() - st.mtimeMs > 86400e3) await fs.promises.rm(path.join(tmp, n), { force: true });
    }
    return rows.length;
  } catch (e) {
    console.error("[purge]", e.message);
    return 0;
  }
}
function startJobs() {
  setTimeout(purgeOldFiles, 60e3).unref();
  setInterval(purgeOldFiles, 6 * 3600e3).unref();
}

/* ---------- Lỗi ---------- */
router.use((req, res) => res.status(404).json({ error: "Không tìm thấy API." }));
// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    const msg = {
      LIMIT_FILE_SIZE: "Mỗi tệp tối đa " + config.MAX_FILE_MB + "MB.",
      LIMIT_FILE_COUNT: "Chỉ được tải lên tối đa " + config.MAX_FILES + " tệp.",
      LIMIT_UNEXPECTED_FILE: "Chỉ được tải lên tối đa " + config.MAX_FILES + " tệp."
    }[err.code] || "Tải tệp thất bại.";
    return res.status(400).json({ error: msg });
  }
  if (err.status) return res.status(err.status).json({ error: err.message });
  if (err.type === "entity.parse.failed") return res.status(400).json({ error: "Dữ liệu không hợp lệ." });
  console.error("[api]", err);
  if (err.code && /^(ECONNREFUSED|PROTOCOL_CONNECTION_LOST|ER_ACCESS_DENIED_ERROR|ETIMEDOUT)$/.test(err.code)) {
    return res.status(503).json({ error: "Hệ thống đang bảo trì, vui lòng thử lại sau ít phút hoặc gọi " + DM.site.phone + "." });
  }
  res.status(500).json({ error: "Lỗi máy chủ, vui lòng thử lại." });
});

module.exports = { router, publicOrder, purgeOldFiles, startJobs };
