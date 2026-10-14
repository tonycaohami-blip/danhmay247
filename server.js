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
const db = require("./server/db");
const { router: api, startJobs } = require("./server/api");
const { sameOrigin } = require("./server/security");

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
// Chưa mở được nơi lưu dữ liệu: website vẫn hiển thị, chỉ API tạm báo bảo trì (webhook SePay nhận 503 sẽ tự gửi lại sau)
app.use("/api", (req, res, next) => (db.isReady() ? next() : res.status(503).json({ error: "Hệ thống đặt hàng đang bảo trì, vui lòng thử lại sau ít phút hoặc gọi 0988 058 030." })));
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

/** Kết nối MySQL; nếu lỗi thì thử lại sau 30 giây (website vẫn chạy trong lúc chờ). */
async function connectDb() {
  try {
    await db.init();
    startJobs();
    console.log(db.kind === "mysql" ? "[MySQL] Đã kết nối " + config.DB.user + "@" + config.DB.host + "/" + config.DB.database : "[Lưu trữ] Đơn hàng lưu tại " + db.file + " (sao lưu mỗi ngày trong thư mục backups/)");
    return true;
  } catch (e) {
    console.error("[KHÔNG MỞ ĐƯỢC NƠI LƯU DỮ LIỆU] " + e.message);
    if (db.kind === "mysql") console.error("  Kiểm tra DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME trong biến môi trường.");
    console.error("  Thử lại sau 30 giây…");
    setTimeout(connectDb, 30e3).unref();
    return false;
  }
}

async function start() {
  await connectDb();
  const onListen = () => {
    console.log("Đánh máy 247 đang chạy tại " + (typeof config.PORT === "number" ? "http://localhost:" + config.PORT : "socket " + config.PORT));
    console.log("  Dữ liệu:   " + (db.kind === "mysql" ? "MySQL " + config.DB.user + "@" + config.DB.host + "/" + config.DB.database + (config.DB.prefix ? " (tiền tố " + config.DB.prefix + ")" : "") : config.DATA_DIR));
    console.log("  Liên kết:  " + config.SITE_URL);
    console.log("  Tệp tải lên: " + config.UPLOAD_DIR);
    console.log("  Email:     " + (config.SMTP ? "đã cấu hình (" + config.SMTP.host + ")" : "CHƯA cấu hình SMTP — email chỉ ghi ra log"));
    console.log("  Quản trị:  " + (config.ADMIN_PASSWORD ? "đã đặt mật khẩu" : "CHƯA đặt ADMIN_PASSWORD — trang /quan-tri bị khóa"));
    console.log("  SePay:     " + (config.SEPAY_API_KEY ? "webhook đang bật" : "tắt (xác nhận thanh toán thủ công)"));
  };
  // Cổng số → nghe trên HOST; đường dẫn socket (LiteSpeed) → nghe trực tiếp trên socket đó
  const server = typeof config.PORT === "number" ? app.listen(config.PORT, config.HOST, onListen) : app.listen(config.PORT, onListen);
  server.on("error", (e) => console.error("[server] Không mở được " + config.PORT + ": " + e.message));
  const stop = () => server.close(() => db.close().finally(() => process.exit(0)));
  process.on("SIGINT", stop);
  process.on("SIGTERM", stop);
  return server;
}

// Tự khởi động cả khi được chạy trực tiếp (node server.js / npm start)
// lẫn khi được nạp bằng require() — cách LiteSpeed/Hostinger khởi chạy ứng dụng Node.js.
// Bộ kiểm thử đặt DM_NO_AUTOSTART=1 để tự gọi start().
if (!process.env.DM_NO_AUTOSTART) start();
module.exports = { app, start };
