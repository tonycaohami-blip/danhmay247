/**
 * Tạo ảnh bìa (1200×630) và hình minh họa SVG cho blog — chạy: node scripts/make-blog-images.js
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
  })())
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
    s += `<rect x="236" y="310" width="430" height="58" rx="10" fill="#9aa0c3"/><text x="451" y="347" text-anchor="middle" font-size="20" font-weight="700" fill="#fff">Phím cách — ngón cái</text>`;
    const legend = [["lp", "Út trái"], ["lr", "Áp út trái"], ["lm", "Giữa trái"], ["li", "Trỏ trái"], ["ri", "Trỏ phải"], ["rm", "Giữa phải"], ["rr", "Áp út phải"], ["rp", "Út phải"]];
    legend.forEach(([k, t], i) => { const x = 40 + i * 113; s += `<rect x="${x}" y="400" width="18" height="18" rx="4" fill="${colors[k]}"/><text x="${x + 24}" y="414" font-size="15" fill="#33354a">${t}</text>`; });
    return s + `<text x="480" y="452" text-anchor="middle" font-size="14" fill="#7f8491">Hàng phím cơ sở (A S D F — J K L ;): hai phím F và J có gờ nổi để định vị ngón trỏ mà không cần nhìn</text></svg>`;
  })(),

  // Khổ giấy & lề theo Nghị định 30/2020
  "fig-le-nghi-dinh-30": (() => {
    let s = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 640" role="img" font-family="${FONT}"><rect width="960" height="640" rx="18" fill="#f6f7fb"/>`;
    const X = 300, Y = 40, W = 380, H = 540; // khổ A4 thu nhỏ
    s += `<rect x="${X}" y="${Y}" width="${W}" height="${H}" fill="#fff" stroke="#c9cbd8" stroke-width="2"/>`;
    const L = 58, R = 30, T = 38, B = 38; // tỉ lệ ~ 30mm/15–20mm/20mm
    s += `<rect x="${X + L}" y="${Y + T}" width="${W - L - R}" height="${H - T - B}" fill="none" stroke="${RED}" stroke-width="2" stroke-dasharray="8 6"/>`;
    // Phần đầu: tên cơ quan (trái, ~35% bề ngang) — quốc hiệu, tiêu ngữ (phải, ~65%)
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
  })()
};

let n = 0;
for (const [name, content] of Object.entries(Object.assign({}, covers, figures))) {
  fs.writeFileSync(path.join(OUT, name + ".svg"), content.replace(/\n\s*/g, "\n"));
  n++;
}
console.log("Đã tạo " + n + " ảnh trong " + OUT);
