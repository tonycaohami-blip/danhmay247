/**
 * Lưu trữ MySQL/MariaDB cho Đánh máy 247.
 *
 * - Tự tạo bảng khi khởi động (CREATE TABLE IF NOT EXISTS), bảng mã utf8mb4 (tiếng Việt, emoji)
 * - Mọi thời gian lưu dạng DATETIME giờ Việt Nam (+07:00) để xem dễ trong phpMyAdmin
 * - Tệp khách gửi vẫn nằm trên đĩa (DATA_DIR/uploads); MySQL chỉ lưu thông tin tệp
 * - Nếu bảng đơn hàng còn trống và DATA_DIR/db.json (bản lưu JSON cũ) tồn tại → tự nhập sang MySQL
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const mysql = require("mysql2/promise");
const config = require("./config");

const P = config.DB.prefix;
const T = {
  orders: P + "orders", files: P + "order_files", messages: P + "order_messages", history: P + "order_history",
  users: P + "users", tokens: P + "login_tokens", contacts: P + "contacts", reviews: P + "reviews",
  payments: P + "payments", settings: P + "settings", staff: P + "staff", internal: P + "order_internal",
  affiliates: P + "affiliates", affPayouts: P + "aff_payouts"
};

let pool = null;
let ready = false;
const q = (sql, params) => pool.query(sql, params).then(([rows]) => rows);
const toDate = (ms) => (ms == null ? null : new Date(ms));
const toMs = (d) => (d == null ? null : new Date(d).getTime());
const toJSON = (v) => JSON.stringify(v == null ? null : v);
const fromJSON = (v, d) => { if (v == null) return d; if (typeof v !== "string") return v; try { return JSON.parse(v); } catch { return d; } };

/* =========================================================
   Lược đồ
   ========================================================= */
const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS \`${T.staff}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    username VARCHAR(40) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(160) NULL,
    pass_hash VARCHAR(200) NOT NULL,
    active TINYINT(1) NOT NULL DEFAULT 1,
    session_version INT NOT NULL DEFAULT 1,
    last_login DATETIME(3) NULL,
    created_at DATETIME(3) NOT NULL,
    UNIQUE KEY uq_username (username)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.internal}\` (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(12) NOT NULL,
    role VARCHAR(10) NOT NULL COMMENT 'admin|staff|system',
    sender VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    created_at DATETIME(3) NOT NULL,
    KEY idx_order (order_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.orders}\` (
    id VARCHAR(12) NOT NULL PRIMARY KEY COMMENT 'Mã đơn, vd DM123456',
    created_at DATETIME(3) NOT NULL,
    updated_at DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
    status VARCHAR(20) NOT NULL DEFAULT 'unpaid' COMMENT 'unpaid|verifying|paid|progress|review|done|cancelled',
    name VARCHAR(100) NOT NULL,
    email VARCHAR(160) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    service VARCHAR(20) NOT NULL,
    service_label VARCHAR(60) NOT NULL,
    type VARCHAR(30) NOT NULL,
    type_label VARCHAR(120) NOT NULL,
    urgency VARCHAR(10) NOT NULL,
    urgency_label VARCHAR(30) NOT NULL,
    hours INT NOT NULL,
    qty INT NOT NULL,
    unit VARCHAR(10) NOT NULL,
    speakers VARCHAR(60) NULL,
    extras JSON NULL,
    doc_type VARCHAR(60) NOT NULL,
    instructions TEXT NULL,
    total INT NOT NULL COMMENT 'Tổng tiền (VNĐ)',
    price JSON NOT NULL COMMENT 'Chi tiết tính giá',
    promo VARCHAR(30) NULL,
    token_hash CHAR(64) NOT NULL COMMENT 'SHA-256 của mã truy cập trong email',
    paid_at DATETIME(3) NULL,
    paid_amount INT NULL,
    pay_source VARCHAR(20) NULL COMMENT 'sepay|admin',
    received_amount INT NOT NULL DEFAULT 0,
    deadline DATETIME(3) NULL,
    notes TEXT NULL COMMENT 'Ghi chú nội bộ',
    assigned_to VARCHAR(20) NULL COMMENT 'Nhân viên được giao',
    assigned_at DATETIME(3) NULL,
    KEY idx_email (email),
    KEY idx_status (status),
    KEY idx_created (created_at)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.files}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    order_id VARCHAR(12) NOT NULL,
    name VARCHAR(200) NOT NULL,
    size BIGINT NOT NULL DEFAULT 0,
    mime VARCHAR(120) NULL,
    uploaded_by VARCHAR(10) NOT NULL COMMENT 'customer|admin',
    stored VARCHAR(255) NULL COMMENT 'Đường dẫn trong DATA_DIR/uploads; NULL khi đã xóa',
    purged TINYINT(1) NOT NULL DEFAULT 0,
    shared TINYINT(1) NOT NULL DEFAULT 0 COMMENT 'Tệp nhân viên đã được chuyển cho khách',
    created_at DATETIME(3) NOT NULL,
    KEY idx_order (order_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.messages}\` (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(12) NOT NULL,
    from_customer TINYINT(1) NOT NULL DEFAULT 0,
    sender VARCHAR(100) NOT NULL,
    text TEXT NOT NULL,
    created_at DATETIME(3) NOT NULL,
    KEY idx_order (order_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.history}\` (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    order_id VARCHAR(12) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME(3) NOT NULL,
    KEY idx_order (order_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.users}\` (
    email VARCHAR(160) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(30) NULL,
    created_at DATETIME(3) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.tokens}\` (
    token_hash CHAR(64) NOT NULL PRIMARY KEY,
    email VARCHAR(160) NOT NULL,
    expires_at DATETIME(3) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.contacts}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(160) NOT NULL,
    phone VARCHAR(30) NULL,
    subject VARCHAR(80) NOT NULL,
    message TEXT NOT NULL,
    is_read TINYINT(1) NOT NULL DEFAULT 0,
    created_at DATETIME(3) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.reviews}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    job VARCHAR(40) NOT NULL,
    type VARCHAR(40) NOT NULL,
    rating TINYINT NOT NULL,
    text TEXT NOT NULL,
    approved TINYINT(1) NOT NULL DEFAULT 0,
    created_at DATETIME(3) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.payments}\` (
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tx_id VARCHAR(80) NULL COMMENT 'Mã giao dịch SePay - chống xử lý trùng',
    amount INT NOT NULL,
    content VARCHAR(300) NULL,
    account VARCHAR(40) NULL,
    order_id VARCHAR(12) NULL,
    result VARCHAR(120) NOT NULL DEFAULT '',
    created_at DATETIME(3) NOT NULL,
    UNIQUE KEY uq_tx (tx_id),
    KEY idx_order (order_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.affiliates}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    code VARCHAR(20) NOT NULL UNIQUE COMMENT 'Mã giới thiệu',
    email VARCHAR(160) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    shop VARCHAR(150) NOT NULL,
    phone VARCHAR(30) NOT NULL,
    address VARCHAR(255) NULL,
    city VARCHAR(80) NULL,
    bank JSON NULL,
    pass_hash VARCHAR(200) NOT NULL,
    session_version INT NOT NULL DEFAULT 1,
    status VARCHAR(10) NOT NULL DEFAULT 'pending' COMMENT 'pending|active|locked',
    rate DECIMAL(4,3) NOT NULL DEFAULT 0.300,
    clicks INT NOT NULL DEFAULT 0,
    note TEXT NULL,
    created_at DATETIME(3) NOT NULL,
    approved_at DATETIME(3) NULL,
    last_login DATETIME(3) NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.affPayouts}\` (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    aff_id VARCHAR(20) NOT NULL,
    amount INT NOT NULL,
    order_ids JSON NOT NULL,
    note VARCHAR(255) NULL,
    created_at DATETIME(3) NOT NULL,
    KEY idx_aff (aff_id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
  `CREATE TABLE IF NOT EXISTS \`${T.settings}\` (
    name VARCHAR(60) NOT NULL PRIMARY KEY,
    value TEXT NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`
];

/* =========================================================
   Khởi tạo
   ========================================================= */
async function init() {
  const c = config.DB;
  if (!c.user || !c.database) throw new Error("Chưa cấu hình MySQL: cần DB_HOST, DB_USER, DB_PASSWORD, DB_NAME.");
  if (pool) { await pool.end().catch(() => {}); pool = null; } // bỏ kết nối hỏng của lần thử trước
  pool = mysql.createPool({
    host: c.host, port: c.port, user: c.user, password: c.password, database: c.database,
    charset: "utf8mb4_unicode_ci", timezone: "+07:00", connectionLimit: 8, waitForConnections: true,
    enableKeepAlive: true, connectTimeout: 15000
  });
  await q("SELECT 1");
  for (const sql of SCHEMA) await q(sql);
  await addColumnIfMissing(T.orders, "assigned_to", "VARCHAR(20) NULL");
  await addColumnIfMissing(T.orders, "assigned_at", "DATETIME(3) NULL");
  await addColumnIfMissing(T.files, "shared", "TINYINT(1) NOT NULL DEFAULT 0");
  await addColumnIfMissing(T.orders, "aff_id", "VARCHAR(20) NULL");
  await addColumnIfMissing(T.orders, "aff_code", "VARCHAR(20) NULL");
  await addColumnIfMissing(T.orders, "aff_rate", "DECIMAL(4,3) NULL");
  await addColumnIfMissing(T.orders, "aff_paid_at", "DATETIME(3) NULL");
  await addColumnIfMissing(T.orders, "aff_payout_id", "VARCHAR(20) NULL");

  // Khóa ký phiên: lưu trong MySQL để không đổi sau mỗi lần deploy (khách không bị đăng xuất)
  if (!config.SESSION_SECRET) {
    let s = await settings.get("session_secret");
    if (!s) { s = crypto.randomBytes(48).toString("hex"); await settings.set("session_secret", s); }
    config.SESSION_SECRET = s;
  }
  await importLegacyJson();
  ready = true;
}
async function addColumnIfMissing(table, column, def) {
  const r = await q("SELECT 1 FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = ? AND COLUMN_NAME = ?", [table, column]);
  if (!r.length) await q("ALTER TABLE `" + table + "` ADD COLUMN `" + column + "` " + def);
}
const close = () => { ready = false; return pool ? pool.end() : Promise.resolve(); };
const isReady = () => ready;

/* =========================================================
   Đơn hàng
   ========================================================= */
const ORDER_COLS = {
  status: "status", name: "name", email: "email", phone: "phone", notes: "notes",
  paidAt: "paid_at", paidAmount: "paid_amount", paySource: "pay_source", receivedAmount: "received_amount", deadline: "deadline",
  assignedTo: "assigned_to", assignedAt: "assigned_at", affId: "aff_id", affCode: "aff_code", affRate: "aff_rate", affPaidAt: "aff_paid_at", affPayoutId: "aff_payout_id"
};
const DATE_FIELDS = new Set(["paidAt", "deadline", "assignedAt", "affPaidAt"]);

function rowToOrder(r) {
  return {
    id: r.id, created: toMs(r.created_at), tokenHash: r.token_hash,
    name: r.name, email: r.email, phone: r.phone,
    service: r.service, serviceLabel: r.service_label, type: r.type, typeLabel: r.type_label,
    urgency: r.urgency, urgencyLabel: r.urgency_label, hours: r.hours,
    qty: r.qty, unit: r.unit, speakers: r.speakers, extras: fromJSON(r.extras, []),
    docType: r.doc_type, instructions: r.instructions || "",
    price: fromJSON(r.price, { total: r.total }), promo: r.promo,
    status: r.status, paidAt: toMs(r.paid_at), paidAmount: r.paid_amount, paySource: r.pay_source,
    receivedAmount: r.received_amount || 0, deadline: toMs(r.deadline), notes: r.notes || "",
    assignedTo: r.assigned_to || null, assignedAt: toMs(r.assigned_at),
    affId: r.aff_id || null, affCode: r.aff_code || null, affRate: r.aff_rate == null ? null : Number(r.aff_rate),
    affPaidAt: toMs(r.aff_paid_at), affPayoutId: r.aff_payout_id || null,
    files: [], messages: [], history: [], internal: []
  };
}

/** Nạp tệp, tin nhắn, lịch sử cho nhiều đơn bằng 3 truy vấn. */
async function hydrate(rows) {
  const list = rows.map(rowToOrder);
  if (!list.length) return list;
  const ids = list.map((o) => o.id), by = {};
  list.forEach((o) => { by[o.id] = o; });
  const [files, msgs, hist, notes] = await Promise.all([
    q(`SELECT * FROM \`${T.files}\` WHERE order_id IN (?) ORDER BY created_at, id`, [ids]),
    q(`SELECT * FROM \`${T.messages}\` WHERE order_id IN (?) ORDER BY created_at, id`, [ids]),
    q(`SELECT * FROM \`${T.history}\` WHERE order_id IN (?) ORDER BY created_at, id`, [ids]),
    q(`SELECT * FROM \`${T.internal}\` WHERE order_id IN (?) ORDER BY created_at, id`, [ids])
  ]);
  files.forEach((f) => by[f.order_id].files.push({ id: f.id, name: f.name, size: Number(f.size), type: f.mime, by: f.uploaded_by, at: toMs(f.created_at), stored: f.stored, purged: !!f.purged, shared: !!f.shared }));
  msgs.forEach((m) => by[m.order_id].messages.push({ me: !!m.from_customer, from: m.sender, text: m.text, at: toMs(m.created_at) }));
  hist.forEach((h) => by[h.order_id].history.push({ status: h.status, at: toMs(h.created_at) }));
  notes.forEach((n) => by[n.order_id].internal.push({ role: n.role, from: n.sender, text: n.text, at: toMs(n.created_at) }));
  return list;
}

const orders = {
  async exists(id) { return (await q(`SELECT 1 FROM \`${T.orders}\` WHERE id = ?`, [id])).length > 0; },

  async create(o) {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
      await conn.query(`INSERT INTO \`${T.orders}\` SET ?`, [{
        id: o.id, created_at: toDate(o.created), status: o.status, name: o.name, email: o.email, phone: o.phone,
        service: o.service, service_label: o.serviceLabel, type: o.type, type_label: o.typeLabel,
        urgency: o.urgency, urgency_label: o.urgencyLabel, hours: o.hours, qty: o.qty, unit: o.unit,
        speakers: o.speakers, extras: toJSON(o.extras), doc_type: o.docType, instructions: o.instructions,
        total: o.price.total, price: toJSON(o.price), promo: o.promo, token_hash: o.tokenHash,
        paid_at: toDate(o.paidAt), paid_amount: o.paidAmount || null, pay_source: o.paySource || null,
        received_amount: o.receivedAmount || 0, deadline: toDate(o.deadline), notes: o.notes || null,
        aff_id: o.affId || null, aff_code: o.affCode || null, aff_rate: o.affRate == null ? null : o.affRate,
        aff_paid_at: toDate(o.affPaidAt), aff_payout_id: o.affPayoutId || null
      }]);
      for (const f of o.files) await conn.query(`INSERT INTO \`${T.files}\` SET ?`, [fileRow(o.id, f)]);
      for (const m of o.messages) await conn.query(`INSERT INTO \`${T.messages}\` SET ?`, [{ order_id: o.id, from_customer: m.me ? 1 : 0, sender: m.from, text: m.text, created_at: toDate(m.at) }]);
      for (const h of o.history) await conn.query(`INSERT INTO \`${T.history}\` SET ?`, [{ order_id: o.id, status: h.status, created_at: toDate(h.at) }]);
      await conn.commit();
    } catch (e) {
      await conn.rollback();
      throw e;
    } finally {
      conn.release();
    }
  },

  /** Xóa hẳn đơn cùng tệp, tin nhắn, lịch sử, ghi chú nội bộ (bảng giao dịch ngân hàng giữ nguyên làm nhật ký). */
  async remove(id) {
    const conn = await pool.getConnection();
    try {
      await conn.beginTransaction();
      for (const t of [T.files, T.messages, T.history, T.internal]) await conn.query(`DELETE FROM \`${t}\` WHERE order_id = ?`, [id]);
      const [r] = await conn.query(`DELETE FROM \`${T.orders}\` WHERE id = ?`, [id]);
      await conn.commit();
      return r.affectedRows > 0;
    } catch (e) {
      await conn.rollback();
      throw e;
    } finally {
      conn.release();
    }
  },

  async get(id) {
    const rows = await q(`SELECT * FROM \`${T.orders}\` WHERE id = ?`, [id]);
    return rows.length ? (await hydrate(rows))[0] : null;
  },
  async byStaff(staffId) { return hydrate(await q(`SELECT * FROM \`${T.orders}\` WHERE assigned_to = ? ORDER BY created_at DESC`, [staffId])); },
  async byAffiliate(affId) { return hydrate(await q(`SELECT * FROM \`${T.orders}\` WHERE aff_id = ? ORDER BY created_at DESC`, [affId])); },
  async byEmail(email) { return hydrate(await q(`SELECT * FROM \`${T.orders}\` WHERE email = ? ORDER BY created_at DESC`, [email])); },
  async all(limit) { return hydrate(await q(`SELECT * FROM \`${T.orders}\` ORDER BY created_at DESC LIMIT ?`, [limit || 1000])); },

  /** Cập nhật một số trường. `onlyIfStatus`: chỉ cập nhật khi trạng thái hiện tại nằm trong danh sách (chống tranh chấp). */
  async update(id, patch, onlyIfStatus) {
    const set = {};
    for (const k of Object.keys(patch)) if (ORDER_COLS[k]) set[ORDER_COLS[k]] = DATE_FIELDS.has(k) ? toDate(patch[k]) : patch[k];
    if (!Object.keys(set).length) return false;
    let sql = `UPDATE \`${T.orders}\` SET ? WHERE id = ?`;
    const params = [set, id];
    if (onlyIfStatus) { sql += " AND status IN (?)"; params.push(onlyIfStatus); }
    const r = await q(sql, params);
    return r.affectedRows > 0;
  },
  async addReceived(id, amount) {
    await q(`UPDATE \`${T.orders}\` SET received_amount = received_amount + ? WHERE id = ?`, [amount, id]);
  },
  addHistory(id, status, at) { return q(`INSERT INTO \`${T.history}\` SET ?`, [{ order_id: id, status, created_at: toDate(at || Date.now()) }]); },
  addMessage(id, me, from, text, at) { return q(`INSERT INTO \`${T.messages}\` SET ?`, [{ order_id: id, from_customer: me ? 1 : 0, sender: from, text, created_at: toDate(at || Date.now()) }]); },
  addFile(id, f) { return q(`INSERT INTO \`${T.files}\` SET ?`, [fileRow(id, f)]); },
  addInternal(id, n) { return q(`INSERT INTO \`${T.internal}\` SET ?`, [{ order_id: id, role: n.role, sender: n.from, text: n.text, created_at: toDate(n.at || Date.now()) }]); },
  async setFileShared(id, fileId, shared) { return (await q(`UPDATE \`${T.files}\` SET shared = ? WHERE id = ? AND order_id = ?`, [shared ? 1 : 0, fileId, id])).affectedRows > 0; },

  /** Đơn đã kết thúc (hoàn thành/hủy) trước mốc `before` và vẫn còn tệp trên đĩa. */
  async closedWithFiles(before) {
    return q(`SELECT o.id, f.id AS file_id, f.stored FROM \`${T.orders}\` o
      JOIN \`${T.files}\` f ON f.order_id = o.id AND f.stored IS NOT NULL
      WHERE o.status IN ('done','cancelled')
        AND (SELECT MAX(h.created_at) FROM \`${T.history}\` h WHERE h.order_id = o.id AND h.status = o.status) < ?`, [toDate(before)]);
  },
  markFilePurged(fileId) { return q(`UPDATE \`${T.files}\` SET stored = NULL, purged = 1 WHERE id = ?`, [fileId]); },

  async stats() {
    const [r] = await q(`SELECT COUNT(*) AS orders,
        SUM(paid_at IS NOT NULL AND status <> 'cancelled') AS paid,
        COALESCE(SUM(CASE WHEN paid_at IS NOT NULL AND status <> 'cancelled' THEN COALESCE(paid_amount, total) END), 0) AS revenue,
        SUM(status = 'verifying') AS toVerify
      FROM \`${T.orders}\``);
    return { orders: Number(r.orders) || 0, paid: Number(r.paid) || 0, revenue: Number(r.revenue) || 0, toVerify: Number(r.toVerify) || 0 };
  }
};
function fileRow(orderId, f) {
  return { id: f.id, order_id: orderId, name: f.name, size: f.size || 0, mime: f.type || null, uploaded_by: f.by, stored: f.stored || null, purged: f.purged ? 1 : 0, shared: f.shared ? 1 : 0, created_at: toDate(f.at || Date.now()) };
}

/* =========================================================
   Khách hàng & đăng nhập
   ========================================================= */
const mapStaff = (r) => ({ id: r.id, username: r.username, name: r.name, email: r.email || "", passHash: r.pass_hash, active: !!r.active, sessionVersion: r.session_version, lastLogin: toMs(r.last_login), created: toMs(r.created_at) });
const STAFF_COLS = { name: "name", email: "email", active: "active", passHash: "pass_hash", sessionVersion: "session_version", lastLogin: "last_login" };
const staff = {
  async list() { return (await q(`SELECT * FROM \`${T.staff}\` ORDER BY created_at`)).map(mapStaff); },
  async get(id) { const r = await q(`SELECT * FROM \`${T.staff}\` WHERE id = ?`, [id]); return r.length ? mapStaff(r[0]) : null; },
  async byUsername(u) { const r = await q(`SELECT * FROM \`${T.staff}\` WHERE username = ?`, [u]); return r.length ? mapStaff(r[0]) : null; },
  create(st) { return q(`INSERT INTO \`${T.staff}\` SET ?`, [{ id: st.id, username: st.username, name: st.name, email: st.email || null, pass_hash: st.passHash, active: st.active ? 1 : 0, session_version: st.sessionVersion || 1, created_at: toDate(st.created) }]); },
  async update(id, patch) {
    const set = {};
    for (const k of Object.keys(patch)) if (STAFF_COLS[k]) set[STAFF_COLS[k]] = k === "lastLogin" ? toDate(patch[k]) : k === "active" ? (patch[k] ? 1 : 0) : patch[k];
    if (!Object.keys(set).length) return false;
    return (await q(`UPDATE \`${T.staff}\` SET ? WHERE id = ?`, [set, id])).affectedRows > 0;
  }
};

/* ---------- Đối tác (affiliate) ---------- */
const mapAff = (r) => ({
  id: r.id, code: r.code, email: r.email, name: r.name, shop: r.shop, phone: r.phone, address: r.address || "", city: r.city || "",
  bank: fromJSON(r.bank, {}), passHash: r.pass_hash, sessionVersion: r.session_version, status: r.status, rate: Number(r.rate),
  clicks: r.clicks || 0, note: r.note || "", created: toMs(r.created_at), approvedAt: toMs(r.approved_at), lastLogin: toMs(r.last_login)
});
const AFF_COLS = { name: "name", shop: "shop", phone: "phone", address: "address", city: "city", bank: "bank", passHash: "pass_hash", sessionVersion: "session_version", status: "status", rate: "rate", note: "note", lastLogin: "last_login", approvedAt: "approved_at" };
const affiliates = {
  async list() { return (await q(`SELECT * FROM \`${T.affiliates}\` ORDER BY created_at DESC`)).map(mapAff); },
  async get(id) { const r = await q(`SELECT * FROM \`${T.affiliates}\` WHERE id = ?`, [id]); return r.length ? mapAff(r[0]) : null; },
  async byEmail(e) { const r = await q(`SELECT * FROM \`${T.affiliates}\` WHERE email = ?`, [e]); return r.length ? mapAff(r[0]) : null; },
  async byCode(c) { const r = await q(`SELECT * FROM \`${T.affiliates}\` WHERE code = ?`, [c]); return r.length ? mapAff(r[0]) : null; },
  create(a) {
    return q(`INSERT INTO \`${T.affiliates}\` SET ?`, [{
      id: a.id, code: a.code, email: a.email, name: a.name, shop: a.shop, phone: a.phone, address: a.address || null, city: a.city || null,
      bank: toJSON(a.bank || {}), pass_hash: a.passHash, session_version: a.sessionVersion || 1, status: a.status, rate: a.rate, clicks: 0, created_at: toDate(a.created)
    }]);
  },
  async update(id, patch) {
    const set = {};
    for (const k of Object.keys(patch)) {
      if (!AFF_COLS[k]) continue;
      set[AFF_COLS[k]] = k === "bank" ? toJSON(patch[k]) : (k === "lastLogin" || k === "approvedAt") ? toDate(patch[k]) : patch[k];
    }
    if (!Object.keys(set).length) return false;
    return (await q(`UPDATE \`${T.affiliates}\` SET ? WHERE id = ?`, [set, id])).affectedRows > 0;
  },
  addClick(id) { return q(`UPDATE \`${T.affiliates}\` SET clicks = clicks + 1 WHERE id = ?`, [id]); }
};
const mapPayout = (r) => ({ id: r.id, affId: r.aff_id, amount: r.amount, orderIds: fromJSON(r.order_ids, []), note: r.note || "", at: toMs(r.created_at) });
const affPayouts = {
  create(p) { return q(`INSERT INTO \`${T.affPayouts}\` SET ?`, [{ id: p.id, aff_id: p.affId, amount: p.amount, order_ids: toJSON(p.orderIds), note: p.note || null, created_at: toDate(p.at) }]); },
  async byAffiliate(affId) { return (await q(`SELECT * FROM \`${T.affPayouts}\` WHERE aff_id = ? ORDER BY created_at DESC`, [affId])).map(mapPayout); },
  async all() { return (await q(`SELECT * FROM \`${T.affPayouts}\` ORDER BY created_at DESC LIMIT 500`)).map(mapPayout); }
};

const users = {
  async get(email) {
    const r = await q(`SELECT * FROM \`${T.users}\` WHERE email = ?`, [email]);
    return r.length ? { email: r[0].email, name: r[0].name, phone: r[0].phone || "", created: toMs(r[0].created_at) } : null;
  },
  /** Tạo nếu chưa có; nếu có thì chỉ bổ sung số điện thoại mới. */
  ensure(email, name, phone) {
    return q(`INSERT INTO \`${T.users}\` (email, name, phone, created_at) VALUES (?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE phone = COALESCE(NULLIF(VALUES(phone), ''), phone)`, [email, name, phone || null, new Date()]);
  },
  update(email, name, phone) { return q(`UPDATE \`${T.users}\` SET name = ?, phone = ? WHERE email = ?`, [name, phone || null, email]); }
};

const loginTokens = {
  async create(hash, email, exp) {
    await q(`DELETE FROM \`${T.tokens}\` WHERE expires_at < ?`, [new Date()]);
    await q(`INSERT INTO \`${T.tokens}\` SET ?`, [{ token_hash: hash, email, expires_at: toDate(exp) }]);
  },
  /** Dùng một lần: trả về email nếu hợp lệ, đồng thời xóa mã. */
  async consume(hash) {
    const r = await q(`SELECT * FROM \`${T.tokens}\` WHERE token_hash = ?`, [hash]);
    if (!r.length) return null;
    const del = await q(`DELETE FROM \`${T.tokens}\` WHERE token_hash = ?`, [hash]);
    if (!del.affectedRows) return null; // đã bị dùng ở yêu cầu song song
    return toMs(r[0].expires_at) > Date.now() ? r[0].email : null;
  }
};

/* =========================================================
   Liên hệ, đánh giá, giao dịch, cài đặt
   ========================================================= */
const contacts = {
  create(c) { return q(`INSERT INTO \`${T.contacts}\` SET ?`, [{ id: c.id, name: c.name, email: c.email, phone: c.phone || null, subject: c.subject, message: c.message, is_read: 0, created_at: toDate(c.at) }]); },
  async list() {
    return (await q(`SELECT * FROM \`${T.contacts}\` ORDER BY created_at DESC LIMIT 500`))
      .map((c) => ({ id: c.id, name: c.name, email: c.email, phone: c.phone || "", subject: c.subject, message: c.message, read: !!c.is_read, at: toMs(c.created_at) }));
  },
  async unread() { return Number((await q(`SELECT COUNT(*) AS n FROM \`${T.contacts}\` WHERE is_read = 0`))[0].n); },
  async setRead(id, v) { return (await q(`UPDATE \`${T.contacts}\` SET is_read = ? WHERE id = ?`, [v ? 1 : 0, id])).affectedRows > 0; }
};

const mapReview = (r) => ({ id: r.id, name: r.name, job: r.job, type: r.type, rating: r.rating, text: r.text, approved: !!r.approved, date: toDate(toMs(r.created_at)).toISOString().slice(0, 10), at: toMs(r.created_at) });
const reviews = {
  create(r) { return q(`INSERT INTO \`${T.reviews}\` SET ?`, [{ id: r.id, name: r.name, job: r.job, type: r.type, rating: r.rating, text: r.text, approved: r.approved ? 1 : 0, created_at: toDate(r.at) }]); },
  async approved() { return (await q(`SELECT * FROM \`${T.reviews}\` WHERE approved = 1 ORDER BY created_at DESC LIMIT 200`)).map(mapReview); },
  async all() { return (await q(`SELECT * FROM \`${T.reviews}\` ORDER BY created_at DESC LIMIT 500`)).map(mapReview); },
  async pending() { return Number((await q(`SELECT COUNT(*) AS n FROM \`${T.reviews}\` WHERE approved = 0`))[0].n); },
  async setApproved(id, v) { return (await q(`UPDATE \`${T.reviews}\` SET approved = ? WHERE id = ?`, [v ? 1 : 0, id])).affectedRows > 0; },
  async remove(id) { return (await q(`DELETE FROM \`${T.reviews}\` WHERE id = ?`, [id])).affectedRows > 0; }
};

const payments = {
  /** Ghi giao dịch; trả về false nếu tx_id đã được xử lý trước đó. */
  async record(p) {
    const r = await q(`INSERT IGNORE INTO \`${T.payments}\` SET ?`, [{ tx_id: p.txId || null, amount: p.amount, content: p.content, account: p.account || null, order_id: p.orderId, result: "", created_at: new Date() }]);
    return r.affectedRows > 0 ? r.insertId : false;
  },
  setResult(id, result) { return q(`UPDATE \`${T.payments}\` SET result = ? WHERE id = ?`, [String(result).slice(0, 120), id]); },
  async recent() {
    return (await q(`SELECT * FROM \`${T.payments}\` ORDER BY id DESC LIMIT 100`))
      .map((p) => ({ txId: p.tx_id, amount: p.amount, content: p.content, account: p.account, orderId: p.order_id, result: p.result, at: toMs(p.created_at) }));
  }
};

const settings = {
  async get(name) { const r = await q(`SELECT value FROM \`${T.settings}\` WHERE name = ?`, [name]); return r.length ? r[0].value : null; },
  set(name, value) { return q(`INSERT INTO \`${T.settings}\` (name, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)`, [name, value]); }
};

/* =========================================================
   Nhập dữ liệu từ bản lưu JSON cũ (DATA_DIR/db.json)
   ========================================================= */
async function importLegacyJson() {
  const file = path.join(config.DATA_DIR, "db.json");
  if (!fs.existsSync(file) || (await settings.get("legacy_json_imported"))) return;
  if ((await q(`SELECT COUNT(*) AS n FROM \`${T.orders}\``))[0].n > 0) return;
  let data;
  try { data = JSON.parse(fs.readFileSync(file, "utf8")); } catch (e) { console.error("[db] Không đọc được db.json cũ:", e.message); return; }
  let n = 0;
  for (const o of data.orders || []) { await orders.create(o); n++; }
  for (const [email, u] of Object.entries(data.users || {})) await users.ensure(email, u.name || email, u.phone);
  for (const c of data.contacts || []) await contacts.create(c).catch(() => {});
  for (const r of data.reviews || []) await reviews.create(r).catch(() => {});
  await settings.set("legacy_json_imported", new Date().toISOString());
  fs.renameSync(file, file + ".imported");
  console.log("[db] Đã nhập " + n + " đơn hàng từ db.json sang MySQL (tệp cũ đổi tên thành db.json.imported).");
}

module.exports = { init, close, isReady, orders, staff, affiliates, affPayouts, users, loginTokens, contacts, reviews, payments, settings, TABLES: T, query: (s, p) => q(s, p) };
