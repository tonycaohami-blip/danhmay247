/**
 * Cấu hình đọc từ biến môi trường (hPanel Hostinger → Environment variables)
 * hoặc tệp .env ở thư mục gốc khi chạy trên máy.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

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
const DATA_DIR = path.resolve(ROOT, env.DATA_DIR || "data");
fs.mkdirSync(path.join(DATA_DIR, "uploads"), { recursive: true });

// Khóa ký phiên đăng nhập: lấy từ SESSION_SECRET, nếu chưa có thì tạo và lưu lại trong DATA_DIR
function sessionSecret() {
  if (env.SESSION_SECRET && env.SESSION_SECRET.length >= 32) return env.SESSION_SECRET;
  const file = path.join(DATA_DIR, ".session-secret");
  if (fs.existsSync(file)) return fs.readFileSync(file, "utf8").trim();
  const s = crypto.randomBytes(48).toString("hex");
  fs.writeFileSync(file, s, { mode: 0o600 });
  return s;
}

const smtpReady = !!(env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASS);

module.exports = {
  ROOT,
  PUBLIC_DIR: path.join(ROOT, "public"),
  DATA_DIR,
  UPLOAD_DIR: path.join(DATA_DIR, "uploads"),
  PORT: Number(env.PORT) || 3000,
  HOST: env.HOST || "0.0.0.0",
  IS_PROD: env.NODE_ENV === "production",
  // Địa chỉ công khai của website, dùng cho liên kết trong email (vd: https://danhmay247.com)
  SITE_URL: (env.SITE_URL || "http://localhost:" + (Number(env.PORT) || 3000)).replace(/\/+$/, ""),
  SESSION_SECRET: sessionSecret(),
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
  MAX_FILE_MB: Number(env.MAX_FILE_MB) || 50
};
