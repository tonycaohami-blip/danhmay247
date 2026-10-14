/**
 * Dùng chung bảng giá với trình duyệt: nạp public/assets/js/data.js trong sandbox,
 * nên giá chỉ cần sửa một chỗ và máy chủ luôn tự tính lại giá (không tin giá từ trình duyệt).
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { PUBLIC_DIR } = require("./config");

const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(PUBLIC_DIR, "assets/js/data.js"), "utf8"), ctx, { filename: "data.js" });

const DM = ctx.DM;

const STATUS = {
  unpaid: "Chờ thanh toán",
  verifying: "Đang xác nhận thanh toán",
  paid: "Đã thanh toán",
  progress: "Đang thực hiện",
  review: "Đang kiểm tra",
  done: "Hoàn thành",
  cancelled: "Đã hủy"
};

function fmt(n) { return Math.round(n || 0).toLocaleString("vi-VN") + " đ"; }

module.exports = { DM, STATUS, fmt };
