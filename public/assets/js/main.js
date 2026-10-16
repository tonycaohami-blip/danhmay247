/* =========================================================
   Đánh máy 247 - Script dùng chung cho mọi trang
   ========================================================= */
(function () {
  "use strict";
  var DM = window.DM;

  /* ---------- Tiện ích ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  DM.$ = $; DM.$$ = $$;

  DM.fmt = function (n) { return (Math.round(n) || 0).toLocaleString("vi-VN") + " đ"; };
  DM.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  DM.initials = function (name) {
    var parts = String(name || "?").trim().split(/\s+/);
    var a = parts.length > 1 ? parts[parts.length - 2][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2);
    return a.toUpperCase();
  };
  DM.param = function (k) { return new URLSearchParams(location.search).get(k); };
  DM.store = {
    get: function (k, d) { try { var v = localStorage.getItem("dm247_" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("dm247_" + k, JSON.stringify(v)); } catch (e) { /* bộ nhớ bị chặn */ } }
  };
  DM.isEmail = function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(v).trim()); };

  var DAYS = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
  DM.dateLabel = function (d) {
    d = new Date(d);
    return DAYS[d.getDay()] + ", " + String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0");
  };
  DM.dateTime = function (d) {
    d = new Date(d);
    return String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0") + "/" + d.getFullYear() +
      " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  };
  DM.deadline = function (hours, from) { return new Date((from ? new Date(from) : new Date()).getTime() + hours * 3600e3); };
  DM.urgency = function (key) { return DM.urgencies.find(function (u) { return u.key === key; }); };

  /* ---------- Toast ---------- */
  DM.toast = function (msg, type) {
    var wrap = $(".toast-wrap");
    if (!wrap) { wrap = document.createElement("div"); wrap.className = "toast-wrap"; wrap.setAttribute("aria-live", "polite"); document.body.appendChild(wrap); }
    var t = document.createElement("div");
    t.className = "toast" + (type === "error" ? " is-error" : "");
    t.textContent = msg;
    wrap.appendChild(t);
    requestAnimationFrame(function () { t.classList.add("is-visible"); });
    setTimeout(function () { t.classList.remove("is-visible"); setTimeout(function () { t.remove(); }, 300); }, 3800);
  };

  /* ---------- Gọi API máy chủ ---------- */
  DM.api = function (url, opts) {
    opts = opts || {};
    var headers = Object.assign({}, opts.headers || {});
    var body = opts.body;
    if (body && !(body instanceof FormData)) { headers["Content-Type"] = "application/json"; body = JSON.stringify(body); }
    return fetch("/api" + url, { method: opts.method || (body ? "POST" : "GET"), headers: headers, body: body, credentials: "same-origin" })
      .then(function (r) {
        return r.json().catch(function () { return {}; }).then(function (data) {
          if (!r.ok) { var e = new Error(data.error || "Có lỗi xảy ra (mã " + r.status + "). Vui lòng thử lại."); e.status = r.status; throw e; }
          return data;
        });
      }, function () { throw new Error("Không kết nối được máy chủ. Vui lòng kiểm tra mạng và thử lại."); });
  };

  /* ---------- Tài khoản (đăng nhập bằng liên kết gửi qua email) ---------- */
  DM.me = null;
  DM.auth = {
    current: function () { return DM.me; },
    load: function () {
      return DM.api("/me").then(function (d) { DM.me = d.user; DM.emailReady = d.emailReady; return d.user; }, function () { DM.me = null; return null; });
    },
    requestLink: function (email) { return DM.api("/auth/request-link", { body: { email: email } }); },
    logout: function () { return DM.api("/auth/logout", { method: "POST" }).then(function () { DM.me = null; }); }
  };
  DM.authReady = DM.auth.load();

  /* ---------- Đơn hàng ---------- */
  // Mã truy cập các đơn đặt trên thiết bị này (để xem đơn mà không cần đăng nhập)
  DM.orderTokens = {
    all: function () { return DM.store.get("tokens", {}); },
    get: function (id) { return DM.orderTokens.all()[id]; },
    set: function (id, t) { var a = DM.orderTokens.all(); a[id] = t; DM.store.set("tokens", a); }
  };
  function tokenHeaders(id) { var t = DM.orderTokens.get(id); return t ? { "X-Order-Token": t } : {}; }
  DM.orders = {
    mine: function () { return DM.api("/orders").then(function (d) { return d.orders; }); },
    get: function (id) { return DM.api("/orders/" + encodeURIComponent(id), { headers: tokenHeaders(id) }).then(function (d) { return d.order; }); },
    action: function (id, act, body) {
      return DM.api("/orders/" + encodeURIComponent(id) + "/" + act, { method: "POST", body: body, headers: tokenHeaders(id) }).then(function (d) { return d.order; });
    },
    fileUrl: function (o, f) {
      var t = DM.orderTokens.get(o.id);
      return "/api/orders/" + encodeURIComponent(o.id) + "/files/" + encodeURIComponent(f.id) + (t ? "?t=" + encodeURIComponent(t) : "");
    },
    status: {
      unpaid: { label: "Chờ thanh toán", chip: "chip--amber" },
      verifying: { label: "Đang xác nhận thanh toán", chip: "chip--amber" },
      paid: { label: "Đã thanh toán", chip: "chip--navy" },
      progress: { label: "Đang thực hiện", chip: "chip--navy" },
      review: { label: "Đang kiểm tra", chip: "chip--grey" },
      done: { label: "Hoàn thành", chip: "chip--green" },
      cancelled: { label: "Đã hủy", chip: "chip--red" }
    }
  };

  /* ---------- Icon SVG ---------- */
  DM.icon = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    eye: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    eyeOff: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
    send: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
    upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
    pause: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="5" y="4" width="5" height="16"/><rect x="14" y="4" width="5" height="16"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>',
    edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>'
  };

  DM.stars = function (n) {
    var h = '<span class="stars" role="img" aria-label="' + n + ' trên 5 sao">';
    for (var i = 1; i <= 5; i++) h += '<i class="' + (i <= n ? "" : "off") + '"></i>';
    return h + "</span>";
  };
  DM.reviewCard = function (r) {
    return '<article class="review-card">' +
      '<div class="review-card__header"><div class="review-card__icon" aria-hidden="true">' + DM.esc(DM.initials(r.name)) + '</div>' +
      '<div><div class="review-card__name">' + DM.esc(r.name) + '</div><div class="review-card__job">' + DM.esc(r.job) + '</div></div></div>' +
      '<div class="review-card__content">“' + DM.esc(r.text) + '”</div>' +
      '<div class="review-card__bottom"><div><div class="review-card__type">' + DM.esc(r.type) + '</div>' +
      (r.date ? '<div class="review-card__date">' + DM.esc(r.date.split("-").reverse().join("/")) + "</div>" : "") +
      "</div>" + DM.stars(r.rating) + "</div></article>";
  };
  // Đánh giá đã được duyệt trên máy chủ + đánh giá mẫu trong data.js
  DM.loadReviews = function () {
    return DM.api("/reviews").then(function (d) { return d.reviews.concat(DM.reviews); }, function () { return DM.reviews.slice(); });
  };

  /* =========================================================
     HEADER
     ========================================================= */
  var NAV = [
    { label: "Dịch vụ", href: "/dich-vu", sub: [
      { label: "Đánh máy lại", href: "/#services-section" },
      { label: "Chuyển âm thành văn bản", href: "/dich-vu-chuyen-am" },
      { label: "Tất cả dịch vụ", href: "/dich-vu" }
    ] },
    { label: "Bảng giá", href: "/bang-gia" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Đánh giá", href: "/danh-gia" },
    { label: "Bài mẫu", href: "/mau" },
    { label: "Blog", href: "/blog" },
    { label: "Liên hệ", href: "/lien-he" }
  ];
  DM.logo = function (light) {
    return '<a href="/" class="logo' + (light ? " logo--light" : "") + '" aria-label="Đánh máy 247 - Trang chủ">' +
      '<span class="logo__red">ĐÁNH MÁY</span><span class="logo__black">247</span><span class="logo__caret" aria-hidden="true"></span></a>';
  };

  function currentPage() {
    // Đường dẫn sạch: "/bang-gia", "/" … (bỏ "/" cuối và đuôi .html nếu có)
    var p = location.pathname.replace(/\.html$/, "").replace(/\/+$/, "");
    return p === "" || p === "/index" ? "/" : p;
  }

  function renderHeader() {
    var mount = $("#site-header");
    if (!mount) return;
    var page = currentPage();
    var navHtml = NAV.map(function (n) {
      var active = n.href === page || (n.sub && n.sub.some(function (s) { return s.href.split("#")[0] === page && page !== "/"; })) || (n.href !== "/" && page.indexOf(n.href + "/") === 0); // /blog/…, /dich-vu/… vẫn sáng mục cha
      if (n.sub) {
        return '<li class="nav__item"><button class="nav__link' + (active ? " is-active" : "") + '" aria-expanded="false" aria-haspopup="true" data-sub-toggle>' + n.label + '<span class="nav__arrow" aria-hidden="true"></span></button>' +
          '<ul class="nav__sub">' + n.sub.map(function (s) { return '<li><a href="' + s.href + '">' + s.label + "</a></li>"; }).join("") + "</ul></li>";
      }
      return '<li class="nav__item"><a class="nav__link' + (active ? " is-active" : "") + '" href="' + n.href + '"' + (active ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");

    mount.outerHTML =
      '<header class="header' + (document.body.dataset.header === "grey" ? " page" : "") + '" id="header">' +
      '<div class="container">' + DM.logo() +
      '<nav class="nav" id="nav" aria-label="Điều hướng chính"><ul class="nav__list">' + navHtml + "</ul>" +
      '<div class="header__buttons"><div class="login" id="login"></div>' +
      '<a href="/dat-hang" class="button button--sm">Đặt hàng ngay</a></div></nav>' +
      '<button class="hamburger" id="hamburger" aria-label="Mở menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>' +
      "</div></header>";

    var header = $("#header");
    var onScroll = function () { header.classList.toggle("is-scrolled", window.scrollY > 10); };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

    var burger = $("#hamburger");
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
      burger.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
    });
    $$("#nav a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); });
    });
    $$("[data-sub-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var li = btn.parentElement;
        var open = li.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open);
      });
    });
    document.addEventListener("click", function (e) {
      $$(".nav__item.is-open").forEach(function (li) {
        if (!li.contains(e.target) && window.innerWidth > 1099) { li.classList.remove("is-open"); $("[data-sub-toggle]", li).setAttribute("aria-expanded", "false"); }
      });
    });
    renderLogin();
    DM.authReady.then(renderLogin);
  }

  /* ---------- Widget đăng nhập (liên kết qua email, không cần mật khẩu) ---------- */
  function renderLogin() {
    var box = $("#login");
    if (!box) return;
    var u = DM.auth.current(), p = DM.portalUser;
    var wasOpen = box.classList.contains("is-open");
    if (p) {
      // Trang quản trị / nhân viên: hiện người đang đăng nhập khu vực đó
      box.innerHTML =
        '<button class="login__toggle" aria-expanded="false" aria-controls="login-panel"><span class="login__avatar" style="background:' + (p.color || "var(--navy)") + '" aria-hidden="true">' + DM.esc(p.initials || DM.initials(p.name)) + "</span><span class=\"login__name\">" + DM.esc(p.name) + "</span></button>" +
        '<div class="login__panel login__menu" id="login-panel"><div class="login__email">' + DM.esc(p.sub || "") + "</div>" +
        (p.links || []).map(function (l) { return '<a href="' + l[0] + '">' + DM.esc(l[1]) + "</a>"; }).join("") +
        '<button type="button" data-portal-logout>Đăng xuất</button></div>';
    } else if (u) {
      box.innerHTML =
        '<button class="login__toggle" aria-expanded="false" aria-controls="login-panel"><span class="login__avatar" aria-hidden="true">' + DM.esc(DM.initials(u.name)) + "</span>" + DM.esc(u.name.split(" ").slice(-1)[0]) + "</button>" +
        '<div class="login__panel login__menu" id="login-panel"><div class="login__email">' + DM.esc(u.email) + "</div>" +
        '<a href="/tai-khoan">Đơn hàng của tôi</a><a href="/tai-khoan#profile">Hồ sơ cá nhân</a><a href="/dat-hang">Đặt hàng mới</a>' +
        '<button type="button" data-logout>Đăng xuất</button></div>';
    } else {
      box.innerHTML =
        '<button class="login__toggle" aria-expanded="false" aria-controls="login-panel">Đăng nhập</button>' +
        '<div class="login__panel" id="login-panel" role="dialog" aria-label="Đăng nhập tài khoản"><button type="button" class="login__close" aria-label="Đóng">×</button>' +
        '<div class="login__title">Đăng nhập tài khoản</div>' +
        '<p style="font-size:14px;color:var(--muted);margin:-8px 0 16px">Nhập email đã dùng khi đặt hàng, chúng tôi sẽ gửi liên kết đăng nhập cho bạn.</p>' +
        '<form novalidate data-login-form><div class="login__msg" aria-live="polite"></div>' +
        '<div class="field"><label class="sr-only" for="lg-email">Email</label><input class="input" id="lg-email" name="email" type="email" placeholder="Nhập email của bạn" autocomplete="email" required><div class="field__error"></div></div>' +
        '<button class="button button--w100" type="submit" style="height:48px;font-size:16px">Gửi liên kết đăng nhập</button></form></div>';
    }
    if (wasOpen) box.classList.add("is-open");
    bindLogin(box);
  }
  DM.loginSubmit = function (form, msg) {
    if (!validate(form)) return;
    var email = $("input[type=email]", form).value.trim();
    var btn = $("button[type=submit]", form);
    btn.disabled = true;
    DM.auth.requestLink(email).then(function () {
      msg.innerHTML = '<div class="alert alert--success">Đã gửi liên kết đăng nhập tới <b>' + DM.esc(email) + "</b>. Vui lòng mở email (kiểm tra cả mục Spam/Quảng cáo) và bấm “Đăng nhập”. Liên kết có hiệu lực 30 phút.</div>";
    }, function (err) {
      msg.innerHTML = '<div class="alert alert--error">' + DM.esc(err.message) + "</div>";
    }).then(function () { btn.disabled = false; });
  };
  function bindLogin(box) {
    var toggle = $(".login__toggle", box);
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = box.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      if (open) { var f = $("input", box); if (f) setTimeout(function () { f.focus(); }, 50); }
    });
    var close = $(".login__close", box);
    if (close) close.addEventListener("click", function () { box.classList.remove("is-open"); toggle.focus(); });
    var plo = $("[data-portal-logout]", box);
    if (plo) plo.addEventListener("click", function () { box.classList.remove("is-open"); if (DM.portalUser && DM.portalUser.logout) DM.portalUser.logout(); });
    var lo = $("[data-logout]", box);
    if (lo) lo.addEventListener("click", function () {
      DM.auth.logout().then(function () {
        box.classList.remove("is-open"); renderLogin(); DM.toast("Bạn đã đăng xuất.");
        document.dispatchEvent(new CustomEvent("dm:auth"));
      }, function (err) { DM.toast(err.message, "error"); });
    });
    var form = $("form", box);
    if (form) form.addEventListener("submit", function (e) { e.preventDefault(); DM.loginSubmit(form, $(".login__msg", form)); });
  }
  DM.renderLogin = renderLogin;
  /** Đặt / xóa người dùng khu vực quản trị hoặc nhân viên hiển thị trên thanh đầu trang. */
  DM.setPortalUser = function (p) { DM.portalUser = p || null; renderLogin(); };
  document.addEventListener("click", function (e) {
    var box = $("#login");
    if (box && box.classList.contains("is-open") && !box.contains(e.target) && window.innerWidth > 1099) {
      box.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var box = $("#login"); if (box) box.classList.remove("is-open");
    $$(".modal.is-open").forEach(function (m) { DM.modal.close(m); });
    var chat = $(".chat-box.is-open"); if (chat) toggleChat(false);
    if (document.body.classList.contains("menu-open")) $("#hamburger").click();
  });

  // Giữ tooltip trong khung màn hình
  ["mouseover", "focusin"].forEach(function (ev) {
    document.addEventListener(ev, function (e) {
      var t = e.target.closest && e.target.closest(".tip");
      if (!t) return;
      var tx = $(".tip__text", t);
      tx.style.marginLeft = "";
      requestAnimationFrame(function () {
        var r = tx.getBoundingClientRect(), W = document.documentElement.clientWidth, shift = 0;
        if (r.right > W - 8) shift = W - 8 - r.right;
        if (r.left + shift < 8) shift = 8 - r.left;
        if (shift) tx.style.marginLeft = shift + "px";
      });
    });
  });

  function bindEye(btn) {
    btn.addEventListener("click", function () {
      var input = btn.parentElement.querySelector("input");
      var show = input.type === "password";
      input.type = show ? "text" : "password";
      btn.innerHTML = show ? DM.icon.eyeOff : DM.icon.eye;
      btn.setAttribute("aria-label", show ? "Ẩn mật khẩu" : "Hiện mật khẩu");
    });
  }
  DM.bindEye = bindEye;

  /* ---------- Kiểm tra form ---------- */
  function validate(form) {
    var ok = true, first = null;
    $$("input, select, textarea", form).forEach(function (el) {
      var f = el.closest(".field");
      if (!f || el.disabled) return;
      var err = "";
      var v = el.type === "checkbox" ? el.checked : String(el.value).trim();
      if (el.required && !v) err = el.dataset.msg || (el.type === "checkbox" ? "Vui lòng xác nhận mục này." : "Vui lòng điền thông tin này.");
      else if (el.type === "email" && v && !DM.isEmail(v)) err = "Email không hợp lệ.";
      else if (el.minLength > 0 && v && v.length < el.minLength) err = "Tối thiểu " + el.minLength + " ký tự.";
      else if (el.dataset.pattern && v && !new RegExp(el.dataset.pattern).test(v)) err = el.dataset.patternMsg || "Giá trị không hợp lệ.";
      f.classList.toggle("has-error", !!err);
      var box = $(".field__error", f);
      if (box) box.textContent = err;
      el.setAttribute("aria-invalid", err ? "true" : "false");
      if (err) { ok = false; if (!first) first = el; }
    });
    if (first) first.focus();
    return ok;
  }
  DM.validate = validate;
  document.addEventListener("input", function (e) {
    var f = e.target.closest && e.target.closest(".field.has-error");
    if (f) { f.classList.remove("has-error"); e.target.setAttribute("aria-invalid", "false"); }
  });

  /* =========================================================
     FOOTER
     ========================================================= */
  function renderFooter() {
    var mount = $("#site-footer");
    if (!mount) return;
    var s = DM.site;
    mount.outerHTML =
      '<footer class="footer"><div class="container"><div class="footer__main">' +
      '<div class="footer__left">' + DM.logo() +
      "<p class=\"tagline\">" + s.tagline + "</p>" +
      "<p>Đánh máy 247 là dịch vụ chuyên đánh máy lại tài liệu, chuyển âm thành văn bản và định dạng tài liệu tại Việt Nam, cam kết chất lượng vượt trội và dịch vụ khách hàng tận tâm, đúng hạn.</p></div>" +
      '<div class="footer__menu"><div class="footer__title">Công ty</div><ul>' +
      '<li><a href="/gioi-thieu">Giới thiệu</a></li><li><a href="/bang-gia">Bảng giá</a></li><li><a href="/danh-gia">Đánh giá</a></li>' +
      '<li><a href="/hoi-dap">Hỏi đáp</a></li><li><a href="/blog">Blog</a></li><li><a href="/lien-he">Liên hệ</a></li>' +
      '<li><a href="#" data-legal="cookie">Chính sách cookie</a></li><li><a href="/nhan-vien" rel="nofollow">Đăng nhập nhân viên</a></li></ul></div>' +
      '<div class="footer__menu"><div class="footer__title">Dịch vụ</div><ul>' +
      '<li><a href="/#services-section">Đánh máy lại</a></li><li><a href="/dich-vu-chuyen-am">Chuyển âm</a></li>' +
      '<li><a href="/dich-vu/pdf-sang-word">PDF sang Word</a></li><li><a href="/dich-vu/viet-tay-sang-word">Viết tay sang Word</a></li>' +
      '<li><a href="/dich-vu/dinh-dang-tai-lieu">Định dạng tài liệu</a></li><li><a href="/dich-vu">Tất cả dịch vụ</a></li></ul></div>' +
      '<div class="footer__contact"><div class="footer__title">Liên hệ</div>' +
      '<a href="mailto:' + s.email + '">' + DM.icon.mail + s.email + "</a>" +
      '<a href="tel:' + s.phoneHref + '">' + DM.icon.phone + s.phone + "</a>" +
      '<a href="https://zalo.me/' + s.zalo + '" target="_blank" rel="noopener">' + DM.icon.chat + "Zalo: " + s.phone + "</a>" +
      '<div class="footer__pay" aria-label="Phương thức thanh toán"><span>VietQR</span><span>HDBank</span><span>Mọi ngân hàng</span><span>MoMo</span><span>ZaloPay</span></div></div>' +
      "</div>" +
      '<div class="footer__bottom"><div>© ' + new Date().getFullYear() + ' <a href="/">Đánh máy 247</a> - Sản phẩm của ' + s.owner + '. Bảo lưu mọi quyền.</div>' +
      '<div class="footer__terms"><button type="button" data-legal="terms">Điều khoản &amp; Điều kiện</button><span>và</span><button type="button" data-legal="privacy">Chính sách bảo mật</button></div></div>' +
      "</div></footer>";
  }

  /* =========================================================
     MODAL
     ========================================================= */
  DM.modal = {
    open: function (html, opts) {
      opts = opts || {};
      var m = document.createElement("div");
      m.className = "modal";
      m.setAttribute("role", "dialog");
      m.setAttribute("aria-modal", "true");
      m.innerHTML = '<div class="modal__dialog' + (opts.small ? " modal__dialog--sm" : "") + '"><button type="button" class="modal__close" aria-label="Đóng">×</button>' + html + "</div>";
      document.body.appendChild(m);
      m._prev = document.activeElement;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(function () { m.classList.add("is-open"); var f = $(".modal__close", m); f.focus(); });
      $(".modal__close", m).addEventListener("click", function () { DM.modal.close(m); });
      m.addEventListener("click", function (e) { if (e.target === m && !opts.locked) DM.modal.close(m); });
      m.addEventListener("keydown", function (e) { // giữ focus trong modal
        if (e.key !== "Tab") return;
        var f = $$('a[href], button:not([disabled]), input:not([disabled]), select, textarea', m).filter(function (el) { return el.offsetParent !== null; });
        if (!f.length) return;
        if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      });
      return m;
    },
    close: function (m) {
      if (!m) return;
      m.classList.remove("is-open");
      document.body.style.overflow = "";
      if (m._prev && m._prev.focus) m._prev.focus();
      if (m._onclose) m._onclose();
      setTimeout(function () { m.remove(); }, 250);
    }
  };

  var LEGAL = {
    terms: { title: "Điều khoản & Điều kiện", body:
      "<p><b>" + DM.site.tagline + ".</b></p><p>Cập nhật lần cuối: 01/10/2026. Khi sử dụng website và dịch vụ của Đánh máy 247 (do " + DM.site.owner + " cung cấp), bạn đồng ý với các điều khoản dưới đây.</p>" +
      "<h4>1. Phạm vi dịch vụ</h4><p>Đánh máy 247 cung cấp dịch vụ đánh máy lại, chuyển âm, định dạng và biên tập tài liệu theo yêu cầu khách hàng thông qua biểu mẫu đặt hàng trực tuyến.</p>" +
      "<h4>2. Đặt hàng và thanh toán</h4><ul><li>Đơn hàng chỉ được bắt đầu xử lý sau khi thanh toán thành công.</li><li>Giá hiển thị đã bao gồm thuế VAT (nếu có) và không phát sinh phí ẩn.</li><li>Thời hạn được tính từ thời điểm xác nhận thanh toán.</li></ul>" +
      "<h4>3. Chỉnh sửa miễn phí</h4><p>Bạn được yêu cầu chỉnh sửa miễn phí trong vòng 14 ngày sau khi nhận tài liệu, với điều kiện yêu cầu nằm trong phạm vi hướng dẫn ban đầu.</p>" +
      "<h4>4. Hoàn tiền</h4><p>Trường hợp trễ hạn hoặc chất lượng không đạt cam kết và không thể khắc phục, bạn được hoàn tiền một phần hoặc toàn bộ. Yêu cầu hoàn tiền được xử lý trong 3–5 ngày làm việc.</p>" +
      "<h4>5. Quyền sở hữu</h4><p>Bạn giữ toàn bộ quyền sở hữu đối với tài liệu gốc và sản phẩm bàn giao. Chúng tôi không sử dụng nội dung của bạn cho bất kỳ mục đích nào khác.</p>" +
      "<h4>6. Trách nhiệm của khách hàng</h4><p>Khách hàng cam kết có quyền hợp pháp đối với tài liệu gửi tới và không yêu cầu xử lý nội dung vi phạm pháp luật Việt Nam.</p>" },
    privacy: { title: "Chính sách bảo mật", body:
      "<p>Đánh máy 247 (sản phẩm của " + DM.site.owner + ") tôn trọng và bảo vệ dữ liệu cá nhân của bạn theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.</p>" +
      "<h4>Dữ liệu chúng tôi thu thập</h4><ul><li>Thông tin liên hệ: họ tên, email, số điện thoại.</li><li>Tệp tài liệu và hướng dẫn bạn gửi để thực hiện đơn hàng.</li><li>Dữ liệu kỹ thuật cơ bản (cookie cần thiết) để website hoạt động.</li></ul>" +
      "<h4>Mục đích sử dụng</h4><p>Chỉ để thực hiện đơn hàng, liên lạc với bạn và cải thiện chất lượng dịch vụ. Chúng tôi không bán hay chia sẻ dữ liệu cho bên thứ ba vì mục đích quảng cáo.</p>" +
      "<h4>Lưu trữ và xóa dữ liệu</h4><p>Tệp tài liệu được xóa vĩnh viễn sau 30 ngày kể từ khi đơn hàng hoàn thành, hoặc sớm hơn theo yêu cầu của bạn.</p>" +
      "<h4>Bảo mật</h4><p>Mọi nhân sự làm việc theo thỏa thuận bảo mật (NDA). Dữ liệu được truyền qua kết nối mã hóa HTTPS.</p>" +
      "<h4>Quyền của bạn</h4><p>Bạn có quyền truy cập, chỉnh sửa, xóa dữ liệu cá nhân hoặc rút lại sự đồng ý bất cứ lúc nào bằng cách liên hệ " + DM.site.email + ".</p>" },
    cookie: { title: "Chính sách cookie", body:
      "<p>Website sử dụng cookie và bộ nhớ trình duyệt để mang lại trải nghiệm tốt nhất cho bạn.</p>" +
      "<h4>Cookie cần thiết</h4><p>Ghi nhớ trạng thái đăng nhập, nội dung biểu mẫu đặt hàng và lựa chọn đồng ý cookie của bạn. Website không thể hoạt động đúng nếu thiếu các cookie này.</p>" +
      "<h4>Cookie phân tích</h4><p>Giúp chúng tôi hiểu cách khách truy cập sử dụng website (số lượt xem trang, thời gian truy cập) dưới dạng ẩn danh.</p>" +
      "<h4>Quản lý cookie</h4><p>Bạn có thể xóa hoặc chặn cookie trong phần cài đặt trình duyệt. Lưu ý rằng một số chức năng có thể không hoạt động khi cookie bị chặn.</p>" }
  };
  DM.openLegal = function (key) {
    var l = LEGAL[key];
    if (l) DM.modal.open('<h2 class="modal__title">' + l.title + '</h2><div class="modal__body">' + l.body + "</div>");
  };
  document.addEventListener("click", function (e) {
    var t = e.target.closest && e.target.closest("[data-legal]");
    if (t) { e.preventDefault(); DM.openLegal(t.dataset.legal); }
  });

  /* =========================================================
     COOKIE BAR
     ========================================================= */
  function initCookie() {
    if (DM.store.get("cookie", false)) return;
    var bar = document.createElement("div");
    bar.className = "cookie";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Thông báo cookie");
    bar.innerHTML = '<span>Chúng tôi sử dụng cookie để mang lại trải nghiệm tốt nhất trên website. Tiếp tục truy cập nghĩa là bạn đồng ý với <button type="button" class="link" data-legal="cookie">chính sách cookie</button> của chúng tôi.</span>' +
      '<button type="button" class="button">Đồng ý</button>';
    document.body.appendChild(bar);
    setTimeout(function () { bar.classList.add("is-visible"); document.body.classList.add("cookie-on"); }, 600);
    $(".button", bar).addEventListener("click", function () {
      DM.store.set("cookie", true);
      bar.classList.remove("is-visible");
      document.body.classList.remove("cookie-on");
      setTimeout(function () { bar.remove(); }, 400);
    });
  }

  /* =========================================================
     CHAT HỖ TRỢ
     ========================================================= */
  var chatBox;
  function initChat() {
    var fab = document.createElement("button");
    fab.className = "chat-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Mở khung chat hỗ trợ");
    fab.innerHTML = DM.icon.chat;
    document.body.appendChild(fab);

    chatBox = document.createElement("div");
    chatBox.className = "chat-box";
    chatBox.setAttribute("role", "dialog");
    chatBox.setAttribute("aria-label", "Chat hỗ trợ");
    chatBox.innerHTML =
      '<div class="chat-box__head"><span class="login__avatar" style="background:#f24d50" aria-hidden="true">DM</span><div><b>Hỗ trợ Đánh máy 247</b><small>Đang trực tuyến · phản hồi trong 1 phút</small></div>' +
      '<button type="button" class="modal__close" aria-label="Đóng chat">×</button></div>' +
      '<div class="chat-box__msgs" aria-live="polite"></div>' +
      '<div class="chat-box__quick"><button type="button">Bảng giá</button><button type="button">Thời gian giao</button><button type="button">Cách thanh toán</button><button type="button">Bảo mật</button></div>' +
      '<form class="chat-box__form"><label class="sr-only" for="chat-input">Nhập tin nhắn</label><input class="input" id="chat-input" placeholder="Nhập tin nhắn…" autocomplete="off"><button class="button" type="submit" aria-label="Gửi">' + DM.icon.send + "</button></form>";
    document.body.appendChild(chatBox);

    var msgs = $(".chat-box__msgs", chatBox);
    var history = [];
    try { history = JSON.parse(sessionStorage.getItem("dm247_chat") || "[]"); } catch (e) { history = []; }
    if (!history.length) history.push({ me: false, text: "Xin chào 👋 Mình là trợ lý của Đánh máy 247. Bạn cần đánh máy, chuyển âm hay định dạng tài liệu? Hãy hỏi mình bất cứ điều gì nhé!", at: Date.now() });
    var draw = function () {
      msgs.innerHTML = history.map(function (m) {
        return '<div class="msg ' + (m.me ? "msg--me" : "msg--bot") + '">' + m.text + "<time>" + DM.dateTime(m.at).slice(-5) + "</time></div>";
      }).join("");
      msgs.scrollTop = msgs.scrollHeight;
      try { sessionStorage.setItem("dm247_chat", JSON.stringify(history)); } catch (e) { /* bỏ qua */ }
    };
    draw();

    var reply = function (q) {
      var s = q.toLowerCase();
      var r = DM.prices.retyping.base, t = DM.prices.transcription.base;
      if (/giá|bao nhiêu|chi phí|phí/.test(s)) return "Giá đánh máy lại chỉ từ <b>" + DM.fmt(r["30d"]) + "/trang</b>, chuyển âm từ <b>" + DM.fmt(t["10d"]) + "/phút</b>. Xem chi tiết tại <a href='/bang-gia' style='text-decoration:underline'>Bảng giá</a> nhé!";
      if (/gấp|nhanh|bao lâu|thời gian|hạn|giao/.test(s)) return "Thời hạn nhanh nhất là <b>6 giờ</b>. Bạn có thể chọn từ 6 giờ đến 30 ngày - đặt càng sớm, giá càng tốt.";
      if (/thanh toán|chuyển khoản|momo|thẻ|visa|zalopay/.test(s)) return "Bạn thanh toán bằng chuyển khoản: quét mã VietQR bằng app ngân hàng bất kỳ, MoMo hoặc ZaloPay - số tiền và nội dung điền sẵn, hệ thống tự xác nhận.";
      if (/bảo mật|nda|riêng tư|an toàn/.test(s)) return "Toàn bộ nhân sự làm việc theo NDA, tệp được xóa sau 30 ngày kể từ khi hoàn thành. Tài liệu của bạn luôn an toàn 🔒";
      if (/file|tệp|tải|gửi|upload/.test(s)) return "Bạn tải lên tối đa 6 tệp (PDF, ảnh, Word, MP3, WAV…) ở trang <a href='/dat-hang' style='text-decoration:underline'>Đặt hàng</a>, hoặc gửi link Google Drive trong phần hướng dẫn.";
      if (/viết tay|chữ tay/.test(s)) return "Có, chúng tôi chuyên đánh máy chữ viết tay, kể cả chữ khó đọc. Những từ không đọc được sẽ được đánh dấu rõ để bạn kiểm tra.";
      if (/chuyển âm|ghi âm|video|audio/.test(s)) return "Dịch vụ chuyển âm hỗ trợ tiếng Việt ba miền và tiếng Anh, có tùy chọn mốc thời gian và nguyên văn. Xem thêm tại <a href='/dich-vu-chuyen-am' style='text-decoration:underline'>Chuyển âm</a>.";
      if (/chào|hello|hi\b|alo/.test(s)) return "Chào bạn! Bạn đang có tài liệu loại gì cần xử lý ạ?";
      if (/cảm ơn|thanks|tks/.test(s)) return "Rất vui được hỗ trợ bạn! Chúc bạn một ngày tốt lành 😊";
      return "Cảm ơn bạn! Chuyên viên tư vấn sẽ phản hồi trong ít phút. Nếu cần gấp, hãy gọi <a href='tel:" + DM.site.phoneHref + "' style='text-decoration:underline'>" + DM.site.phone + "</a> hoặc nhắn Zalo nhé.";
    };
    var send = function (text) {
      text = text.trim();
      if (!text) return;
      history.push({ me: true, text: DM.esc(text), at: Date.now() });
      draw();
      var typing = document.createElement("div");
      typing.className = "msg msg--bot";
      typing.innerHTML = '<span class="typing-dots"><i></i><i></i><i></i></span>';
      msgs.appendChild(typing); msgs.scrollTop = msgs.scrollHeight;
      setTimeout(function () { history.push({ me: false, text: reply(text), at: Date.now() }); draw(); }, 900);
    };
    $("form", chatBox).addEventListener("submit", function (e) { e.preventDefault(); var i = $("#chat-input"); send(i.value); i.value = ""; });
    $$(".chat-box__quick button", chatBox).forEach(function (b) { b.addEventListener("click", function () { send(b.textContent); }); });
    fab.addEventListener("click", function () { toggleChat(); });
    $(".modal__close", chatBox).addEventListener("click", function () { toggleChat(false); fab.focus(); });
  }
  function toggleChat(force) {
    var open = typeof force === "boolean" ? force : !chatBox.classList.contains("is-open");
    chatBox.classList.toggle("is-open", open);
    if (open) setTimeout(function () { $("#chat-input").focus(); }, 100);
  }
  DM.openChat = function () { toggleChat(true); };

  /* =========================================================
     THÀNH PHẦN TƯƠNG TÁC
     ========================================================= */
  // Accordion
  DM.initAccordions = function (root) {
    $$("[data-accordion]", root).forEach(function (acc) {
      if (acc._init) return; acc._init = true;
      $$(".accordion__item", acc).forEach(function (item, i) {
        var btn = $(".accordion__btn", item), panel = $(".accordion__panel", item);
        var id = "acc-" + Math.random().toString(36).slice(2, 8);
        panel.id = id; btn.setAttribute("aria-controls", id);
        btn.setAttribute("aria-expanded", item.classList.contains("is-open"));
        btn.addEventListener("click", function () {
          var open = !item.classList.contains("is-open");
          if (acc.dataset.accordion !== "multi") $$(".accordion__item.is-open", acc).forEach(function (o) { o.classList.remove("is-open"); $(".accordion__btn", o).setAttribute("aria-expanded", "false"); });
          item.classList.toggle("is-open", open);
          btn.setAttribute("aria-expanded", open);
        });
      });
    });
  };
  DM.faqItem = function (f, open) {
    return '<div class="accordion__item' + (open ? " is-open" : "") + '"><button type="button" class="accordion__btn">' + f.q + '</button>' +
      '<div class="accordion__panel" role="region"><div class="accordion__inner"><div class="accordion__content">' + f.a + "</div></div></div></div>";
  };

  // So sánh trước / sau
  DM.compare = function (sample) {
    return '<div class="compare" style="--pos:50%"><span class="compare__label compare__label--before">Bản gốc</span><span class="compare__label compare__label--after">Bản đánh máy</span>' +
      '<div class="compare__doc compare__before">' + sample.before + "</div>" +
      '<div class="compare__doc compare__after">' + sample.after + "</div>" +
      '<div class="compare__handle" aria-hidden="true"><span class="compare__knob">◀▶</span></div>' +
      '<input type="range" min="0" max="100" value="50" aria-label="Kéo để so sánh bản gốc và bản đánh máy"></div>';
  };
  DM.initCompare = function (root) {
    $$(".compare", root).forEach(function (c) {
      if (c._init) return; c._init = true;
      var r = $("input", c);
      r.addEventListener("input", function () { c.style.setProperty("--pos", r.value + "%"); });
    });
  };

  // Carousel
  DM.initCarousel = function (el, opts) {
    opts = opts || {};
    var track = $(".carousel__track", el), items = $$(".carousel__item", el);
    var dotsBox = $(".carousel__dots", el), prev = $("[data-prev]", el), next = $("[data-next]", el);
    var index = 0, timer;
    var perView = function () { return window.innerWidth <= 640 ? 1 : window.innerWidth <= 1099 ? 2 : 3; };
    var maxIndex = function () { return Math.max(0, items.length - perView()); };
    var go = function (i) {
      var m = maxIndex();
      index = i > m ? 0 : i < 0 ? m : i;
      track.style.transform = "translateX(" + (-index * (100 / perView())) + "%)";
      items.forEach(function (it, k) {
        var vis = k >= index && k < index + perView();
        it.setAttribute("aria-hidden", !vis);
        var card = $(".review-card", it);
        if (card) card.classList.toggle("review-card--navy", perView() === 3 && k === index + 2);
      });
      $$("button", dotsBox).forEach(function (d, k) { d.classList.toggle("is-active", k === index); });
    };
    var buildDots = function () {
      dotsBox.innerHTML = "";
      for (var i = 0; i <= maxIndex(); i++) {
        var b = document.createElement("button");
        b.type = "button"; b.setAttribute("aria-label", "Tới nhóm " + (i + 1));
        (function (k) { b.addEventListener("click", function () { go(k); restart(); }); })(i);
        dotsBox.appendChild(b);
      }
      go(Math.min(index, maxIndex()));
    };
    var restart = function () {
      clearInterval(timer);
      if (opts.autoplay && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(function () { go(index + 1); }, opts.autoplay);
    };
    prev && prev.addEventListener("click", function () { go(index - 1); restart(); });
    next && next.addEventListener("click", function () { go(index + 1); restart(); });
    el.addEventListener("mouseenter", function () { clearInterval(timer); });
    el.addEventListener("mouseleave", restart);
    el.addEventListener("focusin", function () { clearInterval(timer); });
    // vuốt trên điện thoại
    var sx = null;
    el.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 40) { go(index + (dx < 0 ? 1 : -1)); restart(); }
      sx = null;
    });
    var lastPV = perView();
    window.addEventListener("resize", function () { if (perView() !== lastPV) { lastPV = perView(); buildDots(); } });
    buildDots(); restart();
    return { go: go };
  };

  // Hiện dần khi cuộn
  function initReveal() {
    var els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach(function (e) { e.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach(function (e) { io.observe(e); });
  }
  DM.initReveal = initReveal;

  /* =========================================================
     THÔNG BÁO (chuông trên thanh đầu trang) - dùng cho quản trị, nhân viên, khách hàng.
     Hỏi máy chủ định kỳ; nhớ thông báo đã đọc trên trình duyệt (theo mốc giờ máy chủ).
     opts: { key, fetch: () => Promise<{now, events}>, interval, onNew(events), onOpen(event), empty }
     ========================================================= */
  var BELL = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
  var KIND_IC = { "new": "🧾", pay: "💳", paid: "✅", msg: "💬", staff: "🧑‍💻", cancel: "⛔", assign: "📌", note: "💬", sys: "🔔", done: "✅", contact: "✉️", review: "⭐" };
  function timeAgo(ms, now) {
    var s = Math.max(0, Math.round((now - ms) / 1000));
    if (s < 60) return "vừa xong";
    if (s < 3600) return Math.floor(s / 60) + " phút trước";
    if (s < 86400) return Math.floor(s / 3600) + " giờ trước";
    if (s < 7 * 86400) return Math.floor(s / 86400) + " ngày trước";
    return DM.dateTime(ms);
  }
  function beep() {
    try {
      var C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      var ctx = beep.ctx || (beep.ctx = new C());
      [880, 1175].forEach(function (f, i) {
        var o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + i * 0.16;
        o.frequency.value = f; o.type = "sine";
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
        o.connect(g); g.connect(ctx.destination); o.start(t); o.stop(t + 0.32);
      });
    } catch (e) { /* trình duyệt chặn âm thanh */ }
  }

  DM.notifier = function (opts) {
    if (DM._notifier) DM._notifier.stop();
    var KEY = "notif_" + opts.key;
    var st = DM.store.get(KEY, null);
    var state = st || { seen: 0, read: [], sound: true, known: [] };
    var events = [], serverNow = Date.now(), first = !st, timer = null, stopped = false, el = null, baseTitle = document.title.replace(/^\(\d+\+?\)\s*/, "");
    var save = function () { state.read = state.read.slice(-300); DM.store.set(KEY, state); };
    var isUnread = function (e) { return e.at > state.seen && state.read.indexOf(e.id) < 0; };

    function mount() {
      var header = $("#header .container");
      if (!header) return document.addEventListener("DOMContentLoaded", mount);
      var old = $("#notif"); if (old) old.remove();
      el = document.createElement("div");
      el.className = "notif"; el.id = "notif";
      el.innerHTML = '<button type="button" class="notif__btn" aria-haspopup="true" aria-expanded="false" aria-label="Thông báo">' + BELL + '<span class="notif__badge" hidden></span></button>' +
        '<div class="notif__panel" role="dialog" aria-label="Thông báo"><div class="notif__head"><b>Thông báo</b><button type="button" class="link" data-readall>Đánh dấu đã đọc</button></div>' +
        '<div class="notif__list" aria-live="polite"></div>' +
        '<div class="notif__foot"><button type="button" class="link" data-sound></button>' +
        ("Notification" in window ? '<button type="button" class="link" data-desk></button>' : "") + "</div></div>";
      header.insertBefore(el, $("#hamburger", header));
      var btn = $(".notif__btn", el);
      btn.addEventListener("click", function (e) { e.stopPropagation(); toggle(!el.classList.contains("is-open")); });
      document.addEventListener("click", function (e) { if (el && !el.contains(e.target)) toggle(false); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") toggle(false); });
      $("[data-readall]", el).addEventListener("click", function () { state.seen = serverNow; state.read = []; save(); draw(); });
      $("[data-sound]", el).addEventListener("click", function () { state.sound = !state.sound; save(); draw(); if (state.sound) beep(); });
      var desk = $("[data-desk]", el);
      if (desk) desk.addEventListener("click", function () {
        if (Notification.permission === "default") Notification.requestPermission().then(draw);
        else DM.toast(Notification.permission === "granted" ? "Thông báo trên máy tính đã bật. Có thể tắt trong cài đặt trình duyệt." : "Trình duyệt đang chặn thông báo. Hãy cho phép trong cài đặt trang web.");
      });
      $(".notif__list", el).addEventListener("click", function (e) {
        var a = e.target.closest("[data-ev]"); if (!a) return;
        var ev = events.find(function (x) { return x.id === a.dataset.ev; });
        if (!ev) return;
        if (state.read.indexOf(ev.id) < 0) state.read.push(ev.id);
        save(); draw(); toggle(false);
        if (opts.onOpen) opts.onOpen(ev);
      });
      draw();
    }
    function toggle(open) {
      if (!el) return;
      el.classList.toggle("is-open", open);
      $(".notif__btn", el).setAttribute("aria-expanded", open);
    }
    function draw() {
      if (!el) return;
      var n = events.filter(isUnread).length;
      var badge = $(".notif__badge", el);
      badge.hidden = !n; badge.textContent = n > 9 ? "9+" : n;
      $(".notif__btn", el).setAttribute("aria-label", n ? "Thông báo - " + n + " chưa đọc" : "Thông báo");
      document.title = (n ? "(" + (n > 9 ? "9+" : n) + ") " : "") + baseTitle;
      $(".notif__list", el).innerHTML = events.length ? events.map(function (e) {
        var k = e.kind.split(":")[0];
        return '<button type="button" class="notif__item' + (isUnread(e) ? " is-unread" : "") + '" data-ev="' + DM.esc(e.id) + '"><span class="notif__ic" aria-hidden="true">' + (KIND_IC[k] || "🔔") + "</span>" +
          "<span><b>" + DM.esc(e.title) + "</b><small>" + DM.esc(e.text) + "</small><time>" + timeAgo(e.at, serverNow) + "</time></span></button>";
      }).join("") : '<p class="notif__empty">' + DM.esc(opts.empty || "Chưa có thông báo nào.") + "</p>";
      $("[data-sound]", el).textContent = state.sound ? "🔊 Âm báo: bật" : "🔈 Âm báo: tắt";
      var desk = $("[data-desk]", el);
      if (desk) desk.textContent = Notification.permission === "granted" ? "🖥 Thông báo máy tính: bật" : "🖥 Bật thông báo trên máy tính";
    }
    function poll() {
      if (stopped) return;
      opts.fetch().then(function (d) {
        if (stopped) return;
        serverNow = d.now; events = d.events || [];
        if (first) { state.seen = d.now; first = false; } // lần đầu dùng: không coi lịch sử cũ là mới
        var known = state.known || [];
        var fresh = events.filter(function (e) { return isUnread(e) && known.indexOf(e.id) < 0; });
        state.known = events.map(function (e) { return e.id; });
        save(); draw();
        if (!fresh.length) return;
        if (poll.started) {
          fresh.slice(0, 3).forEach(function (e) { DM.toast("🔔 " + e.title + (e.text ? " - " + e.text : "")); });
          if (fresh.length > 3) DM.toast("Và " + (fresh.length - 3) + " thông báo mới khác.");
          if (state.sound) beep();
          if (document.hidden && "Notification" in window && Notification.permission === "granted") {
            try { var nf = new Notification(fresh[0].title, { body: fresh[0].text, icon: "/assets/img/logo-512.png", tag: "dm247" }); nf.onclick = function () { window.focus(); nf.close(); if (opts.onOpen) opts.onOpen(fresh[0]); }; } catch (e) { /* bỏ qua */ }
          }
        } else {
          DM.toast("🔔 Bạn có " + fresh.length + " thông báo mới chưa đọc.");
        }
        if (opts.onNew) opts.onNew(fresh);
      }, function (er) {
        if (er.status === 401 || er.status === 403) return api.stop();
      }).then(function () { poll.started = true; });
    }
    function schedule() { clearInterval(timer); timer = setInterval(function () { if (!document.hidden) poll(); }, opts.interval || 20000); }
    function onVis() { if (!document.hidden) poll(); }
    var api = {
      stop: function () {
        stopped = true; clearInterval(timer); document.removeEventListener("visibilitychange", onVis);
        if (el) el.remove(); el = null; document.title = baseTitle;
        if (DM._notifier === api) DM._notifier = null;
      },
      refresh: poll
    };
    DM._notifier = api;
    mount(); poll(); schedule();
    document.addEventListener("visibilitychange", onVis);
    return api;
  };

  /* ---------- Khởi động ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderHeader();
    renderFooter();
    initCookie();
    initChat();
    DM.initAccordions();
    DM.initCompare();
    initReveal();
    if (location.hash === "#login") { var b = $(".login__toggle"); if (b && !DM.auth.current()) b.click(); }
  });
})();
