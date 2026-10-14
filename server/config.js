/**
 * Cấu hình đọc từ biến môi trường (hPanel Hostinger → Environment variables)
 * hoặc tệp .env ở thư mục gốc khi chạy trên máy.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

// Nạp .env đơn giản (KEY=VALUE), không ghi đè biến đã có
(function loadEnv() {
  const file = path.join(ROOT, ".env");
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (!m || process.env[m[1]] !== undefined) continue;
    process.env[m[1]] = m[2].replace(/^(['"])(.*)\1$/, "$2");
  }
})();

const env = process.env;

/**
 * Thư mục lưu đơn hàng + tệp khách gửi.
 * Mặc định: <thư mục gốc tài khoản>/danhmay247-data (vd /home/u123456789/danhmay247-data trên Hostinger)
 * — nằm NGOÀI thư mục code nên deploy lại không bị mất dữ liệu. Không ghi được thì dùng ./data.
 */
function pickDataDir() {
  const candidates = env.DATA_DIR ? [path.resolve(ROOT, env.DATA_DIR)] : [path.join(require("os").homedir(), "danhmay247-data"), path.join(ROOT, "data")];
  for (const dir of candidates) {
    try {
      fs.mkdirSync(path.join(dir, "uploads"), { recursive: true });
      fs.accessSync(dir, fs.constants.W_OK);
      return dir;
    } catch (e) {
      console.error("[config] Không ghi được vào " + dir + ": " + e.message);
    }
  }
  // Không để cả website sập: dùng thư mục tạm và cảnh báo rõ trong log
  const tmp = path.join(require("os").tmpdir(), "danhmay247-data");
  fs.mkdirSync(path.join(tmp, "uploads"), { recursive: true });
  console.error("[config] CẢNH BÁO: đang lưu dữ liệu tạm tại " + tmp + " — hãy đặt biến DATA_DIR tới một thư mục ghi được để không mất đơn.");
  return tmp;
}
const DATA_DIR = pickDataDir();

// Đang chạy thật (production) mà SITE_URL vẫn trỏ về máy cục bộ → email sẽ có liên kết hỏng, nên tự sửa
if (env.NODE_ENV === "production" && /localhost|127\.0\.0\.1/i.test(env.SITE_URL || "")) {
  console.warn("[config] SITE_URL đang là " + env.SITE_URL + " — dùng https://danhmay247.com cho liên kết trong email.");
  env.SITE_URL = "https://danhmay247.com";
}

const smtpReady =!!(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);

module.exports = {
  ROOT,
  PUBLIC_DIR: path.join(ROOT, "public"),
  DATA_DIR,
  UPLOAD_DIR: path.join(DATA_DIR, "uploads"),
  // Số cổng (vd 3000) hoặc đường dẫn socket do LiteSpeed/Hostinger cấp — giữ nguyên dạng chuỗi nếu không phải số
  PORT: /^\d+$/.test(String(env.PORT || "").trim()) ? Number(env.PORT) : (String(env.PORT || "").trim() || 3000),
  HOST: env.HOST || "0.0.0.0",
  IS_PROD: env.NODE_ENV === "production",
  // Địa chỉ công khai của website, dùng cho mọi liên kết trong email.
  // Mặc định là tên miền thật; chỉ đặt SITE_URL khi chạy thử trên máy (vd: http://localhost:3000).
  SITE_URL: (env.SITE_URL || "https://danhmay247.com").trim().replace(/\/+$/, ""),
  // Khóa ký phiên đăng nhập. Để trống: tự tạo một lần và lưu trong bảng settings của MySQL
  SESSION_SECRET: env.SESSION_SECRET && env.SESSION_SECRET.length >= 32 ? env.SESSION_SECRET : null,
  ADMIN_PASSWORD: env.ADMIN_PASSWORD || "",
  ADMIN_EMAIL: env.ADMIN_EMAIL || "trungtamdanhmay247@gmail.com",
  SMTP: smtpReady ? {
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT) || 465,
    secure: (Number(env.SMTP_PORT) || 465) === 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    from: env.MAIL_FROM || "Đánh máy 247 <" + env.SMTP_USER + ">"
  } : null,
  // Khóa API của SePay (đối soát chuyển khoản tự động). Để trống = tắt webhook.
  SEPAY_API_KEY: env.SEPAY_API_KEY || "",
  MAX_FILES: 6,
  MAX_FILE_MB: Number(env.MAX_FILE_MB) || 50,
  // MySQL — lấy trong hPanel → Databases → MySQL Databases
  DB: {
    host: env.DB_HOST || "localhost",
    port: Number(env.DB_PORT) || 3306,
    user: env.DB_USER || "",
    password: env.DB_PASSWORD || "",
    database: env.DB_NAME || "",
    prefix: (env.DB_PREFIX || "").replace(/[^a-z0-9_]/gi, "")
  }
};
