/* =========================================================
   DanhMay247 — Dữ liệu dùng chung (giá, dịch vụ, nội dung)
   Chỉnh sửa giá / nội dung tại đây, toàn bộ trang sẽ tự cập nhật.
   ========================================================= */
window.DM = window.DM || {};

DM.site = {
  name: "DanhMay247",
  domain: "danhmay247.vn",
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
      { key: "equation", label: "Công thức toán / hóa học", k: 1.5 },
      { key: "latex", label: "Đánh máy LaTeX", k: 1.6 },
      { key: "png-html", label: "Ảnh sang HTML", k: 1.4 }
    ],
    extras: [
      { key: "format", label: "Tôi cần <b>định dạng tài liệu</b>", pct: 10, tip: "Căn lề, tiêu đề, mục lục, bảng biểu, đầu/chân trang theo yêu cầu hoặc giống bản gốc." },
      { key: "edit", label: "Tôi cần <b>biên tập, hiệu đính</b>", pct: 20, tip: "Biên tập viên rà soát chính tả, ngữ pháp, diễn đạt và tính nhất quán của văn bản." }
    ]
  },
  transcription: { // đơn giá / phút
    unit: "phút",
    base: { "6h": 35000, "12h": 28000, "24h": 25000, "48h": 24000, "3d": 22000, "5d": 20000, "7d": 18000, "10d": 17000 },
    types: [
      { key: "audio-text", label: "Âm thanh sang văn bản", k: 1 },
      { key: "video-text", label: "Video sang văn bản", k: 1 },
      { key: "interview", label: "Phỏng vấn / Hội thảo / Tọa đàm", k: 1.1 },
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

DM.docTypes = ["Chung", "Học thuật / Luận văn", "Pháp lý / Hợp đồng", "Y tế", "Kinh doanh / Tài chính", "Kỹ thuật / CNTT", "Sách / Bản thảo", "Thư từ / Ghi chú cá nhân"];

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

/* ---------- Dịch vụ chi tiết (trang /dich-vu?slug=...) ---------- */
DM.services = {
  "pdf-sang-word": { title: "Chuyển PDF sang Word", service: "retyping", type: "pdf-word", icon: ["PDF", "#ff6b5b"],
    intro: "Đánh máy lại thủ công mọi tệp PDF — kể cả bản scan mờ, có dấu mộc, chữ ký hay hình mờ — thành tệp Word chỉnh sửa được, giữ nguyên bố cục gốc.",
    points: ["Giữ nguyên định dạng, bảng biểu, chú thích và đánh số trang", "Xử lý tốt bản scan chất lượng thấp mà phần mềm OCR bỏ sót", "Kiểm tra lại 100% bởi biên tập viên trước khi giao", "Bàn giao định dạng .docx, Google Docs hoặc .odt theo yêu cầu"] },
  "viet-tay-sang-word": { title: "Chuyển chữ viết tay sang Word", service: "retyping", type: "hand-word", icon: ["✍", "#f3a33b"],
    intro: "Ghi chép, nhật ký, thư tay, biên bản họp viết vội… đội ngũ của chúng tôi đọc và gõ lại chính xác từng chữ, kể cả nét chữ khó đọc.",
    points: ["Đánh dấu rõ những từ không đọc được thay vì tự đoán", "Giữ nguyên chính tả gốc hoặc chuẩn hóa theo yêu cầu", "Phù hợp với tài liệu gia phả, hồi ký, ghi chép nghiên cứu", "Có thể kết hợp định dạng và biên tập"] },
  "anh-sang-word": { title: "Chuyển ảnh (PNG/JPEG) sang Word", service: "retyping", type: "img-word", icon: ["IMG", "#6c8cff"],
    intro: "Ảnh chụp điện thoại, ảnh màn hình, ảnh tài liệu cũ — chúng tôi chuyển tất cả thành văn bản Word sạch đẹp, dễ chỉnh sửa.",
    points: ["Nhận ảnh nghiêng, thiếu sáng, độ phân giải thấp", "Gộp nhiều ảnh thành một tài liệu thống nhất", "Giữ bảng biểu, danh sách, tiêu đề", "Bảo mật tuyệt đối hình ảnh của bạn"] },
  "word-sang-excel": { title: "Chuyển Word / PDF sang Excel", service: "retyping", type: "word-excel", icon: ["XLS", "#1d7a45"],
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
    intro: "Rà soát chính tả, ngữ pháp, dấu câu, tính mạch lạc và nhất quán thuật ngữ — giúp văn bản của bạn chuyên nghiệp và dễ đọc hơn.",
    points: ["Biên tập viên có chuyên môn theo lĩnh vực", "Theo dõi thay đổi (Track Changes) minh bạch", "Góp ý cấu trúc và cách diễn đạt", "Chuẩn hóa trích dẫn APA, IEEE, Harvard…"] },
  "danh-may-cong-thuc": { title: "Đánh máy công thức, phương trình", service: "retyping", type: "equation", icon: ["∑", "#d03c3f"],
    intro: "Gõ lại công thức toán, lý, hóa bằng Equation Editor / MathType hoặc LaTeX, chính xác đến từng chỉ số và ký hiệu.",
    points: ["Hỗ trợ Word Equation, MathType, LaTeX", "Đánh số và tham chiếu phương trình", "Vẽ lại sơ đồ, đồ thị đơn giản", "Phù hợp đề thi, giáo án, bài báo"] },
  "danh-may-hoc-thuat": { title: "Đánh máy tài liệu học thuật", service: "retyping", type: "pdf-word", icon: ["🎓", "#2d3078"],
    intro: "Luận văn, khóa luận, bài giảng, đề cương, tài liệu tham khảo — trình bày đúng quy định của trường và hội đồng.",
    points: ["Định dạng theo quy chuẩn từng trường", "Tạo mục lục, danh mục bảng/hình tự động", "Trích dẫn và tài liệu tham khảo chuẩn", "Bảo mật nội dung nghiên cứu"] },
  "danh-may-van-ban-phap-ly": { title: "Đánh máy văn bản pháp lý", service: "retyping", type: "pdf-word", icon: ["⚖", "#7a4b2a"],
    intro: "Hợp đồng, bản án, hồ sơ tố tụng, biên bản, quyết định — đánh máy chính xác thuật ngữ pháp lý, giữ nguyên thể thức văn bản.",
    points: ["Đúng thể thức văn bản hành chính (Nghị định 30/2020)", "Nhân sự ký cam kết bảo mật (NDA)", "Đối chiếu số liệu, ngày tháng, tên riêng hai lần", "Giao gấp từ 6 giờ"] },
  "dinh-dang-tai-lieu": { title: "Định dạng tài liệu", service: "retyping", type: "pdf-word", extras: ["format"], icon: ["¶", "#f24d50"],
    intro: "Chuẩn hóa font chữ, lề, giãn dòng, tiêu đề, mục lục, đầu/chân trang… để tài liệu trông chuyên nghiệp và nhất quán.",
    points: ["Áp dụng Styles để dễ chỉnh sửa về sau", "Mục lục, đánh số trang, ngắt phần tự động", "Chuẩn bị bản in hoặc bản PDF xuất bản", "Theo template thương hiệu của bạn"] },
  "anh-sang-html": { title: "Chuyển ảnh / PDF sang HTML", service: "retyping", type: "png-html", icon: ["</>", "#141a27"],
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
  { cat: "Đặt hàng", q: "Tôi gửi tệp đính kèm cho các bạn bằng cách nào?", a: "<p>Bạn có thể tải lên tối đa 6 tệp — từ PDF, JPEG đến MP3, WAV — ngay trên trang đặt hàng.</p><p>Nếu gặp sự cố, hãy tải tệp lên Google Drive, Dropbox hoặc dịch vụ lưu trữ đám mây bất kỳ rồi dán đường dẫn vào phần hướng dẫn. Bạn cũng có thể gửi tệp tới <a href=\"mailto:trungtamdanhmay247@gmail.com\">trungtamdanhmay247@gmail.com</a> và ghi chú trong phần hướng dẫn rằng tệp đã được gửi qua email.</p>" },
  { cat: "Đặt hàng", q: "Làm sao để tôi theo dõi đơn hàng?", a: "<p>Ngay sau khi thanh toán, bạn sẽ có quyền truy cập vào tài khoản cá nhân. Tại đó, bạn có thể trao đổi với người thực hiện đơn, liên hệ đội hỗ trợ và theo dõi tiến độ công việc một cách thuận tiện.</p><p>Khi có tin nhắn từ chuyên viên hoặc trạng thái đơn thay đổi (ví dụ từ “Đang thực hiện” sang “Hoàn thành”), chúng tôi sẽ tự động gửi thông báo qua email.</p>" },
  { cat: "Bảo mật", q: "Quyền riêng tư và bảo mật thông tin được đảm bảo thế nào?", a: "<p>Mục tiêu của DanhMay247 là xây dựng niềm tin với từng khách hàng. Chúng tôi tôn trọng quyền riêng tư và đảm bảo bảo mật trong suốt quá trình hợp tác.</p><p>Nhân viên đánh máy, thiết kế, biên tập của chúng tôi đều được đào tạo bài bản, tuân thủ quy tắc đạo đức nghề nghiệp và làm việc theo thỏa thuận bảo mật (NDA). Mọi thông tin bạn chia sẻ đều được giữ kín tuyệt đối.</p>" },
  { cat: "Dịch vụ", q: "Các bạn đảm bảo chất lượng dịch vụ ra sao?", a: "<p>Chúng tôi có đội ngũ chuyên viên với hơn 5 năm kinh nghiệm đánh máy thủ công và chuyển âm, cùng quy trình kiểm soát chất lượng nhiều bước.</p><p>Khi đã nhận hạn chót, chúng tôi sẽ giao đúng hạn. Nếu không đáp ứng được yêu cầu của bạn trong thời gian đã thỏa thuận, bạn sẽ được hoàn tiền.</p>" },
  { cat: "Hỗ trợ", q: "Đội hỗ trợ khách hàng làm việc vào giờ nào?", a: "<p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng qua điện thoại, email, Zalo và chat trực tuyến 24/7. Nếu có bất kỳ thắc mắc nào, đừng ngần ngại liên hệ với chúng tôi bất cứ lúc nào.</p>" },
  { cat: "Giá & thanh toán", q: "Tôi có thể thanh toán bằng những hình thức nào?", a: "<p>Chúng tôi nhận thanh toán bằng chuyển khoản qua mã VietQR vào tài khoản HDBank của công ty chủ quản VietSCI Editing Services. Bạn có thể quét mã bằng ứng dụng của bất kỳ ngân hàng nào, hoặc ví MoMo, ZaloPay. Số tiền và nội dung được điền sẵn, hệ thống tự động xác nhận khi nhận được tiền.</p>" },
  { cat: "Giá & thanh toán", q: "Một “trang” được tính như thế nào?", a: "<p>Một trang được tính theo trang của tài liệu gốc (một mặt giấy A4 hoặc tương đương). Với tài liệu có mật độ chữ quá dày (trên 500 từ/trang) hoặc khổ giấy lớn, chúng tôi sẽ báo giá lại trước khi bắt đầu và chỉ thực hiện khi bạn đồng ý.</p>" },
  { cat: "Dịch vụ", q: "Các bạn có dùng phần mềm OCR hay AI không?", a: "<p>Không. Toàn bộ tài liệu được gõ lại bởi con người. Chúng tôi chỉ dùng công cụ kiểm tra chính tả ở bước rà soát cuối cùng. Đó là lý do chúng tôi xử lý được cả chữ viết tay khó đọc và bản scan chất lượng thấp mà phần mềm thường bỏ sót.</p>" },
  { cat: "Đặt hàng", q: "Tôi có được yêu cầu chỉnh sửa miễn phí không?", a: "<p>Có. Trong vòng 14 ngày kể từ khi nhận tài liệu, bạn được yêu cầu chỉnh sửa miễn phí không giới hạn số lần, miễn là yêu cầu nằm trong phạm vi hướng dẫn ban đầu.</p>" },
  { cat: "Hỗ trợ", q: "Chính sách hoàn tiền như thế nào?", a: "<p>Nếu đơn hàng bị trễ hạn hoặc chất lượng không đạt cam kết và không thể khắc phục, bạn được hoàn tiền một phần hoặc toàn bộ. Yêu cầu hoàn tiền được xử lý trong vòng 3–5 ngày làm việc.</p>" }
];

/* ---------- Bài viết blog ---------- */
DM.posts = [
  { slug: "ocr-hay-danh-may-thu-cong", cat: "Kiến thức", color: "#2d3078", emoji: "Aa", date: "2026-10-02", read: 6,
    title: "OCR hay đánh máy thủ công: lựa chọn nào cho tài liệu của bạn?",
    excerpt: "Phần mềm nhận dạng ký tự (OCR) ngày càng tốt, nhưng vẫn còn nhiều trường hợp con người làm tốt hơn hẳn. Cùng so sánh chi tiết.",
    body: "<p>OCR (Optical Character Recognition) là công nghệ nhận dạng ký tự từ hình ảnh. Với tài liệu in rõ nét, OCR có thể cho kết quả khá tốt chỉ trong vài giây. Tuy nhiên, thực tế công việc văn phòng hiếm khi “đẹp” như vậy.</p><h2>Khi nào OCR thất bại?</h2><ul><li>Bản scan nghiêng, mờ, thiếu sáng hoặc có vết gấp.</li><li>Tài liệu có dấu mộc, chữ ký, hình mờ đè lên chữ.</li><li>Chữ viết tay — đặc biệt là chữ viết nhanh, viết tắt.</li><li>Bảng biểu phức tạp, nhiều cột, ô gộp.</li><li>Tiếng Việt có dấu: lỗi dấu là lỗi phổ biến nhất của OCR.</li></ul><h2>Chi phí ẩn của OCR</h2><p>Một trang OCR “miễn phí” có thể mất 10–20 phút để soát lỗi và định dạng lại. Với tài liệu 100 trang, đó là cả tuần làm việc. Trong khi đó, dịch vụ đánh máy thủ công giao cho bạn văn bản sạch, đúng bố cục ngay từ đầu.</p><blockquote>Nguyên tắc đơn giản: nếu bạn cần độ chính xác trên 99% và không có thời gian soát lỗi, hãy chọn con người.</blockquote><h2>Kết luận</h2><p>OCR phù hợp để tra cứu nhanh tài liệu in đẹp. Đánh máy thủ công phù hợp khi bạn cần một tài liệu hoàn chỉnh, đáng tin cậy để sử dụng ngay — hợp đồng, luận văn, hồ sơ lưu trữ, sách tái bản.</p>" },
  { slug: "meo-chup-tai-lieu-bang-dien-thoai", cat: "Mẹo hay", color: "#f24d50", emoji: "📷", date: "2026-09-24", read: 4,
    title: "7 mẹo chụp tài liệu bằng điện thoại để đánh máy nhanh và chính xác hơn",
    excerpt: "Một tấm ảnh rõ nét giúp rút ngắn thời gian xử lý và giảm chi phí. Áp dụng ngay 7 mẹo đơn giản sau.",
    body: "<p>Phần lớn tài liệu khách hàng gửi cho chúng tôi là ảnh chụp từ điện thoại. Chất lượng ảnh ảnh hưởng trực tiếp tới tốc độ và độ chính xác của bản đánh máy.</p><ol><li><b>Chụp ở nơi đủ sáng</b>, ưu tiên ánh sáng tự nhiên, tránh bóng đổ của tay và điện thoại.</li><li><b>Đặt điện thoại song song</b> với mặt giấy để tránh méo hình.</li><li><b>Tắt đèn flash</b> với giấy bóng để không bị lóa.</li><li><b>Chụp từng trang một</b>, không chụp hai trang sách cùng lúc.</li><li><b>Dùng chế độ quét tài liệu</b> có sẵn trong Ghi chú (iPhone) hoặc Google Drive (Android).</li><li><b>Đặt tên tệp theo thứ tự</b>: 01.jpg, 02.jpg… để chúng tôi ghép đúng trình tự.</li><li><b>Gộp thành một tệp PDF</b> nếu có nhiều trang để dễ tải lên.</li></ol><p>Chỉ cần vài giây chuẩn bị, bạn đã giúp bản đánh máy được giao sớm hơn và chính xác hơn.</p>" },
  { slug: "chuyen-am-phong-van-nghien-cuu", cat: "Chuyển âm", color: "#3bb54a", emoji: "🎙", date: "2026-09-12", read: 5,
    title: "Chuyển âm phỏng vấn cho nghiên cứu định tính: những điều cần biết",
    excerpt: "Nguyên văn hay làm sạch? Có cần mốc thời gian? Hướng dẫn chọn đúng kiểu chuyển âm cho luận văn và đề tài nghiên cứu.",
    body: "<p>Trong nghiên cứu định tính, bản chuyển âm phỏng vấn chính là dữ liệu gốc để phân tích. Chọn sai kiểu chuyển âm có thể khiến bạn mất nhiều thời gian xử lý lại.</p><h2>Nguyên văn (verbatim)</h2><p>Giữ lại mọi từ đệm, ngập ngừng, lặp từ, tiếng cười, khoảng lặng. Phù hợp với phân tích diễn ngôn, tâm lý học, ngôn ngữ học.</p><h2>Làm sạch (clean verbatim)</h2><p>Lược bỏ từ đệm và lỗi nói, giữ nguyên ý. Dễ đọc, phù hợp phần lớn đề tài xã hội học, kinh tế, giáo dục.</p><h2>Mốc thời gian</h2><p>Gắn [00:12:45] theo từng lượt nói giúp bạn nhanh chóng nghe lại đoạn cần trích dẫn — rất hữu ích khi viết báo cáo.</p><h2>Đạo đức nghiên cứu</h2><p>Hãy đảm bảo đơn vị chuyển âm cam kết bảo mật (NDA) và có thể ẩn danh tên người tham gia theo yêu cầu. DanhMay247 hỗ trợ cả hai.</p>" },
  { slug: "dinh-dang-luan-van-chuan", cat: "Học thuật", color: "#9b51e0", emoji: "🎓", date: "2026-08-30", read: 7,
    title: "Định dạng luận văn chuẩn: checklist trước ngày nộp",
    excerpt: "Font, lề, giãn dòng, mục lục tự động, danh mục bảng biểu… Checklist đầy đủ để luận văn của bạn không bị trả về vì lỗi hình thức.",
    body: "<p>Nhiều luận văn có nội dung tốt nhưng bị trừ điểm vì trình bày. Dưới đây là checklist chúng tôi dùng khi định dạng luận văn cho khách hàng.</p><h2>Trang và chữ</h2><ul><li>Khổ A4, lề trái 3–3,5 cm, lề phải 2 cm, trên/dưới 2–2,5 cm (theo quy định từng trường).</li><li>Font Times New Roman 13–14, giãn dòng 1,3–1,5.</li></ul><h2>Cấu trúc</h2><ul><li>Dùng Heading 1/2/3 cho chương, mục, tiểu mục.</li><li>Mục lục, danh mục bảng, danh mục hình tạo tự động.</li><li>Đánh số trang: phần đầu bằng số La Mã, phần chính bằng số Ả Rập.</li></ul><h2>Trích dẫn</h2><ul><li>Thống nhất một chuẩn: APA, IEEE hoặc Harvard.</li><li>Mọi trích dẫn trong bài đều có trong danh mục tài liệu tham khảo và ngược lại.</li></ul><p>Không có thời gian? Dịch vụ <a href=\"/dich-vu?slug=dinh-dang-tai-lieu\">định dạng tài liệu</a> của chúng tôi xử lý một luận văn 80 trang trong khoảng 24–48 giờ.</p>" },
  { slug: "so-hoa-tai-lieu-doanh-nghiep", cat: "Doanh nghiệp", color: "#141a27", emoji: "🏢", date: "2026-08-15", read: 5,
    title: "Số hóa hồ sơ giấy cho doanh nghiệp nhỏ: bắt đầu từ đâu?",
    excerpt: "Kho hồ sơ giấy chiếm diện tích, khó tra cứu và dễ thất lạc. Lộ trình 4 bước để số hóa hiệu quả mà không tốn kém.",
    body: "<p>Số hóa không chỉ là scan. Một hồ sơ số thực sự hữu ích phải tìm kiếm được, chỉnh sửa được và được tổ chức khoa học.</p><h2>Bước 1: Phân loại</h2><p>Chia hồ sơ thành nhóm: hợp đồng, hóa đơn, nhân sự, kỹ thuật… và xác định mức độ ưu tiên.</p><h2>Bước 2: Scan và đặt tên</h2><p>Scan 300 dpi, đặt tên tệp theo quy tắc thống nhất, ví dụ <i>HD_2025_KhachHangA.pdf</i>.</p><h2>Bước 3: Chuyển thành văn bản</h2><p>Với tài liệu cần chỉnh sửa hoặc trích xuất dữ liệu, hãy chuyển sang Word/Excel. Đây là bước chúng tôi hỗ trợ tốt nhất.</p><h2>Bước 4: Lưu trữ và phân quyền</h2><p>Đưa lên Google Drive, SharePoint hoặc hệ thống quản lý tài liệu, phân quyền truy cập rõ ràng.</p>" },
  { slug: "bao-mat-khi-thue-ngoai-danh-may", cat: "Bảo mật", color: "#d49265", emoji: "🔒", date: "2026-07-28", read: 4,
    title: "Thuê ngoài đánh máy có an toàn không? 5 câu hỏi nên đặt ra",
    excerpt: "Trước khi gửi tài liệu nhạy cảm cho bất kỳ đơn vị nào, hãy hỏi 5 câu hỏi sau để bảo vệ dữ liệu của bạn.",
    body: "<p>Tài liệu bạn gửi đi có thể chứa thông tin cá nhân, bí mật kinh doanh hoặc dữ liệu pháp lý. Đây là 5 câu hỏi bạn nên hỏi bất kỳ nhà cung cấp nào:</p><ol><li>Nhân sự có ký thỏa thuận bảo mật (NDA) không?</li><li>Tệp được lưu ở đâu và bao lâu thì bị xóa?</li><li>Có truyền tệp qua kết nối mã hóa (HTTPS) không?</li><li>Ai có quyền truy cập vào tài liệu của tôi?</li><li>Có thể ký hợp đồng bảo mật riêng với doanh nghiệp không?</li></ol><p>Tại DanhMay247, toàn bộ nhân sự làm việc theo NDA, tệp được xóa sau 30 ngày kể từ khi hoàn thành (hoặc sớm hơn theo yêu cầu), và chúng tôi sẵn sàng ký hợp đồng bảo mật riêng.</p>" }
];

/* ---------- Mẫu tài liệu trước / sau ---------- */
DM.samples = [
  {
    title: "Biên bản họp viết tay → Word", tags: ["Viết tay sang Word", "Định dạng"],
    desc: "Ghi chép viết vội trong cuộc họp, có gạch xóa và chèn chữ.",
    before: '<div class="doc-hand"><h6>Biên bản họp nhóm</h6><p>Ngày 12/9 — phòng họp tầng 3</p><p>Thành phần: Lan, Hùng, Minh, <span class="strike">Tú</span> Thảo</p><p>1. Rà soát tiến độ dự án Q3 → chậm 1 tuần do thiếu số liệu kho</p><p>2. Hùng phụ trách liên hệ nhà cung cấp trước thứ 6</p><p>3. Thống nhất ngân sách quảng cáo tháng 10: 45tr</p><p>4. Minh làm báo cáo tổng hợp gửi BGĐ</p><p>→ Họp lại ngày 19/9, 9h sáng</p><p style="text-align:right;margin-top:14px">Thư ký: Lan</p></div>',
    after: '<div class="doc-typed"><h6>Biên bản họp nhóm</h6><p><b>Thời gian:</b> Ngày 12/9 &nbsp;|&nbsp; <b>Địa điểm:</b> Phòng họp tầng 3</p><p><b>Thành phần:</b> Lan, Hùng, Minh, Thảo</p><p><b>Nội dung:</b></p><p>1. Rà soát tiến độ dự án Q3: chậm 1 tuần do thiếu số liệu kho.</p><p>2. Anh Hùng phụ trách liên hệ nhà cung cấp trước thứ Sáu.</p><p>3. Thống nhất ngân sách quảng cáo tháng 10: 45.000.000 đồng.</p><p>4. Anh Minh lập báo cáo tổng hợp gửi Ban Giám đốc.</p><p><b>Kết luận:</b> Họp lại vào 9h00 ngày 19/9.</p><p style="text-align:right;margin-top:14px"><i>Thư ký: Lan</i></p></div>'
  },
  {
    title: "Hợp đồng scan có mộc → Word", tags: ["PDF sang Word", "Pháp lý"],
    desc: "Bản scan mờ, có hình mờ và dấu mộc đè lên chữ.",
    before: '<div class="doc-scan"><div class="watermark">BẢN SAO</div><h6>HỢP ĐỒNG DỊCH VỤ</h6><p>Số: 15/2026/HĐDV</p><p>Hôm nay, ngày 05 tháng 9 năm 2026, tại TP.HCM, chúng tôi gồm:</p><p>BÊN A: CÔNG TY TNHH ABC</p><p>Đại diện: Ông Nguyễn Văn A — Giám đốc</p><p>BÊN B: CÔNG TY CP XYZ</p><p>Đại diện: Bà Trần Thị B — Phó Giám đốc</p><p>Điều 1. Nội dung dịch vụ: Bên B cung cấp dịch vụ số hóa 2.000 trang hồ sơ lưu trữ...</p><p>Điều 2. Giá trị hợp đồng: 58.000.000đ (Năm mươi tám triệu đồng)...</p><div class="stamp">ĐÃ KÝ</div></div>',
    after: '<div class="doc-typed"><h6>Hợp đồng dịch vụ</h6><p style="text-align:center">Số: 15/2026/HĐDV</p><p>Hôm nay, ngày 05 tháng 9 năm 2026, tại TP. Hồ Chí Minh, chúng tôi gồm:</p><p><b>BÊN A: CÔNG TY TNHH ABC</b><br>Đại diện: Ông Nguyễn Văn A — Chức vụ: Giám đốc</p><p><b>BÊN B: CÔNG TY CỔ PHẦN XYZ</b><br>Đại diện: Bà Trần Thị B — Chức vụ: Phó Giám đốc</p><p><b>Điều 1. Nội dung dịch vụ</b><br>Bên B cung cấp dịch vụ số hóa 2.000 trang hồ sơ lưu trữ…</p><p><b>Điều 2. Giá trị hợp đồng</b><br>58.000.000 đồng (Năm mươi tám triệu đồng)…</p></div>'
  },
  {
    title: "Bảng chi tiêu viết tay → Excel", tags: ["Viết tay sang Excel", "Bảng biểu"],
    desc: "Sổ ghi chép chi tiêu viết tay với nhiều con số.",
    before: '<div class="doc-hand"><h6>Chi tiêu tháng 9</h6><table><tr><td>2/9</td><td>Tiền nhà</td><td>4.500.000</td></tr><tr><td>5/9</td><td>Điện + nước</td><td>820.000</td></tr><tr><td>8/9</td><td>Đi chợ</td><td>1.250.000</td></tr><tr><td>12/9</td><td>Xăng xe</td><td>350.000</td></tr><tr><td>15/9</td><td>Học phí con</td><td>2.800.000</td></tr><tr><td>20/9</td><td>Internet</td><td>220.000</td></tr><tr><td>25/9</td><td>Hiếu hỉ</td><td>500.000</td></tr><tr><td></td><td><b>Tổng</b></td><td><b>10.440.000</b></td></tr></table></div>',
    after: '<div class="doc-typed"><h6>Chi tiêu tháng 9</h6><table><tr><th>Ngày</th><th>Khoản chi</th><th style="text-align:right">Số tiền (đ)</th></tr><tr><td>02/09</td><td>Tiền nhà</td><td style="text-align:right">4.500.000</td></tr><tr><td>05/09</td><td>Điện + nước</td><td style="text-align:right">820.000</td></tr><tr><td>08/09</td><td>Đi chợ</td><td style="text-align:right">1.250.000</td></tr><tr><td>12/09</td><td>Xăng xe</td><td style="text-align:right">350.000</td></tr><tr><td>15/09</td><td>Học phí con</td><td style="text-align:right">2.800.000</td></tr><tr><td>20/09</td><td>Internet</td><td style="text-align:right">220.000</td></tr><tr><td>25/09</td><td>Hiếu hỉ</td><td style="text-align:right">500.000</td></tr><tr><th colspan="2">Tổng cộng</th><th style="text-align:right">10.440.000</th></tr></table></div>'
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
