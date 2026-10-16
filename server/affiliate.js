/**
 * Chương trình đối tác (affiliate) - dành cho cửa hàng photocopy, văn phòng phẩm, giáo viên, cộng tác viên…
 *
 *  - Đối tác đăng ký → quản trị duyệt → nhận mã giới thiệu (vd PHOTO123), liên kết /?ref=PHOTO123 và mã QR in poster
 *  - Khách bấm liên kết (ghi nhận 30 ngày trên trình duyệt) hoặc tự nhập mã khi đặt hàng → đơn gắn với đối tác
 *  - Hoa hồng = tỷ lệ (mặc định 30%) × giá trị đơn, chỉ được duyệt khi đơn HOÀN THÀNH; đơn hủy không tính
 *  - Quản trị bấm "Chi trả" → ghi nhận một lần chi trả cho mọi hoa hồng đã duyệt, đối tác nhận email
 *  - Đối tác chỉ thấy mã đơn, dịch vụ, giá trị và hoa hồng - KHÔNG thấy tên, email, số điện thoại của khách
 */
"use strict";

const QRCode = require("qrcode");
const config = require("./config");
const db = require("./db");
const sec = require("./security");
const mail = require("./mailer");
const { DM, fmt } = require("./shared");

const PROGRAM = () => Object.assign({ rate: 0.3, cookieDays: 30, minPayout: 100000, payoutDay: 5 }, DM.affiliate || {});
const CODE_RE = /^[A-Z0-9]{4,12}$/;
const normCode = (c) => { const s = String(c || "").trim().toUpperCase(); return CODE_RE.test(s) ? s : null; };
const digits = (s) => String(s || "").replace(/\D/g, "");
const now = () => Date.now();

/* ---------- Hoa hồng ---------- */
const commission = (o) => (o.affId ? Math.round((o.price ? o.price.total : 0) * (o.affRate || 0)) : 0);
/** waiting: chờ khách thanh toán · processing: đang làm · approved: chờ chi trả · paid: đã chi trả · void: hủy */
function commissionStatus(o) {
  if (o.status === "cancelled") return "void";
  if (o.status === "done") return o.affPaidAt ? "paid" : "approved";
  if (["paid", "progress", "review"].includes(o.status)) return "processing";
  return "waiting";
}
/** Đơn hiển thị cho đối tác - không có thông tin khách hàng. */
const affOrderView = (o) => ({
  id: o.id, created: o.created, service: o.serviceLabel, typeLabel: o.typeLabel, qty: o.qty, unit: o.unit,
  total: o.price.total, rate: o.affRate, commission: commission(o), cstatus: commissionStatus(o),
  doneAt: o.status === "done" ? ((o.history || []).filter((h) => h.status === "done").pop() || {}).at || null : null,
  paidOutAt: o.affPaidAt || null
});
function summarize(orders, clicks) {
  const s = { clicks: clicks || 0, orders: orders.length, done: 0, revenue: 0, waiting: 0, processing: 0, approved: 0, paid: 0, total: 0 };
  for (const o of orders) {
    const c = commission(o), st = commissionStatus(o);
    if (st === "void") continue;
    s[st] += c;
    if (o.status === "done") { s.done++; s.revenue += o.price.total; s.total += c; }
  }
  return s;
}
const publicAff = (a) => ({
  id: a.id, code: a.code, email: a.email, name: a.name, shop: a.shop, phone: a.phone, address: a.address || "", city: a.city || "",
  bank: a.bank || {}, status: a.status, rate: a.rate, clicks: a.clicks || 0, created: a.created, approvedAt: a.approvedAt || null,
  link: config.SITE_URL + "/?ref=" + a.code
});

/** Tạo mã giới thiệu dễ đọc từ tên cửa hàng: "Photo Minh Anh" → MINHAN482 */
async function newCode(shop) {
  const base = String(shop || "").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d").toUpperCase()
    .replace(/\b(PHOTO|PHOTOCOPY|COPY|TIEM|CUA|HANG|VPP|IN|AN)\b/g, "").replace(/[^A-Z0-9]/g, "").slice(0, 6) || "DM";
  for (let i = 0; i < 50; i++) {
    const code = (base.length >= 3 ? base : base + "DT") + String(Math.floor(100 + Math.random() * 900));
    if (!(await db.affiliates.byCode(code))) return code;
  }
  return "DT" + sec.randomToken(6).toUpperCase().replace(/[^A-Z0-9]/g, "7").slice(0, 8);
}

/** Gắn đơn với đối tác khi đặt hàng (mã từ liên kết đã lưu hoặc khách tự nhập). Chặn tự giới thiệu. */
async function attachRef(o, code) {
  code = normCode(code);
  if (!code) return null;
  const a = await db.affiliates.byCode(code);
  if (!a || a.status !== "active") return null;
  if (a.email === o.email || (digits(a.phone) && digits(a.phone) === digits(o.phone))) return null;
  o.affId = a.id; o.affCode = a.code; o.affRate = a.rate;
  return a;
}

/** Thông báo cho đối tác (chuông trên trang đối tác). */
function affEvents(a, orders, payouts) {
  const out = [];
  const ev = (id, kind, at, title, text, orderId) => ({ id, kind, at, title, text, orderId: orderId || null });
  if (a.approvedAt) out.push(ev(a.id + ":ok", "done", a.approvedAt, "Tài khoản đối tác đã được duyệt", "Mã " + a.code + " đã hoạt động. Hãy in poster QR dán tại cửa hàng."));
  for (const o of orders) {
    out.push(ev(o.id + ":new", "new", o.created, "Khách mới đặt đơn #" + o.id, o.typeLabel + " · " + fmt(o.price.total) + " · hoa hồng dự kiến " + fmt(commission(o)), o.id));
    for (const h of o.history || []) {
      if (h.status === "done") out.push(ev(o.id + ":done:" + h.at, "paid", h.at, "Hoa hồng được duyệt - đơn #" + o.id, "+" + fmt(commission(o)) + " chờ chi trả", o.id));
      if (h.status === "cancelled") out.push(ev(o.id + ":cancel:" + h.at, "cancel", h.at, "Đơn #" + o.id + " đã hủy", "Đơn hủy không tính hoa hồng.", o.id));
    }
  }
  for (const p of payouts) out.push(ev(p.id, "pay", p.at, "Đã chi trả " + fmt(p.amount), p.orderIds.length + " đơn · chuyển vào tài khoản ngân hàng đã đăng ký"));
  return out.filter((e) => e.at).sort((x, y) => y.at - x.at).slice(0, 40);
}

/* =========================================================
   API
   ========================================================= */
function register(router, h) {
  const { wrap, HttpError, adminOnly, str, EMAIL_RE } = h;
  const P = PROGRAM;

  const readBank = (b) => ({ bankName: str(b.bankName, 120), account: str(b.bankAccount, 40).replace(/\s+/g, ""), holder: str(b.bankHolder, 100).toUpperCase() });

  /** Xác thực đối tác: phiên hợp lệ + tài khoản chưa bị khóa + chưa đổi mật khẩu sau khi đăng nhập. */
  const affOnly = wrap(async (req, res, next) => {
    const s = req.affSession;
    const a = s && (await db.affiliates.get(s.id));
    if (!a || a.status === "locked" || (a.sessionVersion || 1) !== s.v) {
      sec.clearSession(res, sec.AFF_COOKIE);
      throw new HttpError(401, "Vui lòng đăng nhập tài khoản đối tác.");
    }
    req.aff = a;
    next();
  });

  router.post("/aff/register", sec.rateLimit("aff-register", 5, 3600e3), wrap(async (req, res) => {
    const b = req.body || {};
    const a = {
      name: str(b.name, 100), shop: str(b.shop, 150), phone: str(b.phone, 30), email: str(b.email, 160).toLowerCase(),
      address: str(b.address, 255), city: str(b.city, 80), bank: readBank(b)
    };
    if (!a.name || !a.shop) throw new HttpError(400, "Vui lòng nhập tên cửa hàng và người liên hệ.");
    if (!/^\+?[0-9 .\-]{8,20}$/.test(a.phone)) throw new HttpError(400, "Số điện thoại không hợp lệ.");
    if (!EMAIL_RE.test(a.email)) throw new HttpError(400, "Email không hợp lệ.");
    if (String(b.password || "").length < 8) throw new HttpError(400, "Mật khẩu tối thiểu 8 ký tự.");
    if (b.agree !== true && b.agree !== "on" && b.agree !== "true") throw new HttpError(400, "Vui lòng đồng ý với điều khoản chương trình đối tác.");
    if (await db.affiliates.byEmail(a.email)) throw new HttpError(409, "Email này đã đăng ký đối tác. Hãy đăng nhập.");
    Object.assign(a, {
      id: "AF" + sec.randomToken(6).replace(/[^a-zA-Z0-9]/g, "x"), code: await newCode(a.shop),
      passHash: sec.hashPassword(b.password), sessionVersion: 1, status: "pending", rate: P().rate, created: now()
    });
    await db.affiliates.create(a);
    mail.affRegistered(a);
    sec.startAffSession(res, a);
    res.status(201).json({ affiliate: publicAff(a) });
  }));

  router.post("/aff/login", sec.rateLimit("aff-login", 10, 900e3), wrap(async (req, res) => {
    const email = str(req.body && req.body.email, 160).toLowerCase();
    const a = email && (await db.affiliates.byEmail(email));
    if (!a || !sec.checkPassword(String((req.body && req.body.password) || ""), a.passHash)) throw new HttpError(401, "Sai email hoặc mật khẩu.");
    if (a.status === "locked") throw new HttpError(403, "Tài khoản đối tác đã bị khóa. Vui lòng liên hệ " + DM.site.phone + ".");
    await db.affiliates.update(a.id, { lastLogin: now() });
    sec.startAffSession(res, a);
    res.json({ affiliate: publicAff(a) });
  }));
  router.post("/aff/logout", (req, res) => { sec.clearSession(res, sec.AFF_COOKIE); res.json({ ok: true }); });

  /** Kiểm tra mã khi khách nhập ở trang đặt hàng - chỉ trả về tên cửa hàng. */
  router.get("/aff/check", sec.rateLimit("aff-check", 60, 600e3), wrap(async (req, res) => {
    const code = normCode(req.query.code);
    const a = code && (await db.affiliates.byCode(code));
    res.json(a && a.status === "active" ? { valid: true, code: a.code, shop: a.shop } : { valid: false });
  }));

  /** Đếm lượt bấm liên kết giới thiệu (trình duyệt chỉ gửi 1 lần/ngày/mã). */
  router.post("/aff/click", sec.rateLimit("aff-click", 30, 3600e3), wrap(async (req, res) => {
    const code = normCode(req.body && req.body.code);
    const a = code && (await db.affiliates.byCode(code));
    if (a && a.status === "active") await db.affiliates.addClick(a.id);
    res.json({ ok: true, valid: !!(a && a.status === "active"), shop: a && a.status === "active" ? a.shop : null });
  }));

  router.get("/aff/me", affOnly, wrap(async (req, res) => {
    const [orders, payouts] = await Promise.all([db.orders.byAffiliate(req.aff.id), db.affPayouts.byAffiliate(req.aff.id)]);
    res.json({
      affiliate: publicAff(req.aff), program: P(), stats: summarize(orders, req.aff.clicks),
      orders: orders.map(affOrderView), payouts: payouts.map((p) => ({ id: p.id, amount: p.amount, count: p.orderIds.length, orderIds: p.orderIds, note: p.note, at: p.at }))
    });
  }));

  router.patch("/aff/me", affOnly, wrap(async (req, res) => {
    const b = req.body || {}, patch = {};
    if ("name" in b) { patch.name = str(b.name, 100); if (!patch.name) throw new HttpError(400, "Vui lòng nhập tên người liên hệ."); }
    if ("shop" in b) { patch.shop = str(b.shop, 150); if (!patch.shop) throw new HttpError(400, "Vui lòng nhập tên cửa hàng."); }
    if ("phone" in b) { patch.phone = str(b.phone, 30); if (!/^\+?[0-9 .\-]{8,20}$/.test(patch.phone)) throw new HttpError(400, "Số điện thoại không hợp lệ."); }
    if ("address" in b) patch.address = str(b.address, 255);
    if ("city" in b) patch.city = str(b.city, 80);
    if ("bankName" in b || "bankAccount" in b || "bankHolder" in b) patch.bank = readBank(b);
    await db.affiliates.update(req.aff.id, patch);
    res.json({ affiliate: publicAff(await db.affiliates.get(req.aff.id)) });
  }));

  router.post("/aff/password", affOnly, wrap(async (req, res) => {
    const b = req.body || {};
    if (!sec.checkPassword(String(b.old || ""), req.aff.passHash)) throw new HttpError(400, "Mật khẩu hiện tại không đúng.");
    if (String(b.password || "").length < 8) throw new HttpError(400, "Mật khẩu tối thiểu 8 ký tự.");
    const v = (req.aff.sessionVersion || 1) + 1;
    await db.affiliates.update(req.aff.id, { passHash: sec.hashPassword(b.password), sessionVersion: v });
    sec.startAffSession(res, Object.assign({}, req.aff, { sessionVersion: v }));
    res.json({ ok: true });
  }));

  /** Mã QR dẫn tới liên kết giới thiệu - dùng để in poster dán tại quầy. */
  router.get("/aff/qr.svg", affOnly, wrap(async (req, res) => {
    const svg = await QRCode.toString(config.SITE_URL + "/?ref=" + req.aff.code, { type: "svg", margin: 1, errorCorrectionLevel: "M", color: { dark: "#1d2040", light: "#ffffff" } });
    res.setHeader("Content-Type", "image/svg+xml");
    res.setHeader("Cache-Control", "private, max-age=3600");
    res.send(svg);
  }));

  router.get("/aff/notifications", affOnly, wrap(async (req, res) => {
    const [orders, payouts] = await Promise.all([db.orders.byAffiliate(req.aff.id), db.affPayouts.byAffiliate(req.aff.id)]);
    res.setHeader("Cache-Control", "no-store");
    res.json({ now: now(), events: affEvents(req.aff, orders, payouts) });
  }));

  /* ---------- Quản trị ---------- */
  router.get("/admin/affiliates", adminOnly, wrap(async (req, res) => {
    const [list, orders, payouts] = await Promise.all([db.affiliates.list(), db.orders.all(5000), db.affPayouts.all()]);
    const by = {};
    orders.forEach((o) => { if (o.affId) (by[o.affId] = by[o.affId] || []).push(o); });
    res.json({
      program: P(),
      affiliates: list.map((a) => Object.assign(publicAff(a), { note: a.note || "", lastLogin: a.lastLogin || null, stats: summarize(by[a.id] || [], a.clicks) })),
      orders: orders.filter((o) => o.affId).map((o) => Object.assign(affOrderView(o), { affId: o.affId, affCode: o.affCode, customer: o.name })),
      payouts
    });
  }));

  router.patch("/admin/affiliates/:id", adminOnly, wrap(async (req, res) => {
    const a = await db.affiliates.get(req.params.id);
    if (!a) throw new HttpError(404, "Không tìm thấy đối tác.");
    const b = req.body || {}, patch = {};
    if ("status" in b) {
      if (!["pending", "active", "locked"].includes(b.status)) throw new HttpError(400, "Trạng thái không hợp lệ.");
      patch.status = b.status;
      if (b.status === "active" && !a.approvedAt) patch.approvedAt = now();
      if (b.status === "locked") patch.sessionVersion = (a.sessionVersion || 1) + 1;
    }
    if ("rate" in b) {
      const r = Number(b.rate);
      if (!(r >= 0 && r <= 0.5)) throw new HttpError(400, "Tỷ lệ hoa hồng phải từ 0% đến 50%.");
      patch.rate = Math.round(r * 1000) / 1000;
    }
    if ("note" in b) patch.note = str(b.note, 1000);
    await db.affiliates.update(a.id, patch);
    const fresh = await db.affiliates.get(a.id);
    if (patch.approvedAt) mail.affApproved(fresh);
    res.json({ affiliate: publicAff(fresh) });
  }));

  /** Chi trả toàn bộ hoa hồng đã duyệt (đơn hoàn thành, chưa chi) của một đối tác. */
  router.post("/admin/affiliates/:id/payout", adminOnly, wrap(async (req, res) => {
    const a = await db.affiliates.get(req.params.id);
    if (!a) throw new HttpError(404, "Không tìm thấy đối tác.");
    const due = (await db.orders.byAffiliate(a.id)).filter((o) => commissionStatus(o) === "approved");
    if (!due.length) throw new HttpError(400, "Đối tác chưa có hoa hồng nào chờ chi trả.");
    const amount = due.reduce((s, o) => s + commission(o), 0);
    const p = { id: "PO" + sec.randomToken(6).replace(/[^a-zA-Z0-9]/g, "x"), affId: a.id, amount, orderIds: due.map((o) => o.id), note: str(req.body && req.body.note, 255), at: now() };
    await db.affPayouts.create(p);
    for (const o of due) await db.orders.update(o.id, { affPaidAt: p.at, affPayoutId: p.id });
    mail.affPaid(a, amount, due.length);
    res.json({ payout: p });
  }));

  /** Gắn/bỏ mã giới thiệu cho một đơn (khách quên nhập mã). Không đổi được khi hoa hồng đã chi trả. */
  router.post("/admin/orders/:id/affiliate", adminOnly, wrap(async (req, res) => {
    const o = await db.orders.get(String(req.params.id).slice(0, 12));
    if (!o) throw new HttpError(404, "Không tìm thấy đơn.");
    if (o.affPaidAt) throw new HttpError(400, "Hoa hồng của đơn này đã chi trả, không thể đổi đối tác.");
    const raw = str(req.body && req.body.code, 20);
    let patch = { affId: null, affCode: null, affRate: null };
    if (raw) {
      const a = await db.affiliates.byCode(normCode(raw) || "-");
      if (!a || a.status !== "active") throw new HttpError(400, "Mã giới thiệu không tồn tại hoặc chưa được duyệt.");
      patch = { affId: a.id, affCode: a.code, affRate: a.rate };
    }
    await db.orders.update(o.id, patch);
    res.json({ ok: true, affCode: patch.affCode });
  }));
}

module.exports = { register, attachRef, commission, commissionStatus, PROGRAM, normCode };
