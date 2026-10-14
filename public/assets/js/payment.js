/* =========================================================
   Đánh máy 247 — Hộp thoại thanh toán chuyển khoản VietQR
   - Mã QR tạo theo tài khoản trong DM.site.bank, số tiền và nội dung = mã đơn
   - "Tôi đã chuyển khoản" báo cho máy chủ; trạng thái tự cập nhật khi
     ngân hàng xác nhận (webhook SePay) hoặc quản trị xác nhận thủ công
   ========================================================= */
(function () {
  "use strict";
  var DM = window.DM, $ = DM.$;
  var PAID = ["paid", "progress", "review", "done"];

  DM.openPayment = function (order, onClose) {
    var b = DM.site.bank;
    var qr = "https://img.vietqr.io/image/" + b.bin + "-" + b.account + "-compact2.png?amount=" + order.price.total +
      "&addInfo=" + encodeURIComponent(order.id) + "&accountName=" + encodeURIComponent(b.holder);
    var copy = function (v, label) {
      return '<dd><span>' + DM.esc(v) + '</span> <button type="button" class="link" data-copy="' + DM.esc(v) + '" aria-label="Sao chép ' + label + '" style="font-size:12.5px;margin-left:6px">Sao chép</button></dd>';
    };
    var m = DM.modal.open(
      '<div id="pay-body">' +
      '<h2 class="modal__title">Thanh toán đơn #' + order.id + "</h2>" +
      '<div class="summary__row"><span>Số tiền cần thanh toán</span><span style="font-size:20px">' + DM.fmt(order.price.total) + "</span></div>" +
      '<p style="font-size:14.5px;margin:6px 0 16px">Quét mã bằng ứng dụng ngân hàng, MoMo hoặc ZaloPay — số tiền và nội dung đã điền sẵn. Hoặc chuyển khoản thủ công theo thông tin dưới đây.</p>' +
      '<div class="qr-box"><div class="qr-slot"></div><dl>' +
      "<dt>Ngân hàng</dt><dd>" + DM.esc(b.name) + "</dd>" +
      "<dt>Số tài khoản</dt>" + copy(b.account, "số tài khoản") +
      "<dt>Chủ tài khoản</dt><dd>" + DM.esc(b.holder) + "</dd>" +
      "<dt>Số tiền</dt>" + copy(String(order.price.total), "số tiền") +
      "<dt>Nội dung</dt>" + copy(order.id, "nội dung chuyển khoản") +
      "</dl></div>" +
      '<div class="alert alert--info" style="font-size:14px">Vui lòng ghi đúng nội dung <b>' + order.id + "</b> để hệ thống tự động xác nhận. " + DM.esc(DM.site.tagline) + ", tài khoản nhận tiền đứng tên công ty chủ quản " + DM.esc(DM.site.owner) + ".</div>" +
      '<div id="pay-state" aria-live="polite"></div>' +
      '<button type="button" class="button button--w100" id="pay-confirm">Tôi đã chuyển khoản</button>' +
      '<p class="field__hint" style="text-align:center;margin-top:12px">Bạn có thể đóng cửa sổ này và thanh toán sau trong trang <a href="/tai-khoan?order=' + order.id + '" style="color:var(--red);text-decoration:underline">Đơn hàng của tôi</a>.</p>' +
      "</div>"
    );
    m._onclose = function () { clearInterval(poll); if (onClose) onClose(order); };

    var img = new Image(150, 150);
    img.alt = "Mã VietQR thanh toán đơn " + order.id;
    img.style.cssText = "background:#fff;border-radius:8px;padding:6px";
    img.onerror = function () { $(".qr-slot", m).innerHTML = '<div style="font-size:13px;color:var(--muted)">Không tải được mã QR — vui lòng chuyển khoản theo thông tin bên cạnh.</div>'; };
    img.src = qr;
    $(".qr-slot", m).appendChild(img);

    m.addEventListener("click", function (e) {
      var c = e.target.closest("[data-copy]");
      if (!c) return;
      var done = function () { DM.toast("Đã sao chép: " + c.dataset.copy); };
      if (navigator.clipboard) navigator.clipboard.writeText(c.dataset.copy).then(done, function () { DM.toast("Không sao chép được, vui lòng chép tay.", "error"); });
    });

    var poll = null;
    function waiting() {
      $("#pay-state", m).innerHTML = '<div class="alert alert--info" style="display:flex;gap:10px;align-items:center"><span class="typing-dots"><i></i><i></i><i></i></span><span>Đang chờ xác nhận giao dịch. Trang sẽ tự cập nhật khi chúng tôi nhận được tiền — thường trong 1–5 phút.</span></div>';
      var btn = $("#pay-confirm", m);
      btn.textContent = "Đóng — tôi sẽ theo dõi sau";
      btn.onclick = function () { DM.modal.close(m); };
      clearInterval(poll);
      poll = setInterval(function () {
        DM.orders.get(order.id).then(function (o) {
          order = o;
          if (PAID.indexOf(o.status) > -1) { clearInterval(poll); success(o); }
        }, function () { /* thử lại ở lần sau */ });
      }, 5000);
    }
    function success(o) {
      $("#pay-body", m).innerHTML =
        '<div style="text-align:center"><div class="success-check">' + DM.icon.check + '</div><h2 class="modal__title" style="padding:0">Đã nhận thanh toán!</h2>' +
        "<p>Đơn <b>#" + o.id + "</b> đang được phân công cho chuyên viên.</p><p>Thời hạn dự kiến: <b>" + DM.dateTime(o.deadline) + "</b></p>" +
        '<button type="button" class="button button--w100" data-ok>Xem đơn hàng</button></div>';
      $("[data-ok]", m).addEventListener("click", function () { DM.modal.close(m); });
    }

    if (order.status === "verifying") waiting();
    else $("#pay-confirm", m).onclick = function () {
      var btn = this;
      btn.disabled = true;
      DM.orders.action(order.id, "claim-paid").then(function (o) { order = o; btn.disabled = false; waiting(); },
        function (err) { btn.disabled = false; DM.toast(err.message, "error"); });
    };
    return m;
  };
})();
