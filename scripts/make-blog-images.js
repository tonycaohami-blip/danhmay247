/**
 * Tạo ảnh bìa (1200×630) và hình minh họa SVG cho blog - chạy: node scripts/make-blog-images.js
 * Ảnh vector, nhẹ, sắc nét trên mọi màn hình, đồng bộ màu thương hiệu Đánh máy 247.
 */
"use strict";
const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "public", "assets", "img", "blog");
fs.mkdirSync(OUT, { recursive: true });

const RED = "#f24d50", NAVY = "#2d3078", INK = "#1d2040", GREEN = "#3bb54a", AMBER = "#f3a33b", BLUE = "#2b579a";
const FONT = "'Open Sans','Segoe UI',Arial,sans-serif";
const SERIF = "'Times New Roman',Times,'Noto Serif',serif"; // phông có đủ dấu tiếng Việt (ảnh SVG không dùng được phông web)

/* ---------- khối dựng hình dùng chung ---------- */
const defs = (a, b) => `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
  <filter id="sh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#0b0d2a" flood-opacity=".28"/></filter>
  <filter id="sh2" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0b0d2a" flood-opacity=".22"/></filter>
  <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="2" fill="#fff" opacity=".13"/></pattern>
</defs>`;
const backdrop = () => `<rect width="1200" height="630" fill="url(#bg)"/>
<rect width="1200" height="630" fill="url(#dots)"/>
<circle cx="1080" cy="-40" r="260" fill="#fff" opacity=".07"/>
<circle cx="80" cy="640" r="220" fill="#fff" opacity=".06"/>
<circle cx="1110" cy="560" r="90" fill="${RED}" opacity=".25"/>`;
const svg = (a, b, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img">${defs(a, b)}${backdrop()}${body}</svg>`;

/** Tờ giấy có các dòng chữ giả */
function paper(x, y, w, h, opt = {}) {
  const lines = [];
  const n = opt.lines || Math.floor((h - 90) / 30);
  for (let i = 0; i < n; i++) {
    const lw = (w - 80) * (i % 4 === 3 ? 0.55 : i % 3 === 1 ? 0.85 : 0.95);
    lines.push(`<rect x="${x + 40}" y="${y + 70 + i * 30}" width="${lw}" height="11" rx="5.5" fill="${opt.ink || "#d9dbe6"}"/>`);
  }
  return `<g filter="url(#sh)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="#fff"/>
  <rect x="${x + 40}" y="${y + 34}" width="${w * 0.42}" height="15" rx="7.5" fill="${opt.head || NAVY}" opacity=".85"/>${lines.join("")}</g>`;
}
/** Dòng chữ viết tay (đường cong) */
function scribble(x, y, w, color = "#31407a", rows = 6, gap = 34) {
  let out = "";
  for (let r = 0; r < rows; r++) {
    const yy = y + r * gap, ww = w * (r % 3 === 2 ? 0.6 : 0.92);
    let d = `M${x} ${yy}`;
    for (let i = 0; i < ww; i += 22) d += ` q 6 ${-(8 + (i % 3) * 3)} 11 0 q 5 ${8 + (i % 2) * 3} 11 0`;
    out += `<path d="${d}" fill="none" stroke="${color}" stroke-width="3.2" stroke-linecap="round" opacity=".85"/>`;
  }
  return out;
}
function keycap(x, y, w, h, label, opt = {}) {
  return `<g filter="url(#sh2)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${opt.fill || "#fff"}"/>
  <rect x="${x}" y="${y + h - 8}" width="${w}" height="8" rx="4" fill="#000" opacity=".06"/>
  ${label ? `<text x="${x + w / 2}" y="${y + h / 2 + (opt.size || 26) * 0.36}" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="${opt.size || 26}" fill="${opt.color || INK}">${label}</text>` : ""}</g>`;
}
const pill = (x, y, w, label, fill = RED) =>
  `<g filter="url(#sh2)"><rect x="${x}" y="${y}" width="${w}" height="46" rx="23" fill="${fill}"/><text x="${x + w / 2}" y="${y + 30}" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="20" fill="#fff">${label}</text></g>`;
const badge = (x, y, label, fill) =>
  `<g filter="url(#sh2)"><rect x="${x}" y="${y}" width="96" height="112" rx="14" fill="${fill}"/><text x="${x + 48}" y="${y + 66}" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="${label.length > 3 ? 24 : 30}" fill="#fff">${label}</text></g>`;
const check = (cx, cy, r = 34, fill = GREEN) =>
  `<g filter="url(#sh2)"><circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/><path d="M${cx - r * 0.42} ${cy + 2} l${r * 0.3} ${r * 0.3} l${r * 0.55} -${r * 0.6}" fill="none" stroke="#fff" stroke-width="${r * 0.2}" stroke-linecap="round" stroke-linejoin="round"/></g>`;
const arrow = (x1, y, x2, color = "#fff") =>
  `<path d="M${x1} ${y} H${x2 - 16}" stroke="${color}" stroke-width="7" stroke-linecap="round" opacity=".9"/><path d="M${x2 - 26} ${y - 16} L${x2} ${y} L${x2 - 26} ${y + 16}" fill="none" stroke="${color}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>`;

/** Chữ đơn giản */
const txt = (x, y, s, o = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${o.anchor || "start"}" font-family="${o.family || FONT}" font-weight="${o.weight || 400}" font-size="${o.size || 24}"${o.italic ? ' font-style="italic"' : ""} fill="${o.fill || INK}"${o.opacity ? ` opacity="${o.opacity}"` : ""}>${s}</text>`;
/** Công thức có chỉ số: "2H_2 + O_2", "Fe^{3+}", "m/s^2" → các tspan dịch lên/xuống */
function chem(x, y, src, o = {}) {
  const size = o.size || 40, parts = [];
  const re = /([_^])(\{[^}]*\}|.)/g;
  let last = 0, m;
  while ((m = re.exec(src))) {
    if (m.index > last) parts.push([0, src.slice(last, m.index)]);
    parts.push([m[1] === "_" ? 1 : -1, m[2].replace(/^\{|\}$/g, "")]);
    last = re.lastIndex;
  }
  if (last < src.length) parts.push([0, src.slice(last)]);
  let cur = 0, out = "";
  for (const [lv, s] of parts) {
    const target = lv * size * 0.3, dy = target - cur;
    cur = target;
    out += `<tspan dy="${dy.toFixed(1)}"${lv ? ` font-size="${Math.round(size * 0.62)}"` : ""}>${s}</tspan>`;
  }
  return `<text x="${x}" y="${y}" text-anchor="${o.anchor || "middle"}" font-family="${o.family || SERIF}" font-size="${size}"${o.italic ? ' font-style="italic"' : ""} font-weight="${o.weight || 400}" fill="${o.fill || INK}">${out}</text>`;
}
/** Thẻ trắng có bóng */
const card = (x, y, w, h, fill = "#fff", rx = 20) => `<g filter="url(#sh)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/></g>`;
/** Biểu tượng cảnh báo tam giác */
const warnIcon = (cx, cy, s = 1, fill = AMBER) =>
  `<g filter="url(#sh2)" transform="translate(${cx} ${cy}) scale(${s})"><path d="M0 -62 L66 52 H-66 Z" fill="${fill}" stroke="${fill}" stroke-width="14" stroke-linejoin="round"/><rect x="-7" y="-26" width="14" height="46" rx="7" fill="#fff"/><circle cy="36" r="8" fill="#fff"/></g>`;
/** Sơ đồ quy trình ngang dạng hình minh họa */
function flow(steps, note, W = 960) {
  const gap = W / steps.length;
  let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 330" role="img" font-family="${FONT}"><rect width="${W}" height="330" rx="18" fill="#f6f7fb"/>`;
  steps.forEach(([t, d, c], i) => {
    const x = gap / 2 + i * gap;
    if (i) s += `<path d="M${x - gap + 52} 110 H${x - 56}" stroke="#c9cbd8" stroke-width="4" stroke-dasharray="8 7"/><path d="M${x - 66} 100 L${x - 54} 110 L${x - 66} 120" fill="none" stroke="#c9cbd8" stroke-width="4"/>`;
    s += `<circle cx="${x}" cy="110" r="46" fill="${c}"/><text x="${x}" y="127" text-anchor="middle" font-size="44" font-weight="800" fill="#fff">${i + 1}</text>`;
    s += `<text x="${x}" y="200" text-anchor="middle" font-size="19" font-weight="800" fill="#1d2040">${t}</text>`;
    d.split("\n").forEach((line, k) => { s += `<text x="${x}" y="${230 + k * 22}" text-anchor="middle" font-size="14.5" fill="#55586b">${line}</text>`; });
  });
  return s + `<text x="${W / 2}" y="305" text-anchor="middle" font-size="14" fill="#7f8491">${note}</text></svg>`;
}

/** Mã QR minh họa (không quét được) - ô vuông giả ngẫu nhiên cố định + 3 ô định vị */
function qrish(x, y, size) {
  const n = 21, c = size / n;
  let s = `<rect x="${x - 8}" y="${y - 8}" width="${size + 16}" height="${size + 16}" fill="#fff"/>`;
  const finder = (fx, fy) => `<rect x="${x + fx * c}" y="${y + fy * c}" width="${7 * c}" height="${7 * c}" fill="${INK}"/><rect x="${x + (fx + 1) * c}" y="${y + (fy + 1) * c}" width="${5 * c}" height="${5 * c}" fill="#fff"/><rect x="${x + (fx + 2) * c}" y="${y + (fy + 2) * c}" width="${3 * c}" height="${3 * c}" fill="${INK}"/>`;
  let seed = 7;
  for (let r = 0; r < n; r++) for (let k = 0; k < n; k++) {
    seed = (seed * 9301 + 49297) % 233280;
    const inFinder = (r < 8 && k < 8) || (r < 8 && k > 12) || (r > 12 && k < 8);
    if (!inFinder && seed / 233280 > 0.52) s += `<rect x="${(x + k * c).toFixed(1)}" y="${(y + r * c).toFixed(1)}" width="${c.toFixed(1)}" height="${c.toFixed(1)}" fill="${INK}"/>`;
  }
  return s + finder(0, 0) + finder(14, 0) + finder(0, 14);
}

/* ---------- ẢNH BÌA ---------- */
const covers = {
  // 6 bài cũ
  "ocr-hay-danh-may-thu-cong": svg(NAVY, "#4a4fb0", `
    <g transform="rotate(-4 470 320)"><rect x="300" y="110" width="340" height="430" rx="16" fill="#f4ecd8" filter="url(#sh)"/>${scribble(340, 190, 270, "#5a4a2a", 9, 36)}</g>
    ${arrow(660, 320, 740)}
    ${paper(760, 110, 340, 430, { lines: 11 })}
    <g filter="url(#sh)"><circle cx="420" cy="420" r="70" fill="none" stroke="#fff" stroke-width="16"/><path d="M470 470 L540 540" stroke="#fff" stroke-width="22" stroke-linecap="round"/></g>
    ${check(1090, 140)}`),
  "meo-chup-tai-lieu-bang-dien-thoai": svg(RED, "#ff8a6b", `
    ${paper(560, 130, 380, 420, { lines: 10 })}
    <g filter="url(#sh)" transform="rotate(-8 420 330)"><rect x="300" y="120" width="250" height="430" rx="36" fill="${INK}"/><rect x="316" y="160" width="218" height="350" rx="12" fill="#e9ebf5"/>
      <rect x="350" y="200" width="150" height="190" rx="6" fill="#fff"/>${scribble(368, 240, 110, "#9aa0c3", 4, 30)}
      <circle cx="425" cy="460" r="26" fill="#fff" stroke="${RED}" stroke-width="6"/></g>
    <g stroke="#fff" stroke-width="8" stroke-linecap="round" fill="none" opacity=".95"><path d="M560 130 h-40 v40"/><path d="M940 130 h40 v40"/><path d="M560 550 h-40 v-40"/><path d="M940 550 h40 v-40"/></g>`),
  "chuyen-am-phong-van-nghien-cuu": svg("#1f6f4a", GREEN, `
    <g filter="url(#sh)"><rect x="300" y="150" width="120" height="210" rx="60" fill="#fff"/><path d="M270 300 a90 90 0 0 0 180 0" fill="none" stroke="#fff" stroke-width="16" stroke-linecap="round"/><path d="M360 390 v70 M310 470 h100" stroke="#fff" stroke-width="16" stroke-linecap="round"/></g>
    ${Array.from({ length: 22 }, (_, i) => { const h = 30 + Math.abs(Math.sin(i * 1.3)) * 130; return `<rect x="${500 + i * 16}" y="${320 - h / 2}" width="9" height="${h}" rx="4.5" fill="#fff" opacity=".85"/>`; }).join("")}
    ${paper(860, 140, 260, 360, { lines: 8, head: GREEN })}`),
  "dinh-dang-luan-van-chuan": svg("#6a3fb5", "#9b51e0", `
    ${paper(380, 150, 330, 420, { lines: 10 })}
    ${paper(560, 110, 330, 420, { lines: 10, head: RED })}
    <g filter="url(#sh)" transform="translate(860 120)"><path d="M0 60 L120 0 L240 60 L120 120 Z" fill="${INK}"/><path d="M50 85 v60 c0 30 140 30 140 0 v-60" fill="${INK}"/><path d="M220 70 v80" stroke="${AMBER}" stroke-width="8" stroke-linecap="round"/><circle cx="220" cy="158" r="12" fill="${AMBER}"/></g>`),
  "so-hoa-tai-lieu-doanh-nghiep": svg(INK, NAVY, `
    <g filter="url(#sh)"><rect x="280" y="170" width="200" height="380" rx="10" fill="#fff"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${305 + (i % 3) * 58}" y="${200 + Math.floor(i / 3) * 80}" width="36" height="46" rx="5" fill="${i % 4 === 1 ? AMBER : "#c9cde3"}"/>`).join("")}</g>
    ${arrow(510, 360, 620)}
    <g filter="url(#sh)"><rect x="650" y="210" width="440" height="290" rx="22" fill="#fff"/><rect x="650" y="210" width="440" height="48" rx="22" fill="${BLUE}"/>
    ${["#f3a33b", RED, GREEN, "#6c8cff"].map((c, i) => `<g transform="translate(${690 + i * 100} 300)"><path d="M0 12 h30 l10 -12 h40 v80 h-80 z" fill="${c}"/></g>`).join("")}
    <rect x="690" y="420" width="360" height="12" rx="6" fill="#e3e5ef"/><rect x="690" y="420" width="250" height="12" rx="6" fill="${GREEN}"/></g>`),
  "bao-mat-khi-thue-ngoai-danh-may": svg("#7a4b2a", "#d49265", `
    ${paper(330, 130, 330, 420, { lines: 10 })}
    <g filter="url(#sh)" transform="translate(690 150)"><path d="M150 0 L300 55 V180 C300 280 230 330 150 360 C70 330 0 280 0 180 V55 Z" fill="#fff"/>
    <rect x="95" y="160" width="110" height="90" rx="14" fill="${INK}"/><path d="M118 160 v-28 a32 32 0 0 1 64 0 v28" fill="none" stroke="${INK}" stroke-width="16"/><circle cx="150" cy="200" r="12" fill="${AMBER}"/></g>`),

  // 10 bài mới
  "go-10-ngon-30-ngay": svg(NAVY, "#5a5fd0", (() => {
    const rows = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"], ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"]];
    const home = "ASDFJKL;";
    let k = `<g filter="url(#sh)"><rect x="190" y="170" width="820" height="330" rx="26" fill="#eef0f8"/></g>`;
    rows.forEach((r, ri) => r.forEach((ch, i) => { k += keycap(225 + ri * 26 + i * 76, 200 + ri * 92, 64, 72, ch, { fill: home.includes(ch) && ri === 1 ? RED : "#fff", color: home.includes(ch) && ri === 1 ? "#fff" : INK }); }));
    k += pill(470, 520, 260, "60+ từ/phút", GREEN);
    return k;
  })()),
  "telex-hay-vni": svg(RED, "#ff7e6b", `
    ${keycap(170, 170, 120, 120, "aa", { size: 40 })}${keycap(310, 170, 120, 120, "w", { size: 44 })}${keycap(450, 170, 120, 120, "dd", { size: 40 })}
    ${keycap(170, 320, 120, 120, "s", { size: 44 })}${keycap(310, 320, 120, 120, "f", { size: 44 })}${keycap(450, 320, 120, 120, "j", { size: 44 })}
    <text x="370" y="510" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="34" fill="#fff">TELEX</text>
    <text x="600" y="345" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="56" fill="#fff" opacity=".9">vs</text>
    ${keycap(650, 170, 120, 120, "6", { size: 48 })}${keycap(790, 170, 120, 120, "7", { size: 48 })}${keycap(930, 170, 120, 120, "9", { size: 48 })}
    ${keycap(650, 320, 120, 120, "1", { size: 48 })}${keycap(790, 320, 120, 120, "2", { size: 48 })}${keycap(930, 320, 120, 120, "5", { size: 48 })}
    <text x="850" y="510" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="34" fill="#fff">VNI</text>`),
  "loi-chinh-ta-tieng-viet": svg("#b03a3d", RED, `
    <g filter="url(#sh)"><rect x="220" y="140" width="760" height="350" rx="22" fill="#fff"/></g>
    <text x="270" y="250" font-family="${SERIF}" font-size="54" fill="${INK}">chuẩn đoán</text>
    <path d="M270 268 q8 10 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke="${RED}" stroke-width="4"/>
    ${arrow(590, 235, 680, RED)}
    <text x="700" y="250" font-family="${SERIF}" font-size="54" fill="${GREEN}">chẩn đoán</text>
    <text x="270" y="400" font-family="${SERIF}" font-size="54" fill="${INK}">sơ xuất</text>
    <path d="M270 418 q8 10 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0" fill="none" stroke="${RED}" stroke-width="4"/>
    ${arrow(590, 385, 680, RED)}
    <text x="700" y="400" font-family="${SERIF}" font-size="54" fill="${GREEN}">sơ suất</text>
    ${check(990, 150, 40)}`),
  "sua-loi-font-tcvn3-vni-unicode": svg(INK, "#3a3f8f", `
    <g filter="url(#sh)"><rect x="160" y="170" width="400" height="300" rx="20" fill="#fff"/></g>
    <text x="200" y="260" font-family="Courier New,monospace" font-size="34" fill="#9a2a2d">Céng hßa x·</text>
    <text x="200" y="320" font-family="Courier New,monospace" font-size="34" fill="#9a2a2d">héi chñ nghÜa</text>
    <text x="200" y="380" font-family="Courier New,monospace" font-size="34" fill="#9a2a2d">ViÖt Nam</text>
    ${arrow(590, 320, 680)}
    <g filter="url(#sh)"><rect x="700" y="170" width="400" height="300" rx="20" fill="#fff"/></g>
    <text x="740" y="260" font-family="${SERIF}" font-size="34" fill="${INK}">Cộng hòa xã</text>
    <text x="740" y="320" font-family="${SERIF}" font-size="34" fill="${INK}">hội chủ nghĩa</text>
    <text x="740" y="380" font-family="${SERIF}" font-size="34" fill="${INK}">Việt Nam</text>
    ${pill(820, 500, 170, "Unicode", GREEN)}`),
  "the-thuc-van-ban-nghi-dinh-30": svg("#8a1f22", "#c8383b", `
    <g filter="url(#sh)"><rect x="400" y="80" width="400" height="500" rx="10" fill="#fff"/></g>
    <rect x="440" y="110" width="140" height="10" rx="5" fill="#9aa0c3"/><rect x="640" y="110" width="130" height="10" rx="5" fill="${INK}"/><rect x="660" y="128" width="90" height="8" rx="4" fill="${INK}"/>
    <rect x="530" y="190" width="140" height="14" rx="7" fill="${INK}"/>
    ${Array.from({ length: 9 }, (_, i) => `<rect x="${i % 4 === 0 ? 470 : 448}" y="${230 + i * 26}" width="${i % 4 === 3 ? 200 : 316}" height="9" rx="4.5" fill="#d9dbe6"/>`).join("")}
    <circle cx="690" cy="500" r="46" fill="none" stroke="${RED}" stroke-width="6" opacity=".8"/><circle cx="690" cy="500" r="30" fill="none" stroke="${RED}" stroke-width="3" opacity=".8"/>
    <g stroke="#fff" stroke-width="3" stroke-dasharray="8 8" opacity=".9"><path d="M435 80 V580"/><path d="M780 80 V580"/></g>
    <text x="330" y="330" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="24" fill="#fff">30–35 mm</text>
    <text x="880" y="330" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="24" fill="#fff">15–20 mm</text>
    ${pill(880, 120, 150, "A4", INK)}`),
  "so-hoa-gia-pha-hoi-ky": svg("#6b4423", "#c08552", (() => {
    const nodes = [[600, 140], [430, 280], [770, 280], [330, 420], [530, 420], [670, 420], [870, 420]];
    const links = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6]];
    let g = links.map(([a, b]) => `<path d="M${nodes[a][0]} ${nodes[a][1] + 40} V${(nodes[a][1] + nodes[b][1]) / 2 + 20} H${nodes[b][0]} V${nodes[b][1] - 40}" fill="none" stroke="#fff" stroke-width="5" opacity=".8"/>`).join("");
    g += nodes.map(([x, y], i) => `<g filter="url(#sh2)"><rect x="${x - 70}" y="${y - 40}" width="140" height="80" rx="14" fill="${i === 0 ? AMBER : "#fff"}"/><circle cx="${x - 36}" cy="${y}" r="18" fill="${i === 0 ? "#fff" : "#e6d6c3"}"/><rect x="${x - 8}" y="${y - 12}" width="60" height="9" rx="4.5" fill="${i === 0 ? "#fff" : "#c9b39a"}"/><rect x="${x - 8}" y="${y + 6}" width="40" height="8" rx="4" fill="${i === 0 ? "#fff" : "#e0d0bc"}"/></g>`).join("");
    g += `<g transform="rotate(-6 200 200)"><rect x="110" y="120" width="190" height="240" rx="10" fill="#f4ecd8" filter="url(#sh)"/>${scribble(135, 170, 140, "#5a4a2a", 5, 34)}</g>`;
    return g;
  })()),
  "phim-tat-word": svg(BLUE, "#4a7fd0", `
    ${keycap(250, 220, 220, 150, "Ctrl", { size: 50 })}
    <text x="515" y="320" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="70" fill="#fff">+</text>
    ${keycap(560, 220, 150, 150, "S", { size: 60, fill: RED, color: "#fff" })}
    ${keycap(780, 150, 110, 110, "B", { size: 44 })}${keycap(910, 150, 110, 110, "I", { size: 44 })}
    ${keycap(780, 280, 110, 110, "F4", { size: 38 })}${keycap(910, 280, 110, 110, "H", { size: 44 })}
    ${keycap(780, 410, 240, 90, "Shift + F3", { size: 28 })}
    ${badge(130, 430, "W", BLUE)}`),
  "danh-may-cong-thuc-toan": svg("#0f5c5c", "#1a9a9a", `
    <g filter="url(#sh)"><rect x="200" y="140" width="800" height="350" rx="22" fill="#fff"/></g>
    <text x="600" y="270" text-anchor="middle" font-family="Cambria Math,Times New Roman,serif" font-style="italic" font-size="64" fill="${INK}">x = (−b ± √Δ) / 2a</text>
    <text x="600" y="400" text-anchor="middle" font-family="Cambria Math,Times New Roman,serif" font-size="58" fill="#0f5c5c">∑ ∫ √ π ∞ ≤ ≈</text>
    ${pill(240, 520, 170, "Word", BLUE)}${pill(430, 520, 200, "MathType", RED)}${pill(650, 520, 160, "LaTeX", "#0f5c5c")}`),
  "tu-the-ngoi-go-phim": svg("#1f6f4a", "#46b47a", `
    <g filter="url(#sh)"><rect x="700" y="220" width="250" height="160" rx="12" fill="${INK}"/><rect x="714" y="234" width="222" height="132" rx="6" fill="#e9f4ee"/><rect x="805" y="380" width="40" height="50" fill="#c9d3cf"/><rect x="760" y="428" width="130" height="12" rx="6" fill="#c9d3cf"/></g>
    <rect x="380" y="440" width="600" height="18" rx="9" fill="#fff" opacity=".95"/><rect x="420" y="458" width="14" height="120" fill="#fff" opacity=".7"/><rect x="920" y="458" width="14" height="120" fill="#fff" opacity=".7"/>
    <g fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"><circle cx="400" cy="200" r="42" fill="#fff" stroke="none"/><path d="M395 255 L380 400"/><path d="M380 400 L520 400 L530 560"/><path d="M392 290 L470 380 L640 420"/></g>
    <rect x="300" y="400" width="140" height="22" rx="11" fill="#fff" opacity=".85"/><rect x="320" y="420" width="16" height="150" fill="#fff" opacity=".7"/>
    <g stroke="${AMBER}" stroke-width="5" fill="none" stroke-dasharray="10 10"><path d="M445 200 H760"/></g>
    <text x="600" y="185" text-anchor="middle" font-family="${FONT}" font-weight="700" font-size="24" fill="#fff">ngang tầm mắt</text>
    ${check(1060, 140)}`),
  "hanh-trinh-mot-don-danh-may": svg(INK, NAVY, (() => {
    const steps = [["1", RED], ["2", AMBER], ["3", "#6c8cff"], ["4", GREEN], ["5", "#fff"]];
    let g = "";
    steps.forEach(([n, c], i) => {
      const x = 170 + i * 215;
      if (i) g += `<path d="M${x - 150} 315 H${x - 58}" stroke="#fff" stroke-width="5" stroke-dasharray="10 9" opacity=".7"/>`;
      g += `<g filter="url(#sh)"><circle cx="${x}" cy="315" r="62" fill="${c}"/><text x="${x}" y="333" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="50" fill="${c === "#fff" ? INK : "#fff"}">${n}</text></g>`;
    });
    g += paper(220, 420, 210, 170, { lines: 3 }) + paper(780, 420, 210, 170, { lines: 3, head: GREEN });
    g += check(1040, 450, 30);
    return g;
  })()),

  // 12 bài: đánh máy, công thức Toán – Lý – Hóa, dịch thuật, phụ đề
  "lam-danh-may-tai-nha-tranh-lua-dao": svg("#b5651d", AMBER, `
    <g filter="url(#sh)"><rect x="200" y="170" width="440" height="280" rx="18" fill="${INK}"/><rect x="216" y="186" width="408" height="248" rx="8" fill="#fff"/><path d="M160 450 H680 L650 490 H190 Z" fill="#c9cde3"/></g>
    ${Array.from({ length: 6 }, (_, i) => `<rect x="246" y="${220 + i * 32}" width="${i % 3 === 2 ? 200 : 340}" height="12" rx="6" fill="#d9dbe6"/>`).join("")}
    <g filter="url(#sh)" transform="rotate(6 860 320)"><rect x="740" y="110" width="240" height="420" rx="34" fill="${INK}"/><rect x="756" y="150" width="208" height="340" rx="12" fill="#eef0f8"/>
      <rect x="766" y="176" width="190" height="70" rx="16" fill="#fff"/>${txt(780, 206, "Nạp 500.000đ", { size: 18, weight: 700, fill: RED })}${txt(780, 231, "để nhận việc…", { size: 16, fill: "#55586b" })}
      <rect x="776" y="266" width="180" height="56" rx="16" fill="#cfd8ff"/>${txt(792, 299, "Thu nhập 1tr/ngày", { size: 15, fill: INK })}</g>
    <g stroke="${RED}" stroke-width="16" stroke-linecap="round" opacity=".95"><path d="M770 170 L960 360"/><path d="M960 170 L770 360"/></g>
    ${warnIcon(420, 560, 0.75)}
    ${pill(470, 530, 230, "Tỉnh táo!", RED)}`),
  "ai-ocr-co-thay-the-nguoi-danh-may": svg("#3b2f8f", "#7a5af0", `
    <g filter="url(#sh)" transform="translate(250 170)"><rect width="230" height="230" rx="40" fill="#fff"/>
      ${[40, 95, 150].map((p) => `<rect x="${p}" y="-26" width="16" height="26" rx="4" fill="#fff"/><rect x="${p}" y="230" width="16" height="26" rx="4" fill="#fff"/><rect x="-26" y="${p}" width="26" height="16" rx="4" fill="#fff"/><rect x="230" y="${p}" width="26" height="16" rx="4" fill="#fff"/>`).join("")}
      ${txt(115, 145, "AI", { size: 92, weight: 800, fill: "#5a3fd0", anchor: "middle" })}</g>
    <text x="600" y="320" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="70" fill="#fff">+</text>
    <g filter="url(#sh)"><circle cx="830" cy="220" r="62" fill="#fff"/><path d="M710 420 a120 110 0 0 1 240 0 v40 h-240 z" fill="#fff"/></g>
    <circle cx="830" cy="220" r="40" fill="${AMBER}"/>
    ${paper(400, 440, 400, 150, { lines: 2 })}
    <rect x="440" y="510" width="120" height="14" rx="7" fill="${RED}" opacity=".55"/><rect x="600" y="540" width="90" height="14" rx="7" fill="${RED}" opacity=".55"/>
    ${check(1040, 140)}`),
  "chuyen-pdf-scan-sang-word": svg("#c0392b", "#ff7a59", `
    <g transform="rotate(-5 380 330)"><rect x="220" y="120" width="320" height="420" rx="12" fill="#d6d3cc" filter="url(#sh)"/>
      ${Array.from({ length: 10 }, (_, i) => `<rect x="252" y="${180 + i * 30}" width="${i % 4 === 3 ? 150 : 250}" height="11" rx="5" fill="#8c877d" opacity="${0.45 + (i % 3) * 0.15}"/>`).join("")}
      <rect x="220" y="120" width="320" height="420" rx="12" fill="url(#dots)" opacity=".8"/></g>
    ${badge(190, 90, "PDF", "#e53935")}
    ${arrow(570, 330, 680)}
    ${paper(700, 120, 330, 420, { lines: 10, head: BLUE })}
    ${badge(960, 90, "W", BLUE)}
    ${check(1040, 520, 36)}`),
  "nhap-lieu-excel-chinh-xac": svg("#14633a", "#2fa865", (() => {
    let g = card(220, 120, 760, 400, "#fff", 18);
    g += `<rect x="220" y="120" width="760" height="56" rx="18" fill="#1e7145"/><rect x="220" y="160" width="760" height="16" fill="#1e7145"/>`;
    ["A", "B", "C", "D", "E"].forEach((c, i) => { g += txt(300 + i * 150, 157, c, { size: 24, weight: 700, fill: "#fff", anchor: "middle" }); });
    for (let r = 0; r < 6; r++) {
      g += `<path d="M220 ${176 + (r + 1) * 57} H980" stroke="#e3e5ef" stroke-width="2"/>`;
      for (let c = 0; c < 5; c++) g += `<rect x="${250 + c * 150}" y="${196 + r * 57}" width="${c === 0 ? 60 : 96 - ((r + c) % 3) * 18}" height="14" rx="7" fill="${r === 3 && c === 2 ? AMBER : "#cfd5e3"}"/>`;
    }
    for (let c = 1; c < 5; c++) g += `<path d="M${225 + c * 150} 176 V520" stroke="#e3e5ef" stroke-width="2"/>`;
    g += `<rect x="520" y="${176 + 3 * 57 + 6}" width="150" height="46" rx="6" fill="none" stroke="${GREEN}" stroke-width="5"/>`;
    g += check(1000, 120, 40) + pill(440, 545, 320, "Chính xác từng ô", INK);
    return g;
  })()),
  "go-cong-thuc-hoa-hoc-trong-word": svg("#5b2a86", "#a04ad6", `
    ${card(170, 150, 700, 330)}
    ${chem(520, 265, "2H_2 + O_2 → 2H_2O", { size: 64 })}
    ${chem(520, 400, "Fe^{3+}  ·  SO_4^{2−}  ·  CO_2", { size: 54, fill: "#5b2a86" })}
    <g filter="url(#sh)" transform="translate(930 150)"><path d="M40 0 h80 v20 h-10 v110 l70 150 a20 20 0 0 1 -18 30 h-164 a20 20 0 0 1 -18 -30 l70 -150 v-110 h-10 z" fill="#fff"/>
      <path d="M22 240 l40 -80 h56 l40 80 a12 12 0 0 1 -10 18 h-116 a12 12 0 0 1 -10 -18 z" fill="${GREEN}" opacity=".85"/><circle cx="80" cy="215" r="10" fill="#fff" opacity=".8"/><circle cx="110" cy="235" r="7" fill="#fff" opacity=".8"/></g>
    ${badge(150, 470, "W", BLUE)}`),
  "go-cong-thuc-vat-ly-don-vi-si": svg("#0d47a1", "#3f8ae0", `
    ${card(170, 130, 620, 380)}
    ${chem(330, 235, "F = m · a", { size: 66, italic: true, anchor: "start" })}
    <path d="M338 172 h40" stroke="${INK}" stroke-width="4"/><path d="M368 164 l12 8 l-12 8" fill="none" stroke="${INK}" stroke-width="4"/>
    <path d="M555 172 h30" stroke="${INK}" stroke-width="4"/><path d="M575 164 l12 8 l-12 8" fill="none" stroke="${INK}" stroke-width="4"/>
    ${chem(480, 335, "E = mc^2", { size: 66, italic: true, fill: RED })}
    <text x="480" y="440" text-anchor="middle" font-family="${SERIF}" font-size="56" fill="#0d47a1"><tspan font-style="italic">g</tspan> ≈ 9,81 m/s<tspan dy="-18" font-size="35">2</tspan></text>
    <g filter="url(#sh)" transform="rotate(-12 960 330)"><rect x="850" y="160" width="110" height="380" rx="10" fill="${AMBER}"/>
      ${Array.from({ length: 15 }, (_, i) => `<rect x="850" y="${180 + i * 24}" width="${i % 5 === 0 ? 46 : 26}" height="4" fill="${INK}"/>`).join("")}</g>
    ${pill(860, 80, 120, "SI", INK)}`),
  "latex-cho-nguoi-moi": svg("#0f5c5c", "#22a39f", `
    ${card(150, 130, 470, 390, "#1d2040")}
    <circle cx="186" cy="160" r="8" fill="${RED}"/><circle cx="212" cy="160" r="8" fill="${AMBER}"/><circle cx="238" cy="160" r="8" fill="${GREEN}"/>
    ${txt(185, 225, "\\documentclass{article}", { size: 25, family: "Courier New,monospace", fill: "#7fd3ff" })}
    ${txt(185, 270, "\\begin{document}", { size: 25, family: "Courier New,monospace", fill: "#ffb86b" })}
    ${txt(210, 320, "$\\frac{a}{b} + \\sqrt{x}$", { size: 25, family: "Courier New,monospace", fill: "#e7e8f6" })}
    ${txt(210, 365, "$\\sum_{i=1}^{n} i^2$", { size: 25, family: "Courier New,monospace", fill: "#e7e8f6" })}
    ${txt(185, 415, "\\end{document}", { size: 25, family: "Courier New,monospace", fill: "#ffb86b" })}
    ${arrow(640, 325, 730)}
    ${card(750, 110, 320, 430)}
    <rect x="790" y="150" width="180" height="16" rx="8" fill="${INK}" opacity=".8"/>
    <g font-family="${SERIF}" font-size="44" fill="${INK}" font-style="italic"><text x="820" y="270">a</text><text x="820" y="320">b</text></g>
    <path d="M808 285 h44" stroke="${INK}" stroke-width="3"/>
    ${txt(870, 300, "+ √x", { size: 44, family: SERIF, italic: true })}
    ${Array.from({ length: 5 }, (_, i) => `<rect x="790" y="${370 + i * 30}" width="${i % 3 === 2 ? 150 : 240}" height="11" rx="5.5" fill="#d9dbe6"/>`).join("")}
    ${pill(860, 555, 120, "PDF", RED)}`),
  "so-hoa-de-thi-toan": svg("#283593", "#5c6bc0", `
    ${card(330, 70, 540, 520)}
    ${txt(600, 125, "ĐỀ KIỂM TRA TOÁN 12", { size: 28, weight: 800, anchor: "middle" })}
    <rect x="510" y="140" width="180" height="3" fill="${INK}"/>
    ${txt(370, 190, "Câu 1.", { size: 22, weight: 800 })}<rect x="450" y="176" width="370" height="11" rx="5.5" fill="#d9dbe6"/>
    <path d="M410 380 L560 230 L640 380 Z" fill="none" stroke="${BLUE}" stroke-width="4"/><path d="M560 230 L560 380" stroke="${BLUE}" stroke-width="3" stroke-dasharray="8 6"/>
    ${txt(395, 405, "A", { size: 22, weight: 700, italic: true })}${txt(550, 222, "S", { size: 22, weight: 700, italic: true })}${txt(645, 405, "B", { size: 22, weight: 700, italic: true })}${txt(565, 405, "H", { size: 22, weight: 700, italic: true })}
    <rect x="560" y="364" width="16" height="16" fill="none" stroke="${BLUE}" stroke-width="2"/>
    ${chem(760, 300, "x^2 − 4x + 3", { size: 30, italic: true })}
    ${["A.", "B.", "C.", "D."].map((l, i) => txt(370 + (i % 2) * 250, 470 + Math.floor(i / 2) * 50, l, { size: 24, weight: 800, fill: i === 2 ? RED : INK }) + `<rect x="${410 + (i % 2) * 250}" y="${457 + Math.floor(i / 2) * 50}" width="140" height="11" rx="5.5" fill="${i === 2 ? "#f9c9ca" : "#d9dbe6"}"/>`).join("")}
    ${check(960, 150, 40)}`),
  "danh-may-ban-goc-truoc-khi-dich": svg("#6d4c41", "#b07a5a", `
    <g transform="rotate(-6 250 330)"><rect x="110" y="150" width="260" height="340" rx="10" fill="#f4ecd8" filter="url(#sh)"/>${scribble(140, 210, 200, "#5a4a2a", 7, 36)}</g>
    ${arrow(395, 320, 470)}
    ${paper(490, 150, 260, 340, { lines: 7 })}
    ${arrow(775, 320, 850)}
    <g filter="url(#sh)"><circle cx="980" cy="320" r="120" fill="#fff"/></g>
    <g fill="none" stroke="${BLUE}" stroke-width="6"><circle cx="980" cy="320" r="90"/><ellipse cx="980" cy="320" rx="40" ry="90"/><path d="M890 320 H1070 M905 275 H1055 M905 365 H1055"/></g>
    ${pill(530, 520, 180, "Bản gốc", INK)}${pill(905, 470, 150, "EN · VI", RED)}`),
  "chuan-bi-ho-so-dich-thuat-cong-chung": svg("#8e1b1e", "#d2443f", `
    <g filter="url(#sh)" transform="rotate(-8 330 330)"><rect x="220" y="160" width="230" height="320" rx="18" fill="#1a3d7c"/>
      <circle cx="335" cy="290" r="54" fill="none" stroke="#e8c76a" stroke-width="6"/><path d="M281 290 h108 M335 236 v108" stroke="#e8c76a" stroke-width="4"/>
      ${txt(335, 410, "PASSPORT", { size: 24, weight: 800, fill: "#e8c76a", anchor: "middle" })}</g>
    ${paper(500, 110, 300, 400, { lines: 9 })}
    <g opacity=".85"><circle cx="730" cy="430" r="52" fill="none" stroke="${RED}" stroke-width="6"/><circle cx="730" cy="430" r="36" fill="none" stroke="${RED}" stroke-width="3"/></g>
    ${card(840, 160, 250, 320)}
    ${[0, 1, 2, 3].map((i) => `${check(882, 215 + i * 70, 18, i < 3 ? GREEN : "#c9cde3")}<rect x="914" y="${208 + i * 70}" width="${i % 2 ? 120 : 150}" height="14" rx="7" fill="#d9dbe6"/>`).join("")}`),
  "trinh-bay-ban-dich-song-ngu": svg("#1d3c78", "#3b6fd1", `
    ${card(250, 90, 700, 470)}
    <rect x="250" y="90" width="700" height="70" rx="20" fill="${INK}"/><rect x="250" y="140" width="700" height="20" fill="${INK}"/>
    ${txt(425, 137, "English", { size: 28, weight: 800, fill: "#fff", anchor: "middle" })}${txt(775, 137, "Tiếng Việt", { size: 28, weight: 800, fill: "#fff", anchor: "middle" })}
    <path d="M600 160 V560" stroke="#e3e5ef" stroke-width="3"/>
    ${[0, 1, 2].map((r) => `<path d="M250 ${290 + r * 130} H950" stroke="#eef0f6" stroke-width="2"/>` +
      [0, 1, 2].map((k) => `<rect x="290" y="${190 + r * 130 + k * 28}" width="${k === 2 ? 150 : 260}" height="11" rx="5.5" fill="#c3cbe6"/><rect x="640" y="${190 + r * 130 + k * 28}" width="${k === 2 ? 180 : 270}" height="11" rx="5.5" fill="#f2c2c3"/>`).join("")).join("")}
    ${badge(130, 250, "EN", NAVY)}${badge(980, 250, "VI", RED)}`),
  "lam-phu-de-srt-chuan": svg("#141633", "#4b3f9e", `
    ${card(160, 90, 720, 420, "#0b0d24", 22)}
    <rect x="180" y="110" width="680" height="330" rx="12" fill="#2c3070"/>
    <path d="M180 380 L360 250 L480 340 L600 220 L860 400 V440 H180 Z" fill="#3c4290"/>
    <circle cx="760" cy="180" r="34" fill="${AMBER}" opacity=".9"/>
    <g filter="url(#sh2)"><circle cx="520" cy="270" r="52" fill="#fff" opacity=".92"/><path d="M505 245 L545 270 L505 295 Z" fill="${INK}"/></g>
    <rect x="300" y="380" width="440" height="40" rx="6" fill="#000" opacity=".72"/>
    ${txt(520, 409, "Xin chào các bạn, hôm nay…", { size: 24, weight: 700, fill: "#fff", anchor: "middle" })}
    <rect x="180" y="462" width="680" height="8" rx="4" fill="#4a4f80"/><rect x="180" y="462" width="260" height="8" rx="4" fill="${RED}"/>
    ${card(910, 160, 220, 300)}
    ${txt(935, 210, "1", { size: 22, weight: 800, family: "Courier New,monospace" })}
    ${txt(935, 245, "00:00:01,200", { size: 19, family: "Courier New,monospace", fill: BLUE })}
    ${txt(935, 270, "--&gt; 00:00:04", { size: 19, family: "Courier New,monospace", fill: BLUE })}
    <rect x="935" y="290" width="160" height="11" rx="5.5" fill="#d9dbe6"/><rect x="935" y="315" width="120" height="11" rx="5.5" fill="#d9dbe6"/>
    ${pill(950, 390, 140, ".SRT", RED)}`),

  // Đợt 3: đối tác photocopy, Word, công thức, dịch thuật
  "cua-hang-photocopy-tang-thu-nhap": svg("#c62828", AMBER, `
    <g filter="url(#sh)"><rect x="150" y="250" width="380" height="250" rx="18" fill="#eef0f8"/><rect x="150" y="210" width="380" height="60" rx="14" fill="#d5d8e8"/>
      <rect x="190" y="225" width="300" height="24" rx="6" fill="#9aa0c3"/><rect x="200" y="300" width="160" height="60" rx="10" fill="${INK}"/><rect x="214" y="314" width="132" height="32" rx="5" fill="#7fd3ff"/>
      <circle cx="420" cy="330" r="16" fill="${GREEN}"/><circle cx="470" cy="330" r="16" fill="${RED}"/><rect x="190" y="400" width="300" height="70" rx="10" fill="#c9cde3"/></g>
    <rect x="215" y="160" width="250" height="70" rx="4" fill="#fff" filter="url(#sh2)"/>${[0, 1, 2].map((i) => `<rect x="235" y="${178 + i * 15}" width="${i === 2 ? 120 : 200}" height="7" rx="3.5" fill="#d9dbe6"/>`).join("")}
    ${card(600, 110, 260, 380)}${qrish(650, 190, 160)}
    ${txt(730, 160, "Quét mã đặt đánh máy", { size: 17, weight: 700, anchor: "middle" })}
    ${txt(730, 395, "MINHAN482", { size: 26, weight: 800, anchor: "middle", family: "Courier New,monospace", fill: NAVY })}
    ${txt(730, 440, "Dán tại quầy", { size: 16, anchor: "middle", fill: "#7f8491" })}
    <g filter="url(#sh)"><circle cx="1000" cy="250" r="105" fill="#fff"/></g>
    ${txt(1000, 268, "30%", { size: 64, weight: 800, anchor: "middle", fill: RED })}
    ${txt(1000, 305, "hoa hồng", { size: 20, weight: 700, anchor: "middle", fill: INK })}
    ${pill(890, 420, 220, "Không cần vốn", GREEN)}`),
  "dich-vu-an-theo-tiem-photocopy": svg("#00695c", "#26a69a", `
    <g filter="url(#sh)"><rect x="170" y="170" width="440" height="330" rx="10" fill="#fff"/></g>
    <path d="M150 170 h480 l-30 -70 h-420 z" fill="${RED}"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<path d="M${180 + i * 70} 170 a35 30 0 0 0 70 0" fill="${i % 2 ? RED : "#fff"}"/>`).join("")}
    ${txt(390, 145, "PHOTO - IN ẤN", { size: 28, weight: 800, anchor: "middle", fill: "#fff" })}
    <rect x="210" y="250" width="160" height="250" rx="6" fill="#cfe9e5"/><rect x="400" y="250" width="170" height="140" rx="6" fill="#e7f4f2"/>
    ${[0, 1, 2].map((i) => `<rect x="420" y="${275 + i * 32}" width="${130 - i * 20}" height="12" rx="6" fill="#9cc9c2"/>`).join("")}
    <circle cx="350" cy="380" r="8" fill="#00695c"/>
    ${["Đóng gáy", "Scan PDF", "Đánh máy", "Luận văn", "Ép plastic", "In màu", "VPP"].map((t, i) => pill(700 + (i % 2) * 200, 110 + Math.floor(i / 2) * 80, 180, t, [RED, AMBER, NAVY, "#6a3fb5", GREEN, BLUE, INK][i])).join("")}`),
  "tao-muc-luc-tu-dong-word": svg(BLUE, "#4a7fd0", `
    ${card(330, 80, 540, 480)}
    ${txt(600, 140, "MỤC LỤC", { size: 30, weight: 800, anchor: "middle" })}
    ${[["CHƯƠNG 1. TỔNG QUAN", "1", 0, true], ["1.1. Cơ sở lý thuyết", "3", 1], ["1.1.1. Khái niệm", "3", 2], ["1.2. Tình hình nghiên cứu", "8", 1], ["CHƯƠNG 2. PHƯƠNG PHÁP", "15", 0, true], ["2.1. Đối tượng", "15", 1], ["2.2. Thiết kế nghiên cứu", "17", 1], ["CHƯƠNG 3. KẾT QUẢ", "24", 0, true]].map(([t, p, lv, b], i) => {
      const y = 200 + i * 42, x = 380 + lv * 26;
      return txt(x, y, t, { size: 18, weight: b ? 800 : 400 }) + `<path d="M${x + t.length * (b ? 11.4 : 9) + 10} ${y - 4} H790" stroke="#9aa0c3" stroke-width="2.5" stroke-dasharray="2 7" stroke-linecap="round"/>` + txt(820, y, p, { size: 18, weight: 700, anchor: "end" });
    }).join("")}
    ${badge(150, 120, "W", BLUE)}${pill(150, 470, 120, "F9", RED)}`),
  "go-ma-tran-he-phuong-trinh-word": svg("#303f9f", "#5c6bc0", `
    ${card(140, 150, 300, 330)}
    <path d="M190 210 q-26 105 0 210" fill="none" stroke="${INK}" stroke-width="5"/><path d="M390 210 q26 105 0 210" fill="none" stroke="${INK}" stroke-width="5"/>
    ${[["1", "2"], ["3", "4"]].map((r, i) => r.map((v, j) => txt(250 + j * 80, 290 + i * 80, v, { size: 48, family: SERIF, anchor: "middle" })).join("")).join("")}
    ${card(470, 150, 300, 330)}
    <path d="M540 200 q-22 0 -22 30 v60 q0 25 -20 25 q20 0 20 25 v60 q0 30 22 30" fill="none" stroke="${INK}" stroke-width="5"/>
    ${chem(650, 285, "2x + y = 5", { size: 34, italic: true })}${chem(650, 375, "x − y = 1", { size: 34, italic: true })}
    ${card(800, 150, 300, 330)}
    ${txt(870, 345, "∫", { size: 130, family: SERIF, anchor: "middle" })}
    ${txt(900, 245, "1", { size: 26, family: SERIF })}${txt(890, 390, "0", { size: 26, family: SERIF })}
    ${chem(990, 330, "x^2 dx", { size: 40, italic: true })}`),
  "ve-cong-thuc-cau-tao-huu-co": svg("#1b5e20", "#43a047", (() => {
    const cx = 420, cy = 360, r = 110, pts = Array.from({ length: 6 }, (_, i) => [cx + r * Math.cos(Math.PI / 6 + i * Math.PI / 3), cy + r * Math.sin(Math.PI / 6 + i * Math.PI / 3)]);
    let g = card(230, 130, 760, 390);
    g += `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>`;
    [0, 2, 4].forEach((i) => { const a = pts[i], b = pts[(i + 1) % 6], k = 0.78; const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2; const ix = cx + (mx - cx) * k, iy = cy + (my - cy) * k; const dx = (b[0] - a[0]) * 0.32, dy = (b[1] - a[1]) * 0.32; g += `<path d="M${ix - dx} ${iy - dy} L${ix + dx} ${iy + dy}" stroke="${INK}" stroke-width="6" stroke-linecap="round"/>`; });
    const top = pts[4];
    g += `<path d="M${top[0]} ${top[1]} L${top[0]} ${top[1] - 70}" stroke="${INK}" stroke-width="7"/>` + txt(top[0], top[1] - 82, "OH", { size: 34, weight: 700, anchor: "middle", fill: RED });
    g += `<path d="M620 380 l50 -30 l50 30 l50 -30 l50 30 l40 -23" fill="none" stroke="${INK}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>` + txt(864, 370, "COOH", { size: 30, weight: 700, fill: RED });
    g += txt(760, 230, "CH", { size: 34, family: SERIF }) + `<text x="806" y="242" font-family="${SERIF}" font-size="22" fill="${INK}">3</text>` + txt(822, 230, "-CH", { size: 34, family: SERIF }) + `<text x="883" y="242" font-family="${SERIF}" font-size="22" fill="${INK}">2</text>` + txt(899, 230, "-OH", { size: 34, family: SERIF });
    return g;
  })()),
  "ky-hieu-dien-hoc-so-do-mach": svg("#0d2b5e", "#1e5aa8", `
    ${card(170, 130, 620, 380)}
    <g fill="none" stroke="${INK}" stroke-width="5" stroke-linejoin="round"><path d="M240 200 H420 M500 200 H720 V440 H520 M470 440 H240 V360 M240 290 V200"/></g>
    <rect x="420" y="182" width="80" height="36" rx="3" fill="#fff" stroke="${INK}" stroke-width="5"/>
    <path d="M470 410 V470 M490 400 V480" stroke="${INK}" stroke-width="6"/><path d="M490 440 H520" stroke="${INK}" stroke-width="5"/>
    <path d="M215 290 H265 M225 360 H255" stroke="${INK}" stroke-width="6"/>
    <circle cx="720" cy="320" r="30" fill="#fff" stroke="${INK}" stroke-width="5"/>${txt(720, 332, "A", { size: 30, weight: 800, anchor: "middle" })}
    ${txt(460, 170, "R = 2,2 kΩ", { size: 22, weight: 700, anchor: "middle", fill: BLUE })}${txt(480, 505, "C = 4,7 µF", { size: 22, weight: 700, anchor: "middle", fill: BLUE })}
    ${txt(190, 335, "ξ", { size: 34, family: SERIF, italic: true, anchor: "middle", fill: RED })}
    ${["Ω", "µ", "Δ", "ε"].map((s, i) => keycap(860 + (i % 2) * 130, 170 + Math.floor(i / 2) * 140, 110, 110, s, { size: 54, fill: i === 0 ? RED : "#fff", color: i === 0 ? "#fff" : INK })).join("")}`),
  "bang-thuat-ngu-dich-ky-thuat": svg("#4e342e", "#8d6e63", `
    ${card(200, 110, 640, 420)}
    <rect x="200" y="110" width="640" height="64" rx="20" fill="${INK}"/><rect x="200" y="150" width="640" height="24" fill="${INK}"/>
    ${txt(360, 152, "English", { size: 26, weight: 800, anchor: "middle", fill: "#fff" })}${txt(680, 152, "Tiếng Việt", { size: 26, weight: 800, anchor: "middle", fill: "#fff" })}
    ${[["bearing", "ổ bi"], ["torque", "mô-men xoắn"], ["valve", "van"], ["gear", "bánh răng"], ["shaft", "trục"]].map(([a, b], i) => `<path d="M200 ${236 + i * 62} H840" stroke="#eef0f6" stroke-width="2"/>` + txt(250, 220 + i * 62, a, { size: 24, family: "Courier New,monospace" }) + txt(560, 220 + i * 62, b, { size: 24, weight: 700, fill: i === 0 ? RED : INK })).join("")}
    <path d="M520 174 V530" stroke="#e3e5ef" stroke-width="2"/>
    <g filter="url(#sh)" transform="translate(990 300)"><circle r="95" fill="#fff"/>${Array.from({ length: 8 }, (_, i) => `<rect x="-14" y="-92" width="28" height="34" rx="6" fill="${AMBER}" transform="rotate(${i * 45})"/>`).join("")}<circle r="62" fill="${AMBER}"/><circle r="26" fill="#fff"/></g>`),
  "dich-may-va-hau-bien-tap": svg("#4527a0", "#7e57c2", `
    <g filter="url(#sh)" transform="translate(150 200)"><rect width="200" height="200" rx="36" fill="#fff"/>${txt(100, 128, "AI", { size: 80, weight: 800, anchor: "middle", fill: "#5a3fd0" })}</g>
    ${arrow(380, 300, 470)}
    ${paper(490, 130, 340, 400, { lines: 9 })}
    <path d="M530 236 h170" stroke="${RED}" stroke-width="4"/><path d="M600 222 q30 -30 60 0" fill="none" stroke="${RED}" stroke-width="3"/>
    <rect x="530" y="318" width="200" height="14" rx="7" fill="${RED}" opacity=".35"/>
    <g transform="rotate(35 760 420)"><rect x="740" y="300" width="26" height="170" rx="6" fill="${RED}"/><path d="M740 470 l13 30 l13 -30 z" fill="${INK}"/></g>
    ${arrow(850, 300, 930)}
    ${check(1010, 300, 60)}${pill(930, 420, 170, "Hậu biên tập", INK)}`),
  "dich-tom-tat-bai-bao-khoa-hoc": svg("#1a237e", "#3949ab", `
    ${card(170, 90, 420, 470)}
    ${txt(380, 150, "TẠP CHÍ KHOA HỌC", { size: 20, weight: 800, anchor: "middle", fill: "#7f8491" })}
    <rect x="210" y="175" width="340" height="18" rx="9" fill="${INK}"/><rect x="250" y="205" width="260" height="14" rx="7" fill="${INK}" opacity=".6"/>
    ${txt(210, 262, "TÓM TẮT", { size: 18, weight: 800, fill: RED })}
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="210" y="${280 + i * 26}" width="${i === 4 ? 200 : 340}" height="10" rx="5" fill="#d9dbe6"/>`).join("")}
    ${txt(210, 430, "Từ khóa:", { size: 16, weight: 700 })}${[0, 1, 2].map((i) => `<rect x="${290 + i * 90}" y="418" width="78" height="18" rx="9" fill="#e3e6f6"/>`).join("")}
    ${arrow(610, 320, 700)}
    ${card(720, 90, 420, 470)}
    ${txt(930, 150, "SCIENTIFIC JOURNAL", { size: 20, weight: 800, anchor: "middle", fill: "#7f8491" })}
    <rect x="760" y="175" width="340" height="18" rx="9" fill="${INK}"/><rect x="800" y="205" width="260" height="14" rx="7" fill="${INK}" opacity=".6"/>
    ${txt(760, 262, "ABSTRACT", { size: 18, weight: 800, fill: BLUE })}
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="760" y="${280 + i * 26}" width="${i === 4 ? 220 : 340}" height="10" rx="5" fill="#d9dbe6"/>`).join("")}
    ${txt(760, 430, "Keywords:", { size: 16, weight: 700 })}${[0, 1, 2].map((i) => `<rect x="${850 + i * 84}" y="418" width="74" height="18" rx="9" fill="#e3e6f6"/>`).join("")}
    ${pill(330, 490, 100, "VI", RED)}${pill(880, 490, 100, "EN", BLUE)}`),
  "trich-dan-apa-ieee-word": svg("#006064", "#00838f", `
    ${card(170, 100, 470, 450)}
    ${[0, 1, 2].map((i) => `<rect x="210" y="${150 + i * 28}" width="${i === 2 ? 220 : 390}" height="11" rx="5.5" fill="#d9dbe6"/>`).join("")}
    <rect x="210" y="234" width="170" height="34" rx="8" fill="#e0f7fa"/>${txt(295, 258, "(Trần, 2023)", { size: 19, weight: 700, anchor: "middle", fill: "#006064" })}
    <rect x="400" y="234" width="60" height="34" rx="8" fill="#fde7e7"/>${txt(430, 258, "[1]", { size: 19, weight: 700, anchor: "middle", fill: RED })}
    ${txt(210, 320, "TÀI LIỆU THAM KHẢO", { size: 18, weight: 800 })}
    ${[0, 1, 2].map((i) => `<rect x="210" y="${344 + i * 58}" width="390" height="10" rx="5" fill="#c9cde3"/><rect x="240" y="${362 + i * 58}" width="300" height="10" rx="5" fill="#e3e5ef"/>`).join("")}
    ${pill(690, 170, 170, "APA 7", "#006064")}${pill(690, 240, 170, "IEEE", RED)}${pill(690, 310, 170, "Zotero", AMBER)}
    ${badge(960, 220, "W", BLUE)}${check(1040, 440, 40)}`),
  "go-tieng-viet-dien-thoai": svg("#ad1457", "#ec407a", `
    <g filter="url(#sh)"><rect x="440" y="70" width="320" height="520" rx="44" fill="${INK}"/><rect x="458" y="110" width="284" height="450" rx="16" fill="#eef0f8"/></g>
    <rect x="478" y="140" width="200" height="56" rx="18" fill="#fff"/>${txt(498, 176, "Xin chào bạn!", { size: 20, weight: 700 })}
    <rect x="530" y="210" width="190" height="56" rx="18" fill="#cfd8ff"/>${txt(548, 246, "Mình gửi tài liệu nhé", { size: 16 })}
    ${[["q", "w", "e", "r", "t", "y"], ["a", "s", "d", "f", "g", "h"], ["z", "x", "c", "v", "b", "n"]].map((row, ri) => row.map((k, i) => `<rect x="${472 + ri * 10 + i * 44}" y="${340 + ri * 54}" width="38" height="46" rx="8" fill="#fff"/>` + txt(491 + ri * 10 + i * 44, 371 + ri * 54, k, { size: 20, weight: 700, anchor: "middle" })).join("")).join("")}
    <rect x="520" y="506" width="160" height="40" rx="10" fill="#fff"/>
    <g filter="url(#sh)" transform="translate(940 300)"><circle r="90" fill="#fff"/><rect x="-24" y="-52" width="48" height="74" rx="24" fill="${RED}"/><path d="M-40 6 a40 40 0 0 0 80 0 M0 46 v20 M-24 66 h48" fill="none" stroke="${RED}" stroke-width="8" stroke-linecap="round"/></g>
    ${pill(150, 220, 160, "Telex", NAVY)}${pill(150, 300, 160, "VNI", AMBER)}${pill(150, 380, 160, "Gõ vuốt", GREEN)}`),
  "so-hoa-vo-ghi-bai-giang": svg("#e65100", AMBER, `
    <g transform="rotate(-6 300 330)"><rect x="160" y="140" width="300" height="400" rx="12" fill="#fffdf5" filter="url(#sh)"/>
      ${Array.from({ length: 9 }, (_, i) => `<circle cx="160" cy="${170 + i * 42}" r="9" fill="none" stroke="#9aa0c3" stroke-width="5"/>`).join("")}
      ${scribble(200, 200, 230, "#31407a", 8, 40)}</g>
    ${arrow(490, 330, 580)}
    <g filter="url(#sh)"><rect x="600" y="170" width="160" height="290" rx="26" fill="${INK}"/><rect x="612" y="200" width="136" height="230" rx="10" fill="#fffdf5"/></g>
    ${scribble(625, 240, 105, "#9aa0c3", 4, 34)}
    ${arrow(780, 330, 860)}
    ${paper(880, 140, 250, 380, { lines: 9, head: "#e65100" })}`),
  "doi-tac": svg("#b71c1c", AMBER, `
    ${txt(90, 170, "Đối tác cửa hàng photocopy", { size: 52, weight: 800, fill: "#fff", family: SERIF })}
    ${txt(90, 235, "Giới thiệu khách cần đánh máy - nhận hoa hồng", { size: 30, fill: "#fff" })}
    <g filter="url(#sh)"><rect x="90" y="285" width="330" height="170" rx="24" fill="#fff"/></g>
    ${txt(255, 405, "30%", { size: 110, weight: 800, anchor: "middle", fill: RED })}
    ${pill(90, 490, 240, "Không cần vốn", GREEN)}${pill(350, 490, 260, "Mã QR in sẵn", NAVY)}
    ${card(800, 140, 300, 400)}${qrish(860, 230, 180)}
    ${txt(950, 200, "Quét để đặt hàng", { size: 20, weight: 700, anchor: "middle" })}
    ${txt(950, 460, "MINHAN482", { size: 28, weight: 800, anchor: "middle", family: "Courier New,monospace", fill: NAVY })}`)
};

/* ---------- HÌNH MINH HỌA TRONG BÀI ---------- */
const figures = {
  // Sơ đồ ngón tay trên bàn phím
  "fig-ban-phim-10-ngon": (() => {
    const colors = { lp: "#f24d50", lr: "#f3a33b", lm: "#3bb54a", li: "#6c8cff", ri: "#9b51e0", rm: "#1a9a9a", rr: "#d49265", rp: "#2d3078" };
    const map = [
      ["Q:lp", "W:lr", "E:lm", "R:li", "T:li", "Y:ri", "U:ri", "I:rm", "O:rr", "P:rp"],
      ["A:lp", "S:lr", "D:lm", "F:li", "G:li", "H:ri", "J:ri", "K:rm", "L:rr", ";:rp"],
      ["Z:lp", "X:lr", "C:lm", "V:li", "B:li", "N:ri", "M:ri", ",:rm", ".:rr", "/:rp"]
    ];
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 470" role="img" font-family="${FONT}"><rect width="960" height="470" rx="18" fill="#f6f7fb"/>`;
    map.forEach((row, ri) => row.forEach((cell, i) => {
      const [ch, f] = cell.split(":"), x = 70 + ri * 28 + i * 80, y = 40 + ri * 88, home = ri === 1 && "FJ".includes(ch);
      s += `<rect x="${x}" y="${y}" width="68" height="72" rx="10" fill="${colors[f]}" opacity="${ri === 1 ? 1 : 0.78}"/><text x="${x + 34}" y="${y + 46}" text-anchor="middle" font-size="26" font-weight="700" fill="#fff">${ch}</text>`;
      if (home) s += `<rect x="${x + 22}" y="${y + 58}" width="24" height="5" rx="2.5" fill="#fff"/>`;
    }));
    s += `<rect x="236" y="310" width="430" height="58" rx="10" fill="#9aa0c3"/><text x="451" y="347" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">Phím cách - ngón cái</text>`;
    const legend = [["lp", "Út trái"], ["lr", "Áp út trái"], ["lm", "Giữa trái"], ["li", "Trỏ trái"], ["ri", "Trỏ phải"], ["rm", "Giữa phải"], ["rr", "Áp út phải"], ["rp", "Út phải"]];
    legend.forEach(([k, t], i) => { const x = 40 + i * 113; s += `<rect x="${x}" y="400" width="18" height="18" rx="4" fill="${colors[k]}"/><text x="${x + 24}" y="414" font-size="15" fill="#33354a">${t}</text>`; });
    return s + `<text x="480" y="452" text-anchor="middle" font-size="14" fill="#7f8491">Hàng phím cơ sở (A S D F - J K L ;): hai phím F và J có gờ nổi để định vị ngón trỏ mà không cần nhìn</text></svg>`;
  })(),

  // Khổ giấy & lề theo Nghị định 30/2020
  "fig-le-nghi-dinh-30": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640" role="img" font-family="${FONT}"><rect width="960" height="640" rx="18" fill="#f6f7fb"/>`;
    const X = 300, Y = 40, W = 380, H = 540; // khổ A4 thu nhỏ
    s += `<rect x="${X}" y="${Y}" width="${W}" height="${H}" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    const L = 58, R = 30, T = 38, B = 38; // tỉ lệ ~ 30mm/15–20mm/20mm
    s += `<rect x="${X + L}" y="${Y + T}" width="${W - L - R}" height="${H - T - B}" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="8 6"/>`;
    // Phần đầu: tên cơ quan (trái, ~35% bề ngang) - quốc hiệu, tiêu ngữ (phải, ~65%)
    const cx1 = X + L + (W - L - R) * 0.17, cx2 = X + L + (W - L - R) * 0.66;
    s += `<text x="${cx1}" y="${Y + T + 24}" text-anchor="middle" font-size="9" font-weight="700" fill="#33354a">TÊN CƠ QUAN</text>`;
    s += `<rect x="${cx1 - 22}" y="${Y + T + 30}" width="44" height="1.6" fill="#33354a"/>`;
    s += `<text x="${cx1}" y="${Y + T + 46}" text-anchor="middle" font-size="8.5" fill="#33354a">Số: …/…</text>`;
    s += `<text x="${cx2}" y="${Y + T + 24}" text-anchor="middle" font-size="8" font-weight="700" fill="#33354a">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</text>`;
    s += `<text x="${cx2}" y="${Y + T + 38}" text-anchor="middle" font-size="8.5" font-weight="700" fill="#33354a">Độc lập - Tự do - Hạnh phúc</text>`;
    s += `<rect x="${cx2 - 50}" y="${Y + T + 43}" width="100" height="1.4" fill="#33354a"/>`;
    s += `<text x="${cx2}" y="${Y + T + 60}" text-anchor="middle" font-size="8.5" font-style="italic" fill="#33354a">Hà Nội, ngày … tháng … năm …</text>`;
    s += `<text x="${X + W / 2 + 14}" y="${Y + 140}" text-anchor="middle" font-size="15" font-weight="800" fill="#1d2040">TÊN LOẠI VĂN BẢN</text>`;
    for (let i = 0; i < 11; i++) s += `<rect x="${X + L + (i % 4 === 0 ? 26 : 10)}" y="${Y + 172 + i * 24}" width="${i % 4 === 3 ? 170 : W - L - R - 20 - (i % 4 === 0 ? 16 : 0)}" height="8" rx="4" fill="#d9dbe6"/>`;
    s += `<circle cx="${X + W - 110}" cy="${Y + H - 90}" r="34" fill="none" stroke="${RED}" stroke-width="3" opacity=".7"/>`;
    const lab = (x, y, t, a = "middle") => `<text x="${x}" y="${y}" text-anchor="${a}" font-size="17" font-weight="700" fill="#1d2040">${t}</text>`;
    const ln = (x1, y1, x2, y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="#2d3078" stroke-width="2" marker-start="url(#a)" marker-end="url(#a)"/>`;
    s += `<defs><marker id="a" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#2d3078"/></marker></defs>`;
    s += ln(X, Y + H / 2, X + L, Y + H / 2) + lab(X - 20, Y + H / 2 - 12, "Lề trái", "end") + lab(X - 20, Y + H / 2 + 12, "30–35 mm", "end");
    s += ln(X + W - R, Y + H / 2, X + W, Y + H / 2) + lab(X + W + 20, Y + H / 2 - 12, "Lề phải", "start") + lab(X + W + 20, Y + H / 2 + 12, "15–20 mm", "start");
    s += ln(X + W / 2, Y, X + W / 2, Y + T) + lab(X + W + 20, Y + 20, "Lề trên 20–25 mm", "start");
    s += ln(X + W / 2, Y + H - B, X + W / 2, Y + H) + lab(X + W + 20, Y + H - 10, "Lề dưới 20–25 mm", "start");
    s += `<text x="${X - 20}" y="${Y + 40}" text-anchor="end" font-size="15" fill="#4d4d4d">Khổ A4</text><text x="${X - 20}" y="${Y + 62}" text-anchor="end" font-size="15" fill="#4d4d4d">210 × 297 mm</text>`;
    s += `<text x="${X - 20}" y="${Y + H - 60}" text-anchor="end" font-size="15" fill="#4d4d4d">Times New Roman</text><text x="${X - 20}" y="${Y + H - 38}" text-anchor="end" font-size="15" fill="#4d4d4d">nội dung cỡ 13–14</text>`;
    return s + "</svg>";
  })(),

  // Tư thế ngồi đúng
  "fig-tu-the-ngoi": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560" role="img" font-family="${FONT}">
    <rect width="960" height="560" rx="18" fill="#f6f7fb"/>
    <rect x="560" y="130" width="230" height="150" rx="10" fill="#1d2040"/><rect x="573" y="143" width="204" height="124" rx="5" fill="#e9f4ee"/><rect x="660" y="280" width="36" height="60" fill="#9aa0c3"/><rect x="618" y="338" width="120" height="10" rx="5" fill="#9aa0c3"/>
    <rect x="410" y="348" width="450" height="14" rx="7" fill="#c9a77d"/><rect x="440" y="362" width="12" height="160" fill="#b38f63"/><rect x="820" y="362" width="12" height="160" fill="#b38f63"/>
    <rect x="462" y="336" width="120" height="12" rx="4" fill="#33354a"/>
    <g fill="none" stroke="#2d3078" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"><path d="M246 175 L232 330"/><path d="M232 330 L360 330 L366 470"/><path d="M366 470 L410 470"/><path d="M243 215 L300 300 L470 336"/></g>
    <circle cx="250" cy="125" r="38" fill="#2d3078"/>
    <rect x="160" y="330" width="130" height="18" rx="9" fill="#7f8491"/><rect x="180" y="348" width="14" height="140" fill="#7f8491"/><rect x="150" y="488" width="80" height="10" rx="5" fill="#7f8491"/><path d="M168 340 L176 200" stroke="#7f8491" stroke-width="14" stroke-linecap="round"/>
    <path d="M290 125 H585" stroke="#f3a33b" stroke-width="3" stroke-dasharray="8 7"/>
    <g font-size="16" font-weight="700" fill="#1d2040">
      <rect x="380" y="78" width="180" height="32" rx="16" fill="#fff" stroke="#f3a33b"/><text x="470" y="99" text-anchor="middle">Mắt ngang mép trên</text>
      <rect x="600" y="70" width="190" height="32" rx="16" fill="#fff" stroke="#3bb54a"/><text x="695" y="91" text-anchor="middle">Cách màn 50–70 cm</text>
      <rect x="20" y="240" width="170" height="32" rx="16" fill="#fff" stroke="#2d3078"/><text x="105" y="261" text-anchor="middle">Lưng tựa ghế</text>
      <rect x="300" y="250" width="160" height="32" rx="16" fill="#fff" stroke="#f24d50"/><text x="380" y="271" text-anchor="middle">Khuỷu tay ~90°</text>
      <rect x="470" y="380" width="200" height="32" rx="16" fill="#fff" stroke="#f24d50"/><text x="570" y="401" text-anchor="middle">Cổ tay thẳng, thả lỏng</text>
      <rect x="250" y="500" width="210" height="32" rx="16" fill="#fff" stroke="#2d3078"/><text x="355" y="521" text-anchor="middle">Bàn chân đặt phẳng sàn</text>
    </g></svg>`,

  // Quy trình xử lý một đơn
  "fig-quy-trinh-don": (() => {
    const steps = [["Đặt hàng", "Khách tải tệp,\nhệ thống báo giá", "#f24d50"], ["Thanh toán", "Chuyển khoản VietQR,\nđối soát", "#f3a33b"], ["Giao việc", "Quản trị chọn\nchuyên viên phù hợp", "#6c8cff"], ["Đánh máy", "Chuyên viên gõ lại,\ntải bản nháp", "#2d3078"], ["Kiểm tra", "Biên tập viên soát\nlỗi, duyệt tệp", "#3bb54a"]];
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 330" role="img" font-family="${FONT}"><rect width="960" height="330" rx="18" fill="#f6f7fb"/>`;
    steps.forEach(([t, d, c], i) => {
      const x = 96 + i * 192;
      if (i) s += `<path d="M${x - 140} 110 H${x - 52}" stroke="#c9cbd8" stroke-width="4" stroke-dasharray="8 7"/><path d="M${x - 62} 100 L${x - 50} 110 L${x - 62} 120" fill="none" stroke="#c9cbd8" stroke-width="4"/>`;
      s += `<circle cx="${x}" cy="110" r="46" fill="${c}"/><text x="${x}" y="127" text-anchor="middle" font-size="44" font-weight="800" fill="#fff">${i + 1}</text>`;
      s += `<text x="${x}" y="200" text-anchor="middle" font-size="19" font-weight="800" fill="#1d2040">${t}</text>`;
      d.split("\n").forEach((line, k) => { s += `<text x="${x}" y="${230 + k * 22}" text-anchor="middle" font-size="14.5" fill="#55586b">${line}</text>`; });
    });
    return s + `<text x="480" y="305" text-anchor="middle" font-size="14" fill="#7f8491">Khách nhận email ở mỗi mốc quan trọng và tải tài liệu ngay trong trang đơn hàng</text></svg>`;
  })(),

  // Bốn nhóm dấu hiệu lừa đảo việc làm online
  "fig-dau-hieu-lua-dao": (() => {
    const items = [
      ["₫", "Đòi tiền trước", "Phí đăng ký, phí tài liệu,", "đặt cọc, “bảo hiểm hồ sơ”", RED],
      ["%", "Thu nhập phi lý", "Vài giờ gõ đơn giản mà hứa", "hàng trăm nghìn mỗi ngày", AMBER],
      ["↻", "Nạp tiền nhận hoa hồng", "Trả nhỏ để tạo lòng tin, rồi", "đòi nạp lớn “mở khóa nhiệm vụ”", "#9b51e0"],
      ["!", "Xin thông tin nhạy cảm", "Mã OTP, mật khẩu, ảnh căn", "cước kèm khuôn mặt", NAVY]
    ];
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 470" role="img" font-family="${FONT}"><rect width="960" height="470" rx="18" fill="#f6f7fb"/>`;
    items.forEach(([ic, t, d1, d2, c], i) => {
      const x = 30 + (i % 2) * 460, y = 30 + Math.floor(i / 2) * 200;
      s += `<rect x="${x}" y="${y}" width="440" height="180" rx="16" fill="#fff" stroke="#e3e5ef" stroke-width="2"/><rect x="${x}" y="${y}" width="10" height="180" rx="5" fill="${c}"/>`;
      s += `<circle cx="${x + 80}" cy="${y + 90}" r="46" fill="${c}"/><text x="${x + 80}" y="${y + 108}" text-anchor="middle" font-size="48" font-weight="800" fill="#fff">${ic}</text>`;
      s += `<text x="${x + 150}" y="${y + 70}" font-size="23" font-weight="800" fill="#1d2040">${t}</text>`;
      s += `<text x="${x + 150}" y="${y + 106}" font-size="16.5" fill="#55586b">${d1}</text><text x="${x + 150}" y="${y + 130}" font-size="16.5" fill="#55586b">${d2}</text>`;
    });
    return s + `<text x="480" y="452" text-anchor="middle" font-size="14" fill="#7f8491">Gặp bất kỳ dấu hiệu nào: dừng lại, không chuyển tiền, không cung cấp thông tin</text></svg>`;
  })(),

  // Trình bày công thức hóa học đúng chuẩn
  "fig-hoa-hoc-word": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 470" role="img" font-family="${FONT}"><rect width="960" height="470" rx="18" fill="#f6f7fb"/>`;
    s += `<rect x="40" y="40" width="880" height="250" rx="16" fill="#fff" stroke="#e3e5ef" stroke-width="2"/>`;
    s += chem(140, 190, "2H_2", { size: 62, anchor: "start" }) + chem(300, 190, "+", { size: 62 }) + chem(350, 190, "O_2", { size: 62, anchor: "start" });
    s += `<path d="M470 172 H620" stroke="${INK}" stroke-width="4"/><path d="M606 162 L622 172 L606 182" fill="none" stroke="${INK}" stroke-width="4"/>`;
    s += txt(545, 155, "t°, xt", { size: 26, family: SERIF, italic: true, anchor: "middle", fill: RED });
    s += chem(650, 190, "2H_2O", { size: 62, anchor: "start" });
    const tag = (x1, y1, x2, y2, label, c) => `<path d="M${x1} ${y1} L${x2} ${y2}" stroke="${c}" stroke-width="2.5"/><circle cx="${x1}" cy="${y1}" r="5" fill="${c}"/>` +
      `<rect x="${x2 - 85}" y="${y2}" width="170" height="36" rx="18" fill="${c}"/><text x="${x2}" y="${y2 + 24}" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">${label}</text>`;
    s += tag(158, 200, 150, 320, "Hệ số tỉ lượng", NAVY);
    s += tag(232, 205, 330, 320, "Chỉ số dưới", GREEN);
    s += tag(545, 130, 545, 60, "", "transparent");
    s += `<path d="M590 140 L700 80" stroke="${RED}" stroke-width="2.5"/><circle cx="590" cy="140" r="5" fill="${RED}"/><rect x="700" y="62" width="190" height="36" rx="18" fill="${RED}"/><text x="795" y="86" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">Điều kiện phản ứng</text>`;
    s += tag(545, 182, 540, 320, "Mũi tên phản ứng", "#9b51e0");
    s += chem(790, 425, "Fe^{3+}   SO_4^{2−}", { size: 46 });
    s += `<rect x="600" y="400" width="0" height="0"/>`;
    s += txt(600, 412, "Điện tích ion: chỉ số trên, số trước dấu sau →", { size: 17, weight: 700, anchor: "end", fill: "#55586b" });
    s += txt(600, 440, "Ký hiệu nguyên tố luôn viết đứng", { size: 17, anchor: "end", fill: "#55586b" });
    return s + "</svg>";
  })(),

  // Cấu trúc tệp LaTeX
  "fig-latex-cau-truc": (() => {
    const mono = "Courier New,monospace";
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" role="img" font-family="${FONT}"><rect width="960" height="480" rx="18" fill="#f6f7fb"/>`;
    s += `<rect x="30" y="30" width="470" height="420" rx="14" fill="#1d2040"/>`;
    const lines = [
      ["\\documentclass[12pt]{article}", "#7fd3ff"], ["\\usepackage[vietnamese]{babel}", "#7fd3ff"], ["\\usepackage{amsmath}", "#7fd3ff"], ["\\title{Bài tập Giải tích}", "#7fd3ff"],
      ["", ""], ["\\begin{document}", "#ffb86b"], ["\\maketitle", "#e7e8f6"], ["\\section{Đạo hàm}", "#e7e8f6"], ["Đạo hàm của $x^2$ là $2x$.", "#e7e8f6"], ["\\end{document}", "#ffb86b"]
    ];
    lines.forEach(([l, c], i) => { if (l) s += txt(60, 80 + i * 36, l, { size: 18.5, family: mono, fill: c }); });
    s += `<path d="M515 52 h12 v138 h-12" fill="none" stroke="${AMBER}" stroke-width="3"/>` + txt(536, 115, "Phần khai báo", { size: 15, weight: 700, fill: "#b5651d" }) + txt(536, 136, "(preamble)", { size: 14, fill: "#b5651d" });
    s += `<path d="M515 232 h12 v210 h-12" fill="none" stroke="${GREEN}" stroke-width="3"/>` + txt(536, 330, "Nội dung", { size: 15, weight: 700, fill: "#1f6f4a" }) + txt(536, 351, "(document)", { size: 14, fill: "#1f6f4a" });
    s += `<path d="M650 240 H690" stroke="#9aa0c3" stroke-width="4"/><path d="M680 230 L692 240 L680 250" fill="none" stroke="#9aa0c3" stroke-width="4"/>`;
    s += `<rect x="705" y="40" width="225" height="400" rx="6" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    s += txt(817, 95, "Bài tập Giải tích", { size: 17, family: SERIF, weight: 700, anchor: "middle" }) + txt(817, 118, "16/10/2026", { size: 12, family: SERIF, anchor: "middle", fill: "#55586b" });
    s += txt(725, 165, "1  Đạo hàm", { size: 16, family: SERIF, weight: 700 });
    s += `<text x="725" y="198" font-family="${SERIF}" font-size="13.5" fill="${INK}">Đạo hàm của <tspan font-style="italic">x</tspan><tspan dy="-5" font-size="9">2</tspan><tspan dy="5"> là 2</tspan><tspan font-style="italic">x</tspan>.</text>`;
    for (let i = 0; i < 6; i++) s += `<rect x="725" y="${225 + i * 22}" width="${i % 3 === 2 ? 110 : 180}" height="7" rx="3.5" fill="#d9dbe6"/>`;
    s += txt(817, 420, "1", { size: 12, family: SERIF, anchor: "middle", fill: "#55586b" });
    return s + txt(817, 470, "Bản PDF sau khi biên dịch", { size: 13, anchor: "middle", fill: "#7f8491" }) + "</svg>";
  })(),

  // Quy trình chuẩn bị bản dịch
  "fig-quy-trinh-dich": flow([
    ["Bản scan", "Ảnh chụp, PDF scan,\nbản viết tay", "#8c877d"], ["Đánh máy", "Gõ nguyên văn,\nđánh dấu chỗ khó đọc", RED],
    ["Dịch", "Công cụ CAT, bộ nhớ\ndịch, bảng thuật ngữ", BLUE], ["Hiệu đính", "Đối chiếu số liệu,\ntên riêng, thuật ngữ", AMBER], ["Dàn trang", "Bố cục khớp với\nbản gốc", GREEN]
  ], "Bản gốc chỉnh sửa được giúp báo giá minh bạch, dịch nhanh và thuật ngữ nhất quán"),

  // Ba bố cục song ngữ
  "fig-song-ngu": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 430" role="img" font-family="${FONT}"><rect width="960" height="430" rx="18" fill="#f6f7fb"/>`;
    const EN = "#9fb0e0", VI = "#f2a7a9";
    const bar = (x, y, w, c) => `<rect x="${x}" y="${y}" width="${w}" height="8" rx="4" fill="${c}"/>`;
    // 1. Hai cột
    s += `<rect x="50" y="40" width="240" height="320" rx="6" fill="#fff" stroke="#c9cbd8" stroke-width="2"/><path d="M170 60 V340" stroke="#e3e5ef" stroke-width="2"/>`;
    for (let i = 0; i < 10; i++) s += bar(66, 66 + i * 27, i % 3 === 2 ? 60 : 90, EN) + bar(184, 66 + i * 27, i % 3 === 2 ? 70 : 92, VI);
    // 2. Xen kẽ
    s += `<rect x="360" y="40" width="240" height="320" rx="6" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    for (let b = 0; b < 4; b++) { const y = 62 + b * 72; s += bar(378, y, 200, EN) + bar(378, y + 16, 150, EN) + bar(394, y + 36, 184, VI) + bar(394, y + 52, 120, VI); }
    // 3. Trang đối diện
    s += `<rect x="670" y="40" width="120" height="320" rx="6" fill="#fff" stroke="#c9cbd8" stroke-width="2"/><rect x="790" y="40" width="120" height="320" rx="6" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    for (let i = 0; i < 10; i++) s += bar(684, 66 + i * 27, i % 4 === 3 ? 50 : 92, EN) + bar(804, 66 + i * 27, i % 4 === 3 ? 60 : 92, VI);
    [["Hai cột song song", 170], ["Xen kẽ từng đoạn", 480], ["Hai trang đối diện", 790]].forEach(([t, x]) => { s += txt(x, 395, t, { size: 18, weight: 800, anchor: "middle" }); });
    s += `<rect x="330" y="410" width="14" height="10" rx="3" fill="${EN}"/>` + txt(350, 420, "Tiếng Anh", { size: 13, fill: "#55586b" }) + `<rect x="460" y="410" width="14" height="10" rx="3" fill="${VI}"/>` + txt(480, 420, "Tiếng Việt", { size: 13, fill: "#55586b" });
    return s + "</svg>";
  })(),

  // Quy trình đối tác giới thiệu khách
  "fig-hoa-hong-doi-tac": flow([
    ["Khách quét QR", "Poster tại quầy hoặc\nliên kết của tiệm", NAVY], ["Đặt hàng", "Khách gửi tài liệu,\nthanh toán VietQR", AMBER],
    ["Đánh máy 247 làm", "Gõ, kiểm tra,\ngiao bản Word", BLUE], ["Đơn hoàn thành", "Hoa hồng\nđược duyệt", GREEN], ["Tiệm nhận 30%", "Chuyển khoản\nhằng tháng", RED]
  ], "Tiệm không cần thu hộ, không cần người gõ - mọi đơn và hoa hồng hiện trong trang đối tác"),

  // Heading → mục lục tự động
  "fig-muc-luc-word": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 430" role="img" font-family="${FONT}"><rect width="960" height="430" rx="18" fill="#f6f7fb"/>`;
    s += `<rect x="40" y="40" width="380" height="350" rx="8" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    const rows = [["Heading 1", "CHƯƠNG 1. TỔNG QUAN", 0, NAVY], ["", "", 9], ["Heading 2", "1.1. Cơ sở lý thuyết", 1, BLUE], ["", "", 9], ["Heading 3", "1.1.1. Khái niệm", 2, GREEN], ["", "", 9], ["Heading 2", "1.2. Tình hình nghiên cứu", 1, BLUE], ["", "", 9]];
    rows.forEach(([lab, t, lv, c], i) => {
      const y = 82 + i * 38;
      if (lv === 9) { s += `<rect x="70" y="${y - 12}" width="320" height="8" rx="4" fill="#e3e5ef"/>`; return; }
      s += `<rect x="60" y="${y - 20}" width="78" height="26" rx="13" fill="${c}"/>` + txt(99, y - 2, lab, { size: 11.5, weight: 700, anchor: "middle", fill: "#fff" }) + txt(150 + lv * 14, y, t, { size: 15, weight: lv ? 400 : 800 });
    });
    s += `<path d="M445 215 H505" stroke="#9aa0c3" stroke-width="4"/><path d="M495 205 L507 215 L495 225" fill="none" stroke="#9aa0c3" stroke-width="4"/>` + txt(475, 250, "F9", { size: 15, weight: 800, anchor: "middle", fill: RED });
    s += `<rect x="530" y="40" width="390" height="350" rx="8" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>` + txt(725, 85, "MỤC LỤC", { size: 20, weight: 800, anchor: "middle" });
    [["CHƯƠNG 1. TỔNG QUAN", "1", 0], ["1.1. Cơ sở lý thuyết", "3", 1], ["1.1.1. Khái niệm", "3", 2], ["1.2. Tình hình nghiên cứu", "8", 1], ["CHƯƠNG 2. PHƯƠNG PHÁP", "15", 0]].forEach(([t, p, lv], i) => {
      const y = 135 + i * 46, x = 555 + lv * 18;
      s += txt(x, y, t, { size: 14.5, weight: lv ? 400 : 800 }) + `<path d="M${x + t.length * (lv ? 7.4 : 8.6) + 6} ${y - 4} H870" stroke="#9aa0c3" stroke-width="2" stroke-dasharray="1.5 5" stroke-linecap="round"/>` + txt(895, y, p, { size: 14.5, weight: 700, anchor: "end" });
    });
    return s + txt(480, 418, "Gán Heading cho tiêu đề → References → Table of Contents → cập nhật bằng F9", { size: 14, anchor: "middle", fill: "#7f8491" }) + "</svg>";
  })(),

  // Ma trận, hệ phương trình, tích phân trong Word
  "fig-ma-tran-word": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 400" role="img" font-family="${FONT}"><rect width="960" height="400" rx="18" fill="#f6f7fb"/>`;
    const panel = (x, title, codeTxt) => `<rect x="${x}" y="40" width="280" height="300" rx="14" fill="#fff" stroke="#e3e5ef" stroke-width="2"/>` + txt(x + 140, 75, title, { size: 17, weight: 800, anchor: "middle" }) +
      `<rect x="${x + 16}" y="282" width="248" height="40" rx="8" fill="#1d2040"/>` + txt(x + 140, 308, codeTxt, { size: 13.5, family: "Courier New,monospace", anchor: "middle", fill: "#7fd3ff" });
    s += panel(40, "Ma trận 2×2", "(\\matrix(a&amp;b@c&amp;d))") + panel(340, "Hệ phương trình", "Bracket → Cases") + panel(640, "Tích phân", "\\int_0^1 x^2 dx");
    s += `<path d="M110 110 q-22 70 0 140" fill="none" stroke="${INK}" stroke-width="4"/><path d="M250 110 q22 70 0 140" fill="none" stroke="${INK}" stroke-width="4"/>`;
    s += txt(150, 165, "a", { size: 38, family: SERIF, italic: true, anchor: "middle" }) + txt(210, 165, "b", { size: 38, family: SERIF, italic: true, anchor: "middle" }) + txt(150, 225, "c", { size: 38, family: SERIF, italic: true, anchor: "middle" }) + txt(210, 225, "d", { size: 38, family: SERIF, italic: true, anchor: "middle" });
    s += `<path d="M400 110 q-18 0 -18 25 v35 q0 18 -16 18 q16 0 16 18 v35 q0 25 18 25" fill="none" stroke="${INK}" stroke-width="4"/>`;
    s += chem(500, 165, "2x + y = 5", { size: 28, italic: true }) + chem(500, 230, "x − y = 1", { size: 28, italic: true });
    s += txt(720, 235, "∫", { size: 110, family: SERIF, anchor: "middle" }) + txt(745, 140, "1", { size: 22, family: SERIF }) + txt(735, 262, "0", { size: 22, family: SERIF }) + chem(830, 205, "x^2 dx", { size: 34, italic: true });
    return s + txt(480, 380, "Mở khung công thức bằng Alt + = rồi gõ cú pháp, nhấn phím cách để Word dựng công thức", { size: 14, anchor: "middle", fill: "#7f8491" }) + "</svg>";
  })(),

  // Dịch máy + hậu biên tập
  "fig-hau-bien-tap": flow([
    ["Bản gốc sạch", "Đánh máy, không\nngắt dòng cứng", "#8c877d"], ["Dịch máy", "Tạo bản nháp\nnhanh", "#5a3fd0"],
    ["Hậu biên tập", "Sửa nghĩa, bỏ sót,\nvăn phong", RED], ["Kiểm tra", "Thuật ngữ, số liệu,\ntên riêng", AMBER], ["Bản dịch cuối", "Trình bày khớp\nbản gốc", GREEN]
  ], "Mức độ hậu biên tập (nhẹ hay đầy đủ) phụ thuộc mục đích sử dụng bản dịch")
};

let n = 0;
for (const [name, content] of Object.entries(Object.assign({}, covers, figures))) {
  fs.writeFileSync(path.join(OUT, name + ".svg"), content.replace(/\n\s*/g, "\n"));
  n++;
}
console.log("Đã tạo " + n + " ảnh trong " + OUT);
