/**
 * Kho dữ liệu JSON đơn giản, ghi nguyên tử (ghi tệp tạm rồi đổi tên) để không hỏng dữ liệu
 * khi máy chủ tắt đột ngột. Đủ cho quy mô vài chục nghìn đơn hàng.
 * Dữ liệu nằm ở DATA_DIR/db.json — hãy sao lưu thư mục DATA_DIR định kỳ.
 */
"use strict";

const fs = require("fs");
const path = require("path");
const { DATA_DIR } = require("./config");

const FILE = path.join(DATA_DIR, "db.json");
const EMPTY = { orders: [], users: {}, contacts: [], reviews: [], loginTokens: {}, payments: [] };

let db;
try {
  db = Object.assign({}, EMPTY, JSON.parse(fs.readFileSync(FILE, "utf8")));
} catch (e) {
  if (fs.existsSync(FILE)) {
    // Tệp hỏng: giữ lại bản sao để kiểm tra thay vì ghi đè mất dữ liệu
    fs.copyFileSync(FILE, FILE + ".corrupt-" + Date.now());
    console.error("[store] db.json hỏng, đã sao lưu và khởi tạo lại:", e.message);
  }
  db = JSON.parse(JSON.stringify(EMPTY));
}

let timer = null;
function flush() {
  clearTimeout(timer);
  timer = null;
  const tmp = FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(db));
  fs.renameSync(tmp, FILE);
}
/** Lên lịch ghi (gộp nhiều thay đổi liên tiếp thành một lần ghi). */
function save() {
  if (!timer) timer = setTimeout(flush, 150);
}

for (const sig of ["SIGINT", "SIGTERM"]) {
  process.on(sig, () => { if (timer) flush(); process.exit(0); });
}
process.on("exit", () => { if (timer) flush(); });

module.exports = { db, save, flush };
