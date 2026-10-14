/* =========================================================
   Đánh máy 247 — Bài viết blog (tự động tạo, sửa nội dung trực tiếp tại đây)
   Mỗi bài: slug, cat (chuyên mục), date, tags, title, excerpt, body (HTML), cover, author, read (phút)
   Ảnh bìa: public/assets/img/blog/<slug>.svg — tạo lại bằng: node scripts/make-blog-images.js
   ========================================================= */
window.DM = window.DM || {};
DM.posts = [
  {
    "slug": "go-10-ngon-30-ngay",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-10-14",
    "tags": [
      "Gõ 10 ngón",
      "Tốc độ đánh máy",
      "Luyện tập"
    ],
    "title": "Gõ 10 ngón trong 30 ngày: lộ trình tăng tốc độ đánh máy lên 60 từ/phút",
    "excerpt": "Gõ mổ cò bằng hai ngón vừa chậm vừa mỏi. Lộ trình 4 tuần, mỗi ngày 20 phút, giúp bạn gõ không nhìn bàn phím và nhanh gấp đôi.",
    "body": "\n<p class=\"lead\">Phần lớn người dùng máy tính ở Việt Nam tự học gõ phím theo kiểu “mổ cò”: nhìn bàn phím, dùng hai đến bốn ngón. Cách này vẫn đạt khoảng 25–35 từ/phút, nhưng khó vượt lên và làm mỏi mắt vì phải liên tục nhìn xuống. Tin vui là chỉ cần một tháng luyện tập có phương pháp, bạn hoàn toàn có thể gõ 10 ngón ở tốc độ 50–60 từ/phút.</p>\n\n<h2>Vì sao nên học gõ 10 ngón?</h2>\n<ul>\n  <li><b>Nhanh hơn:</b> người gõ 10 ngón thành thạo thường đạt 60–80 từ/phút, gấp đôi gõ mổ cò.</li>\n  <li><b>Chính xác hơn:</b> mỗi ngón phụ trách một vùng cố định, tay không phải “đi tìm” phím nên ít gõ nhầm.</li>\n  <li><b>Đỡ mỏi:</b> mắt nhìn màn hình thay vì đảo liên tục giữa màn hình và bàn phím, cổ cũng ít phải cúi.</li>\n  <li><b>Tập trung vào nội dung:</b> khi ngón tay tự động, đầu óc dành cho việc suy nghĩ câu chữ.</li>\n</ul>\n\n<h2>Nền tảng: hàng phím cơ sở</h2>\n<p>Mọi thứ bắt đầu từ <b>hàng phím cơ sở</b>: tay trái đặt trên <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> <kbd>F</kbd>, tay phải đặt trên <kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd> <kbd>;</kbd>, hai ngón cái đặt nhẹ lên phím cách. Sau mỗi lần gõ, ngón tay luôn quay về vị trí này.</p>\n<figure><img src=\"/assets/img/blog/fig-ban-phim-10-ngon.svg\" alt=\"Sơ đồ phân công ngón tay trên bàn phím QWERTY\" loading=\"lazy\" width=\"960\"><figcaption>Mỗi màu là vùng phụ trách của một ngón. Hai phím F và J có gờ nổi để bạn đặt tay đúng chỗ mà không cần nhìn.</figcaption></figure>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hãy sờ hai gờ nổi trên phím <kbd>F</kbd> và <kbd>J</kbd>. Đây là “mỏ neo” giúp bạn về đúng hàng cơ sở trong bóng tối.</div></div>\n\n<h2>Lộ trình 4 tuần, mỗi ngày 20 phút</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tuần</th><th>Mục tiêu</th><th>Bài tập chính</th><th>Tốc độ kỳ vọng</th></tr>\n  <tr><td><b>1</b></td><td>Thuộc hàng cơ sở và hàng trên</td><td>Gõ chậm, không nhìn phím, đúng ngón. Che bàn phím bằng một tờ giấy nếu cần.</td><td>10–20 từ/phút</td></tr>\n  <tr><td><b>2</b></td><td>Thêm hàng dưới, chữ hoa với <kbd>Shift</kbd></td><td>Gõ các từ tiếng Việt ngắn, luyện kết hợp phím dấu của bộ gõ.</td><td>20–30 từ/phút</td></tr>\n  <tr><td><b>3</b></td><td>Gõ câu và đoạn văn</td><td>Chép lại một trang báo mỗi ngày, ưu tiên độ chính xác trên 95%.</td><td>30–45 từ/phút</td></tr>\n  <tr><td><b>4</b></td><td>Tăng tốc và tạo nhịp</td><td>Bài kiểm tra 1–3 phút, ghi lại kết quả, tập trung vào các phím hay sai.</td><td>45–60 từ/phút</td></tr>\n</table></div>\n\n<h2>Năm nguyên tắc vàng khi luyện tập</h2>\n<ol class=\"steps\">\n  <li><b>Chính xác trước, tốc độ sau.</b> Gõ sai rồi sửa tốn nhiều thời gian hơn gõ chậm mà đúng. Khi độ chính xác ổn định trên 95% mới tăng tốc.</li>\n  <li><b>Không nhìn bàn phím.</b> Đây là thói quen khó bỏ nhất. Lúc đầu bạn sẽ chậm hơn, nhưng đó là cái giá cần trả.</li>\n  <li><b>Luyện đều đặn mỗi ngày.</b> 20 phút mỗi ngày hiệu quả hơn hẳn 2 giờ vào cuối tuần.</li>\n  <li><b>Giữ nhịp đều.</b> Gõ đều tay như nhịp đồng hồ thay vì lúc nhanh lúc chậm.</li>\n  <li><b>Ngồi đúng tư thế.</b> Cổ tay thẳng, khuỷu tay khoảng 90°, vai thả lỏng.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Có nhiều trang luyện gõ miễn phí cho phép chọn bài tiếng Việt và đo tốc độ, độ chính xác theo thời gian thực. Hãy chọn một trang và gắn bó với nó để dễ theo dõi tiến bộ.</div></div>\n\n<h2>Gõ tiếng Việt: thêm một lớp kỹ năng</h2>\n<p>Với tiếng Việt, bạn còn phải gõ thêm dấu thanh và dấu mũ qua bộ gõ (Telex hoặc VNI). Đừng học song song quá sớm: hãy thành thạo vị trí chữ cái trong tuần đầu, sang tuần thứ hai mới kết hợp gõ dấu. Với Telex, các phím dấu (<kbd>s</kbd> <kbd>f</kbd> <kbd>r</kbd> <kbd>x</kbd> <kbd>j</kbd>) đều nằm trong vùng ngón tay quen thuộc, nên chuyển sang rất tự nhiên.</p>\n\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Luôn đặt tay ở hàng cơ sở A S D F — J K L ;, dùng gờ nổi trên F và J để định vị.</li><li>Chính xác trên 95% rồi mới tăng tốc.</li><li>20 phút mỗi ngày trong 4 tuần là đủ để đạt 45–60 từ/phút.</li><li>Không nhìn bàn phím, kể cả khi thấy chậm lúc đầu.</li></ul></div>\n<p>Nếu bạn đang có một chồng tài liệu cần gõ gấp mà chưa kịp luyện, đội ngũ chuyên viên của chúng tôi (tốc độ trên 70 từ/phút) luôn sẵn sàng. <a href=\"/dat-hang\">Đặt hàng ngay</a> và nhận tài liệu chỉ từ 6 giờ.</p>",
    "cover": "/assets/img/blog/go-10-ngon-30-ngay.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "hanh-trinh-mot-don-danh-may",
    "cat": "Câu chuyện",
    "date": "2026-10-13",
    "tags": [
      "Hậu trường",
      "Quy trình",
      "Kiểm soát chất lượng"
    ],
    "title": "Hành trình của một đơn đánh máy: từ trang giấy đến tệp Word hoàn chỉnh",
    "excerpt": "Điều gì xảy ra sau khi bạn bấm “Đặt hàng”? Cùng đi theo một đơn hàng qua 5 bước, từ khi nhận tệp đến khi bàn giao.",
    "body": "\n<p class=\"lead\">Nhiều khách hàng hỏi chúng tôi: “Sau khi gửi tài liệu, ai sẽ gõ, và làm sao các bạn đảm bảo không sai?” Bài viết này đưa bạn đi hậu trường qua một đơn hàng minh họa điển hình: 32 trang biên bản họp viết tay, thời hạn 3 ngày.</p>\n<figure><img src=\"/assets/img/blog/fig-quy-trinh-don.svg\" alt=\"Quy trình 5 bước xử lý một đơn đánh máy\" loading=\"lazy\" width=\"960\"><figcaption>Năm bước từ khi đặt hàng đến khi bàn giao. Khách nhận email ở mỗi mốc quan trọng.</figcaption></figure>\n\n<h2>Bước 1: Đặt hàng và báo giá tức thì</h2>\n<p>Khách chọn dịch vụ “Viết tay sang Word”, thời hạn 3 ngày, số trang 32, tải lên 32 ảnh chụp và ghi chú: “Giữ nguyên các bảng thống kê, tên người viết hoa”. Hệ thống tính giá ngay và gửi email xác nhận kèm liên kết theo dõi đơn.</p>\n\n<h2>Bước 2: Thanh toán và đối soát</h2>\n<p>Khách quét mã VietQR bằng ứng dụng ngân hàng, với số tiền và nội dung là mã đơn đã điền sẵn. Ngay khi tiền về tài khoản, đơn được xác nhận và thời hạn 3 ngày bắt đầu tính.</p>\n\n<h2>Bước 3: Giao cho chuyên viên phù hợp</h2>\n<p>Quản trị đọc nhanh tài liệu để chọn người: biên bản có nhiều thuật ngữ tài chính nên được giao cho chuyên viên có kinh nghiệm mảng này.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div><b>Bảo mật theo thiết kế:</b> chuyên viên chỉ thấy nội dung công việc, tài liệu gốc và hướng dẫn. Họ không thấy tên, email, số điện thoại hay thông tin thanh toán của khách. Mọi trao đổi đi qua kênh nội bộ.</div></div>\n\n<h2>Bước 4: Đánh máy</h2>\n<p>Chuyên viên gõ lại toàn bộ, dựng lại 6 bảng thống kê bằng bảng Word thật (không dùng phím cách để căn), áp dụng Heading cho từng mục để có mục lục tự động. Hai chữ ký tên bị nhòe mực được đánh dấu <span class=\"mono\">[?]</span> và ghi chú cho quản trị thay vì tự đoán.</p>\n\n<h2>Bước 5: Kiểm tra và bàn giao</h2>\n<ol class=\"steps\">\n  <li><b>Đối chiếu</b>: biên tập viên đọc song song bản gốc và bản gõ, kiểm tra từng con số trong bảng.</li>\n  <li><b>Soát chính tả</b>: rà các lỗi thường gặp và sự thống nhất của tên riêng.</li>\n  <li><b>Kiểm tra định dạng</b>: phông, lề, giãn dòng, đánh số trang thống nhất.</li>\n  <li><b>Duyệt và bàn giao</b>: tệp được chuyển cho khách. Khách nhận email và tải về ngay trong trang đơn hàng.</li>\n</ol>\n<p>Nếu khách cần chỉnh sửa, ví dụ sửa lại tên người theo danh sách chính thức của công ty, chỉ cần nhắn ngay trong trang đơn hàng. Mọi chỉnh sửa trong phạm vi yêu cầu ban đầu đều miễn phí trong 14 ngày.</p>\n\n<h2>Điều gì giúp chất lượng ổn định?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Con người, không phải máy</b>Tài liệu được gõ thủ công, nên xử lý được cả chữ khó đọc và bản scan mờ mà phần mềm nhận dạng bỏ sót.</div>\n  <div class=\"good\"><b>Hai lớp kiểm tra</b>Người gõ và người duyệt là hai người khác nhau. Không tệp nào đến tay khách mà chưa được duyệt.</div>\n</div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Mỗi đơn đi qua 5 bước: đặt hàng, thanh toán, giao việc, đánh máy, kiểm tra.</li><li>Chuyên viên không tiếp cận thông tin cá nhân và thanh toán của khách.</li><li>Chữ không đọc được được đánh dấu [?], không bao giờ đoán.</li><li>Khách được chỉnh sửa miễn phí trong 14 ngày.</li></ul></div>\n<p>Bạn có tài liệu cần số hóa? <a href=\"/dat-hang\">Đặt hàng trong 3 phút</a> và theo dõi từng bước ngay trong tài khoản của mình.</p>",
    "cover": "/assets/img/blog/hanh-trinh-mot-don-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "telex-hay-vni",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-10-09",
    "tags": [
      "Telex",
      "VNI",
      "Bộ gõ tiếng Việt",
      "Unikey"
    ],
    "title": "Telex hay VNI: bộ gõ tiếng Việt nào nhanh và ít lỗi hơn?",
    "excerpt": "Hai kiểu gõ phổ biến nhất có ưu nhược điểm riêng. So sánh chi tiết để bạn chọn đúng kiểu gõ cho công việc của mình.",
    "body": "\n<p class=\"lead\">Mỗi ngày có hàng triệu người Việt gõ dấu bằng Telex hoặc VNI mà ít khi tự hỏi kiểu nào hợp với mình hơn. Thực tế, lựa chọn này ảnh hưởng rõ rệt đến tốc độ và số lỗi, nhất là với người phải đánh máy nhiều như nhân viên văn phòng, sinh viên viết luận văn hay người làm nghề đánh máy.</p>\n\n<h2>Hai kiểu gõ hoạt động thế nào?</h2>\n<p><b>Telex</b> dùng chữ cái để tạo dấu: gõ thêm chữ sau nguyên âm. <b>VNI</b> dùng các phím số từ 1 đến 9 ở hàng trên cùng.</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn gõ</th><th>Telex</th><th>VNI</th></tr>\n  <tr><td>Sắc · Huyền · Hỏi · Ngã · Nặng</td><td><kbd>s</kbd> <kbd>f</kbd> <kbd>r</kbd> <kbd>x</kbd> <kbd>j</kbd></td><td><kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> <kbd>5</kbd></td></tr>\n  <tr><td>â · ê · ô</td><td><kbd>aa</kbd> <kbd>ee</kbd> <kbd>oo</kbd></td><td><kbd>a6</kbd> <kbd>e6</kbd> <kbd>o6</kbd></td></tr>\n  <tr><td>ơ · ư</td><td><kbd>ow</kbd> <kbd>uw</kbd> (hoặc <kbd>w</kbd>)</td><td><kbd>o7</kbd> <kbd>u7</kbd></td></tr>\n  <tr><td>ă</td><td><kbd>aw</kbd></td><td><kbd>a8</kbd></td></tr>\n  <tr><td>đ</td><td><kbd>dd</kbd></td><td><kbd>d9</kbd></td></tr>\n  <tr><td>Ví dụ: “Việt Nam”</td><td class=\"mono\">Vieetj Nam</td><td class=\"mono\">Vie65t Nam</td></tr>\n</table></div>\n\n<h2>Telex: nhanh vì tay không rời hàng chữ</h2>\n<p>Mọi phím dấu của Telex đều là chữ cái, nằm gọn trong vùng ba hàng chữ mà ngón tay đã quen. Với người gõ 10 ngón, tay gần như không phải di chuyển xa, nên tốc độ thường nhỉnh hơn. Đây cũng là lý do Telex là kiểu gõ phổ biến nhất hiện nay, kể cả trên điện thoại.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nhược điểm lớn nhất của Telex là “dấu nhầm” khi gõ từ tiếng Anh hoặc tên riêng. Các chữ cái dùng làm dấu (<kbd>s</kbd> <kbd>f</kbd> <kbd>r</kbd> <kbd>x</kbd> <kbd>j</kbd> <kbd>w</kbd>) và nguyên âm đôi như “oo”, “ee” dễ bị biến đổi, ví dụ gõ “book” có thể thành “bôk”. Hãy bật chế độ <b>kiểm tra chính tả</b> trong bộ gõ hoặc tạm tắt tiếng Việt (thường bằng tổ hợp phím chuyển chế độ) khi gõ đoạn tiếng Anh dài.</div></div>\n\n<h2>VNI: ít nhầm lẫn khi gõ song ngữ</h2>\n<p>Vì dấu nằm ở phím số, VNI hầu như không gây nhầm khi gõ tiếng Anh. Nhưng ngón tay phải vươn lên hàng số liên tục, làm giảm tốc độ và dễ gõ lệch, nhất là khi văn bản có nhiều con số thật như bảng biểu, hóa đơn, số liệu kế toán.</p>\n\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Nên chọn Telex nếu…</b>Bạn gõ 10 ngón, chủ yếu soạn văn bản tiếng Việt, muốn tốc độ cao nhất và gõ thống nhất giữa máy tính và điện thoại.</div>\n  <div class=\"good\"><b>Nên chọn VNI nếu…</b>Bạn thường xuyên gõ xen tiếng Anh, mã lệnh, tên riêng nước ngoài, hoặc đã quen VNI từ lâu và gõ ổn định.</div>\n</div>\n\n<h2>Cài đặt nên bật trong bộ gõ</h2>\n<ol class=\"steps\">\n  <li><b>Bảng mã Unicode.</b> Luôn chọn Unicode dựng sẵn. Các bảng mã cũ như TCVN3 hay VNI Windows gây lỗi font khi gửi tài liệu cho người khác.</li>\n  <li><b>Kiểu đặt dấu mới</b> (“hoà” hay “hòa”). Chọn một kiểu và thống nhất trong toàn bộ tài liệu.</li>\n  <li><b>Kiểm tra chính tả</b> để bộ gõ tự khôi phục từ tiếng Anh bị gõ nhầm dấu.</li>\n  <li><b>Gõ tắt</b> cho các cụm hay dùng: tên công ty, chức danh, địa chỉ.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dù chọn kiểu nào, hãy dùng <b>một kiểu duy nhất</b> trên mọi thiết bị. Chuyển qua lại giữa Telex và VNI là nguyên nhân hàng đầu khiến tốc độ không tăng.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Telex nhanh hơn với người gõ 10 ngón vì tay không rời hàng chữ.</li><li>VNI ít nhầm khi gõ xen tiếng Anh nhưng phải vươn tay lên hàng số.</li><li>Luôn dùng bảng mã Unicode để tránh lỗi font.</li><li>Chọn một kiểu gõ và dùng thống nhất trên mọi thiết bị.</li></ul></div>",
    "cover": "/assets/img/blog/telex-hay-vni.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "loi-chinh-ta-tieng-viet",
    "cat": "Chính tả & văn bản",
    "date": "2026-10-06",
    "tags": [
      "Chính tả",
      "Tiếng Việt",
      "Biên tập"
    ],
    "title": "12 lỗi chính tả tiếng Việt phổ biến nhất trong văn bản và cách tránh",
    "excerpt": "“Chuẩn đoán”, “sơ xuất”, “xán lạn” hay “sáng lạn”? Tổng hợp những lỗi biên tập viên gặp nhiều nhất và mẹo nhớ đơn giản.",
    "body": "\n<p class=\"lead\">Một lỗi chính tả trong hợp đồng, báo cáo hay hồ sơ xin việc có thể làm người đọc đánh giá thấp cả tài liệu. Trong công việc biên tập hằng ngày, chúng tôi nhận thấy phần lớn lỗi lặp lại ở một nhóm từ quen thuộc. Dưới đây là 12 lỗi phổ biến nhất kèm cách nhớ.</p>\n\n<h2>Nhóm 1: Từ Hán Việt hay viết sai</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Viết sai</th><th>Viết đúng</th><th>Mẹo nhớ</th></tr>\n  <tr><td class=\"no\">chuẩn đoán</td><td class=\"ok\">chẩn đoán</td><td>“Chẩn” là khám bệnh, như trong “chẩn trị”.</td></tr>\n  <tr><td class=\"no\">sơ xuất</td><td class=\"ok\">sơ suất</td><td>“Suất” là sơ ý, sót. Không liên quan đến “xuất” (đi ra).</td></tr>\n  <tr><td class=\"no\">sáng lạn</td><td class=\"ok\">xán lạn</td><td>“Xán lạn” nghĩa là rực rỡ; “sáng lạn” là cách nói sai do liên tưởng.</td></tr>\n  <tr><td class=\"no\">bàng quang (với)</td><td class=\"ok\">bàng quan</td><td>“Bàng quan” là thờ ơ đứng ngoài; “bàng quang” là bộ phận cơ thể.</td></tr>\n  <tr><td class=\"no\">yếu điểm (= điểm yếu)</td><td class=\"ok\">điểm yếu</td><td>“Yếu điểm” nghĩa là điểm quan trọng, trái nghĩa hoàn toàn.</td></tr>\n  <tr><td class=\"no\">tham quan / thăm quan lẫn lộn</td><td class=\"ok\">tham quan</td><td>“Tham quan” là cách viết chuẩn trong từ điển.</td></tr>\n</table></div>\n\n<h2>Nhóm 2: Phụ âm đầu dễ nhầm</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Viết sai</th><th>Viết đúng</th><th>Ghi chú</th></tr>\n  <tr><td class=\"no\">suất sắc</td><td class=\"ok\">xuất sắc</td><td>“Xuất” là vượt lên, nổi bật.</td></tr>\n  <tr><td class=\"no\">chỉnh chu</td><td class=\"ok\">chỉn chu</td><td>Không có chữ “nh”, dù đọc gần giống “chỉnh”.</td></tr>\n  <tr><td class=\"no\">dành giật / giành dụm</td><td class=\"ok\">giành giật / dành dụm</td><td>“Giành” là tranh lấy; “dành” là để dụm, để riêng.</td></tr>\n  <tr><td class=\"no\">trau chuốt / chau chuốt lẫn lộn</td><td class=\"ok\">trau chuốt</td><td>“Trau” là sửa sang cho đẹp, như “trau dồi”.</td></tr>\n</table></div>\n\n<h2>Nhóm 3: Dấu hỏi – dấu ngã</h2>\n<p>Đây là nhóm lỗi khó nhất vì nhiều vùng phát âm hỏi và ngã như nhau. Hai trường hợp hay gặp:</p>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>“Mặc dù vậy, chúng tôi vẫn <u>giử</u> nguyên giá.”<br>“Sản phẩm đã được <u>kiễm</u> tra.”</div>\n  <div class=\"good\"><b>Đúng</b>“Mặc dù vậy, chúng tôi vẫn <b>giữ</b> nguyên giá.”<br>“Sản phẩm đã được <b>kiểm</b> tra.”</div>\n</div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Mẹo “Huyền – Ngã – Nặng”: trong từ láy âm, nếu một tiếng mang dấu huyền hoặc nặng thì tiếng kia thường mang dấu <b>ngã</b> (“nhõng nhẽo”, “vội vã”, “lặng lẽ”). Nếu một tiếng mang dấu ngang hoặc sắc thì tiếng kia thường mang dấu <b>hỏi</b> (“thơ thẩn”, “hớt hải”, “vui vẻ”). Quy tắc có ngoại lệ nhưng đúng trong phần lớn trường hợp.</div></div>\n\n<h2>Nhóm 4: “Giả thiết” và “giả thuyết”</h2>\n<p>Hai từ này có nghĩa khác nhau và đều đúng chính tả. <b>Giả thiết</b> là điều cho trước để suy luận, như trong bài toán. <b>Giả thuyết</b> là điều đưa ra để kiểm chứng, như trong nghiên cứu khoa học. Luận văn thường cần “giả thuyết nghiên cứu”, không phải “giả thiết nghiên cứu”.</p>\n\n<h2>Quy trình tự soát lỗi trong 10 phút</h2>\n<ol class=\"steps\">\n  <li>Bật kiểm tra chính tả tiếng Việt trong Word hoặc Google Docs. Công cụ này không bắt được mọi lỗi, nhưng lọc được lỗi gõ phím.</li>\n  <li>Dùng <b>Tìm kiếm</b> (<kbd>Ctrl</kbd> + <kbd>F</kbd>) với danh sách các từ hay sai ở trên.</li>\n  <li>Đọc to văn bản. Tai thường bắt được câu lủng củng mà mắt bỏ qua.</li>\n  <li>Đọc lại vào lúc khác, sau khi đã nghỉ một lúc, để nhìn văn bản bằng con mắt mới.</li>\n</ol>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Phần lớn lỗi tập trung vào một nhóm từ quen thuộc: hãy lập danh sách riêng để dò.</li><li>Mẹo Huyền – Ngã – Nặng giúp xử lý phần lớn từ láy hỏi/ngã.</li><li>“Giả thuyết” dùng trong nghiên cứu; “giả thiết” dùng cho điều cho trước.</li><li>Công cụ kiểm tra chính tả chỉ là bước đầu, vẫn cần người đọc soát.</li></ul></div>\n<p>Tài liệu quan trọng cần hoàn hảo? Dịch vụ <a href=\"/dich-vu/bien-tap-tai-lieu\">biên tập, hiệu đính</a> của chúng tôi rà soát từng câu, có đánh dấu thay đổi để bạn dễ duyệt.</p>",
    "cover": "/assets/img/blog/loi-chinh-ta-tieng-viet.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "ocr-hay-danh-may-thu-cong",
    "cat": "Kiến thức",
    "date": "2026-10-02",
    "tags": [
      "OCR",
      "Đánh máy thủ công"
    ],
    "title": "OCR hay đánh máy thủ công: lựa chọn nào cho tài liệu của bạn?",
    "excerpt": "Phần mềm nhận dạng ký tự (OCR) ngày càng tốt, nhưng vẫn còn nhiều trường hợp con người làm tốt hơn hẳn. Cùng so sánh chi tiết.",
    "body": "<p class=\"lead\">OCR (Optical Character Recognition) là công nghệ nhận dạng ký tự từ hình ảnh. Với tài liệu in rõ nét, OCR có thể cho kết quả khá tốt chỉ trong vài giây. Tuy nhiên, thực tế công việc văn phòng hiếm khi “đẹp” như vậy.</p><h2>Khi nào OCR thất bại?</h2><ul><li>Bản scan nghiêng, mờ, thiếu sáng hoặc có vết gấp.</li><li>Tài liệu có dấu mộc, chữ ký, hình mờ đè lên chữ.</li><li>Chữ viết tay — đặc biệt là chữ viết nhanh, viết tắt.</li><li>Bảng biểu phức tạp, nhiều cột, ô gộp.</li><li>Tiếng Việt có dấu: lỗi dấu là lỗi phổ biến nhất của OCR.</li></ul><h2>Chi phí ẩn của OCR</h2><p>Một trang OCR “miễn phí” có thể mất 10–20 phút để soát lỗi và định dạng lại. Với tài liệu 100 trang, đó là cả tuần làm việc. Trong khi đó, dịch vụ đánh máy thủ công giao cho bạn văn bản sạch, đúng bố cục ngay từ đầu.</p><blockquote>Nguyên tắc đơn giản: nếu bạn cần độ chính xác trên 99% và không có thời gian soát lỗi, hãy chọn con người.</blockquote><h2>Kết luận</h2><p>OCR phù hợp để tra cứu nhanh tài liệu in đẹp. Đánh máy thủ công phù hợp khi bạn cần một tài liệu hoàn chỉnh, đáng tin cậy để sử dụng ngay — hợp đồng, luận văn, hồ sơ lưu trữ, sách tái bản.</p>",
    "cover": "/assets/img/blog/ocr-hay-danh-may-thu-cong.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "sua-loi-font-tcvn3-vni-unicode",
    "cat": "Chính tả & văn bản",
    "date": "2026-09-30",
    "tags": [
      "Lỗi font",
      "TCVN3",
      "Unicode",
      "Unikey"
    ],
    "title": "Sửa lỗi font chữ tiếng Việt: chuyển TCVN3, VNI sang Unicode trong 2 phút",
    "excerpt": "Mở tài liệu cũ thấy toàn ký tự lạ như “Céng hßa”? Nguyên nhân là bảng mã cũ. Hướng dẫn chuyển đổi nhanh mà không phải gõ lại.",
    "body": "\n<p class=\"lead\">Bạn mở một quyết định, giáo án hay hợp đồng soạn từ nhiều năm trước và thấy toàn ký tự lạ: “Céng hßa x· héi chñ nghÜa ViÖt Nam”. Tài liệu không hỏng, nó chỉ đang dùng một <b>bảng mã cũ</b> mà máy tính hiện đại không còn hiểu đúng. Tin tốt là bạn có thể khôi phục nó chỉ trong vài phút.</p>\n<figure><img src=\"/assets/img/blog/sua-loi-font-tcvn3-vni-unicode.svg\" alt=\"Văn bản lỗi font TCVN3 được chuyển thành Unicode\" loading=\"lazy\" width=\"960\"><figcaption>Cùng một nội dung: bên trái là văn bản TCVN3 hiển thị bằng phông chữ thông thường, bên phải là sau khi chuyển sang Unicode.</figcaption></figure>\n\n<h2>Vì sao lại có lỗi font?</h2>\n<p>Trước khi Unicode trở thành chuẩn chung, tiếng Việt được mã hóa theo nhiều bảng mã khác nhau. Mỗi bảng mã đi kèm một bộ phông riêng:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bảng mã</th><th>Phông chữ đi kèm (dấu hiệu nhận biết)</th><th>Tình trạng</th></tr>\n  <tr><td><b>TCVN3 (ABC)</b></td><td>Tên phông bắt đầu bằng <span class=\"mono\">.Vn</span>, như <span class=\"mono\">.VnTime</span>, <span class=\"mono\">.VnArial</span></td><td>Phổ biến trong văn bản hành chính trước đây</td></tr>\n  <tr><td><b>VNI Windows</b></td><td>Tên phông bắt đầu bằng <span class=\"mono\">VNI-</span>, như <span class=\"mono\">VNI-Times</span></td><td>Phổ biến ở các trường học, cơ sở in ấn</td></tr>\n  <tr><td><b>Unicode</b></td><td>Times New Roman, Arial, Calibri… (phông thông thường)</td><td>Chuẩn hiện hành, dùng mọi nơi</td></tr>\n</table></div>\n<p>Khi máy không có phông <span class=\"mono\">.VnTime</span>, Word thay bằng phông khác và các ký tự có dấu hiển thị sai. Nếu đổi thẳng phông sang Times New Roman, chữ vẫn sai, vì mã ký tự bên dưới chưa được chuyển.</p>\n\n<h2>Cách chuyển bằng Unikey Toolkit</h2>\n<ol class=\"steps\">\n  <li><b>Sao chép</b> đoạn văn bản bị lỗi (<kbd>Ctrl</kbd> + <kbd>A</kbd> rồi <kbd>Ctrl</kbd> + <kbd>C</kbd>).</li>\n  <li><b>Mở công cụ chuyển mã</b>: nhấp chuột phải vào biểu tượng Unikey, chọn “Công cụ…”, hoặc nhấn <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F6</kbd>.</li>\n  <li>Ở mục <b>Nguồn</b>, chọn bảng mã cũ (TCVN3 hoặc VNI Windows). Ở mục <b>Đích</b>, chọn <b>Unicode</b>.</li>\n  <li>Đánh dấu <b>“Chuyển mã clipboard”</b> rồi bấm <b>Chuyển mã</b>.</li>\n  <li><b>Dán</b> vào tài liệu mới (<kbd>Ctrl</kbd> + <kbd>V</kbd>) và đặt phông Times New Roman hoặc Arial.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Chuyển mã qua clipboard thường <b>làm mất một phần định dạng</b> (bảng biểu, chữ đậm, khoảng cách). Với tài liệu nhiều bảng, hãy chuyển từng phần hoặc kiểm tra lại kỹ sau khi dán.</div></div>\n\n<h2>Khi nào chuyển mã không cứu được?</h2>\n<p>Có những trường hợp công cụ chuyển mã bó tay:</p>\n<ul>\n  <li><b>Tài liệu trộn nhiều bảng mã</b>: mỗi đoạn soạn bằng một phông khác nhau, chuyển đoạn này thì hỏng đoạn kia.</li>\n  <li><b>Bản PDF hoặc bản scan</b>: chữ đã thành hình ảnh hoặc bị nhúng phông, không còn mã ký tự để chuyển.</li>\n  <li><b>Tệp đã bị “sửa” nhiều lần</b> bằng cách đổi phông trực tiếp, khiến mã ký tự sai lệch không theo quy luật.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Với những trường hợp trên, gõ lại thủ công thường nhanh và chắc chắn hơn mất hàng giờ thử từng bảng mã. Đội ngũ của chúng tôi xử lý cả tài liệu chỉ còn bản in giấy hoặc bản scan mờ.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Lỗi font do tài liệu dùng bảng mã cũ TCVN3 hoặc VNI, không phải do tệp hỏng.</li><li>Đổi phông trực tiếp không sửa được; phải chuyển mã sang Unicode.</li><li>Unikey Toolkit (Ctrl + Shift + F6) chuyển mã nhanh qua clipboard.</li><li>Tài liệu trộn bảng mã, PDF hay bản scan nên gõ lại để đảm bảo chính xác.</li></ul></div>",
    "cover": "/assets/img/blog/sua-loi-font-tcvn3-vni-unicode.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "the-thuc-van-ban-nghi-dinh-30",
    "cat": "Chính tả & văn bản",
    "date": "2026-09-27",
    "tags": [
      "Nghị định 30/2020",
      "Văn bản hành chính",
      "Định dạng"
    ],
    "title": "Trình bày văn bản hành chính chuẩn Nghị định 30/2020: khổ giấy, lề, phông chữ",
    "excerpt": "Lề trái bao nhiêu? Quốc hiệu cỡ chữ mấy? Hướng dẫn trực quan các quy định thể thức văn bản hành chính quan trọng nhất.",
    "body": "\n<p class=\"lead\">Nghị định 30/2020/NĐ-CP về công tác văn thư quy định chi tiết cách trình bày văn bản hành chính, từ khổ giấy đến vị trí từng thành phần. Văn bản sai thể thức có thể bị trả lại, làm chậm cả quy trình xử lý. Bài viết tóm tắt những quy định hay dùng nhất để bạn trình bày đúng ngay từ đầu.</p>\n<figure><img src=\"/assets/img/blog/fig-le-nghi-dinh-30.svg\" alt=\"Sơ đồ khổ giấy A4 và lề văn bản theo Nghị định 30/2020\" loading=\"lazy\" width=\"960\"><figcaption>Khổ A4 với lề trái lớn hơn lề phải để chừa chỗ đóng tập, lưu trữ.</figcaption></figure>\n\n<h2>Khổ giấy, lề và phông chữ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Yếu tố</th><th>Quy định</th></tr>\n  <tr><td>Khổ giấy</td><td>A4 (210 × 297 mm), trình bày theo chiều dài</td></tr>\n  <tr><td>Lề trên / lề dưới</td><td>20–25 mm</td></tr>\n  <tr><td>Lề trái</td><td>30–35 mm</td></tr>\n  <tr><td>Lề phải</td><td>15–20 mm</td></tr>\n  <tr><td>Phông chữ</td><td>Phông tiếng Việt bộ mã Unicode (TCVN 6909:2001), thường dùng Times New Roman, màu đen</td></tr>\n  <tr><td>Cỡ chữ phần nội dung</td><td>13–14</td></tr>\n  <tr><td>Giãn dòng</td><td>Tối thiểu dòng đơn, tối đa 1,5 dòng; khoảng cách giữa các đoạn tối thiểu 6 pt</td></tr>\n  <tr><td>Thụt đầu dòng</td><td>1–1,27 cm</td></tr>\n</table></div>\n\n<h2>Phần đầu văn bản</h2>\n<p>Phần đầu được chia thành hai cột:</p>\n<ul>\n  <li><b>Bên trái</b>: tên cơ quan ban hành (in hoa, đứng, đậm), số và ký hiệu văn bản.</li>\n  <li><b>Bên phải</b>: Quốc hiệu “CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM” (in hoa, cỡ 12–13, đứng, đậm) và Tiêu ngữ “Độc lập - Tự do - Hạnh phúc” (in thường, cỡ 13–14, đứng, đậm, có đường kẻ ngang bên dưới), tiếp theo là địa danh, ngày tháng năm (in thường, nghiêng).</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng bảng 2 cột không viền để căn phần đầu thay vì dùng phím cách hay Tab. Bố cục sẽ không bị xô lệch khi người khác mở trên máy có phông khác.</div></div>\n\n<h2>Tên loại và trích yếu</h2>\n<p>Tên loại văn bản (QUYẾT ĐỊNH, TỜ TRÌNH, BÁO CÁO…) in hoa, cỡ 13–14, đứng, đậm, căn giữa. Trích yếu nội dung đặt ngay dưới, in thường, đứng, đậm, căn giữa. Riêng công văn thì trích yếu đặt dưới số và ký hiệu, cỡ 12–13.</p>\n\n<h2>Lỗi thể thức thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Thường gặp</b>Căn lề bằng phím cách; dùng phông .VnTime; tiêu ngữ thiếu gạch nối hoặc dùng sai dấu; số trang đặt ở trang đầu.</div>\n  <div class=\"good\"><b>Nên làm</b>Căn bằng bảng/tab; phông Unicode; tiêu ngữ có gạch nối giữa các cụm từ; số trang đặt giữa lề trên, không hiển thị ở trang thứ nhất.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Bài viết tóm tắt các quy định phổ biến để tham khảo nhanh. Với văn bản chính thức, hãy đối chiếu phụ lục của Nghị định 30/2020/NĐ-CP và hướng dẫn riêng của cơ quan bạn.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Khổ A4, lề trái 30–35 mm, lề phải 15–20 mm, lề trên/dưới 20–25 mm.</li><li>Phông Unicode (thường Times New Roman), cỡ 13–14 cho nội dung.</li><li>Căn phần đầu bằng bảng không viền thay vì phím cách.</li><li>Số trang đặt giữa lề trên, bỏ qua trang đầu.</li></ul></div>\n<p>Cần chuẩn hóa hàng loạt văn bản cũ theo đúng thể thức? Dịch vụ <a href=\"/dich-vu/danh-may-van-ban-phap-ly\">đánh máy văn bản hành chính, pháp lý</a> của chúng tôi bám sát Nghị định 30/2020.</p>",
    "cover": "/assets/img/blog/the-thuc-van-ban-nghi-dinh-30.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "meo-chup-tai-lieu-bang-dien-thoai",
    "cat": "Mẹo hay",
    "date": "2026-09-24",
    "tags": [
      "Chụp tài liệu",
      "Điện thoại"
    ],
    "title": "7 mẹo chụp tài liệu bằng điện thoại để đánh máy nhanh và chính xác hơn",
    "excerpt": "Một tấm ảnh rõ nét giúp rút ngắn thời gian xử lý và giảm chi phí. Áp dụng ngay 7 mẹo đơn giản sau.",
    "body": "<p class=\"lead\">Phần lớn tài liệu khách hàng gửi cho chúng tôi là ảnh chụp từ điện thoại. Chất lượng ảnh ảnh hưởng trực tiếp tới tốc độ và độ chính xác của bản đánh máy.</p><ol><li><b>Chụp ở nơi đủ sáng</b>, ưu tiên ánh sáng tự nhiên, tránh bóng đổ của tay và điện thoại.</li><li><b>Đặt điện thoại song song</b> với mặt giấy để tránh méo hình.</li><li><b>Tắt đèn flash</b> với giấy bóng để không bị lóa.</li><li><b>Chụp từng trang một</b>, không chụp hai trang sách cùng lúc.</li><li><b>Dùng chế độ quét tài liệu</b> có sẵn trong Ghi chú (iPhone) hoặc Google Drive (Android).</li><li><b>Đặt tên tệp theo thứ tự</b>: 01.jpg, 02.jpg… để chúng tôi ghép đúng trình tự.</li><li><b>Gộp thành một tệp PDF</b> nếu có nhiều trang để dễ tải lên.</li></ol><p>Chỉ cần vài giây chuẩn bị, bạn đã giúp bản đánh máy được giao sớm hơn và chính xác hơn.</p>",
    "cover": "/assets/img/blog/meo-chup-tai-lieu-bang-dien-thoai.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "so-hoa-gia-pha-hoi-ky",
    "cat": "Câu chuyện",
    "date": "2026-09-19",
    "tags": [
      "Gia phả",
      "Hồi ký",
      "Số hóa",
      "Lưu giữ ký ức"
    ],
    "title": "Số hóa gia phả và hồi ký viết tay: giữ ký ức gia đình cho thế hệ sau",
    "excerpt": "Những cuốn sổ ố vàng của ông bà đang phai mực từng ngày. Hướng dẫn số hóa đúng cách để lưu giữ trọn vẹn và chia sẻ cho cả dòng họ.",
    "body": "\n<p class=\"lead\">Trong nhiều gia đình Việt, cuốn gia phả chép tay hay tập hồi ký của ông bà là tài sản quý nhất. Nhưng giấy ố vàng, mực phai và nét chữ xưa ngày càng khó đọc. Số hóa không chỉ là chụp ảnh lại: đó là cách giúp con cháu đọc được, tìm kiếm được và in thành sách để mỗi nhánh trong họ đều giữ một bản.</p>\n\n<h2>Vì sao nên số hóa ngay từ bây giờ?</h2>\n<ul>\n  <li><b>Giấy cũ xuống cấp nhanh</b>: ẩm mốc, mối mọt, mực bay màu theo thời gian.</li>\n  <li><b>Người đọc được chữ viết tay xưa ngày càng ít</b>: nét chữ, cách viết tắt và từ cổ khó với thế hệ trẻ.</li>\n  <li><b>Chia sẻ dễ dàng</b>: bản điện tử gửi được cho con cháu ở xa, in thành sách cho các chi họ.</li>\n  <li><b>Tìm kiếm tức thì</b>: tra tên một cụ, ngày giỗ hay một chi họ chỉ trong vài giây.</li>\n</ul>\n<figure><img src=\"/assets/img/blog/so-hoa-gia-pha-hoi-ky.svg\" alt=\"Minh họa sổ gia phả viết tay được số hóa thành sơ đồ phả hệ\" loading=\"lazy\" width=\"960\"><figcaption>Từ trang sổ viết tay đến sơ đồ phả hệ rõ ràng, dễ tra cứu.</figcaption></figure>\n\n<h2>Quy trình số hóa 4 bước</h2>\n<ol class=\"steps\">\n  <li><b>Bảo quản và chụp ảnh.</b> Lật trang nhẹ tay, chụp nơi đủ sáng tự nhiên, điện thoại song song mặt giấy. Chụp cả bìa và những trang có ghi chú bên lề.</li>\n  <li><b>Đánh máy lại nội dung.</b> Gõ thành văn bản Word, giữ nguyên cách xưng hô và từ ngữ gốc. Những chữ không đọc được nên đánh dấu <span class=\"mono\">[?]</span> thay vì đoán.</li>\n  <li><b>Hiệu đính cùng người trong họ.</b> Các cụ cao niên thường nhớ tên người, địa danh mà chữ viết đã mờ. Đây là bước quý nhất.</li>\n  <li><b>Trình bày và lưu trữ.</b> Lập mục lục theo đời, chi; thêm sơ đồ phả hệ; xuất bản PDF; lưu nhiều nơi (ổ cứng, dịch vụ đám mây) và in vài bản giấy.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Giữ nguyên bản ảnh chụp cùng bản đánh máy. Sau này nếu có tranh luận về một chữ, cả nhà có thể đối chiếu lại bản gốc.</div></div>\n\n<h2>Những điểm cần cẩn trọng</h2>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Gia phả thường có chữ Hán Nôm hoặc từ cổ. Nếu gặp, hãy giữ nguyên chữ gốc, kèm phiên âm và chú thích, thay vì tự “hiện đại hóa” câu chữ, vì làm vậy có thể sai lệch ý nghĩa.</div></div>\n<p>Ngoài ra, hãy hỏi ý kiến những người lớn tuổi trong họ trước khi công bố rộng rãi: gia phả có thể chứa thông tin riêng tư mà gia đình chưa muốn chia sẻ ra ngoài.</p>\n\n<h2>Thành quả đáng giá</h2>\n<blockquote>Hãy hình dung tập hồi ký ông viết tay suốt hai mươi năm, nay được in thành cuốn sách gọn gàng, đủ cho mỗi người cháu một bản. Với nhiều gia đình, đó là lần đầu các thế hệ sau đọc trọn vẹn câu chuyện của ông bà mình.</blockquote>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Số hóa càng sớm càng tốt vì giấy và mực xuống cấp theo thời gian.</li><li>Đánh dấu chữ không đọc được bằng [?], không tự đoán.</li><li>Hiệu đính cùng người cao tuổi trong họ là bước quan trọng nhất.</li><li>Lưu cả ảnh gốc và bản đánh máy ở nhiều nơi.</li></ul></div>\n<p>Chúng tôi nhận đánh máy gia phả, hồi ký, nhật ký viết tay với sự cẩn trọng và bảo mật tuyệt đối. <a href=\"/dich-vu/viet-tay-sang-word\">Tìm hiểu dịch vụ chuyển chữ viết tay sang Word</a>.</p>",
    "cover": "/assets/img/blog/so-hoa-gia-pha-hoi-ky.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "phim-tat-word",
    "cat": "Mẹo hay",
    "date": "2026-09-16",
    "tags": [
      "Microsoft Word",
      "Phím tắt",
      "Năng suất"
    ],
    "title": "25 phím tắt Microsoft Word giúp bạn soạn thảo nhanh gấp đôi",
    "excerpt": "Bỏ chuột, giữ tay trên bàn phím. Bộ phím tắt được chuyên viên đánh máy dùng hằng ngày, chia theo nhóm dễ nhớ.",
    "body": "\n<p class=\"lead\">Mỗi lần rời bàn phím để cầm chuột chỉ mất một hai giây, nhưng lặp lại hàng trăm lần mỗi ngày thì thành hàng chục phút. Các chuyên viên đánh máy gần như không dùng chuột khi soạn thảo. Dưới đây là 25 phím tắt Word họ dùng nhiều nhất, chia theo nhóm để dễ nhớ.</p>\n\n<h2>Định dạng chữ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>B</kbd> · <kbd>Ctrl</kbd> + <kbd>I</kbd> · <kbd>Ctrl</kbd> + <kbd>U</kbd></td><td>Đậm · nghiêng · gạch chân</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>></kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd><</kbd></td><td>Tăng / giảm cỡ chữ</td></tr>\n  <tr><td><kbd>Shift</kbd> + <kbd>F3</kbd></td><td>Đổi kiểu chữ: thường → HOA → Hoa Đầu Từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>=</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd></td><td>Chỉ số dưới (H₂O) / chỉ số trên (m²)</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Space</kbd></td><td>Xóa định dạng ký tự, trả về kiểu mặc định</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd></td><td>Sao chép / dán định dạng (như cây cọ định dạng)</td></tr>\n</table></div>\n\n<h2>Đoạn văn và bố cục</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>L</kbd> · <kbd>Ctrl</kbd> + <kbd>E</kbd> · <kbd>Ctrl</kbd> + <kbd>R</kbd> · <kbd>Ctrl</kbd> + <kbd>J</kbd></td><td>Căn trái · giữa · phải · đều hai bên</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>1</kbd> / <kbd>Ctrl</kbd> + <kbd>5</kbd> / <kbd>Ctrl</kbd> + <kbd>2</kbd></td><td>Giãn dòng đơn / 1,5 / đôi</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> · <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> · <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd></td><td>Áp dụng Heading 1 · 2 · 3 (để tạo mục lục tự động)</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Q</kbd></td><td>Xóa định dạng đoạn văn</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Enter</kbd></td><td>Ngắt trang (không dùng Enter liên tục)</td></tr>\n  <tr><td><kbd>Shift</kbd> + <kbd>Enter</kbd></td><td>Xuống dòng nhưng vẫn cùng đoạn</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hãy dùng <b>Heading</b> cho tiêu đề chương mục thay vì chỉ bôi đậm và tăng cỡ chữ. Bạn sẽ có mục lục tự động và khung điều hướng (Navigation Pane) chỉ với vài cú bấm.</div></div>\n\n<h2>Di chuyển và chọn nhanh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>←</kbd> / <kbd>Ctrl</kbd> + <kbd>→</kbd></td><td>Nhảy từng từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd></td><td>Chọn từng từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Home</kbd> / <kbd>Ctrl</kbd> + <kbd>End</kbd></td><td>Về đầu / cuối tài liệu</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Backspace</kbd></td><td>Xóa cả từ phía trước</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>G</kbd></td><td>Đi tới trang, mục, bảng cụ thể</td></tr>\n</table></div>\n\n<h2>Những phím tắt “thần thánh”</h2>\n<ol class=\"steps\">\n  <li><kbd>F4</kbd>: <b>lặp lại thao tác vừa làm</b>. Vừa tô vàng một từ? Chọn từ khác và nhấn F4. Trên laptop có thể cần <kbd>Fn</kbd> + <kbd>F4</kbd>.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>H</kbd>: <b>Tìm và thay thế</b>, sửa hàng loạt lỗi chỉ trong một lần.</li>\n  <li><kbd>Alt</kbd> + <kbd>=</kbd>: <b>chèn phương trình</b> toán học.</li>\n  <li><kbd>F7</kbd>: <b>kiểm tra chính tả</b> toàn bộ tài liệu.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>Z</kbd> / <kbd>Ctrl</kbd> + <kbd>Y</kbd>: hoàn tác / làm lại.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Phím tắt có thể khác đôi chút giữa các phiên bản Word và trên macOS (thay <kbd>Ctrl</kbd> bằng <kbd>⌘ Cmd</kbd>). Bảng trên áp dụng cho Word trên Windows.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Học theo nhóm: định dạng chữ, đoạn văn, di chuyển, rồi các phím đặc biệt.</li><li>F4 lặp lại thao tác là phím tiết kiệm thời gian nhất.</li><li>Dùng Heading để có mục lục tự động.</li><li>Ctrl + Enter để ngắt trang, không nhấn Enter liên tục.</li></ul></div>",
    "cover": "/assets/img/blog/phim-tat-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "chuyen-am-phong-van-nghien-cuu",
    "cat": "Chuyển âm",
    "date": "2026-09-12",
    "tags": [
      "Chuyển âm",
      "Nghiên cứu định tính"
    ],
    "title": "Chuyển âm phỏng vấn cho nghiên cứu định tính: những điều cần biết",
    "excerpt": "Nguyên văn hay làm sạch? Có cần mốc thời gian? Hướng dẫn chọn đúng kiểu chuyển âm cho luận văn và đề tài nghiên cứu.",
    "body": "<p class=\"lead\">Trong nghiên cứu định tính, bản chuyển âm phỏng vấn chính là dữ liệu gốc để phân tích. Chọn sai kiểu chuyển âm có thể khiến bạn mất nhiều thời gian xử lý lại.</p><h2>Nguyên văn (verbatim)</h2><p>Giữ lại mọi từ đệm, ngập ngừng, lặp từ, tiếng cười, khoảng lặng. Phù hợp với phân tích diễn ngôn, tâm lý học, ngôn ngữ học.</p><h2>Làm sạch (clean verbatim)</h2><p>Lược bỏ từ đệm và lỗi nói, giữ nguyên ý. Dễ đọc, phù hợp phần lớn đề tài xã hội học, kinh tế, giáo dục.</p><h2>Mốc thời gian</h2><p>Gắn [00:12:45] theo từng lượt nói giúp bạn nhanh chóng nghe lại đoạn cần trích dẫn — rất hữu ích khi viết báo cáo.</p><h2>Đạo đức nghiên cứu</h2><p>Hãy đảm bảo đơn vị chuyển âm cam kết bảo mật (NDA) và có thể ẩn danh tên người tham gia theo yêu cầu. Đánh máy 247 hỗ trợ cả hai.</p>",
    "cover": "/assets/img/blog/chuyen-am-phong-van-nghien-cuu.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "danh-may-cong-thuc-toan",
    "cat": "Học thuật",
    "date": "2026-09-05",
    "tags": [
      "Công thức toán",
      "Word Equation",
      "MathType",
      "LaTeX"
    ],
    "title": "Đánh máy công thức toán học: Word Equation, MathType hay LaTeX?",
    "excerpt": "Giáo án, đề thi, bài báo khoa học đều cần công thức đẹp và chính xác. So sánh ba công cụ phổ biến để chọn đúng cho nhu cầu của bạn.",
    "body": "\n<p class=\"lead\">Một đề thi toán 4 trang có thể chứa hơn trăm công thức. Gõ sai một chỉ số hay một dấu căn là cả bài giải đổi nghĩa. Vì vậy chọn đúng công cụ quyết định cả tốc độ lẫn độ chính xác. Ba lựa chọn phổ biến nhất hiện nay là Word Equation, MathType và LaTeX.</p>\n\n<h2>So sánh nhanh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Word Equation</th><th>MathType</th><th>LaTeX</th></tr>\n  <tr><td>Chi phí</td><td>Có sẵn trong Word</td><td>Bản quyền trả phí</td><td>Miễn phí</td></tr>\n  <tr><td>Độ khó</td><td>Dễ</td><td>Dễ</td><td>Cần học cú pháp</td></tr>\n  <tr><td>Tốc độ khi đã quen</td><td>Nhanh (gõ tuyến tính)</td><td>Trung bình</td><td>Rất nhanh</td></tr>\n  <tr><td>Chất lượng trình bày</td><td>Tốt</td><td>Tốt</td><td>Xuất sắc, chuẩn xuất bản</td></tr>\n  <tr><td>Phù hợp</td><td>Giáo án, đề kiểm tra</td><td>Tài liệu đã dùng MathType sẵn</td><td>Bài báo, luận án, sách chuyên khảo</td></tr>\n</table></div>\n\n<h2>Word Equation: nhanh hơn bạn nghĩ</h2>\n<p>Nhấn <kbd>Alt</kbd> + <kbd>=</kbd> để chèn phương trình, rồi gõ theo kiểu tuyến tính, Word tự dựng thành công thức. Ví dụ gõ <span class=\"mono\">x=(-b\\pm\\sqrt(\\Delta))/(2a)</span> rồi nhấn phím cách là ra công thức nghiệm hoàn chỉnh.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Word Equation hiểu nhiều lệnh giống LaTeX như <span class=\"mono\">\\alpha</span>, <span class=\"mono\">\\sum</span>, <span class=\"mono\">\\int</span>, <span class=\"mono\">\\infty</span>. Nếu đã quen LaTeX, bạn sẽ gõ trong Word rất nhanh.</div></div>\n\n<h2>LaTeX: tiêu chuẩn của giới học thuật</h2>\n<p>LaTeX tách nội dung khỏi trình bày: bạn viết mã, trình biên dịch dựng thành PDF chuẩn đẹp. Hầu hết tạp chí khoa học quốc tế có mẫu LaTeX riêng. Ví dụ một công thức:</p>\n<p class=\"mono\" style=\"background:#f6f7fb;padding:14px 16px;border-radius:10px;font-size:15px\">\\[ \\int_{0}^{\\infty} e^{-x^2}\\,dx = \\frac{\\sqrt{\\pi}}{2} \\]</p>\n<p>Đổi lại, bạn cần thời gian làm quen với cú pháp, và đồng nghiệp chỉ quen Word sẽ khó chỉnh sửa trực tiếp.</p>\n\n<h2>Lời khuyên chọn công cụ</h2>\n<ol class=\"steps\">\n  <li><b>Giáo viên soạn giáo án, đề kiểm tra</b>: Word Equation là đủ, chia sẻ dễ với đồng nghiệp.</li>\n  <li><b>Tài liệu cũ đã dùng MathType</b>: tiếp tục dùng MathType để không phải dựng lại công thức.</li>\n  <li><b>Nghiên cứu sinh, giảng viên viết bài báo</b>: đầu tư học LaTeX, lợi ích kéo dài suốt sự nghiệp.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Khi chuyển tài liệu giữa các công cụ (ví dụ MathType sang Word Equation), công thức có thể bị biến thành ảnh hoặc lệch ký hiệu. Luôn kiểm tra lại từng công thức sau khi chuyển.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Word Equation (Alt + =) đủ dùng cho giáo án và đề kiểm tra.</li><li>LaTeX cho chất lượng xuất bản, là chuẩn của tạp chí khoa học.</li><li>Giữ công cụ cũ nếu tài liệu đã dùng MathType.</li><li>Luôn soát lại công thức sau khi chuyển đổi giữa các công cụ.</li></ul></div>\n<p>Chúng tôi nhận <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a> bằng Word Equation, MathType và <a href=\"/dich-vu/danh-may-latex\">LaTeX</a>, đối chiếu từng ký hiệu với bản gốc.</p>",
    "cover": "/assets/img/blog/danh-may-cong-thuc-toan.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "dinh-dang-luan-van-chuan",
    "cat": "Học thuật",
    "date": "2026-08-30",
    "tags": [
      "Luận văn",
      "Định dạng"
    ],
    "title": "Định dạng luận văn chuẩn: checklist trước ngày nộp",
    "excerpt": "Font, lề, giãn dòng, mục lục tự động, danh mục bảng biểu… Checklist đầy đủ để luận văn của bạn không bị trả về vì lỗi hình thức.",
    "body": "<p class=\"lead\">Nhiều luận văn có nội dung tốt nhưng bị trừ điểm vì trình bày. Dưới đây là checklist chúng tôi dùng khi định dạng luận văn cho khách hàng.</p><h2>Trang và chữ</h2><ul><li>Khổ A4, lề trái 3–3,5 cm, lề phải 2 cm, trên/dưới 2–2,5 cm (theo quy định từng trường).</li><li>Font Times New Roman 13–14, giãn dòng 1,3–1,5.</li></ul><h2>Cấu trúc</h2><ul><li>Dùng Heading 1/2/3 cho chương, mục, tiểu mục.</li><li>Mục lục, danh mục bảng, danh mục hình tạo tự động.</li><li>Đánh số trang: phần đầu bằng số La Mã, phần chính bằng số Ả Rập.</li></ul><h2>Trích dẫn</h2><ul><li>Thống nhất một chuẩn: APA, IEEE hoặc Harvard.</li><li>Mọi trích dẫn trong bài đều có trong danh mục tài liệu tham khảo và ngược lại.</li></ul><p>Không có thời gian? Dịch vụ <a href=\"/dich-vu/dinh-dang-tai-lieu\">định dạng tài liệu</a> của chúng tôi xử lý một luận văn 80 trang trong khoảng 24–48 giờ.</p>",
    "cover": "/assets/img/blog/dinh-dang-luan-van-chuan.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "tu-the-ngoi-go-phim",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-08-24",
    "tags": [
      "Sức khỏe văn phòng",
      "Tư thế ngồi",
      "Ergonomics"
    ],
    "title": "Tư thế ngồi gõ phím đúng: không còn đau cổ, mỏi vai, tê cổ tay",
    "excerpt": "Ngồi máy tính 8 tiếng mỗi ngày mà đau cổ, tê tay? Vài điều chỉnh nhỏ về ghế, màn hình và bàn phím tạo khác biệt lớn.",
    "body": "\n<p class=\"lead\">Người làm văn phòng, sinh viên và đặc biệt là người làm nghề đánh máy ngồi trước máy tính nhiều giờ mỗi ngày. Đau cổ, mỏi vai, tê cổ tay thường không đến từ công việc, mà từ tư thế sai lặp lại hàng nghìn lần. Một vài điều chỉnh đơn giản giúp bạn làm việc bền bỉ hơn nhiều.</p>\n<figure><img src=\"/assets/img/blog/fig-tu-the-ngoi.svg\" alt=\"Sơ đồ tư thế ngồi làm việc với máy tính đúng cách\" loading=\"lazy\" width=\"960\"><figcaption>Tư thế chuẩn: mắt ngang mép trên màn hình, khuỷu tay khoảng 90°, cổ tay thẳng, bàn chân đặt phẳng.</figcaption></figure>\n\n<h2>Năm điểm kiểm tra tư thế</h2>\n<ol class=\"steps\">\n  <li><b>Màn hình:</b> mép trên ngang hoặc thấp hơn tầm mắt một chút, cách mắt khoảng một sải tay (50–70 cm). Dùng laptop thì nên kê cao và dùng bàn phím rời.</li>\n  <li><b>Lưng:</b> tựa sát lưng ghế, giữ đường cong tự nhiên của cột sống. Có thể kê một gối nhỏ sau thắt lưng.</li>\n  <li><b>Khuỷu tay:</b> khoảng 90°, sát thân người, vai thả lỏng, không nhún lên.</li>\n  <li><b>Cổ tay:</b> thẳng hàng với cẳng tay, không gập lên hay gập xuống khi gõ.</li>\n  <li><b>Chân:</b> bàn chân đặt phẳng trên sàn, đầu gối ngang hoặc thấp hơn hông một chút. Nếu ghế cao, hãy dùng gác chân.</li>\n</ol>\n\n<h2>Nguyên tắc 20-20-20 cho đôi mắt</h2>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Cứ <b>20 phút</b>, hãy nhìn một vật cách xa khoảng <b>6 mét (20 feet)</b> trong <b>20 giây</b>. Thói quen nhỏ này giúp mắt giảm mỏi và khô đáng kể khi nhìn màn hình lâu.</div></div>\n\n<h2>Những thói quen âm thầm gây hại</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Tránh</b>Gõ phím trên đùi hoặc trên giường; tì cổ tay lên mép bàn cứng; cúi đầu nhìn laptop đặt thấp; ngồi liền mạch hai, ba tiếng.</div>\n  <div class=\"good\"><b>Nên</b>Đặt bàn phím ngang khuỷu tay; dùng đệm kê cổ tay khi nghỉ; kê laptop ngang tầm mắt; đứng dậy vận động 3–5 phút sau mỗi 30–60 phút.</div>\n</div>\n\n<h2>Bài giãn cơ 2 phút tại chỗ</h2>\n<ul>\n  <li><b>Cổ:</b> nghiêng đầu từ từ sang trái, giữ 10 giây, rồi đổi bên.</li>\n  <li><b>Vai:</b> xoay vai ra sau 10 vòng, rồi xoay ra trước 10 vòng.</li>\n  <li><b>Cổ tay:</b> duỗi thẳng tay, dùng tay kia nhẹ nhàng kéo các ngón về phía thân, giữ 15 giây.</li>\n  <li><b>Lưng:</b> đan tay, vươn thẳng lên cao, giữ 10 giây.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nếu bạn bị tê, đau kéo dài ở cổ tay, ngón tay hoặc cổ vai gáy, hãy đi khám bác sĩ. Bài viết chỉ mang tính tham khảo, không thay thế tư vấn y khoa.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Mép trên màn hình ngang tầm mắt, cách 50–70 cm.</li><li>Khuỷu tay khoảng 90°, cổ tay thẳng, vai thả lỏng.</li><li>Áp dụng quy tắc 20-20-20 cho mắt.</li><li>Đứng dậy vận động vài phút sau mỗi 30–60 phút ngồi.</li></ul></div>",
    "cover": "/assets/img/blog/tu-the-ngoi-go-phim.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "so-hoa-tai-lieu-doanh-nghiep",
    "cat": "Doanh nghiệp",
    "date": "2026-08-15",
    "tags": [
      "Số hóa",
      "Lưu trữ hồ sơ"
    ],
    "title": "Số hóa hồ sơ giấy cho doanh nghiệp nhỏ: bắt đầu từ đâu?",
    "excerpt": "Kho hồ sơ giấy chiếm diện tích, khó tra cứu và dễ thất lạc. Lộ trình 4 bước để số hóa hiệu quả mà không tốn kém.",
    "body": "<p class=\"lead\">Số hóa không chỉ là scan. Một hồ sơ số thực sự hữu ích phải tìm kiếm được, chỉnh sửa được và được tổ chức khoa học.</p><h2>Bước 1: Phân loại</h2><p>Chia hồ sơ thành nhóm: hợp đồng, hóa đơn, nhân sự, kỹ thuật… và xác định mức độ ưu tiên.</p><h2>Bước 2: Scan và đặt tên</h2><p>Scan 300 dpi, đặt tên tệp theo quy tắc thống nhất, ví dụ <i>HD_2025_KhachHangA.pdf</i>.</p><h2>Bước 3: Chuyển thành văn bản</h2><p>Với tài liệu cần chỉnh sửa hoặc trích xuất dữ liệu, hãy chuyển sang Word/Excel. Đây là bước chúng tôi hỗ trợ tốt nhất.</p><h2>Bước 4: Lưu trữ và phân quyền</h2><p>Đưa lên Google Drive, SharePoint hoặc hệ thống quản lý tài liệu, phân quyền truy cập rõ ràng.</p>",
    "cover": "/assets/img/blog/so-hoa-tai-lieu-doanh-nghiep.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "bao-mat-khi-thue-ngoai-danh-may",
    "cat": "Doanh nghiệp",
    "date": "2026-07-28",
    "tags": [
      "Bảo mật",
      "NDA"
    ],
    "title": "Thuê ngoài đánh máy có an toàn không? 5 câu hỏi nên đặt ra",
    "excerpt": "Trước khi gửi tài liệu nhạy cảm cho bất kỳ đơn vị nào, hãy hỏi 5 câu hỏi sau để bảo vệ dữ liệu của bạn.",
    "body": "<p class=\"lead\">Tài liệu bạn gửi đi có thể chứa thông tin cá nhân, bí mật kinh doanh hoặc dữ liệu pháp lý. Đây là 5 câu hỏi bạn nên hỏi bất kỳ nhà cung cấp nào:</p><ol><li>Nhân sự có ký thỏa thuận bảo mật (NDA) không?</li><li>Tệp được lưu ở đâu và bao lâu thì bị xóa?</li><li>Có truyền tệp qua kết nối mã hóa (HTTPS) không?</li><li>Ai có quyền truy cập vào tài liệu của tôi?</li><li>Có thể ký hợp đồng bảo mật riêng với doanh nghiệp không?</li></ol><p>Tại Đánh máy 247, toàn bộ nhân sự làm việc theo NDA, tệp được xóa sau 30 ngày kể từ khi hoàn thành (hoặc sớm hơn theo yêu cầu), và chúng tôi sẵn sàng ký hợp đồng bảo mật riêng.</p>",
    "cover": "/assets/img/blog/bao-mat-khi-thue-ngoai-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  }
];
