/* =========================================================
   Đánh máy 247 - Dữ liệu dùng chung (giá, dịch vụ, nội dung)
   Chỉnh sửa giá/nội dung tại đây, toàn bộ trang sẽ tự cập nhật.
   ========================================================= */
window.DM = window.DM || {};

DM.site = {
  name: "Đánh máy 247",
  domain: "danhmay247.com",
  email: "trungtamdanhmay247@gmail.com",
  phone: "0988 058 030",
  phoneHref: "0988058030",
  zalo: "0988058030",
  address: "", // điền địa chỉ văn phòng nếu muốn hiển thị trên trang Liên hệ
  owner: "VietSCI Editing Services",
  tagline: "Đánh máy 247 - Sản phẩm của VietSCI Editing Services",
  bank: {
    name: "Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh (HDBank)",
    shortName: "HDBank",
    bin: "970437", // mã BIN VietQR của HDBank
    account: "3995588999",
    holder: "CONG TY TNHH VIETSCI EDITING SERVICES"
  }
};

/* ---------- Thời hạn ---------- */
DM.urgencies = [
  { key: "6h", label: "6 giờ", hours: 6 },
  { key: "12h", label: "12 giờ", hours: 12 },
  { key: "24h", label: "24 giờ", hours: 24 },
  { key: "48h", label: "48 giờ", hours: 48 },
  { key: "3d", label: "3 ngày", hours: 72 },
  { key: "5d", label: "5 ngày", hours: 120 },
  { key: "7d", label: "7 ngày", hours: 168 },
  { key: "10d", label: "10 ngày", hours: 240 },
  { key: "14d", label: "14 ngày", hours: 336 },
  { key: "30d", label: "30 ngày", hours: 720 }
];

/* ---------- Bảng giá (VNĐ) ---------- */
DM.prices = {
  retyping: { // đơn giá / trang
    unit: "trang",
    base: { "6h": 45000, "12h": 36000, "24h": 33000, "48h": 32000, "3d": 29000, "5d": 26000, "7d": 24000, "10d": 23000, "14d": 22000, "30d": 19000 },
    types: [
      { key: "pdf-word", label: "PDF sang Word", k: 1 },
      { key: "img-word", label: "Ảnh (PNG/JPEG) sang Word", k: 1 },
      { key: "hand-word", label: "Viết tay sang Word", k: 1.15 },
      { key: "pdf-excel", label: "PDF sang Excel", k: 1.16 },
      { key: "hand-excel", label: "Viết tay sang Excel", k: 1.3 },
      { key: "excel-word", label: "Excel sang Word", k: 1.05 },
      { key: "word-excel", label: "Word sang Excel", k: 1.1 },
      { key: "survey-word", label: "Phiếu khảo sát sang Word/Excel", k: 1.1 },
      { key: "equation", label: "Công thức toán/hóa học", k: 1.5 },
      { key: "latex", label: "Đánh máy LaTeX", k: 1.6 },
      { key: "png-html", label: "Ảnh sang HTML", k: 1.4 }
    ],
    extras: [
      { key: "format", label: "Tôi cần <b>định dạng tài liệu</b>", pct: 10, tip: "Căn lề, tiêu đề, mục lục, bảng biểu, đầu/chân trang theo yêu cầu hoặc giống bản gốc." },
      { key: "edit", label: "Tôi cần <b>biên tập, hiệu đính</b>", pct: 20, tip: "Biên tập viên rà soát chính tả, ngữ pháp, diễn đạt và tính nhất quán của văn bản." }
    ]
  },
  transcription: { // đơn giá/phút
    unit: "phút",
    base: { "6h": 35000, "12h": 28000, "24h": 25000, "48h": 24000, "3d": 22000, "5d": 20000, "7d": 18000, "10d": 17000 },
    types: [
      { key: "audio-text", label: "Âm thanh sang văn bản", k: 1 },
      { key: "video-text", label: "Video sang văn bản", k: 1 },
      { key: "interview", label: "Phỏng vấn/Hội thảo/Tọa đàm", k: 1.1 },
      { key: "subtitle", label: "Làm phụ đề (SRT) cho video", k: 1.2 }
    ],
    speakers: [
      { key: "1", label: "1 người nói", k: 1 },
      { key: "2", label: "2 người nói trở lên", k: 1.08 }
    ],
    extras: [
      { key: "verbatim", label: "Chuyển âm <b>nguyên văn</b>", pct: 10, tip: "Giữ lại toàn bộ từ đệm, ngập ngừng, tiếng cười, khoảng lặng…" },
      { key: "timestamps", label: "Gắn <b>mốc thời gian</b>", pct: 10, tip: "Chèn mốc thời gian [00:01:23] theo từng đoạn hoặc từng lượt nói." }
    ]
  },
  popular: "3d",
  promos: {
    DANHMAY10: { pct: 10, note: "Giảm 10% cho mọi đơn hàng" },
    KHACHMOI: { pct: 15, note: "Giảm 15% cho khách hàng mới" },
    SINHVIEN: { pct: 12, note: "Ưu đãi 12% cho học sinh, sinh viên" }
  }
};

DM.docTypes = ["Chung", "Học thuật/Luận văn", "Pháp lý/Hợp đồng", "Y tế", "Kinh doanh/Tài chính", "Kỹ thuật/CNTT", "Sách/Bản thảo", "Thư từ/Ghi chú cá nhân"];

/* ---------- Tính giá ---------- */
DM.calcPrice = function (o) {
  var svc = DM.prices[o.service];
  if (!svc) return null;
  var base = svc.base[o.urgency];
  if (!base) return null;
  var type = svc.types.find(function (t) { return t.key === o.type; }) || svc.types[0];
  var unitPrice = base * type.k;
  if (o.service === "transcription") {
    var sp = svc.speakers.find(function (s) { return s.key === o.speakers; }) || svc.speakers[0];
    unitPrice *= sp.k;
  }
  var qty = Math.max(1, parseInt(o.qty, 10) || 1);
  unitPrice = Math.round(unitPrice / 100) * 100; // đơn giá làm tròn 100đ để tổng = đơn giá × số lượng
  var subtotal = unitPrice * qty;
  var extrasPct = 0;
  (o.extras || []).forEach(function (k) {
    var ex = svc.extras.find(function (e) { return e.key === k; });
    if (ex) extrasPct += ex.pct;
  });
  var round = function (n) { return Math.round(n / 100) * 100; };
  var withExtras = round(subtotal * (1 + extrasPct / 100));
  var promo = o.promo && DM.prices.promos[o.promo];
  var discount = promo ? round(withExtras * promo.pct / 100) : 0;
  return {
    unitPrice: unitPrice,
    subtotal: subtotal,
    extrasPct: extrasPct,
    beforeDiscount: withExtras,
    discount: discount,
    total: withExtras - discount,
    unit: svc.unit
  };
};

/* ---------- Dịch vụ chi tiết (trang /dich-vu/...) ---------- */
DM.services = {
  "pdf-sang-word": { title: "Chuyển PDF sang Word", service: "retyping", type: "pdf-word", icon: ["PDF", "#ff6b5b"],
    intro: "Đánh máy lại thủ công mọi tệp PDF - kể cả bản scan mờ, có dấu mộc, chữ ký hay hình mờ - thành tệp Word chỉnh sửa được, giữ nguyên bố cục gốc.",
    points: ["Giữ nguyên định dạng, bảng biểu, chú thích và đánh số trang", "Xử lý tốt bản scan chất lượng thấp mà phần mềm OCR bỏ sót", "Kiểm tra lại 100% bởi biên tập viên trước khi giao", "Bàn giao định dạng .docx, Google Docs hoặc .odt theo yêu cầu"] },
  "viet-tay-sang-word": { title: "Chuyển chữ viết tay sang Word", service: "retyping", type: "hand-word", icon: ["✍", "#f3a33b"],
    intro: "Ghi chép, nhật ký, thư tay, biên bản họp viết vội… đội ngũ của chúng tôi đọc và gõ lại chính xác từng chữ, kể cả nét chữ khó đọc.",
    points: ["Đánh dấu rõ những từ không đọc được thay vì tự đoán", "Giữ nguyên chính tả gốc hoặc chuẩn hóa theo yêu cầu", "Phù hợp với tài liệu gia phả, hồi ký, ghi chép nghiên cứu", "Có thể kết hợp định dạng và biên tập"] },
  "anh-sang-word": { title: "Chuyển ảnh (PNG/JPEG) sang Word", service: "retyping", type: "img-word", icon: ["IMG", "#6c8cff"],
    intro: "Ảnh chụp điện thoại, ảnh màn hình, ảnh tài liệu cũ - chúng tôi chuyển tất cả thành văn bản Word sạch đẹp, dễ chỉnh sửa.",
    points: ["Nhận ảnh nghiêng, thiếu sáng, độ phân giải thấp", "Gộp nhiều ảnh thành một tài liệu thống nhất", "Giữ bảng biểu, danh sách, tiêu đề", "Bảo mật tuyệt đối hình ảnh của bạn"] },
  "word-sang-excel": { title: "Chuyển Word/PDF sang Excel", service: "retyping", type: "word-excel", icon: ["XLS", "#1d7a45"],
    intro: "Nhập liệu từ văn bản, phiếu in, hóa đơn, danh sách sang bảng tính Excel có cấu trúc, sẵn sàng lọc, sắp xếp và tính toán.",
    points: ["Thiết kế cột, kiểu dữ liệu theo nhu cầu", "Kiểm tra chéo số liệu hai lần", "Có thể thêm công thức, định dạng có điều kiện", "Phù hợp cho kế toán, kho vận, khảo sát"] },
  "danh-may-sach": { title: "Đánh máy sách", service: "retyping", type: "pdf-word", icon: ["📖", "#2d3078"],
    intro: "Số hóa sách in, sách cũ, sách viết tay thành bản thảo điện tử hoàn chỉnh để tái bản, xuất bản điện tử hoặc lưu trữ.",
    points: ["Giữ chương mục, chú thích cuối trang, mục lục", "Hỗ trợ sách nhiều trăm trang với tiến độ rõ ràng", "Nhận chữ Hán Nôm, tiếng Pháp, tiếng Anh xen kẽ", "Bàn giao từng phần để bạn duyệt sớm"] },
  "danh-may-latex": { title: "Đánh máy LaTeX", service: "retyping", type: "latex", icon: ["TeX", "#008080"],
    intro: "Soạn thảo bài báo khoa học, luận văn, giáo trình toán – lý bằng LaTeX chuẩn, biên dịch sạch lỗi, sẵn sàng nộp tạp chí.",
    points: ["Thành thạo amsmath, TikZ, BibTeX, beamer", "Theo đúng template của tạp chí/trường", "Bàn giao mã nguồn .tex và bản PDF", "Kiểm tra từng công thức với bản gốc"] },
  "danh-may-ban-thao": { title: "Đánh máy bản thảo", service: "retyping", type: "hand-word", icon: ["✒", "#9b51e0"],
    intro: "Biến bản thảo viết tay hay đánh máy cũ của tiểu thuyết, hồi ký, kịch bản thành bản điện tử chuẩn trình bày xuất bản.",
    points: ["Trình bày theo chuẩn nhà xuất bản", "Giữ giọng văn và cách dùng từ của tác giả", "Có thể kèm hiệu đính chính tả", "Cam kết không sao chép, không phát tán"] },
  "bien-tap-tai-lieu": { title: "Biên tập, hiệu đính tài liệu", service: "retyping", type: "pdf-word", extras: ["edit"], icon: ["✔", "#3bb54a"],
    intro: "Rà soát chính tả, ngữ pháp, dấu câu, tính mạch lạc và nhất quán thuật ngữ - giúp văn bản của bạn chuyên nghiệp và dễ đọc hơn.",
    points: ["Biên tập viên có chuyên môn theo lĩnh vực", "Theo dõi thay đổi (Track Changes) minh bạch", "Góp ý cấu trúc và cách diễn đạt", "Chuẩn hóa trích dẫn APA, IEEE, Harvard…"] },
  "danh-may-cong-thuc": { title: "Đánh máy công thức, phương trình", service: "retyping", type: "equation", icon: ["∑", "#d03c3f"],
    intro: "Gõ lại công thức toán, lý, hóa bằng Equation Editor/MathType hoặc LaTeX, chính xác đến từng chỉ số và ký hiệu.",
    points: ["Hỗ trợ Word Equation, MathType, LaTeX", "Đánh số và tham chiếu phương trình", "Vẽ lại sơ đồ, đồ thị đơn giản", "Phù hợp đề thi, giáo án, bài báo"] },
  "danh-may-hoc-thuat": { title: "Đánh máy tài liệu học thuật", service: "retyping", type: "pdf-word", icon: ["🎓", "#2d3078"],
    intro: "Luận văn, khóa luận, bài giảng, đề cương, tài liệu tham khảo - trình bày đúng quy định của trường và hội đồng.",
    points: ["Định dạng theo quy chuẩn từng trường", "Tạo mục lục, danh mục bảng/hình tự động", "Trích dẫn và tài liệu tham khảo chuẩn", "Bảo mật nội dung nghiên cứu"] },
  "danh-may-van-ban-phap-ly": { title: "Đánh máy văn bản pháp lý", service: "retyping", type: "pdf-word", icon: ["⚖", "#7a4b2a"],
    intro: "Hợp đồng, bản án, hồ sơ tố tụng, biên bản, quyết định - đánh máy chính xác thuật ngữ pháp lý, giữ nguyên thể thức văn bản.",
    points: ["Đúng thể thức văn bản hành chính (Nghị định 30/2020)", "Nhân sự ký cam kết bảo mật (NDA)", "Đối chiếu số liệu, ngày tháng, tên riêng hai lần", "Giao gấp từ 6 giờ"] },
  "dinh-dang-tai-lieu": { title: "Định dạng tài liệu", service: "retyping", type: "pdf-word", extras: ["format"], icon: ["¶", "#f24d50"],
    intro: "Chuẩn hóa font chữ, lề, giãn dòng, tiêu đề, mục lục, đầu/chân trang… để tài liệu trông chuyên nghiệp và nhất quán.",
    points: ["Áp dụng Styles để dễ chỉnh sửa về sau", "Mục lục, đánh số trang, ngắt phần tự động", "Chuẩn bị bản in hoặc bản PDF xuất bản", "Theo template thương hiệu của bạn"] },
  "anh-sang-html": { title: "Chuyển ảnh/PDF sang HTML", service: "retyping", type: "png-html", icon: ["</>", "#141a27"],
    intro: "Chuyển nội dung từ ảnh hoặc PDF thành trang HTML sạch, chuẩn ngữ nghĩa, sẵn sàng đưa lên website hoặc hệ thống CMS.",
    points: ["HTML5 ngữ nghĩa, dễ truy cập", "Bảng, danh sách, tiêu đề đúng cấp", "Không chèn mã rác, inline style", "Có thể xuất XML/Markdown"] },
  "wav-sang-van-ban": { title: "Chuyển WAV sang văn bản", service: "transcription", type: "audio-text", icon: ["WAV", "#6c8cff"],
    intro: "Ghi âm phỏng vấn, cuộc họp, bài giảng định dạng WAV được chuyển thành văn bản chính xác bởi người nghe thật, không dùng máy.",
    points: ["Phân biệt người nói rõ ràng", "Tùy chọn nguyên văn hoặc làm sạch", "Gắn mốc thời gian theo yêu cầu", "Nhận âm thanh nhiều tạp âm, giọng vùng miền"] },
  "m4a-sang-van-ban": { title: "Chuyển M4A sang văn bản", service: "transcription", type: "audio-text", icon: ["M4A", "#9b51e0"],
    intro: "File ghi âm từ iPhone, ứng dụng ghi âm hay Zoom (M4A) được gõ lại thành văn bản Word đầy đủ, dễ trích dẫn.",
    points: ["Hỗ trợ tiếng Việt ba miền và tiếng Anh", "Giao Word, Google Docs hoặc SRT", "Mốc thời gian chính xác đến giây", "Bảo mật tệp ghi âm tuyệt đối"] }
};

/* ---------- Thành phố phục vụ ---------- */
DM.cities = [
  "Hà Nội", "TP. Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Huế", "Nha Trang", "Đà Lạt",
  "Vũng Tàu", "Biên Hòa", "Bình Dương", "Long An", "Quy Nhơn", "Vinh", "Thanh Hóa", "Nam Định",
  "Bắc Ninh", "Hạ Long", "Thái Nguyên", "Buôn Ma Thuột", "Pleiku", "Phan Thiết", "Rạch Giá", "Long Xuyên",
  "Mỹ Tho", "Cà Mau", "Bạc Liêu", "Sóc Trăng", "Tây Ninh", "Quảng Ngãi", "Tam Kỳ", "Hội An",
  "Lào Cai", "Sơn La", "Điện Biên", "Ninh Bình"
];

/* ---------- Đánh giá mẫu ---------- */
DM.reviews = [
  { name: "Minh Tuấn", job: "Sinh viên", type: "Đánh máy lại", rating: 5, date: "2026-09-28", text: "Chữ viết tay của tôi rất khó đọc, nhiều chỗ còn nhòe mực, vậy mà các bạn vẫn gõ lại gần như hoàn hảo và giao rất nhanh. Quá hài lòng!" },
  { name: "Hoàng Bảo", job: "Trưởng phòng Marketing", type: "Chuyển âm", rating: 4, date: "2026-09-21", text: "Phản hồi nhanh, trao đổi với chuyên viên rất thuận tiện. Bản chuyển âm chính xác, chú ý đến từng chi tiết nhỏ. Cảm ơn dịch vụ tuyệt vời!" },
  { name: "Khánh Linh", job: "Chuyên viên nhân sự", type: "Đánh máy lại", rating: 5, date: "2026-09-15", text: "Tôi bất ngờ khi tài liệu được giao sớm hơn hạn 2 ngày, chất lượng đánh máy rất tốt. Chắc chắn sẽ giới thiệu cho đồng nghiệp." },
  { name: "Thu Hà", job: "Giáo viên", type: "Đánh máy lại", rating: 5, date: "2026-09-09", text: "Cảm ơn rất nhiều! Tôi không nghĩ người gõ có thể đọc nổi giáo án viết tay chữ nhỏ, lộn xộn của mình. Vậy mà kết quả rất gọn gàng, tôi chỉ việc chỉnh sửa thêm một chút là xong." },
  { name: "Quốc Phong", job: "Nhà báo", type: "Chuyển âm", rating: 4, date: "2026-08-30", text: "Chuyển âm nhanh và chính xác. Người phụ trách đơn rất chủ động hỏi lại những đoạn tên riêng chưa rõ. Lần sau tôi sẽ đặt tiếp." },
  { name: "Mai Anh", job: "Nhân viên kinh doanh", type: "Định dạng tài liệu", rating: 5, date: "2026-08-22", text: "Bộ hồ sơ thầu được định dạng lại rất chuyên nghiệp, mục lục, đánh số trang đều tự động. Đúng thứ tôi cần, lại còn sửa nhanh khi tôi góp ý." },
  { name: "Đức Anh", job: "Nghiên cứu viên", type: "Chuyển âm", rating: 5, date: "2026-08-14", text: "Bản ghi hội thảo có nhiều người nói, xen lẫn tiếng Anh và tiếng Việt, chủ đề lại chuyên sâu. Vậy mà các bạn vẫn chuyển âm rất chuẩn, có cả mốc thời gian." },
  { name: "Thanh Thảo", job: "Giáo viên", type: "Đánh máy LaTeX", rating: 4, date: "2026-08-03", text: "Đề thi toán với rất nhiều công thức được gõ lại bằng LaTeX gọn gàng, biên dịch không lỗi. Tiết kiệm cho tôi cả tuần làm việc." },
  { name: "Văn Long", job: "Cá nhân", type: "Đánh máy lại", rating: 5, date: "2026-07-27", text: "Bản gốc rất khó đọc nhưng việc gõ lại vẫn xong khá nhanh. Có chút nhầm lẫn tệp nhưng được xử lý ngay. Chuyển PDF sang Word trong 24 giờ, rất chuyên nghiệp!" },
  { name: "Ngọc Trâm", job: "Nhân viên văn phòng", type: "Định dạng tài liệu", rating: 5, date: "2026-07-18", text: "Làm việc nhanh, gọn, trình bày đẹp. Chắc chắn sẽ giới thiệu dịch vụ cho bạn bè 😀" },
  { name: "Gia Huy", job: "Chủ doanh nghiệp", type: "Đánh máy lại", rating: 4, date: "2026-07-05", text: "Cuốn gia phả viết tay của dòng họ được số hóa rất chính xác. Tôi đã in thành sách để tặng mọi người. Cảm ơn và mong hợp tác lâu dài." },
  { name: "Phương Nhi", job: "Sinh viên", type: "Đánh máy lại", rating: 5, date: "2026-06-29", text: "Rất hài lòng, bản đánh máy giống y hệt bản gốc. Đây là dịch vụ đánh máy nhanh nhất mà tôi từng dùng." }
];

/* ---------- Câu hỏi thường gặp ---------- */
DM.faq = [
  { cat: "Dịch vụ", q: "Các bạn cung cấp những dịch vụ đánh máy nào?", a: "<p>Chúng tôi chuyển ghi chép viết tay, PDF, bản scan, hình ảnh, giấy tờ đánh máy cũ, công văn… thành tài liệu Word chỉnh sửa được, trình bày gọn đẹp. Ngoài ra, chúng tôi còn chuyển âm mọi bản ghi âm, video sang văn bản với độ chính xác cao.</p>" },
  { cat: "Giá & thanh toán", q: "Báo giá đã bao gồm những gì?", a: "<p>Báo giá bao gồm loại dịch vụ tương ứng, khối lượng công việc (số trang/số phút), giao đúng hạn, cam kết chất lượng và sự khớp đúng của sản phẩm cuối cùng so với bản gốc. Không có phí ẩn.</p>" },
  { cat: "Đặt hàng", q: "Tôi gửi tệp đính kèm cho các bạn bằng cách nào?", a: "<p>Bạn có thể tải lên tối đa 6 tệp - từ PDF, JPEG đến MP3, WAV - ngay trên trang đặt hàng.</p><p>Nếu gặp sự cố, hãy tải tệp lên Google Drive, Dropbox hoặc dịch vụ lưu trữ đám mây bất kỳ rồi dán đường dẫn vào phần hướng dẫn. Bạn cũng có thể gửi tệp tới <a href=\"mailto:trungtamdanhmay247@gmail.com\">trungtamdanhmay247@gmail.com</a> và ghi chú trong phần hướng dẫn rằng tệp đã được gửi qua email.</p>" },
  { cat: "Đặt hàng", q: "Làm sao để tôi theo dõi đơn hàng?", a: "<p>Ngay sau khi thanh toán, bạn sẽ có quyền truy cập vào tài khoản cá nhân. Tại đó, bạn có thể trao đổi với người thực hiện đơn, liên hệ đội hỗ trợ và theo dõi tiến độ công việc một cách thuận tiện.</p><p>Khi có tin nhắn từ chuyên viên hoặc trạng thái đơn thay đổi (ví dụ từ “Đang thực hiện” sang “Hoàn thành”), chúng tôi sẽ tự động gửi thông báo qua email.</p>" },
  { cat: "Bảo mật", q: "Quyền riêng tư và bảo mật thông tin được đảm bảo thế nào?", a: "<p>Mục tiêu của Đánh máy 247 là xây dựng niềm tin với từng khách hàng. Chúng tôi tôn trọng quyền riêng tư và đảm bảo bảo mật trong suốt quá trình hợp tác.</p><p>Nhân viên đánh máy, thiết kế, biên tập của chúng tôi đều được đào tạo bài bản, tuân thủ quy tắc đạo đức nghề nghiệp và làm việc theo thỏa thuận bảo mật (NDA). Mọi thông tin bạn chia sẻ đều được giữ kín tuyệt đối.</p>" },
  { cat: "Dịch vụ", q: "Các bạn đảm bảo chất lượng dịch vụ ra sao?", a: "<p>Chúng tôi có đội ngũ chuyên viên với hơn 5 năm kinh nghiệm đánh máy thủ công và chuyển âm, cùng quy trình kiểm soát chất lượng nhiều bước.</p><p>Khi đã nhận hạn chót, chúng tôi sẽ giao đúng hạn. Nếu không đáp ứng được yêu cầu của bạn trong thời gian đã thỏa thuận, bạn sẽ được hoàn tiền.</p>" },
  { cat: "Hỗ trợ", q: "Đội hỗ trợ khách hàng làm việc vào giờ nào?", a: "<p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng qua điện thoại, email, Zalo và chat trực tuyến 24/7. Nếu có bất kỳ thắc mắc nào, đừng ngần ngại liên hệ với chúng tôi bất cứ lúc nào.</p>" },
  { cat: "Giá & thanh toán", q: "Tôi có thể thanh toán bằng những hình thức nào?", a: "<p>Chúng tôi nhận thanh toán bằng chuyển khoản qua mã VietQR vào tài khoản HDBank của công ty chủ quản VietSCI Editing Services. Bạn có thể quét mã bằng ứng dụng của bất kỳ ngân hàng nào, hoặc ví MoMo, ZaloPay. Số tiền và nội dung được điền sẵn, hệ thống tự động xác nhận khi nhận được tiền.</p>" },
  { cat: "Giá & thanh toán", q: "Một “trang” được tính như thế nào?", a: "<p>Một trang được tính theo trang của tài liệu gốc (một mặt giấy A4 hoặc tương đương). Với tài liệu có mật độ chữ quá dày (trên 500 từ/trang) hoặc khổ giấy lớn, chúng tôi sẽ báo giá lại trước khi bắt đầu và chỉ thực hiện khi bạn đồng ý.</p>" },
  { cat: "Dịch vụ", q: "Các bạn có dùng phần mềm OCR hay AI không?", a: "<p>Không. Toàn bộ tài liệu được gõ lại bởi con người. Chúng tôi chỉ dùng công cụ kiểm tra chính tả ở bước rà soát cuối cùng. Đó là lý do chúng tôi xử lý được cả chữ viết tay khó đọc và bản scan chất lượng thấp mà phần mềm thường bỏ sót.</p>" },
  { cat: "Đặt hàng", q: "Tôi có được yêu cầu chỉnh sửa miễn phí không?", a: "<p>Có. Trong vòng 14 ngày kể từ khi nhận tài liệu, bạn được yêu cầu chỉnh sửa miễn phí không giới hạn số lần, miễn là yêu cầu nằm trong phạm vi hướng dẫn ban đầu.</p>" },
  { cat: "Hỗ trợ", q: "Chính sách hoàn tiền như thế nào?", a: "<p>Nếu đơn hàng bị trễ hạn hoặc chất lượng không đạt cam kết và không thể khắc phục, bạn được hoàn tiền một phần hoặc toàn bộ. Yêu cầu hoàn tiền được xử lý trong vòng 3–5 ngày làm việc.</p>" }
];

/* ---------- Chương trình đối tác (affiliate) ----------
   rate: tỷ lệ hoa hồng trên giá trị đơn hoàn thành; cookieDays: số ngày ghi nhận khách sau khi bấm liên kết;
   minPayout: số dư tối thiểu để chi trả; payoutDay: ngày chi trả hằng tháng */
DM.affiliate = { rate: 0.3, cookieDays: 30, minPayout: 100000, payoutDay: 5 };
DM.affiliateFaq = [
  { q: "Ai có thể tham gia chương trình đối tác?", a: "Cửa hàng photocopy, in ấn, văn phòng phẩm, tiệm gần trường học, trung tâm gia sư, giáo viên, dịch vụ hành chính - bất kỳ ai thường xuyên gặp khách có nhu cầu đánh máy, chuyển âm, định dạng tài liệu. Tham gia miễn phí, không cần đặt cọc." },
  { q: "Hoa hồng 30% được tính như thế nào?", a: "Bạn nhận 30% giá trị mỗi đơn hàng mà khách bạn giới thiệu đặt và đã hoàn thành. Ví dụ đơn 500.000 đ hoàn thành → bạn nhận 150.000 đ. Đơn bị hủy hoặc hoàn tiền không tính hoa hồng." },
  { q: "Làm sao hệ thống biết khách do tôi giới thiệu?", a: "Mỗi đối tác có một mã giới thiệu và mã QR riêng. Khách quét QR hoặc bấm liên kết của bạn thì được ghi nhận trong 30 ngày; khách cũng có thể tự nhập mã của bạn ở trang đặt hàng." },
  { q: "Khi nào tôi nhận được tiền?", a: "Hoa hồng được duyệt ngay khi đơn hoàn thành. Chúng tôi chuyển khoản vào tài khoản ngân hàng bạn đăng ký vào ngày 5 hằng tháng khi số dư từ 100.000 đ. Mọi khoản chi trả đều hiện trong trang đối tác." },
  { q: "Tôi có phải tự đánh máy hay xử lý tài liệu không?", a: "Không. Bạn chỉ cần giới thiệu khách hoặc giúp khách quét mã QR. Khách đặt hàng, thanh toán và nhận tài liệu trực tiếp với Đánh máy 247; mọi việc đánh máy, kiểm tra, bảo mật do chúng tôi đảm nhận." },
  { q: "Tôi có xem được thông tin của khách không?", a: "Để bảo vệ quyền riêng tư của khách, trang đối tác chỉ hiển thị mã đơn, loại dịch vụ, giá trị đơn và hoa hồng - không hiển thị tên, email hay số điện thoại của khách." }
];

/* Bài viết blog: xem public/assets/js/posts.js */

/* ---------- Mẫu tài liệu trước / sau ---------- */
DM.samples = [
  {
    title: "Biên bản họp viết tay → Word", tags: ["Viết tay sang Word", "Định dạng"],
    desc: "Ghi chép viết vội trong cuộc họp, có gạch xóa và chèn chữ.",
    before: '<div class="doc-hand"><h6>Biên bản họp nhóm</h6><p>Ngày 12/9 - phòng họp tầng 3</p><p>Thành phần: Lan, Hùng, Minh, <span class="strike">Tú</span> Thảo</p><p>1. Rà soát tiến độ dự án Q3 → chậm 1 tuần do thiếu số liệu kho</p><p>2. Hùng phụ trách liên hệ nhà cung cấp trước thứ 6</p><p>3. Thống nhất ngân sách quảng cáo tháng 10: 45tr</p><p>4. Minh làm báo cáo tổng hợp gửi BGĐ</p><p>→ Họp lại ngày 19/9, 9h sáng</p><p style="text-align:right;margin-top:14px">Thư ký: Lan</p></div>',
    after: '<div class="doc-typed"><h6>Biên bản họp nhóm</h6><p><b>Thời gian:</b> Ngày 12/9 &nbsp;|&nbsp; <b>Địa điểm:</b> Phòng họp tầng 3</p><p><b>Thành phần:</b> Lan, Hùng, Minh, Thảo</p><p><b>Nội dung:</b></p><p>1. Rà soát tiến độ dự án Q3: chậm 1 tuần do thiếu số liệu kho.</p><p>2. Anh Hùng phụ trách liên hệ nhà cung cấp trước thứ Sáu.</p><p>3. Thống nhất ngân sách quảng cáo tháng 10: 45.000.000 đồng.</p><p>4. Anh Minh lập báo cáo tổng hợp gửi Ban Giám đốc.</p><p><b>Kết luận:</b> Họp lại vào 9h00 ngày 19/9.</p><p style="text-align:right;margin-top:14px"><i>Thư ký: Lan</i></p></div>'
  },
  {
    title: "Hợp đồng scan có mộc → Word", tags: ["PDF sang Word", "Pháp lý"],
    desc: "Bản scan mờ, có hình mờ và dấu mộc đè lên chữ.",
    before: '<div class="doc-scan"><div class="watermark">BẢN SAO</div><h6>HỢP ĐỒNG DỊCH VỤ</h6><p>Số: 15/2026/HĐDV</p><p>Hôm nay, ngày 05 tháng 9 năm 2026, tại TP.HCM, chúng tôi gồm:</p><p>BÊN A: CÔNG TY TNHH ABC</p><p>Đại diện: Ông Nguyễn Văn A - Giám đốc</p><p>BÊN B: CÔNG TY CP XYZ</p><p>Đại diện: Bà Trần Thị B - Phó Giám đốc</p><p>Điều 1. Nội dung dịch vụ: Bên B cung cấp dịch vụ số hóa 2.000 trang hồ sơ lưu trữ...</p><p>Điều 2. Giá trị hợp đồng: 58.000.000đ (Năm mươi tám triệu đồng)...</p><div class="stamp">ĐÃ KÝ</div></div>',
    after: '<div class="doc-typed"><h6>Hợp đồng dịch vụ</h6><p style="text-align:center">Số: 15/2026/HĐDV</p><p>Hôm nay, ngày 05 tháng 9 năm 2026, tại TP. Hồ Chí Minh, chúng tôi gồm:</p><p><b>BÊN A: CÔNG TY TNHH ABC</b><br>Đại diện: Ông Nguyễn Văn A - Chức vụ: Giám đốc</p><p><b>BÊN B: CÔNG TY CỔ PHẦN XYZ</b><br>Đại diện: Bà Trần Thị B - Chức vụ: Phó Giám đốc</p><p><b>Điều 1. Nội dung dịch vụ</b><br>Bên B cung cấp dịch vụ số hóa 2.000 trang hồ sơ lưu trữ…</p><p><b>Điều 2. Giá trị hợp đồng</b><br>58.000.000 đồng (Năm mươi tám triệu đồng)…</p></div>'
  },
  {
    title: "Bảng chi tiêu viết tay → Excel", tags: ["Viết tay sang Excel", "Bảng biểu"],
    desc: "Sổ ghi chép chi tiêu viết tay với nhiều con số.",
    before: '<div class="doc-hand"><h6>Chi tiêu tháng 9</h6><table><tr><td>2/9</td><td>Tiền nhà</td><td>4.500.000</td></tr><tr><td>5/9</td><td>Điện + nước</td><td>820.000</td></tr><tr><td>8/9</td><td>Đi chợ</td><td>1.250.000</td></tr><tr><td>12/9</td><td>Xăng xe</td><td>350.000</td></tr><tr><td>15/9</td><td>Học phí con</td><td>2.800.000</td></tr><tr><td>20/9</td><td>Internet</td><td>220.000</td></tr><tr><td>25/9</td><td>Hiếu hỉ</td><td>500.000</td></tr><tr><td></td><td><b>Tổng</b></td><td><b>10.440.000</b></td></tr></table></div>',
    after: '<div class="doc-typed"><h6>Chi tiêu tháng 9</h6><table><tr><th>Ngày</th><th>Khoản chi</th><th style="text-align:right">Số tiền (đ)</th></tr><tr><td>02/09</td><td>Tiền nhà</td><td style="text-align:right">4.500.000</td></tr><tr><td>05/09</td><td>Điện + nước</td><td style="text-align:right">820.000</td></tr><tr><td>08/09</td><td>Đi chợ</td><td style="text-align:right">1.250.000</td></tr><tr><td>12/09</td><td>Xăng xe</td><td style="text-align:right">350.000</td></tr><tr><td>15/09</td><td>Học phí con</td><td style="text-align:right">2.800.000</td></tr><tr><td>20/09</td><td>Internet</td><td style="text-align:right">220.000</td></tr><tr><td>25/09</td><td>Hiếu hỉ</td><td style="text-align:right">500.000</td></tr><tr><th colspan="2">Tổng cộng</th><th style="text-align:right">10.440.000</th></tr></table></div>'
  },
  {
    title: "Đề kiểm tra Toán viết tay → Word có công thức", tags: ["Công thức toán", "Đề thi"],
    desc: "Đề 15 phút giáo viên viết tay, có phân số, căn, số mũ và hình vẽ.",
    before: '<div class="doc-hand"><h6>Kiểm tra 15\' - Toán 10</h6><p>Câu 1 (4đ). Giải pt: √(2x + 3) = x</p><p>Câu 2 (3đ). Tìm tập xác định của hàm số</p><p style="padding-left:30px">y = (x² - 1)/(x - 3) + √(5 - x)</p><p>Câu 3 (3đ). Cho Δ ABC vuông tại A, AB = 6, AC = 8. Tính BC và sin B.</p><p style="text-align:right;margin-top:10px">- Hết -</p></div>',
    after: '<div class="doc-typed"><h6>Kiểm tra 15 phút - Toán 10</h6><p><b>Câu 1</b> <i>(4,0 điểm)</i>. Giải phương trình: √(2<i>x</i> + 3) = <i>x</i>.</p><p><b>Câu 2</b> <i>(3,0 điểm)</i>. Tìm tập xác định của hàm số</p><p style="text-align:center"><i>y</i> = <span style="display:inline-block;vertical-align:middle;text-align:center"><span style="display:block;border-bottom:1px solid #222;padding:0 4px"><i>x</i><sup>2</sup> − 1</span><span style="display:block"><i>x</i> − 3</span></span> + √(5 − <i>x</i>)</p><p><b>Câu 3</b> <i>(3,0 điểm)</i>. Cho tam giác <i>ABC</i> vuông tại <i>A</i>, có <i>AB</i> = 6 cm, <i>AC</i> = 8 cm. Tính <i>BC</i> và sin <i>B</i>.</p><p style="text-align:center;margin-top:10px">- HẾT -</p></div>'
  },
  {
    title: "Giáo án Hóa học → Word chuẩn chỉ số", tags: ["Công thức hóa học", "Giáo án"],
    desc: "Bản photo giáo án cũ: chỉ số, điện tích ion bị gõ ngang dòng, thiếu điều kiện phản ứng.",
    before: '<div class="doc-scan"><h6>BAI 12: AXIT SUNFURIC</h6><p>I. Tinh chat hoa hoc</p><p>1. H2SO4 loang:</p><p>Fe + H2SO4 = FeSO4 + H2</p><p>CuO + H2SO4 = CuSO4 + H2O</p><p>2. H2SO4 dac nong:</p><p>Cu + 2H2SO4 = CuSO4 + SO2 + 2H2O</p><p>Ion SO4 2- nhan biet bang Ba2+:</p><p>Ba2+ + SO4 2- = BaSO4 (ket tua trang)</p></div>',
    after: '<div class="doc-typed"><h6>Bài 12: Axit sunfuric</h6><p><b>I. Tính chất hóa học</b></p><p><b>1. H<sub>2</sub>SO<sub>4</sub> loãng</b></p><p style="text-align:center">Fe + H<sub>2</sub>SO<sub>4</sub> → FeSO<sub>4</sub> + H<sub>2</sub>↑</p><p style="text-align:center">CuO + H<sub>2</sub>SO<sub>4</sub> → CuSO<sub>4</sub> + H<sub>2</sub>O</p><p><b>2. H<sub>2</sub>SO<sub>4</sub> đặc, nóng</b></p><p style="text-align:center">Cu + 2H<sub>2</sub>SO<sub>4</sub> (đặc) <span style="display:inline-block;text-align:center;vertical-align:middle;line-height:1"><small style="display:block;font-size:10px">t°</small>→</span> CuSO<sub>4</sub> + SO<sub>2</sub>↑ + 2H<sub>2</sub>O</p><p><b>Nhận biết ion SO<sub>4</sub><sup>2−</sup></b> bằng Ba<sup>2+</sup>:</p><p style="text-align:center">Ba<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → BaSO<sub>4</sub>↓ (kết tủa trắng)</p></div>'
  },
  {
    title: "Phiếu khảo sát viết tay → bảng Excel", tags: ["Phiếu khảo sát", "Nhập liệu"],
    desc: "200 phiếu khảo sát giấy; mỗi phiếu thành một dòng, câu trả lời mã hóa thống nhất.",
    before: '<div class="doc-hand"><h6>Phiếu khảo sát số 087</h6><p>1. Giới tính: ☑ Nữ ☐ Nam</p><p>2. Tuổi: 21</p><p>3. Năm học: năm 3</p><p>4. Mỗi ngày dùng mạng XH: khoảng 3-4 tiếng</p><p>5. Mức độ hài lòng với thư viện (1-5): <b>④</b></p><p>6. Góp ý: <span class="strike">ít sách</span> nên mở cửa tới 9h tối, thêm ổ cắm sạc</p></div>',
    after: '<div class="doc-typed"><h6>Kết quả nhập liệu (trích)</h6><table><tr><th>Mã phiếu</th><th>Giới tính</th><th>Tuổi</th><th>Năm học</th><th>Giờ MXH/ngày</th><th>Hài lòng</th><th>Góp ý</th></tr><tr><td>087</td><td>Nữ</td><td>21</td><td>3</td><td>3-4</td><td>4</td><td>Mở cửa tới 21h; thêm ổ cắm sạc</td></tr><tr><td>088</td><td>Nam</td><td>20</td><td>2</td><td>1-2</td><td>3</td><td>Thêm chỗ ngồi nhóm</td></tr><tr><td>089</td><td>Nữ</td><td>22</td><td>4</td><td>&gt;4</td><td>5</td><td>-</td></tr></table><p style="font-size:11.5px;color:#666">Quy ước mã hóa và danh sách phiếu nghi vấn được gửi kèm để nhóm nghiên cứu đối chiếu.</p></div>'
  },
  {
    title: "Công văn cũ lỗi font TCVN3 → Unicode chuẩn Nghị định 30", tags: ["Sửa lỗi font", "Hành chính"],
    desc: "Tệp soạn bằng phông .VnTime mở trên máy mới hiện ký tự lạ; trình bày lại đúng thể thức.",
    before: '<div class="doc-scan" style="filter:none"><p>UBND X· B×nh Minh &nbsp;&nbsp;&nbsp;&nbsp; Céng hßa x· héi chñ nghÜa ViÖt Nam</p><p>Sè: 25/UBND-VP &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; §éc lËp - Tù do - H¹nh phóc</p><p>V/v tæ chøc tæng vÖ sinh m«i tr­êng</p><p>KÝnh göi: C¸c th«n trong x·</p><p>§Ó chµo mõng ngµy lÔ, UBND x· ®Ò nghÞ c¸c th«n tæ chøc tæng vÖ sinh vµo s¸ng chñ nhËt ngµy 20/10...</p></div>',
    after: '<div class="doc-typed"><table style="border:0"><tr><td style="border:0;text-align:center;width:40%"><b>UBND XÃ BÌNH MINH</b><br>Số: 25/UBND-VP<br><small>V/v tổ chức tổng vệ sinh môi trường</small></td><td style="border:0;text-align:center"><b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br><b><u>Độc lập - Tự do - Hạnh phúc</u></b><br><i>Bình Minh, ngày 15 tháng 10 năm 2026</i></td></tr></table><p style="text-align:center">Kính gửi: Các thôn trong xã.</p><p>Để chào mừng ngày lễ, Ủy ban nhân dân xã đề nghị các thôn tổ chức tổng vệ sinh môi trường vào sáng Chủ nhật, ngày 20/10/2026…</p><p style="font-size:11.5px;color:#666">Phông Unicode Times New Roman, cỡ 13-14, lề trái 30 mm theo Nghị định 30/2020/NĐ-CP.</p></div>'
  },
  {
    title: "Học bạ viết tay → bản đánh máy giữ nguyên văn để dịch thuật", tags: ["Chuẩn bị dịch thuật", "Giấy tờ"],
    desc: "Học bạ cũ chữ viết tay, có dấu đỏ và chữ ký - gõ nguyên văn, ghi chú vị trí dấu, chữ ký.",
    before: '<div class="doc-hand"><h6>Học bạ THCS - Lớp 9</h6><p>Họ tên: Nguyễn Hoàng Bảo Ng<span class="strike">ọ</span>c</p><p>Ngày sinh: 14/3/2010 &nbsp; Nơi sinh: Q. Hải Châu</p><table><tr><td>Toán</td><td>8,7</td><td>Ngữ văn</td><td>8,2</td></tr><tr><td>Tiếng Anh</td><td>9,4</td><td>Vật lí</td><td>8,0</td></tr></table><p>Xếp loại: Học lực Giỏi - Hạnh kiểm Tốt</p><p style="text-align:right">Hiệu trưởng (ký, đóng dấu)</p></div>',
    after: '<div class="doc-typed"><h6>Học bạ trung học cơ sở - Lớp 9</h6><p><b>Họ và tên:</b> Nguyễn Hoàng Bảo Ngọc &nbsp; <b>Ngày sinh:</b> 14/03/2010</p><p><b>Nơi sinh:</b> Quận Hải Châu</p><table><tr><th>Môn học</th><th>Điểm TB cả năm</th><th>Môn học</th><th>Điểm TB cả năm</th></tr><tr><td>Toán</td><td>8,7</td><td>Ngữ văn</td><td>8,2</td></tr><tr><td>Tiếng Anh</td><td>9,4</td><td>Vật lí</td><td>8,0</td></tr></table><p><b>Xếp loại:</b> Học lực: Giỏi - Hạnh kiểm: Tốt</p><p style="text-align:right"><b>HIỆU TRƯỞNG</b><br>[Chữ ký] [Dấu tròn đỏ của trường]</p><p style="font-size:11.5px;color:#666">Bản gõ giữ nguyên văn, sẵn sàng gửi đơn vị dịch thuật. Thông tin cá nhân trong mẫu là giả định.</p></div>'
  }
];

/* ---------- Mẫu chuyển âm có tiếng (đọc bằng giọng tiếng Việt của trình duyệt; nhân vật, nội dung giả định) ----------
   say: câu nói thực tế (văn nói, đọc thành tiếng) · text: bản chuyển âm đã biên tập · sp: người nói · v: giọng (0, 1, 2) */
DM.audioSamples = [
  {
    title: "Cuộc họp nhóm dự án (3 người) → biên bản", tags: ["Họp trực tuyến", "3 người nói", "Mốc thời gian"],
    desc: "Ghi âm họp trực tuyến: phân biệt từng người nói, lược từ đệm, giữ nguyên số liệu và hạn chót.",
    lines: [
      { ts: "00:00:03", sp: "Chị Lan (trưởng nhóm)", v: 0, say: "Rồi, mình bắt đầu nhé. Hôm nay mình chốt tiến độ tuần này với kế hoạch tuần sau.", text: "Mình bắt đầu nhé. Hôm nay chúng ta chốt tiến độ tuần này và kế hoạch tuần sau." },
      { ts: "00:00:09", sp: "Anh Minh", v: 1, say: "Dạ, phần khảo sát em xong được một trăm tám mươi phiếu rồi, còn khoảng hai mươi phiếu nữa thôi chị.", text: "Phần khảo sát em đã xong 180 phiếu, còn khoảng 20 phiếu nữa." },
      { ts: "00:00:17", sp: "Chị Thảo", v: 2, say: "Bên em nhập liệu Excel tới đâu thì gửi tới đó, thứ năm này em gửi bản tổng hợp đầu tiên.", text: "Bên em nhập liệu Excel đến đâu gửi đến đó; thứ Năm này em gửi bản tổng hợp đầu tiên." },
      { ts: "00:00:25", sp: "Chị Lan (trưởng nhóm)", v: 0, say: "Ok, vậy hạn cuối là thứ sáu ngày hai mươi bốn nhé. Minh nhớ gửi danh sách phiếu thiếu thông tin.", text: "Vậy hạn cuối là thứ Sáu, ngày 24. Minh nhớ gửi danh sách phiếu thiếu thông tin." },
      { ts: "00:00:33", sp: "Anh Minh", v: 1, say: "Dạ, chiều nay em gửi luôn ạ.", text: "Dạ, chiều nay em gửi ạ." }
    ],
    after: "<b>Biên bản tóm tắt kèm theo:</b> Khảo sát: 180/200 phiếu (Minh) · Bản tổng hợp Excel đầu tiên: thứ Năm (Thảo) · Hạn cuối: thứ Sáu, 24 · Việc cần làm: Minh gửi danh sách phiếu thiếu thông tin trong chiều nay."
  },
  {
    title: "Bài giảng Vật lý → văn bản có công thức", tags: ["Bài giảng", "Công thức", "1 người nói"],
    desc: "Giảng viên đọc công thức bằng lời; bản chuyển âm viết lại đúng ký hiệu, chỉ số, đơn vị SI.",
    lines: [
      { ts: "00:00:02", sp: "Giảng viên", v: 1, say: "Hôm nay mình học về động năng. Động năng của một vật bằng một phần hai nhân em nhân vê bình phương.", text: "Hôm nay chúng ta học về động năng. Động năng của một vật: <b><i>W</i><sub>đ</sub> = ½<i>mv</i><sup>2</sup></b>." },
      { ts: "00:00:11", sp: "Giảng viên", v: 1, say: "Trong đó em là khối lượng tính bằng ki lô gam, vê là vận tốc tính bằng mét trên giây.", text: "Trong đó <i>m</i> là khối lượng (kg), <i>v</i> là vận tốc (m/s)." },
      { ts: "00:00:18", sp: "Giảng viên", v: 1, say: "Ví dụ một ô tô một nghìn hai trăm ki lô gam chạy hai mươi mét trên giây thì động năng bằng hai trăm bốn mươi nghìn jun.", text: "Ví dụ: ô tô <i>m</i> = 1 200 kg, <i>v</i> = 20 m/s ⇒ <i>W</i><sub>đ</sub> = ½ · 1 200 · 20<sup>2</sup> = 240 000 J = 240 kJ." },
      { ts: "00:00:29", sp: "Giảng viên", v: 1, say: "Các em lưu ý vận tốc tăng gấp đôi thì động năng tăng gấp bốn lần.", text: "Lưu ý: vận tốc tăng gấp đôi thì động năng tăng gấp bốn lần (<i>W</i><sub>đ</sub> ~ <i>v</i><sup>2</sup>)." }
    ]
  },
  {
    title: "Video hướng dẫn → phụ đề SRT", tags: ["Phụ đề SRT", "YouTube/TikTok", "2 người nói"],
    desc: "Video ngắn dạy dùng Word: chép lời, ngắt dòng theo cụm nghĩa, căn thời gian, xuất tệp .srt.",
    srt: true,
    lines: [
      { ts: "00:00:01,200 --> 00:00:04,300", sp: "Người dẫn", v: 0, say: "Xin chào các bạn, hôm nay mình hướng dẫn tạo mục lục tự động trong Word.", text: "Xin chào các bạn, hôm nay mình hướng dẫn<br>tạo mục lục tự động trong Word." },
      { ts: "00:00:04,600 --> 00:00:08,100", sp: "Người dẫn", v: 0, say: "Đầu tiên, bôi đen tiêu đề chương và chọn kiểu Heading một.", text: "Đầu tiên, bôi đen tiêu đề chương<br>và chọn kiểu Heading 1." },
      { ts: "00:00:08,400 --> 00:00:11,500", sp: "Khách mời", v: 1, say: "Còn mục nhỏ hơn thì mình chọn Heading hai đúng không anh?", text: "Còn mục nhỏ hơn thì mình chọn<br>Heading 2 đúng không anh?" },
      { ts: "00:00:11,800 --> 00:00:15,000", sp: "Người dẫn", v: 0, say: "Đúng rồi. Cuối cùng vào References, chọn Table of Contents là xong.", text: "Đúng rồi. Cuối cùng vào References,<br>chọn Table of Contents là xong." }
    ]
  }
];

DM.transcriptSample = [
  { t: 0, ts: "00:00:02", sp: "Người phỏng vấn", text: "Chào chị, cảm ơn chị đã dành thời gian cho buổi trò chuyện hôm nay." },
  { t: 4, ts: "00:00:06", sp: "Chị Hạnh", text: "Dạ, không có gì. Tôi rất vui được chia sẻ về công việc của mình." },
  { t: 8, ts: "00:00:11", sp: "Người phỏng vấn", text: "Chị có thể kể một chút về quá trình chuyển đổi số ở hợp tác xã không ạ?" },
  { t: 13, ts: "00:00:15", sp: "Chị Hạnh", text: "Ừm… lúc đầu thì khó lắm. Bà con quen ghi sổ tay, giờ chuyển sang điện thoại thì ai cũng ngại." },
  { t: 19, ts: "00:00:21", sp: "Chị Hạnh", text: "Nhưng sau khoảng ba tháng tập huấn thì mọi người dần quen, giờ đơn hàng đều nhập trên ứng dụng hết rồi." },
  { t: 25, ts: "00:00:27", sp: "Người phỏng vấn", text: "Vậy theo chị, khó khăn lớn nhất là gì?" },
  { t: 28, ts: "00:00:30", sp: "Chị Hạnh", text: "Chắc là kết nối mạng ở vùng sâu, với lại chi phí thiết bị ban đầu ạ." }
];
