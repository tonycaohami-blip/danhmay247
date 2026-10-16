/**
 * IndexNow - chủ động báo URL mới/đã cập nhật cho các công cụ tìm kiếm hỗ trợ IndexNow (Bing và đối tác).
 * Google KHÔNG dùng IndexNow: với Google hãy gửi /sitemap.xml trong Google Search Console.
 *
 * - Khóa xác minh nằm ở public/<KEY>.txt (giao thức yêu cầu khóa công khai, không phải bí mật)
 * - Sau mỗi lần khởi động (deploy) ~90 giây, máy chủ so danh sách URL trong sitemap với lần gửi trước,
 *   chỉ gửi URL mới hoặc có ngày cập nhật mới. Lần đầu gửi toàn bộ.
 * - Chỉ chạy khi SITE_URL là https và không phải localhost. Tắt bằng biến môi trường INDEXNOW=0.
 */
"use strict";

const config = require("./config");
const db = require("./db");
const seo = require("./seo");

const KEY = "26c6ca444b5c59134efd40581c369de2";
const ENDPOINT = "https://api.indexnow.org/indexnow";

function enabled() {
  return process.env.INDEXNOW !== "0" && /^https:\/\//.test(config.SITE_URL) && !/localhost|127\.0\.0\.1/.test(config.SITE_URL);
}

/** Gửi danh sách URL (tối đa 10.000 mỗi lần theo giao thức). Trả về mã HTTP. */
async function submit(urls) {
  const host = new URL(config.SITE_URL).host;
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: KEY, keyLocation: config.SITE_URL + "/" + KEY + ".txt", urlList: urls.slice(0, 10000) }),
    signal: AbortSignal.timeout(20000)
  });
  return res.status;
}

/** So với lần gửi trước, chỉ gửi URL mới hoặc có lastmod mới. */
async function run() {
  if (!enabled() || !db.isReady()) return;
  try {
    const now = seo.sitemapUrls().map((u) => u.loc + "|" + (u.lastmod || ""));
    const prev = new Set(JSON.parse((await db.settings.get("indexnow_sent")) || "[]"));
    const fresh = now.filter((x) => !prev.has(x)).map((x) => x.split("|")[0]);
    if (!fresh.length) return;
    const status = await submit(fresh);
    if (status === 200 || status === 202) {
      await db.settings.set("indexnow_sent", JSON.stringify(now));
      console.log("[IndexNow] Đã báo " + fresh.length + " URL cho công cụ tìm kiếm (mã " + status + ").");
    } else {
      console.warn("[IndexNow] Gửi chưa thành công (mã " + status + "), sẽ thử lại ở lần khởi động sau.");
    }
  } catch (e) {
    console.warn("[IndexNow] Lỗi: " + e.message);
  }
}

function schedule() {
  if (enabled()) setTimeout(run, 90e3).unref();
}

module.exports = { KEY, schedule, run, submit, enabled };
