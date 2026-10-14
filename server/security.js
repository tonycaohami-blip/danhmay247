/**
 * Phiên đăng nhập, mã truy cập, giới hạn tần suất và kiểm tra nguồn gốc yêu cầu.
 */
"use strict";

const crypto = require("crypto");
const config = require("./config");
const { IS_PROD, ADMIN_PASSWORD } = config;

const b64 = (buf) => Buffer.from(buf).toString("base64url");
const sha256 = (s) => crypto.createHash("sha256").update(String(s)).digest("hex");
const randomToken = (bytes = 32) => crypto.randomBytes(bytes).toString("base64url");

function safeEqual(a, b) {
  const x = Buffer.from(String(a)), y = Buffer.from(String(b));
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

/* ---------- Cookie ký số (không cần lưu phiên trên máy chủ) ---------- */
function sign(payload) {
  const body = b64(JSON.stringify(payload));
  const mac = crypto.createHmac("sha256", config.SESSION_SECRET).update(body).digest("base64url");
  return body + "." + mac;
}
function verify(token) {
  if (!token || typeof token !== "string") return null;
  const [body, mac] = token.split(".");
  if (!body || !mac) return null;
  const expect = crypto.createHmac("sha256", config.SESSION_SECRET).update(body).digest("base64url");
  if (!safeEqual(mac, expect)) return null;
  try {
    const p = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    return p.exp && p.exp > Date.now() ? p : null;
  } catch { return null; }
}

function parseCookies(req) {
  const out = {};
  (req.headers.cookie || "").split(";").forEach((c) => {
    const i = c.indexOf("=");
    if (i > 0) out[c.slice(0, i).trim()] = decodeURIComponent(c.slice(i + 1).trim());
  });
  return out;
}
function setCookie(res, name, value, maxAgeSec) {
  const parts = [name + "=" + encodeURIComponent(value), "Path=/", "HttpOnly", "SameSite=Lax", "Max-Age=" + maxAgeSec];
  if (IS_PROD) parts.push("Secure");
  const prev = res.getHeader("Set-Cookie");
  res.setHeader("Set-Cookie", (Array.isArray(prev) ? prev : prev ? [prev] : []).concat(parts.join("; ")));
}

const USER_COOKIE = "dm_session", ADMIN_COOKIE = "dm_admin";
const DAY = 86400e3;

function startUserSession(res, email) {
  setCookie(res, USER_COOKIE, sign({ e: email, exp: Date.now() + 30 * DAY }), 30 * 86400);
}
function startAdminSession(res) {
  setCookie(res, ADMIN_COOKIE, sign({ admin: 1, exp: Date.now() + 12 * 3600e3 }), 12 * 3600);
}
function clearSession(res, name) { setCookie(res, name, "", 0); }

/** Gắn req.userEmail và req.isAdmin từ cookie. */
function sessionMiddleware(req, res, next) {
  const c = parseCookies(req);
  const u = verify(c[USER_COOKIE]);
  req.userEmail = u ? u.e : null;
  req.isAdmin = !!(ADMIN_PASSWORD && verify(c[ADMIN_COOKIE]));
  next();
}

/* ---------- Giới hạn tần suất theo IP (bộ nhớ trong) ---------- */
const buckets = new Map();
function rateLimit(name, max, windowMs) {
  return (req, res, next) => {
    const key = name + ":" + req.ip;
    const now = Date.now();
    let b = buckets.get(key);
    if (!b || b.reset < now) { b = { n: 0, reset: now + windowMs }; buckets.set(key, b); }
    if (++b.n > max) {
      res.setHeader("Retry-After", Math.ceil((b.reset - now) / 1000));
      return res.status(429).json({ error: "Bạn thao tác quá nhanh, vui lòng thử lại sau ít phút." });
    }
    next();
  };
}
setInterval(() => { const now = Date.now(); for (const [k, b] of buckets) if (b.reset < now) buckets.delete(k); }, 60e3).unref();

/**
 * Chống CSRF: yêu cầu thay đổi dữ liệu phải đến từ chính website
 * (header Origin/Referer trùng host). Webhook được miễn vì dùng khóa API riêng.
 */
function sameOrigin(req, res, next) {
  if (req.method === "GET" || req.method === "HEAD") return next();
  const src = req.headers.origin || req.headers.referer;
  if (!src) return res.status(403).json({ error: "Yêu cầu không hợp lệ." });
  try {
    if (new URL(src).host === req.headers.host) return next();
  } catch { /* rơi xuống lỗi */ }
  return res.status(403).json({ error: "Yêu cầu không hợp lệ." });
}

module.exports = {
  sha256, randomToken, safeEqual,
  startUserSession, startAdminSession, clearSession, USER_COOKIE, ADMIN_COOKIE,
  sessionMiddleware, rateLimit, sameOrigin
};
