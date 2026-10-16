/**
 * Chọn nơi lưu dữ liệu:
 * - Mặc định: tệp DATA_DIR/db.json (không cần cài đặt gì) - xem store-json.js
 * - Nếu có khai báo DB_USER và DB_NAME: dùng MySQL - xem store-mysql.js
 */
"use strict";

const config = require("./config");

const useMysql = !!(config.DB.user && config.DB.database);
const store = useMysql ? require("./store-mysql") : require("./store-json");
if (useMysql) store.kind = "mysql";

module.exports = store;
