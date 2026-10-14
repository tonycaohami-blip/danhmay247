/**
 * Tạo ảnh chia sẻ mạng xã hội (PNG 1200×630) và logo PNG cho SEO.
 * Facebook, Zalo không hiển thị ảnh SVG khi xem trước liên kết, nên cần bản PNG.
 *
 * Cách chạy (chỉ cần trên máy khi thêm/sửa bài viết; thư viện không cần cài trên Hostinger):
 *   npm install --no-save @resvg/resvg-js
 *   node scripts/make-og-images.js
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

let Resvg;
try { ({ Resvg } = require("@resvg/resvg-js")); } catch (e) {
  console.error("Thiếu thư viện. Chạy: npm install --no-save @resvg/resvg-js");
  process.exit(1);
}

const ROOT = path.join(__dirname, "..");
const IMG = path.join(ROOT, "public/assets/img");
const OUT = path.join(IMG, "og");
fs.mkdirSync(OUT, { recursive: true });

const FONT = "'Segoe UI','Open Sans',Arial,sans-serif";
const SERIF = "'Times New Roman',Times,serif";
const render = (svg, width) => new Resvg(svg, { fitTo: width ? { mode: "width", value: width } : { mode: "original" }, font: { loadSystemFonts: true } }).render().asPng();

/** Nhãn thương hiệu góc trên trái */
const brand = `<g>
  <rect x="40" y="36" width="300" height="64" rx="32" fill="#ffffff" opacity=".96"/>
  <text x="70" y="79" font-family="${SERIF}" font-weight="700" font-size="30" fill="#f24d50">ĐÁNH MÁY</text>
  <text x="246" y="79" font-family="${SERIF}" font-weight="700" font-size="30" fill="#111">247</text>
  <rect x="305" y="52" width="4" height="34" fill="#f24d50"/>
</g>`;

// 1) Ảnh chia sẻ cho từng bài viết = ảnh bìa + nhãn thương hiệu
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, "public/assets/js/posts.js"), "utf8"), ctx);
let n = 0;
for (const p of ctx.DM.posts) {
  const src = path.join(ROOT, "public", p.cover);
  if (!fs.existsSync(src)) { console.warn("Thiếu ảnh bìa:", p.cover); continue; }
  const svg = fs.readFileSync(src, "utf8").replace(/<\/svg>\s*$/, brand + "</svg>");
  fs.writeFileSync(path.join(OUT, p.slug + ".png"), render(svg));
  n++;
}

// 2) Ảnh chia sẻ mặc định cho các trang
const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2d3078"/><stop offset="1" stop-color="#4a4fb0"/></linearGradient>
  <filter id="s" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#0b0d2a" flood-opacity=".3"/></filter></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <circle cx="1100" cy="-30" r="260" fill="#fff" opacity=".07"/><circle cx="60" cy="660" r="230" fill="#fff" opacity=".06"/><circle cx="1120" cy="560" r="90" fill="#f24d50" opacity=".3"/>
  <text x="80" y="200" font-family="${SERIF}" font-weight="700" font-size="76" fill="#ff6b6e">ĐÁNH MÁY</text>
  <text x="538" y="200" font-family="${SERIF}" font-weight="700" font-size="76" fill="#fff">247</text>
  <rect x="690" y="140" width="6" height="72" fill="#ff6b6e"/>
  <text x="80" y="278" font-family="${FONT}" font-size="34" fill="#fff">Dịch vụ đánh máy, chuyển âm và định dạng tài liệu</text>
  <text x="80" y="330" font-family="${FONT}" font-size="34" fill="#c9cbf0">100% con người gõ · Giao nhanh từ 6 giờ</text>
  <g font-family="${FONT}" font-weight="700" font-size="24" fill="#fff">
    <rect x="80" y="390" width="250" height="56" rx="28" fill="#f24d50"/><text x="205" y="426" text-anchor="middle">PDF sang Word</text>
    <rect x="345" y="390" width="270" height="56" rx="28" fill="#3bb54a"/><text x="480" y="426" text-anchor="middle">Viết tay sang Word</text>
    <rect x="630" y="390" width="200" height="56" rx="28" fill="#f3a33b"/><text x="730" y="426" text-anchor="middle">Chuyển âm</text>
  </g>
  <text x="80" y="540" font-family="${FONT}" font-size="26" fill="#e7e8f6">danhmay247.com · 0988 058 030</text>
  <text x="80" y="580" font-family="${FONT}" font-size="20" fill="#a9acd9">Sản phẩm của VietSCI Editing Services</text>
  <g filter="url(#s)"><rect x="900" y="250" width="220" height="290" rx="14" fill="#fff"/>
  ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="928" y="${300 + i * 30}" width="${i % 3 === 2 ? 110 : 164}" height="10" rx="5" fill="#d9dbe6"/>`).join("")}
  <rect x="928" y="272" width="96" height="13" rx="6.5" fill="#2d3078"/></g>
</svg>`;
fs.writeFileSync(path.join(OUT, "default.png"), render(defaultSvg));

// 3) Logo PNG (Google dùng trong kết quả tìm kiếm cho tổ chức)
fs.writeFileSync(path.join(IMG, "logo-512.png"), render(fs.readFileSync(path.join(IMG, "favicon.svg"), "utf8"), 512));

console.log("Đã tạo " + n + " ảnh bài viết + ảnh mặc định + logo-512.png");
