/* =========================================================
   Đánh máy 247 - Bộ tri thức cho khung chat "Hỗ trợ Đánh máy 247"
   Tải khi khách mở chat lần đầu. Mỗi chủ đề: từ khóa (không dấu), câu trả lời HTML, câu hỏi gợi ý tiếp theo.
   Giá, thời hạn, tài khoản ngân hàng… đọc trực tiếp từ data.js nên luôn khớp với bảng giá.
   ========================================================= */
(function () {
  var DM = window.DM;
  var P = DM.prices, R = P.retyping, T = P.transcription, S = DM.site;
  var fmt = DM.fmt;
  var norm = function (s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/\s+/g, " ").trim(); };
  var link = function (href, text) { return '<a href="' + href + '">' + text + "</a>"; };
  var ul = function (items) { return "<ul>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ul>"; };
  var ol = function (items) { return "<ol>" + items.map(function (i) { return "<li>" + i + "</li>"; }).join("") + "</ol>"; };
  var urgLabel = function (k) { var u = DM.urgency(k); return u ? u.label : k; };
  var typeK = function (svc, key) { var t = svc.types.find(function (x) { return x.key === key; }); return t ? t.k : 1; };
  var pct = function (k) { return Math.round((k - 1) * 100); };
  var extraPct = function (svc, key) { var e = svc.extras.find(function (x) { return x.key === key; }); return e ? e.pct : 0; };
  var aff = DM.affiliate || { rate: 0.3, cookieDays: 30, minPayout: 100000, payoutDay: 5 };

  /* ---------- Các chủ đề ---------- */
  var T_ = [
    { id: "dat-hang", title: "Hướng dẫn đặt hàng", keys: ["dat hang", "cach dat", "dat don", "order", "huong dan", "bat dau", "lam sao de", "quy trinh"],
      a: function () {
        return "<b>Đặt hàng chỉ mất khoảng 3 phút:</b>" + ol([
          "Vào " + link("/dat-hang", "trang Đặt hàng") + ", chọn <b>Đánh máy lại</b> hoặc <b>Chuyển âm</b>.",
          "Chọn loại chuyển đổi (PDF/ảnh/viết tay sang Word, sang Excel, công thức, LaTeX…), số trang hoặc số phút và thời hạn - giá hiện ngay bên phải.",
          "Tải lên tối đa 6 tệp (mỗi tệp đến 50MB) hoặc dán đường dẫn Google Drive vào phần <b>Hướng dẫn</b>.",
          "Ghi rõ yêu cầu: phông chữ, định dạng, trang cần làm, cách xử lý chữ khó đọc…",
          "Nhập họ tên, email, số điện thoại → bấm <b>Thanh toán</b> → quét mã VietQR.",
          "Nhận email xác nhận; theo dõi tiến độ, nhắn tin với chuyên viên và tải tệp hoàn thành tại " + link("/tai-khoan", "Tài khoản") + "."
        ]) + "Thời hạn bắt đầu tính từ khi thanh toán được xác nhận.";
      }, next: ["tinh-gia", "tep", "thanh-toan"] },

    { id: "bang-gia", title: "Bảng giá", keys: ["gia", "bao nhieu", "chi phi", "phi", "bang gia", "bao gia", "tien"],
      a: function () {
        return "<b>Đánh máy lại</b> (đơn giá/trang):" + ul([
          "Gấp 6 giờ: <b>" + fmt(R.base["6h"]) + "</b> · 24 giờ: <b>" + fmt(R.base["24h"]) + "</b>",
          "3 ngày: <b>" + fmt(R.base["3d"]) + "</b> · 7 ngày: <b>" + fmt(R.base["7d"]) + "</b> · 30 ngày: <b>" + fmt(R.base["30d"]) + "</b>"
        ]) + "<b>Chuyển âm</b> (đơn giá/phút): 6 giờ " + fmt(T.base["6h"]) + " · 3 ngày " + fmt(T.base["3d"]) + " · 10 ngày <b>" + fmt(T.base["10d"]) + "</b>." +
          "<br><b>Hệ số theo loại:</b> viết tay +" + pct(typeK(R, "hand-word")) + "%, công thức Toán/Hóa +" + pct(typeK(R, "equation")) + "%, LaTeX +" + pct(typeK(R, "latex")) + "%, PDF sang Excel +" + pct(typeK(R, "pdf-excel")) + "%." +
          "<br>Gõ thử: <i>“giá 20 trang 3 ngày”</i> hoặc <i>“giá 45 phút ghi âm 2 người”</i> để mình tính ngay. Chi tiết: " + link("/bang-gia", "Bảng giá") + ".";
      }, next: ["tinh-gia", "ma-giam-gia", "trang-tinh"] },

    { id: "tinh-gia", title: "Tính giá ngay", keys: ["tinh gia", "bao gia nhanh", "uoc tinh", "het bao nhieu tien"],
      a: function () {
        return "Mình tính giá ngay trong chat - gõ theo mẫu:" + ul([
          "<i>“giá 20 trang viết tay 3 ngày”</i>",
          "<i>“15 trang công thức toán 24 giờ”</i>",
          "<i>“45 phút ghi âm 2 người có mốc thời gian”</i>",
          "<i>“30 trang PDF sang Excel 7 ngày”</i>"
        ]) + "Hoặc chọn từng tùy chọn ở " + link("/dat-hang", "trang Đặt hàng") + " - giá cập nhật ngay khi bạn thay đổi.";
      }, next: ["bang-gia", "ma-giam-gia", "thoi-han"] },

    { id: "trang-tinh", title: "Một trang tính thế nào?", keys: ["mot trang", "tinh trang", "trang tinh", "bao nhieu chu", "mat do", "kho giay", "a3"],
      a: function () { return "Một trang = <b>một mặt giấy của tài liệu gốc</b> (A4 hoặc tương đương). Trang có mật độ chữ quá dày (trên khoảng 500 từ) hoặc khổ lớn (A3, bản vẽ) sẽ được báo giá lại trước khi làm và <b>chỉ thực hiện khi bạn đồng ý</b>. Trang trắng, bìa không có chữ không tính."; },
      next: ["bang-gia", "tinh-gia"] },

    { id: "thoi-han", title: "Thời hạn giao", keys: ["thoi han", "bao lau", "gap", "nhanh", "khi nao xong", "giao", "deadline", "kip", "mat bao lau"],
      a: function () {
        return "Bạn chọn thời hạn từ <b>6 giờ</b> đến <b>30 ngày</b> (chuyển âm đến 10 ngày) - đặt càng sớm giá càng tốt." + ul([
          "Thời hạn tính <b>từ lúc xác nhận thanh toán</b>, hệ thống hiện sẵn ngày giờ dự kiến khi bạn chọn.",
          "Tài liệu dài, cần gấp: chúng tôi chia cho nhiều chuyên viên và biên tập viên ghép, thống nhất định dạng.",
          "Đơn trễ hạn so với cam kết được xử lý theo chính sách hoàn tiền."
        ]) + "Cần gấp hơn 6 giờ? Gọi " + link("tel:" + S.phoneHref, S.phone) + " để kiểm tra khả năng nhận đơn.";
      }, next: ["tinh-gia", "hoan-tien"] },

    { id: "thanh-toan", title: "Thanh toán", keys: ["thanh toan", "chuyen khoan", "vietqr", "qr", "ngan hang", "momo", "zalopay", "the ngan hang", "tra tien", "stk", "so tai khoan"],
      a: function () {
        var b = S.bank;
        return "<b>Thanh toán bằng chuyển khoản VietQR:</b>" + ol([
          "Sau khi đặt hàng, màn hình hiện mã QR - quét bằng app ngân hàng bất kỳ, MoMo hoặc ZaloPay.",
          "Số tiền và nội dung (mã đơn, ví dụ DM123456) đã điền sẵn - <b>giữ nguyên nội dung</b> để hệ thống đối soát.",
          "Bấm <b>“Tôi đã chuyển khoản”</b>; đơn chuyển sang “Đang xác nhận thanh toán” và bạn nhận email khi tiền về."
        ]) + "Tài khoản nhận: <b>" + b.shortName + " " + b.account + "</b> - " + b.holder + ".<br>Lỡ ghi sai nội dung? Nhắn mã đơn và ảnh giao dịch trong trang đơn hàng, chúng tôi đối soát thủ công.";
      }, next: ["theo-doi", "hoa-don", "huy-don"] },

    { id: "theo-doi", title: "Theo dõi đơn hàng", keys: ["theo doi", "tien do", "kiem tra don", "don cua toi", "trang thai", "xem don", "ma don", "dm1", "dm2", "dm3", "dm4", "dm5", "dm6", "dm7", "dm8", "dm9"],
      a: function () {
        return "Có 3 cách theo dõi đơn:" + ol([
          "Bấm liên kết <b>“Xem đơn hàng”</b> trong email xác nhận (không cần đăng nhập).",
          "Vào " + link("/tai-khoan", "Tài khoản") + " → nhập email đã đặt hàng → mở liên kết đăng nhập gửi về email.",
          "Trên thiết bị đã đặt hàng, trang Tài khoản tự hiện các đơn của bạn."
        ]) + "Trong trang đơn: xem tiến độ (đã thanh toán → đang thực hiện → kiểm tra → hoàn thành), nhắn tin với chuyên viên, tải tệp. Chuông 🔔 góc trên báo ngay khi có cập nhật.";
      }, next: ["chinh-sua", "dang-nhap"] },

    { id: "dang-nhap", title: "Đăng nhập tài khoản", keys: ["dang nhap", "tai khoan", "mat khau", "login", "khong vao duoc", "lien ket dang nhap"],
      a: function () { return "Tài khoản khách hàng <b>không cần mật khẩu</b>: vào " + link("/tai-khoan", "Tài khoản") + ", nhập email đã dùng khi đặt hàng, mở email và bấm liên kết đăng nhập (hiệu lực 30 phút, dùng một lần). Không thấy email? Kiểm tra mục Spam/Quảng cáo, hoặc dùng liên kết trong email xác nhận đơn."; },
      next: ["theo-doi"] },

    { id: "tep", title: "Gửi tệp tài liệu", keys: ["gui tep", "tai len", "upload", "dinh kem", "file", "tep", "google drive", "dung luong", "50mb", "dinh dang tep", "gui file"],
      a: function () {
        return ul([
          "Tối đa <b>6 tệp</b> mỗi đơn, mỗi tệp đến <b>50MB</b>: PDF, ảnh (JPG, PNG, HEIC), Word, Excel, MP3, WAV, M4A, MP4…",
          "Tệp lớn hoặc nhiều hơn 6 tệp: nén thành ZIP, hoặc dán liên kết Google Drive/OneDrive (đã mở quyền xem) vào phần <b>Hướng dẫn</b>.",
          "Không nhận tệp chạy được (.exe, .js, .html…) vì lý do an toàn.",
          "Chụp bằng điện thoại: chụp thẳng, đủ sáng, không bóng tay - xem " + link("/blog/meo-chup-tai-lieu-bang-dien-thoai", "7 mẹo chụp tài liệu") + "."
        ]) + "Bổ sung tệp sau khi đặt: nhắn liên kết trong trang đơn hàng.";
      }, next: ["viet-tay", "dat-hang"] },

    { id: "tep-tra", title: "Định dạng tệp nhận về", keys: ["nhan file", "file gi", "docx", "google docs", "dinh dang tra", "xuat", "pdf", "odt", "tex", "srt", "nhan ve"],
      a: function () { return "Mặc định bạn nhận <b>.docx</b> (Word). Theo yêu cầu: Google Docs, .odt, .xlsx (Excel), .tex (LaTeX), .srt (phụ đề), kèm PDF để xem nhanh. Ghi rõ trong phần Hướng dẫn: phông chữ, cỡ chữ, lề, giữ bố cục gốc hay trình bày lại."; },
      next: ["dinh-dang", "cong-thuc"] },

    { id: "chat-luong", title: "Quy trình chất lượng", keys: ["chat luong", "chinh xac", "sai sot", "loi chinh ta", "dam bao", "kiem tra", "bien tap vien"],
      a: function () {
        return "<b>Hai lớp kiểm soát cho mọi đơn:</b>" + ol([
          "Chuyên viên đánh máy gõ toàn bộ, đối chiếu từng trang với bản gốc.",
          "Biên tập viên kiểm tra chính tả, số liệu, tên riêng, định dạng trước khi giao.",
          "Chữ không đọc được được đánh dấu <b>[không rõ]</b> để bạn xác nhận - không đoán bừa."
        ]) + "Bạn được chỉnh sửa miễn phí trong 14 ngày nếu cần.";
      }, next: ["chinh-sua", "ocr-ai"] },

    { id: "chinh-sua", title: "Chỉnh sửa miễn phí", keys: ["chinh sua", "sua lai", "sua loi", "chua dung", "lam lai", "bao hanh", "14 ngay"],
      a: function () { return "Trong <b>14 ngày</b> kể từ khi nhận tài liệu, bạn được chỉnh sửa <b>miễn phí, không giới hạn số lần</b>, miễn là trong phạm vi hướng dẫn ban đầu. Cách yêu cầu: mở trang đơn hàng → nhắn cụ thể trang/dòng cần sửa (có thể gửi ảnh chụp). Yêu cầu mới ngoài phạm vi ban đầu sẽ được báo giá riêng trước khi làm."; },
      next: ["hoan-tien", "theo-doi"] },

    { id: "hoan-tien", title: "Hoàn tiền", keys: ["hoan tien", "tra lai tien", "tre han", "khong hai long", "refund", "boi thuong"],
      a: function () { return "Nếu đơn <b>trễ hạn</b> hoặc chất lượng không đạt cam kết và không thể khắc phục, bạn được <b>hoàn tiền một phần hoặc toàn bộ</b>. Yêu cầu hoàn tiền được xử lý trong 3-5 ngày làm việc. Hãy nhắn trong trang đơn hàng hoặc gọi " + link("tel:" + S.phoneHref, S.phone) + "."; },
      next: ["chinh-sua", "huy-don"] },

    { id: "huy-don", title: "Hủy đơn", keys: ["huy don", "huy", "khong dat nua", "doi y"],
      a: function () { return "Đơn <b>chưa thanh toán</b>: tự hủy trong trang đơn hàng (nút Hủy đơn). Đơn <b>đã thanh toán</b>: nhắn trong trang đơn hoặc gọi " + link("tel:" + S.phoneHref, S.phone) + " - phần việc chưa thực hiện sẽ được xem xét hoàn lại theo chính sách."; },
      next: ["hoan-tien"] },

    { id: "bao-mat", title: "Bảo mật tài liệu", keys: ["bao mat", "nda", "rieng tu", "an toan", "lo thong tin", "bi lo", "ro ri", "lo ra", "xoa tep", "hop dong mat", "thong tin ca nhan", "ai xem"],
      a: function () {
        return ul([
          "100% nhân sự ký thỏa thuận bảo mật (NDA).",
          "Nhân viên xử lý <b>không thấy tên, email, số điện thoại</b> của bạn và giá đơn hàng.",
          "Tệp lưu ngoài thư mục website, chỉ tải được khi có quyền; kết nối HTTPS.",
          "Tệp tự xóa sau <b>30 ngày</b> kể từ khi đơn hoàn thành (hoặc sớm hơn theo yêu cầu).",
          "Có thể ký hợp đồng bảo mật riêng cho tài liệu doanh nghiệp, pháp lý, y tế."
        ]) + "Xem thêm: " + link("/blog/bao-mat-khi-thue-ngoai-danh-may", "5 câu hỏi về bảo mật khi thuê ngoài") + ".";
      }, next: ["doanh-nghiep"] },

    { id: "ocr-ai", title: "Có dùng OCR/AI không?", keys: ["ocr", "ai", "may doc", "phan mem", "nguoi that", "tu dong", "chatgpt"],
      a: function () { return "Mọi tài liệu do <b>người thật gõ</b> và biên tập viên kiểm tra. Máy (OCR/AI) hay sai với chữ viết tay, dấu tiếng Việt trên ảnh mờ, bảng biểu, công thức và lỗi của máy thường “trông rất hợp lý” nên khó phát hiện. Đọc thêm: " + link("/blog/ai-ocr-co-thay-the-nguoi-danh-may", "AI và OCR có thay thế người đánh máy?") + "."; },
      next: ["chat-luong"] },

    { id: "viet-tay", title: "Chữ viết tay khó đọc", keys: ["viet tay", "chu xau", "kho doc", "nhoe", "mo", "gach xoa", "chu tay"],
      a: function () {
        return "Chúng tôi chuyên chữ viết tay, kể cả chữ khó đọc, bản photo mờ, có gạch xóa." + ul([
          "Chữ không chắc chắn được đánh dấu <b>[?]</b> hoặc <b>[không rõ]</b> để bạn xác nhận.",
          "Tên riêng, thuật ngữ chuyên ngành: gửi kèm danh sách trong phần Hướng dẫn giúp chính xác hơn.",
          "Phần gạch xóa: mặc định bỏ; nếu cần giữ (ví dụ bản thảo, hồi ký), hãy ghi rõ."
        ]) + "Phụ phí viết tay sang Word: +" + pct(typeK(R, "hand-word")) + "%.";
      }, next: ["tep", "tinh-gia"] },

    { id: "cong-thuc", title: "Công thức Toán - Lý - Hóa", keys: ["cong thuc", "mon toan", "toan hoc", "de toan", "hoa hoc", "vat ly", "equation", "mathtype", "phuong trinh", "de thi", "chi so", "tich phan", "ma tran"],
      a: function () {
        return ul([
          "Gõ bằng <b>Equation</b> của Word (mặc định) hoặc <b>MathType</b>/<b>LaTeX</b> theo yêu cầu - ghi rõ trong phần Hướng dẫn.",
          "Chuẩn trình bày: biến nghiêng, hàm và đơn vị đứng, chỉ số trên/dưới đúng vị trí, ký hiệu nguyên tố đứng.",
          "Hình vẽ, đồ thị, sơ đồ mạch: vẽ lại dạng vector; bảng biến thiên dựng bằng bảng hoặc TikZ.",
          "Đề trắc nghiệm: định dạng “Câu N.”, phương án A. B. C. D. sẵn sàng để trộn đề."
        ]) + "Phụ phí công thức: +" + pct(typeK(R, "equation")) + "%, LaTeX: +" + pct(typeK(R, "latex")) + "%. Tham khảo " + link("/blog/so-hoa-de-thi-toan", "quy trình số hóa đề thi") + ".";
      }, next: ["latex", "tinh-gia"] },

    { id: "latex", title: "Đánh máy LaTeX", keys: ["latex", "overleaf", "tex", "tikz", "beamer", "bai bao", "bibtex"],
      a: function () { return "Chúng tôi gõ <b>LaTeX</b> từ viết tay, PDF hoặc Word: công thức, bảng, hình TikZ, trích dẫn BibTeX, theo mẫu của tạp chí/trường nếu bạn gửi kèm (tệp .cls/.sty). Bàn giao dự án biên dịch được (tệp .tex + hình + PDF), mở được trên Overleaf. Phụ phí LaTeX: +" + pct(typeK(R, "latex")) + "%. " + link("/dich-vu/danh-may-latex", "Xem dịch vụ LaTeX") + "."; },
      next: ["cong-thuc", "tinh-gia"] },

    { id: "chuyen-am", title: "Chuyển âm (ghi âm → văn bản)", keys: ["chuyen am", "ghi am", "audio", "video", "phong van", "hoi thao", "bang ghi", "mp3", "giong noi", "transcribe"],
      a: function () {
        return ul([
          "Nhận MP3, WAV, M4A, MP4, liên kết YouTube/Drive; tính theo <b>phút âm thanh</b>.",
          "Tiếng Việt ba miền và tiếng Anh; nhiều người nói: +" + pct(T.speakers[1].k) + "%, phân biệt từng người nói.",
          "<b>Nguyên văn</b> (giữ ừm, à, ngập ngừng): +" + extraPct(T, "verbatim") + "%; <b>mốc thời gian</b> [00:01:23]: +" + extraPct(T, "timestamps") + "%.",
          "Đoạn không nghe rõ được đánh dấu <b>[không rõ 00:12:05]</b> để bạn nghe lại.",
          "Làm phụ đề <b>.srt</b> cho video YouTube, TikTok."
        ]) + "Mẹo: ghi âm gần người nói, tránh quạt/điều hòa. Nghe thử mẫu tại " + link("/mau", "Bài mẫu") + ".";
      }, next: ["phu-de", "tinh-gia"] },

    { id: "phu-de", title: "Làm phụ đề SRT", keys: ["phu de", "srt", "sub", "subtitle", "youtube", "tiktok", "caption"],
      a: function () { return "Phụ đề .srt chuẩn: tối đa khoảng 42 ký tự/dòng, 2 dòng/khung, ngắt theo cụm nghĩa, căn thời gian khớp lời nói, lưu UTF-8. Bàn giao tệp .srt tải thẳng lên YouTube/Facebook. Xem " + link("/blog/lam-phu-de-srt-chuan", "hướng dẫn phụ đề chuẩn") + "."; },
      next: ["chuyen-am"] },

    { id: "excel", title: "Nhập liệu sang Excel", keys: ["excel", "nhap lieu", "bang tinh", "phieu khao sat", "so sach", "data entry", "csv"],
      a: function () { return "Chuyển PDF, ảnh, sổ sách, phiếu khảo sát sang <b>Excel</b>: mỗi cột một loại dữ liệu, định dạng ngày/số thống nhất, giữ số 0 đầu của mã số, đối chiếu tổng. Phiếu khảo sát được mã hóa theo quy ước bạn cung cấp. Phụ phí: PDF sang Excel +" + pct(typeK(R, "pdf-excel")) + "%, viết tay sang Excel +" + pct(typeK(R, "hand-excel")) + "%."; },
      next: ["tinh-gia", "doanh-nghiep"] },

    { id: "dinh-dang", title: "Định dạng luận văn, biên tập", keys: ["dinh dang", "luan van", "trinh bay", "muc luc", "can le", "bien tap", "hieu dinh", "khoa luan", "do an", "nghi dinh 30"],
      a: function () {
        return ul([
          "<b>Định dạng tài liệu</b> (+" + extraPct(R, "format") + "%): Heading, mục lục tự động, đánh số trang La Mã - Ả Rập, danh mục bảng/hình, trích dẫn APA/IEEE, theo mẫu của trường hoặc Nghị định 30 với văn bản hành chính.",
          "<b>Biên tập, hiệu đính</b> (+" + extraPct(R, "edit") + "%): rà chính tả, ngữ pháp, diễn đạt, tính nhất quán."
        ]) + "Gửi kèm mẫu/quy định của trường để làm đúng. Tham khảo " + link("/blog/dinh-dang-luan-van-chuan", "định dạng luận văn chuẩn") + ".";
      }, next: ["tinh-gia", "tep-tra"] },

    { id: "dich-thuat", title: "Dịch thuật", keys: ["dich", "dich thuat", "cong chung", "tieng anh", "song ngu", "translate", "ban dich"],
      a: function () {
        return "Đánh máy 247 <b>không cung cấp dịch vụ dịch thuật</b>, nhưng hỗ trợ khâu chuẩn bị giúp bản dịch nhanh, rẻ và chính xác hơn:" + ul([
          "Đánh máy bản gốc (scan, viết tay) giữ nguyên văn, ghi chú [Dấu], [Chữ ký] - sẵn sàng gửi đơn vị dịch.",
          "Định dạng bản dịch song ngữ bạn cung cấp (hai cột, xen kẽ đoạn)."
        ]) + "Đọc thêm: " + link("/blog/danh-may-ban-goc-truoc-khi-dich", "vì sao nên đánh máy bản gốc trước khi dịch") + ", " + link("/blog/chuan-bi-ho-so-dich-thuat-cong-chung", "checklist hồ sơ dịch công chứng") + ".";
      }, next: ["tep", "dinh-dang"] },

    { id: "ma-giam-gia", title: "Mã giảm giá", keys: ["ma giam", "khuyen mai", "giam gia", "uu dai", "voucher", "coupon", "sinh vien"],
      a: function () {
        return "Mã đang áp dụng (nhập ở ô <b>Mã giảm giá</b> khi đặt hàng):" + ul(Object.keys(P.promos).map(function (k) { return "<b>" + k + "</b>: " + P.promos[k].note; })) + "Mỗi đơn dùng một mã.";
      }, next: ["tinh-gia", "dat-hang"] },

    { id: "hoa-don", title: "Hóa đơn, chứng từ", keys: ["hoa don", "vat", "chung tu", "xuat hoa don", "hop dong", "thanh ly"],
      a: function () { return "Bạn có thể in/lưu PDF thông tin đơn hàng ngay trong trang đơn (nút <b>In/Lưu PDF</b>). Doanh nghiệp cần hợp đồng hoặc chứng từ thanh toán, vui lòng ghi rõ thông tin công ty trong phần Hướng dẫn hoặc liên hệ " + link("mailto:" + S.email, S.email) + " để được hỗ trợ trước khi đặt hàng."; },
      next: ["doanh-nghiep"] },

    { id: "doanh-nghiep", title: "Doanh nghiệp, đơn số lượng lớn", keys: ["doanh nghiep", "cong ty", "so luong lon", "lau dai", "hang nghin", "luu tru", "so hoa ho so", "bao gia rieng"],
      a: function () { return "Dự án số hóa hàng nghìn trang, hồ sơ lưu trữ, nhập liệu định kỳ: chúng tôi lập kế hoạch theo lô, thống nhất quy tắc đặt tên tệp, ký hợp đồng bảo mật và báo giá riêng. Gửi mô tả và vài trang mẫu qua " + link("/lien-he", "trang Liên hệ") + " hoặc email " + link("mailto:" + S.email, S.email) + "."; },
      next: ["bao-mat", "hoa-don"] },

    { id: "doi-tac", title: "Chương trình đối tác 30%", keys: ["doi tac", "affiliate", "hoa hong", "gioi thieu khach", "cong tac vien", "photocopy", "tiem photo", "ma gioi thieu", "ref"],
      a: function () { return "Cửa hàng photocopy, văn phòng phẩm, cộng tác viên giới thiệu khách nhận <b>" + Math.round(aff.rate * 100) + "% giá trị mỗi đơn hoàn thành</b>. Đăng ký miễn phí, nhận mã QR in poster, theo dõi từng đơn; chi trả ngày " + aff.payoutDay + " hằng tháng. " + link("/doi-tac", "Tìm hiểu") + " · " + link("/dang-ky-doi-tac", "Đăng ký ngay") + ". Khách có mã giới thiệu: nhập ở ô <b>Mã giới thiệu</b> khi đặt hàng."; },
      next: ["dat-hang"] },

    { id: "lien-he", title: "Liên hệ, giờ làm việc", keys: ["lien he", "hotline", "so dien thoai", "zalo", "email", "gio lam", "goi", "tu van", "nhan vien tu van", "gap nguoi"],
      a: function () { return "Hỗ trợ <b>24/7</b> qua:" + ul(["Hotline/Zalo: " + link("tel:" + S.phoneHref, S.phone), "Email: " + link("mailto:" + S.email, S.email), "Tin nhắn trong trang đơn hàng (phản hồi nhanh nhất cho đơn đã đặt)"]) + "Gửi trước vài trang mẫu để nhận báo giá chính xác trong khoảng 15 phút."; },
      next: ["dat-hang", "bang-gia"] }
  ];
  var byId = {};
  T_.forEach(function (t) { t.nkeys = t.keys.map(norm); byId[t.id] = t; });

  /* ---------- Tính giá từ câu hỏi: "giá 20 trang 3 ngày", "45 phút ghi âm 2 người 24h" ---------- */
  function quote(q) {
    var n = norm(q);
    var mQty = n.match(/(\d+)\s*(trang|tr\b|page|phut|p\b)/);
    if (!mQty) return null;
    var qty = +mQty[1], audio = /^(phut|p)/.test(mQty[2]) || /ghi am|chuyen am|audio|video/.test(n);
    var svcKey = audio ? "transcription" : "retyping", svc = P[svcKey];
    var urg = null, mH = n.match(/(\d+)\s*(gio|h)\b/), mD = n.match(/(\d+)\s*ngay/);
    if (mH) urg = mH[1] + "h"; else if (mD) urg = mD[1] + "d";
    if (!urg || !svc.base[urg]) urg = audio ? "3d" : "3d";
    var type = audio ? (/phong van|hoi thao/.test(n) ? "interview" : "audio-text")
      : /latex/.test(n) ? "latex" : /cong thuc|toan|hoa|ly/.test(n) ? "equation" : /excel/.test(n) ? (/viet tay/.test(n) ? "hand-excel" : "pdf-excel") : /viet tay/.test(n) ? "hand-word" : "pdf-word";
    var speakers = /2 nguoi|nhieu nguoi|hai nguoi|[2-9] nguoi noi/.test(n) ? "2" : "1";
    var extras = [];
    if (audio && /moc thoi gian|timestamp/.test(n)) extras.push("timestamps");
    if (audio && /nguyen van/.test(n)) extras.push("verbatim");
    if (!audio && /dinh dang/.test(n)) extras.push("format");
    if (!audio && /bien tap|hieu dinh/.test(n)) extras.push("edit");
    var r = DM.calcPrice({ service: svcKey, type: type, urgency: urg, qty: qty, speakers: speakers, extras: extras });
    if (!r) return null;
    var t = svc.types.find(function (x) { return x.key === type; });
    var dl = DM.deadline(DM.urgency(urg).hours);
    var q2 = "service=" + svcKey + "&type=" + type + "&urgency=" + urg + "&qty=" + qty;
    return "<b>Báo giá nhanh</b>" + ul([
      "Dịch vụ: " + (audio ? "Chuyển âm" : "Đánh máy lại") + " - " + t.label + (audio ? " · " + (speakers === "2" ? "2 người nói trở lên" : "1 người nói") : ""),
      "Khối lượng: <b>" + qty + " " + svc.unit + "</b> · Thời hạn: <b>" + urgLabel(urg) + "</b> (dự kiến " + DM.dateLabel(dl) + " nếu thanh toán ngay)",
      "Đơn giá: " + fmt(r.unitPrice) + "/" + svc.unit + (r.extrasPct ? " · bổ sung +" + r.extrasPct + "%" : ""),
      "Tạm tính: <b style=\"color:var(--red)\">" + fmt(r.total) + "</b> (chưa áp mã giảm giá)"
    ]) + link("/dat-hang?" + q2, "→ Đặt hàng với cấu hình này") + "<br><small>Đổi thời hạn: thêm “6 giờ”, “24 giờ”, “7 ngày”… vào câu hỏi.</small>";
  }

  /* ---------- Tìm câu trả lời ---------- */
  function score(t, n) {
    var s = 0;
    t.nkeys.forEach(function (k) {
      var re = new RegExp("(^|[^a-z0-9])" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z0-9]|$)");
      if (re.test(n)) s += 2 + k.split(" ").length;
    });
    return s;
  }
  function faqSearch(n) {
    var words = n.split(" ").filter(function (w) { return w.length > 2; });
    var best = null, bs = 0;
    (DM.faq || []).forEach(function (f) {
      var hay = norm(f.q + " " + f.a.replace(/<[^>]+>/g, " "));
      var s = words.filter(function (w) { return hay.indexOf(w) > -1; }).length;
      if (s > bs) { bs = s; best = f; }
    });
    return bs >= 2 ? best : null;
  }
  function answer(q) {
    var n = norm(q);
    if (!n) return null;
    var orderId = q.toUpperCase().match(/DM\s?\d{6}/);
    if (orderId) return { html: "Đơn <b>" + orderId[0].replace(/\s/, "") + "</b>: mở liên kết “Xem đơn hàng” trong email xác nhận, hoặc đăng nhập tại " + link("/tai-khoan", "Tài khoản") + " bằng email đã đặt để xem tiến độ và nhắn tin trực tiếp với chuyên viên phụ trách.", next: ["theo-doi", "chinh-sua"] };
    if (/^(xin )?chao|^hello|^hi\b|^alo|^ad oi|^shop oi/.test(n)) return { html: "Chào bạn! 👋 Bạn cần đánh máy, chuyển âm hay định dạng tài liệu? Chọn một chủ đề bên dưới hoặc gõ câu hỏi, ví dụ <i>“giá 15 trang viết tay 24 giờ”</i>.", next: ["dat-hang", "bang-gia", "thoi-han", "cong-thuc"] };
    if (/cam on|thanks|tks|thank/.test(n)) return { html: "Rất vui được hỗ trợ bạn! Chúc bạn một ngày tốt lành 😊", next: ["dat-hang"] };
    if (/(gia|bao nhieu|tinh|bao gia|het bao nhieu)/.test(n) || /^\d+\s*(trang|phut)/.test(n)) {
      var qt = quote(q);
      if (qt) return { html: qt, next: ["ma-giam-gia", "thoi-han", "dat-hang"] };
    }
    var ranked = T_.map(function (t) { return { t: t, s: score(t, n) }; }).filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; });
    if (ranked.length) {
      var top = ranked[0].t;
      var also = ranked.slice(1, 3).map(function (x) { return x.t.id; });
      return { html: top.a(), next: (top.next || []).concat(also).filter(function (v, i, a) { return a.indexOf(v) === i && v !== top.id; }).slice(0, 4) };
    }
    var f = faqSearch(n);
    if (f) return { html: "<b>" + f.q + "</b><br>" + f.a, next: ["lien-he", "dat-hang"] };
    return null;
  }

  DM.chatKb = {
    answer: answer,
    topic: function (id) { var t = byId[id]; return t ? { html: t.a(), next: t.next || [] } : null; },
    title: function (id) { return byId[id] ? byId[id].title : id; },
    menu: ["dat-hang", "bang-gia", "thoi-han", "thanh-toan", "theo-doi", "cong-thuc", "chuyen-am", "bao-mat", "chinh-sua", "doi-tac"],
    all: T_.map(function (t) { return t.id; })
  };
})();
