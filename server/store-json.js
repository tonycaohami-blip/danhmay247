/**
 * Lưu trữ mặc định - KHÔNG cần cài đặt gì.
 *
 * - Toàn bộ dữ liệu (đơn hàng, khách, tin nhắn, liên hệ, đánh giá, giao dịch) nằm trong DATA_DIR/db.json
 * - Ghi nguyên tử (ghi tệp tạm rồi đổi tên) nên không hỏng dữ liệu khi máy chủ tắt đột ngột
 * - Tự sao lưu mỗi ngày vào DATA_DIR/backups/ (giữ 30 bản gần nhất)
 * - Cùng giao diện hàm với store-mysql.js nên API không cần biết đang dùng loại nào
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const config = require("./config");

const FILE = path.join(config.DATA_DIR, "db.json");
const BACKUP_DIR = path.join(config.DATA_DIR, "backups");
const EMPTY = () => ({ orders: [], users: {}, contacts: [], reviews: [], loginTokens: {}, payments: [], settings: {}, staff: [] });

let data = EMPTY();
let ready = false;
let timer = null;

const clone = (v) => (v == null ? v : JSON.parse(JSON.stringify(v)));
const today = () => new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10); // ngày theo giờ Việt Nam

/* ---------- Ghi đĩa ---------- */
function flush() {
  clearTimeout(timer);
  timer = null;
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(data));
  fs.renameSync(tmp, FILE);
  backupDaily();
}
/** Gộp nhiều thay đổi liên tiếp thành một lần ghi (sau 100ms). */
function save() { if (!timer) timer = setTimeout(flush, 100); }

function backupDaily() {
  try {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
    const target = path.join(BACKUP_DIR, "db-" + today() + ".json");
    if (fs.existsSync(target)) return;
    fs.copyFileSync(FILE, target);
    const old = fs.readdirSync(BACKUP_DIR).filter((n) => /^db-\d{4}-\d{2}-\d{2}\.json$/.test(n)).sort();
    old.slice(0, Math.max(0, old.length - 30)).forEach((n) => fs.rmSync(path.join(BACKUP_DIR, n), { force: true }));
  } catch (e) {
    console.error("[backup]", e.message);
  }
}

/* ---------- Khởi tạo ---------- */
async function init() {
  if (fs.existsSync(FILE)) {
    try {
      data = Object.assign(EMPTY(), JSON.parse(fs.readFileSync(FILE, "utf8")));
    } catch (e) {
      // Tệp hỏng: giữ lại để kiểm tra, khôi phục từ bản sao lưu gần nhất nếu có
      const broken = FILE + ".hong-" + Date.now();
      fs.copyFileSync(FILE, broken);
      const last = fs.existsSync(BACKUP_DIR) ? fs.readdirSync(BACKUP_DIR).filter((n) => n.endsWith(".json")).sort().pop() : null;
      if (!last) throw new Error("db.json bị hỏng và không có bản sao lưu (đã giữ lại tại " + broken + ")");
      data = Object.assign(EMPTY(), JSON.parse(fs.readFileSync(path.join(BACKUP_DIR, last), "utf8")));
      console.error("[store] db.json hỏng - đã khôi phục từ bản sao lưu " + last + ", bản hỏng giữ tại " + broken);
    }
  }
  // Dữ liệu từ phiên bản đầu tiên: users lưu theo dạng đối tượng, loginTokens có exp…
  if (!data.settings) data.settings = {};
  if (!data.staff) data.staff = [];
  data.orders.forEach((o) => { if (!o.internal) o.internal = []; });
  if (!config.SESSION_SECRET) {
    if (!data.settings.session_secret) data.settings.session_secret = crypto.randomBytes(48).toString("hex");
    config.SESSION_SECRET = data.settings.session_secret;
  }
  flush();
  ready = true;
}
async function close() { if (timer) flush(); ready = false; }
const isReady = () => ready;

for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => { if (timer) flush(); });
process.on("exit", () => { if (timer) flush(); });

/* ---------- Đơn hàng ---------- */
const find = (id) => data.orders.find((o) => o.id === id);
const PATCHABLE = ["status", "name", "email", "phone", "notes", "paidAt", "paidAmount", "paySource", "receivedAmount", "deadline", "assignedTo", "assignedAt"];

const orders = {
  async exists(id) { return !!find(id); },
  async create(o) {
    const copy = clone(o);
    copy.files = copy.files || []; copy.messages = copy.messages || []; copy.history = copy.history || []; copy.internal = copy.internal || [];
    copy.receivedAmount = copy.receivedAmount || 0;
    data.orders.push(copy);
    flush(); // đơn mới: ghi xuống đĩa ngay, không chờ gộp
  },
  async get(id) { return clone(find(id)) || null; },
  async byStaff(staffId) { return clone(data.orders.filter((o) => o.assignedTo === staffId).sort((a, b) => b.created - a.created)); },
  async byEmail(email) { return clone(data.orders.filter((o) => o.email === email).sort((a, b) => b.created - a.created)); },
  async all(limit) { return clone(data.orders.slice().sort((a, b) => b.created - a.created).slice(0, limit || 1000)); },
  async update(id, patch, onlyIfStatus) {
    const o = find(id);
    if (!o || (onlyIfStatus && !onlyIfStatus.includes(o.status))) return false;
    PATCHABLE.forEach((k) => { if (k in patch) o[k] = patch[k]; });
    save();
    return true;
  },
  async addReceived(id, amount) { const o = find(id); if (o) { o.receivedAmount = (o.receivedAmount || 0) + amount; save(); } },
  async addHistory(id, status, at) { const o = find(id); if (o) { o.history.push({ status, at: at || Date.now() }); save(); } },
  async addMessage(id, me, from, text, at) { const o = find(id); if (o) { o.messages.push({ me: !!me, from, text, at: at || Date.now() }); save(); } },
  async addFile(id, f) { const o = find(id); if (o) { o.files.push(clone(f)); save(); } },
  /** Ghi chú nội bộ giữa quản trị và nhân viên (khách không thấy). */
  async addInternal(id, n) { const o = find(id); if (o) { o.internal.push({ role: n.role, from: n.from, text: n.text, at: n.at || Date.now() }); save(); } },
  async setFileShared(id, fileId, shared) {
    const o = find(id), f = o && o.files.find((x) => x.id === fileId);
    if (!f) return false;
    f.shared = !!shared;
    save();
    return true;
  },
  async closedWithFiles(before) {
    const out = [];
    for (const o of data.orders) {
      if (o.status !== "done" && o.status !== "cancelled") continue;
      const closed = (o.history.filter((h) => h.status === o.status).pop() || {}).at || o.created;
      if (closed >= before) continue;
      o.files.forEach((f) => { if (f.stored) out.push({ id: o.id, file_id: f.id, stored: f.stored }); });
    }
    return out;
  },
  async markFilePurged(fileId) {
    for (const o of data.orders) {
      const f = o.files.find((x) => x.id === fileId);
      if (f) { delete f.stored; f.purged = true; save(); return; }
    }
  },
  async stats() {
    const paid = data.orders.filter((o) => o.paidAt && o.status !== "cancelled");
    return {
      orders: data.orders.length,
      paid: paid.length,
      revenue: paid.reduce((s, o) => s + (o.paidAmount || o.price.total), 0),
      toVerify: data.orders.filter((o) => o.status === "verifying").length
    };
  }
};

/* ---------- Nhân viên ---------- */
const staff = {
  async list() { return clone(data.staff); },
  async get(id) { return clone(data.staff.find((x) => x.id === id)) || null; },
  async byUsername(u) { return clone(data.staff.find((x) => x.username === u)) || null; },
  async create(st) { data.staff.push(clone(st)); flush(); },
  async update(id, patch) {
    const st = data.staff.find((x) => x.id === id);
    if (!st) return false;
    ["name", "email", "active", "passHash", "sessionVersion", "lastLogin"].forEach((k) => { if (k in patch) st[k] = patch[k]; });
    save();
    return true;
  }
};

/* ---------- Khách hàng & đăng nhập ---------- */
const users = {
  async get(email) { const u = data.users[email]; return u ? { email: u.email, name: u.name, phone: u.phone || "", created: u.created } : null; },
  async ensure(email, name, phone) {
    const u = data.users[email];
    if (!u) data.users[email] = { email, name, phone: phone || "", created: Date.now() };
    else if (phone) u.phone = phone;
    save();
  },
  async update(email, name, phone) { const u = data.users[email]; if (u) { u.name = name; u.phone = phone || ""; save(); } }
};

const loginTokens = {
  async create(hash, email, exp) {
    const now = Date.now();
    for (const [k, v] of Object.entries(data.loginTokens)) if (v.exp < now) delete data.loginTokens[k];
    data.loginTokens[hash] = { email, exp };
    save();
  },
  async consume(hash) {
    const t = data.loginTokens[hash];
    if (!t) return null;
    delete data.loginTokens[hash];
    save();
    return t.exp > Date.now() ? t.email : null;
  }
};

/* ---------- Liên hệ, đánh giá, giao dịch, cài đặt ---------- */
const contacts = {
  async create(c) { data.contacts.push(Object.assign({ read: false }, clone(c))); save(); },
  async list() { return clone(data.contacts.slice().sort((a, b) => b.at - a.at).slice(0, 500)); },
  async unread() { return data.contacts.filter((c) => !c.read).length; },
  async setRead(id, v) { const c = data.contacts.find((x) => x.id === id); if (c) { c.read = !!v; save(); } return !!c; }
};

const withDate = (r) => Object.assign({}, r, { date: r.date || new Date(r.at + 7 * 3600e3).toISOString().slice(0, 10) });
const reviews = {
  async create(r) { data.reviews.push(clone(r)); save(); },
  async approved() { return data.reviews.filter((r) => r.approved).sort((a, b) => b.at - a.at).slice(0, 200).map(withDate); },
  async all() { return data.reviews.slice().sort((a, b) => b.at - a.at).slice(0, 500).map(withDate); },
  async pending() { return data.reviews.filter((r) => !r.approved).length; },
  async setApproved(id, v) { const r = data.reviews.find((x) => x.id === id); if (r) { r.approved = !!v; save(); } return !!r; },
  async remove(id) { const i = data.reviews.findIndex((x) => x.id === id); if (i > -1) { data.reviews.splice(i, 1); save(); } return i > -1; }
};

let payId = 0;
const payments = {
  async record(p) {
    if (p.txId && data.payments.some((x) => x.txId === p.txId)) return false; // giao dịch đã xử lý
    const id = Date.now() * 1000 + (++payId % 1000);
    data.payments.push({ id, txId: p.txId || null, amount: p.amount, content: p.content, account: p.account || null, orderId: p.orderId, result: "", at: Date.now() });
    save();
    return id;
  },
  async setResult(id, result) { const p = data.payments.find((x) => x.id === id); if (p) { p.result = String(result).slice(0, 120); save(); } },
  async recent() { return clone(data.payments.slice(-100).reverse()); }
};

const settings = {
  async get(name) { return data.settings[name] == null ? null : data.settings[name]; },
  async set(name, value) { data.settings[name] = value; save(); }
};

module.exports = { kind: "json", file: FILE, _raw: () => data, init, close, isReady, flush, orders, staff, users, loginTokens, contacts, reviews, payments, settings };
