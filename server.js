/**
 * Đánh máy 247 - Sản phẩm của VietSCI Editing Services
 * Máy chủ Node.js: website (thư mục /public) + API nhận đơn hàng (/api)
 *
 *  - URL sạch: /bang-gia → public/bang-gia.html; /bang-gia.html, /index, /blog/ → 301 về URL sạch
 *  - Nén gzip, ETag, header bảo mật, trang 404
 *  - Cấu hình qua biến môi trường — xem .env.example
 *
 * Chạy: npm start
 */
"use strict";

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const express = require("express");

const config = require("./server/config");
const { router: api } = require("./server/api");
const { sameOrigin } = require("./server/security");
const { flush } = require("./server/store");

const PUBLIC = config.PUBLIC_DIR;
const app = express();
app.disable("x-powered-by");
app.set("trust proxy", true); // Hostinger chạy sau proxy → lấy đúng IP khách cho giới hạn tần suất

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
};
app.use((req, res, next) => { res.set(SECURITY_HEADERS); next(); });

/* ---------- API ---------- */
app.use("/api", express.json({ limit: "100kb" }));
app.use("/api", (req, res, next) => (req.path.startsWith("/webhooks/") ? next() : sameOrigin(req, res, next)));
app.use("/api", (req, res, next) => { res.set("Cache-Control", "no-store"); next(); });
app.use("/api", api);

/* ---------- Website tĩnh ---------- */
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8", ".woff2": "font/woff2"
};
const COMPRESSIBLE = /^(text\/|application\/(json|xml)|image\/svg)/;

function safeJoin(urlPath) {
  const file = path.normalize(path.join(PUBLIC, urlPath));
  return file === PUBLIC || file.startsWith(PUBLIC + path.sep) ? file : null;
}
function isFile(p) { try { return fs.statSync(p).isFile(); } catch { return false; } }

function sendFile(req, res, status, file) {
  const type = TYPES[path.extname(file).toLowerCase()] || "application/octet-stream";
  // HTML/CSS/JS luôn kiểm tra bản mới (ETag → 304) để cập nhật hiển thị ngay; ảnh cache 7 ngày
  const revalidate = /^(text\/|application\/)/.test(type);
  const stat = fs.statSync(file);
  const etag = '"' + stat.size.toString(36) + "-" + Math.floor(stat.mtimeMs).toString(36) + '"';
  res.set({ "Content-Type": type, "Cache-Control": revalidate ? "no-cache" : "public, max-age=604800", ETag: etag });
  if (status === 200 && req.headers["if-none-match"] === etag) return res.status(304).end();

  let data = fs.readFileSync(file);
  if (COMPRESSIBLE.test(type) && /\bgzip\b/.test(req.headers["accept-encoding"] || "") && data.length > 1024) {
    data = zlib.gzipSync(data);
    res.set({ "Content-Encoding": "gzip", Vary: "Accept-Encoding" });
  }
  res.status(status).set("Content-Length", data.length);
  res.end(req.method === "HEAD" ? undefined : data);
}

app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") return res.status(405).set("Allow", "GET, HEAD").end();
  let pathname;
  try { pathname = decodeURIComponent(req.path); } catch { pathname = "/"; }
  const query = req.originalUrl.includes("?") ? req.originalUrl.slice(req.originalUrl.indexOf("?")) : "";

  // Chuẩn hóa URL (tốt cho SEO): bỏ .html, /index, dấu "/" cuối
  if (/\.html$/i.test(pathname) || /\/index$/i.test(pathname) || (pathname.length > 1 && pathname.endsWith("/"))) {
    const clean = pathname.replace(/\.html$/i, "").replace(/\/index$/i, "/").replace(/\/+$/, "");
    return res.redirect(301, (clean || "/") + query);
  }
  if (pathname === "/") return sendFile(req, res, 200, path.join(PUBLIC, "index.html"));

  const file = safeJoin(path.extname(pathname) ? pathname : pathname + ".html");
  if (file && isFile(file)) return sendFile(req, res, 200, file);
  sendFile(req, res, 404, path.join(PUBLIC, "404.html"));
});

app.listen(config.PORT, config.HOST, () => {
  console.log("Đánh máy 247 đang chạy tại http://localhost:" + config.PORT);
  console.log("  Dữ liệu:   " + config.DATA_DIR);
  console.log("  Email:     " + (config.SMTP ? "đã cấu hình (" + config.SMTP.host + ")" : "CHƯA cấu hình SMTP — email chỉ ghi ra log"));
  console.log("  Quản trị:  " + (config.ADMIN_PASSWORD ? "đã đặt mật khẩu" : "CHƯA đặt ADMIN_PASSWORD — trang /quan-tri bị khóa"));
  console.log("  SePay:     " + (config.SEPAY_API_KEY ? "webhook đang bật" : "tắt (xác nhận thanh toán thủ công)"));
});

process.on("uncaughtException", (e) => { console.error(e); try { flush(); } catch { /* bỏ qua */ } });
