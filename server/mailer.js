/**
 * Gửi email qua SMTP (Gmail, Hostinger Email, Zoho…). Nếu chưa cấu hình SMTP,
 * email sẽ được in ra log máy chủ để không làm gián đoạn việc nhận đơn.
 */
"use strict";

const nodemailer = require("nodemailer");
const { SMTP, ADMIN_EMAIL, SITE_URL } = require("./config");
const { DM, STATUS, fmt } = require("./shared");

const transport = SMTP ? nodemailer.createTransport({ host: SMTP.host, port: SMTP.port, secure: SMTP.secure, auth: SMTP.auth }) : null;

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function layout(title, body) {
  return `<!doctype html><html lang="vi"><body style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#333">
<div style="max-width:600px;margin:0 auto;padding:24px 16px">
  <div style="font:700 22px Georgia,serif;margin-bottom:16px"><span style="color:#f24d50">ĐÁNH MÁY</span> 247</div>
  <div style="background:#fff;border-radius:12px;padding:28px 26px">
    <h1 style="font:400 22px Georgia,serif;color:#000;margin:0 0 16px">${esc(title)}</h1>
    ${body}
  </div>
  <p style="font-size:12.5px;color:#888;text-align:center;margin-top:18px;line-height:1.6">
    ${esc(DM.site.tagline)}<br>Hotline/Zalo: ${esc(DM.site.phone)} · ${esc(DM.site.email)}
  </p>
</div></body></html>`;
}
const btn = (href, label) => `<p style="margin:22px 0"><a href="${esc(href)}" style="background:#f24d50;color:#fff;text-decoration:none;padding:13px 26px;border-radius:4px;font-weight:700;display:inline-block">${esc(label)}</a></p>`;
const row = (k, v) => `<tr><td style="padding:6px 12px 6px 0;color:#777;white-space:nowrap;vertical-align:top">${esc(k)}</td><td style="padding:6px 0;color:#000;font-weight:600">${v}</td></tr>`;

function orderTable(o) {
  return `<table style="border-collapse:collapse;font-size:14.5px;margin:6px 0 10px">
    ${row("Mã đơn", "#" + esc(o.id))}
    ${row("Dịch vụ", esc(o.serviceLabel + " - " + o.typeLabel))}
    ${row("Khối lượng", esc(o.qty + " " + o.unit + (o.speakers ? " · " + o.speakers : "")))}
    ${row("Thời hạn", esc(o.urgencyLabel + " (tính từ khi thanh toán)"))}
    ${o.extras.length ? row("Bổ sung", esc(o.extras.join(", "))) : ""}
    ${row("Tệp đính kèm", o.files.length ? esc(o.files.map((f) => f.name).join(", ")) : "Không")}
    ${row("Tổng thanh toán", `<span style="color:#f24d50">${esc(fmt(o.price.total))}</span>${o.promo ? " (mã " + esc(o.promo) + ")" : ""}`)}
  </table>`;
}
function bankBox(o) {
  const b = DM.site.bank;
  return `<div style="background:#f3f4fa;border-radius:10px;padding:16px 18px;font-size:14.5px;line-height:1.8;margin:14px 0">
    <b>Thông tin chuyển khoản</b><br>
    Ngân hàng: <b>${esc(b.name)}</b><br>Số tài khoản: <b>${esc(b.account)}</b><br>Chủ tài khoản: <b>${esc(b.holder)}</b><br>
    Số tiền: <b>${esc(fmt(o.price.total))}</b><br>Nội dung chuyển khoản: <b>${esc(o.id)}</b>
  </div>`;
}
const orderLink = (o, token) => `${SITE_URL}/tai-khoan?order=${encodeURIComponent(o.id)}${token ? "&t=" + encodeURIComponent(token) : ""}`;

async function send(to, subject, title, body) {
  const html = layout(title, body);
  if (!transport) {
    console.log(`[mail:chưa cấu hình SMTP] → ${to} | ${subject}`);
    return false;
  }
  try {
    await transport.sendMail({ from: SMTP.from, to, subject, html, replyTo: ADMIN_EMAIL });
    return true;
  } catch (e) {
    console.error("[mail] Gửi thất bại tới", to, "-", e.message);
    return false;
  }
}

module.exports = {
  ready: !!transport,

  orderCreated(o, token) {
    send(o.email, `Đã nhận đơn hàng #${o.id} - Đánh máy 247`, "Cảm ơn bạn đã đặt hàng!",
      `<p>Xin chào ${esc(o.name)},</p><p>Chúng tôi đã nhận được đơn hàng của bạn. Đơn sẽ được bắt đầu ngay khi nhận được thanh toán.</p>
      ${orderTable(o)}${bankBox(o)}${btn(orderLink(o, token), "Xem & theo dõi đơn hàng")}
      <p style="font-size:13px;color:#888">Hãy giữ email này: liên kết trên cho phép bạn xem đơn hàng mà không cần mật khẩu.</p>`);
    send(ADMIN_EMAIL, `[Đơn mới] #${o.id} - ${fmt(o.price.total)} - ${o.name}`, "Có đơn hàng mới",
      `${orderTable(o)}<p>Khách: <b>${esc(o.name)}</b> · ${esc(o.email)} · ${esc(o.phone)}</p>
      ${o.instructions ? `<p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${esc(o.instructions)}</p>` : ""}
      ${btn(SITE_URL + "/quan-tri", "Mở trang quản trị")}`);
  },

  paymentClaimed(o) {
    send(ADMIN_EMAIL, `[Cần đối soát] Khách báo đã chuyển khoản đơn #${o.id}`, "Khách báo đã chuyển khoản",
      `<p>Khách <b>${esc(o.name)}</b> báo đã chuyển <b>${esc(fmt(o.price.total))}</b> với nội dung <b>${esc(o.id)}</b>.</p>
      <p>Vui lòng kiểm tra tài khoản ${esc(DM.site.bank.shortName)} rồi xác nhận trên trang quản trị.</p>${btn(SITE_URL + "/quan-tri", "Xác nhận thanh toán")}`);
  },

  paymentConfirmed(o) {
    send(o.email, `Đã nhận thanh toán đơn #${o.id}`, "Thanh toán thành công",
      `<p>Xin chào ${esc(o.name)},</p><p>Chúng tôi đã nhận <b>${esc(fmt(o.paidAmount || o.price.total))}</b> cho đơn <b>#${esc(o.id)}</b>.
      Đơn hàng đang được phân công cho chuyên viên. Thời hạn dự kiến: <b>${esc(new Date(o.deadline).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }))}</b>.</p>
      ${btn(orderLink(o), "Theo dõi đơn hàng")}`);
  },

  statusChanged(o) {
    if (o.status === "done") {
      send(o.email, `Đơn #${o.id} đã hoàn thành`, "Tài liệu của bạn đã sẵn sàng!",
        `<p>Xin chào ${esc(o.name)},</p><p>Đơn hàng <b>#${esc(o.id)}</b> đã hoàn thành và được biên tập viên kiểm tra. Bạn có thể tải tài liệu trong tài khoản.</p>
        ${btn(orderLink(o), "Tải tài liệu")}<p>Nếu cần chỉnh sửa, hãy nhắn cho chúng tôi trong vòng 14 ngày - hoàn toàn miễn phí.</p>`);
    } else if (o.status === "cancelled") {
      send(o.email, `Đơn #${o.id} đã được hủy`, "Đơn hàng đã hủy", `<p>Đơn hàng <b>#${esc(o.id)}</b> đã được hủy. Nếu đây là nhầm lẫn, vui lòng liên hệ ${esc(DM.site.phone)}.</p>`);
    }
  },

  newMessage(o, fromCustomer, text) {
    if (fromCustomer) {
      send(ADMIN_EMAIL, `[Tin nhắn] Đơn #${o.id} - ${o.name}`, "Khách hàng gửi tin nhắn",
        `<p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${esc(text)}</p>${btn(SITE_URL + "/quan-tri", "Trả lời")}`);
    } else {
      send(o.email, `Tin nhắn mới về đơn #${o.id}`, "Bạn có tin nhắn mới",
        `<p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${esc(text)}</p>${btn(orderLink(o), "Xem & trả lời")}`);
    }
  },

  loginLink(email, url) {
    return send(email, "Liên kết đăng nhập Đánh máy 247", "Đăng nhập tài khoản",
      `<p>Bấm nút dưới đây để đăng nhập. Liên kết có hiệu lực trong 30 phút và chỉ dùng được một lần.</p>${btn(url, "Đăng nhập")}
      <p style="font-size:13px;color:#888">Nếu bạn không yêu cầu đăng nhập, hãy bỏ qua email này.</p>`);
  },

  /** Báo nhân viên có đơn mới - tuyệt đối KHÔNG kèm thông tin khách hay giá. */
  staffAssigned(st, o) {
    if (!st.email) return;
    send(st.email, `[Giao việc] Đơn #${o.id} - ${o.typeLabel}`, "Bạn được giao một đơn mới",
      `<p>Chào ${esc(st.name)},</p><p>Quản trị vừa giao cho bạn đơn <b>#${esc(o.id)}</b>:</p>
      <table style="border-collapse:collapse;font-size:14.5px;margin:6px 0 10px">
        ${row("Dịch vụ", esc(o.serviceLabel + " - " + o.typeLabel))}
        ${row("Khối lượng", esc(o.qty + " " + o.unit + (o.speakers ? " · " + o.speakers : "")))}
        ${row("Hạn hoàn thành", o.deadline ? esc(new Date(o.deadline).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" })) : "Chờ khách thanh toán")}
      </table>${btn(SITE_URL + "/nhan-vien?order=" + encodeURIComponent(o.id), "Mở đơn hàng")}`);
  },

  /** Nhân viên gửi ghi chú / gửi kiểm tra → báo quản trị. */
  staffUpdate(o, st, text) {
    send(ADMIN_EMAIL, `[Nhân viên] ${st.name} - đơn #${o.id}`, "Cập nhật từ nhân viên",
      `<p><b>${esc(st.name)}</b> cập nhật đơn <b>#${esc(o.id)}</b>:</p>
      <p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${esc(text)}</p>${btn(SITE_URL + "/quan-tri", "Mở trang quản trị")}`);
  },

  contact(c) {
    send(ADMIN_EMAIL, `[Liên hệ] ${c.subject} - ${c.name}`, "Tin nhắn liên hệ mới",
      `<table style="font-size:14.5px">${row("Họ tên", esc(c.name))}${row("Email", esc(c.email))}${row("Điện thoại", esc(c.phone || "-"))}${row("Chủ đề", esc(c.subject))}</table>
      <p style="white-space:pre-wrap;background:#f7f7f7;padding:12px;border-radius:8px">${esc(c.message)}</p>`);
  },

  STATUS
};
