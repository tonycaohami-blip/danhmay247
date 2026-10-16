/**
 * SEO phía máy chủ - để Google, Cốc Cốc, Bing, Facebook, Zalo đọc được nội dung mà KHÔNG cần chạy JavaScript.
 *
 *  - /blog/:slug         bài viết dựng sẵn HTML (tiêu đề, mô tả, nội dung, mục lục, JSON-LD BlogPosting + Breadcrumb)
 *  - /dich-vu, /dich-vu/:slug   danh sách & chi tiết dịch vụ dựng sẵn (JSON-LD Service + Breadcrumb)
 *  - /blog               chèn sẵn danh sách bài viết vào HTML
 *  - Mọi trang HTML      chèn canonical, Open Graph (ảnh PNG), Twitter card, JSON-LD (Organization, FAQPage, Breadcrumb)
 *  - Đường dẫn cũ /bai-viet?slug=… và /dich-vu?slug=… chuyển hướng 301 sang đường dẫn mới
 */
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const config = require("./config");
const { DM, fmt } = require("./shared");

const SITE = () => config.SITE_URL;
const OG_DIR = path.join(config.PUBLIC_DIR, "assets/img/og");

/* ---------- Bài viết (nạp lại khi posts.js thay đổi) ---------- */
let postsCache = { mtime: 0, list: [] };
function posts() {
  const file = path.join(config.PUBLIC_DIR, "assets/js/posts.js");
  try {
    const m = fs.statSync(file).mtimeMs;
    if (m !== postsCache.mtime) {
      const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
      vm.runInContext(fs.readFileSync(file, "utf8"), ctx);
      postsCache = { mtime: m, list: (ctx.DM.posts || []).slice().sort((a, b) => b.date.localeCompare(a.date)) };
    }
  } catch (e) { console.error("[seo] Không đọc được posts.js:", e.message); }
  return postsCache.list;
}

/* ---------- Tiện ích ---------- */
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const vnDate = (d) => d.split("-").reverse().join("/");
const strip = (h) => String(h).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
const CLOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
const ogImage = (name) => SITE() + "/assets/img/og/" + (fs.existsSync(path.join(OG_DIR, name + ".png")) ? name : "default") + ".png";
const ldScript = (obj) => '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, "\\u003c") + "</script>";

const ORG_ID = () => SITE() + "/#to-chuc";
function organization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID(),
    name: "Đánh máy 247",
    alternateName: ["Danh may 247", "DanhMay247"],
    url: SITE() + "/",
    logo: SITE() + "/assets/img/logo-512.png",
    image: SITE() + "/assets/img/og/default.png",
    description: "Dịch vụ đánh máy lại tài liệu, chuyển âm thành văn bản và định dạng tài liệu - 100% do con người thực hiện.",
    email: DM.site.email,
    telephone: "+84" + DM.site.phoneHref.replace(/^0/, ""),
    parentOrganization: { "@type": "Organization", name: DM.site.owner },
    contactPoint: { "@type": "ContactPoint", telephone: "+84" + DM.site.phoneHref.replace(/^0/, ""), email: DM.site.email, contactType: "customer service", areaServed: "VN", availableLanguage: ["vi", "en"] }
  };
}
function breadcrumb(items) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it[0], item: SITE() + it[1] }))
  };
}

/** Thẻ meta chung cho một trang */
function metaTags({ title, description, url, image, type }) {
  return [
    `<link rel="canonical" href="${esc(url)}">`,
    `<meta property="og:type" content="${type || "website"}">`,
    `<meta property="og:site_name" content="Đánh máy 247">`,
    `<meta property="og:locale" content="vi_VN">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${esc(url)}">`,
    `<meta property="og:image" content="${esc(image)}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(title)}">`,
    `<meta name="twitter:description" content="${esc(description)}">`,
    `<meta name="twitter:image" content="${esc(image)}">`
  ].join("\n  ");
}

/** Khung trang đầy đủ (đầu trang/chân trang do main.js vẽ như các trang khác) */
function shell({ title, description, url, image, type, jsonld, body, script, fonts, extraScripts }) {
  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  ${metaTags({ title, description, url, image, type })}
  <meta name="theme-color" content="#f24d50">
  <link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/img/logo-512.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${fonts || ""}Merriweather:wght@300;400;700&family=Open+Sans:wght@400;600;700;800&display=swap">
  <link rel="stylesheet" href="/assets/css/style.css">
  ${(jsonld || []).map(ldScript).join("\n  ")}
</head>
<body data-header="grey">
  <div id="site-header"></div>
  ${body}
  <div id="site-footer"></div>
  <script src="/assets/js/data.js"></script>
  ${(extraScripts || []).map((s) => `<script src="${s}"></script>`).join("\n  ")}
  <script src="/assets/js/main.js"></script>
  ${script ? "<script>" + script + "</script>" : ""}
</body>
</html>`;
}

/* =========================================================
   BLOG
   ========================================================= */
function postCard(p) {
  return `<a class="post-card" href="/blog/${p.slug}"><div class="post-card__img"><img src="${esc(p.cover)}" alt="" loading="lazy" width="1200" height="630"><span class="chip">${esc(p.cat)}</span></div>` +
    `<div class="post-card__body"><h3>${esc(p.title)}</h3><p>${esc(p.excerpt)}</p><div class="post-meta"><span>${CLOCK}${p.read} phút đọc</span><span>${vnDate(p.date)}</span></div></div></a>`;
}
function postFeature(p) {
  return `<a class="post-feature" href="/blog/${p.slug}"><div class="post-feature__img"><img src="${esc(p.cover)}" alt="" width="1200" height="630"></div>` +
    `<div class="post-feature__body"><span class="chip chip--red" style="align-self:flex-start">Bài mới nhất · ${esc(p.cat)}</span><h2>${esc(p.title)}</h2><p>${esc(p.excerpt)}</p>` +
    `<div class="post-meta"><span>${CLOCK}${p.read} phút đọc</span><span>${vnDate(p.date)}</span></div><span class="link" style="align-self:flex-start">Đọc bài viết →</span></div></a>`;
}

function renderPost(slug) {
  const list = posts();
  const idx = list.findIndex((x) => x.slug === slug);
  if (idx < 0) return null;
  const p = list[idx];
  const url = SITE() + "/blog/" + p.slug;
  const image = ogImage(p.slug);

  // Gắn id cho tiêu đề h2 để có mục lục và liên kết neo
  let n = 0;
  const heads = [];
  const faq = Array.isArray(p.faq) && p.faq.length ? p.faq : null;
  const faqHtml = faq ? `<h2>Câu hỏi thường gặp</h2><div class="post-faq" data-accordion="multi">${faq.map((f, i) => faqItem(f, i === 0)).join("")}</div>` : "";
  const body = (p.body + faqHtml).replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => { n++; heads.push(strip(inner)); return `<h2 id="muc-${n}">${inner}</h2>`; });
  const toc = heads.length >= 2 ? `<nav class="toc" id="toc" aria-label="Mục lục"><b>Nội dung bài viết</b><ol>${heads.map((h, i) => `<li><a href="#muc-${i + 1}">${esc(h)}</a></li>`).join("")}</ol></nav>` : "";

  const score = (x) => (x.cat === p.cat ? 3 : 0) + x.tags.filter((t) => p.tags.includes(t)).length;
  const related = list.filter((x) => x.slug !== p.slug).sort((a, b) => score(b) - score(a) || b.date.localeCompare(a.date)).slice(0, 3);
  const newer = list[idx - 1], older = list[idx + 1];
  const words = strip(p.body).split(" ").length;

  const html = `<div class="read-progress" id="progress" aria-hidden="true"></div>
  <main id="main">
    <section class="post-hero"><div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Trang chủ</a><span>/</span><a href="/blog">Blog</a><span>/</span><a href="/blog?cat=${encodeURIComponent(p.cat)}">${esc(p.cat)}</a></nav>
      <h1>${esc(p.title)}</h1>
      <div class="post-meta" style="justify-content:center"><span>${esc(p.author)}</span><span><time datetime="${p.date}">${vnDate(p.date)}</time></span><span>${CLOCK}${p.read} phút đọc</span></div>
      <div class="post-hero__cover"><img src="${esc(p.cover)}" alt="${esc(p.title)}" width="1200" height="630" fetchpriority="high"></div>
    </div></section>
    <section class="section" style="padding-top:50px"><div class="container"><div class="post-layout">
      <article class="prose" id="article" style="max-width:none;margin:0">
        ${body}
        <div class="post-tags">${p.tags.map((t) => `<span>#${esc(t)}</span>`).join("")}</div>
        <div style="display:flex;gap:10px;align-items:center;margin-top:24px;flex-wrap:wrap"><b style="color:#000">Chia sẻ:</b>
          <a class="button button--sm button--black" style="text-decoration:none" target="_blank" rel="noopener" href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}">Facebook</a>
          <a class="button button--sm button--black" style="text-decoration:none" target="_blank" rel="noopener" href="https://zalo.me/share?u=${encodeURIComponent(url)}">Zalo</a>
          <button type="button" class="button button--sm button--black" id="copy" data-url="${esc(url)}">Sao chép liên kết</button></div>
        <div class="post-author"><span class="login__avatar" aria-hidden="true">ĐM</span><div><b>${esc(p.author)}</b><small>${esc(DM.site.tagline)}. Chúng tôi chia sẻ kinh nghiệm thực tế từ công việc đánh máy, chuyển âm và biên tập tài liệu mỗi ngày.</small></div></div>
        <nav class="post-nav" aria-label="Bài trước và bài sau">
          ${older ? `<a href="/blog/${older.slug}" rel="prev"><small>← Bài trước</small><b>${esc(older.title)}</b></a>` : "<span></span>"}
          ${newer ? `<a class="next" href="/blog/${newer.slug}" rel="next"><small>Bài tiếp theo →</small><b>${esc(newer.title)}</b></a>` : "<span></span>"}
        </nav>
        <div class="routine-tasks" style="margin-top:44px"><div class="routine-tasks__title">Cần đánh máy tài liệu ngay?</div><p>Đặt hàng trong 3 phút, nhận kết quả chỉ từ 6 giờ. 100% do người thật gõ, bảo mật tuyệt đối.</p><a href="/dat-hang" class="button" style="text-decoration:none;color:#fff">Đặt hàng ngay</a></div>
      </article>
      <aside class="post-aside">${toc}
        <div class="aside-cta"><b>Gõ lại tài liệu chỉ từ ${fmt(DM.prices.retyping.base["30d"])}/trang</b>PDF, ảnh chụp, chữ viết tay sang Word - giữ nguyên định dạng, có biên tập viên kiểm tra.<a href="/bang-gia" class="button">Xem bảng giá</a></div>
      </aside>
    </div></div></section>
    <section class="section section--grey"><div class="container"><h2 class="section-title">Bài viết liên quan</h2><div class="blog-grid">${related.map(postCard).join("")}</div></div></section>
  </main>`;

  const script = `(function(){var a=document.getElementById("article"),b=document.getElementById("progress"),h=[].slice.call(a.querySelectorAll("h2[id]")),l=[].slice.call(document.querySelectorAll("#toc a"));
function s(){var r=a.getBoundingClientRect(),t=a.offsetHeight-innerHeight;b.style.width=Math.min(100,Math.max(0,(-r.top+120)/Math.max(1,t)*100))+"%";var c=-1;h.forEach(function(x,i){if(x.getBoundingClientRect().top<160)c=i});l.forEach(function(x,i){x.classList.toggle("is-active",i===c)})}
addEventListener("scroll",s,{passive:true});s();
var cp=document.getElementById("copy");cp.addEventListener("click",function(){var u=cp.getAttribute("data-url");if(navigator.clipboard)navigator.clipboard.writeText(u).then(function(){DM.toast("Đã sao chép liên kết bài viết.")},function(){DM.toast("Không thể sao chép, hãy copy từ thanh địa chỉ.","error")})});})();`;

  return shell({
    title: (p.seoTitle || p.title) + " - Đánh máy 247", description: p.excerpt, url, image, type: "article",
    jsonld: [
      {
        "@context": "https://schema.org", "@type": "BlogPosting", "@id": url + "#bai-viet",
        headline: p.title, description: p.excerpt, image: [image], datePublished: p.date, dateModified: p.date,
        inLanguage: "vi-VN", wordCount: words, articleSection: p.cat, keywords: p.tags.join(", "),
        author: { "@type": "Organization", name: p.author, url: SITE() + "/" },
        publisher: { "@id": ORG_ID(), "@type": "Organization", name: "Đánh máy 247", logo: { "@type": "ImageObject", url: SITE() + "/assets/img/logo-512.png" } },
        mainEntityOfPage: { "@type": "WebPage", "@id": url }
      },
      breadcrumb([["Trang chủ", "/"], ["Blog", "/blog"], [p.title, "/blog/" + p.slug]])
    ].concat(faq ? [{
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } }))
    }] : []),
    body: html, script
  }).replace("<head>", `<head>\n  <meta property="article:published_time" content="${p.date}">\n  <meta property="article:section" content="${esc(p.cat)}">`);
}

/** Chèn sẵn bài nổi bật + 9 bài đầu vào trang /blog (JS vẫn xử lý lọc, tìm kiếm, phân trang) */
function blogListHtml(html) {
  const list = posts();
  if (!list.length) return html;
  return html
    .replace('<div id="feature"></div>', `<div id="feature">${postFeature(list[0])}</div>`)
    .replace('<div class="blog-grid" id="posts" aria-live="polite"></div>', `<div class="blog-grid" id="posts" aria-live="polite">${list.slice(1, 10).map(postCard).join("")}</div>`);
}

/* =========================================================
   DỊCH VỤ
   ========================================================= */
function priceFrom(s) {
  const p = DM.prices[s.service], t = p.types.find((x) => x.key === s.type) || p.types[0];
  const min = Math.min(...Object.keys(p.base).map((k) => p.base[k]));
  const extra = (s.extras || []).reduce((a, k) => { const e = p.extras.find((x) => x.key === k); return a + (e ? e.pct : 0); }, 0);
  return { value: Math.round(min * t.k * (1 + extra / 100) / 1000) * 1000, unit: p.unit };
}
const orderUrl = (s) => "/dat-hang?service=" + s.service + "&type=" + s.type + (s.extras ? "&extras=" + s.extras.join(",") : "");
const badge = (s) => `<span class="svc-badge" style="background:${s.icon[1]}" aria-hidden="true">${esc(s.icon[0])}</span>`;
function svcCard(key) {
  const s = DM.services[key], pf = priceFrom(s);
  return `<a class="svc-card" href="/dich-vu/${key}">${badge(s)}<h3>${esc(s.title)}</h3><p>${esc(s.intro)}</p><span class="from">Từ ${fmt(pf.value)}/${pf.unit}</span></a>`;
}
const faqItem = (f, open) => `<div class="accordion__item${open ? " is-open" : ""}"><button type="button" class="accordion__btn">${f.q}</button><div class="accordion__panel" role="region"><div class="accordion__inner"><div class="accordion__content">${f.a}</div></div></div></div>`;
const compare = (sm) => `<div class="compare" style="--pos:50%"><span class="compare__label compare__label--before">Bản gốc</span><span class="compare__label compare__label--after">Bản đánh máy</span><div class="compare__doc compare__before">${sm.before}</div><div class="compare__doc compare__after">${sm.after}</div><div class="compare__handle" aria-hidden="true"><span class="compare__knob">◀▶</span></div><input type="range" min="0" max="100" value="50" aria-label="Kéo để so sánh bản gốc và bản đánh máy"></div>`;

function renderServiceList() {
  const keys = Object.keys(DM.services);
  const retyping = keys.filter((k) => DM.services[k].service === "retyping");
  const trans = keys.filter((k) => DM.services[k].service === "transcription");
  const body = `<main id="main">
    <section class="page-hero"><div class="container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Trang chủ</a><span>/</span><span aria-current="page">Dịch vụ</span></nav>
      <h1>Tất cả dịch vụ</h1><p>Đánh máy lại, chuyển đổi định dạng, biên tập và chuyển âm - mọi công việc với tài liệu, do con người thực hiện.</p></div></section>
    <section class="section"><div class="container"><h2 class="section-title">Đánh máy &amp; chuyển đổi</h2><div class="grid-3">${retyping.map(svcCard).join("")}</div></div></section>
    <section class="section section--grey"><div class="container"><h2 class="section-title">Chuyển âm</h2><div class="grid-3">${trans.map(svcCard).join("")}
      <a class="svc-card" href="/dich-vu-chuyen-am"><span class="svc-badge" style="background:#3bb54a" aria-hidden="true">▶</span><h3>Chuyển âm video &amp; âm thanh</h3><p>Phỏng vấn, hội thảo, bài giảng, podcast, video YouTube… chuyển thành văn bản chính xác, có mốc thời gian.</p><span class="from">Từ ${fmt(DM.prices.transcription.base["10d"])}/phút</span></a>
    </div></div></section>
  </main>`;
  return shell({
    title: "Dịch vụ đánh máy & chuyển đổi tài liệu - Đánh máy 247",
    description: "Tất cả dịch vụ: PDF sang Word, viết tay sang Word, ảnh sang Word, Word sang Excel, đánh máy LaTeX, công thức, văn bản pháp lý, định dạng, biên tập, chuyển âm.",
    url: SITE() + "/dich-vu", image: ogImage("default"),
    jsonld: [breadcrumb([["Trang chủ", "/"], ["Dịch vụ", "/dich-vu"]]), {
      "@context": "https://schema.org", "@type": "ItemList", name: "Dịch vụ Đánh máy 247",
      itemListElement: keys.map((k, i) => ({ "@type": "ListItem", position: i + 1, url: SITE() + "/dich-vu/" + k, name: DM.services[k].title }))
    }],
    body
  });
}

function renderService(slug) {
  const s = DM.services[slug];
  if (!s) return null;
  const pf = priceFrom(s);
  const url = SITE() + "/dich-vu/" + slug;
  const sample = DM.samples[s.type === "hand-excel" || s.type === "word-excel" ? 2 : s.type === "hand-word" ? 0 : 1];
  const related = Object.keys(DM.services).filter((k) => k !== slug && DM.services[k].service === s.service).slice(0, 3);
  const faq = DM.faq.filter((f) => ["Dịch vụ", "Đặt hàng"].includes(f.cat)).slice(0, 5);
  const relatedPosts = posts().filter((p) => p.body.includes("/dich-vu/" + slug)).slice(0, 3);

  const body = `<main id="main">
    <section class="page-hero"><div class="container">
      <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Trang chủ</a><span>/</span><a href="/dich-vu">Dịch vụ</a><span>/</span><span aria-current="page">${esc(s.title)}</span></nav>
      ${badge(s)}<h1>${esc(s.title)}</h1><p>${esc(s.intro)}</p>
      <div class="price-from"><span>Chỉ từ</span><b>${fmt(pf.value)}</b><span>/ ${pf.unit}</span></div><br>
      <a class="button" href="${esc(orderUrl(s))}">Đặt hàng ngay</a></div></section>
    <section class="section"><div class="container"><h2 class="section-title">Bạn nhận được gì?</h2><ul class="points">
      ${s.points.map((x) => `<li><i>${CHECK}</i><span>${esc(x)}</span></li>`).join("")}
      <li><i>${CHECK}</i><span>Chỉnh sửa miễn phí trong 14 ngày sau khi bàn giao</span></li>
      <li><i>${CHECK}</i><span>Giao nhanh từ 6 giờ, cam kết đúng hạn hoặc hoàn tiền</span></li></ul></div></section>
    ${s.service === "retyping" ? `<section class="section section--navy"><div class="container grid-2"><div><h2 class="section-title section-title--left section-title--light">Trước &amp; sau</h2><p class="lead" style="color:var(--navy-light)">Kéo thanh trượt để xem tài liệu gốc được chúng tôi chuyển thành văn bản sạch đẹp, giữ đúng bố cục như thế nào.</p><a class="button" href="/mau">Xem thêm bài mẫu</a></div>
      <div style="max-width:420px;width:100%;justify-self:center">${compare(sample)}</div></div></section>` : ""}
    <section class="howit-section"><div class="container"><div class="howit-section__text"><h2 class="section-title howit-section__title">Quy trình 3 bước</h2><ul class="howit-list">
      <li><div class="title">Đặt hàng &amp; tải tệp</div><p>Chọn dịch vụ, thời hạn, số lượng và tải tệp lên. Giá được tính ngay lập tức.</p></li>
      <li><div class="title">Thanh toán an toàn</div><p>Quét mã VietQR bằng app ngân hàng, MoMo hoặc ZaloPay. Đơn hàng bắt đầu ngay khi nhận được thanh toán.</p></li>
      <li><div class="title">Nhận tài liệu</div><p>Nhận email thông báo và tải tài liệu từ trang đơn hàng. Yêu cầu chỉnh sửa miễn phí nếu cần.</p></li></ul>
      <a class="button" href="${esc(orderUrl(s))}">Bắt đầu ngay</a></div>
      <div class="faq-section__items" data-accordion style="flex:1">${faq.map((f, i) => faqItem(f, i === 0)).join("")}</div></div></section>
    ${relatedPosts.length ? `<section class="section"><div class="container"><h2 class="section-title">Bài viết hữu ích</h2><div class="blog-grid">${relatedPosts.map(postCard).join("")}</div></div></section>` : ""}
    <section class="section section--grey"><div class="container"><h2 class="section-title">Dịch vụ liên quan</h2><div class="grid-3">${related.map(svcCard).join("")}</div></div></section>
  </main>`;

  return shell({
    title: s.title + " - Đánh máy 247 | Chỉ từ " + fmt(pf.value).replace(" đ", "đ") + "/" + pf.unit,
    description: s.intro,
    url, image: ogImage("default"),
    fonts: s.service === "retyping" ? "Dancing+Script:wght@500;700&family=" : "",
    jsonld: [
      {
        "@context": "https://schema.org", "@type": "Service", "@id": url + "#dich-vu",
        name: s.title, description: s.intro, serviceType: s.title, url, areaServed: { "@type": "Country", name: "Việt Nam" },
        provider: { "@id": ORG_ID(), "@type": "Organization", name: "Đánh máy 247" },
        offers: { "@type": "Offer", priceCurrency: "VND", price: pf.value, url: SITE() + orderUrl(s),
          priceSpecification: { "@type": "UnitPriceSpecification", price: pf.value, priceCurrency: "VND", unitText: pf.unit } }
      },
      breadcrumb([["Trang chủ", "/"], ["Dịch vụ", "/dich-vu"], [s.title, "/dich-vu/" + slug]])
    ],
    body
  });
}

/* =========================================================
   CHÈN SEO VÀO CÁC TRANG HTML TĨNH
   ========================================================= */
const PAGE_NAMES = {
  "/bang-gia": "Bảng giá", "/gioi-thieu": "Giới thiệu", "/danh-gia": "Đánh giá", "/mau": "Bài mẫu", "/blog": "Blog",
  "/hoi-dap": "Hỏi đáp", "/lien-he": "Liên hệ", "/dich-vu-chuyen-am": "Chuyển âm", "/dat-hang": "Đặt hàng", "/doi-tac": "Đối tác", "/dang-ky-doi-tac": "Đăng ký đối tác"
};

function transformHtml(urlPath, html) {
  if (/<meta name="robots" content="noindex/.test(html)) return html; // trang riêng tư (đặt hàng, tài khoản, quản trị…): không cần SEO
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "Đánh máy 247";
  const description = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const url = SITE() + (urlPath === "/" ? "/" : urlPath);
  const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

  // Bỏ thẻ og/canonical cũ viết tay để tránh trùng, rồi chèn bộ thẻ chuẩn
  html = html.replace(/\s*<meta property="og:[^>]*>/g, "").replace(/\s*<link rel="canonical"[^>]*>/g, "");
  const jsonld = [];
  if (urlPath === "/") {
    jsonld.push(organization(), { "@context": "https://schema.org", "@type": "WebSite", "@id": SITE() + "/#website", name: "Đánh máy 247", url: SITE() + "/", inLanguage: "vi-VN", publisher: { "@id": ORG_ID() } });
  } else if (PAGE_NAMES[urlPath]) {
    jsonld.push(breadcrumb([["Trang chủ", "/"], [PAGE_NAMES[urlPath], urlPath]]));
  }
  if (urlPath === "/hoi-dap") {
    jsonld.push({ "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: DM.faq.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })) });
  }
  if (urlPath === "/doi-tac" && DM.affiliateFaq) {
    jsonld.push({ "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: DM.affiliateFaq.map((f) => ({ "@type": "Question", name: strip(f.q), acceptedAnswer: { "@type": "Answer", text: strip(f.a) } })) });
  }
  if (urlPath === "/dich-vu-chuyen-am") {
    jsonld.push({ "@context": "https://schema.org", "@type": "Service", name: "Chuyển âm thanh, video thành văn bản", serviceType: "Chuyển âm (transcription)",
      provider: { "@id": ORG_ID(), "@type": "Organization", name: "Đánh máy 247" }, areaServed: { "@type": "Country", name: "Việt Nam" },
      offers: { "@type": "Offer", priceCurrency: "VND", price: DM.prices.transcription.base["10d"], priceSpecification: { "@type": "UnitPriceSpecification", price: DM.prices.transcription.base["10d"], priceCurrency: "VND", unitText: "phút" } } });
  }
  if (urlPath === "/blog") html = blogListHtml(html);

  const tags = metaTags({ title: decode(title), description: decode(description), url, image: ogImage(urlPath === "/doi-tac" ? "doi-tac" : "default") }) +
    '\n  <link rel="apple-touch-icon" href="/assets/img/logo-512.png">\n  ' + jsonld.map(ldScript).join("\n  ");
  return html.replace("</head>", "  " + tags + "\n</head>");
}

/* =========================================================
   ĐĂNG KÝ ĐƯỜNG DẪN
   ========================================================= */
function register(app, send404) {
  const sendHtml = (req, res, html) => res.set({ "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" }).send(html);

  // Đường dẫn cũ → đường dẫn mới (301, giữ thứ hạng)
  app.get(["/bai-viet", "/bai-viet.html"], (req, res) => res.redirect(301, req.query.slug ? "/blog/" + encodeURIComponent(req.query.slug) : "/blog"));
  app.get("/blog/:slug", (req, res) => { const h = renderPost(req.params.slug); h ? sendHtml(req, res, h) : send404(req, res); });
  app.get(["/dich-vu", "/dich-vu.html"], (req, res) => {
    if (req.query.slug) return res.redirect(301, "/dich-vu/" + encodeURIComponent(req.query.slug));
    if (req.path.endsWith(".html")) return res.redirect(301, "/dich-vu");
    sendHtml(req, res, renderServiceList());
  });
  app.get("/dich-vu/:slug", (req, res) => { const h = renderService(req.params.slug); h ? sendHtml(req, res, h) : send404(req, res); });
}

module.exports = { register, transformHtml, posts, renderPost, renderService };
