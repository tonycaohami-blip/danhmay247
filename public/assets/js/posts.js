/* =========================================================
   Đánh máy 247 - Bài viết blog (tự động tạo, sửa nội dung trực tiếp tại đây)
   Mỗi bài: slug, cat (chuyên mục), date, tags, title, excerpt, body (HTML), seoTitle (tùy chọn, thẻ <title>), faq (tùy chọn: [{q, a}]), cover, author, read (phút)
   Ảnh bìa: public/assets/img/blog/<slug>.svg - tạo lại bằng: node scripts/make-blog-images.js
   ========================================================= */
window.DM = window.DM || {};
DM.posts = [
  {
    "slug": "huong-dan-chuong-trinh-doi-tac-danh-may-247",
    "cat": "Đối tác",
    "date": "2026-10-20",
    "tags": [
      "Đối tác",
      "Hoa hồng 30%",
      "Quán photocopy",
      "Mã QR giới thiệu",
      "Hướng dẫn"
    ],
    "title": "Hướng dẫn chương trình đối tác Đánh máy 247 từng bước (có ảnh thực tế): đăng ký, in poster QR, theo dõi đơn và nhận hoa hồng 30%",
    "seoTitle": "Hướng dẫn chương trình đối tác Đánh máy 247 từng bước (có ảnh)",
    "excerpt": "Hướng dẫn từng bước chương trình đối tác Đánh máy 247 kèm ảnh màn hình thật: đăng ký, nhận mã QR, in poster, theo dõi đơn và nhận hoa hồng 30%.",
    "body": "<p class=\"lead\">Mỗi ngày, quầy photocopy của bạn gặp không ít khách cầm xấp giấy viết tay hỏi “gõ lại giúp được không?”, hay sinh viên cần chuyển PDF sang Word để sửa luận văn. Trước đây, bạn chỉ có hai lựa chọn: từ chối, hoặc tự ngồi gõ. <a href=\"/doi-tac\">Chương trình đối tác Đánh máy 247</a> mở ra lựa chọn thứ ba: giới thiệu khách bằng mã QR riêng của tiệm, chúng tôi làm toàn bộ phần việc, còn bạn nhận <b>30% giá trị mỗi đơn hoàn thành</b>. Bài viết này đi qua từng bước - từ lúc đăng ký đến lúc tiền về tài khoản - kèm <b>12 ảnh chụp màn hình thực tế</b> của hệ thống, để bạn biết chính xác mình sẽ thấy gì và cần bấm vào đâu.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Ảnh trong bài được chụp trực tiếp từ hệ thống Đánh máy 247. Tên cửa hàng “Photocopy Minh Anh”, mã đơn và số tiền là <b>dữ liệu minh hoạ</b>, không phải đối tác hay đơn hàng thật.</div></div>\n\n<h2>Tổng quan: chương trình đối tác hoạt động ra sao?</h2>\n<p>Hãy hình dung chương trình như một “cầu nối” giữa khách của tiệm và đội ngũ chuyên viên đánh máy. Bạn không cần biết gõ nhanh, không cần máy tính riêng cho việc này, cũng không phải thu hộ tiền. Toàn bộ quy trình gói gọn trong 4 bước mà trang chương trình đã tóm tắt:</p>\n<figure><img src=\"/assets/img/blog/hd-dt-1-trang-doi-tac.webp\" alt=\"Trang chương trình đối tác Đánh máy 247 với hoa hồng 30% mỗi đơn hoàn thành\" loading=\"lazy\" width=\"1280\" height=\"760\"><figcaption>Ảnh 1. Trang giới thiệu chương trình tại danhmay247.com/doi-tac - nút “Đăng ký đối tác miễn phí” nằm ngay đầu trang.</figcaption></figure>\n<figure><img src=\"/assets/img/blog/hd-dt-2-cach-hoat-dong.webp\" alt=\"Bốn bước hoạt động của chương trình đối tác: đăng ký, nhận mã QR, giới thiệu khách, nhận hoa hồng\" loading=\"lazy\" width=\"1280\" height=\"760\"><figcaption>Ảnh 2. Bốn bước của chương trình: đăng ký miễn phí → nhận mã và poster QR → giới thiệu khách → nhận hoa hồng.</figcaption></figure>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thông số</th><th>Chi tiết</th></tr>\n  <tr><td>Phí tham gia</td><td>Miễn phí, không đặt cọc, không cam kết doanh số</td></tr>\n  <tr><td>Tỷ lệ hoa hồng</td><td><b>30%</b> giá trị đơn hoàn thành</td></tr>\n  <tr><td>Thời gian ghi nhận khách</td><td>30 ngày kể từ lần quét QR / bấm liên kết</td></tr>\n  <tr><td>Thời gian duyệt tài khoản</td><td>Khoảng 24 giờ làm việc</td></tr>\n  <tr><td>Lịch chi trả</td><td>Ngày 5 hằng tháng, khi số dư từ 100.000 đ</td></tr>\n  <tr><td>Thông tin khách hàng</td><td>Được bảo mật - đối tác không xem được tên, email, số điện thoại</td></tr>\n</table></div>\n\n<h2>Trước khi đăng ký: ước tính thu nhập của tiệm</h2>\n<p>Ngay trên trang chương trình có công cụ ước tính. Kéo hai thanh trượt - số khách bạn giới thiệu mỗi tháng và giá trị đơn trung bình - hệ thống tính ngay hoa hồng theo tháng và theo năm. Ví dụ với 20 khách, mỗi đơn 300.000 đ, hoa hồng ước tính là 1.800.000 đ/tháng.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-3-uoc-tinh-thu-nhap.webp\" alt=\"Công cụ ước tính hoa hồng đối tác theo số khách và giá trị đơn trung bình\" loading=\"lazy\" width=\"1280\" height=\"760\"><figcaption>Ảnh 3. Công cụ ước tính thu nhập: thay đổi số khách và giá trị đơn để xem hoa hồng dự kiến.</figcaption></figure>\n<p>Con số này chỉ mang tính tham khảo. Thu nhập thực tế phụ thuộc số đơn hoàn thành và loại tài liệu - một luận văn 80 trang cần định dạng sẽ có giá trị khác hẳn vài trang viết tay. Để ước tính sát hơn với khách của tiệm, bạn có thể tra <a href=\"/bang-gia\">bảng giá</a> theo từng loại dịch vụ.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hãy đếm trong một tuần xem có bao nhiêu khách hỏi về gõ lại tài liệu, chuyển PDF sang Word hay gõ đề thi. Đó chính là số khách tiềm năng bạn đang bỏ lỡ.</div></div>\n\n<h2>Bước 1: Điền form đăng ký đối tác (khoảng 2 phút)</h2>\n<p>Bấm “Đăng ký đối tác miễn phí” hoặc vào thẳng <a href=\"/dang-ky-doi-tac\">trang đăng ký</a>. Form chia làm hai phần rõ ràng:</p>\n<ul>\n  <li><b>Thông tin cửa hàng:</b> tên cửa hàng hoặc đơn vị, người liên hệ, số điện thoại/Zalo, email (dùng để đăng nhập), địa chỉ và tỉnh/thành phố.</li>\n  <li><b>Tài khoản nhận hoa hồng:</b> ngân hàng, số tài khoản, chủ tài khoản (viết hoa không dấu). Phần này có thể bỏ trống và bổ sung sau.</li>\n</ul>\n<figure><img src=\"/assets/img/blog/hd-dt-4-form-dang-ky.webp\" alt=\"Form đăng ký đối tác Đánh máy 247 gồm thông tin cửa hàng và tài khoản nhận hoa hồng\" loading=\"lazy\" width=\"1280\" height=\"900\"><figcaption>Ảnh 4. Form đăng ký: thông tin cửa hàng ở trên, tài khoản ngân hàng nhận hoa hồng ở dưới. Cột bên phải tóm tắt quyền lợi.</figcaption></figure>\n<p>Cuối form, bạn đặt mật khẩu đăng nhập (tối thiểu 8 ký tự), đọc và tích ô đồng ý với điều khoản chương trình, rồi bấm “Đăng ký đối tác”. Tên cửa hàng sẽ được dùng để tạo mã giới thiệu dễ nhớ - ví dụ “Photocopy Minh Anh” thành mã dạng <b>MINHAN261</b>.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Hãy nhập đúng tên chủ tài khoản ngân hàng, viết hoa không dấu giống trên thẻ. Sai một chữ có thể khiến lệnh chuyển khoản hoa hồng bị ngân hàng trả lại.</div></div>\n\n<h2>Bước 2: Chờ duyệt - nhưng không phải ngồi không</h2>\n<p>Ngay sau khi gửi form, bạn được đăng nhập vào trang đối tác. Thông báo xanh xác nhận đăng ký thành công, kèm dòng nhắc tài khoản đang chờ duyệt. Mã giới thiệu đã hiển thị, nhưng chỉ bắt đầu ghi nhận đơn khi tài khoản được kích hoạt.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-5-cho-duyet.webp\" alt=\"Trang đối tác ngay sau khi đăng ký, hiển thị trạng thái chờ duyệt và mã giới thiệu\" loading=\"lazy\" width=\"1280\" height=\"700\"><figcaption>Ảnh 5. Màn hình ngay sau khi đăng ký: thông báo chờ duyệt, nhắc bổ sung tài khoản ngân hàng nếu còn thiếu.</figcaption></figure>\n<p>Tận dụng thời gian này để chuẩn bị: chọn vị trí dán poster, nghĩ câu giới thiệu với khách quen. Khi tài khoản được duyệt, bạn nhận email báo và thông báo trên chuông của trang đối tác. Tên cửa hàng của bạn cũng hiện ở góc phải thanh đầu trang trên mọi trang của website - bấm vào đó là quay lại trang đối tác.</p>\n\n<h2>Bước 3: Lấy mã giới thiệu, liên kết và mã QR riêng</h2>\n<p>Đây là “công cụ kiếm tiền” chính của bạn. Tab <b>Mã giới thiệu &amp; QR</b> gom đủ mọi thứ cần để chia sẻ:</p>\n<figure><img src=\"/assets/img/blog/hd-dt-6-ma-gioi-thieu-qr.webp\" alt=\"Tab mã giới thiệu và mã QR trong trang đối tác, có liên kết giới thiệu và tin nhắn mẫu\" loading=\"lazy\" width=\"1280\" height=\"1000\"><figcaption>Ảnh 6. Tab “Mã giới thiệu &amp; QR”: mã QR riêng, mã giới thiệu, liên kết, tin nhắn mẫu và các nút in poster, tải QR.</figcaption></figure>\n<ol class=\"steps\">\n  <li><b>Mã QR riêng</b>: khách quét bằng camera điện thoại là mở thẳng trang đặt hàng, đã gắn sẵn mã của bạn.</li>\n  <li><b>Mã giới thiệu</b>: dành cho khách thích tự gõ - họ nhập mã ở ô “Mã giới thiệu” khi đặt hàng.</li>\n  <li><b>Liên kết giới thiệu</b>: bấm “Sao chép” để dán vào Zalo, Facebook, nhóm lớp.</li>\n  <li><b>Tin nhắn mẫu</b>: một đoạn giới thiệu ngắn đã chèn sẵn liên kết của bạn, sao chép và gửi trong một chạm.</li>\n  <li><b>In poster A4</b> và <b>Tải mã QR</b>: dùng cho quầy, cửa kính, bàn chờ.</li>\n</ol>\n<p>Bên dưới là mục “Mẹo giới thiệu hiệu quả”, tổng hợp từ kinh nghiệm thực tế: dán poster ở nơi khách đứng chờ, nhắc sinh viên vào mùa thi và mùa luận văn, chia sẻ trong nhóm Zalo khách quen.</p>\n\n<h2>Bước 4: In poster QR và đặt đúng chỗ</h2>\n<p>Bấm “In poster A4 có mã QR”, hệ thống tạo sẵn một poster khổ A4 gồm tiêu đề lớn, danh sách dịch vụ, mã QR cỡ to, mã giới thiệu và tên cửa hàng của bạn. Bạn chỉ việc in ra - không cần thiết kế gì thêm.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-7-poster-a4.webp\" alt=\"Poster A4 có mã QR giới thiệu riêng của cửa hàng đối tác\" loading=\"lazy\" width=\"820\" height=\"985\" style=\"max-width:520px;margin:0 auto\"><figcaption>Ảnh 7. Poster A4 tự động: mã QR cỡ lớn, mã giới thiệu, tên và địa chỉ tiệm, hotline hỗ trợ.</figcaption></figure>\n<p>Vị trí đặt poster quyết định phần lớn hiệu quả:</p>\n<ul>\n  <li><b>Ngang tầm mắt tại quầy thu tiền</b> - nơi mọi khách đều đứng lại.</li>\n  <li><b>Cạnh máy photocopy</b> - khách chờ in thường cầm điện thoại, rất dễ quét.</li>\n  <li><b>Mặt kính cửa tiệm</b> - nhìn được từ ngoài, kể cả khi tiệm đông.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>In poster đúng khổ A4, không thu nhỏ khi in, và tránh ép plastic bóng loáng ngay trên mã QR vì ánh đèn phản chiếu có thể làm camera khó quét. Xem thêm ý tưởng trong bài <a href=\"/blog/marketing-tiem-photocopy-ma-qr-zalo\">marketing tiệm photocopy bằng mã QR và Zalo</a>.</div></div>\n\n<h2>Bước 5: Khách đặt hàng - đơn tự gắn với mã của bạn</h2>\n<p>Khi khách quét QR hoặc bấm liên kết, mã của bạn được ghi nhận trên trình duyệt của khách trong <b>30 ngày</b>. Ở trang đặt hàng, ô “Mã giới thiệu” đã điền sẵn và hiện dòng xác nhận màu xanh “Được giới thiệu bởi” kèm tên cửa hàng của bạn - khách biết rõ ai đã giới thiệu mình.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-8-khach-nhap-ma.webp\" alt=\"Trang đặt hàng hiển thị mã giới thiệu đã áp dụng và tên cửa hàng đối tác\" loading=\"lazy\" width=\"1280\" height=\"820\"><figcaption>Ảnh 8. Góc nhìn của khách: mã giới thiệu đã được áp dụng tự động, kèm dòng “Được giới thiệu bởi Photocopy Minh Anh”.</figcaption></figure>\n<p>Từ đây, khách làm việc trực tiếp với Đánh máy 247: tải tài liệu lên, chọn thời hạn, thanh toán chuyển khoản và nhận file qua email. Bạn không phải thu tiền, không chịu trách nhiệm chất lượng, không phải giải đáp kỹ thuật. Nếu khách hỏi kết quả trông thế nào, hãy mở trang <a href=\"/mau\">Bài mẫu</a> để họ xem trước và sau khi đánh máy.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Hệ thống tự bỏ qua mã giới thiệu nếu email hoặc số điện thoại đặt hàng trùng với thông tin đối tác. Chương trình dành cho khách mới bạn giới thiệu, không áp dụng khi tự đặt cho mình.</div></div>\n\n<h2>Bước 6: Theo dõi từng đơn và từng khoản hoa hồng</h2>\n<p>Tab <b>Đơn giới thiệu</b> liệt kê mọi đơn đến từ mã của bạn, mới nhất ở trên cùng. Mỗi dòng gồm mã đơn, dịch vụ, khối lượng, giá trị đơn, hoa hồng 30% và trạng thái.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-9-don-gioi-thieu.webp\" alt=\"Bảng đơn giới thiệu với giá trị đơn, hoa hồng 30% và trạng thái từng đơn\" loading=\"lazy\" width=\"1280\" height=\"900\"><figcaption>Ảnh 9. Tab “Đơn giới thiệu”: mỗi đơn có giá trị, hoa hồng và trạng thái rõ ràng. Thông tin cá nhân của khách được ẩn.</figcaption></figure>\n<p>Ý nghĩa các trạng thái hoa hồng:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Trạng thái</th><th>Ý nghĩa</th><th>Bạn cần làm gì?</th></tr>\n  <tr><td>Chờ khách thanh toán</td><td>Khách đã tạo đơn nhưng chưa chuyển khoản</td><td>Không cần làm gì; có thể nhắc khéo nếu là khách quen</td></tr>\n  <tr><td>Đơn đang thực hiện</td><td>Khách đã thanh toán, chuyên viên đang làm</td><td>Chờ đơn hoàn thành</td></tr>\n  <tr><td>Đã duyệt - chờ chi trả</td><td>Đơn hoàn thành, hoa hồng đã được duyệt</td><td>Chờ kỳ chi trả ngày 5</td></tr>\n  <tr><td>Đã chi trả</td><td>Hoa hồng đã chuyển vào tài khoản của bạn</td><td>Kiểm tra tài khoản ngân hàng</td></tr>\n  <tr><td>Đơn đã hủy</td><td>Đơn bị hủy hoặc hoàn tiền</td><td>Không tính hoa hồng</td></tr>\n</table></div>\n<p>Bốn ô số liệu ở đầu trang cho bạn cái nhìn nhanh: lượt quét/bấm liên kết, số đơn giới thiệu (và số đơn đã hoàn thành), hoa hồng đang chờ, và hoa hồng đã duyệt chờ chi trả. Nếu lượt quét cao mà đơn ít, có thể khách cần thêm lời giải thích; nếu lượt quét thấp, hãy xem lại vị trí poster.</p>\n\n<h2>Bước 7: Nhận thông báo ngay khi có đơn</h2>\n<p>Biểu tượng chuông ở góc phải là “trợ lý” của bạn. Mỗi khi có khách đặt đơn bằng mã của bạn, khi hoa hồng được duyệt hay khi có lần chi trả mới, một thông báo xuất hiện kèm số tiền cụ thể.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-10-thong-bao.webp\" alt=\"Bảng thông báo của đối tác: khách mới đặt đơn, hoa hồng được duyệt, đã chi trả\" loading=\"lazy\" width=\"1280\" height=\"760\"><figcaption>Ảnh 10. Chuông thông báo: khách mới đặt đơn, hoa hồng được duyệt, đã chi trả - có thể bật âm báo và thông báo trên máy tính.</figcaption></figure>\n<p>Bạn có thể bật âm báo và cho phép thông báo trên máy tính để không bỏ lỡ tin nào khi đang bận đứng quầy.</p>\n\n<h2>Bước 8: Nhận hoa hồng và đối soát</h2>\n<p>Tab <b>Chi trả</b> cho biết số hoa hồng đã duyệt đang chờ chi trả, tổng số tiền đã nhận, lịch chi trả và tài khoản ngân hàng nhận tiền. Bên dưới là lịch sử từng lần chi trả, ghi rõ ngày, số tiền và danh sách mã đơn được tính trong lần đó - đủ để bạn đối soát với sao kê ngân hàng.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-11-chi-tra.webp\" alt=\"Tab chi trả hoa hồng: số dư chờ chi trả, tổng đã nhận, lịch chi trả và lịch sử chuyển khoản\" loading=\"lazy\" width=\"1280\" height=\"900\"><figcaption>Ảnh 11. Tab “Chi trả”: số dư chờ chi trả, tổng đã nhận, lịch chi trả ngày 5 hằng tháng và lịch sử từng lần chuyển khoản.</figcaption></figure>\n<p>Ví dụ minh hoạ: một khách đặt đơn chuyển âm 60 phút trị giá 1.554.000 đ. Khi đơn hoàn thành, hoa hồng 30% tương ứng 466.200 đ chuyển sang “Đã duyệt - chờ chi trả” và được cộng vào kỳ chi trả kế tiếp. Nếu tổng số dư dưới 100.000 đ, khoản này được cộng dồn sang kỳ sau, không bị mất.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Cập nhật thông tin ngân hàng, địa chỉ hoặc đổi mật khẩu bất cứ lúc nào trong tab <b>Tài khoản</b>. Khi đổi mật khẩu, các phiên đăng nhập cũ trên thiết bị khác sẽ tự đăng xuất - an toàn nếu bạn từng đăng nhập trên máy dùng chung.</div></div>\n\n<h2>Dùng trang đối tác ngay trên điện thoại</h2>\n<p>Không cần máy tính: trang đối tác hiển thị gọn gàng trên điện thoại, đủ số liệu, mã QR và các tab. Bạn có thể mở mã QR ngay trên màn hình cho khách quét trực tiếp, hoặc sao chép liên kết gửi Zalo chỉ với vài chạm.</p>\n<figure><img src=\"/assets/img/blog/hd-dt-12-dien-thoai.webp\" alt=\"Trang đối tác Đánh máy 247 trên điện thoại hiển thị số liệu và mã QR\" loading=\"lazy\" width=\"780\" height=\"1688\" style=\"max-width:340px;margin:0 auto\"><figcaption>Ảnh 12. Trang đối tác trên điện thoại: số liệu, các tab và mã QR để khách quét trực tiếp từ màn hình.</figcaption></figure>\n\n<h2>5 lỗi khiến đối tác mới “mất” hoa hồng - và cách tránh</h2>\n<ol>\n  <li><b>Giới thiệu bằng lời mà không đưa mã.</b> Khách tự tìm website rồi đặt hàng thì hệ thống không biết ai giới thiệu. Luôn để khách quét QR hoặc gửi liên kết.</li>\n  <li><b>Poster dán khuất.</b> Sau quầy, sau cửa hoặc dưới chân bàn gần như không ai quét. Ngang tầm mắt, nơi khách đứng chờ là tốt nhất.</li>\n  <li><b>Chưa khai báo tài khoản ngân hàng.</b> Hoa hồng vẫn được ghi nhận nhưng không thể chuyển khoản. Bổ sung ngay khi thấy dòng nhắc trên trang đối tác.</li>\n  <li><b>Chỉ giới thiệu một loại dịch vụ.</b> Ngoài gõ lại viết tay, Đánh máy 247 còn chuyển PDF sang Word, gõ công thức, nhập liệu Excel, chuyển ghi âm thành văn bản và định dạng luận văn - mỗi nhóm khách cần một thứ khác nhau.</li>\n  <li><b>Nhắn tin hàng loạt cho người lạ.</b> Vừa phiền vừa phản tác dụng. Hãy chia sẻ trong nhóm khách quen, nhóm lớp đã tự nguyện tham gia.</li>\n</ol>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Sẵn sàng biến khách hỏi “gõ lại giúp” thành thu nhập?</b> Đăng ký mất khoảng 2 phút, miễn phí, duyệt trong 24 giờ làm việc. <a href=\"/dang-ky-doi-tac\" class=\"button\">Đăng ký đối tác miễn phí</a></div>\n\n<h2>Đọc thêm cho đối tác</h2>\n<ul>\n  <li><a href=\"/blog/quan-photocopy-hop-tac-dich-vu-danh-may\">Quán photocopy có nên hợp tác dịch vụ đánh máy?</a> - so sánh các mô hình và cách tính lợi nhuận.</li>\n  <li><a href=\"/blog/huong-dan-tro-thanh-doi-tac-danh-may\">Hướng dẫn nhanh trở thành đối tác</a> - phiên bản tóm tắt các bước.</li>\n  <li><a href=\"/blog/cong-tac-vien-gioi-thieu-dich-vu-danh-may\">Cộng tác viên giới thiệu dịch vụ đánh máy</a> - dành cho sinh viên, giáo viên, dân văn phòng không có cửa hàng.</li>\n</ul>\n<p>Đã có tài khoản? <a href=\"/doi-tac-tai-khoan\">Đăng nhập trang đối tác</a> để lấy mã QR và in poster ngay hôm nay.</p>\n\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tham gia miễn phí, nhận 30% giá trị mỗi đơn hoàn thành do khách bạn giới thiệu.</li><li>Tám bước: đăng ký → chờ duyệt → lấy mã, QR → in poster → khách đặt hàng → theo dõi đơn → nhận thông báo → nhận hoa hồng.</li><li>Khách quét QR hoặc bấm liên kết được ghi nhận 30 ngày; khách cũng có thể tự nhập mã.</li><li>Hoa hồng được duyệt khi đơn hoàn thành, chi trả ngày 5 hằng tháng khi số dư từ 100.000 đ.</li><li>Thông tin cá nhân của khách luôn được bảo mật; đối tác chỉ thấy mã đơn, dịch vụ, giá trị và hoa hồng.</li></ul></div>",
    "faq": [
      {
        "q": "Tham gia chương trình đối tác Đánh máy 247 có mất phí không?",
        "a": "Không. Đăng ký hoàn toàn miễn phí, không đặt cọc, không cam kết doanh số. Bạn chỉ cần điền thông tin cửa hàng và chờ duyệt trong khoảng 24 giờ làm việc."
      },
      {
        "q": "Bao lâu thì tài khoản đối tác được duyệt?",
        "a": "Thông thường trong 24 giờ làm việc. Trong thời gian chờ, bạn vẫn đăng nhập được trang đối tác, xem trước mã giới thiệu và chuẩn bị poster; mã chỉ bắt đầu ghi nhận đơn sau khi được duyệt."
      },
      {
        "q": "Hoa hồng được tính và chi trả thế nào?",
        "a": "Bạn nhận 30% giá trị mỗi đơn hoàn thành do khách bạn giới thiệu. Hoa hồng chuyển sang trạng thái “Đã duyệt - chờ chi trả” ngay khi đơn hoàn thành và được chuyển khoản vào ngày 5 hằng tháng khi số dư từ 100.000 đ. Đơn hủy không tính hoa hồng."
      },
      {
        "q": "Khách quét mã QR nhưng vài ngày sau mới đặt hàng thì có được tính không?",
        "a": "Có. Sau khi khách quét QR hoặc bấm liên kết giới thiệu, trình duyệt của khách ghi nhận mã của bạn trong 30 ngày. Khách cũng có thể tự nhập mã giới thiệu ở trang đặt hàng."
      },
      {
        "q": "Đối tác có xem được tên, số điện thoại của khách không?",
        "a": "Không. Để bảo vệ quyền riêng tư, trang đối tác chỉ hiển thị mã đơn, loại dịch vụ, giá trị đơn, hoa hồng và trạng thái - không hiển thị tên, email hay số điện thoại của khách."
      },
      {
        "q": "Tôi có thể tự đặt đơn bằng mã của chính mình để nhận hoa hồng không?",
        "a": "Không. Hệ thống tự bỏ qua mã giới thiệu khi email hoặc số điện thoại đặt hàng trùng với thông tin của chính đối tác. Chương trình dành cho việc giới thiệu khách mới."
      }
    ],
    "cover": "/assets/img/blog/huong-dan-chuong-trinh-doi-tac-danh-may-247.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 14
  },
  {
    "slug": "dich-vu-danh-may-la-gi",
    "cat": "Kiến thức",
    "date": "2026-10-20",
    "tags": [
      "Dịch vụ đánh máy",
      "Gõ văn bản",
      "Đánh máy thuê",
      "Số hóa tài liệu"
    ],
    "title": "Dịch vụ đánh máy là gì? Toàn tập 2026: các loại dịch vụ, quy trình, chi phí và cách chọn đúng",
    "seoTitle": "Dịch vụ đánh máy là gì? Toàn tập từ A đến Z năm 2026",
    "excerpt": "Cẩm nang dịch vụ đánh máy 2026: các loại gõ văn bản phổ biến, quy trình chuẩn, cách tính giá, tiêu chí chất lượng và cách chọn đơn vị uy tín.",
    "body": "<p class=\"lead\">Mỗi ngày có hàng nghìn trang giấy cần trở thành văn bản điện tử: luận văn viết tay, hợp đồng chỉ còn bản scan, đề thi photo mờ, sổ sách kế toán, biên bản họp, hồi ký của ông bà. Dịch vụ đánh máy ra đời để làm việc đó - nhanh hơn, chính xác hơn và đúng định dạng hơn so với tự gõ. Bài viết này là cẩm nang đầy đủ giúp bạn hiểu dịch vụ đánh máy là gì, gồm những loại nào, quy trình chuẩn ra sao và chọn đơn vị thế nào cho đúng.</p>\n<figure><img src=\"/assets/img/blog/fig-cac-loai-dich-vu-danh-may.svg\" alt=\"Các loại dịch vụ đánh máy phổ biến\" loading=\"lazy\" width=\"960\"><figcaption>Sáu nhóm dịch vụ đánh máy phổ biến: viết tay sang Word, PDF/ảnh sang Word, nhập liệu Excel, công thức và LaTeX, chuyển âm, định dạng và biên tập.</figcaption></figure>\n\n<h2>Dịch vụ đánh máy là gì?</h2>\n<p>Dịch vụ đánh máy - còn gọi là gõ văn bản thuê, đánh máy thuê, gõ tài liệu thuê - là việc một đơn vị hoặc chuyên viên nhận tài liệu gốc của bạn (giấy, ảnh chụp, PDF, chữ viết tay, ghi âm) và chuyển thành văn bản điện tử chỉnh sửa được. Kết quả thường là tệp Word, Excel, Google Docs, LaTeX hoặc phụ đề, được trình bày theo yêu cầu: phông chữ, lề, tiêu đề, bảng biểu, mục lục.</p>\n<p>Điểm khác biệt của một dịch vụ đánh máy chuyên nghiệp không nằm ở tốc độ gõ phím, mà ở ba yếu tố: <b>đọc đúng</b> (kể cả chữ viết tay khó đọc), <b>gõ đúng</b> (chính tả, số liệu, ký hiệu) và <b>trình bày đúng</b> (cấu trúc tài liệu để bạn sửa tiếp không bị vỡ).</p>\n\n<h2>Các loại dịch vụ đánh máy phổ biến</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại dịch vụ</th><th>Tài liệu gốc</th><th>Kết quả</th></tr>\n  <tr><td><b>Đánh máy chữ viết tay</b></td><td>Vở ghi, bản thảo, nhật ký, biên bản viết tay</td><td>Word giữ nguyên văn, đánh dấu chỗ khó đọc</td></tr>\n  <tr><td><b>Chuyển PDF, ảnh sang Word</b></td><td>Bản scan, ảnh chụp điện thoại, PDF không sao chép được</td><td>Word đúng bố cục, bảng thật</td></tr>\n  <tr><td><b>Nhập liệu sang Excel</b></td><td>Phiếu khảo sát, sổ sách, hóa đơn, danh sách</td><td>Bảng tính sạch, tính toán được</td></tr>\n  <tr><td><b>Gõ công thức, LaTeX</b></td><td>Đề thi, giáo án, bài báo Toán - Lý - Hóa</td><td>Equation, MathType hoặc mã LaTeX</td></tr>\n  <tr><td><b>Chuyển âm</b></td><td>Ghi âm phỏng vấn, họp, bài giảng, video</td><td>Bản chép lời, phụ đề SRT</td></tr>\n  <tr><td><b>Định dạng, biên tập</b></td><td>Tệp Word lộn xộn, luận văn chưa đúng mẫu</td><td>Tài liệu đúng mẫu, mục lục tự động</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Xem trực quan sự khác biệt trước và sau khi đánh máy tại trang <a href=\"/mau\">Bài mẫu</a>: chữ viết tay, hợp đồng scan, đề Toán có công thức, phiếu khảo sát sang Excel, cùng các mẫu chuyển âm có tiếng.</div></div>\n\n<h2>Ai cần dịch vụ đánh máy?</h2>\n<ul>\n  <li><b>Sinh viên, học viên cao học</b>: luận văn, tiểu luận viết tay, vở ghi ôn thi - xem <a href=\"/blog/go-van-ban-thue-cho-sinh-vien\">thuê gõ cho sinh viên</a>.</li>\n  <li><b>Giáo viên</b>: đề thi, giáo án có công thức, ngân hàng câu hỏi.</li>\n  <li><b>Văn phòng, doanh nghiệp</b>: hợp đồng scan, hồ sơ lưu trữ, sổ sách, biên bản.</li>\n  <li><b>Cơ quan hành chính</b>: công văn cũ, quyết định, tài liệu lỗi phông chữ.</li>\n  <li><b>Gia đình</b>: gia phả, hồi ký, thư từ, giấy tờ cũ cần lưu giữ.</li>\n  <li><b>Cửa hàng photocopy, văn phòng phẩm</b>: giới thiệu khách có nhu cầu và nhận hoa hồng - xem <a href=\"/doi-tac\">chương trình đối tác</a>.</li>\n</ul>\n\n<h2>Quy trình dịch vụ đánh máy chuẩn</h2>\n<ol class=\"steps\">\n  <li><b>Tiếp nhận và báo giá</b>: khách gửi tài liệu, chọn loại dịch vụ, số trang, thời hạn; giá hiển thị rõ trước khi thanh toán.</li>\n  <li><b>Phân công</b>: tài liệu được giao cho chuyên viên phù hợp (viết tay, công thức, tiếng Anh…); tài liệu dài chia cho nhiều người làm song song.</li>\n  <li><b>Đánh máy</b>: gõ nguyên văn, dựng bảng thật, dùng Heading cho tiêu đề, đánh dấu chỗ không đọc được.</li>\n  <li><b>Kiểm tra</b>: biên tập viên đối chiếu với bản gốc, soát chính tả, số liệu, tên riêng, thống nhất định dạng.</li>\n  <li><b>Bàn giao</b>: khách nhận tệp qua email/trang tài khoản, kiểm tra và yêu cầu chỉnh sửa nếu cần.</li>\n  <li><b>Bảo mật sau bàn giao</b>: tệp được xóa theo chính sách (tại Đánh máy 247 là 30 ngày).</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Phần hướng dẫn bạn ghi khi đặt hàng quyết định rất nhiều đến kết quả. Xem mẫu cách ghi yêu cầu trong bài <a href=\"/blog/thue-go-tai-lieu-online\">thuê gõ tài liệu online 5 bước</a>.</div></div>\n\n<h2>Chi phí dịch vụ đánh máy được tính thế nào?</h2>\n<p>Phần lớn dịch vụ đánh máy tính theo <b>trang tài liệu gốc</b> (với chuyển âm là <b>phút âm thanh</b>). Đơn giá thay đổi theo:</p>\n<ul>\n  <li><b>Thời hạn</b>: càng gấp càng cao; thời hạn dài giúp tiết kiệm đáng kể.</li>\n  <li><b>Loại tài liệu</b>: chữ viết tay, bảng biểu, công thức, LaTeX có hệ số riêng.</li>\n  <li><b>Yêu cầu thêm</b>: định dạng theo mẫu, biên tập, hiệu đính.</li>\n</ul>\n<p>Tại Đánh máy 247, gõ lại tài liệu có đơn giá từ 19.000 đ/trang (thời hạn 30 ngày). Bảng giá chi tiết và các yếu tố ảnh hưởng xem tại <a href=\"/blog/dich-vu-go-van-ban-thue\">bảng giá gõ văn bản thuê</a> hoặc <a href=\"/bang-gia\">trang Bảng giá</a>.</p>\n\n<h2>Tiêu chí đánh giá một dịch vụ đánh máy tốt</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Câu hỏi nên đặt ra</th></tr>\n  <tr><td>Độ chính xác</td><td>Có người kiểm tra lại không? Chữ khó đọc xử lý thế nào?</td></tr>\n  <tr><td>Định dạng</td><td>Bảng có dựng bằng Table thật? Tiêu đề có dùng Heading?</td></tr>\n  <tr><td>Thời hạn</td><td>Có cam kết giờ giao? Trễ hạn thì sao?</td></tr>\n  <tr><td>Bảo mật</td><td>Có NDA? Tệp được xóa khi nào? Ai được xem tài liệu?</td></tr>\n  <tr><td>Minh bạch</td><td>Giá có hiển thị trước khi trả tiền? Có phí ẩn?</td></tr>\n  <tr><td>Hỗ trợ sau bàn giao</td><td>Được chỉnh sửa miễn phí bao lâu?</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Cẩn trọng với lời mời “gõ thuê siêu rẻ” qua mạng xã hội không có địa chỉ, không hợp đồng: tài liệu có thể bị lộ, chất lượng không kiểm soát và khó đòi lại tiền khi trễ hạn. Xem <a href=\"/blog/danh-may-thue-gia-re-uy-tin\">đánh máy giá rẻ: rẻ đến đâu là hợp lý</a>.</div></div>\n\n<h2>Dịch vụ đánh máy trong thời AI</h2>\n<p>Công cụ nhận dạng chữ và AI ngày càng giỏi với văn bản in rõ nét. Nhưng chữ viết tay tiếng Việt, ảnh chụp mờ, dấu mộc đè chữ, bảng ô gộp và công thức vẫn là những chỗ máy hay sai - và lỗi của máy thường “trông rất hợp lý” nên khó phát hiện. Vì vậy mô hình hiệu quả nhất hiện nay là người làm chính, công cụ hỗ trợ. Đọc thêm: <a href=\"/blog/ai-ocr-co-thay-the-nguoi-danh-may\">AI và OCR có thay thế người đánh máy?</a></p>\n\n<h2>Cách bắt đầu với Đánh máy 247</h2>\n<ol class=\"steps\">\n  <li>Vào <a href=\"/dat-hang\">trang Đặt hàng</a>, chọn Đánh máy lại hoặc Chuyển âm.</li>\n  <li>Chọn loại tài liệu, số trang/số phút, thời hạn - giá hiện ngay.</li>\n  <li>Tải lên tối đa 6 tệp hoặc dán liên kết Google Drive, ghi yêu cầu.</li>\n  <li>Thanh toán VietQR, theo dõi tiến độ và nhắn tin với chuyên viên trong trang đơn hàng.</li>\n</ol>\n<p>Có câu hỏi? Mở khung chat “Hỗ trợ Đánh máy 247” ở góc phải màn hình - có thể gõ “giá 20 trang viết tay 3 ngày” để nhận báo giá ngay.</p>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Bắt đầu với dịch vụ đánh máy chuyên nghiệp</b>Người thật gõ, biên tập viên kiểm tra, giao từ 6 giờ. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Dịch vụ đánh máy chuyển giấy, ảnh, PDF, viết tay, ghi âm thành văn bản chỉnh sửa được.</li><li>Sáu nhóm chính: viết tay, PDF/ảnh, Excel, công thức/LaTeX, chuyển âm, định dạng.</li><li>Quy trình chuẩn có khâu kiểm tra và bảo mật sau bàn giao.</li><li>Chọn đơn vị minh bạch giá, cam kết thời hạn, có chỉnh sửa miễn phí.</li></ul></div>",
    "faq": [
      {
        "q": "Dịch vụ đánh máy gồm những gì?",
        "a": "Dịch vụ đánh máy (gõ văn bản thuê) là việc chuyển nội dung từ tài liệu giấy, ảnh chụp, PDF scan, chữ viết tay hoặc ghi âm thành văn bản điện tử chỉnh sửa được như Word, Excel, LaTeX, kèm định dạng theo yêu cầu."
      },
      {
        "q": "Dịch vụ đánh máy khác phần mềm nhận dạng chữ (OCR) thế nào?",
        "a": "OCR tự động đọc ảnh và cho kết quả nhanh nhưng hay sai với chữ viết tay, ảnh mờ, bảng biểu, công thức. Dịch vụ đánh máy do người thật đọc và gõ, có biên tập viên kiểm tra nên chính xác và đúng định dạng hơn."
      },
      {
        "q": "Đánh máy một trang mất bao lâu?",
        "a": "Tùy độ khó của tài liệu. Đơn vị chuyên nghiệp chia việc cho nhiều chuyên viên nên có thể giao trong vài giờ đến vài ngày tùy thời hạn khách chọn; tại Đánh máy 247 nhanh nhất từ 6 giờ."
      },
      {
        "q": "Ai thường dùng dịch vụ đánh máy?",
        "a": "Sinh viên, giáo viên, nhà nghiên cứu, văn phòng, doanh nghiệp, cơ quan hành chính, luật sư, người cần số hóa giấy tờ gia đình, và cửa hàng photocopy giới thiệu khách."
      }
    ],
    "cover": "/assets/img/blog/dich-vu-danh-may-la-gi.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 7
  },
  {
    "slug": "danh-may-tai-lieu-viet-tay",
    "cat": "Mẹo hay",
    "date": "2026-10-19",
    "tags": [
      "Đánh máy tài liệu viết tay",
      "Chữ viết tay",
      "Gõ văn bản",
      "Viết tay sang Word"
    ],
    "title": "Đánh máy tài liệu viết tay: cách chuyên viên đọc chữ khó, xử lý gạch xóa, chú thích lề và giữ đúng nguyên văn",
    "seoTitle": "Đánh máy tài liệu viết tay: quy trình đọc chữ khó chuẩn",
    "excerpt": "Đánh máy tài liệu viết tay chuyên nghiệp: cách đọc chữ khó, xử lý gạch xóa, chú thích lề, số liệu và cách chuẩn bị để bản gõ chính xác nhất.",
    "body": "<p class=\"lead\">Gõ lại một trang sách in chỉ cần gõ nhanh. Nhưng đánh máy một trang viết tay - nét chữ vội, chữ viết tắt riêng của người viết, mũi tên chú thích, đoạn gạch xóa chen ngang - đòi hỏi kỹ năng “đọc” nhiều hơn kỹ năng “gõ”. Đây là lý do đánh máy tài liệu viết tay là mảng dịch vụ đòi hỏi kinh nghiệm nhất. Bài viết chia sẻ cách chuyên viên xử lý và cách bạn chuẩn bị để nhận bản gõ chính xác nhất.</p>\n<figure><img src=\"/assets/img/blog/fig-doc-chu-viet-tay.svg\" alt=\"Quy trình đọc và đánh máy chữ viết tay\" loading=\"lazy\" width=\"960\"><figcaption>Đọc lướt toàn bộ → làm quen nét chữ → đọc theo ngữ cảnh → đánh dấu chỗ không chắc → đối chiếu lại với bản gốc.</figcaption></figure>\n\n<h2>Vì sao chữ viết tay khó gõ đúng?</h2>\n<ul>\n  <li><b>Nét chữ riêng</b>: mỗi người viết “n” và “u”, “a” và “o”, “l” và “t” theo kiểu riêng.</li>\n  <li><b>Dấu tiếng Việt</b>: dấu hỏi - ngã, dấu mũ viết vội dễ lẫn hoặc bị bỏ sót.</li>\n  <li><b>Chữ viết tắt</b>: “k” (không), “đc” (được), “ng” (người), ký hiệu riêng của người viết.</li>\n  <li><b>Số liệu</b>: 1 - 7, 4 - 9, 0 - 6 viết tay rất dễ nhầm.</li>\n  <li><b>Bố cục</b>: chú thích bên lề, mũi tên chèn ý, chữ viết đè, giấy nhòe mực.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Phần mềm nhận dạng chữ viết tay có thể đọc sai những chỗ trên mà kết quả vẫn “trông hợp lý”. Với số liệu, tên riêng, tài liệu pháp lý, hãy luôn có người đối chiếu.</div></div>\n\n<h2>Chuyên viên đọc chữ viết tay như thế nào?</h2>\n<ol class=\"steps\">\n  <li><b>Đọc lướt toàn bộ trước khi gõ</b>: nắm chủ đề, thuật ngữ, cách viết tắt quen dùng của người viết.</li>\n  <li><b>Làm quen nét chữ</b>: tìm những chữ đã chắc chắn (tên riêng lặp lại, từ phổ biến) để “giải mã” cách người viết tạo nét.</li>\n  <li><b>Đọc theo ngữ cảnh</b>: chữ khó đọc được suy ra từ câu, đoạn và chủ đề - nhưng chỉ khi ngữ cảnh đủ chắc chắn.</li>\n  <li><b>So sánh chéo</b>: cùng một chữ thường xuất hiện nhiều lần; chỗ viết rõ giúp đọc chỗ viết vội.</li>\n  <li><b>Đánh dấu chỗ không chắc</b>: dùng [?] hoặc [không rõ], không đoán bừa.</li>\n  <li><b>Đối chiếu lại</b>: biên tập viên soát số liệu, tên riêng và các chỗ đánh dấu trước khi giao.</li>\n</ol>\n\n<h2>Xử lý các tình huống đặc biệt</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tình huống</th><th>Cách xử lý mặc định</th><th>Khi nào làm khác</th></tr>\n  <tr><td>Gạch xóa, viết đè</td><td>Bỏ phần gạch, gõ phần thay thế</td><td>Bản thảo văn học, nghiên cứu: giữ bằng định dạng gạch ngang</td></tr>\n  <tr><td>Chú thích bên lề</td><td>Chèn vào đúng vị trí mũi tên chỉ</td><td>Nếu không rõ vị trí: đặt cuối đoạn, ghi chú [Ghi chú lề]</td></tr>\n  <tr><td>Chữ viết tắt</td><td>Giữ nguyên như bản gốc</td><td>Khách yêu cầu viết đầy đủ: thống nhất bảng chữ tắt</td></tr>\n  <tr><td>Lỗi chính tả của người viết</td><td>Giữ nguyên văn với tài liệu pháp lý, lưu trữ</td><td>Bản đọc thông thường: sửa nếu khách chọn biên tập</td></tr>\n  <tr><td>Hình vẽ, sơ đồ tay</td><td>Ghi chú [Hình: mô tả]</td><td>Vẽ lại bằng công cụ nếu có yêu cầu</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Bạn muốn bản gõ “giữ nguyên văn” hay “chuẩn hóa chính tả”? Hãy ghi rõ ngay từ đầu. Hai yêu cầu này cho ra hai kết quả rất khác nhau.</div></div>\n\n<h2>Các loại tài liệu viết tay thường gặp</h2>\n<ul>\n  <li><b>Vở ghi bài giảng</b>: cần gõ công thức chuẩn, sắp xếp theo chủ đề - xem <a href=\"/blog/so-hoa-vo-ghi-bai-giang\">số hóa vở ghi</a>.</li>\n  <li><b>Bản thảo luận văn, sách</b>: giữ cấu trúc chương mục, dùng Heading - xem <a href=\"/blog/chuan-bi-ban-thao-sach\">chuẩn bị bản thảo sách</a>.</li>\n  <li><b>Biên bản họp, sổ giao ca</b>: chú trọng số liệu, tên người, thời gian.</li>\n  <li><b>Phiếu khảo sát viết tay</b>: nhập liệu sang Excel theo quy ước mã hóa.</li>\n  <li><b>Hồi ký, thư từ, gia phả</b>: giữ nguyên giọng văn, chính tả của người viết - xem <a href=\"/blog/so-hoa-gia-pha-hoi-ky\">số hóa gia phả, hồi ký</a>.</li>\n  <li><b>Giáo án, đề thi viết tay</b>: công thức, hình vẽ, định dạng trộn đề - xem <a href=\"/blog/danh-may-giao-an-de-cuong-viet-tay\">đánh máy giáo án viết tay</a>.</li>\n</ul>\n\n<h2>Bạn nên chuẩn bị gì để bản gõ chính xác nhất?</h2>\n<ol class=\"steps\">\n  <li><b>Chụp rõ nét</b>: thẳng, đủ sáng, không bóng, không cắt mép chữ; mỗi ảnh một trang.</li>\n  <li><b>Đánh số trang</b> hoặc đặt tên ảnh theo thứ tự.</li>\n  <li><b>Gửi danh sách tên riêng, thuật ngữ</b>: tên người, địa danh, thuật ngữ chuyên ngành, chữ viết tắt hay dùng.</li>\n  <li><b>Nêu rõ yêu cầu</b>: giữ nguyên văn hay chuẩn hóa, xử lý gạch xóa thế nào, phông chữ, định dạng file.</li>\n  <li><b>Sẵn sàng xác nhận</b> các chỗ [?] khi nhận bản gõ - bạn là người hiểu nội dung nhất.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Mẹo chụp tài liệu bằng điện thoại chi tiết xem tại <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu</a>. Ảnh càng rõ, số chỗ phải đánh dấu [?] càng ít.</div></div>\n\n<h2>Thời gian và chi phí</h2>\n<p>Đánh máy chữ viết tay mất nhiều thời gian hơn chữ in vì phần “đọc” chiếm đáng kể. Tại Đánh máy 247, viết tay sang Word có phụ phí 15%, viết tay sang Excel 30% so với đơn giá cơ bản theo thời hạn bạn chọn. Giá hiển thị đầy đủ trước khi thanh toán, không có phụ phí phát sinh cho chữ xấu hay bản photo mờ. Xem <a href=\"/bang-gia\">bảng giá</a>.</p>\n\n<h2>Kiểm tra bản gõ khi nhận</h2>\n<ul>\n  <li>Tìm (<kbd>Ctrl</kbd> + <kbd>F</kbd>) tất cả chỗ “[?]” và điền thông tin đúng.</li>\n  <li>Đối chiếu số liệu, ngày tháng, tên riêng với bản gốc.</li>\n  <li>Đọc lại những đoạn bạn nhớ rõ nội dung để phát hiện chữ gõ nhầm nghĩa.</li>\n  <li>Gửi yêu cầu sửa cụ thể trang, dòng - xem <a href=\"/blog/kiem-tra-file-go-thue-nghiem-thu\">checklist nghiệm thu</a>.</li>\n</ul>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Có tài liệu viết tay cần đánh máy?</b>Chụp ảnh, tải lên, nhận file Word giữ nguyên văn - chữ khó đọc được đánh dấu để bạn xác nhận. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Đánh máy viết tay cần kỹ năng đọc hơn kỹ năng gõ.</li><li>Chuyên viên đọc theo ngữ cảnh, so sánh chéo, đánh dấu [?] thay vì đoán.</li><li>Ghi rõ: giữ nguyên văn hay chuẩn hóa, xử lý gạch xóa thế nào.</li><li>Ảnh rõ + danh sách tên riêng giúp bản gõ chính xác nhất.</li></ul></div>",
    "faq": [
      {
        "q": "Chữ viết tay quá xấu có đánh máy được không?",
        "a": "Phần lớn đều đọc được nhờ đối chiếu ngữ cảnh, so sánh cách viết cùng một chữ ở nhiều chỗ khác nhau. Những chữ thật sự không chắc chắn sẽ được đánh dấu [?] để bạn xác nhận thay vì đoán."
      },
      {
        "q": "Phần gạch xóa trong bản viết tay có được giữ lại không?",
        "a": "Mặc định bỏ phần đã gạch và gõ phần viết thay thế. Nếu bạn cần giữ (bản thảo văn học, tài liệu nghiên cứu), hãy ghi rõ để chuyên viên trình bày bằng định dạng gạch ngang."
      },
      {
        "q": "Đánh máy tài liệu viết tay có đắt hơn chữ in không?",
        "a": "Thường có hệ số cao hơn vì cần nhiều thời gian đọc và đối chiếu. Tại Đánh máy 247, viết tay sang Word có phụ phí 15% so với tài liệu chữ in."
      }
    ],
    "cover": "/assets/img/blog/danh-may-tai-lieu-viet-tay.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 6
  },
  {
    "slug": "chuyen-giay-viet-tay-sang-word",
    "cat": "Mẹo hay",
    "date": "2026-10-18",
    "tags": [
      "Viết tay sang Word",
      "Gõ tài liệu viết tay",
      "Nhận dạng chữ viết tay",
      "Gõ văn bản"
    ],
    "title": "Chuyển giấy viết tay sang Word: so sánh 4 cách (tự gõ, giọng nói, nhận dạng chữ, thuê đánh máy) và nên chọn cách nào",
    "seoTitle": "Chuyển giấy viết tay sang Word: 4 cách và cách chọn",
    "excerpt": "So sánh 4 cách chuyển giấy viết tay sang Word: tự gõ, giọng nói, phần mềm nhận dạng chữ và thuê dịch vụ đánh máy - nên chọn cách nào?",
    "body": "<p class=\"lead\">Bạn có một xấp giấy viết tay - ghi chép cuộc họp, bản thảo, sổ tay nghiên cứu - và cần nó thành file Word để chỉnh sửa, chia sẻ, lưu trữ. Có ít nhất bốn cách để làm việc này, mỗi cách hợp với một hoàn cảnh. Bài viết so sánh chi tiết để bạn chọn đúng, tránh mất thời gian thử sai.</p>\n<figure><img src=\"/assets/img/blog/fig-4-cach-viet-tay-sang-word.svg\" alt=\"So sánh 4 cách chuyển giấy viết tay sang Word\" loading=\"lazy\" width=\"960\"><figcaption>So sánh tốc độ, độ chính xác và công sức kiểm tra của 4 cách: tự gõ, đọc bằng giọng nói, nhận dạng chữ viết tay, thuê dịch vụ đánh máy.</figcaption></figure>\n\n<h2>Cách 1: Tự gõ lại</h2>\n<p>Cách truyền thống: đặt bản viết tay bên cạnh và gõ vào Word.</p>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Ưu điểm</b>Không tốn tiền, bạn hiểu nội dung nên đọc chữ của chính mình tốt; kiểm soát hoàn toàn bảo mật.</div>\n  <div class=\"bad\"><b>Nhược điểm</b>Tốn thời gian, mỏi tay mỏi mắt; dễ sai khi mệt; định dạng bảng, công thức mất nhiều công.</div>\n</div>\n<p><b>Phù hợp</b>: tài liệu vài trang, chữ của chính bạn, không gấp. Nếu chọn cách này, hãy luyện <a href=\"/blog/go-10-ngon-30-ngay\">gõ 10 ngón</a> và học <a href=\"/blog/phim-tat-word\">phím tắt Word</a> để tiết kiệm thời gian.</p>\n\n<h2>Cách 2: Đọc bằng giọng nói</h2>\n<p>Bạn đọc to nội dung, công cụ nhập bằng giọng nói (có sẵn trong Word bản mới, Google Docs, bàn phím điện thoại) chuyển thành chữ.</p>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Ưu điểm</b>Nhanh hơn gõ với người đọc rõ; rảnh tay; miễn phí với công cụ có sẵn.</div>\n  <div class=\"bad\"><b>Nhược điểm</b>Sai tên riêng, thuật ngữ, số liệu; dấu câu và xuống đoạn phải chỉnh tay; cần nơi yên tĩnh.</div>\n</div>\n<p><b>Phù hợp</b>: văn xuôi, nhật ký, bản nháp ít số liệu. Mẹo dùng giọng nói tiếng Việt xem trong bài <a href=\"/blog/go-tieng-viet-dien-thoai\">gõ tiếng Việt trên điện thoại</a>.</p>\n\n<h2>Cách 3: Phần mềm nhận dạng chữ viết tay</h2>\n<p>Chụp ảnh và để ứng dụng nhận dạng (OCR/AI) chuyển thành văn bản.</p>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Ưu điểm</b>Rất nhanh với chữ viết rõ, nắn nót; tiện cho việc tra cứu nhanh nội dung.</div>\n  <div class=\"bad\"><b>Nhược điểm</b>Sai nhiều với chữ viết vội, dấu tiếng Việt, số liệu, bảng; lỗi khó phát hiện vì câu vẫn “hợp lý”; cân nhắc bảo mật khi tải lên dịch vụ trực tuyến.</div>\n</div>\n<p><b>Phù hợp</b>: chữ viết đẹp, tài liệu không quan trọng về độ chính xác tuyệt đối, bạn có thời gian đối chiếu từng dòng.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Thời gian “miễn phí” của phần mềm thường bị bù lại bằng thời gian soát lỗi. Với tài liệu có số tiền, ngày tháng, tên người, mỗi lỗi nhận dạng đều có thể gây hậu quả. Đọc thêm <a href=\"/blog/ai-ocr-co-thay-the-nguoi-danh-may\">AI và OCR có thay thế người đánh máy?</a></div></div>\n\n<h2>Cách 4: Thuê dịch vụ đánh máy</h2>\n<p>Gửi ảnh chụp cho đơn vị đánh máy chuyên nghiệp, nhận file Word đã gõ và trình bày.</p>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Ưu điểm</b>Người thật đọc theo ngữ cảnh, biên tập viên kiểm tra; định dạng đúng (bảng thật, Heading); bạn giải phóng thời gian; có chỉnh sửa miễn phí.</div>\n  <div class=\"bad\"><b>Nhược điểm</b>Có chi phí; cần chọn đơn vị uy tín về bảo mật và thời hạn.</div>\n</div>\n<p><b>Phù hợp</b>: tài liệu dài, chữ khó đọc, có bảng - số liệu - công thức, cần chính xác hoặc cần gấp. Xem quy trình chuyên viên xử lý chữ khó trong bài <a href=\"/blog/danh-may-tai-lieu-viet-tay\">đánh máy tài liệu viết tay</a>.</p>\n\n<h2>Bảng so sánh tổng hợp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Tự gõ</th><th>Giọng nói</th><th>Nhận dạng chữ</th><th>Thuê đánh máy</th></tr>\n  <tr><td>Chi phí tiền</td><td class=\"ok\">Không</td><td class=\"ok\">Không</td><td>Không - có phí</td><td>Có phí</td></tr>\n  <tr><td>Thời gian của bạn</td><td class=\"no\">Nhiều nhất</td><td>Trung bình</td><td>Ít + soát lỗi</td><td class=\"ok\">Ít nhất</td></tr>\n  <tr><td>Chữ viết vội</td><td>Tốt nếu chữ của bạn</td><td>Tốt nếu bạn đọc được</td><td class=\"no\">Kém</td><td class=\"ok\">Tốt</td></tr>\n  <tr><td>Số liệu, tên riêng</td><td>Tốt nếu cẩn thận</td><td class=\"no\">Hay sai</td><td class=\"no\">Hay sai</td><td class=\"ok\">Có kiểm tra</td></tr>\n  <tr><td>Bảng, công thức</td><td>Tốn công</td><td class=\"no\">Không hỗ trợ</td><td class=\"no\">Hay vỡ</td><td class=\"ok\">Đúng định dạng</td></tr>\n</table></div>\n\n<h2>Cách kết hợp thông minh</h2>\n<ol class=\"steps\">\n  <li>Phân loại tài liệu: phần chữ đẹp, ít số liệu và phần chữ khó, nhiều bảng.</li>\n  <li>Phần dễ: tự gõ hoặc đọc giọng nói khi có thời gian.</li>\n  <li>Phần khó, quan trọng: thuê đánh máy để đảm bảo chính xác.</li>\n  <li>Thống nhất định dạng cuối cùng bằng Styles trong Word.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Chưa chắc nên chọn cách nào? Hãy tính thời gian bạn bỏ ra theo hướng dẫn trong bài <a href=\"/blog/tu-go-hay-thue-go-van-ban\">tự gõ hay thuê gõ văn bản</a>.</div></div>\n\n<h2>Lưu ý bảo mật cho mọi cách</h2>\n<p>Tài liệu viết tay thường chứa thông tin cá nhân: ghi chép y tế, nhật ký, sổ sách, hồ sơ. Khi dùng công cụ trực tuyến hay thuê ngoài, hãy kiểm tra chính sách lưu trữ dữ liệu, cam kết bảo mật và thời hạn xóa tệp. Đánh máy 247 cam kết NDA, nhân viên xử lý không thấy thông tin liên hệ của bạn, tệp tự xóa sau 30 ngày.</p>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Chuyển giấy viết tay sang Word nhanh và chính xác</b>Gửi ảnh chụp, nhận file Word đúng nguyên văn, có biên tập viên kiểm tra. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n\n<h2>Câu hỏi nên tự đặt trước khi chọn cách</h2>\n<ul>\n  <li><b>Tài liệu dùng để làm gì?</b> Lưu trữ cá nhân có thể chấp nhận vài lỗi nhỏ; nộp hồ sơ, hợp đồng, luận văn thì không.</li>\n  <li><b>Ai viết?</b> Chữ của chính bạn dễ đọc với bạn; chữ người khác (ông bà, đồng nghiệp) thường cần người có kinh nghiệm.</li>\n  <li><b>Có bao nhiêu số liệu, tên riêng?</b> Càng nhiều, càng cần khâu đối chiếu kỹ.</li>\n  <li><b>Bạn có bao nhiêu thời gian?</b> Thời gian kiểm tra kết quả máy cũng là chi phí.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tự gõ: miễn phí nhưng tốn nhiều thời gian nhất.</li><li>Giọng nói và nhận dạng chữ: nhanh nhưng cần soát kỹ số liệu, tên riêng.</li><li>Thuê đánh máy: chính xác, đúng định dạng, phù hợp tài liệu dài, khó.</li><li>Kết hợp: phần dễ tự làm, phần khó thuê ngoài.</li></ul></div>",
    "faq": [
      {
        "q": "Có ứng dụng nào chuyển chữ viết tay tiếng Việt sang Word chính xác không?",
        "a": "Một số công cụ nhận dạng chữ viết tay hỗ trợ tiếng Việt và cho kết quả khá với chữ viết rõ, nắn nót. Với chữ viết vội, dấu tiếng Việt chồng chéo, số liệu, kết quả vẫn cần người đối chiếu và sửa lại."
      },
      {
        "q": "Đọc bằng giọng nói để chuyển viết tay sang Word có nhanh không?",
        "a": "Nhanh hơn gõ tay với người đọc rõ ràng, nhưng vẫn cần sửa tên riêng, dấu câu và định dạng. Cách này phù hợp văn bản ngắn, ít số liệu."
      },
      {
        "q": "Khi nào nên thuê dịch vụ đánh máy thay vì tự làm?",
        "a": "Khi tài liệu dài, chữ khó đọc, có bảng, số liệu, công thức, cần giữ nguyên văn chính xác hoặc bạn không có thời gian kiểm tra kỹ."
      }
    ],
    "cover": "/assets/img/blog/chuyen-giay-viet-tay-sang-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 6
  },
  {
    "slug": "dich-vu-go-van-ban-thue",
    "cat": "Kiến thức",
    "date": "2026-10-18",
    "tags": [
      "Gõ văn bản thuê",
      "Bảng giá",
      "Đánh máy thuê",
      "Dịch vụ"
    ],
    "title": "Dịch vụ gõ văn bản thuê: bảng giá 2026, cách tính trang và 7 tiêu chí chọn đơn vị uy tín",
    "seoTitle": "Dịch vụ gõ văn bản thuê: bảng giá 2026 và cách chọn",
    "excerpt": "Gõ văn bản thuê giá bao nhiêu một trang? Cách tính trang, các yếu tố làm giá tăng giảm, chi phí ẩn cần tránh và 7 tiêu chí chọn dịch vụ gõ thuê uy tín, bảo mật.",
    "body": "<p class=\"lead\">“Gõ văn bản thuê bao nhiêu tiền một trang?” là câu hỏi đầu tiên của hầu hết khách hàng. Câu trả lời không chỉ là một con số: giá phụ thuộc thời hạn bạn cần, loại tài liệu gốc, yêu cầu trình bày - và cả những chi phí ẩn mà nhiều người chỉ phát hiện khi đã giao việc. Bài viết giúp bạn hiểu cách tính giá và chọn được đơn vị gõ thuê đáng tin cậy.</p>\n<figure><img src=\"/assets/img/blog/fig-gia-go-thue.svg\" alt=\"Giá gõ văn bản theo thời hạn\" loading=\"lazy\" width=\"960\"><figcaption>Thời hạn càng dài, đơn giá mỗi trang càng thấp. Số liệu minh họa theo bảng giá đánh máy lại của Đánh máy 247 tại thời điểm viết bài.</figcaption></figure>\n\n<h2>Giá gõ văn bản thuê được tính thế nào?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Yếu tố</th><th>Ảnh hưởng đến giá</th></tr>\n  <tr><td><b>Thời hạn</b></td><td>Gấp 6-24 giờ cao nhất; 7-30 ngày rẻ nhất</td></tr>\n  <tr><td><b>Loại tài liệu gốc</b></td><td>Chữ in, PDF rõ: giá cơ bản; viết tay, ảnh mờ: hệ số cao hơn</td></tr>\n  <tr><td><b>Nội dung đặc biệt</b></td><td>Công thức Toán - Lý - Hóa, LaTeX, bảng biểu phức tạp</td></tr>\n  <tr><td><b>Yêu cầu thêm</b></td><td>Định dạng theo mẫu, biên tập, hiệu đính</td></tr>\n  <tr><td><b>Khối lượng</b></td><td>Đơn lớn, dài hạn có thể được báo giá riêng</td></tr>\n</table></div>\n\n<h2>Bảng giá tham khảo</h2>\n<p>Tại Đánh máy 247, đơn giá gõ lại tài liệu (chữ in, PDF, ảnh) theo trang tài liệu gốc:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thời hạn</th><th>Đơn giá/trang</th></tr>\n  <tr><td>Gấp 6 giờ</td><td>45.000 đ</td></tr>\n  <tr><td>24 giờ</td><td>33.000 đ</td></tr>\n  <tr><td>3 ngày</td><td>29.000 đ</td></tr>\n  <tr><td>7 ngày</td><td>24.000 đ</td></tr>\n  <tr><td>30 ngày</td><td>19.000 đ</td></tr>\n</table></div>\n<p>Chữ viết tay +15%, công thức Toán - Hóa +50%, LaTeX +60%; định dạng theo mẫu +10%, biên tập +20%. Giá có thể thay đổi theo thời điểm - luôn xem <a href=\"/bang-gia\">bảng giá hiện hành</a> hoặc chọn cấu hình ở <a href=\"/dat-hang\">trang đặt hàng</a> để thấy tổng tiền chính xác trước khi thanh toán.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Không gấp? Chọn thời hạn 7-30 ngày có thể tiết kiệm gần một nửa chi phí so với giao trong ngày. Học sinh, sinh viên còn có mã giảm giá riêng.</div></div>\n\n<h2>Chi phí ẩn cần hỏi trước</h2>\n<ul>\n  <li><b>Phụ phí “bản khó”</b>: bản scan mờ, chữ xấu bị tính thêm sau khi đã nhận việc.</li>\n  <li><b>Phí chỉnh sửa</b>: sửa lỗi do bên gõ gây ra mà vẫn tính tiền.</li>\n  <li><b>Phí định dạng</b>: báo giá chỉ gõ chữ, muốn có bảng, mục lục phải trả thêm.</li>\n  <li><b>Cách đếm trang</b>: đếm theo trang bản Word đầu ra (thường nhiều hơn bản gốc).</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Hãy yêu cầu báo giá bằng văn bản ghi rõ: đơn giá, cách tính trang, thời hạn, số lần chỉnh sửa miễn phí và chính sách khi trễ hạn.</div></div>\n\n<h2>7 tiêu chí chọn dịch vụ gõ văn bản thuê</h2>\n<ol class=\"steps\">\n  <li><b>Báo giá minh bạch</b>, thấy tổng tiền trước khi thanh toán.</li>\n  <li><b>Người thật gõ và có khâu kiểm tra</b> - không chỉ chạy phần mềm nhận dạng.</li>\n  <li><b>Cam kết thời hạn</b> và chính sách hoàn tiền khi trễ.</li>\n  <li><b>Chỉnh sửa miễn phí</b> trong một khoảng thời gian rõ ràng.</li>\n  <li><b>Bảo mật</b>: cam kết NDA, xóa tệp sau khi hoàn thành - xem <a href=\"/blog/bao-mat-khi-thue-ngoai-danh-may\">5 câu hỏi về bảo mật</a>.</li>\n  <li><b>Theo dõi được đơn hàng</b>, trao đổi trực tiếp với người làm.</li>\n  <li><b>Có mẫu thực tế</b> để bạn đánh giá chất lượng - xem <a href=\"/mau\">bài mẫu trước và sau</a>.</li>\n</ol>\n\n<h2>Khi nào nên thuê thay vì tự gõ?</h2>\n<p>Khi tài liệu dài, chữ viết tay khó đọc, có công thức hoặc bảng biểu phức tạp, hay khi thời gian của bạn đáng giá hơn khoản phí gõ thuê. Bài <a href=\"/blog/tu-go-hay-thue-go-van-ban\">tự gõ hay thuê gõ</a> có cách tính cụ thể giúp bạn quyết định.</p>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Muốn biết chính xác chi phí cho tài liệu của bạn?</b>Chọn loại tài liệu, số trang, thời hạn - giá hiện ngay. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Giá phụ thuộc thời hạn, loại tài liệu, nội dung đặc biệt và yêu cầu thêm.</li><li>Thời hạn dài giúp tiết kiệm đáng kể.</li><li>Hỏi rõ chi phí ẩn: phụ phí bản khó, phí chỉnh sửa, cách đếm trang.</li><li>Chọn đơn vị minh bạch, có kiểm tra, bảo mật và cam kết thời hạn.</li></ul></div>",
    "faq": [
      {
        "q": "Gõ văn bản thuê giá bao nhiêu một trang?",
        "a": "Giá phụ thuộc thời hạn, loại tài liệu và yêu cầu định dạng. Tại Đánh máy 247, gõ lại tài liệu có giá từ 19.000 đ/trang (thời hạn 30 ngày) đến 45.000 đ/trang (gấp 6 giờ); chữ viết tay, công thức, LaTeX có hệ số riêng. Xem bảng giá hiện hành tại trang Bảng giá."
      },
      {
        "q": "Một trang được tính như thế nào?",
        "a": "Thường tính theo trang của tài liệu gốc (một mặt giấy A4 hoặc tương đương). Trang có mật độ chữ quá dày hoặc khổ lớn được báo giá lại trước khi làm."
      },
      {
        "q": "Có phải trả thêm phí khi bản scan mờ, chữ khó đọc không?",
        "a": "Ở Đánh máy 247, giá hiển thị khi đặt hàng là giá cuối cùng; phụ phí chỉ áp dụng theo loại chuyển đổi (ví dụ viết tay, công thức) được nêu rõ trước khi thanh toán."
      }
    ],
    "cover": "/assets/img/blog/dich-vu-go-van-ban-thue.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "danh-may-thue-gia-re-uy-tin",
    "cat": "Kiến thức",
    "date": "2026-10-17",
    "tags": [
      "Đánh máy thuê giá rẻ",
      "Dịch vụ đánh máy",
      "Gõ văn bản thuê",
      "Uy tín"
    ],
    "title": "Đánh máy thuê giá rẻ: rẻ đến đâu là hợp lý? Cạm bẫy thường gặp và cách tiết kiệm đúng cách",
    "seoTitle": "Đánh máy thuê giá rẻ: rẻ đến đâu là hợp lý, uy tín?",
    "excerpt": "Đánh máy thuê giá rẻ mà vẫn uy tín: vì sao giá quá thấp tiềm ẩn rủi ro, 5 cạm bẫy thường gặp và 7 cách tiết kiệm chi phí gõ văn bản đúng cách.",
    "body": "<p class=\"lead\">“Đánh máy thuê giá rẻ” là một trong những cụm từ được tìm kiếm nhiều nhất khi người dùng cần gõ văn bản. Ai cũng muốn tiết kiệm - điều đó hoàn toàn chính đáng. Nhưng trong dịch vụ đánh máy, giá thấp bất thường thường có lý do: bỏ khâu kiểm tra, dùng máy nhận dạng không soát lại, hoặc tệ hơn là không giao hàng. Bài viết giúp bạn phân biệt “rẻ hợp lý” với “rẻ rủi ro” và chỉ ra cách tiết kiệm đúng.</p>\n<figure><img src=\"/assets/img/blog/fig-chi-phi-that.svg\" alt=\"Chi phí thật của dịch vụ đánh máy giá rẻ\" loading=\"lazy\" width=\"960\"><figcaption>Giá niêm yết thấp nhưng cộng thêm thời gian sửa lỗi, phí phát sinh và rủi ro trễ hạn - tổng chi phí thật có thể cao hơn dịch vụ báo giá minh bạch.</figcaption></figure>\n\n<h2>Giá đánh máy được tạo nên từ đâu?</h2>\n<p>Một trang đánh máy chất lượng bao gồm nhiều công đoạn hơn bạn nghĩ:</p>\n<ul>\n  <li><b>Thời gian đọc và gõ</b> của chuyên viên - nhiều hơn với chữ viết tay, bảng biểu.</li>\n  <li><b>Thời gian định dạng</b>: dựng bảng thật, Heading, mục lục, công thức.</li>\n  <li><b>Khâu kiểm tra</b> của biên tập viên: đối chiếu số liệu, tên riêng, chính tả.</li>\n  <li><b>Quản lý, bảo mật, hạ tầng</b>: hệ thống nhận - giao tệp an toàn, xóa dữ liệu, hỗ trợ khách hàng.</li>\n</ul>\n<p>Khi giá thấp hơn nhiều so với mặt bằng, một trong các công đoạn trên thường đã bị cắt bớt - phổ biến nhất là khâu kiểm tra.</p>\n\n<h2>5 cạm bẫy thường gặp với dịch vụ quá rẻ</h2>\n<ol class=\"steps\">\n  <li><b>Phí phát sinh sau khi nhận việc</b>: “bản này mờ quá, phải thêm tiền”, “có bảng nên tính gấp đôi”.</li>\n  <li><b>Đếm trang theo bản đầu ra</b>: bản Word cỡ chữ lớn, giãn dòng rộng làm số trang tăng vọt.</li>\n  <li><b>Máy gõ thay người</b>: chạy phần mềm nhận dạng rồi giao luôn, lỗi dấu tiếng Việt, số liệu chi chít.</li>\n  <li><b>Định dạng “giả”</b>: căn bảng bằng phím cách, ngắt dòng bằng Enter - sửa một chữ là vỡ cả trang.</li>\n  <li><b>Trễ hạn hoặc mất liên lạc</b>: không hợp đồng, không địa chỉ, khó đòi lại tiền.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chuyển trước toàn bộ tiền cho cá nhân lạ trên mạng xã hội, đặc biệt khi họ không có website, không ghi rõ thời hạn và chính sách hoàn tiền. Với tài liệu nhạy cảm, rủi ro lộ thông tin còn lớn hơn rủi ro mất tiền.</div></div>\n\n<h2>Rẻ hợp lý trông như thế nào?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Rẻ hợp lý</b>Giá hiển thị trước khi trả tiền; rẻ vì bạn chọn thời hạn dài; có khâu kiểm tra; có chỉnh sửa miễn phí; có chính sách khi trễ hạn; có mã giảm giá công khai.</div>\n  <div class=\"bad\"><b>Rẻ rủi ro</b>Báo giá “từ” rất thấp nhưng không nói điều kiện; phí phát sinh; không cam kết thời hạn; không bảo mật; chỉ liên hệ qua tin nhắn cá nhân.</div>\n</div>\n\n<h2>7 cách tiết kiệm chi phí đánh máy đúng cách</h2>\n<ol class=\"steps\">\n  <li><b>Đặt sớm, chọn thời hạn dài</b>: chênh lệch đơn giá giữa giao gấp và giao sau vài tuần có thể gần gấp đôi - xem <a href=\"/blog/dich-vu-go-van-ban-thue\">bảng giá theo thời hạn</a>.</li>\n  <li><b>Chỉ gửi phần cần gõ</b>: ghi rõ trang cần làm, bỏ phần đã có file.</li>\n  <li><b>Tách phần gấp và không gấp</b> thành hai đơn - xem <a href=\"/blog/go-van-ban-gap-trong-ngay\">gõ văn bản gấp</a>.</li>\n  <li><b>Chụp ảnh rõ, đúng thứ tự</b>: giảm thời gian đọc, giảm chỗ phải đánh dấu.</li>\n  <li><b>Ghi yêu cầu cụ thể ngay từ đầu</b>: tránh làm lại vì sai định dạng.</li>\n  <li><b>Dùng mã giảm giá</b>: khách mới, học sinh - sinh viên thường có ưu đãi riêng.</li>\n  <li><b>Gộp đơn</b>: cả nhóm, cả phòng ban gửi chung một đơn, thống nhất định dạng.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hỏi qua khung chat “Hỗ trợ Đánh máy 247” với câu như “giá 30 trang viết tay 7 ngày” để so sánh nhanh nhiều phương án thời hạn trước khi đặt.</div></div>\n\n<h2>So sánh đúng cách giữa các dịch vụ</h2>\n<p>Khi so sánh báo giá, hãy đặt lên cùng một mặt bằng:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Câu hỏi</th><th>Vì sao quan trọng</th></tr>\n  <tr><td>Tính theo trang bản gốc hay bản đầu ra?</td><td>Bản đầu ra thường nhiều trang hơn</td></tr>\n  <tr><td>Thời hạn bao lâu, tính từ khi nào?</td><td>Cùng giá nhưng khác thời hạn là khác dịch vụ</td></tr>\n  <tr><td>Có biên tập viên kiểm tra không?</td><td>Quyết định số lỗi bạn phải tự sửa</td></tr>\n  <tr><td>Chỉnh sửa miễn phí bao lâu?</td><td>Tránh trả thêm tiền cho lỗi của bên gõ</td></tr>\n  <tr><td>Trễ hạn xử lý thế nào?</td><td>Bảo vệ bạn khi có sự cố</td></tr>\n  <tr><td>Tệp được xóa khi nào?</td><td>Bảo mật tài liệu</td></tr>\n</table></div>\n\n<h2>Cam kết của Đánh máy 247</h2>\n<ul>\n  <li>Giá cố định hiển thị trước khi thanh toán, không phụ phí cho chữ xấu hay bản scan mờ.</li>\n  <li>Người thật gõ, biên tập viên kiểm tra trước khi giao.</li>\n  <li>Chỉnh sửa miễn phí trong 14 ngày; hoàn tiền khi trễ hạn hoặc không đạt cam kết theo chính sách.</li>\n  <li>Nhân sự ký NDA, tệp tự xóa sau 30 ngày.</li>\n  <li>Đơn giá từ 19.000 đ/trang với thời hạn 30 ngày; có mã giảm giá cho khách mới và sinh viên.</li>\n</ul>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Đánh máy giá hợp lý, minh bạch từ đầu</b>Chọn thời hạn phù hợp để có giá tốt nhất - không phí ẩn. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Giá quá thấp thường đi kèm cắt bớt khâu kiểm tra hoặc phí phát sinh.</li><li>So sánh trên cùng điều kiện: cách đếm trang, thời hạn, kiểm tra, chỉnh sửa.</li><li>Tiết kiệm đúng: đặt sớm, chỉ gửi phần cần gõ, chụp rõ, dùng mã giảm giá.</li><li>Tránh chuyển tiền trước cho cá nhân không rõ danh tính.</li></ul></div>",
    "faq": [
      {
        "q": "Giá đánh máy thuê bao nhiêu là rẻ?",
        "a": "Không có con số cố định vì giá phụ thuộc thời hạn và độ khó. Hãy so sánh trên cùng điều kiện: cùng thời hạn, cùng loại tài liệu, cùng yêu cầu định dạng và có hay không khâu kiểm tra, chỉnh sửa miễn phí."
      },
      {
        "q": "Làm sao để đánh máy thuê rẻ hơn?",
        "a": "Đặt sớm với thời hạn dài, chỉ gửi phần thật sự cần gõ, chụp ảnh rõ, ghi yêu cầu cụ thể ngay từ đầu, dùng mã giảm giá và gộp đơn nhỏ thành đơn lớn."
      },
      {
        "q": "Dấu hiệu nào cho thấy dịch vụ giá rẻ không đáng tin?",
        "a": "Không có website, địa chỉ hay hợp đồng; yêu cầu chuyển tiền trước toàn bộ cho cá nhân lạ; không nói rõ thời hạn, chính sách sửa lỗi, bảo mật; báo giá thấp bất thường rồi phát sinh phí sau."
      }
    ],
    "cover": "/assets/img/blog/danh-may-thue-gia-re-uy-tin.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "thue-go-tai-lieu-online",
    "cat": "Mẹo hay",
    "date": "2026-10-17",
    "tags": [
      "Thuê gõ tài liệu",
      "Gõ thuê online",
      "Đặt hàng",
      "File Word"
    ],
    "title": "Thuê gõ tài liệu online: quy trình 5 bước từ ảnh chụp điện thoại đến file Word hoàn chỉnh",
    "seoTitle": "Thuê gõ tài liệu online: quy trình 5 bước nhận file Word",
    "excerpt": "Chụp ảnh, tải lên, thanh toán và nhận file Word qua mạng: quy trình 5 bước thuê gõ tài liệu online và mẹo nhận kết quả nhanh, chính xác.",
    "body": "<p class=\"lead\">Trước đây, thuê gõ văn bản nghĩa là mang xấp tài liệu đến tiệm, hẹn ngày quay lại lấy đĩa. Nay toàn bộ quy trình có thể làm online: chụp ảnh bằng điện thoại, tải lên, chuyển khoản và nhận file Word qua email. Tiện là vậy, nhưng chuẩn bị đúng cách sẽ quyết định bạn nhận được kết quả nhanh và chính xác đến đâu.</p>\n<figure><img src=\"/assets/img/blog/fig-quy-trinh-go-thue.svg\" alt=\"Quy trình 5 bước thuê gõ tài liệu online\" loading=\"lazy\" width=\"960\"><figcaption>Chụp/scan → tải lên và ghi yêu cầu → thanh toán → theo dõi, trao đổi → nhận file và kiểm tra.</figcaption></figure>\n\n<h2>Bước 1: Chụp hoặc scan tài liệu</h2>\n<ul>\n  <li>Chụp thẳng góc, đủ sáng, nền tương phản; mỗi ảnh một trang.</li>\n  <li>Dùng ứng dụng quét tài liệu để tự cắt viền, làm phẳng trang.</li>\n  <li>Đặt tên ảnh theo thứ tự trang (01, 02, 03…) hoặc gộp thành một PDF.</li>\n</ul>\n<p>Chi tiết xem <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu bằng điện thoại</a>.</p>\n\n<h2>Bước 2: Tải lên và ghi yêu cầu rõ ràng</h2>\n<p>Phần hướng dẫn là nơi quyết định kết quả có đúng ý bạn hay không. Hãy ghi:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nội dung</th><th>Ví dụ</th></tr>\n  <tr><td>Trang cần gõ</td><td>“Chỉ gõ trang 3-18, bỏ phụ lục”</td></tr>\n  <tr><td>Định dạng</td><td>“Times New Roman 13, giãn dòng 1,5, giữ bảng như bản gốc”</td></tr>\n  <tr><td>Chữ khó đọc</td><td>“Chỗ không đọc được đánh dấu [?]”</td></tr>\n  <tr><td>Tên riêng, thuật ngữ</td><td>Danh sách tên người, địa danh, thuật ngữ chuyên ngành</td></tr>\n  <tr><td>Định dạng file</td><td>.docx, Google Docs, Excel</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Tài liệu nhiều hơn số tệp cho phép hoặc quá nặng: nén thành ZIP hoặc gửi liên kết Google Drive (đã mở quyền xem) trong phần hướng dẫn.</div></div>\n\n<h2>Bước 3: Thanh toán và xác nhận</h2>\n<p>Tại Đánh máy 247, sau khi đặt hàng bạn quét mã VietQR - số tiền và nội dung đã điền sẵn. Thời hạn bắt đầu tính khi thanh toán được xác nhận, bạn nhận email kèm liên kết theo dõi đơn.</p>\n\n<h2>Bước 4: Theo dõi và trao đổi</h2>\n<ul>\n  <li>Xem tiến độ: đã thanh toán → đang thực hiện → kiểm tra → hoàn thành.</li>\n  <li>Nhắn tin bổ sung yêu cầu, gửi thêm tài liệu ngay trong trang đơn hàng.</li>\n  <li>Nhận thông báo khi có cập nhật - không cần gọi điện hỏi.</li>\n</ul>\n\n<h2>Bước 5: Nhận file và kiểm tra</h2>\n<p>Tải file từ email hoặc trang tài khoản, kiểm tra theo <a href=\"/blog/kiem-tra-file-go-thue-nghiem-thu\">checklist nghiệm thu</a>: đủ trang, đúng số liệu, đúng định dạng. Nếu cần sửa, nhắn cụ thể trang và dòng - bạn được chỉnh sửa miễn phí trong 14 ngày.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không gửi tài liệu chứa thông tin nhạy cảm (hợp đồng, hồ sơ cá nhân) qua nhóm chat, mạng xã hội hay cho người lạ “nhận gõ giá rẻ”. Hãy dùng kênh có bảo mật và cam kết xóa dữ liệu.</div></div>\n\n<h2>Mẹo nhận file nhanh hơn</h2>\n<ol class=\"steps\">\n  <li>Gửi đủ tài liệu ngay lần đầu, tránh bổ sung nhiều lần.</li>\n  <li>Ghi yêu cầu định dạng cụ thể, kèm file mẫu nếu có.</li>\n  <li>Chọn thời hạn phù hợp; với đơn gấp, xem <a href=\"/blog/go-van-ban-gap-trong-ngay\">cách chuẩn bị gõ văn bản gấp</a>.</li>\n  <li>Kiểm tra email (cả mục Spam) và bật thông báo trong trang đơn hàng.</li>\n</ol>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Sẵn sàng gửi tài liệu?</b>Tải lên tối đa 6 tệp, nhận file Word từ 6 giờ. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n\n<h2>Câu hỏi khách hàng hay gặp khi đặt lần đầu</h2>\n<ul>\n  <li><b>Gửi tài liệu rồi mới biết giá được không?</b> Trên trang đặt hàng, bạn thấy tổng tiền ngay khi chọn loại tài liệu, số trang và thời hạn - trước khi thanh toán.</li>\n  <li><b>Không có tài khoản có theo dõi được đơn không?</b> Có, bằng liên kết trong email xác nhận; hoặc đăng nhập bằng email, không cần mật khẩu.</li>\n  <li><b>Muốn hỏi trước khi đặt?</b> Dùng khung chat “Hỗ trợ Đánh máy 247” ở góc phải - có thể gõ “giá 20 trang viết tay 3 ngày” để nhận báo giá nhanh.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Ảnh chụp rõ, đúng thứ tự giúp gõ nhanh và chính xác.</li><li>Phần hướng dẫn chi tiết quyết định kết quả có đúng ý.</li><li>Theo dõi và trao đổi ngay trong trang đơn hàng.</li><li>Kiểm tra file khi nhận, yêu cầu sửa cụ thể trong 14 ngày.</li></ul></div>",
    "faq": [
      {
        "q": "Thuê gõ tài liệu online có an toàn không?",
        "a": "An toàn nếu bạn chọn đơn vị có website, thông tin liên hệ rõ ràng, kết nối HTTPS, cam kết bảo mật và chính sách xóa tệp. Tránh gửi tài liệu nhạy cảm qua nhóm chat hoặc cho cá nhân không rõ danh tính."
      },
      {
        "q": "Ảnh chụp bằng điện thoại có gõ được không?",
        "a": "Được, miễn là ảnh rõ chữ. Chụp thẳng, đủ sáng, không bóng tay và không cắt mất mép chữ để người gõ đọc chính xác."
      },
      {
        "q": "Bao lâu thì nhận được file?",
        "a": "Tùy thời hạn bạn chọn, nhanh nhất từ 6 giờ. Thời hạn thường tính từ lúc thanh toán được xác nhận."
      }
    ],
    "cover": "/assets/img/blog/thue-go-tai-lieu-online.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "quy-tac-go-van-ban-tieng-viet",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-10-16",
    "tags": [
      "Gõ văn bản",
      "Quy tắc trình bày",
      "Chính tả",
      "Word"
    ],
    "title": "15 quy tắc gõ văn bản tiếng Việt chuẩn mà dịch vụ đánh máy chuyên nghiệp luôn áp dụng",
    "seoTitle": "15 quy tắc gõ văn bản tiếng Việt chuẩn như dân chuyên",
    "excerpt": "15 quy tắc gõ văn bản tiếng Việt chuẩn: khoảng trắng, dấu câu, ngoặc kép, gạch nối, số và đơn vị, viết hoa, Heading - áp dụng ngay trong Word.",
    "body": "<p class=\"lead\">Hai văn bản có nội dung giống hệt nhau, nhưng một bản trông chuyên nghiệp, bản kia trông “nghiệp dư”. Sự khác biệt thường nằm ở những chi tiết nhỏ: khoảng trắng thừa trước dấu phẩy, ngoặc kép lúc cong lúc thẳng, số tiền viết mỗi chỗ một kiểu. Đây là 15 quy tắc gõ văn bản tiếng Việt mà chuyên viên đánh máy chuyên nghiệp luôn áp dụng - bạn có thể dùng ngay cho tài liệu của mình.</p>\n<figure><img src=\"/assets/img/blog/fig-quy-tac-go-van-ban.svg\" alt=\"Ví dụ gõ văn bản sai và đúng quy tắc\" loading=\"lazy\" width=\"960\"><figcaption>Những lỗi trình bày phổ biến (bên trái) và cách gõ đúng (bên phải): khoảng trắng, dấu câu, ngoặc kép, số và đơn vị.</figcaption></figure>\n\n<h2>Nhóm 1: Dấu câu và khoảng trắng</h2>\n<h3>1. Không có khoảng trắng trước dấu câu</h3>\n<p>Dấu chấm, phẩy, chấm phẩy, hai chấm, chấm hỏi, chấm than viết liền với chữ đứng trước, sau dấu có <b>một</b> khoảng trắng. Sai: “Hôm nay , chúng ta họp .” - Đúng: “Hôm nay, chúng ta họp.”</p>\n<h3>2. Chỉ một khoảng trắng giữa hai từ</h3>\n<p>Không dùng nhiều dấu cách để căn chỉnh. Dùng <kbd>Ctrl</kbd> + <kbd>H</kbd> thay hai dấu cách bằng một dấu cách, lặp lại đến khi Word báo không còn.</p>\n<h3>3. Dấu ngoặc ôm sát nội dung</h3>\n<p>“(theo Nghị định 30)” - không có khoảng trắng sau ngoặc mở và trước ngoặc đóng. Tương tự với ngoặc kép.</p>\n<h3>4. Ngoặc kép thống nhất</h3>\n<p>Dùng ngoặc kép cong “ ” cho văn bản trình bày đẹp và dùng thống nhất. Trong Word: File → Options → Proofing → AutoCorrect Options → AutoFormat As You Type → chọn thay ngoặc thẳng bằng ngoặc cong.</p>\n<h3>5. Dấu ba chấm</h3>\n<p>Dùng dấu ba chấm (…) liền với chữ đứng trước, không viết bốn - năm dấu chấm. Word tự đổi “...” thành “…” nếu bật AutoCorrect.</p>\n\n<h2>Nhóm 2: Gạch nối, gạch ngang</h2>\n<h3>6. Phân biệt các loại gạch</h3>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Ký hiệu</th><th>Dùng khi</th><th>Ví dụ</th></tr>\n  <tr><td>- (gạch nối)</td><td>Nối từ, gạch đầu dòng đơn giản</td><td>Anh - Việt, Bắc - Nam</td></tr>\n  <tr><td>– (gạch ngang ngắn)</td><td>Khoảng giá trị (một số quy ước)</td><td>trang 10–20</td></tr>\n  <tr><td>− (dấu trừ)</td><td>Phép trừ, số âm trong công thức</td><td>5 − 3; −2 °C</td></tr>\n</table></div>\n<p>Quan trọng nhất là <b>thống nhất</b> một quy ước trong toàn tài liệu, và dùng đúng dấu trừ trong công thức - xem <a href=\"/blog/danh-may-cong-thuc-toan\">đánh máy công thức Toán</a>.</p>\n\n<h2>Nhóm 3: Số, đơn vị, ngày tháng</h2>\n<h3>7. Phân cách hàng nghìn và thập phân</h3>\n<p>Văn bản tiếng Việt: dấu chấm phân cách hàng nghìn (1.250.000), dấu phẩy thập phân (3,5). Tài liệu song ngữ, kỹ thuật theo chuẩn quốc tế cần thống nhất quy ước riêng - xem <a href=\"/blog/go-tai-lieu-tieng-anh-thue\">gõ tài liệu tiếng Anh</a>.</p>\n<h3>8. Khoảng trắng giữa số và đơn vị</h3>\n<p>“25 kg”, “220 V”, “1.250.000 đồng”. Dùng khoảng trắng không ngắt dòng (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd>) để số và đơn vị không bị tách sang hai dòng. Chi tiết: <a href=\"/blog/go-cong-thuc-vat-ly-don-vi-si\">đơn vị SI đúng chuẩn</a>.</p>\n<h3>9. Ngày tháng thống nhất</h3>\n<p>Chọn một kiểu và dùng xuyên suốt: “ngày 20 tháng 10 năm 2026” trong văn bản hành chính, “20/10/2026” trong bảng biểu. Không trộn 20-10-26, 20/10/2026 và “20 tháng Mười”.</p>\n\n<h2>Nhóm 4: Viết hoa và chính tả</h2>\n<h3>10. Viết hoa đúng quy tắc</h3>\n<p>Viết hoa chữ đầu câu, tên riêng người, địa danh, cơ quan theo quy định; không viết hoa tùy hứng để “nhấn mạnh”. Văn bản hành chính tham khảo phụ lục về viết hoa trong Nghị định 30 - xem <a href=\"/blog/the-thuc-van-ban-nghi-dinh-30\">thể thức văn bản</a>.</p>\n<h3>11. Thống nhất chính tả i/y</h3>\n<p>“Kĩ thuật” hay “kỹ thuật”, “lí do” hay “lý do” - chọn một chuẩn theo yêu cầu của nơi nhận và dùng nhất quán. Các lỗi phổ biến khác xem <a href=\"/blog/loi-chinh-ta-tieng-viet\">12 lỗi chính tả</a>.</p>\n<h3>12. Dùng phông Unicode</h3>\n<p>Times New Roman, Arial, Calibri… với bảng mã Unicode. Tránh phông cũ TCVN3, VNI gây lỗi hiển thị trên máy khác - xem <a href=\"/blog/sua-loi-font-tcvn3-vni-unicode\">sửa lỗi font</a>.</p>\n\n<h2>Nhóm 5: Cấu trúc tài liệu</h2>\n<h3>13. Không ngắt dòng bằng Enter giữa câu</h3>\n<p>Để Word tự xuống dòng; chỉ nhấn Enter khi kết thúc đoạn. Ngắt dòng cứng làm văn bản vỡ khi đổi cỡ chữ và gây lỗi khi đưa vào công cụ dịch.</p>\n<h3>14. Không căn chỉnh bằng phím cách, Tab liên tiếp</h3>\n<p>Dùng căn lề, thụt đầu dòng, bảng (Table) và điểm dừng Tab. Bảng phải là Table thật - xem <a href=\"/blog/go-bang-bieu-bieu-mau-thue\">gõ bảng biểu đúng cấu trúc</a>.</p>\n<h3>15. Tiêu đề dùng Heading</h3>\n<p>Gán Heading 1, 2, 3 thay vì chỉ in đậm, phóng to. Bạn sẽ có mục lục tự động và cấu trúc rõ ràng - xem <a href=\"/blog/tao-muc-luc-tu-dong-word\">mục lục tự động</a>.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Bật hiện ký tự ẩn (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd>) để thấy ngay khoảng trắng thừa, Enter giữa câu, Tab liên tiếp - những lỗi “vô hình” làm tài liệu kém chuyên nghiệp.</div></div>\n\n<h2>Áp dụng nhanh với Find &amp; Replace</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Lỗi</th><th>Tìm</th><th>Thay bằng</th></tr>\n  <tr><td>Hai dấu cách</td><td>(2 dấu cách)</td><td>(1 dấu cách)</td></tr>\n  <tr><td>Dấu cách trước dấu phẩy</td><td>“ ,”</td><td>“,”</td></tr>\n  <tr><td>Dấu cách trước dấu chấm</td><td>“ .”</td><td>“.”</td></tr>\n  <tr><td>Ngắt dòng thủ công</td><td>^l</td><td>(1 dấu cách) - kiểm tra lại sau khi thay</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Luôn lưu bản sao trước khi thay thế hàng loạt và kiểm tra lại các trường hợp đặc biệt (số thập phân, địa chỉ web, mã sản phẩm) để không “sửa nhầm” nội dung đúng.</div></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Mọi tài liệu tại Đánh máy 247 đều được gõ theo các quy tắc trên và biên tập viên kiểm tra trước khi giao. Bạn chỉ cần ghi thêm yêu cầu riêng nếu có (chuẩn i/y, kiểu ngày tháng, kiểu gạch).</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Không có khoảng trắng trước dấu câu; một khoảng trắng sau dấu.</li><li>Thống nhất ngoặc kép, gạch, ngày tháng, chuẩn i/y trong toàn tài liệu.</li><li>Số: dấu chấm hàng nghìn, dấu phẩy thập phân, khoảng trắng trước đơn vị.</li><li>Không ngắt dòng, căn chỉnh bằng phím cách; tiêu đề dùng Heading.</li></ul></div>",
    "faq": [
      {
        "q": "Có dấu cách trước dấu chấm, dấu phẩy không?",
        "a": "Không. Dấu chấm, phẩy, chấm phẩy, hai chấm, chấm hỏi, chấm than viết liền với chữ đứng trước và có một khoảng trắng sau."
      },
      {
        "q": "Nên dùng ngoặc kép “ ” hay \" \"?",
        "a": "Trong văn bản tiếng Việt trình bày đẹp nên dùng ngoặc kép cong “ ” và dùng thống nhất trong toàn tài liệu. Word có thể tự đổi khi bật tùy chọn tương ứng."
      },
      {
        "q": "Viết số tiền thế nào cho đúng?",
        "a": "Dùng dấu chấm phân cách hàng nghìn (1.250.000) và dấu phẩy cho phần thập phân, có khoảng trắng giữa số và đơn vị (1.250.000 đồng). Văn bản quan trọng nên ghi thêm bằng chữ."
      }
    ],
    "cover": "/assets/img/blog/quy-tac-go-van-ban-tieng-viet.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 6
  },
  {
    "slug": "tu-go-hay-thue-go-van-ban",
    "cat": "Kiến thức",
    "date": "2026-10-16",
    "tags": [
      "Gõ văn bản thuê",
      "Tiết kiệm thời gian",
      "Chi phí",
      "Năng suất"
    ],
    "title": "Tự gõ hay thuê gõ văn bản? Cách tính chi phí thời gian thực tế trước khi quyết định",
    "seoTitle": "Tự gõ hay thuê gõ văn bản? Cách tính chi phí thực tế",
    "excerpt": "Tự gõ 50 trang mất bao lâu? So sánh chi phí thời gian, công sức và độ chính xác khi tự gõ với thuê gõ văn bản, kèm công thức tính đơn giản để bạn tự quyết định.",
    "body": "<p class=\"lead\">“Thôi tự gõ cho đỡ tốn tiền” - nhiều người nghĩ vậy, rồi mất cả tuần buổi tối để gõ xong một tập tài liệu, thêm vài buổi sửa lỗi định dạng. Tự gõ không miễn phí: bạn trả bằng thời gian, sức lực và đôi khi bằng lỗi sai. Bài viết giúp bạn tính toán cụ thể để quyết định tự gõ hay thuê gõ.</p>\n<figure><img src=\"/assets/img/blog/fig-tu-go-vs-thue.svg\" alt=\"So sánh thời gian tự gõ và thuê gõ 50 trang\" loading=\"lazy\" width=\"960\"><figcaption>Ví dụ minh họa với 50 trang tài liệu: thời gian bạn phải bỏ ra khi tự gõ so với thời gian chuẩn bị và kiểm tra khi thuê gõ.</figcaption></figure>\n\n<h2>Bước 1: Ước tính thời gian tự gõ</h2>\n<p>Thời gian thực tế không chỉ là thời gian gõ chữ:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Công đoạn</th><th>Chiếm thời gian</th></tr>\n  <tr><td>Đọc bản gốc, gõ chữ</td><td>Phần lớn, chậm hẳn nếu chữ viết tay</td></tr>\n  <tr><td>Dựng bảng, công thức, tiêu đề</td><td>Có thể gấp đôi thời gian gõ với tài liệu kỹ thuật</td></tr>\n  <tr><td>Soát lỗi chính tả, số liệu</td><td>Thường bị bỏ qua - nguồn lỗi chính</td></tr>\n  <tr><td>Nghỉ, mất tập trung</td><td>Không thể tránh khi làm nhiều giờ</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Ví dụ minh họa: nếu mỗi trang chữ in mất khoảng 15-20 phút cả gõ, định dạng và soát, 50 trang cần khoảng 12-17 giờ làm việc. Bạn có thể đo chính xác bằng cách tự gõ thử 2-3 trang và bấm giờ.</div></div>\n\n<h2>Bước 2: Quy đổi thời gian thành tiền</h2>\n<p>Công thức đơn giản:</p>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px\">Chi phí tự gõ = Số giờ × Giá trị một giờ của bạn</p>\n<p>Giá trị một giờ có thể là thu nhập bạn có được nếu dùng thời gian đó làm việc chính, hoặc đơn giản là giá trị bạn đặt cho giờ nghỉ ngơi, học tập, ở bên gia đình. So sánh con số này với báo giá thuê gõ - xem <a href=\"/blog/dich-vu-go-van-ban-thue\">bảng giá gõ văn bản thuê</a>.</p>\n\n<h2>Bước 3: Tính đến độ chính xác</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Tự gõ khi mệt</b>Dễ sai số liệu, bỏ dòng, lỗi dấu tiếng Việt; tự soát bài của mình thường không thấy lỗi.</div>\n  <div class=\"good\"><b>Thuê đơn vị có kiểm tra</b>Người gõ + biên tập viên soát lại; chữ khó đọc được đánh dấu để bạn xác nhận; có chỉnh sửa miễn phí.</div>\n</div>\n\n<h2>Khi nào nên tự gõ?</h2>\n<ul>\n  <li>Tài liệu ngắn (vài trang), chữ in rõ.</li>\n  <li>Bạn gõ 10 ngón nhanh - xem <a href=\"/blog/go-10-ngon-30-ngay\">lộ trình gõ 10 ngón</a>.</li>\n  <li>Bạn có thời gian rảnh thật sự và không có hạn chót gấp.</li>\n  <li>Nội dung đặc biệt nhạy cảm, quy định nội bộ không cho phép thuê ngoài.</li>\n</ul>\n\n<h2>Khi nào nên thuê gõ?</h2>\n<ul>\n  <li>Tài liệu dài, chữ viết tay, bản scan mờ, bản photo nhiều đời.</li>\n  <li>Có công thức, bảng biểu phức tạp - xem <a href=\"/blog/go-bang-bieu-bieu-mau-thue\">gõ bảng biểu thuê</a>.</li>\n  <li>Hạn chót gần, cần nhiều người làm song song.</li>\n  <li>Bạn cần thời gian cho phần việc chuyên môn: viết nội dung, phân tích, giảng dạy.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Cách lai hiệu quả: tự gõ phần ngắn, phần bạn cần suy nghĩ khi gõ; thuê gõ phần dài, phần chỉ cần chép lại chính xác.</div></div>\n\n<h2>Đừng quên chi phí “vô hình”</h2>\n<p>Mỏi mắt, đau cổ tay, trễ hạn công việc chính, căng thẳng vì tài liệu chưa xong - những chi phí này không hiện trên hóa đơn nhưng rất thật. Nếu tự gõ nhiều, hãy chú ý <a href=\"/blog/tu-the-ngoi-go-phim\">tư thế ngồi đúng</a> và nghỉ ngắn thường xuyên.</p>\n\n<h2>Bảng quyết định nhanh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tình huống</th><th>Gợi ý</th></tr>\n  <tr><td>Dưới 5 trang chữ in, không gấp</td><td>Tự gõ</td></tr>\n  <tr><td>10-50 trang, chữ viết tay hoặc scan mờ</td><td>Thuê gõ, thời hạn 3-7 ngày</td></tr>\n  <tr><td>Có công thức, bảng phức tạp</td><td>Thuê gõ, ghi rõ yêu cầu định dạng</td></tr>\n  <tr><td>Cần trong ngày</td><td>Thuê gõ gấp, tách phần không gấp</td></tr>\n</table></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tự gõ không miễn phí: tính cả thời gian định dạng và soát lỗi.</li><li>Quy đổi số giờ thành tiền rồi so với báo giá thuê gõ.</li><li>Tài liệu dài, khó đọc, gấp - thuê gõ thường hiệu quả hơn.</li><li>Có thể kết hợp: tự gõ phần ngắn, thuê phần dài.</li></ul></div>",
    "faq": [
      {
        "q": "Một người gõ được bao nhiêu trang mỗi giờ?",
        "a": "Tùy kỹ năng và tài liệu. Với tài liệu chữ in, người gõ 10 ngón thành thạo có thể làm vài trang mỗi giờ kể cả định dạng và soát lỗi; chữ viết tay, bảng biểu, công thức chậm hơn nhiều."
      },
      {
        "q": "Khi nào nên tự gõ?",
        "a": "Khi tài liệu ngắn, chữ rõ, bạn gõ nhanh và có thời gian rảnh, hoặc nội dung cần giữ hoàn toàn bí mật trong nội bộ."
      },
      {
        "q": "Thuê gõ có rẻ hơn tự làm không?",
        "a": "Nếu tính đúng giá trị thời gian của bạn và thời gian sửa lỗi, thuê gõ thường hiệu quả hơn với tài liệu dài, khó đọc hoặc cần gấp."
      }
    ],
    "cover": "/assets/img/blog/tu-go-hay-thue-go-van-ban.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "cua-hang-photocopy-tang-thu-nhap",
    "cat": "Đối tác",
    "date": "2026-10-16",
    "tags": [
      "Cửa hàng photocopy",
      "Affiliate",
      "Kiếm thêm thu nhập",
      "Đánh máy thuê"
    ],
    "title": "Cửa hàng photocopy tăng thu nhập với dịch vụ đánh máy thuê: hoa hồng 30%, không cần vốn",
    "seoTitle": "Tiệm photocopy kiếm thêm thu nhập: hoa hồng 30%",
    "excerpt": "Khách hỏi gõ lại tài liệu nhưng tiệm không có người gõ? Cách tiệm photocopy biến nhu cầu đó thành thu nhập: giới thiệu khách, nhận 30% mỗi đơn.",
    "body": "<p class=\"lead\">Gần như tiệm photocopy nào cũng quen cảnh: một sinh viên cầm xấp vở viết tay hỏi “anh gõ lại giúp em thành file Word được không?”, một cô giáo mang đề thi photo mờ cần “đánh lại cho đẹp”, một người lớn tuổi muốn chuyển giấy tờ cũ sang bản mềm. Phần lớn tiệm đành từ chối vì không có người gõ, không đủ thời gian. Bài viết này chỉ ra cách biến những lời từ chối đó thành nguồn thu nhập đều đặn.</p>\n<figure><img src=\"/assets/img/blog/fig-hoa-hong-doi-tac.svg\" alt=\"Quy trình đối tác: khách quét QR, đặt hàng, hoàn thành, tiệm nhận hoa hồng\" loading=\"lazy\" width=\"960\"><figcaption>Tiệm chỉ giới thiệu - Đánh máy 247 lo phần đánh máy, thanh toán và giao tài liệu; hoa hồng về tài khoản của tiệm.</figcaption></figure>\n\n<h2>Nhu cầu đánh máy ở tiệm photocopy lớn đến đâu?</h2>\n<p>Tiệm photocopy là điểm chạm đầu tiên của rất nhiều loại tài liệu giấy. Những yêu cầu thường gặp:</p>\n<ul>\n  <li><b>Sinh viên</b>: gõ lại vở ghi, định dạng luận văn, báo cáo thực tập, gõ công thức Toán, Lý, Hóa.</li>\n  <li><b>Giáo viên</b>: số hóa đề thi cũ, giáo án viết tay, ngân hàng câu hỏi trắc nghiệm.</li>\n  <li><b>Doanh nghiệp nhỏ, hộ kinh doanh</b>: gõ lại hợp đồng scan, nhập liệu sổ sách sang Excel.</li>\n  <li><b>Người dân</b>: giấy tờ cũ cần đánh máy để làm hồ sơ, chuẩn bị dịch thuật, gia phả, hồi ký.</li>\n</ul>\n<p>Những việc này cần người gõ thành thạo, biết trình bày và kiểm tra lỗi - thứ mà một tiệm photocopy bận rộn khó đáp ứng, nhất là vào mùa thi và mùa nộp luận văn.</p>\n\n<h2>Mô hình giới thiệu (affiliate) hoạt động thế nào?</h2>\n<ol class=\"steps\">\n  <li><b>Đăng ký đối tác miễn phí</b> tại trang <a href=\"/doi-tac\">chương trình đối tác</a>, khai báo tài khoản ngân hàng nhận tiền.</li>\n  <li><b>Nhận mã giới thiệu và mã QR riêng</b> của tiệm, in poster A4 ngay trong trang đối tác.</li>\n  <li><b>Dán poster tại quầy</b>; khi khách hỏi, hướng dẫn khách quét QR để gửi tài liệu và nhận báo giá.</li>\n  <li><b>Theo dõi từng đơn</b>: lượt quét, đơn đã đặt, hoa hồng chờ duyệt, đã duyệt, đã chi trả.</li>\n  <li><b>Nhận hoa hồng 30%</b> giá trị mỗi đơn hoàn thành, chuyển khoản hằng tháng.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Khách được ghi nhận cho tiệm trong 30 ngày kể từ lần quét mã. Khách cũng có thể tự nhập mã giới thiệu của tiệm ở trang đặt hàng.</div></div>\n\n<h2>Ví dụ minh họa thu nhập thêm</h2>\n<p>Giả sử mỗi tháng tiệm giới thiệu được 20 khách, giá trị trung bình mỗi đơn 300.000 đồng (khoảng 10-15 trang gõ lại thời hạn vài ngày):</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Số đơn hoàn thành/tháng</th><th>Giá trị TB/đơn</th><th>Hoa hồng 30%/tháng</th></tr>\n  <tr><td>10</td><td>300.000 đ</td><td>900.000 đ</td></tr>\n  <tr><td>20</td><td>300.000 đ</td><td>1.800.000 đ</td></tr>\n  <tr><td>40</td><td>400.000 đ</td><td>4.800.000 đ</td></tr>\n</table></div>\n<p>Đây là con số minh họa để hình dung - thu nhập thực tế phụ thuộc vị trí tiệm, lượng khách và cách tiệm giới thiệu. Bạn có thể tự ước tính bằng công cụ tính ở trang <a href=\"/doi-tac\">đối tác</a>.</p>\n\n<h2>Vì sao không tự làm mà nên giới thiệu?</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Tự nhận gõ thuê</b>Cần người gõ giỏi, tốn thời gian đứng máy; dễ trễ hẹn mùa cao điểm; tự chịu trách nhiệm lỗi chính tả, công thức, bảo mật tài liệu.</div>\n  <div class=\"good\"><b>Giới thiệu đối tác</b>Không vốn, không nhân sự; khách vẫn được phục vụ chuyên nghiệp; tiệm giữ chân khách và có thêm khoản thu đều đặn mỗi tháng.</div>\n</div>\n\n<h2>Mẹo để khách quét mã nhiều hơn</h2>\n<ul>\n  <li><b>Đặt poster ở nơi khách đứng chờ</b>: cạnh máy photo, quầy thu tiền, khu đóng gáy luận văn.</li>\n  <li><b>Chủ động gợi ý</b> khi khách photo tài liệu viết tay, đề thi, bản scan mờ: “Cần bản Word thì quét mã này nhé”.</li>\n  <li><b>Tận dụng mùa cao điểm</b>: tháng 4-6 và 11-12 là mùa luận văn, đồ án, ôn thi.</li>\n  <li><b>Chia sẻ liên kết</b> vào nhóm Zalo khách quen, nhóm sinh viên trường gần tiệm.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Kết hợp với dịch vụ sẵn có: khách nhận bản Word từ Đánh máy 247 rồi quay lại tiệm in, đóng gáy, đóng bìa - tiệm có thêm doanh thu in ấn.</div></div>\n\n<h2>Minh bạch và bảo vệ khách hàng</h2>\n<p>Trang đối tác hiển thị mã đơn, dịch vụ, giá trị và hoa hồng của từng đơn, nhưng không hiển thị tên, email hay số điện thoại khách - thông tin cá nhân của khách được bảo vệ. Đơn do chính tiệm tự đặt không tính hoa hồng, nhằm giữ chương trình công bằng.</p>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Tiệm của bạn muốn có thêm thu nhập từ khách cần đánh máy?</b>Đăng ký miễn phí, nhận mã QR in poster ngay. <a href=\"/doi-tac\" class=\"button\">Tìm hiểu chương trình đối tác</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tiệm photocopy gặp nhu cầu đánh máy hằng ngày nhưng khó tự đáp ứng.</li><li>Giới thiệu bằng mã QR, nhận 30% giá trị mỗi đơn hoàn thành.</li><li>Không vốn, không thu hộ, không cần người gõ.</li><li>Kết hợp in ấn, đóng gáy sau khi khách nhận bản Word để tăng doanh thu.</li></ul></div>",
    "faq": [
      {
        "q": "Tiệm photocopy có cần thuê người đánh máy không?",
        "a": "Không. Tiệm chỉ giới thiệu khách bằng mã QR hoặc mã giới thiệu riêng. Việc đánh máy, kiểm tra, giao tài liệu và chăm sóc khách do Đánh máy 247 đảm nhận."
      },
      {
        "q": "Khách trả tiền cho ai?",
        "a": "Khách thanh toán trực tiếp cho Đánh máy 247 qua chuyển khoản VietQR. Tiệm không phải thu hộ hay chịu rủi ro tiền bạc; hoa hồng được chuyển cho tiệm hằng tháng."
      },
      {
        "q": "Hoa hồng 30% tính trên số tiền nào?",
        "a": "Trên giá trị đơn khách thanh toán, khi đơn đã hoàn thành. Đơn bị hủy hoặc hoàn tiền không tính hoa hồng."
      }
    ],
    "cover": "/assets/img/blog/cua-hang-photocopy-tang-thu-nhap.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "lam-danh-may-tai-nha-tranh-lua-dao",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-10-16",
    "tags": [
      "Việc làm online",
      "Đánh máy tại nhà",
      "Cảnh báo lừa đảo",
      "Cộng tác viên"
    ],
    "title": "Làm đánh máy tại nhà: 7 dấu hiệu lừa đảo và cách tìm việc online uy tín",
    "seoTitle": "Việc đánh máy tại nhà: cách nhận diện lừa đảo 2026",
    "excerpt": "“Đánh máy tại nhà, thu nhập 500.000đ/ngày” - lời mời quen thuộc trên mạng xã hội. 7 dấu hiệu nhận diện lừa đảo và cách tìm việc nhập liệu, đánh máy uy tín.",
    "body": "<p class=\"lead\">Gõ “việc làm đánh máy tại nhà” trên mạng xã hội, bạn sẽ thấy hàng trăm lời mời: chỉ cần điện thoại, mỗi ngày vài giờ, thu nhập vài trăm nghìn. Một phần trong đó là việc thật, nhưng không ít là chiêu lừa đảo nhắm vào sinh viên, mẹ bỉm sữa và người cần thêm thu nhập. Bài viết giúp bạn nhận diện rủi ro và tìm được công việc đánh máy, nhập liệu uy tín.</p>\n\n<h2>Việc đánh máy tại nhà thật sự trông như thế nào?</h2>\n<p>Công việc thật có mô tả cụ thể: gõ lại tài liệu viết tay, chuyển PDF scan sang Word, nhập dữ liệu từ phiếu khảo sát vào Excel, chuyển âm file ghi âm. Bạn nhận tài liệu, làm theo hướng dẫn, nộp sản phẩm và được trả tiền theo trang, theo phút âm thanh hoặc theo số bản ghi. Thu nhập phụ thuộc vào tốc độ, độ chính xác và khối lượng việc, không có chuyện “ngồi không cũng có tiền”.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Đơn vị tuyển cộng tác viên nghiêm túc thường cho bạn làm <b>bài kiểm tra thử</b> vài trang, có hướng dẫn trình bày rõ ràng, nói rõ đơn giá và thời hạn thanh toán trước khi giao việc.</div></div>\n\n<h2>7 dấu hiệu lừa đảo cần cảnh giác</h2>\n<figure><img src=\"/assets/img/blog/fig-dau-hieu-lua-dao.svg\" alt=\"Bốn nhóm dấu hiệu lừa đảo việc làm đánh máy online\" loading=\"lazy\" width=\"960\"><figcaption>Bốn nhóm dấu hiệu phổ biến: đòi tiền trước, hứa thu nhập phi lý, nhiệm vụ “nạp tiền nhận hoa hồng” và yêu cầu thông tin nhạy cảm.</figcaption></figure>\n<ol class=\"steps\">\n  <li><b>Đòi phí trước khi làm:</b> phí đăng ký, phí mua tài liệu, phí “bảo hiểm hồ sơ”, đặt cọc máy. Việc thật không thu tiền của người làm.</li>\n  <li><b>Thu nhập phi lý:</b> hứa 300.000–1.000.000 đồng/ngày cho vài giờ gõ đơn giản, không cần kinh nghiệm.</li>\n  <li><b>Nhiệm vụ nạp tiền nhận hoa hồng:</b> ban đầu trả vài chục nghìn để tạo lòng tin, sau đó yêu cầu nạp số tiền lớn hơn để “mở khóa nhiệm vụ VIP”.</li>\n  <li><b>Chỉ liên lạc qua ứng dụng nhắn tin</b>, không có website, địa chỉ, mã số doanh nghiệp, hợp đồng hay người phụ trách cụ thể.</li>\n  <li><b>Thúc ép thời gian:</b> “chỉ còn 3 suất”, “phải nạp trong 10 phút nếu không sẽ mất toàn bộ tiền”.</li>\n  <li><b>Xin thông tin nhạy cảm:</b> ảnh căn cước hai mặt kèm khuôn mặt, mã OTP, mật khẩu ngân hàng.</li>\n  <li><b>Yêu cầu tải ứng dụng lạ</b> hoặc cài đặt phần mềm điều khiển máy từ xa.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nếu bạn đã lỡ chuyển tiền: <b>dừng chuyển thêm</b> dù được hứa hoàn lại, lưu toàn bộ bằng chứng (tin nhắn, số tài khoản, biên lai), liên hệ ngân hàng ngay và trình báo cơ quan công an.</div></div>\n\n<h2>Cách tìm việc đánh máy, nhập liệu uy tín</h2>\n<p>Nguồn việc đáng tin cậy thường đến từ:</p>\n<ul>\n  <li><b>Doanh nghiệp dịch vụ tài liệu</b> có website, hotline, địa chỉ rõ ràng, tuyển cộng tác viên qua bài kiểm tra năng lực.</li>\n  <li><b>Nền tảng việc làm tự do</b> có cơ chế giữ tiền trung gian (escrow) và đánh giá hai chiều.</li>\n  <li><b>Văn phòng, trường học, thư viện</b> cần số hóa hồ sơ, đề thi, tài liệu lưu trữ.</li>\n  <li><b>Người quen, cựu đồng nghiệp</b> giới thiệu, có thể kiểm chứng được.</li>\n</ul>\n\n<h2>Kỹ năng cần có để nhận được việc</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Kỹ năng</th><th>Mức tối thiểu</th><th>Mức tốt</th></tr>\n  <tr><td>Tốc độ gõ</td><td>40 từ/phút</td><td>60–80 từ/phút</td></tr>\n  <tr><td>Độ chính xác</td><td>95%</td><td>Trên 99%</td></tr>\n  <tr><td>Chính tả tiếng Việt</td><td>Nắm quy tắc cơ bản</td><td>Phân biệt tốt hỏi/ngã, s/x, tr/ch</td></tr>\n  <tr><td>Word</td><td>Căn lề, đậm nghiêng, bảng</td><td>Styles, mục lục tự động, công thức</td></tr>\n  <tr><td>Excel</td><td>Nhập liệu, định dạng ô</td><td>Kiểm tra dữ liệu, lọc trùng</td></tr>\n</table></div>\n<p>Nếu chưa đạt tốc độ, hãy xem lộ trình <a href=\"/blog/go-10-ngon-30-ngay\">gõ 10 ngón trong 30 ngày</a> và ôn lại <a href=\"/blog/loi-chinh-ta-tieng-viet\">12 lỗi chính tả phổ biến</a>.</p>\n\n<h2>Thu nhập thực tế bao nhiêu?</h2>\n<p>Thu nhập từ đánh máy phụ thuộc đơn giá và năng suất của bạn. Một người gõ thành thạo có thể hoàn thành khoảng 4–6 trang tài liệu chữ in mỗi giờ, ít hơn nhiều với chữ viết tay khó đọc hay bảng biểu phức tạp. Hãy tính toán dựa trên số trang thực tế bạn làm được, thay vì tin vào con số “thu nhập mỗi ngày” trong quảng cáo.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Ghi lại thời gian làm từng tài liệu trong 2 tuần đầu. Bạn sẽ biết chính xác năng suất của mình, từ đó nhận việc phù hợp và không bị ép giá.</div></div>\n\n<h2>Bảo vệ bản thân khi làm việc online</h2>\n<ul>\n  <li>Không cung cấp mã OTP, mật khẩu, ảnh căn cước kèm khuôn mặt cho người lạ.</li>\n  <li>Thỏa thuận rõ đơn giá, thời hạn, số lần sửa và thời điểm thanh toán bằng văn bản.</li>\n  <li>Với khách mới, đề nghị thanh toán theo từng phần sau mỗi đợt bàn giao.</li>\n  <li>Giữ bảo mật tài liệu của khách: không chia sẻ, không lưu lên dịch vụ công cộng.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Việc thật không bao giờ đòi bạn đóng tiền trước.</li><li>Thu nhập hứa hẹn quá cao, quá dễ là dấu hiệu lừa đảo.</li><li>Chọn đơn vị có website, địa chỉ, hợp đồng và bài kiểm tra năng lực.</li><li>Nâng tốc độ gõ và chính tả để nhận được việc tốt hơn.</li></ul></div>",
    "faq": [
      {
        "q": "Làm đánh máy tại nhà có phải đóng phí trước không?",
        "a": "Không. Công việc hợp pháp không bao giờ yêu cầu người làm đóng phí đăng ký, phí tài liệu, đặt cọc hay nạp tiền để “mở khóa” nhiệm vụ. Bất kỳ yêu cầu chuyển tiền trước nào đều là dấu hiệu lừa đảo."
      },
      {
        "q": "Gõ bao nhiêu từ một phút thì đủ nhận việc đánh máy?",
        "a": "Thông thường cần tối thiểu 40–50 từ/phút với độ chính xác trên 95%, gõ thành thạo tiếng Việt có dấu và biết định dạng Word cơ bản như căn lề, bảng biểu, tiêu đề."
      },
      {
        "q": "Bị lừa khi làm việc online thì phải làm gì?",
        "a": "Dừng chuyển tiền ngay, lưu lại toàn bộ tin nhắn, số tài khoản, ảnh chụp giao dịch, liên hệ ngân hàng để yêu cầu hỗ trợ và trình báo cơ quan công an nơi gần nhất."
      }
    ],
    "cover": "/assets/img/blog/lam-danh-may-tai-nha-tranh-lua-dao.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "quan-photocopy-hop-tac-dich-vu-danh-may",
    "cat": "Đối tác",
    "date": "2026-10-15",
    "tags": [
      "Đối tác photocopy",
      "Quán photocopy",
      "Dịch vụ đánh máy",
      "Kinh doanh nhỏ"
    ],
    "title": "Quán photocopy hợp tác dịch vụ đánh máy: 3 mô hình, cách tính lợi nhuận và lộ trình bắt đầu trong 1 tuần",
    "seoTitle": "Quán photocopy hợp tác dịch vụ đánh máy: mô hình và lợi nhuận",
    "excerpt": "Quán photocopy có nên làm dịch vụ đánh máy? So sánh 3 mô hình, cách tính lợi nhuận khi làm đối tác nhận hoa hồng 30% và lộ trình bắt đầu 1 tuần.",
    "body": "<p class=\"lead\">Ở gần trường học, bệnh viện, khu văn phòng, gần như quán photocopy nào cũng nghe câu hỏi: “Quán có gõ lại tài liệu không?”. Đó là một nhu cầu thật, lặp lại hằng ngày - nhưng phần lớn quán đành từ chối vì không có người gõ. Bài viết phân tích ba cách quán photocopy có thể khai thác nhu cầu dịch vụ đánh máy, cách tính lợi nhuận cho từng cách và lộ trình bắt đầu chỉ trong một tuần.</p>\n<figure><img src=\"/assets/img/blog/fig-loi-nhuan-tiem-photo.svg\" alt=\"Ước tính hoa hồng đối tác hằng tháng của quán photocopy\" loading=\"lazy\" width=\"960\"><figcaption>Ví dụ minh họa thu nhập thêm mỗi tháng theo số đơn giới thiệu hoàn thành, với giá trị đơn trung bình 300.000 đ và hoa hồng 30%.</figcaption></figure>\n\n<h2>Nhu cầu đánh máy tại quán photocopy lớn đến đâu?</h2>\n<p>Quán photocopy là nơi tài liệu giấy “đi qua” nhiều nhất. Các yêu cầu đánh máy thường gặp:</p>\n<ul>\n  <li>Sinh viên: gõ vở ghi, tiểu luận viết tay, định dạng luận văn, gõ công thức.</li>\n  <li>Giáo viên: đánh máy đề thi, giáo án viết tay, bản photo cũ mờ.</li>\n  <li>Người dân: gõ lại giấy tờ để làm hồ sơ, đơn từ, chuẩn bị dịch thuật.</li>\n  <li>Hộ kinh doanh, văn phòng: sổ sách sang Excel, hợp đồng scan sang Word.</li>\n</ul>\n<p>Những việc này cần người đọc chữ giỏi, gõ chính xác và trình bày đúng chuẩn - khác hẳn công việc photo, in ấn quen thuộc của quán.</p>\n\n<h2>3 mô hình quán photocopy có thể chọn</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Tự gõ</th><th>Thuê người gõ</th><th>Đối tác giới thiệu</th></tr>\n  <tr><td>Vốn, nhân sự</td><td>Chủ quán tự làm</td><td>Trả lương, đào tạo</td><td class=\"ok\">Không cần</td></tr>\n  <tr><td>Thời gian của chủ quán</td><td class=\"no\">Rất nhiều</td><td>Quản lý, kiểm tra</td><td class=\"ok\">Rất ít</td></tr>\n  <tr><td>Rủi ro chất lượng, trễ hẹn</td><td>Quán chịu</td><td>Quán chịu</td><td class=\"ok\">Đơn vị đánh máy chịu</td></tr>\n  <tr><td>Thu tiền khách</td><td>Quán thu</td><td>Quán thu</td><td class=\"ok\">Khách trả trực tiếp</td></tr>\n  <tr><td>Thu nhập</td><td>Toàn bộ tiền công</td><td>Chênh lệch sau lương</td><td>30% giá trị đơn hoàn thành</td></tr>\n</table></div>\n\n<h3>Mô hình 1: Chủ quán tự gõ</h3>\n<p>Phù hợp quán vắng khách, chủ quán gõ giỏi. Hạn chế: mỗi giờ ngồi gõ là một giờ không phục vụ khách photo; mùa cao điểm dễ trễ hẹn; tự chịu trách nhiệm lỗi chính tả, số liệu.</p>\n<h3>Mô hình 2: Thuê người gõ</h3>\n<p>Phù hợp quán lớn có lượng việc đều. Hạn chế: chi phí lương cố định kể cả mùa thấp điểm, cần đào tạo, kiểm tra chất lượng, khó xử lý chữ viết tay khó, công thức, LaTeX.</p>\n<h3>Mô hình 3: Đối tác giới thiệu</h3>\n<p>Quán đăng ký làm đối tác, dán poster mã QR, giới thiệu khách. Khách đặt hàng và thanh toán trực tiếp với đơn vị đánh máy; quán nhận hoa hồng mỗi đơn hoàn thành. Đây là mô hình ít rủi ro nhất cho quán nhỏ - xem chi tiết tại <a href=\"/doi-tac\">chương trình đối tác Đánh máy 247</a>.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Có thể kết hợp: chủ quán vẫn tự gõ những việc nhỏ, gấp, dễ; còn tài liệu dài, viết tay khó đọc, có công thức thì giới thiệu sang đối tác để vừa giữ khách, vừa không quá tải.</div></div>\n\n<h2>Cách tính lợi nhuận mô hình đối tác</h2>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px\">Hoa hồng tháng = Số đơn hoàn thành × Giá trị trung bình mỗi đơn × 30%</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Số đơn hoàn thành/tháng</th><th>Giá trị TB/đơn</th><th>Hoa hồng/tháng</th><th>Ước tính/năm</th></tr>\n  <tr><td>10</td><td>300.000 đ</td><td>900.000 đ</td><td>10.800.000 đ</td></tr>\n  <tr><td>20</td><td>300.000 đ</td><td>1.800.000 đ</td><td>21.600.000 đ</td></tr>\n  <tr><td>40</td><td>400.000 đ</td><td>4.800.000 đ</td><td>57.600.000 đ</td></tr>\n</table></div>\n<p>Đây là ví dụ minh họa; thu nhập thực tế phụ thuộc vị trí quán, lượng khách và cách giới thiệu. Ngoài hoa hồng, quán còn có doanh thu gián tiếp: khách nhận bản Word thường quay lại in, đóng gáy, ép plastic.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bạn có thể tự ước tính bằng công cụ tính thu nhập trên trang <a href=\"/doi-tac\">Đối tác</a>: kéo số khách giới thiệu mỗi tháng và giá trị đơn trung bình.</div></div>\n\n<h2>Lộ trình bắt đầu trong 1 tuần</h2>\n<ol class=\"steps\">\n  <li><b>Ngày 1</b>: <a href=\"/dang-ky-doi-tac\">đăng ký đối tác</a> (2 phút), khai báo tài khoản ngân hàng nhận hoa hồng.</li>\n  <li><b>Ngày 2</b>: tài khoản được duyệt; đăng nhập trang đối tác, in poster A4 có mã QR riêng.</li>\n  <li><b>Ngày 3</b>: dán poster ở quầy thu tiền, cạnh máy photo, khu đóng gáy; lưu tin nhắn mẫu để gửi khách qua Zalo.</li>\n  <li><b>Ngày 4-5</b>: chủ động gợi ý khi khách photo tài liệu viết tay, bản scan mờ, đề thi cũ.</li>\n  <li><b>Ngày 6-7</b>: chia sẻ liên kết vào nhóm Zalo khách quen, nhóm sinh viên gần quán; theo dõi lượt quét trong trang đối tác.</li>\n</ol>\n<p>Hướng dẫn chi tiết từng thao tác trong trang đối tác: <a href=\"/blog/huong-dan-tro-thanh-doi-tac-danh-may\">hướng dẫn trở thành đối tác</a>. Mẹo quảng bá: <a href=\"/blog/marketing-tiem-photocopy-ma-qr-zalo\">marketing tiệm photocopy bằng mã QR và Zalo</a>.</p>\n\n<h2>Những câu hỏi chủ quán thường lo lắng</h2>\n<ul>\n  <li><b>“Khách có bị mất thông tin không?”</b> - Đối tác không xem được tên, email, số điện thoại khách; dữ liệu khách do đơn vị đánh máy bảo mật.</li>\n  <li><b>“Nếu khách không hài lòng?”</b> - Khách làm việc trực tiếp với đơn vị đánh máy: chỉnh sửa miễn phí, chính sách hoàn tiền khi trễ hạn.</li>\n  <li><b>“Bao giờ nhận tiền?”</b> - Hoa hồng được duyệt khi đơn hoàn thành, chuyển khoản hằng tháng; lịch sử chi trả hiện trong trang đối tác.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không thu thêm tiền của khách dưới danh nghĩa đơn vị đánh máy và không quảng cáo sai sự thật. Đây là điều khoản quan trọng để giữ uy tín cho cả quán và đối tác.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Quán của bạn sẵn sàng có thêm nguồn thu?</b>Đăng ký miễn phí, nhận mã QR in poster sau khi duyệt. <a href=\"/dang-ky-doi-tac\" class=\"button\">Đăng ký đối tác</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Nhu cầu đánh máy tại quán photocopy lặp lại hằng ngày.</li><li>Ba mô hình: tự gõ, thuê người gõ, đối tác giới thiệu - đối tác ít rủi ro nhất.</li><li>Hoa hồng = số đơn hoàn thành × giá trị đơn × 30%.</li><li>Bắt đầu trong 1 tuần: đăng ký, in poster QR, dán quầy, giới thiệu chủ động.</li></ul></div>",
    "faq": [
      {
        "q": "Quán photocopy nhỏ có làm đối tác dịch vụ đánh máy được không?",
        "a": "Được. Mô hình đối tác giới thiệu không cần vốn, không cần nhân sự gõ; quán chỉ cần dán poster mã QR và giới thiệu khách. Đăng ký miễn phí tại trang đối tác."
      },
      {
        "q": "Hoa hồng đối tác được tính thế nào?",
        "a": "Tại Đánh máy 247, đối tác nhận 30% giá trị đơn hàng (số tiền khách thanh toán) khi đơn hoàn thành; đơn hủy không tính. Khách được ghi nhận 30 ngày kể từ lần quét mã hoặc khi tự nhập mã giới thiệu."
      },
      {
        "q": "Quán có phải thu tiền hộ khách không?",
        "a": "Không. Khách thanh toán trực tiếp cho Đánh máy 247 qua VietQR, nhận file trực tiếp. Hoa hồng được chuyển khoản cho quán hằng tháng."
      },
      {
        "q": "Làm đối tác có ảnh hưởng đến việc in ấn của quán không?",
        "a": "Thường còn tăng thêm: sau khi có bản Word, nhiều khách quay lại quán để in, đóng gáy, ép plastic."
      }
    ],
    "cover": "/assets/img/blog/quan-photocopy-hop-tac-dich-vu-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 6
  },
  {
    "slug": "go-van-ban-gap-trong-ngay",
    "cat": "Mẹo hay",
    "date": "2026-10-15",
    "tags": [
      "Gõ văn bản gấp",
      "Gõ thuê lấy ngay",
      "Thời hạn",
      "Đánh máy nhanh"
    ],
    "title": "Cần gõ văn bản gấp trong ngày: chuẩn bị thế nào để nhận file nhanh nhất mà vẫn chính xác?",
    "seoTitle": "Cần gõ văn bản gấp trong ngày: cách nhận file nhanh nhất",
    "excerpt": "Cần gõ văn bản gấp trong 6-24 giờ? Cách tách phần cần gấp, gửi đủ tài liệu một lần, ghi yêu cầu rõ và kiểm tra nhanh khi nhận file.",
    "body": "<p class=\"lead\">Ngày mai nộp hồ sơ dự thầu, chiều nay phải có bản Word của biên bản họp, tối nay cần đề cương để in - những tình huống “gõ gấp trong ngày” xảy ra thường xuyên hơn ta nghĩ. Dịch vụ gõ thuê có thể giao trong vài giờ, nhưng tốc độ thực tế phụ thuộc rất nhiều vào cách bạn chuẩn bị.</p>\n\n<h2>1. Xác định phần nào thật sự cần gấp</h2>\n<p>Hiếm khi cả tập tài liệu đều cần ngay. Hãy tách:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nhóm</th><th>Ví dụ</th><th>Thời hạn gợi ý</th></tr>\n  <tr><td>Cần ngay</td><td>Trang nộp kèm hồ sơ, phần trình chiếu sáng mai</td><td>6-12 giờ</td></tr>\n  <tr><td>Cần trong tuần</td><td>Phụ lục, tài liệu tham khảo</td><td>3-7 ngày</td></tr>\n  <tr><td>Lưu trữ</td><td>Bản nháp, tài liệu cũ</td><td>14-30 ngày</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Chia thành hai đơn với hai thời hạn khác nhau vừa giúp phần gấp xong nhanh hơn, vừa tiết kiệm đáng kể chi phí cho phần còn lại.</div></div>\n\n<h2>2. Gửi đủ tài liệu trong một lần</h2>\n<ul>\n  <li>Chụp tất cả trang cần gõ, kiểm tra không thiếu trang, không mờ.</li>\n  <li>Đánh số thứ tự ảnh hoặc gộp PDF.</li>\n  <li>Gửi kèm file mẫu định dạng (nếu có) và danh sách tên riêng.</li>\n</ul>\n<p>Mỗi lần bổ sung tài liệu sau khi đã bắt đầu đều làm chậm tiến độ và dễ sai thứ tự.</p>\n\n<h2>3. Ghi yêu cầu cụ thể, tránh hỏi đi hỏi lại</h2>\n<p>Với đơn gấp, mỗi câu hỏi qua lại tốn thời gian. Ghi sẵn: phông chữ, cỡ chữ, lề, cách xử lý chữ không đọc được, có cần giữ nguyên ngắt dòng như bản gốc không. Xem mẫu cách ghi yêu cầu trong bài <a href=\"/blog/thue-go-tai-lieu-online\">thuê gõ tài liệu online</a>.</p>\n\n<h2>4. Thanh toán ngay để bắt đầu tính giờ</h2>\n<p>Thời hạn tính từ khi thanh toán được xác nhận. Chuyển khoản đúng nội dung (mã đơn) để hệ thống đối soát nhanh; bấm “Tôi đã chuyển khoản” sau khi chuyển.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đơn gấp lúc đêm khuya hoặc cuối tuần với khối lượng lớn: hãy gọi trước để xác nhận khả năng nhận đơn, tránh trường hợp đặt xong mới biết không kịp.</div></div>\n\n<h2>5. Kiểm tra nhanh khi nhận file</h2>\n<ol class=\"steps\">\n  <li>Đếm số trang, đối chiếu tiêu đề đầu - cuối với bản gốc.</li>\n  <li>Kiểm tra số liệu quan trọng: số tiền, ngày tháng, tên người.</li>\n  <li>Tìm các chỗ đánh dấu [?] để xác nhận.</li>\n  <li>Xuất PDF thử để chắc định dạng không vỡ khi in.</li>\n</ol>\n<p>Danh sách kiểm tra đầy đủ: <a href=\"/blog/kiem-tra-file-go-thue-nghiem-thu\">checklist nghiệm thu file gõ thuê</a>.</p>\n\n<h2>Đơn gấp được xử lý thế nào ở phía dịch vụ?</h2>\n<p>Với tài liệu dài, đơn vị chuyên nghiệp chia tài liệu cho nhiều chuyên viên gõ song song, sau đó biên tập viên ghép lại, thống nhất phông chữ, tiêu đề, cách viết số. Vì vậy tài liệu càng được đánh số trang và ghi yêu cầu rõ, việc chia - ghép càng nhanh và chính xác.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Thời hạn ngắn nhất tại Đánh máy 247 là 6 giờ. Bạn có thể xem ngày giờ giao dự kiến ngay khi chọn thời hạn ở trang đặt hàng, hoặc hỏi nhanh trong khung chat “Hỗ trợ Đánh máy 247”.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Cần gõ gấp trong ngày?</b>Chọn thời hạn 6, 12 hoặc 24 giờ, xem ngay giờ giao dự kiến. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n\n<h2>Ví dụ tách đơn để tiết kiệm</h2>\n<p>Giả sử bạn có 40 trang, nhưng chỉ 10 trang cần nộp sáng mai. Gửi 10 trang với thời hạn 12 giờ, 30 trang còn lại chọn 5-7 ngày. Tổng chi phí thấp hơn đáng kể so với đặt cả 40 trang gấp, trong khi phần quan trọng vẫn kịp hạn. Bạn có thể thử các phương án ngay ở trang đặt hàng hoặc hỏi khung chat để so sánh.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tách phần cần gấp và phần không gấp để tiết kiệm.</li><li>Gửi đủ tài liệu và yêu cầu trong một lần.</li><li>Thanh toán ngay vì thời hạn tính từ lúc xác nhận.</li><li>Kiểm tra nhanh số trang, số liệu, chỗ đánh dấu khi nhận.</li></ul></div>",
    "faq": [
      {
        "q": "Gõ văn bản gấp nhanh nhất bao lâu?",
        "a": "Tại Đánh máy 247, thời hạn nhanh nhất là 6 giờ kể từ khi thanh toán được xác nhận. Với khối lượng lớn cần gấp hơn, hãy gọi hotline để kiểm tra khả năng nhận đơn."
      },
      {
        "q": "Đơn gấp có kém chính xác hơn không?",
        "a": "Không nên. Tài liệu dài cần gấp được chia cho nhiều chuyên viên làm song song và biên tập viên thống nhất định dạng, vẫn giữ khâu kiểm tra."
      },
      {
        "q": "Làm sao để giảm chi phí khi gấp?",
        "a": "Chỉ gửi phần thật sự cần gấp với thời hạn ngắn, phần còn lại chọn thời hạn dài hơn để có đơn giá thấp hơn."
      }
    ],
    "cover": "/assets/img/blog/go-van-ban-gap-trong-ngay.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "ai-va-liem-chinh-hoc-thuat",
    "cat": "Kiến thức",
    "date": "2026-10-15",
    "tags": [
      "AI",
      "Liêm chính học thuật",
      "Luận văn",
      "Đạo văn"
    ],
    "title": "Dùng AI khi viết luận văn, báo cáo: đâu là ranh giới liêm chính học thuật?",
    "seoTitle": "Dùng AI khi viết luận văn: ranh giới liêm chính học thuật",
    "excerpt": "Dùng AI khi làm luận văn đến đâu là đủ? Việc nên và không nên, cách khai báo, rủi ro trích dẫn ảo và bảo mật dữ liệu nghiên cứu.",
    "body": "<p class=\"lead\">Chỉ trong vài năm, công cụ AI tạo sinh đã có mặt trong gần như mọi bước làm luận văn: tìm ý tưởng, tóm tắt tài liệu, sửa câu, thậm chí viết nháp cả chương. Nhiều sinh viên băn khoăn: dùng đến đâu thì vẫn là “bài của mình”? Bài viết không thay thế quy định của trường bạn, nhưng giúp bạn có khung suy nghĩ rõ ràng để dùng AI đúng cách.</p>\n\n<h2>Nguyên tắc cốt lõi: bạn chịu trách nhiệm cho từng chữ</h2>\n<p>Dù dùng công cụ gì, tác giả luận văn vẫn chịu trách nhiệm về tính chính xác, tính nguyên gốc và đạo đức nghiên cứu. AI không thể đứng tên tác giả và không chịu trách nhiệm thay bạn. Vì vậy câu hỏi đúng không phải “AI có làm được không” mà là “mình có kiểm soát, hiểu và xác minh được kết quả không”.</p>\n\n<h2>Việc thường được chấp nhận và việc dễ vi phạm</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Thường được chấp nhận (tùy quy định)</b>Sửa chính tả, ngữ pháp; gợi ý cách diễn đạt rõ hơn cho đoạn bạn tự viết; giải thích một khái niệm để bạn hiểu rồi tự đọc tài liệu gốc; kiểm tra định dạng trích dẫn.</div>\n  <div class=\"bad\"><b>Dễ vi phạm liêm chính</b>Nộp nguyên văn đoạn do AI viết như bài của mình; để AI “viết lại” bài người khác nhằm tránh phát hiện đạo văn; trích dẫn tài liệu chưa từng đọc; tạo hoặc chỉnh sửa số liệu.</div>\n</div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Mỗi trường, mỗi tạp chí có thể có quy định riêng về việc dùng AI, kể cả yêu cầu khai báo. Quy định của nơi bạn nộp bài luôn là căn cứ cao nhất.</div></div>\n\n<h2>Rủi ro lớn nhất: trích dẫn “ảo”</h2>\n<p>Mô hình ngôn ngữ tạo văn bản dựa trên xác suất, nên có thể sinh ra tên tác giả, tên bài báo, số trang và DOI trông hoàn toàn hợp lý nhưng không tồn tại. Hội đồng chỉ cần tra một nguồn không có thật là đủ để nghi ngờ toàn bộ luận văn.</p>\n<ol class=\"steps\">\n  <li>Tra từng tài liệu trên cơ sở dữ liệu học thuật hoặc trang của nhà xuất bản.</li>\n  <li>Mở và đọc ít nhất phần tóm tắt, phần liên quan của bản gốc.</li>\n  <li>Đối chiếu ý bạn trích với nội dung thật của tài liệu.</li>\n  <li>Quản lý nguồn bằng Word, Zotero hoặc Mendeley - xem <a href=\"/blog/trich-dan-apa-ieee-word\">trích dẫn APA, IEEE</a>.</li>\n</ol>\n\n<h2>Cách khai báo việc dùng AI</h2>\n<p>Nếu trường hoặc tạp chí yêu cầu, phần khai báo thường nêu: tên công cụ, mục đích sử dụng (sửa ngôn ngữ, tóm tắt tài liệu…), phần nào của bài có sự hỗ trợ, và cam kết tác giả đã kiểm tra lại. Một câu ví dụ: “Tác giả sử dụng công cụ AI để rà soát ngữ pháp phần Tổng quan; mọi nội dung đã được tác giả kiểm tra và chịu trách nhiệm.”</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lưu lại các bản nháp, lịch sử chỉnh sửa và ghi chú đọc tài liệu. Đây là bằng chứng tốt nhất về quá trình làm việc của bạn nếu có thắc mắc.</div></div>\n\n<h2>Bảo mật dữ liệu nghiên cứu</h2>\n<p>Bản ghi phỏng vấn, phiếu khảo sát, hồ sơ bệnh án hay dữ liệu doanh nghiệp thường có thông tin cá nhân hoặc chưa công bố. Tải chúng lên công cụ AI trực tuyến có thể trái với cam kết bảo mật với người tham gia nghiên cứu. Hãy ẩn danh dữ liệu trước, hoặc dùng công cụ được đơn vị cho phép. Xem thêm <a href=\"/blog/bao-ve-du-lieu-ca-nhan-so-hoa\">lưu ý bảo vệ dữ liệu cá nhân khi số hóa</a>.</p>\n\n<h2>Dùng AI thông minh mà vẫn liêm chính</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Giai đoạn</th><th>Cách dùng an toàn</th></tr>\n  <tr><td>Tìm hiểu đề tài</td><td>Hỏi để hiểu khái niệm, rồi đọc tài liệu gốc để kiểm chứng</td></tr>\n  <tr><td>Viết nháp</td><td>Tự viết; dùng AI góp ý cấu trúc, mạch lập luận</td></tr>\n  <tr><td>Ngôn ngữ</td><td>Sửa lỗi câu chữ, giữ nguyên ý và giọng văn của bạn</td></tr>\n  <tr><td>Trích dẫn</td><td>Chỉ dùng để kiểm tra định dạng, không để AI “tìm nguồn” thay bạn</td></tr>\n  <tr><td>Số liệu</td><td>Không dùng AI để tạo hoặc “làm đẹp” số liệu</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Phần mềm kiểm tra đạo văn và phát hiện văn bản do AI tạo ra đều có thể sai. Cách tự bảo vệ tốt nhất vẫn là tự viết, ghi nguồn đầy đủ và lưu lại quá trình làm việc.</div></div>\n\n<h2>Còn việc đánh máy, định dạng thì sao?</h2>\n<p>Thuê người gõ lại bản viết tay của chính bạn, định dạng theo mẫu của trường hay gõ công thức không làm thay đổi nội dung học thuật - giống như nhờ in ấn, đóng gáy. Điều quan trọng là nội dung, lập luận và số liệu là của bạn. Dịch vụ <a href=\"/dich-vu/dinh-dang-tai-lieu\">định dạng tài liệu</a> của Đánh máy 247 chỉ trình bày, không viết hộ nội dung.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bạn chịu trách nhiệm cho mọi nội dung, dù dùng công cụ nào.</li><li>Quy định của trường/tạp chí là căn cứ cao nhất; khai báo khi được yêu cầu.</li><li>Tra và đọc bản gốc mọi tài liệu tham khảo - cảnh giác trích dẫn ảo.</li><li>Không tải dữ liệu nhạy cảm lên công cụ AI khi chưa được phép.</li></ul></div>",
    "faq": [
      {
        "q": "Dùng AI để sửa chính tả, ngữ pháp luận văn có vi phạm không?",
        "a": "Phần lớn cơ sở đào tạo chấp nhận công cụ hỗ trợ ngôn ngữ, nhưng quy định khác nhau giữa các trường. Hãy đọc quy định của trường, khoa và hỏi giảng viên hướng dẫn; khi được yêu cầu, hãy khai báo rõ công cụ đã dùng."
      },
      {
        "q": "AI có thể bịa tài liệu tham khảo không?",
        "a": "Có. Các mô hình ngôn ngữ có thể tạo ra tên bài báo, tác giả, DOI trông rất thật nhưng không tồn tại. Mọi tài liệu tham khảo phải được tra cứu và đọc bản gốc trước khi trích dẫn."
      },
      {
        "q": "Có nên tải dữ liệu nghiên cứu lên công cụ AI trực tuyến?",
        "a": "Cần thận trọng. Dữ liệu phỏng vấn, khảo sát có thông tin cá nhân hoặc dữ liệu chưa công bố có thể bị lưu trên máy chủ bên ngoài. Hãy kiểm tra chính sách dữ liệu và quy định đạo đức nghiên cứu của đơn vị."
      }
    ],
    "cover": "/assets/img/blog/ai-va-liem-chinh-hoc-thuat.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "ai-ocr-co-thay-the-nguoi-danh-may",
    "cat": "Kiến thức",
    "date": "2026-10-15",
    "tags": [
      "AI",
      "OCR",
      "Đánh máy thủ công",
      "Số hóa tài liệu"
    ],
    "title": "AI và OCR năm 2026 có thay thế được người đánh máy? Góc nhìn thực tế",
    "seoTitle": "AI và OCR có thay thế người đánh máy? Phân tích 2026",
    "excerpt": "AI nhận dạng chữ ngày càng giỏi, vậy dịch vụ đánh máy còn cần không? Phân tích điểm mạnh, giới hạn của OCR và AI với tiếng Việt, chữ viết tay, công thức.",
    "body": "<p class=\"lead\">Chỉ vài năm trước, phần mềm nhận dạng ký tự (OCR) còn vấp với tiếng Việt có dấu. Ngày nay, các mô hình AI có thể đọc ảnh chụp, tóm tắt tài liệu, thậm chí đoán chữ viết tay. Câu hỏi tự nhiên được đặt ra: người đánh máy có còn cần thiết? Câu trả lời ngắn gọn là <b>có, nhưng vai trò đã thay đổi</b>.</p>\n\n<h2>AI và OCR đã làm tốt những gì?</h2>\n<ul>\n  <li><b>Tài liệu in rõ nét</b>: sách, báo, văn bản đánh máy chất lượng tốt - độ chính xác rất cao, gần như dùng ngay được.</li>\n  <li><b>Tốc độ</b>: hàng trăm trang trong vài phút, phù hợp để tạo bản tra cứu nhanh.</li>\n  <li><b>Tìm kiếm trong kho lưu trữ</b>: biến PDF scan thành PDF có thể tìm kiếm, kể cả khi còn lỗi nhỏ.</li>\n  <li><b>Dịch và tóm tắt sơ bộ</b>: hiểu nhanh nội dung chính của tài liệu ngoại ngữ.</li>\n</ul>\n\n<h2>Những chỗ máy vẫn vấp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tình huống</th><th>Vấn đề thường gặp</th></tr>\n  <tr><td>Chữ viết tay, ghi chú bên lề</td><td>Đọc sai tên riêng, con số, đoán bừa chữ không rõ</td></tr>\n  <tr><td>Dấu tiếng Việt trên ảnh mờ</td><td>Nhầm hỏi/ngã, mất dấu mũ, “ơ” thành “o”</td></tr>\n  <tr><td>Bảng biểu nhiều cột, ô gộp</td><td>Lệch cột, dồn dữ liệu, mất đường kẻ</td></tr>\n  <tr><td>Công thức Toán, Lý, Hóa</td><td>Chỉ số trên/dưới sai vị trí, ký hiệu bị đổi</td></tr>\n  <tr><td>Dấu mộc, chữ ký đè lên chữ</td><td>Bỏ sót hoặc chèn ký tự rác</td></tr>\n  <tr><td>Định dạng gốc</td><td>Văn bản bị vỡ bố cục, phải dàn trang lại</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Lỗi của AI nguy hiểm ở chỗ <b>trông rất hợp lý</b>. Một con số 1.250.000 bị đọc thành 1.750.000 vẫn “đẹp” và khó phát hiện nếu không đối chiếu từng dòng với bản gốc.</div></div>\n\n<h2>Chi phí ẩn của “miễn phí”</h2>\n<p>Giả sử OCR xử lý 100 trang trong 5 phút, nhưng mỗi trang cần 8–15 phút để soát lỗi, sửa dấu và dựng lại bảng. Tổng cộng bạn mất 13–25 giờ làm việc. Nếu là hợp đồng hay hồ sơ pháp lý, chỉ một lỗi số liệu cũng có thể gây hậu quả lớn hơn nhiều so với chi phí thuê người gõ ngay từ đầu.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Quy tắc nhanh: nếu bạn <b>không có thời gian soát lại từng dòng</b>, hãy chọn giải pháp có người kiểm tra cuối cùng.</div></div>\n\n<h2>Mô hình hiệu quả nhất: người và máy cùng làm</h2>\n<p>Nhiều đơn vị số hóa hiện nay kết hợp: máy xử lý phần dễ, con người tập trung vào phần khó và khâu kiểm tra. Tuy nhiên, với tài liệu viết tay, scan kém hoặc nhiều công thức, việc sửa kết quả máy đôi khi còn lâu hơn gõ mới. Vì thế quyết định nên dựa trên chất lượng bản gốc, không phải thói quen.</p>\n<ol class=\"steps\">\n  <li><b>Đánh giá bản gốc</b>: in rõ hay viết tay, có bảng biểu, công thức, dấu mộc không.</li>\n  <li><b>Chọn phương án</b>: OCR + soát lỗi cho tài liệu in đẹp; gõ thủ công cho tài liệu khó.</li>\n  <li><b>Đối chiếu</b> từng con số, tên riêng với bản gốc.</li>\n  <li><b>Định dạng</b> lại theo yêu cầu sử dụng cuối cùng.</li>\n</ol>\n\n<h2>Bảo mật: câu hỏi ít người đặt ra</h2>\n<p>Khi tải hợp đồng, bệnh án hay hồ sơ nhân sự lên một công cụ AI trực tuyến, bạn cần biết dữ liệu được lưu ở đâu, bao lâu và có được dùng để huấn luyện mô hình hay không. Hãy đọc chính sách dữ liệu của dịch vụ hoặc chọn đơn vị có cam kết bảo mật bằng văn bản. Tham khảo thêm <a href=\"/blog/bao-mat-khi-thue-ngoai-danh-may\">5 câu hỏi về bảo mật khi thuê ngoài đánh máy</a>.</p>\n\n<h2>Người đánh máy cần thay đổi gì?</h2>\n<ul>\n  <li>Nâng cấp từ “gõ nhanh” sang <b>gõ đúng và trình bày chuẩn</b>.</li>\n  <li>Thành thạo công thức, bảng biểu, LaTeX - những mảng máy còn yếu.</li>\n  <li>Giỏi <b>biên tập, đối chiếu</b>: phát hiện lỗi mà máy tạo ra.</li>\n  <li>Chuyên sâu theo lĩnh vực: pháp lý, y khoa, học thuật.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>AI/OCR rất giỏi với tài liệu in rõ, nhưng còn sai với chữ viết tay, bảng biểu, công thức.</li><li>Lỗi của máy khó phát hiện vì trông hợp lý - luôn cần đối chiếu.</li><li>Tính cả thời gian soát lỗi khi so sánh chi phí.</li><li>Tài liệu nhạy cảm cần cân nhắc kỹ chính sách dữ liệu.</li></ul></div>\n<p>Bạn có tài liệu khó đọc? Xem bài so sánh chi tiết <a href=\"/blog/ocr-hay-danh-may-thu-cong\">OCR hay đánh máy thủ công</a> hoặc <a href=\"/dat-hang\">gửi tài liệu để nhận báo giá ngay</a>.</p>",
    "faq": [
      {
        "q": "OCR có đọc được chữ viết tay tiếng Việt không?",
        "a": "Các công cụ hiện đại đọc được một phần, nhất là chữ viết rõ ràng. Với chữ viết nhanh, viết tắt, nhòe mực hoặc có dấu tiếng Việt chồng chéo, kết quả vẫn sai đáng kể và cần người đối chiếu lại."
      },
      {
        "q": "Nên dùng AI hay thuê người đánh máy?",
        "a": "Dùng AI/OCR cho tài liệu in rõ nét, cần tra cứu nhanh và chấp nhận soát lỗi. Thuê người gõ khi cần độ chính xác cao, giữ định dạng, tài liệu pháp lý, công thức hoặc chữ viết tay khó đọc."
      },
      {
        "q": "Dùng AI đọc tài liệu có an toàn về bảo mật không?",
        "a": "Tùy dịch vụ. Một số công cụ trực tuyến có thể lưu hoặc dùng dữ liệu tải lên. Với hợp đồng, hồ sơ nhân sự, bệnh án, hãy đọc kỹ chính sách dữ liệu hoặc dùng giải pháp có cam kết bảo mật."
      }
    ],
    "cover": "/assets/img/blog/ai-ocr-co-thay-the-nguoi-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "huong-dan-tro-thanh-doi-tac-danh-may",
    "cat": "Đối tác",
    "date": "2026-10-14",
    "tags": [
      "Đối tác",
      "Đăng ký đối tác",
      "Mã QR giới thiệu",
      "Hoa hồng"
    ],
    "title": "Hướng dẫn trở thành đối tác Đánh máy 247 từng bước: đăng ký, nhận mã QR, theo dõi đơn và nhận hoa hồng",
    "seoTitle": "Hướng dẫn trở thành đối tác Đánh máy 247 từng bước",
    "excerpt": "Hướng dẫn từng bước trở thành đối tác Đánh máy 247: đăng ký, nhận mã QR, in poster, theo dõi đơn giới thiệu, hoa hồng 30% và lịch chi trả.",
    "body": "<p class=\"lead\">Chương trình đối tác Đánh máy 247 dành cho cửa hàng photocopy, văn phòng phẩm, giáo viên, cộng tác viên - bất kỳ ai thường gặp người cần đánh máy, gõ văn bản. Bài viết hướng dẫn từng bước, từ lúc đăng ký đến khi nhận khoản hoa hồng đầu tiên, kèm mẹo để mã giới thiệu của bạn hoạt động hiệu quả.</p>\n<figure><img src=\"/assets/img/blog/fig-buoc-doi-tac.svg\" alt=\"Các bước trở thành đối tác Đánh máy 247\" loading=\"lazy\" width=\"960\"><figcaption>Đăng ký → được duyệt → in poster QR → khách quét mã đặt hàng → đơn hoàn thành, hoa hồng được duyệt → nhận chuyển khoản hằng tháng.</figcaption></figure>\n\n<h2>Bước 1: Đăng ký tài khoản đối tác</h2>\n<ol class=\"steps\">\n  <li>Mở trang <a href=\"/dang-ky-doi-tac\">Đăng ký đối tác</a>.</li>\n  <li>Điền tên cửa hàng/đơn vị, người liên hệ, số điện thoại (Zalo), email đăng nhập, địa chỉ, tỉnh/thành.</li>\n  <li>Khai báo ngân hàng, số tài khoản, chủ tài khoản nhận hoa hồng (có thể bổ sung sau).</li>\n  <li>Đặt mật khẩu tối thiểu 8 ký tự, đọc và đồng ý điều khoản chương trình.</li>\n  <li>Bấm <b>Đăng ký đối tác</b> - bạn được chuyển ngay vào trang đối tác.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng email bạn thường xuyên kiểm tra: email kích hoạt, thông báo chi trả đều gửi về đây.</div></div>\n\n<h2>Bước 2: Chờ duyệt và nhận mã giới thiệu</h2>\n<p>Mỗi đối tác được cấp một <b>mã giới thiệu</b> riêng, tạo từ tên cửa hàng (ví dụ HOAMAI484). Tài khoản thường được duyệt trong 24 giờ làm việc; khi duyệt xong bạn nhận email và mã bắt đầu được ghi nhận. Trong lúc chờ, bạn vẫn có thể đăng nhập để xem mã, liên kết và chuẩn bị poster.</p>\n\n<h2>Bước 3: Lấy mã QR, liên kết và in poster</h2>\n<p>Trong tab <b>Mã giới thiệu &amp; QR</b> của <a href=\"/doi-tac-tai-khoan\">trang đối tác</a>, bạn có:</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Công cụ</th><th>Dùng để</th></tr>\n  <tr><td>Mã giới thiệu</td><td>Khách nhập vào ô “Mã giới thiệu” khi đặt hàng</td></tr>\n  <tr><td>Liên kết giới thiệu</td><td>Gửi qua Zalo, Facebook, nhóm chat</td></tr>\n  <tr><td>Mã QR</td><td>Khách quét bằng điện thoại để mở trang đặt hàng</td></tr>\n  <tr><td>Nút “In poster A4”</td><td>In poster có QR, danh sách dịch vụ, mã của bạn</td></tr>\n  <tr><td>Tin nhắn mẫu</td><td>Sao chép, gửi khách trong một chạm</td></tr>\n</table></div>\n\n<h2>Bước 4: Giới thiệu khách</h2>\n<ul>\n  <li>Dán poster ở quầy thu tiền, cạnh máy photo, nơi khách đứng chờ.</li>\n  <li>Khi khách hỏi “có gõ lại được không”, mời khách quét QR ngay tại quầy.</li>\n  <li>Gửi liên kết cho khách quen qua Zalo kèm tin nhắn mẫu.</li>\n</ul>\n<p>Khi khách quét mã hoặc bấm liên kết, trình duyệt của khách ghi nhận mã của bạn trong <b>30 ngày</b> (lần bấm gần nhất được tính). Ở trang đặt hàng, ô mã giới thiệu tự điền và hiện tên cửa hàng của bạn.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Đơn do chính đối tác đặt (trùng email hoặc số điện thoại) không tính hoa hồng - nhằm giữ chương trình công bằng cho mọi đối tác.</div></div>\n\n<h2>Bước 5: Theo dõi lượt quét, đơn hàng và hoa hồng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Trạng thái hoa hồng</th><th>Ý nghĩa</th></tr>\n  <tr><td>Chờ khách thanh toán</td><td>Khách đã đặt, chưa chuyển khoản</td></tr>\n  <tr><td>Đơn đang thực hiện</td><td>Khách đã thanh toán, đang đánh máy</td></tr>\n  <tr><td>Đã duyệt - chờ chi trả</td><td>Đơn hoàn thành, hoa hồng được ghi nhận</td></tr>\n  <tr><td>Đã chi trả</td><td>Đã chuyển khoản cho bạn</td></tr>\n  <tr><td>Đơn đã hủy</td><td>Không tính hoa hồng</td></tr>\n</table></div>\n<p>Chuông thông báo trên trang đối tác báo ngay khi có đơn mới từ mã của bạn, khi hoa hồng được duyệt và khi có khoản chi trả. Để bảo vệ quyền riêng tư, bạn thấy mã đơn, dịch vụ, giá trị đơn và hoa hồng - không thấy tên, email, số điện thoại của khách.</p>\n\n<h2>Bước 6: Nhận hoa hồng</h2>\n<ol class=\"steps\">\n  <li>Kiểm tra thông tin ngân hàng trong tab <b>Tài khoản</b>.</li>\n  <li>Hoa hồng đã duyệt được chi trả vào <b>ngày 5 hằng tháng</b> khi số dư từ 100.000 đ.</li>\n  <li>Bạn nhận email xác nhận; lịch sử chi trả và danh sách đơn của từng lần hiện trong tab <b>Chi trả</b>.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đối tác tự chịu trách nhiệm kê khai nghĩa vụ thuế thu nhập theo quy định hiện hành. Hãy lưu lại lịch sử chi trả để đối chiếu khi cần.</div></div>\n\n<h2>Mẹo để mã giới thiệu hiệu quả</h2>\n<ul>\n  <li>Đặt poster ngang tầm mắt, nơi khách đứng chờ lâu nhất.</li>\n  <li>Nhắc dịch vụ vào mùa cao điểm: cuối học kỳ, mùa thi, mùa nộp luận văn.</li>\n  <li>Hướng dẫn khách chụp tài liệu rõ nét để đơn được làm nhanh, khách hài lòng và quay lại.</li>\n  <li>Đọc thêm <a href=\"/blog/marketing-tiem-photocopy-ma-qr-zalo\">cách quảng bá bằng mã QR và Zalo</a>.</li>\n</ul>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Sẵn sàng bắt đầu?</b>Đăng ký miễn phí trong 2 phút, nhận mã QR sau khi duyệt. <a href=\"/dang-ky-doi-tac\" class=\"button\">Đăng ký đối tác</a></div>\n\n<h2>Những lỗi đối tác mới hay gặp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Lỗi</th><th>Cách khắc phục</th></tr>\n  <tr><td>Dán poster nơi khuất, khách không thấy</td><td>Chuyển ra quầy thu tiền, ngang tầm mắt</td></tr>\n  <tr><td>In poster quá nhỏ, QR khó quét</td><td>In khổ A4, không thu nhỏ khi in</td></tr>\n  <tr><td>Quên khai báo tài khoản ngân hàng</td><td>Bổ sung trong tab Tài khoản để không lỡ kỳ chi trả</td></tr>\n  <tr><td>Khách đặt hàng không qua mã</td><td>Nhắc khách quét QR ngay tại quầy hoặc nhập mã giới thiệu</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Đổi mật khẩu định kỳ trong tab Tài khoản và không chia sẻ thông tin đăng nhập trang đối tác cho người khác.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Đăng ký tại /dang-ky-doi-tac, duyệt trong khoảng 24 giờ làm việc.</li><li>Dùng mã, liên kết, QR và poster A4 trong trang đối tác.</li><li>Khách được ghi nhận 30 ngày; có thể tự nhập mã khi đặt hàng.</li><li>Hoa hồng 30% duyệt khi đơn hoàn thành, chi trả ngày 5 hằng tháng.</li></ul></div>",
    "faq": [
      {
        "q": "Đăng ký đối tác cần những thông tin gì?",
        "a": "Tên cửa hàng hoặc đơn vị, người liên hệ, số điện thoại, email đăng nhập, địa chỉ, mật khẩu và tài khoản ngân hàng nhận hoa hồng (có thể bổ sung sau)."
      },
      {
        "q": "Bao lâu thì tài khoản được duyệt?",
        "a": "Thường trong 24 giờ làm việc. Bạn nhận email khi mã giới thiệu được kích hoạt; trong lúc chờ có thể đăng nhập xem trước mã và poster."
      },
      {
        "q": "Khách quên quét mã thì có được tính hoa hồng không?",
        "a": "Khách có thể tự nhập mã giới thiệu ở ô “Mã giới thiệu” khi đặt hàng. Nếu khách quên, hãy liên hệ để quản trị gắn mã cho đơn trước khi hoa hồng được chi trả."
      },
      {
        "q": "Hoa hồng được chi trả khi nào?",
        "a": "Hoa hồng được duyệt khi đơn hoàn thành và chi trả vào ngày 5 hằng tháng khi số dư từ 100.000 đ, chuyển vào tài khoản ngân hàng bạn khai báo."
      }
    ],
    "cover": "/assets/img/blog/huong-dan-tro-thanh-doi-tac-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "go-van-ban-thue-cho-sinh-vien",
    "cat": "Học thuật",
    "date": "2026-10-14",
    "tags": [
      "Sinh viên",
      "Gõ văn bản thuê",
      "Luận văn",
      "Tiểu luận"
    ],
    "title": "Thuê gõ văn bản cho sinh viên: luận văn, tiểu luận, vở ghi - làm sao cho đúng và tiết kiệm?",
    "seoTitle": "Thuê gõ văn bản cho sinh viên: luận văn, tiểu luận, vở ghi",
    "excerpt": "Sinh viên nên thuê gõ phần nào, tự làm phần nào? Hướng dẫn thuê gõ luận văn, tiểu luận, vở ghi tiết kiệm và đúng quy định học thuật.",
    "body": "<p class=\"lead\">Mùa luận văn, mùa thi là lúc sinh viên “ngập” trong việc gõ: chương tổng quan viết tay, số liệu khảo sát, vở ghi cả học kỳ cần thành đề cương. Thuê gõ văn bản đúng cách giúp bạn có thêm thời gian cho phần quan trọng nhất - nội dung và ôn tập - mà vẫn đúng quy định học thuật và không tốn kém.</p>\n\n<h2>Phần nào nên thuê, phần nào tự làm?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Nên thuê</b>Gõ lại bản viết tay của chính bạn; gõ công thức, bảng số liệu; định dạng theo mẫu của trường (mục lục, đánh số trang, trích dẫn); số hóa vở ghi để ôn thi.</div>\n  <div class=\"bad\"><b>Phải tự làm</b>Nội dung, lập luận, phân tích, kết luận; thu thập và xử lý số liệu; đọc và trích dẫn tài liệu tham khảo.</div>\n</div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Thuê gõ, định dạng không thay đổi nội dung học thuật - giống như nhờ in ấn, đóng gáy. Xem thêm <a href=\"/blog/ai-va-liem-chinh-hoc-thuat\">ranh giới liêm chính học thuật khi dùng công cụ hỗ trợ</a>.</div></div>\n\n<h2>Thuê gõ luận văn, khóa luận</h2>\n<ol class=\"steps\">\n  <li>Gửi kèm <b>mẫu trình bày của trường</b> (lề, phông, cỡ chữ, cách đánh số chương).</li>\n  <li>Ghi rõ kiểu trích dẫn (APA, IEEE…) - xem <a href=\"/blog/trich-dan-apa-ieee-word\">trích dẫn trong Word</a>.</li>\n  <li>Chương có nhiều công thức: ghi rõ dùng Equation, MathType hay LaTeX.</li>\n  <li>Yêu cầu dùng Heading để có <a href=\"/blog/tao-muc-luc-tu-dong-word\">mục lục tự động</a>.</li>\n</ol>\n\n<h2>Số hóa vở ghi, đề cương ôn thi</h2>\n<p>Không cần gõ toàn bộ vở. Chụp và sắp xếp theo chủ đề, chỉ thuê gõ phần cốt lõi: định nghĩa, định lý, công thức, ví dụ mẫu. Quy trình chi tiết: <a href=\"/blog/so-hoa-vo-ghi-bai-giang\">số hóa vở ghi bài giảng</a>.</p>\n\n<h2>Tiết kiệm chi phí cho sinh viên</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cách</th><th>Lý do tiết kiệm</th></tr>\n  <tr><td>Đặt sớm, chọn thời hạn dài</td><td>Đơn giá 30 ngày thấp hơn nhiều so với gấp trong ngày</td></tr>\n  <tr><td>Dùng mã ưu đãi sinh viên</td><td>Giảm trực tiếp trên tổng đơn</td></tr>\n  <tr><td>Chỉ gửi phần cần gõ</td><td>Ghi rõ trang cần làm, bỏ phần đã có file</td></tr>\n  <tr><td>Gộp nhóm</td><td>Cả nhóm tiểu luận gửi chung một đơn, thống nhất định dạng</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lên lịch ngược từ hạn nộp: gửi gõ phần viết tay trước 2-3 tuần, dành tuần cuối để đọc lại, chỉnh nội dung và in ấn.</div></div>\n\n<h2>Kiểm tra trước khi nộp</h2>\n<ul>\n  <li>Đọc lại toàn bộ: bạn là người hiểu nội dung nhất để phát hiện chữ gõ nhầm nghĩa.</li>\n  <li>Kiểm tra số liệu trong bảng khớp với dữ liệu gốc.</li>\n  <li>Cập nhật mục lục, danh mục bảng hình trước khi xuất PDF.</li>\n  <li>Kiểm tra lỗi chính tả - xem <a href=\"/blog/loi-chinh-ta-tieng-viet\">12 lỗi chính tả phổ biến</a>.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không đưa dữ liệu khảo sát có thông tin cá nhân người tham gia khi chưa ẩn danh. Gán mã phiếu thay cho họ tên trước khi gửi nhập liệu.</div></div>\n\n<h2>Đơn nhỏ cũng đáng thuê?</h2>\n<p>Một bài tiểu luận vài trang viết tay có thể tự gõ. Nhưng khi trùng tuần thi, vài trang ấy chiếm cả buổi tối - thời gian bạn cần để ôn bài. Hãy tính theo cách trong bài <a href=\"/blog/tu-go-hay-thue-go-van-ban\">tự gõ hay thuê gõ</a>.</p>\n\n<h2>Lịch gợi ý cho mùa luận văn</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thời điểm</th><th>Việc nên làm</th></tr>\n  <tr><td>4-6 tuần trước hạn</td><td>Gửi gõ chương viết tay, bảng số liệu (thời hạn dài, giá tốt)</td></tr>\n  <tr><td>2-3 tuần trước hạn</td><td>Định dạng toàn bài theo mẫu trường, mục lục, trích dẫn</td></tr>\n  <tr><td>Tuần cuối</td><td>Đọc lại, sửa nội dung, kiểm tra đạo văn, in thử</td></tr>\n</table></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Thuê gõ, định dạng; tự làm nội dung, số liệu, lập luận.</li><li>Gửi mẫu trình bày của trường và yêu cầu kiểu trích dẫn.</li><li>Đặt sớm, thời hạn dài, dùng mã sinh viên để tiết kiệm.</li><li>Luôn tự đọc lại và kiểm tra số liệu trước khi nộp.</li></ul></div>",
    "faq": [
      {
        "q": "Thuê gõ luận văn có vi phạm quy định không?",
        "a": "Thuê người gõ lại bản viết tay của chính bạn hoặc định dạng theo mẫu của trường không thay đổi nội dung học thuật. Nội dung, lập luận, số liệu phải là của bạn; hãy tìm hiểu quy định của trường."
      },
      {
        "q": "Sinh viên có được giảm giá không?",
        "a": "Tại Đánh máy 247 có mã ưu đãi dành cho học sinh, sinh viên. Xem danh sách mã đang áp dụng trong khung chat hoặc tại trang đặt hàng."
      },
      {
        "q": "Nên gửi bản viết tay hay bản đã gõ một phần?",
        "a": "Gửi bản gốc rõ nhất bạn có. Nếu đã gõ một phần, gửi kèm file Word để người làm thống nhất định dạng với phần còn lại."
      }
    ],
    "cover": "/assets/img/blog/go-van-ban-thue-cho-sinh-vien.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "dich-vu-an-theo-tiem-photocopy",
    "cat": "Đối tác",
    "date": "2026-10-14",
    "tags": [
      "Cửa hàng photocopy",
      "Kinh doanh nhỏ",
      "Mùa luận văn",
      "Văn phòng phẩm"
    ],
    "title": "7 dịch vụ “ăn theo” giúp tiệm photocopy tăng doanh thu mùa thi và mùa luận văn",
    "seoTitle": "7 dịch vụ giúp tiệm photocopy tăng doanh thu mùa thi",
    "excerpt": "7 dịch vụ giúp tiệm photocopy tăng doanh thu mùa thi, mùa luận văn: đóng gáy, scan PDF, đánh máy thuê, định dạng luận văn, ép plastic…",
    "body": "<p class=\"lead\">Giá photo mỗi trang chỉ vài trăm đồng, cạnh tranh ngày càng gay gắt. Những tiệm photocopy sống khỏe thường không chỉ bán “bản sao”, mà bán <b>giải pháp tài liệu trọn gói</b> cho sinh viên, giáo viên và văn phòng. Dưới đây là 7 dịch vụ ăn theo dễ triển khai, đặc biệt hiệu quả trong mùa thi và mùa luận văn.</p>\n\n<h2>1. Đóng gáy, đóng bìa luận văn</h2>\n<p>Đóng gáy lò xo, đóng gáy keo nhiệt, bìa cứng mạ chữ là dịch vụ có biên lợi nhuận tốt hơn photo thường. Hãy có sẵn bảng mẫu bìa và màu sắc để khách chọn nhanh, và nhắc khách kiểm tra kỹ <a href=\"/blog/dinh-dang-luan-van-chuan\">định dạng luận văn</a> trước khi in số lượng lớn.</p>\n\n<h2>2. Scan tài liệu sang PDF có thể tìm kiếm</h2>\n<p>Doanh nghiệp, hộ gia đình cần số hóa hồ sơ để lưu trữ. Một máy scan nạp giấy tự động (ADF) giúp xử lý hàng trăm trang mỗi giờ. Gợi ý gói dịch vụ: scan 300 dpi, đặt tên tệp theo quy tắc, gộp theo hồ sơ.</p>\n\n<h2>3. Đánh máy thuê, chuyển PDF/ảnh sang Word</h2>\n<p>Đây là nhu cầu rất phổ biến nhưng cần người gõ thành thạo và kiểm tra lỗi kỹ. Nếu tiệm không có nhân sự, có thể tham gia <a href=\"/doi-tac\">chương trình đối tác</a>: giới thiệu khách bằng mã QR và nhận hoa hồng 30% mỗi đơn hoàn thành mà không phải tự làm.</p>\n<figure><img src=\"/assets/img/blog/fig-hoa-hong-doi-tac.svg\" alt=\"Luồng giới thiệu khách cần đánh máy cho đối tác\" loading=\"lazy\" width=\"960\"><figcaption>Khách quét mã QR tại quầy → đặt hàng và thanh toán trực tuyến → nhận bản Word → tiệm nhận hoa hồng.</figcaption></figure>\n\n<h2>4. Định dạng luận văn, báo cáo</h2>\n<p>Sinh viên thường gặp khó với mục lục tự động, đánh số trang La Mã - Ả Rập, danh mục bảng biểu, trích dẫn tài liệu tham khảo. Đây là dịch vụ đòi hỏi kiến thức Word chắc chắn - xem thêm hướng dẫn <a href=\"/blog/tao-muc-luc-tu-dong-word\">tạo mục lục tự động</a>.</p>\n\n<h2>5. Ép plastic, in thẻ, in ảnh thẻ</h2>\n<p>Giá trị đơn nhỏ nhưng tần suất cao, giữ chân khách quay lại. Kết hợp chụp ảnh thẻ nền xanh, nền trắng cho hồ sơ.</p>\n\n<h2>6. In màu tài liệu học tập, poster, slide</h2>\n<p>Sinh viên cần in slide thuyết trình, poster báo cáo khoa học, đề cương ôn tập màu. Có thể đề xuất in 2-4 slide/trang để tiết kiệm.</p>\n\n<h2>7. Văn phòng phẩm theo mùa</h2>\n<p>Bìa hồ sơ, kẹp tài liệu, bút, giấy thi, túi đựng hồ sơ dự tuyển - bày ngay quầy thu tiền để khách mua kèm.</p>\n\n<h2>So sánh mức đầu tư và hiệu quả</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Dịch vụ</th><th>Đầu tư</th><th>Cần nhân sự chuyên môn</th><th>Phù hợp mùa</th></tr>\n  <tr><td>Đóng gáy, bìa</td><td>Trung bình</td><td class=\"no\">Không</td><td>Luận văn, đồ án</td></tr>\n  <tr><td>Scan PDF</td><td>Trung bình</td><td class=\"no\">Không</td><td>Quanh năm</td></tr>\n  <tr><td>Đánh máy thuê (qua đối tác)</td><td>Không</td><td class=\"no\">Không</td><td>Quanh năm, cao điểm mùa thi</td></tr>\n  <tr><td>Định dạng luận văn</td><td>Thấp</td><td class=\"ok\">Có</td><td>Luận văn</td></tr>\n  <tr><td>Ép plastic, ảnh thẻ</td><td>Thấp</td><td class=\"no\">Không</td><td>Mùa hồ sơ</td></tr>\n  <tr><td>In màu, poster</td><td>Cao</td><td class=\"no\">Không</td><td>Hội thảo, báo cáo</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Khi nhận tài liệu của khách (hợp đồng, hồ sơ cá nhân), hãy có quy tắc bảo mật rõ ràng: không lưu bản scan lâu hơn cần thiết, không để tài liệu khách ở nơi người khác xem được.</div></div>\n\n<h2>Lên kế hoạch cho mùa cao điểm</h2>\n<ol class=\"steps\">\n  <li>Theo dõi lịch thi, lịch nộp khóa luận của trường gần tiệm.</li>\n  <li>Chuẩn bị bảng giá gói: “đánh máy + định dạng + in + đóng gáy”.</li>\n  <li>Dán poster dịch vụ và mã QR đặt hàng tại quầy, cửa ra vào.</li>\n  <li>Đăng thông báo vào nhóm Zalo, Facebook của sinh viên khu vực.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Gói dịch vụ trọn bộ giúp khách đỡ phải đi nhiều nơi - và tiệm có nhiều điểm chạm doanh thu trên cùng một khách hàng.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Thêm dịch vụ đánh máy cho tiệm mà không cần người gõ?</b>Đăng ký miễn phí, nhận mã QR in poster ngay. <a href=\"/doi-tac\" class=\"button\">Tìm hiểu chương trình đối tác</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bán giải pháp tài liệu trọn gói thay vì chỉ bán bản photo.</li><li>Đóng gáy, scan, ép plastic đầu tư thấp, dễ triển khai.</li><li>Đánh máy, định dạng có thể triển khai qua chương trình đối tác 30%.</li><li>Chuẩn bị trước cho mùa thi, mùa luận văn.</li></ul></div>",
    "faq": [
      {
        "q": "Dịch vụ nào dễ triển khai nhất cho tiệm photocopy nhỏ?",
        "a": "Scan tài liệu sang PDF, ép plastic và đóng gáy lò xo cần ít đầu tư thiết bị. Những dịch vụ cần nhân sự chuyên môn như đánh máy, định dạng luận văn có thể triển khai bằng cách hợp tác với đơn vị chuyên nghiệp."
      },
      {
        "q": "Mùa cao điểm của tiệm photocopy gần trường là khi nào?",
        "a": "Thường là các tháng cuối học kỳ, mùa thi, mùa nộp khóa luận, đồ án và luận văn. Mỗi trường có lịch riêng nên tiệm nên theo dõi lịch học vụ của trường gần nhất."
      },
      {
        "q": "Có nên tự nhận đánh máy thuê tại tiệm?",
        "a": "Nếu có người gõ thành thạo và thời gian, có thể nhận đơn nhỏ. Với đơn lớn, tài liệu có công thức hoặc cần gấp, giới thiệu sang đơn vị chuyên nghiệp giúp tránh trễ hẹn mà vẫn có hoa hồng."
      }
    ],
    "cover": "/assets/img/blog/dich-vu-an-theo-tiem-photocopy.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
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
    "body": "\n<p class=\"lead\">Phần lớn người dùng máy tính ở Việt Nam tự học gõ phím theo kiểu “mổ cò”: nhìn bàn phím, dùng hai đến bốn ngón. Cách này vẫn đạt khoảng 25–35 từ/phút, nhưng khó vượt lên và làm mỏi mắt vì phải liên tục nhìn xuống. Tin vui là chỉ cần một tháng luyện tập có phương pháp, bạn hoàn toàn có thể gõ 10 ngón ở tốc độ 50–60 từ/phút.</p>\n\n<h2>Vì sao nên học gõ 10 ngón?</h2>\n<ul>\n  <li><b>Nhanh hơn:</b> người gõ 10 ngón thành thạo thường đạt 60–80 từ/phút, gấp đôi gõ mổ cò.</li>\n  <li><b>Chính xác hơn:</b> mỗi ngón phụ trách một vùng cố định, tay không phải “đi tìm” phím nên ít gõ nhầm.</li>\n  <li><b>Đỡ mỏi:</b> mắt nhìn màn hình thay vì đảo liên tục giữa màn hình và bàn phím, cổ cũng ít phải cúi.</li>\n  <li><b>Tập trung vào nội dung:</b> khi ngón tay tự động, đầu óc dành cho việc suy nghĩ câu chữ.</li>\n</ul>\n\n<h2>Nền tảng: hàng phím cơ sở</h2>\n<p>Mọi thứ bắt đầu từ <b>hàng phím cơ sở</b>: tay trái đặt trên <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> <kbd>F</kbd>, tay phải đặt trên <kbd>J</kbd> <kbd>K</kbd> <kbd>L</kbd> <kbd>;</kbd>, hai ngón cái đặt nhẹ lên phím cách. Sau mỗi lần gõ, ngón tay luôn quay về vị trí này.</p>\n<figure><img src=\"/assets/img/blog/fig-ban-phim-10-ngon.svg\" alt=\"Sơ đồ phân công ngón tay trên bàn phím QWERTY\" loading=\"lazy\" width=\"960\"><figcaption>Mỗi màu là vùng phụ trách của một ngón. Hai phím F và J có gờ nổi để bạn đặt tay đúng chỗ mà không cần nhìn.</figcaption></figure>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hãy sờ hai gờ nổi trên phím <kbd>F</kbd> và <kbd>J</kbd>. Đây là “mỏ neo” giúp bạn về đúng hàng cơ sở trong bóng tối.</div></div>\n\n<h2>Lộ trình 4 tuần, mỗi ngày 20 phút</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tuần</th><th>Mục tiêu</th><th>Bài tập chính</th><th>Tốc độ kỳ vọng</th></tr>\n  <tr><td><b>1</b></td><td>Thuộc hàng cơ sở và hàng trên</td><td>Gõ chậm, không nhìn phím, đúng ngón. Che bàn phím bằng một tờ giấy nếu cần.</td><td>10–20 từ/phút</td></tr>\n  <tr><td><b>2</b></td><td>Thêm hàng dưới, chữ hoa với <kbd>Shift</kbd></td><td>Gõ các từ tiếng Việt ngắn, luyện kết hợp phím dấu của bộ gõ.</td><td>20–30 từ/phút</td></tr>\n  <tr><td><b>3</b></td><td>Gõ câu và đoạn văn</td><td>Chép lại một trang báo mỗi ngày, ưu tiên độ chính xác trên 95%.</td><td>30–45 từ/phút</td></tr>\n  <tr><td><b>4</b></td><td>Tăng tốc và tạo nhịp</td><td>Bài kiểm tra 1–3 phút, ghi lại kết quả, tập trung vào các phím hay sai.</td><td>45–60 từ/phút</td></tr>\n</table></div>\n\n<h2>Năm nguyên tắc vàng khi luyện tập</h2>\n<ol class=\"steps\">\n  <li><b>Chính xác trước, tốc độ sau.</b> Gõ sai rồi sửa tốn nhiều thời gian hơn gõ chậm mà đúng. Khi độ chính xác ổn định trên 95% mới tăng tốc.</li>\n  <li><b>Không nhìn bàn phím.</b> Đây là thói quen khó bỏ nhất. Lúc đầu bạn sẽ chậm hơn, nhưng đó là cái giá cần trả.</li>\n  <li><b>Luyện đều đặn mỗi ngày.</b> 20 phút mỗi ngày hiệu quả hơn hẳn 2 giờ vào cuối tuần.</li>\n  <li><b>Giữ nhịp đều.</b> Gõ đều tay như nhịp đồng hồ thay vì lúc nhanh lúc chậm.</li>\n  <li><b>Ngồi đúng tư thế.</b> Cổ tay thẳng, khuỷu tay khoảng 90°, vai thả lỏng.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Có nhiều trang luyện gõ miễn phí cho phép chọn bài tiếng Việt và đo tốc độ, độ chính xác theo thời gian thực. Hãy chọn một trang và gắn bó với nó để dễ theo dõi tiến bộ.</div></div>\n\n<h2>Gõ tiếng Việt: thêm một lớp kỹ năng</h2>\n<p>Với tiếng Việt, bạn còn phải gõ thêm dấu thanh và dấu mũ qua bộ gõ (Telex hoặc VNI). Đừng học song song quá sớm: hãy thành thạo vị trí chữ cái trong tuần đầu, sang tuần thứ hai mới kết hợp gõ dấu. Với Telex, các phím dấu (<kbd>s</kbd> <kbd>f</kbd> <kbd>r</kbd> <kbd>x</kbd> <kbd>j</kbd>) đều nằm trong vùng ngón tay quen thuộc, nên chuyển sang rất tự nhiên.</p>\n\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Luôn đặt tay ở hàng cơ sở A S D F - J K L ;, dùng gờ nổi trên F và J để định vị.</li><li>Chính xác trên 95% rồi mới tăng tốc.</li><li>20 phút mỗi ngày trong 4 tuần là đủ để đạt 45–60 từ/phút.</li><li>Không nhìn bàn phím, kể cả khi thấy chậm lúc đầu.</li></ul></div>\n<p>Nếu bạn đang có một chồng tài liệu cần gõ gấp mà chưa kịp luyện, đội ngũ chuyên viên của chúng tôi (tốc độ trên 70 từ/phút) luôn sẵn sàng. <a href=\"/dat-hang\">Đặt hàng ngay</a> và nhận tài liệu chỉ từ 6 giờ.</p>",
    "cover": "/assets/img/blog/go-10-ngon-30-ngay.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "marketing-tiem-photocopy-ma-qr-zalo",
    "cat": "Đối tác",
    "date": "2026-10-13",
    "tags": [
      "Marketing tiệm photocopy",
      "Mã QR",
      "Zalo",
      "Đối tác photocopy"
    ],
    "title": "Marketing cho tiệm photocopy bằng mã QR và Zalo: thu hút khách cần đánh máy, in ấn mà không tốn tiền quảng cáo",
    "seoTitle": "Marketing tiệm photocopy bằng mã QR và Zalo hiệu quả",
    "excerpt": "Marketing tiệm photocopy không tốn tiền quảng cáo: poster mã QR tại quầy, kịch bản giới thiệu, nhóm Zalo khách quen, Google Maps và đo hiệu quả.",
    "body": "<p class=\"lead\">Tiệm photocopy thường không có ngân sách quảng cáo, nhưng lại có thứ mà nhiều doanh nghiệp mơ ước: lượng khách đến tận nơi mỗi ngày. Chỉ cần vài công cụ đơn giản - mã QR, poster, Zalo, Google Maps - tiệm có thể quảng bá thêm dịch vụ đánh máy, định dạng tài liệu, in ấn trọn gói mà gần như không tốn chi phí. Dưới đây là cách làm cụ thể, áp dụng được ngay.</p>\n<figure><img src=\"/assets/img/blog/fig-poster-qr-quay.svg\" alt=\"Poster mã QR đặt tại quầy tiệm photocopy\" loading=\"lazy\" width=\"960\"><figcaption>Poster A4 có mã QR đặt ngang tầm mắt cạnh quầy thu tiền - nơi khách đứng chờ lâu nhất.</figcaption></figure>\n\n<h2>1. Poster mã QR: “nhân viên tư vấn” không lương</h2>\n<p>Một poster tốt trả lời ba câu hỏi trong 3 giây: <b>dịch vụ gì</b>, <b>lợi ích gì</b>, <b>làm gì tiếp</b>.</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thành phần</th><th>Gợi ý nội dung</th></tr>\n  <tr><td>Tiêu đề lớn</td><td>“ĐÁNH MÁY THUÊ - CHUYỂN VIẾT TAY, PDF SANG WORD”</td></tr>\n  <tr><td>Lợi ích</td><td>Giao từ 6 giờ · Người thật gõ · Gõ công thức, luận văn</td></tr>\n  <tr><td>Mã QR lớn</td><td>Tối thiểu khoảng 8-10 cm để quét dễ từ xa</td></tr>\n  <tr><td>Lời kêu gọi</td><td>“Quét để gửi tài liệu và nhận báo giá ngay”</td></tr>\n  <tr><td>Mã dự phòng</td><td>Mã giới thiệu dạng chữ cho khách tự nhập</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Đối tác Đánh máy 247 có sẵn nút “In poster A4” trong trang đối tác: poster đã có mã QR riêng, danh sách dịch vụ và mã giới thiệu - chỉ cần in và dán.</div></div>\n\n<h3>Vị trí đặt poster</h3>\n<ul>\n  <li><b>Quầy thu tiền</b>: khách nhìn thấy khi chờ thanh toán.</li>\n  <li><b>Cạnh máy photo</b>: đúng lúc khách đang cầm tài liệu viết tay, bản scan mờ.</li>\n  <li><b>Khu đóng gáy luận văn</b>: sinh viên cần định dạng, gõ công thức.</li>\n  <li><b>Cửa ra vào</b>: người đi ngang cũng biết tiệm có dịch vụ này.</li>\n</ul>\n\n<h2>2. Kịch bản giới thiệu tại quầy</h2>\n<p>Giới thiệu đúng lúc hiệu quả hơn mọi quảng cáo. Một vài câu gợi ý tự nhiên:</p>\n<ul>\n  <li>Khách photo vở ghi, bản viết tay: “Em cần bản Word không? Quét mã này gửi ảnh là có người gõ lại, mai có file.”</li>\n  <li>Khách photo đề thi cũ mờ: “Cô muốn gõ lại cho rõ, có cả công thức thì quét mã này nhé.”</li>\n  <li>Khách in luận văn bị lỗi định dạng: “Bên này nhận chỉnh mục lục, đánh số trang theo mẫu trường.”</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Giới thiệu đúng nhu cầu, không ép khách. Khách hài lòng với dịch vụ sẽ quay lại tiệm để in, đóng gáy bản hoàn chỉnh.</div></div>\n\n<h2>3. Zalo: kênh chăm sóc khách quen</h2>\n<ol class=\"steps\">\n  <li>Tạo <b>Zalo của tiệm</b> (tài khoản riêng hoặc Zalo OA nếu có điều kiện), in mã kết bạn cạnh quầy.</li>\n  <li>Lập <b>nhóm khách quen</b>: sinh viên trường gần tiệm, giáo viên, văn phòng lân cận.</li>\n  <li>Đăng nội dung hữu ích: giờ mở cửa mùa thi, mẹo chụp tài liệu rõ nét, ưu đãi đóng gáy.</li>\n  <li>Kèm liên kết giới thiệu dịch vụ đánh máy khi phù hợp, dùng tin nhắn mẫu trong trang đối tác.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không gửi tin nhắn hàng loạt cho người chưa đồng ý nhận, không nhắn quá dày. Spam làm khách chặn tiệm và vi phạm điều khoản chương trình đối tác.</div></div>\n\n<h2>4. Google Maps: để khách tìm thấy tiệm</h2>\n<ul>\n  <li>Đăng ký, cập nhật hồ sơ doanh nghiệp trên Google: tên tiệm, giờ mở cửa, số điện thoại, ảnh tiệm.</li>\n  <li>Liệt kê dịch vụ: photo, in màu, đóng gáy, ép plastic, <b>nhận đánh máy, gõ văn bản</b>.</li>\n  <li>Mời khách hài lòng để lại đánh giá thật - không mua đánh giá giả.</li>\n</ul>\n\n<h2>5. Mùa cao điểm: lên kế hoạch trước</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thời điểm</th><th>Nhu cầu</th><th>Hành động</th></tr>\n  <tr><td>Cuối học kỳ, mùa thi</td><td>Vở ghi, đề cương, đề thi</td><td>Đăng nhóm Zalo, nhắc dịch vụ gõ đề cương</td></tr>\n  <tr><td>Mùa nộp luận văn</td><td>Định dạng, công thức, đóng gáy</td><td>Combo “gõ - định dạng - in - đóng gáy”</td></tr>\n  <tr><td>Mùa hồ sơ (du học, việc làm)</td><td>Gõ giấy tờ, chuẩn bị dịch thuật</td><td>Poster ở khu photo công chứng</td></tr>\n</table></div>\n\n<h2>6. Đo hiệu quả và cải thiện</h2>\n<p>Trong trang đối tác, theo dõi <b>lượt quét</b> và <b>số đơn</b> theo tuần. Thử thay đổi một yếu tố mỗi lần (vị trí poster, câu giới thiệu, nội dung tin Zalo) rồi so sánh. Sau vài tuần, bạn sẽ biết cách nào hiệu quả nhất với khách của tiệm mình.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Tham khảo thêm <a href=\"/blog/dich-vu-an-theo-tiem-photocopy\">7 dịch vụ ăn theo giúp tiệm photocopy tăng doanh thu</a> và <a href=\"/blog/quan-photocopy-hop-tac-dich-vu-danh-may\">3 mô hình hợp tác dịch vụ đánh máy</a>.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Chưa có mã QR cho tiệm?</b>Đăng ký đối tác miễn phí - có poster QR in sẵn, hoa hồng 30% mỗi đơn. <a href=\"/dang-ky-doi-tac\" class=\"button\">Đăng ký đối tác</a></div>\n\n<h2>Mẫu tin nhắn Zalo gợi ý</h2>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px;white-space:pre-wrap\">Mùa thi tiệm mở cửa đến 21h. Bạn nào cần gõ lại vở ghi, chuyển PDF/ảnh sang Word, gõ công thức thì gửi ảnh qua liên kết này, có file từ 6 giờ: [liên kết giới thiệu của tiệm]. In - đóng gáy bản hoàn chỉnh tại tiệm nhé!</p>\n<p>Tin nhắn ngắn, nói rõ lợi ích, có liên kết và lời mời quay lại tiệm. Gửi trong nhóm đã tham gia tự nguyện, không gửi cho người lạ.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Mỗi tuần một tin hữu ích là đủ để khách nhớ đến tiệm mà không thấy phiền.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Poster QR ở quầy thu tiền, cạnh máy photo, khu đóng gáy.</li><li>Giới thiệu đúng lúc khách cầm tài liệu viết tay, bản mờ.</li><li>Zalo chăm sóc khách quen, không spam; Google Maps để khách tìm thấy tiệm.</li><li>Theo dõi lượt quét, đơn hàng theo tuần để cải thiện.</li></ul></div>",
    "faq": [
      {
        "q": "Đặt poster mã QR ở đâu trong tiệm là hiệu quả nhất?",
        "a": "Ở nơi khách đứng chờ lâu: quầy thu tiền, cạnh máy photo, khu đóng gáy. Poster ngang tầm mắt, có lời kêu gọi rõ ràng như “Quét để gõ lại tài liệu”."
      },
      {
        "q": "Có nên lập nhóm Zalo cho khách của tiệm?",
        "a": "Nên, nếu bạn duy trì được: thông báo giờ mở cửa, ưu đãi mùa thi, dịch vụ mới. Tránh nhắn tin quá dày khiến khách rời nhóm."
      },
      {
        "q": "Làm sao biết quảng bá có hiệu quả?",
        "a": "Theo dõi lượt quét mã và số đơn trong trang đối tác theo từng tuần; thử thay đổi vị trí poster, nội dung tin nhắn và so sánh."
      }
    ],
    "cover": "/assets/img/blog/marketing-tiem-photocopy-ma-qr-zalo.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "go-van-ban-hanh-chinh-thue",
    "cat": "Kiến thức",
    "date": "2026-10-13",
    "tags": [
      "Văn bản hành chính",
      "Gõ văn bản thuê",
      "Doanh nghiệp",
      "Nghị định 30"
    ],
    "title": "Gõ văn bản hành chính thuê cho cơ quan, doanh nghiệp: thể thức, bảo mật và tiến độ",
    "seoTitle": "Gõ văn bản hành chính thuê cho cơ quan, doanh nghiệp",
    "excerpt": "Thuê gõ công văn, quyết định, hồ sơ lưu trữ: yêu cầu thể thức Nghị định 30, bảo mật, chia lô tiến độ và nghiệm thu cho cơ quan, doanh nghiệp.",
    "body": "<p class=\"lead\">Văn thư cơ quan, phòng hành chính doanh nghiệp thường gặp khối lượng lớn văn bản cần gõ lại: công văn cũ chỉ còn bản giấy, quyết định soạn bằng phông chữ cũ lỗi hiển thị, hồ sơ lưu trữ cần số hóa. Thuê gõ giúp giải phóng nhân sự, nhưng văn bản hành chính có yêu cầu riêng về thể thức và bảo mật mà bên nhận việc phải đáp ứng.</p>\n\n<h2>Những loại văn bản thường thuê gõ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại</th><th>Đặc điểm cần lưu ý</th></tr>\n  <tr><td>Công văn, tờ trình, thông báo</td><td>Đúng thể thức: quốc hiệu, số ký hiệu, nơi nhận</td></tr>\n  <tr><td>Quyết định, quy chế</td><td>Đánh số điều, khoản, điểm chính xác</td></tr>\n  <tr><td>Biên bản họp, biên bản nghiệm thu</td><td>Thành phần, nội dung, chữ ký - xem <a href=\"/blog/bien-ban-hop-online\">biên bản họp</a></td></tr>\n  <tr><td>Hồ sơ lưu trữ cũ</td><td>Giữ nguyên văn, ghi chú [Dấu], [Chữ ký]</td></tr>\n  <tr><td>Văn bản lỗi phông TCVN3, VNI</td><td>Chuyển sang Unicode - xem <a href=\"/blog/sua-loi-font-tcvn3-vni-unicode\">sửa lỗi font</a></td></tr>\n</table></div>\n\n<h2>Yêu cầu về thể thức</h2>\n<p>Văn bản hành chính hiện trình bày theo Nghị định 30/2020/NĐ-CP. Khi thuê gõ, hãy gửi kèm một văn bản mẫu đúng chuẩn của đơn vị để bên gõ làm theo:</p>\n<ul>\n  <li>Khổ A4, lề trái 30-35 mm, lề phải 15-20 mm, lề trên - dưới 20-25 mm.</li>\n  <li>Phông Times New Roman (Unicode), cỡ chữ nội dung 13-14.</li>\n  <li>Bố cục quốc hiệu, tiêu ngữ, tên cơ quan, số ký hiệu, địa danh ngày tháng đúng vị trí.</li>\n</ul>\n<p>Chi tiết xem <a href=\"/blog/the-thuc-van-ban-nghi-dinh-30\">thể thức văn bản theo Nghị định 30</a>.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lập sẵn một “bộ mẫu” Word (công văn, quyết định, tờ trình) có Styles đúng chuẩn và gửi cho bên gõ thuê. Mọi văn bản trả về sẽ đồng bộ, không phải chỉnh lại.</div></div>\n\n<h2>Bảo mật: điều kiện bắt buộc</h2>\n<ol class=\"steps\">\n  <li><b>Hợp đồng</b> nêu rõ phạm vi, nghĩa vụ bảo mật, thời hạn và cách xóa dữ liệu.</li>\n  <li><b>Kênh truyền tệp</b> an toàn (HTTPS, liên kết có thời hạn), không dùng nhóm chat chung.</li>\n  <li><b>Phân quyền</b>: người gõ chỉ thấy phần tài liệu cần làm.</li>\n  <li><b>Xác nhận xóa</b> tệp sau khi bàn giao.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Văn bản có dữ liệu cá nhân (hồ sơ nhân sự, danh sách người lao động) cần tuân thủ quy định bảo vệ dữ liệu cá nhân - xem <a href=\"/blog/bao-ve-du-lieu-ca-nhan-so-hoa\">lưu ý khi số hóa</a>.</div></div>\n\n<h2>Tiến độ với khối lượng lớn</h2>\n<p>Dự án hàng nghìn trang nên chia theo lô (ví dụ mỗi lô 200-500 trang), nghiệm thu từng lô trước khi làm lô tiếp theo. Cách này giúp phát hiện sớm sai lệch định dạng, điều chỉnh yêu cầu kịp thời và thanh toán theo tiến độ.</p>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Giai đoạn</th><th>Việc cần thống nhất</th></tr>\n  <tr><td>Khởi động</td><td>Mẫu thể thức, quy tắc đặt tên tệp, đầu mối liên hệ</td></tr>\n  <tr><td>Lô thử</td><td>10-20 trang đại diện để chốt chất lượng</td></tr>\n  <tr><td>Thực hiện theo lô</td><td>Lịch giao, cách báo lỗi, xử lý chữ không đọc được</td></tr>\n  <tr><td>Nghiệm thu</td><td>Danh sách kiểm tra, biên bản bàn giao, xóa dữ liệu</td></tr>\n</table></div>\n\n<h2>Nghiệm thu văn bản</h2>\n<p>Kiểm tra ngẫu nhiên một tỷ lệ trang trong mỗi lô: số ký hiệu, ngày tháng, tên người, số tiền, đánh số điều khoản. Dùng <a href=\"/blog/kiem-tra-file-go-thue-nghiem-thu\">checklist nghiệm thu</a> để thống nhất tiêu chí giữa hai bên.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Đánh máy 247 nhận dự án văn bản hành chính theo lô, ký hợp đồng bảo mật riêng. Gửi mô tả và vài trang mẫu qua <a href=\"/lien-he\">trang Liên hệ</a> để nhận báo giá dự án.</div></div>\n\n<h2>Quy tắc đặt tên tệp cho hồ sơ số hóa</h2>\n<p>Thống nhất trước một quy tắc, ví dụ <span class=\"mono\">2026_CV_025_UBND-VP.docx</span> (năm - loại văn bản - số - ký hiệu). Tên tệp nhất quán giúp tra cứu, sắp xếp và đối chiếu khi nghiệm thu, nhất là với hàng nghìn văn bản.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Gửi văn bản mẫu đúng thể thức Nghị định 30 cho bên gõ.</li><li>Hợp đồng bảo mật, kênh truyền tệp an toàn, xác nhận xóa dữ liệu.</li><li>Dự án lớn: chia lô, làm lô thử, nghiệm thu từng lô.</li><li>Kiểm tra số ký hiệu, ngày tháng, tên người, số tiền.</li></ul></div>",
    "faq": [
      {
        "q": "Thuê gõ văn bản hành chính cần cung cấp gì?",
        "a": "Bản gốc rõ ràng (scan/ảnh), mẫu thể thức đơn vị đang áp dụng, danh sách tên cơ quan, chức danh, ký hiệu văn bản và yêu cầu về định dạng file đầu ra."
      },
      {
        "q": "Văn bản hành chính trình bày theo quy định nào?",
        "a": "Văn bản hành chính của cơ quan, tổ chức hiện trình bày theo Nghị định 30/2020/NĐ-CP về công tác văn thư; doanh nghiệp thường áp dụng tương tự hoặc theo quy chế nội bộ."
      },
      {
        "q": "Có ký hợp đồng bảo mật được không?",
        "a": "Có. Với hồ sơ có thông tin nội bộ hoặc dữ liệu cá nhân, nên ký hợp đồng nêu rõ phạm vi xử lý, bảo mật và thời hạn xóa dữ liệu."
      }
    ],
    "cover": "/assets/img/blog/go-van-ban-hanh-chinh-thue.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "bien-ban-hop-online",
    "cat": "Chuyển âm",
    "date": "2026-10-13",
    "tags": [
      "Biên bản họp",
      "Họp trực tuyến",
      "Chuyển âm",
      "Ghi âm"
    ],
    "title": "Làm biên bản họp trực tuyến từ ghi âm Zoom, Google Meet, Teams: quy trình 6 bước",
    "seoTitle": "Biên bản họp online từ ghi âm Zoom, Meet, Teams",
    "excerpt": "Quy trình 6 bước làm biên bản từ ghi âm Zoom, Google Meet, Teams: ghi âm đúng cách, phân biệt người nói, kết luận và việc cần làm.",
    "body": "<p class=\"lead\">Họp trực tuyến giúp tiết kiệm thời gian đi lại, nhưng lại tạo ra một “núi” bản ghi mà ít ai nghe lại. Sau buổi họp, câu hỏi “hôm đó chốt hạn ngày nào?” vẫn xuất hiện. Một biên bản rõ ràng, làm từ bản ghi âm, giúp cả nhóm thống nhất và có căn cứ đối chiếu sau này.</p>\n<figure><img src=\"/assets/img/blog/fig-bien-ban-hop.svg\" alt=\"Quy trình làm biên bản từ ghi âm cuộc họp trực tuyến\" loading=\"lazy\" width=\"960\"><figcaption>Ghi âm → chuyển âm, phân biệt người nói → biên tập → biên bản tóm tắt có kết luận và việc cần làm.</figcaption></figure>\n\n<h2>Bước 1: Ghi âm đúng cách ngay từ đầu</h2>\n<ul>\n  <li><b>Thông báo cho người tham gia</b> trước khi bật ghi âm, ghi hình.</li>\n  <li>Dùng chức năng ghi của nền tảng (Zoom, Google Meet, Teams) để có bản ghi rõ nhất; nếu có tùy chọn ghi riêng từng người nói, hãy bật.</li>\n  <li>Đề nghị mọi người tắt micro khi không nói, dùng tai nghe có micro để giảm tiếng vọng.</li>\n  <li>Người chủ trì <b>nhắc lại kết luận</b> cuối mỗi nội dung: “Chốt: hạn thứ Sáu, Minh phụ trách”.</li>\n</ul>\n\n<h2>Bước 2: Chuyển âm và phân biệt người nói</h2>\n<p>Bản chép lời cần đánh dấu người nói (theo tên hoặc vai trò) và mốc thời gian để dễ tra lại. Những đoạn nghe không rõ ghi <b>[không rõ 00:12:05]</b> thay vì đoán. Nếu dùng phụ đề tự động, hãy nghe lại để sửa tên riêng, con số và thuật ngữ - đây là chỗ máy hay sai nhất.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bạn có thể nghe thử mẫu chuyển âm cuộc họp 3 người và biên bản tóm tắt tại trang <a href=\"/mau\">Bài mẫu</a>.</div></div>\n\n<h2>Bước 3: Chọn kiểu biên bản</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Kiểu</th><th>Nội dung</th><th>Phù hợp</th></tr>\n  <tr><td>Nguyên văn</td><td>Ghi lại toàn bộ lời nói, kể cả ngập ngừng</td><td>Lưu bằng chứng, nghiên cứu, hội đồng</td></tr>\n  <tr><td>Làm sạch</td><td>Đủ ý từng người, lược từ đệm, câu lặp</td><td>Họp quan trọng cần đối chiếu</td></tr>\n  <tr><td>Tóm tắt</td><td>Nội dung chính, kết luận, việc cần làm</td><td>Họp định kỳ, họp nhóm</td></tr>\n</table></div>\n\n<h2>Bước 4: Cấu trúc biên bản tóm tắt</h2>\n<ol class=\"steps\">\n  <li><b>Thông tin chung</b>: tên cuộc họp, thời gian, nền tảng, chủ trì, thư ký, thành phần.</li>\n  <li><b>Nội dung theo từng vấn đề</b>: tóm tắt ý kiến chính, không cần chép từng câu.</li>\n  <li><b>Kết luận</b>: điều đã thống nhất, điều còn bỏ ngỏ.</li>\n  <li><b>Việc cần làm</b>: việc gì - ai phụ trách - hạn khi nào.</li>\n  <li><b>Lịch họp tiếp theo</b> và tài liệu đính kèm.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Viết phần “Việc cần làm” dạng bảng ba cột (Nội dung - Người phụ trách - Hạn). Gửi biên bản trong ngày để mọi người xác nhận khi còn nhớ rõ.</div></div>\n\n<h2>Bước 5: Kiểm tra trước khi gửi</h2>\n<ul>\n  <li>Đối chiếu số liệu, ngày tháng, tên người với bản ghi.</li>\n  <li>Thống nhất cách viết tên dự án, sản phẩm, đơn vị.</li>\n  <li>Văn bản hành chính: trình bày theo thể thức của đơn vị, tham khảo <a href=\"/blog/the-thuc-van-ban-nghi-dinh-30\">Nghị định 30</a>.</li>\n</ul>\n\n<h2>Bước 6: Lưu trữ và bảo mật</h2>\n<p>Bản ghi cuộc họp thường chứa thông tin nội bộ, số liệu kinh doanh, thông tin nhân sự. Hãy lưu ở thư mục có phân quyền, đặt thời hạn lưu trữ, và chỉ gửi biên bản cho người liên quan. Khi thuê ngoài chuyển âm, chọn đơn vị có cam kết bảo mật và xóa tệp sau khi hoàn thành.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không đăng bản ghi họp lên kênh công khai hoặc chia sẻ liên kết “ai cũng xem được”. Một đường dẫn bị lộ có thể làm lộ toàn bộ nội dung cuộc họp.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Thông báo trước khi ghi âm; dùng tai nghe, tắt micro khi không nói.</li><li>Chuyển âm có tên người nói và mốc thời gian; đánh dấu chỗ không rõ.</li><li>Biên bản tóm tắt cần kết luận và bảng việc cần làm.</li><li>Lưu bản ghi có phân quyền, gửi biên bản trong ngày.</li></ul></div>\n<p>Có nhiều bản ghi họp cần chép lời? Xem <a href=\"/dich-vu-chuyen-am\">dịch vụ chuyển âm</a> - phân biệt người nói, có mốc thời gian, bảo mật tuyệt đối.</p>",
    "faq": [
      {
        "q": "Có cần xin phép trước khi ghi âm cuộc họp không?",
        "a": "Nên thông báo rõ cho mọi người tham gia trước khi ghi âm, ghi hình. Các nền tảng họp trực tuyến thường tự hiển thị thông báo khi bật ghi; với cuộc họp có đối tác bên ngoài, hãy xin đồng ý rõ ràng."
      },
      {
        "q": "Biên bản họp nên chép nguyên văn hay tóm tắt?",
        "a": "Phần lớn cuộc họp nội bộ chỉ cần biên bản tóm tắt: nội dung chính, kết luận, việc cần làm. Chép nguyên văn phù hợp khi cần lưu bằng chứng, họp hội đồng, phỏng vấn nghiên cứu hoặc làm việc có tính pháp lý."
      },
      {
        "q": "Phụ đề tự động của nền tảng họp có dùng làm biên bản được không?",
        "a": "Có thể dùng làm bản nháp. Bản tự động thường sai tên riêng, số liệu, thuật ngữ và không phân biệt chính xác người nói khi nhiều người nói chen nhau, nên cần người nghe lại và biên tập."
      }
    ],
    "cover": "/assets/img/blog/bien-ban-hop-online.svg",
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
    "slug": "chuyen-pdf-scan-sang-word",
    "cat": "Mẹo hay",
    "date": "2026-10-13",
    "tags": [
      "PDF sang Word",
      "PDF scan",
      "Chuyển đổi tài liệu",
      "Định dạng"
    ],
    "title": "Chuyển PDF scan sang Word giữ nguyên định dạng: 5 cách và khi nào cần người gõ",
    "seoTitle": "Chuyển PDF scan sang Word giữ định dạng: 5 cách",
    "excerpt": "PDF scan không chỉnh sửa được? So sánh 5 cách chuyển PDF scan sang Word: Word, Google Drive, phần mềm OCR, công cụ online và đánh máy lại - ưu, nhược điểm từng cách.",
    "body": "<p class=\"lead\">“Tôi chỉ có bản PDF, làm sao sửa nội dung?” là câu hỏi chúng tôi nhận mỗi ngày. Trước khi chọn công cụ, cần phân biệt hai loại PDF: <b>PDF văn bản</b> (xuất từ Word, bôi đen được chữ) và <b>PDF scan</b> (chụp hoặc quét từ giấy, mỗi trang là một bức ảnh). Bài viết này tập trung vào loại thứ hai - loại khó nhất.</p>\n\n<h2>Kiểm tra nhanh: PDF của bạn thuộc loại nào?</h2>\n<p>Mở PDF, thử bôi đen một dòng chữ. Nếu chọn được từng chữ và sao chép sang Word, đó là PDF văn bản. Nếu cả trang bị chọn như một khối ảnh, hoặc sao chép ra toàn ký tự lạ, đó là PDF scan hoặc PDF dùng phông chữ nhúng cũ (xem bài <a href=\"/blog/sua-loi-font-tcvn3-vni-unicode\">sửa lỗi font TCVN3, VNI</a>).</p>\n\n<h2>5 cách chuyển PDF scan sang Word</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cách</th><th>Ưu điểm</th><th>Hạn chế</th><th>Phù hợp</th></tr>\n  <tr><td><b>1. Mở bằng Microsoft Word</b></td><td>Có sẵn, nhanh</td><td>Bố cục scan dễ vỡ, sai dấu</td><td>Văn bản ngắn, in rõ</td></tr>\n  <tr><td><b>2. Google Drive (mở bằng Google Docs)</b></td><td>Miễn phí, hỗ trợ tiếng Việt</td><td>Mất định dạng, bảng biểu</td><td>Lấy nội dung thô</td></tr>\n  <tr><td><b>3. Phần mềm OCR chuyên dụng</b></td><td>Nhận dạng tốt, giữ bố cục khá</td><td>Có phí, vẫn cần soát lỗi</td><td>Khối lượng lớn, in đẹp</td></tr>\n  <tr><td><b>4. Công cụ chuyển đổi trực tuyến</b></td><td>Tiện, không cài đặt</td><td>Rủi ro bảo mật, giới hạn trang</td><td>Tài liệu không nhạy cảm</td></tr>\n  <tr><td><b>5. Đánh máy lại thủ công</b></td><td>Chính xác, đúng định dạng</td><td>Tốn thời gian hoặc chi phí</td><td>Viết tay, scan mờ, pháp lý</td></tr>\n</table></div>\n\n<h3>Cách 2 chi tiết: Google Drive</h3>\n<ol class=\"steps\">\n  <li>Tải tệp PDF lên Google Drive.</li>\n  <li>Nhấp chuột phải vào tệp, chọn <b>Mở bằng → Google Tài liệu</b>.</li>\n  <li>Google tạo tài liệu mới: phía trên là ảnh trang gốc, phía dưới là văn bản đã nhận dạng.</li>\n  <li>Sao chép phần văn bản sang Word, soát lỗi và định dạng lại.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Cách này phù hợp để lấy nội dung chữ. Bảng biểu, cột, chú thích chân trang thường bị dồn thành đoạn văn liền và phải dựng lại bằng tay.</div></div>\n\n<h2>Bí quyết để kết quả nhận dạng tốt hơn</h2>\n<ul>\n  <li><b>Scan ở độ phân giải 300 dpi</b>, chế độ đen trắng hoặc xám cho văn bản.</li>\n  <li><b>Chụp thẳng</b>, đủ sáng, không bóng tay - xem <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu bằng điện thoại</a>.</li>\n  <li>Xoay đúng chiều trang và cắt bỏ viền đen trước khi chuyển.</li>\n  <li>Tách các trang có bảng phức tạp để xử lý riêng.</li>\n</ul>\n\n<h2>Khi nào nên chọn đánh máy lại?</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Máy khó đọc tốt</b>Chữ viết tay; bản photo nhiều đời; dấu mộc, chữ ký đè chữ; bảng ô gộp; công thức Toán, Lý, Hóa; tiếng Việt xen ngoại ngữ.</div>\n  <div class=\"good\"><b>Đánh máy lại đảm bảo</b>Đúng từng chữ, từng con số; bảng Word thật (không dùng phím cách); tiêu đề bằng Styles để có mục lục tự động; giữ bố cục như bản gốc.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Với hợp đồng, hồ sơ pháp lý, báo cáo tài chính, đừng chỉ dựa vào kết quả nhận dạng tự động. Một lỗi số tiền hay ngày tháng có thể dẫn đến tranh chấp.</div></div>\n\n<h2>Giữ nguyên định dạng nghĩa là gì?</h2>\n<p>“Giữ định dạng” không chỉ là giống về hình thức. Một tệp Word tốt cần:</p>\n<ul>\n  <li>Đoạn văn liền mạch, không ngắt dòng bằng Enter giữa câu.</li>\n  <li>Tiêu đề dùng Heading, danh sách dùng định dạng danh sách thật.</li>\n  <li>Bảng dựng bằng chức năng Table, có thể sửa từng ô.</li>\n  <li>Số trang, đầu trang, chân trang tự động.</li>\n</ul>\n<p>Khi các yếu tố này đúng, bạn có thể chỉnh sửa, cập nhật tài liệu nhiều năm sau mà bố cục không bị xô lệch.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Phân biệt PDF văn bản và PDF scan trước khi chọn cách chuyển.</li><li>Google Drive miễn phí nhưng mất định dạng; phần mềm OCR tốt hơn nhưng vẫn cần soát.</li><li>Scan 300 dpi, chụp thẳng, đủ sáng để tăng độ chính xác.</li><li>Tài liệu viết tay, scan mờ, pháp lý nên đánh máy lại.</li></ul></div>\n<p>Cần chuyển nhanh và chính xác? Xem dịch vụ <a href=\"/dich-vu/pdf-sang-word\">chuyển PDF sang Word</a> của chúng tôi - giữ nguyên bố cục, có biên tập viên kiểm tra.</p>",
    "faq": [
      {
        "q": "Vì sao PDF của tôi không sao chép được chữ?",
        "a": "Vì đó là PDF scan: mỗi trang là một hình ảnh, không chứa ký tự. Cần nhận dạng ký tự (OCR) hoặc đánh máy lại để có văn bản chỉnh sửa được."
      },
      {
        "q": "Mở PDF bằng Word có giữ nguyên định dạng không?",
        "a": "Với PDF tạo từ Word, kết quả thường khá tốt. Với PDF scan, bố cục dễ bị vỡ: bảng lệch, chữ thành khung văn bản rời rạc, sai dấu tiếng Việt."
      },
      {
        "q": "Chuyển PDF sang Word mất bao lâu nếu thuê người?",
        "a": "Tùy số trang và độ khó. Tài liệu vài chục trang chữ in thường xong trong 24–48 giờ; có thể chọn gấp từ 6 giờ."
      }
    ],
    "cover": "/assets/img/blog/chuyen-pdf-scan-sang-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "cong-tac-vien-gioi-thieu-dich-vu-danh-may",
    "cat": "Đối tác",
    "date": "2026-10-12",
    "tags": [
      "Cộng tác viên",
      "Đối tác",
      "Kiếm thêm thu nhập",
      "Dịch vụ đánh máy"
    ],
    "title": "Cộng tác viên giới thiệu dịch vụ đánh máy: cách kiếm thêm thu nhập chính đáng cho sinh viên, giáo viên, dân văn phòng",
    "seoTitle": "Cộng tác viên giới thiệu dịch vụ đánh máy: kiếm thêm chính đáng",
    "excerpt": "Sinh viên, giáo viên, dân văn phòng làm cộng tác viên giới thiệu dịch vụ đánh máy, nhận 30% mỗi đơn: miễn phí, minh bạch, cách chia sẻ không spam.",
    "body": "<p class=\"lead\">“Kiếm tiền online” thường gắn với những lời mời mập mờ: đóng phí, nạp tiền, làm nhiệm vụ. Giới thiệu dịch vụ đánh máy thì khác: bạn giới thiệu một dịch vụ có thật cho người có nhu cầu thật, và nhận hoa hồng minh bạch khi đơn hoàn thành. Bài viết dành cho sinh viên, giáo viên, nhân viên văn phòng - những người thường xuyên gặp ai đó cần gõ văn bản, đánh máy tài liệu viết tay.</p>\n<figure><img src=\"/assets/img/blog/fig-cong-tac-vien.svg\" alt=\"Quy trình cộng tác viên giới thiệu dịch vụ đánh máy\" loading=\"lazy\" width=\"960\"><figcaption>Chia sẻ liên kết với người có nhu cầu → khách đặt hàng, thanh toán trực tiếp → đơn hoàn thành → hoa hồng được duyệt và chi trả hằng tháng.</figcaption></figure>\n\n<h2>Ai phù hợp làm cộng tác viên?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bạn là</th><th>Bạn thường gặp nhu cầu</th></tr>\n  <tr><td>Sinh viên, lớp trưởng, cán bộ đoàn hội</td><td>Bạn bè cần gõ tiểu luận, vở ghi, định dạng luận văn</td></tr>\n  <tr><td>Giáo viên, tổ trưởng chuyên môn</td><td>Đồng nghiệp cần đánh máy đề thi, giáo án có công thức</td></tr>\n  <tr><td>Nhân viên hành chính, kế toán</td><td>Phòng ban cần số hóa hồ sơ, sổ sách sang Excel</td></tr>\n  <tr><td>Người làm dịch thuật, công chứng</td><td>Khách cần đánh máy bản gốc trước khi dịch</td></tr>\n  <tr><td>Quản trị nhóm, fanpage học tập</td><td>Thành viên hỏi chỗ gõ văn bản uy tín</td></tr>\n</table></div>\n\n<h2>Vì sao đây là cách kiếm thêm chính đáng?</h2>\n<ul>\n  <li><b>Miễn phí tham gia</b>: không đặt cọc, không mua gói, không nạp tiền.</li>\n  <li><b>Dịch vụ có thật</b>: khách nhận sản phẩm cụ thể - file Word, Excel, LaTeX.</li>\n  <li><b>Minh bạch</b>: theo dõi từng đơn, từng khoản hoa hồng trong trang đối tác.</li>\n  <li><b>Không cầm tiền khách</b>: khách thanh toán trực tiếp, bạn không chịu rủi ro tài chính.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nếu ai đó mời bạn “làm cộng tác viên đánh máy” nhưng yêu cầu đóng phí trước, nạp tiền để mở nhiệm vụ - đó là dấu hiệu lừa đảo. Xem <a href=\"/blog/lam-danh-may-tai-nha-tranh-lua-dao\">7 dấu hiệu lừa đảo việc làm online</a>.</div></div>\n\n<h2>Cách bắt đầu</h2>\n<ol class=\"steps\">\n  <li><a href=\"/dang-ky-doi-tac\">Đăng ký đối tác</a>: ô tên cửa hàng điền tên bạn hoặc tên nhóm.</li>\n  <li>Chờ duyệt (thường trong 24 giờ làm việc), nhận mã giới thiệu.</li>\n  <li>Lấy liên kết và tin nhắn mẫu trong trang đối tác.</li>\n  <li>Chia sẻ đúng lúc, đúng người có nhu cầu.</li>\n  <li>Theo dõi đơn, nhận hoa hồng hằng tháng - chi tiết tại <a href=\"/blog/huong-dan-tro-thanh-doi-tac-danh-may\">hướng dẫn đối tác từng bước</a>.</li>\n</ol>\n\n<h2>Chia sẻ thế nào để hiệu quả mà không phiền?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Nên</b>Chia sẻ khi có người hỏi hoặc đang cần; kèm lời khuyên hữu ích (cách chụp tài liệu, cách ghi yêu cầu); nói rõ đây là liên kết giới thiệu; giới thiệu đúng dịch vụ phù hợp nhu cầu.</div>\n  <div class=\"bad\"><b>Không nên</b>Dán liên kết hàng loạt vào mọi nhóm; nhắn tin cho người lạ; hứa hẹn sai (giá, thời hạn); tự đặt đơn bằng mã của mình.</div>\n</div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Cách tự nhiên nhất là chia sẻ kiến thức: gửi bài <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">mẹo chụp tài liệu</a> hay <a href=\"/blog/tao-muc-luc-tu-dong-word\">tạo mục lục tự động</a> cho bạn bè, kèm một câu “nếu không có thời gian thì gửi bên này gõ hộ”.</div></div>\n\n<h2>Ước tính thu nhập</h2>\n<p>Hoa hồng = giá trị đơn hoàn thành × 30%. Ví dụ, một bạn sinh viên giới thiệu 5 bạn cùng lớp gõ tiểu luận, mỗi đơn khoảng 200.000 đ, nhận khoảng 300.000 đ trong tháng đó. Một giáo viên giới thiệu đồng nghiệp số hóa bộ đề có công thức (giá trị đơn cao hơn) có thể nhận nhiều hơn. Đây là ví dụ minh họa; thu nhập thực tế phụ thuộc số đơn hoàn thành.</p>\n\n<h2>Minh bạch với người được giới thiệu</h2>\n<p>Hãy nói rõ bạn nhận hoa hồng từ việc giới thiệu. Sự minh bạch giúp giữ lòng tin - và người được giới thiệu vẫn trả đúng giá niêm yết, có thể dùng mã giảm giá công khai của dịch vụ. Thông tin cá nhân của họ (tên, email, số điện thoại) không hiển thị với bạn trong trang đối tác.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Đối tác tự chịu trách nhiệm kê khai thuế thu nhập theo quy định. Lưu lịch sử chi trả trong trang đối tác để đối chiếu khi cần.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Bắt đầu làm cộng tác viên</b>Miễn phí, không đặt cọc - nhận mã giới thiệu sau khi duyệt. <a href=\"/dang-ky-doi-tac\" class=\"button\">Đăng ký ngay</a></div>\n\n<h2>Ba tình huống giới thiệu thực tế</h2>\n<ol class=\"steps\">\n  <li><b>Lớp trưởng</b>: cả lớp phải nộp tiểu luận đánh máy nhưng nhiều bạn chỉ có bản viết tay - gửi liên kết kèm hướng dẫn chụp ảnh rõ nét, các bạn tự đặt và thanh toán.</li>\n  <li><b>Tổ trưởng chuyên môn</b>: tổ cần số hóa bộ đề có công thức - giới thiệu dịch vụ đánh máy công thức, cả tổ gộp đơn để thống nhất định dạng.</li>\n  <li><b>Nhân viên hành chính</b>: phòng cần chuyển sổ sách viết tay sang Excel - gửi liên kết cho người phụ trách, kèm bài hướng dẫn chuẩn bị chứng từ.</li>\n</ol>\n<p>Điểm chung: bạn giúp người khác giải quyết đúng vấn đề họ đang gặp, và họ quyết định đặt hàng hay không.</p>\n<h2>Câu hỏi thường gặp của cộng tác viên mới</h2>\n<ul>\n  <li><b>Có giới hạn số đơn không?</b> Không giới hạn; mọi đơn hoàn thành qua mã của bạn đều được tính.</li>\n  <li><b>Khách đặt lại lần hai có được tính?</b> Có, nếu khách vẫn trong thời gian ghi nhận hoặc nhập mã của bạn khi đặt.</li>\n  <li><b>Có cần hóa đơn, hợp đồng?</b> Điều khoản chương trình được hiển thị khi đăng ký; lịch sử chi trả lưu trong trang đối tác.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Sinh viên, giáo viên, dân văn phòng đều có thể làm cộng tác viên.</li><li>Miễn phí, minh bạch, không cầm tiền khách.</li><li>Chia sẻ đúng lúc, đúng nhu cầu, không spam.</li><li>Minh bạch về hoa hồng để giữ lòng tin.</li></ul></div>",
    "faq": [
      {
        "q": "Cá nhân không có cửa hàng có làm đối tác được không?",
        "a": "Được. Khi đăng ký, ô “Tên cửa hàng/đơn vị” có thể điền tên của bạn hoặc tên nhóm; bạn vẫn nhận mã giới thiệu, liên kết, QR như cửa hàng."
      },
      {
        "q": "Cộng tác viên có phải đặt cọc hay mua gói không?",
        "a": "Không. Chương trình đối tác Đánh máy 247 miễn phí hoàn toàn. Bất kỳ lời mời nào yêu cầu đóng phí để “làm cộng tác viên” đều đáng nghi ngờ."
      },
      {
        "q": "Tự đặt đơn bằng mã của mình có được hoa hồng không?",
        "a": "Không. Đơn trùng email hoặc số điện thoại với đối tác không được tính hoa hồng."
      }
    ],
    "cover": "/assets/img/blog/cong-tac-vien-gioi-thieu-dich-vu-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "go-tai-lieu-tieng-anh-thue",
    "cat": "Dịch thuật",
    "date": "2026-10-12",
    "tags": [
      "Tiếng Anh",
      "Song ngữ",
      "Gõ tài liệu thuê",
      "Chính tả"
    ],
    "title": "Thuê gõ tài liệu tiếng Anh và song ngữ Anh - Việt: lưu ý về chính tả, thuật ngữ và định dạng",
    "seoTitle": "Thuê gõ tài liệu tiếng Anh và song ngữ: lưu ý quan trọng",
    "excerpt": "Thuê gõ tài liệu tiếng Anh, song ngữ: lưu ý dấu thập phân, ngày tháng, chính tả Anh - Mỹ, ký tự đặc biệt, thuật ngữ và cách ghi yêu cầu.",
    "body": "<p class=\"lead\">Tài liệu tiếng Anh cần gõ lại ngày càng nhiều: giáo trình nước ngoài chỉ có bản photo, hồ sơ xin học bổng viết tay, catalogue kỹ thuật, hợp đồng song ngữ. Gõ ngoại ngữ không chỉ cần gõ nhanh mà còn cần hiểu chính tả, thuật ngữ và quy ước trình bày khác với tiếng Việt.</p>\n\n<h2>Những khác biệt khi gõ tiếng Anh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nội dung</th><th>Tiếng Anh</th><th>Tiếng Việt</th></tr>\n  <tr><td>Dấu thập phân</td><td>3.5</td><td>3,5</td></tr>\n  <tr><td>Phân cách hàng nghìn</td><td>1,250,000</td><td>1.250.000</td></tr>\n  <tr><td>Ngày tháng (Mỹ)</td><td>10/18/2026 hoặc October 18, 2026</td><td>18/10/2026</td></tr>\n  <tr><td>Dấu ngoặc kép</td><td>“ ” và ‘ ’ (dấu nháy đơn trong từ: don’t)</td><td>“ ”</td></tr>\n  <tr><td>Viết hoa tiêu đề</td><td>Title Case hoặc Sentence case theo quy ước</td><td>Viết hoa chữ đầu câu</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nhầm dấu thập phân là lỗi nguy hiểm nhất khi gõ bảng số liệu tiếng Anh: 3.500 trong tiếng Anh là ba phẩy năm, trong tiếng Việt là ba nghìn năm trăm. Luôn giữ nguyên quy ước của bản gốc.</div></div>\n\n<h2>Chính tả Anh - Anh và Anh - Mỹ</h2>\n<p>colour/color, organisation/organization, centre/center… Người gõ cần giữ đúng chuẩn của bản gốc. Hãy tắt tự động sửa chính tả hoặc đặt ngôn ngữ kiểm tra đúng (English (US) hay English (UK)) để Word không tự “sửa” sai.</p>\n\n<h2>Ký tự đặc biệt thường gặp</h2>\n<ul>\n  <li>Dấu gạch dài (—), gạch nối số (–) trong khoảng 10–20, ký hiệu ©, ®, ™, §.</li>\n  <li>Chữ có dấu trong tên riêng: café, naïve, Zürich.</li>\n  <li>Đơn vị đo lường Anh - Mỹ: in, ft, lb, °F.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Khi bản gốc có thuật ngữ chuyên ngành, gửi kèm danh sách thuật ngữ hoặc tài liệu tham khảo. Người gõ đọc chính xác hơn những từ hiếm gặp trên bản photo mờ.</div></div>\n\n<h2>Tài liệu song ngữ Anh - Việt</h2>\n<p>Với hợp đồng, quy trình, tài liệu đào tạo song ngữ, cần thống nhất bố cục: hai cột song song hay xen kẽ từng đoạn. Hướng dẫn chi tiết: <a href=\"/blog/trinh-bay-ban-dich-song-ngu\">trình bày bản dịch song ngữ</a>. Đặt ngôn ngữ kiểm tra chính tả riêng cho từng phần để Word không gạch đỏ sai.</p>\n\n<h2>Chuẩn bị yêu cầu khi thuê gõ</h2>\n<ol class=\"steps\">\n  <li>Ghi rõ: giữ nguyên văn hay sửa lỗi chính tả, chuẩn Anh - Anh hay Anh - Mỹ.</li>\n  <li>Gửi danh sách tên riêng, thuật ngữ, từ viết tắt.</li>\n  <li>Nêu định dạng: phông, cỡ chữ, cách trình bày tiêu đề.</li>\n  <li>Với tài liệu chuẩn bị dịch thuật, yêu cầu không ngắt dòng cứng - xem <a href=\"/blog/danh-may-ban-goc-truoc-khi-dich\">đánh máy bản gốc trước khi dịch</a>.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Tài liệu tiếng Trung, Hàn, Nhật có yêu cầu riêng về bộ gõ và phông chữ - xem <a href=\"/blog/go-tieng-trung-han-nhat\">gõ tiếng Trung, Hàn, Nhật</a>.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Có tài liệu tiếng Anh cần gõ lại?</b>Gửi ảnh chụp hoặc PDF, ghi rõ yêu cầu - nhận file Word chính xác. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n\n<h2>Kiểm tra bản gõ tiếng Anh</h2>\n<ol class=\"steps\">\n  <li>Chạy kiểm tra chính tả với đúng ngôn ngữ (English US/UK); xem kỹ các từ bị gạch đỏ là tên riêng hay lỗi thật.</li>\n  <li>Soát số liệu trong bảng, chú ý dấu thập phân và đơn vị.</li>\n  <li>Kiểm tra dấu nháy trong từ (don’t, it’s) không bị đổi thành ký tự lạ.</li>\n  <li>Đối chiếu tiêu đề, mục với bản gốc để không sót phần nào.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Với tài liệu học thuật tiếng Anh, giữ nguyên định dạng trích dẫn của bản gốc (APA, IEEE…) - xem <a href=\"/blog/trich-dan-apa-ieee-word\">trích dẫn trong Word</a>.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Giữ nguyên quy ước dấu thập phân, ngày tháng của bản gốc.</li><li>Thống nhất chuẩn chính tả Anh - Anh hay Anh - Mỹ.</li><li>Gửi kèm danh sách thuật ngữ, tên riêng.</li><li>Tài liệu song ngữ cần thống nhất bố cục và ngôn ngữ kiểm tra chính tả.</li></ul></div>",
    "faq": [
      {
        "q": "Gõ tài liệu tiếng Anh có giữ nguyên lỗi trong bản gốc không?",
        "a": "Mặc định nên giữ nguyên văn bản gốc, đặc biệt với tài liệu pháp lý, học thuật. Nếu muốn sửa lỗi chính tả, hãy ghi rõ yêu cầu và chọn thêm dịch vụ biên tập."
      },
      {
        "q": "Chọn chính tả Anh - Anh hay Anh - Mỹ?",
        "a": "Giữ theo bản gốc. Nếu tài liệu trộn lẫn, hãy chọn một chuẩn theo mục đích sử dụng (ví dụ nộp hồ sơ cho trường Mỹ dùng Anh - Mỹ)."
      },
      {
        "q": "Gõ thuê có kèm dịch sang tiếng Việt không?",
        "a": "Đánh máy 247 nhận gõ tài liệu tiếng Anh và trình bày bản song ngữ bạn cung cấp, không cung cấp dịch vụ dịch thuật."
      }
    ],
    "cover": "/assets/img/blog/go-tai-lieu-tieng-anh-thue.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "tao-muc-luc-tu-dong-word",
    "cat": "Mẹo hay",
    "date": "2026-10-12",
    "tags": [
      "Mục lục tự động",
      "Word",
      "Luận văn",
      "Heading"
    ],
    "title": "Tạo mục lục tự động trong Word cho luận văn, báo cáo: từ Heading đến danh mục bảng biểu",
    "seoTitle": "Tạo mục lục tự động trong Word cho luận văn",
    "excerpt": "Hướng dẫn tạo mục lục tự động trong Word bằng Heading, cập nhật số trang, danh mục bảng biểu và đánh số trang La Mã cho luận văn.",
    "body": "<p class=\"lead\">Mục lục là trang đầu tiên hội đồng nhìn vào, và cũng là nơi lỗi trình bày lộ rõ nhất: số trang lệch, tiêu đề trong mục lục khác tiêu đề trong bài, dấu chấm dẫn không thẳng. Tất cả các lỗi này biến mất khi bạn để Word tạo mục lục tự động. Bí quyết nằm ở một khái niệm: <b>Heading</b>.</p>\n<figure><img src=\"/assets/img/blog/fig-muc-luc-word.svg\" alt=\"Tiêu đề gán Heading được Word tổng hợp thành mục lục tự động\" loading=\"lazy\" width=\"960\"><figcaption>Gán Heading 1, 2, 3 cho tiêu đề chương, mục, tiểu mục - Word tự tạo mục lục với số trang chính xác.</figcaption></figure>\n\n<h2>Bước 1: Gán Heading cho tiêu đề</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cấp</th><th>Dùng cho</th><th>Phím tắt</th></tr>\n  <tr><td>Heading 1</td><td>Tên chương: CHƯƠNG 1. TỔNG QUAN</td><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd></td></tr>\n  <tr><td>Heading 2</td><td>Mục: 1.1. Cơ sở lý thuyết</td><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd></td></tr>\n  <tr><td>Heading 3</td><td>Tiểu mục: 1.1.1. Khái niệm</td><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd></td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Chỉnh kiểu chữ của Heading một lần (nhấp phải vào Heading trong Styles → Modify): phông, cỡ, đậm, khoảng cách trước/sau. Mọi tiêu đề cùng cấp sẽ đồng bộ ngay.</div></div>\n\n<h2>Bước 2: Chèn mục lục</h2>\n<ol class=\"steps\">\n  <li>Đặt con trỏ ở trang mục lục (thường sau lời cam đoan, lời cảm ơn).</li>\n  <li>Vào <b>References → Table of Contents → Custom Table of Contents</b>.</li>\n  <li>Chọn số cấp hiển thị (<b>Show levels</b>: 3), kiểu dấu dẫn (<b>Tab leader</b>: dấu chấm).</li>\n  <li>Bấm OK - mục lục xuất hiện cùng số trang, có thể nhấp để nhảy tới nội dung.</li>\n</ol>\n\n<h2>Bước 3: Cập nhật khi sửa bài</h2>\n<p>Mỗi khi thêm, bớt nội dung, nhấp vào mục lục và nhấn <kbd>F9</kbd>. Chọn <b>Update entire table</b> nếu có đổi tên tiêu đề. Trước khi in, nên chọn toàn bộ văn bản (<kbd>Ctrl</kbd> + <kbd>A</kbd>) rồi nhấn <kbd>F9</kbd> để cập nhật mọi trường (mục lục, danh mục, tham chiếu chéo).</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đừng sửa trực tiếp chữ trong mục lục - lần cập nhật sau sẽ ghi đè. Hãy sửa tiêu đề trong bài rồi cập nhật mục lục.</div></div>\n\n<h2>Danh mục hình và bảng biểu</h2>\n<p>Luận văn thường yêu cầu “Danh mục bảng” và “Danh mục hình”. Cách làm tự động:</p>\n<ul>\n  <li>Chú thích bảng, hình bằng <b>References → Insert Caption</b> (tạo nhãn “Bảng”, “Hình” bằng nút New Label).</li>\n  <li>Bật <b>Include chapter number</b> để có dạng “Bảng 2.3”.</li>\n  <li>Chèn danh mục bằng <b>References → Insert Table of Figures</b>, chọn nhãn tương ứng.</li>\n</ul>\n\n<h2>Đánh số trang La Mã cho phần mở đầu</h2>\n<ol class=\"steps\">\n  <li>Đặt con trỏ trước “CHƯƠNG 1”, vào <b>Layout → Breaks → Next Page</b>.</li>\n  <li>Mở chân trang của chương 1, tắt <b>Link to Previous</b>.</li>\n  <li>Phần mở đầu: <b>Page Number → Format</b> chọn i, ii, iii. Phần nội dung: chọn 1, 2, 3 và <b>Start at: 1</b>.</li>\n</ol>\n\n<h2>Lỗi thường gặp và cách sửa</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Hiện tượng</th><th>Nguyên nhân</th><th>Cách sửa</th></tr>\n  <tr><td>Đoạn văn thường lọt vào mục lục</td><td>Đoạn đó bị gán Heading hoặc Outline Level</td><td>Đổi về Normal, cập nhật mục lục</td></tr>\n  <tr><td>Thiếu tiêu đề</td><td>Tiêu đề gõ tay, chỉ in đậm</td><td>Gán Heading tương ứng</td></tr>\n  <tr><td>Mục lục hiện “Error! Bookmark not defined”</td><td>Xóa tiêu đề khi chưa cập nhật</td><td>Cập nhật toàn bộ mục lục</td></tr>\n  <tr><td>Số trang mục lục khác số trang in</td><td>Chưa cập nhật trước khi in/xuất PDF</td><td><kbd>Ctrl</kbd> + <kbd>A</kbd> rồi <kbd>F9</kbd></td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Mở <b>View → Navigation Pane</b> để thấy cây tiêu đề bên trái: vừa kiểm tra cấu trúc, vừa kéo thả để sắp xếp lại chương mục.</div></div>\n\n<h2>Giữ mục lục khi xuất PDF</h2>\n<p>Khi nộp bản điện tử, hãy xuất PDF bằng <b>File → Save As → PDF → Options</b> và chọn <b>Create bookmarks using: Headings</b>. Người đọc sẽ thấy cây mục lục ở thanh bên của trình đọc PDF, nhấp vào là nhảy đến chương mục tương ứng. Mục lục trong bài cũng giữ nguyên liên kết, giúp hội đồng tra cứu nhanh khi chấm.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Gán Heading 1-2-3 cho chương, mục, tiểu mục.</li><li>Chèn mục lục ở References, cập nhật bằng F9.</li><li>Dùng Insert Caption để có danh mục bảng, hình tự động.</li><li>Section Break giúp đánh số trang La Mã và Ả Rập riêng.</li></ul></div>\n<p>Không có thời gian chỉnh định dạng? Dịch vụ <a href=\"/dich-vu/dinh-dang-tai-lieu\">định dạng tài liệu</a> trình bày luận văn theo đúng mẫu của trường bạn.</p>",
    "faq": [
      {
        "q": "Vì sao mục lục tự động không hiện tiêu đề của tôi?",
        "a": "Vì tiêu đề chưa được gán kiểu Heading (Heading 1, 2, 3). Word chỉ đưa vào mục lục những đoạn có kiểu tiêu đề hoặc có cấp độ dàn ý (Outline Level)."
      },
      {
        "q": "Làm sao cập nhật số trang trong mục lục?",
        "a": "Nhấp vào mục lục, nhấn F9 hoặc chọn Update Table, rồi chọn Update page numbers only (chỉ số trang) hoặc Update entire table (cả tiêu đề)."
      },
      {
        "q": "Đánh số trang La Mã cho phần mở đầu thế nào?",
        "a": "Chèn Section Break (Next Page) giữa phần mở đầu và chương 1, bỏ Link to Previous ở chân trang của phần sau, rồi định dạng số trang riêng cho từng phần."
      }
    ],
    "cover": "/assets/img/blog/tao-muc-luc-tu-dong-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "danh-may-giao-an-de-cuong-viet-tay",
    "cat": "Học thuật",
    "date": "2026-10-11",
    "tags": [
      "Giáo án",
      "Đánh máy tài liệu viết tay",
      "Giáo viên",
      "Đề cương"
    ],
    "title": "Đánh máy giáo án, đề cương viết tay cho giáo viên: tiết kiệm thời gian soạn bài mà vẫn đúng chuẩn trình bày",
    "seoTitle": "Đánh máy giáo án, đề cương viết tay cho giáo viên",
    "excerpt": "Số hóa giáo án, đề cương, ngân hàng câu hỏi viết tay cho giáo viên: chuẩn bị, mẫu trình bày, công thức, hình vẽ, kiểm tra và tổ chức kho tài liệu.",
    "body": "<p class=\"lead\">Nhiều thầy cô có cả chồng giáo án, đề cương, ngân hàng câu hỏi viết tay tích lũy qua nhiều năm - kho kinh nghiệm quý giá nhưng khó chia sẻ, khó chỉnh sửa và đang phai mực theo thời gian. Đánh máy giúp số hóa kho tài liệu đó, tiết kiệm hàng chục giờ soạn bài mỗi học kỳ. Bài viết hướng dẫn cách chuẩn bị và yêu cầu để bản đánh máy đúng chuẩn, dùng được ngay.</p>\n<figure><img src=\"/assets/img/blog/fig-giao-an-viet-tay.svg\" alt=\"Quy trình số hóa giáo án, đề cương viết tay\" loading=\"lazy\" width=\"960\"><figcaption>Phân loại theo khối, chủ đề → chụp/scan → đánh máy theo mẫu giáo án → gõ công thức, vẽ lại hình → kiểm tra → lưu kho chia sẻ tổ bộ môn.</figcaption></figure>\n\n<h2>Vì sao nên số hóa giáo án viết tay?</h2>\n<ul>\n  <li><b>Chỉnh sửa nhanh</b>: cập nhật theo chương trình mới mà không phải viết lại từ đầu.</li>\n  <li><b>Chia sẻ dễ dàng</b>: gửi đồng nghiệp, tổ bộ môn, giáo viên mới.</li>\n  <li><b>Tái sử dụng</b>: ghép thành đề cương ôn tập, đề kiểm tra, phiếu học tập.</li>\n  <li><b>Lưu giữ lâu dài</b>: không lo giấy ố, mực phai, thất lạc.</li>\n</ul>\n\n<h2>Bước 1: Phân loại trước khi gửi</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại tài liệu</th><th>Lưu ý khi đánh máy</th></tr>\n  <tr><td>Giáo án</td><td>Theo mẫu trường: mục tiêu, chuẩn bị, tiến trình hoạt động</td></tr>\n  <tr><td>Đề cương ôn tập</td><td>Đề mục rõ ràng, có thể gộp nhiều bài</td></tr>\n  <tr><td>Đề kiểm tra, ngân hàng câu hỏi</td><td>Định dạng “Câu N.”, phương án A. B. C. D. để trộn đề</td></tr>\n  <tr><td>Phiếu học tập</td><td>Ô trống, bảng để học sinh điền</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Đặt tên ảnh theo quy tắc khối - chủ đề - bài, ví dụ <span class=\"mono\">Toan10_Ham-so_Bai2_tr1.jpg</span>. Chuyên viên ghép đúng thứ tự, thầy cô dễ đối chiếu khi nhận.</div></div>\n\n<h2>Bước 2: Gửi mẫu giáo án và yêu cầu định dạng</h2>\n<ol class=\"steps\">\n  <li>Gửi kèm một giáo án mẫu (Word) đang dùng ở trường: các mục, bảng hoạt động, phông chữ, lề.</li>\n  <li>Nêu rõ cỡ chữ, giãn dòng, cách đánh số mục (I, 1, a).</li>\n  <li>Ghi rõ cách gõ công thức: Equation, MathType hay LaTeX.</li>\n  <li>Với đề trắc nghiệm, nêu quy ước đánh dấu đáp án đúng của phần mềm trộn đề thầy cô dùng.</li>\n</ol>\n\n<h2>Bước 3: Công thức và hình vẽ</h2>\n<p>Đây là phần tốn thời gian nhất khi thầy cô tự gõ. Chuyên viên đánh máy công thức xử lý:</p>\n<ul>\n  <li><b>Toán</b>: phân số, căn, tích phân, ma trận, hệ phương trình - xem <a href=\"/blog/go-ma-tran-he-phuong-trinh-word\">gõ ma trận, hệ phương trình</a>.</li>\n  <li><b>Vật lý</b>: đại lượng nghiêng, đơn vị đứng, vectơ, sơ đồ mạch - xem <a href=\"/blog/ky-hieu-dien-hoc-so-do-mach\">ký hiệu điện học</a>.</li>\n  <li><b>Hóa học</b>: chỉ số, điện tích ion, phương trình phản ứng, số oxi hóa - xem <a href=\"/blog/phuong-trinh-oxi-hoa-khu\">trình bày oxi hóa - khử</a>.</li>\n  <li><b>Hình vẽ</b>: vẽ lại hình học, đồ thị, bảng biến thiên dạng vector - xem <a href=\"/blog/bang-bien-thien-word-latex\">bảng biến thiên chuẩn</a>.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Phụ phí gõ công thức Toán - Hóa là 50%, LaTeX là 60% so với đơn giá cơ bản theo thời hạn. Giá hiển thị đầy đủ ở trang đặt hàng trước khi thanh toán.</div></div>\n\n<h2>Bước 4: Kiểm tra khi nhận</h2>\n<ul>\n  <li>Giải lại vài bài tập ngẫu nhiên để chắc không sai số, sai dấu.</li>\n  <li>Đối chiếu hình vẽ với giả thiết (vuông góc, trung điểm, tỉ lệ).</li>\n  <li>Kiểm tra định dạng câu hỏi trắc nghiệm trước khi đưa vào phần mềm trộn đề.</li>\n  <li>Dùng <a href=\"/blog/kiem-tra-file-go-thue-nghiem-thu\">checklist nghiệm thu 10 điểm</a>.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chụp, đưa vào đề phát hành nội dung, hình vẽ từ sách, tài liệu có bản quyền mà chưa được phép. Hình vẽ lại và câu hỏi tự soạn giúp tránh rủi ro này.</div></div>\n\n<h2>Bước 5: Tổ chức kho tài liệu sau khi số hóa</h2>\n<ol class=\"steps\">\n  <li>Thư mục theo khối lớp → chủ đề → loại tài liệu (giáo án, đề, phiếu).</li>\n  <li>Tên tệp thống nhất, có năm học để biết phiên bản mới nhất.</li>\n  <li>Lưu trên ổ đám mây của trường hoặc tổ bộ môn, phân quyền xem/sửa.</li>\n  <li>Giữ bản PDF để in, bản Word để sửa.</li>\n</ol>\n\n<h2>Tiết kiệm chi phí cho thầy cô và tổ bộ môn</h2>\n<ul>\n  <li>Số hóa vào dịp nghỉ hè, chọn thời hạn dài để có đơn giá thấp.</li>\n  <li>Gộp đơn cả tổ để thống nhất định dạng ngay từ đầu.</li>\n  <li>Ưu tiên tài liệu dùng nhiều nhất trước, phần còn lại số hóa dần.</li>\n  <li>Khối lượng lớn: gửi mô tả qua <a href=\"/lien-he\">trang Liên hệ</a> để nhận báo giá riêng.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Thầy cô có thể làm <a href=\"/blog/cong-tac-vien-gioi-thieu-dich-vu-danh-may\">cộng tác viên giới thiệu</a> khi đồng nghiệp cũng có nhu cầu số hóa tài liệu - minh bạch, miễn phí tham gia.</div></div>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Số hóa giáo án, đề cương viết tay</b>Gõ đúng mẫu trường, công thức chuẩn, hình vẽ lại sắc nét. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n\n<h2>Ví dụ yêu cầu gửi kèm đơn đánh máy giáo án</h2>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px;white-space:pre-wrap\">Giáo án Toán 10, chủ đề Hàm số (bài 1-4), 18 trang viết tay. Trình bày theo file mẫu đính kèm (Times New Roman 13, giãn dòng 1,15). Công thức gõ bằng Equation. Hình vẽ đồ thị vẽ lại, đặt In Line with Text. Chữ không đọc được đánh dấu [?].</p>\n<p>Một yêu cầu cụ thể như trên giúp chuyên viên làm đúng ngay lần đầu, thầy cô không mất thời gian chỉnh lại định dạng.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Phân loại và đặt tên ảnh theo khối - chủ đề - bài trước khi gửi.</li><li>Gửi mẫu giáo án và quy ước gõ công thức, đáp án trắc nghiệm.</li><li>Kiểm tra bằng cách giải lại bài, đối chiếu hình với giả thiết.</li><li>Tổ chức kho theo khối lớp, lưu Word để sửa và PDF để in.</li></ul></div>",
    "faq": [
      {
        "q": "Giáo án viết tay có nhiều công thức, hình vẽ thì đánh máy được không?",
        "a": "Được. Công thức được gõ bằng Equation, MathType hoặc LaTeX theo yêu cầu; hình vẽ, sơ đồ được vẽ lại dạng vector hoặc ghi chú vị trí để thầy cô chèn sau."
      },
      {
        "q": "Giáo án đánh máy có theo đúng mẫu của trường không?",
        "a": "Có, nếu thầy cô gửi kèm mẫu giáo án đang dùng (các mục, bảng hoạt động, phông chữ). Chuyên viên sẽ trình bày theo đúng mẫu đó."
      },
      {
        "q": "Tổ bộ môn có thể đặt chung để được giá tốt không?",
        "a": "Có thể gộp đơn để thống nhất định dạng và chọn thời hạn dài để có đơn giá thấp; với khối lượng lớn, liên hệ để nhận báo giá riêng."
      }
    ],
    "cover": "/assets/img/blog/danh-may-giao-an-de-cuong-viet-tay.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "go-lai-sach-cu-tai-lieu-co",
    "cat": "Kiến thức",
    "date": "2026-10-11",
    "tags": [
      "Sách cũ",
      "Tài liệu cổ",
      "Số hóa",
      "Gõ văn bản thuê"
    ],
    "title": "Gõ lại sách cũ, tài liệu xưa, bản đánh máy cũ: kinh nghiệm xử lý chữ mờ và chính tả thời trước",
    "seoTitle": "Gõ lại sách cũ, tài liệu xưa: kinh nghiệm xử lý chữ mờ",
    "excerpt": "Kinh nghiệm gõ lại sách cũ, bản đánh máy xưa: xử lý chữ mờ, giữ hay sửa chính tả thời trước, chụp tài liệu cũ an toàn và lưu trữ lâu dài.",
    "body": "<p class=\"lead\">Một cuốn sách gia đình giữ từ thời ông bà, tập tài liệu đánh máy bằng máy chữ của cơ quan, giáo trình in roneo đã ố vàng - những tài liệu ấy đang xuống cấp từng năm. Gõ lại thành bản số giúp lưu giữ lâu dài và tra cứu dễ dàng. Nhưng tài liệu xưa có những thách thức riêng mà người gõ cần biết cách xử lý.</p>\n<figure><img src=\"/assets/img/blog/fig-sach-cu.svg\" alt=\"Gõ lại sách cũ: giữ nguyên văn, đánh dấu chữ mờ\" loading=\"lazy\" width=\"960\"><figcaption>Bản gốc ố vàng, chữ mờ → bản gõ giữ nguyên văn, chữ không đọc được đánh dấu [?] để người hiểu nội dung xác nhận.</figcaption></figure>\n\n<h2>Những thách thức thường gặp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Vấn đề</th><th>Cách xử lý</th></tr>\n  <tr><td>Chữ mờ, nhòe mực, giấy rách</td><td>Đánh dấu [?] hoặc [không rõ], không đoán</td></tr>\n  <tr><td>Chính tả thời trước</td><td>Giữ nguyên hoặc chuẩn hóa theo nguyên tắc thống nhất</td></tr>\n  <tr><td>Bản đánh máy cũ thiếu dấu</td><td>Bổ sung dấu theo ngữ cảnh nếu được yêu cầu, ghi chú nguyên tắc</td></tr>\n  <tr><td>Chữ Hán, chữ Pháp xen kẽ</td><td>Giữ nguyên, gõ đúng ký tự hoặc đánh dấu để chuyên gia xử lý</td></tr>\n  <tr><td>Chú thích, số trang cũ</td><td>Giữ dạng chú thích chân trang, ghi số trang gốc nếu cần trích dẫn</td></tr>\n</table></div>\n\n<h2>Giữ hay sửa chính tả xưa?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Giữ nguyên văn</b>Phù hợp lưu trữ, nghiên cứu, gia phả, tài liệu có giá trị lịch sử. Người đọc sau có thể tin cậy rằng bản số giống bản gốc.</div>\n  <div class=\"good\"><b>Chuẩn hóa</b>Phù hợp bản đọc cho con cháu, tái bản phổ thông. Cần ghi rõ ở đầu tài liệu: đã chuẩn hóa chính tả theo nguyên tắc nào.</div>\n</div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Có thể làm cả hai: bản gõ nguyên văn để lưu trữ, sau đó biên tập thành bản đọc. Lưu cả hai tệp, đặt tên rõ ràng.</div></div>\n\n<h2>Chụp tài liệu xưa mà không làm hỏng</h2>\n<ul>\n  <li>Không ép phẳng gáy sách cũ quá mạnh; chụp từng trang, chấp nhận chút cong ở gáy.</li>\n  <li>Ánh sáng tự nhiên tán xạ, tránh đèn flash chiếu thẳng gây lóa trên giấy bóng.</li>\n  <li>Đặt thước hoặc tờ giấy màu bên cạnh để giữ tỷ lệ, màu sắc khi cần lưu trữ ảnh.</li>\n  <li>Đeo găng tay sạch hoặc rửa tay khô ráo trước khi lật trang giấy giòn.</li>\n</ul>\n<p>Xem thêm <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu</a>.</p>\n\n<h2>Bản đánh máy bằng máy chữ</h2>\n<p>Tài liệu đánh máy cũ thường thiếu dấu tiếng Việt (gõ dấu bằng tay hoặc bỏ dấu), dùng ký tự thay thế, gạch đè sửa lỗi. Người gõ cần đọc theo ngữ cảnh, giữ phần gạch đè nếu có giá trị (bản thảo) hoặc bỏ đi theo yêu cầu. Với văn bản đã số hóa bằng phông cũ bị lỗi hiển thị, xem <a href=\"/blog/sua-loi-font-tcvn3-vni-unicode\">sửa lỗi font TCVN3, VNI</a>.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Sách còn trong thời hạn bảo hộ quyền tác giả: số hóa để dùng cá nhân, gia đình khác với việc in lại hay đăng lên mạng. Hãy tìm hiểu quy định về quyền tác giả trước khi phát hành bản gõ lại.</div></div>\n\n<h2>Sau khi gõ: biên tập và lưu trữ</h2>\n<ol class=\"steps\">\n  <li>Người am hiểu nội dung (con cháu, chuyên gia) đọc lại, xác nhận các chỗ [?].</li>\n  <li>Dùng Heading cho chương mục để có mục lục; giữ chú thích chân trang.</li>\n  <li>Lưu bản Word, bản PDF và ảnh chụp gốc trên ít nhất hai nơi.</li>\n  <li>Nếu muốn in thành sách, xem <a href=\"/blog/chuan-bi-ban-thao-sach\">quy trình chuẩn bị bản thảo</a>.</li>\n</ol>\n<div class=\"aside-cta\" style=\"margin:1.8em 0\"><b>Có sách cũ, tài liệu xưa cần gõ lại?</b>Chúng tôi giữ nguyên văn, đánh dấu chữ khó đọc để bạn xác nhận. <a href=\"/dat-hang\" class=\"button\">Nhận báo giá ngay</a></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Đánh dấu chữ mờ thay vì đoán.</li><li>Chọn giữ nguyên văn hay chuẩn hóa và ghi rõ nguyên tắc.</li><li>Chụp nhẹ tay, ánh sáng tán xạ, không ép gáy sách.</li><li>Lưu cả bản gõ, PDF và ảnh gốc ở nhiều nơi.</li></ul></div>",
    "faq": [
      {
        "q": "Gõ lại sách cũ có nên sửa chính tả theo chuẩn hiện nay không?",
        "a": "Tùy mục đích. Với lưu trữ, nghiên cứu nên giữ nguyên chính tả gốc; với bản đọc phổ thông có thể chuẩn hóa nhưng cần ghi chú rõ nguyên tắc đã áp dụng."
      },
      {
        "q": "Chữ mờ không đọc được thì xử lý thế nào?",
        "a": "Đánh dấu rõ ràng như [không rõ] hoặc [?] kèm vị trí, không tự đoán. Người có hiểu biết về nội dung sẽ xác nhận sau."
      },
      {
        "q": "Gõ lại sách cũ có vấn đề bản quyền không?",
        "a": "Có thể có. Tác phẩm còn trong thời hạn bảo hộ cần sự cho phép của chủ sở hữu quyền khi sao chép, phát hành. Số hóa để sử dụng cá nhân, gia đình hay lưu trữ nội bộ khác với việc xuất bản lại."
      }
    ],
    "cover": "/assets/img/blog/go-lai-sach-cu-tai-lieu-co.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "cv-chuan-ats",
    "cat": "Mẹo hay",
    "date": "2026-10-11",
    "tags": [
      "CV",
      "ATS",
      "Xin việc",
      "Word"
    ],
    "title": "Đánh máy CV chuẩn ATS: định dạng để hệ thống tuyển dụng đọc đúng hồ sơ của bạn",
    "seoTitle": "Đánh máy CV chuẩn ATS để hệ thống tuyển dụng đọc được",
    "excerpt": "Cách đánh máy CV để hệ thống tuyển dụng (ATS) đọc đúng: bố cục một cột, tiêu đề mục chuẩn, từ khóa, định dạng tệp và mẹo tự kiểm tra.",
    "body": "<p class=\"lead\">Bạn mất cả buổi thiết kế một CV thật đẹp với hai cột, biểu tượng, thanh kỹ năng - nhưng không nhận được cuộc gọi nào. Một lý do ít người để ý: nhiều doanh nghiệp dùng phần mềm quản lý tuyển dụng (ATS) để đọc và lọc hồ sơ trước khi đến tay người. CV đẹp với mắt người chưa chắc đã “đọc được” với máy.</p>\n<figure><img src=\"/assets/img/blog/fig-cv-ats.svg\" alt=\"So sánh CV nhiều cột, biểu tượng và CV một cột chuẩn ATS\" loading=\"lazy\" width=\"960\"><figcaption>Trái: bố cục nhiều cột, biểu tượng, thanh kỹ năng - dễ bị đọc sai. Phải: một cột, tiêu đề mục rõ ràng - máy và người đều đọc tốt.</figcaption></figure>\n\n<h2>ATS đọc CV như thế nào?</h2>\n<p>Hệ thống trích xuất chữ trong tệp, nhận diện các mục (Kinh nghiệm, Học vấn, Kỹ năng…) và tách thành trường dữ liệu. Nhà tuyển dụng sau đó tìm kiếm theo từ khóa như “kế toán thuế”, “Excel”, “IELTS”. Nếu bố cục khiến chữ bị đọc lộn xộn, hồ sơ của bạn có thể không xuất hiện trong kết quả tìm kiếm.</p>\n\n<h2>Bố cục an toàn</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Dễ bị đọc sai</b>Hai-ba cột; thông tin liên hệ trong đầu trang (header); text box, hình khối; biểu tượng thay chữ (📞, ✉); thanh “mức độ kỹ năng”; CV xuất dạng ảnh.</div>\n  <div class=\"good\"><b>Nên dùng</b>Một cột, đọc từ trên xuống; thông tin liên hệ trong thân văn bản; tiêu đề mục chuẩn; gạch đầu dòng đơn giản; chữ thật (không phải ảnh).</div>\n</div>\n\n<h2>Tiêu đề mục chuẩn</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nên viết</th><th>Tránh</th></tr>\n  <tr><td>Kinh nghiệm làm việc</td><td>“Hành trình của tôi”</td></tr>\n  <tr><td>Học vấn</td><td>“Nơi tôi lớn lên”</td></tr>\n  <tr><td>Kỹ năng</td><td>“Siêu năng lực”</td></tr>\n  <tr><td>Chứng chỉ</td><td>Gộp chung vào mục khác không rõ ràng</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng kiểu Heading của Word cho tiêu đề mục - vừa đồng bộ định dạng, vừa giúp cấu trúc tài liệu rõ ràng (xem <a href=\"/blog/tao-muc-luc-tu-dong-word\">cách dùng Heading</a>).</div></div>\n\n<h2>Phông chữ, định dạng, ngày tháng</h2>\n<ul>\n  <li>Phông Unicode thông dụng: Arial, Calibri, Times New Roman; cỡ 10,5-12 cho nội dung.</li>\n  <li>Ngày tháng thống nhất một kiểu: <b>06/2023 - 08/2025</b>.</li>\n  <li>Gạch đầu dòng đơn giản (•, -), không dùng hình ảnh làm gạch đầu dòng.</li>\n  <li>Tên tệp rõ ràng: <span class=\"mono\">NguyenVanA_KeToan_CV.pdf</span>.</li>\n  <li>Kiểm tra lỗi chính tả, dấu tiếng Việt - xem <a href=\"/blog/loi-chinh-ta-tieng-viet\">12 lỗi chính tả phổ biến</a>.</li>\n</ul>\n\n<h2>Từ khóa: viết đúng ngôn ngữ của tin tuyển dụng</h2>\n<ol class=\"steps\">\n  <li>Đọc kỹ mô tả công việc, gạch chân kỹ năng, công cụ, chứng chỉ được nhắc đến.</li>\n  <li>Đưa các từ khóa phù hợp <b>một cách trung thực</b> vào phần kinh nghiệm và kỹ năng.</li>\n  <li>Ghi cả tên đầy đủ và viết tắt lần đầu: “Hệ thống hoạch định nguồn lực doanh nghiệp (ERP)”.</li>\n  <li>Mỗi kinh nghiệm nêu kết quả cụ thể bằng con số khi có thể.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chèn từ khóa ẩn (chữ trắng, cỡ chữ rất nhỏ) để “lừa” hệ thống. Người tuyển dụng có thể phát hiện khi mở tệp và hồ sơ sẽ bị loại.</div></div>\n\n<h2>Kiểm tra nhanh CV của bạn</h2>\n<p>Mở PDF, bôi đen toàn bộ (<kbd>Ctrl</kbd> + <kbd>A</kbd>) rồi dán vào Notepad. Nếu chữ hiện đúng thứ tự, không lẫn cột, không mất dấu tiếng Việt - CV của bạn có khả năng được đọc tốt. Nếu dán ra toàn ký tự lạ hoặc không chọn được chữ, hãy xuất lại từ Word.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>CV tiếng Anh cho công ty nước ngoài: giữ cùng cấu trúc, dùng thì quá khứ cho công việc đã làm, kiểm tra tên trường, chức danh theo cách viết chính thức.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Một cột, tiêu đề mục chuẩn, thông tin liên hệ trong thân bài.</li><li>Tránh text box, header, biểu tượng, thanh kỹ năng.</li><li>Dùng từ khóa của tin tuyển dụng một cách trung thực.</li><li>Kiểm tra bằng cách dán chữ từ PDF vào Notepad.</li></ul></div>\n<p>Có CV viết tay hoặc bản cũ cần đánh máy, trình bày lại? Dịch vụ <a href=\"/dich-vu/dinh-dang-tai-lieu\">định dạng tài liệu</a> giúp bạn có bản Word sạch, chuẩn bố cục.</p>",
    "faq": [
      {
        "q": "ATS là gì?",
        "a": "ATS (Applicant Tracking System) là phần mềm quản lý tuyển dụng. Nhiều hệ thống đọc nội dung CV, tách thành các trường như kinh nghiệm, học vấn, kỹ năng để nhà tuyển dụng tìm kiếm và sàng lọc."
      },
      {
        "q": "Nên nộp CV bằng PDF hay Word?",
        "a": "Làm theo yêu cầu của tin tuyển dụng. Nếu không nêu rõ, PDF xuất từ Word (chữ chọn được, không phải ảnh scan) hoặc .docx thường được đọc tốt. Tránh PDF dạng ảnh."
      },
      {
        "q": "CV có nên dùng bảng và cột không?",
        "a": "Hạn chế. Bảng nhiều cột, khung văn bản (text box) và đặt thông tin quan trọng trong đầu trang/chân trang có thể khiến một số hệ thống đọc sai thứ tự hoặc bỏ sót nội dung."
      }
    ],
    "cover": "/assets/img/blog/cv-chuan-ats.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "nhap-lieu-excel-chinh-xac",
    "cat": "Mẹo hay",
    "date": "2026-10-11",
    "tags": [
      "Nhập liệu",
      "Excel",
      "Data entry",
      "Văn phòng"
    ],
    "title": "Nhập liệu Excel chính xác và nhanh: 10 nguyên tắc vàng cho dân văn phòng",
    "seoTitle": "Nhập liệu Excel chính xác: 10 nguyên tắc vàng",
    "excerpt": "Nhập liệu sai một ô có thể làm hỏng cả báo cáo. 10 nguyên tắc nhập liệu Excel chính xác: cấu trúc bảng, kiểm tra dữ liệu, định dạng ngày, số và kiểm tra chéo.",
    "body": "<p class=\"lead\">Nhập liệu (data entry) nghe đơn giản nhưng là nền móng của mọi báo cáo. Một ô gõ nhầm 9 thành 6, một ngày tháng bị Excel tự hiểu sai, và cả bảng tổng hợp trở nên vô nghĩa. Dưới đây là 10 nguyên tắc giúp bạn nhập liệu nhanh mà vẫn chính xác.</p>\n\n<h2>Chuẩn bị trước khi gõ</h2>\n<h3>1. Mỗi cột một loại dữ liệu, mỗi dòng một bản ghi</h3>\n<p>Không gộp “Họ tên – SĐT” vào một ô; không để dòng tiêu đề phụ chen giữa dữ liệu. Bảng “phẳng” giúp lọc, sắp xếp và lập PivotTable dễ dàng.</p>\n<h3>2. Thống nhất định dạng ngay từ đầu</h3>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại dữ liệu</th><th>Nên</th><th>Tránh</th></tr>\n  <tr><td>Ngày tháng</td><td>Một định dạng duy nhất, ví dụ 16/10/2026</td><td>Trộn 16/10/26, 16-10-2026, “16 tháng 10”</td></tr>\n  <tr><td>Số tiền</td><td>Nhập số thuần, định dạng hiển thị sau</td><td>Gõ kèm “đ”, “VNĐ”, dấu chấm thủ công</td></tr>\n  <tr><td>Mã số, số điện thoại</td><td>Định dạng Text để giữ số 0 đầu</td><td>Để mặc định, Excel xóa số 0</td></tr>\n  <tr><td>Tên riêng</td><td>Viết hoa chữ cái đầu, thống nhất</td><td>Lúc HOA, lúc thường</td></tr>\n</table></div>\n<h3>3. Dùng Data Validation để chặn lỗi</h3>\n<p>Vào <b>Data → Data Validation</b> để giới hạn giá trị: danh sách thả xuống cho “Giới tính”, số nguyên 0–100 cho “Điểm”, ngày trong một khoảng cho “Ngày sinh”. Ô nhập sai sẽ bị từ chối ngay.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Danh sách thả xuống vừa tránh lỗi chính tả (“Hà Nội”, “Ha Noi”, “HN”) vừa giúp gõ nhanh hơn.</div></div>\n\n<h2>Trong khi nhập liệu</h2>\n<h3>4. Dùng bàn phím số và phím tắt</h3>\n<ul>\n  <li><kbd>Enter</kbd> xuống dòng, <kbd>Tab</kbd> sang ô bên phải.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>;</kbd> chèn ngày hiện tại, <kbd>Ctrl</kbd> + <kbd>D</kbd> sao chép ô phía trên.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>Enter</kbd> điền cùng giá trị cho nhiều ô đang chọn.</li>\n  <li>Dùng cụm phím số bên phải bàn phím cho các cột số liệu.</li>\n</ul>\n<h3>5. Cố định dòng tiêu đề</h3>\n<p><b>View → Freeze Panes</b> giữ tiêu đề cột luôn hiển thị, tránh nhập nhầm cột khi bảng dài.</p>\n<h3>6. Nhập theo lô và lưu thường xuyên</h3>\n<p>Chia việc thành từng lô 50–100 phiếu, đánh dấu phiếu đã nhập. Bật lưu tự động hoặc nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd> sau mỗi lô.</p>\n\n<h2>Sau khi nhập liệu: kiểm tra</h2>\n<h3>7. Kiểm tra trùng lặp</h3>\n<p>Tô màu giá trị trùng bằng <b>Conditional Formatting → Duplicate Values</b>, đặc biệt với mã khách hàng, số hóa đơn.</p>\n<h3>8. Kiểm tra giá trị bất thường</h3>\n<p>Sắp xếp từng cột số để phát hiện giá trị quá lớn, quá nhỏ hoặc âm bất thường; dùng bộ lọc để tìm ô trống.</p>\n<h3>9. Đối chiếu tổng</h3>\n<p>Cộng tổng một cột trên phiếu giấy (nếu có) và so với tổng trong Excel. Lệch tổng là tín hiệu có lỗi cần tìm.</p>\n<h3>10. Nhập kép với dữ liệu quan trọng</h3>\n<p>Hai người nhập độc lập cùng một bộ phiếu, sau đó so sánh hai bảng bằng công thức. Phương pháp “double entry” này được dùng phổ biến trong khảo sát, nghiên cứu vì phát hiện được phần lớn lỗi gõ nhầm.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Luôn giữ một bản sao dữ liệu gốc trước khi dùng Remove Duplicates, Find &amp; Replace hàng loạt hay sắp xếp. Thao tác sai trên bản duy nhất rất khó khôi phục.</div></div>\n\n<h2>Năng suất nhập liệu bao nhiêu là hợp lý?</h2>\n<p>Năng suất phụ thuộc độ phức tạp của phiếu: một phiếu khảo sát 10 câu trắc nghiệm nhanh hơn nhiều so với phiếu có câu trả lời tự luận viết tay. Hãy đo năng suất thật của bạn trong vài ngày đầu để lên kế hoạch hợp lý, ưu tiên độ chính xác trước tốc độ.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bảng phẳng: mỗi cột một loại dữ liệu, mỗi dòng một bản ghi.</li><li>Định dạng Text cho mã số và số điện thoại để giữ số 0 đầu.</li><li>Data Validation chặn lỗi ngay khi nhập.</li><li>Kiểm tra trùng, giá trị bất thường, đối chiếu tổng; nhập kép với dữ liệu quan trọng.</li></ul></div>\n<p>Có hàng nghìn phiếu cần nhập? Dịch vụ <a href=\"/dich-vu/word-sang-excel\">nhập liệu sang Excel</a> của chúng tôi kiểm tra chéo số liệu hai lần trước khi bàn giao.</p>",
    "faq": [
      {
        "q": "Làm sao để Excel không tự đổi số thành ngày tháng?",
        "a": "Định dạng cột là Text trước khi nhập, hoặc gõ dấu nháy đơn (') trước giá trị. Với mã số dạng 01/02, nên định dạng Text ngay từ đầu."
      },
      {
        "q": "Cách nhanh nhất để kiểm tra dữ liệu trùng trong Excel?",
        "a": "Dùng Conditional Formatting → Highlight Cells Rules → Duplicate Values để tô màu ô trùng, hoặc Data → Remove Duplicates sau khi đã sao lưu bản gốc."
      },
      {
        "q": "Nhập liệu từ phiếu giấy nên làm một người hay hai người?",
        "a": "Với dữ liệu quan trọng, nên nhập hai lần độc lập rồi so sánh (double entry). Cách này phát hiện phần lớn lỗi gõ nhầm."
      }
    ],
    "cover": "/assets/img/blog/nhap-lieu-excel-chinh-xac.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "go-bang-bieu-bieu-mau-thue",
    "cat": "Mẹo hay",
    "date": "2026-10-10",
    "tags": [
      "Bảng biểu",
      "Biểu mẫu",
      "Excel",
      "Gõ văn bản thuê"
    ],
    "title": "Thuê gõ bảng biểu, biểu mẫu phức tạp sang Word, Excel: giữ đúng cấu trúc, không vỡ khi sửa",
    "seoTitle": "Thuê gõ bảng biểu, biểu mẫu phức tạp sang Word, Excel",
    "excerpt": "Thuê gõ bảng biểu, biểu mẫu sang Word, Excel đúng cấu trúc: Table thật, ô gộp, bảng nhiều trang, số liệu tính toán được và cách kiểm tra.",
    "body": "<p class=\"lead\">Bảng biểu là phần “khó nhằn” nhất khi gõ lại tài liệu: báo cáo tài chính nhiều cột, biểu mẫu hành chính có ô gộp, bảng thống kê dài hàng chục trang. Gõ cho “nhìn giống” thì dễ, nhưng gõ đúng cấu trúc để sau này sửa không vỡ mới là điều khách hàng cần. Đây là những gì bạn nên yêu cầu khi thuê gõ bảng biểu.</p>\n\n<h2>Word hay Excel?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nhu cầu</th><th>Nên dùng</th></tr>\n  <tr><td>Bảng trong báo cáo, hợp đồng, luận văn</td><td>Word (Table)</td></tr>\n  <tr><td>Số liệu cần cộng, lọc, vẽ biểu đồ</td><td>Excel</td></tr>\n  <tr><td>Biểu mẫu in ra để điền tay</td><td>Word, bảng có viền</td></tr>\n  <tr><td>Phiếu khảo sát cần tổng hợp</td><td>Excel, mỗi phiếu một dòng - xem <a href=\"/blog/nhap-lieu-excel-chinh-xac\">nhập liệu Excel</a></td></tr>\n</table></div>\n\n<h2>Tiêu chuẩn một bảng gõ đúng</h2>\n<ul>\n  <li>Dựng bằng <b>Table thật</b>, không dùng phím cách, Tab hay khung văn bản để căn cột.</li>\n  <li>Hàng tiêu đề lặp lại ở mỗi trang (<b>Repeat Header Rows</b>) với bảng dài.</li>\n  <li>Ô gộp chỉ dùng khi bản gốc có, không gộp để “cho đẹp”.</li>\n  <li>Số căn phải, chữ căn trái; định dạng số thống nhất.</li>\n  <li>Bảng có chú thích (Insert Caption) để vào danh mục bảng tự động.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Bảng rộng nhiều cột: xoay trang ngang riêng cho trang đó bằng Section Break thay vì thu nhỏ chữ đến mức không đọc được.</div></div>\n\n<h2>Excel: cấu trúc để còn tính toán được</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>Gộp ô tiêu đề nhiều tầng giữa vùng dữ liệu; số gõ kèm “đ”, “%”; dòng tổng chen giữa dữ liệu; một ô chứa hai thông tin.</div>\n  <div class=\"good\"><b>Đúng</b>Mỗi cột một loại dữ liệu, một hàng tiêu đề; số là số thật, định dạng hiển thị sau; dòng tổng ở cuối bằng công thức.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Bảng số liệu có tổng cộng: hãy yêu cầu bên gõ đối chiếu tổng với bản gốc. Tổng lệch là tín hiệu có ô gõ sai - phát hiện sớm tránh sai cả báo cáo.</div></div>\n\n<h2>Biểu mẫu có ô điền</h2>\n<ol class=\"steps\">\n  <li>Nói rõ biểu mẫu để in ra điền tay hay điền trên máy.</li>\n  <li>In ra điền tay: bảng có viền, dòng kẻ chấm hoặc ô trống đủ rộng.</li>\n  <li>Điền trên máy: dùng trường nhập liệu (content control) và khóa phần cố định.</li>\n  <li>Ô đánh dấu: dùng ký hiệu ☐ thống nhất.</li>\n</ol>\n\n<h2>Cách ghi yêu cầu khi thuê gõ bảng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nên ghi</th><th>Ví dụ</th></tr>\n  <tr><td>Phần mềm và định dạng</td><td>“Bảng 3-7 làm trong Excel, còn lại trong Word”</td></tr>\n  <tr><td>Giữ bố cục</td><td>“Giữ đúng số cột, ô gộp như bản gốc”</td></tr>\n  <tr><td>Định dạng số</td><td>“Dấu chấm phân cách hàng nghìn, 2 chữ số thập phân”</td></tr>\n  <tr><td>Kiểm tra</td><td>“Đối chiếu dòng tổng cộng với bản gốc”</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Phụ phí chuyển PDF sang Excel, viết tay sang Excel được hiển thị rõ khi chọn loại chuyển đổi ở <a href=\"/dat-hang\">trang đặt hàng</a>. Xem thêm dịch vụ <a href=\"/dich-vu/word-sang-excel\">nhập liệu sang Excel</a>.</div></div>\n\n<h2>Bảng dài nhiều trang trong Word</h2>\n<ul>\n  <li>Bật <b>Repeat Header Rows</b> cho hàng tiêu đề để mỗi trang đều có tên cột.</li>\n  <li>Tắt <b>Allow row to break across pages</b> với hàng ngắn để không bị cắt đôi; bật với hàng có nội dung dài.</li>\n  <li>Đặt độ rộng cột cố định để bảng không tự co giãn khi sửa nội dung.</li>\n  <li>Dùng Table Styles thống nhất cho mọi bảng trong tài liệu.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bảng số liệu viết tay (sổ sách, phiếu điều tra) có phụ phí riêng do cần đọc kỹ từng con số. Xem bài <a href=\"/blog/so-sach-hoa-don-sang-excel\">số hóa sổ sách sang Excel</a> để biết cách chuẩn bị.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bảng trình bày ở Word, số liệu cần tính toán ở Excel.</li><li>Table thật, lặp hàng tiêu đề, không căn bằng phím cách.</li><li>Excel: mỗi cột một loại dữ liệu, số là số thật.</li><li>Yêu cầu đối chiếu tổng cộng với bản gốc.</li></ul></div>",
    "faq": [
      {
        "q": "Nên gõ bảng vào Word hay Excel?",
        "a": "Bảng để trình bày trong văn bản (báo cáo, hợp đồng) nên ở Word. Bảng số liệu cần tính toán, lọc, tổng hợp nên ở Excel; có thể dán sang Word khi cần trình bày."
      },
      {
        "q": "Vì sao bảng tôi nhận được bị vỡ khi sửa?",
        "a": "Thường do bảng được dựng bằng phím cách, Tab hoặc khung văn bản thay vì chức năng Table thật, hoặc dùng nhiều ô gộp không cần thiết."
      },
      {
        "q": "Biểu mẫu có ô để điền thì gõ thế nào?",
        "a": "Dùng bảng có viền cho các ô điền, hoặc trường nhập liệu (form field/content control) nếu cần điền trên máy. Ghi rõ yêu cầu khi thuê gõ."
      }
    ],
    "cover": "/assets/img/blog/go-bang-bieu-bieu-mau-thue.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "go-ma-tran-he-phuong-trinh-word",
    "cat": "Học thuật",
    "date": "2026-10-10",
    "tags": [
      "Công thức toán",
      "Ma trận",
      "Hệ phương trình",
      "Word Equation"
    ],
    "title": "Gõ ma trận, hệ phương trình, tích phân trong Word nhanh như dân chuyên",
    "seoTitle": "Gõ ma trận, hệ phương trình, tích phân trong Word",
    "excerpt": "Cách gõ nhanh ma trận, định thức, hệ phương trình, tích phân, giới hạn trong Word Equation bằng cú pháp tuyến tính, kèm mẹo căn dấu bằng.",
    "body": "<p class=\"lead\">Ma trận, hệ phương trình, tích phân là ba loại công thức khiến người mới dùng Word mất nhiều thời gian nhất. Tin vui là Word Equation hiểu một cú pháp gõ tắt gần giống LaTeX, giúp bạn nhập công thức chỉ bằng bàn phím. Bài viết tổng hợp các thao tác hay dùng nhất cho giáo viên, sinh viên khối Toán - Kỹ thuật.</p>\n<figure><img src=\"/assets/img/blog/fig-ma-tran-word.svg\" alt=\"Ma trận, hệ phương trình và tích phân hiển thị trong Word Equation\" loading=\"lazy\" width=\"960\"><figcaption>Ba cấu trúc thường gặp: ma trận 2×2, hệ phương trình có ngoặc nhọn, tích phân xác định.</figcaption></figure>\n\n<h2>Mở khung công thức và chế độ gõ</h2>\n<p>Nhấn <kbd>Alt</kbd> + <kbd>=</kbd> để chèn khung Equation. Word mặc định dùng cú pháp tuyến tính <b>UnicodeMath</b>: bạn gõ ký hiệu, nhấn phím cách, Word tự dựng công thức. Các phiên bản mới còn cho phép chuyển sang cú pháp LaTeX trong thẻ Equation.</p>\n\n<h2>Ma trận và định thức</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn gõ</th><th>Cú pháp trong Equation</th></tr>\n  <tr><td>Ma trận 2×2 trong ngoặc tròn</td><td><span class=\"mono\">(\\matrix(a&amp;b@c&amp;d))</span></td></tr>\n  <tr><td>Ma trận trong ngoặc vuông</td><td><span class=\"mono\">[\\matrix(1&amp;0@0&amp;1)]</span></td></tr>\n  <tr><td>Định thức</td><td><span class=\"mono\">|\\matrix(a&amp;b@c&amp;d)|</span></td></tr>\n  <tr><td>Ma trận 3×3</td><td><span class=\"mono\">(\\matrix(1&amp;2&amp;3@4&amp;5&amp;6@7&amp;8&amp;9))</span></td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Ký hiệu <b>&amp;</b> ngăn cột, <b>@</b> xuống hàng. Gõ xong nhấn phím cách để Word dựng ma trận.</div></div>\n\n<h2>Hệ phương trình</h2>\n<ol class=\"steps\">\n  <li>Mở khung Equation (<kbd>Alt</kbd> + <kbd>=</kbd>).</li>\n  <li>Chọn <b>Bracket → Cases and Stacks</b>, chọn mẫu hai hoặc ba dòng có ngoặc nhọn.</li>\n  <li>Gõ từng phương trình vào ô; dùng <kbd>Tab</kbd> hoặc phím mũi tên để chuyển ô.</li>\n</ol>\n<p>Với hệ “hoặc” (dấu ngoặc vuông dùng trong giải phương trình chứa dấu giá trị tuyệt đối), chọn mẫu ngoặc vuông một bên trong Bracket và dùng ma trận một cột bên trong.</p>\n\n<h2>Tích phân, giới hạn, tổng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn gõ</th><th>Cú pháp</th></tr>\n  <tr><td>Tích phân xác định</td><td><span class=\"mono\">\\int_0^1 x^2 dx</span></td></tr>\n  <tr><td>Tích phân kép</td><td><span class=\"mono\">\\iint_D f(x,y) dA</span></td></tr>\n  <tr><td>Giới hạn</td><td><span class=\"mono\">\\lim_(x\\to 0) sin x/x</span></td></tr>\n  <tr><td>Tổng sigma</td><td><span class=\"mono\">\\sum_(k=1)^n k^2</span></td></tr>\n  <tr><td>Căn bậc n</td><td><span class=\"mono\">\\sqrt(3&amp;x+1)</span></td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Viết đúng chuẩn: biến viết nghiêng, nhưng “d” trong dx, các hàm sin, cos, log, lim viết đứng. Word tự nhận diện tên hàm quen thuộc khi bạn gõ đúng chính tả.</div></div>\n\n<h2>Căn thẳng nhiều dòng biến đổi</h2>\n<p>Khi trình bày lời giải nhiều bước, hãy đặt các dòng trong cùng một khối Equation, xuống dòng bằng <kbd>Shift</kbd> + <kbd>Enter</kbd>, rồi nhấp phải chọn <b>Align at =</b>. Các dấu bằng thẳng hàng giúp lời giải dễ theo dõi hơn hẳn.</p>\n\n<h2>Lỗi thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Nên tránh</b>Gõ ma trận bằng bảng Word có viền ẩn; vẽ ngoặc nhọn bằng Shapes; chèn công thức dạng ảnh chụp màn hình - không sửa được, in ra bị mờ.</div>\n  <div class=\"good\"><b>Nên làm</b>Dùng Equation hoặc MathType thống nhất; lưu công thức hay dùng vào <b>Save as New Equation</b>; kiểm tra lại khi chuyển tệp sang máy khác.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Tệp có công thức Equation mở bằng phiên bản Word rất cũ có thể hiển thị thành ảnh không sửa được. Hãy hỏi trước phiên bản người nhận sử dụng.</div></div>\n\n<h2>Gõ bằng cú pháp LaTeX ngay trong Word</h2>\n<p>Các phiên bản Word mới cho phép chuyển khung Equation sang chế độ <b>LaTeX</b> (trong thẻ Equation, mục chuyển đổi định dạng). Khi đó bạn có thể gõ <span class=\"mono\">\\frac{a}{b}</span>, <span class=\"mono\">\\begin{pmatrix} a &amp; b \\\\ c &amp; d \\end{pmatrix}</span> quen thuộc rồi chuyển sang dạng hiển thị chuyên nghiệp. Cách này đặc biệt tiện cho người đã quen LaTeX hoặc khi sao chép công thức từ tài liệu LaTeX sang Word.</p>\n<h2>Lưu công thức hay dùng để chèn lại</h2>\n<ol class=\"steps\">\n  <li>Chọn công thức đã gõ hoàn chỉnh (ví dụ công thức nghiệm, khai triển nhị thức).</li>\n  <li>Nhấp mũi tên ở góc khung Equation, chọn <b>Save as New Equation</b>, đặt tên dễ nhớ.</li>\n  <li>Lần sau vào <b>Insert → Equation</b>, công thức nằm sẵn trong danh sách để chèn.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Một “thư viện” khoảng 20-30 công thức hay dùng của bộ môn có thể giúp giáo viên tiết kiệm đáng kể thời gian soạn đề mỗi tuần.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Alt + = mở Equation; gõ cú pháp rồi nhấn phím cách.</li><li>& ngăn cột, @ xuống hàng khi gõ ma trận.</li><li>Hệ phương trình dùng mẫu Cases trong Bracket.</li><li>Align at = để căn thẳng nhiều dòng biến đổi.</li></ul></div>\n<p>Đọc thêm <a href=\"/blog/latex-cho-nguoi-moi\">LaTeX cho người mới</a> và <a href=\"/blog/so-hoa-de-thi-toan\">quy trình số hóa đề thi Toán</a>. Cần gõ cả bộ đề? Xem dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a>.</p>",
    "faq": [
      {
        "q": "Gõ hệ phương trình có dấu ngoặc nhọn trong Word thế nào?",
        "a": "Nhấn Alt + = để mở Equation, vào Bracket chọn mẫu Cases (hai hoặc ba dòng), rồi gõ từng phương trình vào các ô."
      },
      {
        "q": "Có cách gõ ma trận nhanh không cần chuột?",
        "a": "Trong khung Equation, gõ \\matrix(a&b@c&d) rồi nhấn phím cách: dấu & ngăn cột, @ xuống hàng. Sau đó bọc trong ngoặc tròn hoặc vuông tùy loại ma trận."
      },
      {
        "q": "Làm sao căn thẳng dấu bằng giữa nhiều dòng công thức?",
        "a": "Đặt các dòng trong cùng một khối Equation, ngăn dòng bằng Shift + Enter, rồi nhấp phải chọn Align at = để Word căn theo dấu bằng."
      }
    ],
    "cover": "/assets/img/blog/go-ma-tran-he-phuong-trinh-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "kiem-tra-file-go-thue-nghiem-thu",
    "cat": "Mẹo hay",
    "date": "2026-10-09",
    "tags": [
      "Nghiệm thu",
      "Kiểm tra chất lượng",
      "Gõ văn bản thuê",
      "Checklist"
    ],
    "title": "Nhận file gõ thuê: checklist 10 điểm kiểm tra chất lượng trước khi nghiệm thu",
    "seoTitle": "Checklist 10 điểm kiểm tra file gõ thuê trước khi nghiệm thu",
    "excerpt": "Checklist 10 điểm kiểm tra file gõ thuê trước khi nghiệm thu: số trang, số liệu, tên riêng, chính tả, định dạng, bảng, công thức, mục lục.",
    "body": "<p class=\"lead\">File Word gõ thuê đã về hộp thư. Mở ra trông gọn gàng - nhưng liệu số tiền trong hợp đồng có đúng, có trang nào bị sót, mục lục có khớp số trang? Dành 15-30 phút kiểm tra theo danh sách dưới đây giúp bạn yên tâm trước khi nộp, in hay gửi đi, và yêu cầu sửa kịp thời trong thời gian được chỉnh sửa miễn phí.</p>\n<figure><img src=\"/assets/img/blog/fig-checklist-nghiem-thu.svg\" alt=\"Checklist 10 điểm kiểm tra file gõ thuê\" loading=\"lazy\" width=\"960\"><figcaption>10 điểm kiểm tra: từ số trang, số liệu, tên riêng đến định dạng, mục lục và khả năng mở file trên máy khác.</figcaption></figure>\n\n<h2>Checklist 10 điểm</h2>\n<ol class=\"steps\">\n  <li><b>Đủ trang, đúng thứ tự</b>: đối chiếu tiêu đề đầu - cuối mỗi chương với bản gốc.</li>\n  <li><b>Số liệu</b>: số tiền, ngày tháng, số hiệu văn bản, số điện thoại - đối chiếu từng con số quan trọng.</li>\n  <li><b>Tên riêng</b>: tên người, địa danh, tên cơ quan, thương hiệu đúng chính tả.</li>\n  <li><b>Chính tả, dấu tiếng Việt</b>: chạy kiểm tra chính tả, đọc lướt tìm lỗi hỏi/ngã, dấu sai vị trí.</li>\n  <li><b>Chỗ đánh dấu [?]</b>: tìm (<kbd>Ctrl</kbd> + <kbd>F</kbd>) “[?]”, “[không rõ]” và điền thông tin đúng.</li>\n  <li><b>Định dạng</b>: phông, cỡ chữ, lề, giãn dòng đúng yêu cầu; tiêu đề dùng Heading.</li>\n  <li><b>Bảng biểu</b>: dựng bằng Table thật, đủ cột, tổng cộng khớp bản gốc.</li>\n  <li><b>Công thức</b>: chỉ số trên - dưới, ký hiệu, phân số đúng; công thức sửa được (không phải ảnh).</li>\n  <li><b>Mục lục, đánh số trang</b>: cập nhật (<kbd>F9</kbd>) và kiểm tra khớp nội dung.</li>\n  <li><b>File mở được</b> trên máy khác, xuất PDF không lỗi phông.</li>\n</ol>\n\n<h2>Kiểm tra nhanh mà hiệu quả</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Mẹo</th><th>Cách làm</th></tr>\n  <tr><td>Kiểm tra ngẫu nhiên</td><td>Chọn 3-5 trang rải rác, đối chiếu từng dòng với bản gốc</td></tr>\n  <tr><td>Soát số bằng tổng</td><td>Cộng một cột số trong Excel/Word so với tổng trên bản gốc</td></tr>\n  <tr><td>Hiện ký tự ẩn</td><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>8</kbd> để thấy ngắt dòng, khoảng trắng thừa</td></tr>\n  <tr><td>Navigation Pane</td><td>View → Navigation Pane để thấy cấu trúc tiêu đề</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Bật hiện ký tự ẩn giúp phát hiện ngay những “lỗi trình bày ngầm”: căn lề bằng phím cách, Enter giữa câu - những thứ khiến tài liệu vỡ khi sửa sau này.</div></div>\n\n<h2>Cách yêu cầu chỉnh sửa hiệu quả</h2>\n<ol class=\"steps\">\n  <li>Gom tất cả lỗi vào một lần gửi, tránh gửi lắt nhắt.</li>\n  <li>Ghi vị trí cụ thể: “Trang 12, dòng 5: 1.750.000 → 1.250.000”.</li>\n  <li>Gửi ảnh chụp bản gốc ở chỗ có tranh cãi.</li>\n  <li>Yêu cầu sửa ngoài phạm vi ban đầu (thêm định dạng mới) nên tách riêng để được báo giá.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đừng đợi đến sát hạn nộp mới mở file kiểm tra. Kiểm tra ngay khi nhận để còn thời gian sửa - thời hạn chỉnh sửa miễn phí thường có giới hạn.</div></div>\n\n<h2>Tài liệu quan trọng: kiểm tra kỹ hơn</h2>\n<p>Hợp đồng, hồ sơ pháp lý, báo cáo tài chính nên đối chiếu toàn bộ phần số liệu và điều khoản, tốt nhất do hai người làm độc lập. Với bản dịch, xem thêm <a href=\"/blog/dich-hop-dong-anh-viet\">lỗi dịch hợp đồng hay gặp</a>. Với văn bản hành chính, đối chiếu thể thức theo <a href=\"/blog/go-van-ban-hanh-chinh-thue\">hướng dẫn gõ văn bản hành chính thuê</a>.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Tại Đánh máy 247, mọi đơn đều qua biên tập viên kiểm tra trước khi giao; bạn vẫn nên tự kiểm tra theo checklist vì bạn hiểu nội dung tài liệu của mình nhất. Yêu cầu sửa gửi ngay trong trang đơn hàng.</div></div>\n\n<h2>Mẫu ghi lỗi gửi bên gõ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Trang/dòng</th><th>Đang là</th><th>Sửa thành</th></tr>\n  <tr><td>Tr. 12, dòng 5</td><td>1.750.000</td><td>1.250.000</td></tr>\n  <tr><td>Tr. 20, tiêu đề</td><td>Chương 3 (thiếu Heading)</td><td>Gán Heading 1</td></tr>\n</table></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Kiểm tra đủ trang, số liệu, tên riêng trước tiên.</li><li>Tìm các chỗ đánh dấu [?] để xác nhận.</li><li>Bật ký tự ẩn để phát hiện lỗi trình bày ngầm.</li><li>Gom lỗi, ghi vị trí cụ thể, gửi sớm trong thời hạn chỉnh sửa.</li></ul></div>",
    "faq": [
      {
        "q": "Kiểm tra file gõ thuê mất bao lâu?",
        "a": "Với tài liệu vài chục trang, kiểm tra theo checklist và đối chiếu ngẫu nhiên thường mất khoảng 15-30 phút. Tài liệu pháp lý, số liệu quan trọng nên đối chiếu kỹ hơn."
      },
      {
        "q": "Phát hiện lỗi thì yêu cầu sửa thế nào?",
        "a": "Ghi cụ thể trang, dòng, nội dung sai và nội dung đúng (có thể gửi ảnh chụp). Tại Đánh máy 247, bạn được chỉnh sửa miễn phí trong 14 ngày trong phạm vi yêu cầu ban đầu."
      },
      {
        "q": "Có nên kiểm tra toàn bộ từng chữ?",
        "a": "Với tài liệu thông thường, kiểm tra ngẫu nhiên kết hợp các điểm trọng yếu (số liệu, tên riêng) là đủ. Văn bản pháp lý, tài chính nên đối chiếu toàn bộ phần số liệu."
      }
    ],
    "cover": "/assets/img/blog/kiem-tra-file-go-thue-nghiem-thu.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "bao-ve-du-lieu-ca-nhan-so-hoa",
    "cat": "Kiến thức",
    "date": "2026-10-09",
    "tags": [
      "Dữ liệu cá nhân",
      "Bảo mật",
      "Số hóa",
      "Doanh nghiệp"
    ],
    "title": "Số hóa tài liệu có dữ liệu cá nhân: những lưu ý về bảo vệ dữ liệu cho doanh nghiệp, trường học",
    "seoTitle": "Số hóa tài liệu có dữ liệu cá nhân: lưu ý pháp lý",
    "excerpt": "Số hóa hồ sơ nhân sự, khảo sát, bệnh án cần lưu ý gì về bảo vệ dữ liệu cá nhân: tối thiểu hóa, phân quyền, thuê ngoài an toàn.",
    "body": "<p class=\"lead\">Số hóa hồ sơ nhân sự, phiếu khảo sát, học bạ, hồ sơ khách hàng giúp tra cứu nhanh và tiết kiệm không gian lưu trữ. Nhưng mỗi trang giấy ấy chứa họ tên, số định danh, địa chỉ, có khi cả thông tin sức khỏe - tức là dữ liệu cá nhân. Đưa chúng lên máy tính, lên đám mây hay chuyển cho bên thứ ba đều là hoạt động “xử lý dữ liệu cá nhân” cần được làm đúng cách.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bài viết mang tính tham khảo, không phải tư vấn pháp lý. Các quy định chính hiện nay gồm Nghị định 13/2023/NĐ-CP và Luật Bảo vệ dữ liệu cá nhân (Quốc hội thông qua năm 2025) cùng văn bản hướng dẫn. Hãy cập nhật văn bản mới nhất và hỏi ý kiến pháp chế khi áp dụng.</div></div>\n\n<h2>Tài liệu nào chứa dữ liệu cá nhân?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại tài liệu</th><th>Dữ liệu thường gặp</th><th>Mức độ</th></tr>\n  <tr><td>Hồ sơ nhân sự</td><td>Họ tên, ngày sinh, số định danh, địa chỉ, lương</td><td>Cơ bản + tài chính</td></tr>\n  <tr><td>Bệnh án, phiếu khám</td><td>Tình trạng sức khỏe, tiền sử bệnh</td><td class=\"no\">Nhạy cảm</td></tr>\n  <tr><td>Phiếu khảo sát</td><td>Thông tin nhân khẩu, quan điểm cá nhân</td><td>Tùy nội dung</td></tr>\n  <tr><td>Hợp đồng, hồ sơ vay</td><td>Thông tin tài chính, tài sản</td><td class=\"no\">Nhạy cảm</td></tr>\n  <tr><td>Học bạ, hồ sơ học sinh</td><td>Thông tin trẻ em, kết quả học tập</td><td>Cần bảo vệ đặc biệt</td></tr>\n</table></div>\n\n<h2>5 nguyên tắc khi số hóa</h2>\n<ol class=\"steps\">\n  <li><b>Có mục đích rõ ràng</b>: số hóa để làm gì, ai cần dùng, dùng trong bao lâu.</li>\n  <li><b>Tối thiểu hóa</b>: chỉ nhập những trường thực sự cần; cân nhắc che, mã hóa số định danh nếu không cần dùng.</li>\n  <li><b>Phân quyền truy cập</b>: chỉ người có nhiệm vụ mới xem được; ghi nhật ký truy cập nếu có thể.</li>\n  <li><b>An toàn kỹ thuật</b>: lưu trên hệ thống có mật khẩu mạnh, xác thực hai lớp, sao lưu định kỳ.</li>\n  <li><b>Thời hạn lưu trữ</b>: xác định khi nào xóa hoặc hủy, kể cả bản giấy và bản scan trung gian.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Phiếu khảo sát nghiên cứu: gán mã phiếu thay cho họ tên ngay từ khâu nhập liệu, lưu bảng đối chiếu mã - danh tính tách riêng và hạn chế người được xem.</div></div>\n\n<h2>Thuê ngoài số hóa: cần kiểm tra gì?</h2>\n<ul>\n  <li><b>Hợp đồng</b> nêu rõ phạm vi xử lý, nghĩa vụ bảo mật, biện pháp an toàn, thời hạn và cách xóa dữ liệu.</li>\n  <li><b>Nhân sự</b> ký cam kết bảo mật; người làm chỉ thấy phần tài liệu cần thiết.</li>\n  <li><b>Kênh truyền tệp</b> an toàn (HTTPS, liên kết có thời hạn), không gửi qua nhóm chat chung.</li>\n  <li><b>Xóa dữ liệu</b> sau khi bàn giao và có xác nhận.</li>\n</ul>\n<p>Xem thêm <a href=\"/blog/bao-mat-khi-thue-ngoai-danh-may\">5 câu hỏi về bảo mật khi thuê ngoài đánh máy</a>.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Tránh tải hồ sơ có dữ liệu cá nhân lên các công cụ chuyển đổi PDF, OCR hay AI miễn phí trên mạng khi chưa kiểm tra chính sách lưu trữ dữ liệu của họ.</div></div>\n\n<h2>Quy trình gợi ý cho một dự án số hóa</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bước</th><th>Việc cần làm</th></tr>\n  <tr><td>1. Khảo sát</td><td>Đếm số trang, loại tài liệu, xác định dữ liệu nhạy cảm</td></tr>\n  <tr><td>2. Thiết kế</td><td>Chọn trường dữ liệu cần nhập, quy tắc đặt tên tệp, phân quyền</td></tr>\n  <tr><td>3. Thực hiện</td><td>Scan, đánh máy/nhập liệu theo lô; kiểm tra chéo</td></tr>\n  <tr><td>4. Bàn giao</td><td>Chuyển dữ liệu qua kênh an toàn, xóa bản trung gian</td></tr>\n  <tr><td>5. Vận hành</td><td>Lưu trữ, sao lưu, rà soát quyền truy cập định kỳ</td></tr>\n</table></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Hồ sơ giấy số hóa vẫn là dữ liệu cá nhân cần bảo vệ.</li><li>Tối thiểu hóa trường dữ liệu, phân quyền, đặt thời hạn lưu trữ.</li><li>Thuê ngoài cần hợp đồng rõ phạm vi, bảo mật và xóa dữ liệu.</li><li>Tham khảo pháp chế với văn bản quy định mới nhất.</li></ul></div>\n<p>Đánh máy 247: nhân sự ký NDA, nhân viên xử lý không thấy thông tin liên hệ của khách, tệp tự xóa sau 30 ngày. Dự án lớn, liên hệ qua <a href=\"/lien-he\">trang Liên hệ</a> để ký hợp đồng bảo mật riêng.</p>",
    "faq": [
      {
        "q": "Văn bản nào quy định về bảo vệ dữ liệu cá nhân ở Việt Nam?",
        "a": "Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và Luật Bảo vệ dữ liệu cá nhân được Quốc hội thông qua năm 2025, cùng các văn bản hướng dẫn. Doanh nghiệp nên tham khảo bộ phận pháp chế hoặc luật sư để áp dụng cụ thể."
      },
      {
        "q": "Thuê ngoài đánh máy hồ sơ có chứa dữ liệu cá nhân được không?",
        "a": "Có thể, nhưng cần hợp đồng quy định rõ phạm vi xử lý, nghĩa vụ bảo mật, biện pháp an toàn, thời hạn và cách xóa dữ liệu; chỉ chuyển phần dữ liệu thực sự cần thiết."
      },
      {
        "q": "Dữ liệu cá nhân nhạy cảm gồm những gì?",
        "a": "Theo quy định, nhóm này bao gồm các thông tin như tình trạng sức khỏe, đời sống riêng tư, dữ liệu sinh trắc học, thông tin tài chính… Việc xử lý cần biện pháp bảo vệ chặt chẽ hơn."
      }
    ],
    "cover": "/assets/img/blog/bao-ve-du-lieu-ca-nhan-so-hoa.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "go-cong-thuc-hoa-hoc-trong-word",
    "cat": "Học thuật",
    "date": "2026-10-08",
    "tags": [
      "Công thức hóa học",
      "Word",
      "Chỉ số dưới",
      "Phương trình phản ứng"
    ],
    "title": "Cách gõ công thức hóa học trong Word: chỉ số, ion, mũi tên phản ứng chuẩn",
    "seoTitle": "Cách gõ công thức hóa học trong Word nhanh, chuẩn",
    "excerpt": "Hướng dẫn gõ công thức hóa học trong Word: chỉ số dưới H₂O, điện tích ion Fe³⁺, mũi tên phản ứng thuận nghịch, điều kiện phản ứng và mẹo gõ nhanh cho giáo viên.",
    "body": "<p class=\"lead\">Giáo viên Hóa, sinh viên ngành Dược, kỹ sư môi trường đều gặp chung một nỗi khổ: gõ công thức hóa học trong Word mất thời gian và dễ sai. Chỉ một chỉ số đặt nhầm vị trí, H₂O thành H2O hay Fe³⁺ thành Fe3+, tài liệu trông kém chuyên nghiệp ngay. Bài viết hướng dẫn cách gõ nhanh và đúng chuẩn trình bày.</p>\n<figure><img src=\"/assets/img/blog/fig-hoa-hoc-word.svg\" alt=\"Ví dụ trình bày công thức và phương trình hóa học đúng chuẩn trong Word\" loading=\"lazy\" width=\"960\"><figcaption>Chỉ số dưới cho số nguyên tử, chỉ số trên cho điện tích ion, mũi tên phản ứng và điều kiện ghi phía trên mũi tên.</figcaption></figure>\n\n<h2>Quy tắc trình bày cơ bản</h2>\n<ul>\n  <li><b>Ký hiệu nguyên tố viết đứng</b>, chữ đầu viết hoa: Na, Cl, Fe - không viết nghiêng.</li>\n  <li><b>Số nguyên tử là chỉ số dưới</b>: H₂SO₄, C₆H₁₂O₆.</li>\n  <li><b>Điện tích ion là chỉ số trên</b>, số trước dấu sau: Fe³⁺, SO₄²⁻.</li>\n  <li><b>Hệ số tỉ lượng viết ngang dòng</b>, đứng trước công thức: 2H₂ + O₂ → 2H₂O.</li>\n</ul>\n\n<h2>Bảng phím tắt cần nhớ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn gõ</th><th>Cách làm</th><th>Kết quả</th></tr>\n  <tr><td>Chỉ số dưới</td><td><kbd>Ctrl</kbd> + <kbd>=</kbd>, gõ số, nhấn lại để tắt</td><td>H₂O</td></tr>\n  <tr><td>Chỉ số trên</td><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd></td><td>Fe³⁺, Ca²⁺</td></tr>\n  <tr><td>Mũi tên một chiều</td><td>Gõ <span class=\"mono\">--&gt;</span> (AutoCorrect) hoặc Insert → Symbol</td><td>→</td></tr>\n  <tr><td>Mũi tên thuận nghịch</td><td>Insert → Symbol → Arrows</td><td>⇌</td></tr>\n  <tr><td>Kết tủa/bay hơi</td><td>Insert → Symbol</td><td>↓ ↑</td></tr>\n  <tr><td>Nhiệt độ</td><td>Insert → Symbol hoặc <kbd>Alt</kbd> + 0176 trên bàn phím số</td><td>t°, 25 °C</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Gõ một lần các công thức hay dùng như H₂SO₄, NaOH, CO₂ rồi lưu vào <b>AutoText/Quick Parts</b> hoặc <b>AutoCorrect</b>. Lần sau chỉ cần gõ mã ngắn, ví dụ “#h2so4”, Word tự thay bằng công thức đúng định dạng.</div></div>\n\n<h2>Gõ phương trình phản ứng có điều kiện</h2>\n<p>Điều kiện phản ứng (nhiệt độ, xúc tác, áp suất) thường ghi phía trên mũi tên. Có hai cách:</p>\n<ol class=\"steps\">\n  <li><b>Dùng Equation</b>: nhấn <kbd>Alt</kbd> + <kbd>=</kbd>, chọn <b>Operator → Common Operator Structures</b>, chọn mũi tên có chỗ ghi chữ phía trên, gõ “t°, xt” vào ô.</li>\n  <li><b>Dùng bảng nhỏ</b>: với tài liệu cần sửa nhiều, đặt điều kiện trong một dòng chữ nhỏ ngay trên mũi tên bằng định dạng chỉ số trên. Cách này nhẹ, dễ chỉnh nhưng kém đẹp hơn.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Khi dùng Equation, ký hiệu nguyên tố có thể bị chuyển sang chữ nghiêng như biến toán học. Hãy bôi đen phần công thức và chọn kiểu chữ <b>Normal Text</b> để trả về chữ đứng.</div></div>\n\n<h2>Viết cấu tạo và công thức phức tạp</h2>\n<p>Công thức cấu tạo (vòng benzen, mạch nhánh) không nên vẽ bằng khung chữ và đường kẻ tay vì rất dễ lệch. Các lựa chọn tốt hơn:</p>\n<ul>\n  <li><b>Phần mềm vẽ cấu tạo chuyên dụng</b>, sau đó chèn vào Word dưới dạng ảnh chất lượng cao hoặc đối tượng chỉnh sửa được.</li>\n  <li><b>LaTeX với gói mhchem</b> cho tài liệu học thuật: viết <span class=\"mono\">\\ce{2H2 + O2 -> 2H2O}</span> là ra phương trình đúng chuẩn. Xem <a href=\"/blog/latex-cho-nguoi-moi\">LaTeX cho người mới</a>.</li>\n</ul>\n\n<h2>Lỗi thường gặp khi gõ công thức hóa học</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>H2O, Fe3+, CO2 viết ngang dòng; Na viết nghiêng; dùng dấu “=” thay mũi tên; điện tích ghi “+3”.</div>\n  <div class=\"good\"><b>Đúng</b>H₂O, Fe³⁺, CO₂ với chỉ số đúng vị trí; Na viết đứng; mũi tên → hoặc ⇌; điện tích ghi “3+”.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Khi sao chép công thức từ trang web hoặc PDF vào Word, chỉ số trên/dưới thường bị mất định dạng. Luôn kiểm tra lại toàn bộ sau khi dán.</div></div>\n\n<h2>Mẹo cho giáo viên soạn đề, giáo án</h2>\n<ul>\n  <li>Tạo một <b>Style riêng</b> cho phương trình phản ứng (căn giữa, cách đoạn trên dưới) để toàn bộ đề thống nhất.</li>\n  <li>Dùng <b>Find &amp; Replace</b> với định dạng để kiểm tra nhanh các công thức chưa có chỉ số.</li>\n  <li>Lưu một tệp “thư viện công thức” để sao chép khi soạn đề mới.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Ctrl + = cho chỉ số dưới, Ctrl + Shift + = cho chỉ số trên.</li><li>Ký hiệu nguyên tố luôn viết đứng; điện tích ghi số trước dấu sau (3+).</li><li>Lưu công thức hay dùng bằng AutoCorrect/Quick Parts để gõ nhanh.</li><li>Tài liệu học thuật nên cân nhắc LaTeX với gói mhchem.</li></ul></div>\n<p>Có đề thi, giáo án Hóa học viết tay hoặc bản scan cần số hóa? Dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a> của chúng tôi gõ chính xác từng chỉ số, đối chiếu với bản gốc.</p>",
    "faq": [
      {
        "q": "Phím tắt gõ chỉ số dưới trong Word là gì?",
        "a": "Nhấn Ctrl + = để bật chỉ số dưới (H₂O), nhấn lại để tắt. Chỉ số trên (điện tích ion, số mũ) dùng Ctrl + Shift + =."
      },
      {
        "q": "Gõ mũi tên phản ứng thuận nghịch ⇌ trong Word thế nào?",
        "a": "Vào Insert → Symbol → More Symbols, chọn bộ Arrows để chèn ⇌. Hoặc trong khung phương trình (Alt + =), gõ \\rightleftharpoons rồi nhấn phím cách."
      },
      {
        "q": "Có nên viết nghiêng ký hiệu nguyên tố hóa học không?",
        "a": "Không. Ký hiệu nguyên tố (H, O, Fe, Na…) luôn viết đứng, chữ cái đầu viết hoa, chữ thứ hai viết thường."
      }
    ],
    "cover": "/assets/img/blog/go-cong-thuc-hoa-hoc-trong-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "ve-cong-thuc-cau-tao-huu-co",
    "cat": "Học thuật",
    "date": "2026-10-07",
    "tags": [
      "Hóa hữu cơ",
      "Công thức cấu tạo",
      "ChemSketch",
      "chemfig"
    ],
    "title": "Vẽ công thức cấu tạo hóa hữu cơ đẹp cho giáo án, đề thi: công cụ và quy tắc trình bày",
    "seoTitle": "Vẽ công thức cấu tạo hóa hữu cơ cho giáo án, đề thi",
    "excerpt": "So sánh công cụ vẽ công thức cấu tạo hóa hữu cơ (ChemSketch, ChemDraw, chemfig, MolView) và quy tắc trình bày chuẩn cho giáo án, đề thi.",
    "body": "<p class=\"lead\">Giáo viên Hóa nào cũng từng mất cả buổi tối để vẽ một vòng benzen bằng Shapes trong Word, rồi đau đầu khi chỉnh một liên kết là cả hình xô lệch. Công thức cấu tạo đẹp, chuẩn không chỉ giúp đề thi chuyên nghiệp mà còn tránh để học sinh hiểu sai cấu trúc phân tử. Bài viết giới thiệu công cụ phù hợp và các quy tắc trình bày cơ bản.</p>\n\n<h2>Ba cách biểu diễn cấu tạo thường dùng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cách biểu diễn</th><th>Ví dụ</th><th>Phù hợp</th></tr>\n  <tr><td>Công thức cấu tạo đầy đủ</td><td>Vẽ đủ mọi liên kết C-H</td><td>Lớp 11 mới học, phân tử nhỏ</td></tr>\n  <tr><td>Công thức cấu tạo thu gọn</td><td>CH<sub>3</sub>-CH<sub>2</sub>-OH</td><td>Phần lớn đề thi phổ thông</td></tr>\n  <tr><td>Công thức khung (skeletal)</td><td>Đường gấp khúc, đỉnh là C</td><td>Đại học, phân tử lớn, vòng</td></tr>\n</table></div>\n\n<h2>So sánh công cụ vẽ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Công cụ</th><th>Ưu điểm</th><th>Lưu ý</th></tr>\n  <tr><td><b>ACD/ChemSketch</b></td><td>Có bản miễn phí cho cá nhân, học tập; thư viện vòng, nhóm chức</td><td>Giao diện cũ, cần cài đặt</td></tr>\n  <tr><td><b>ChemDraw</b></td><td>Chuẩn của nhiều tạp chí, tính năng mạnh</td><td>Phần mềm thương mại có phí</td></tr>\n  <tr><td><b>MolView</b></td><td>Chạy trên trình duyệt, xem được 3D</td><td>Xuất hình độ phân giải hạn chế</td></tr>\n  <tr><td><b>chemfig (LaTeX)</b></td><td>Mã nguồn, chỉnh sửa chính xác, đẹp khi in</td><td>Cần biết LaTeX</td></tr>\n  <tr><td>Shapes trong Word</td><td>Có sẵn</td><td>Khó căn góc 120°, dễ vỡ hình</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Với LaTeX, ví dụ <span class=\"mono\">\\chemfig{*6(=-=-=-)}</span> vẽ vòng benzen, kết hợp gói mhchem cho phương trình phản ứng. Xem thêm <a href=\"/blog/latex-cho-nguoi-moi\">LaTeX cho người mới</a>.</div></div>\n\n<h2>Quy tắc trình bày chuẩn</h2>\n<ol class=\"steps\">\n  <li><b>Góc liên kết đều</b>: mạch zigzag và vòng sáu cạnh dùng góc 120°; độ dài liên kết bằng nhau.</li>\n  <li><b>Liên kết đôi, ba</b> vẽ song song, khoảng cách đều, không chạm chữ.</li>\n  <li><b>Nhãn nguyên tử</b> (O, N, Cl) cùng phông, cùng cỡ với nội dung đề; chỉ số dưới đúng vị trí (OH, NH<sub>2</sub>).</li>\n  <li><b>Điện tích</b> đặt ở góc trên bên phải nguyên tử, có khoanh tròn hoặc không - thống nhất cả đề.</li>\n  <li><b>Cùng tỷ lệ</b>: các công thức trong một đề có độ dài liên kết như nhau.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Tạo một tệp “mẫu” với các nhóm hay dùng (benzen, -COOH, -NH<sub>2</sub>, -CHO) đã đúng tỷ lệ. Khi soạn đề mới, sao chép và ghép lại sẽ nhanh và đồng bộ hơn vẽ từ đầu.</div></div>\n\n<h2>Đưa hình vào Word đúng cách</h2>\n<ul>\n  <li>Ưu tiên định dạng vector (EMF, SVG) để in sắc nét ở mọi cỡ.</li>\n  <li>Nếu dùng PNG, xuất từ 300 dpi trở lên, nền trắng hoặc trong suốt.</li>\n  <li>Chọn <b>Wrap Text → In Line with Text</b> để hình không “trôi” khi sửa đề hoặc trộn đề.</li>\n  <li>Lưu tệp vẽ gốc cạnh tệp Word để chỉnh sửa sau này.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chụp màn hình công thức từ sách, tài liệu có bản quyền để đưa vào đề phát hành. Hãy vẽ lại - vừa đúng bản quyền, vừa sắc nét hơn.</div></div>\n\n<h2>Phương trình phản ứng hữu cơ</h2>\n<p>Phản ứng hữu cơ thường cần công thức cấu tạo hai vế cùng điều kiện phản ứng trên mũi tên. Hãy vẽ cả phương trình trong một công cụ để căn hàng chính xác, thay vì ghép nhiều hình nhỏ trong Word. Các quy tắc về chỉ số, điện tích, mũi tên xem tại bài <a href=\"/blog/go-cong-thuc-hoa-hoc-trong-word\">gõ công thức hóa học trong Word</a>.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chọn cách biểu diễn phù hợp trình độ: đầy đủ, thu gọn hay khung.</li><li>Dùng công cụ chuyên dụng thay cho Shapes trong Word.</li><li>Giữ góc 120°, độ dài liên kết và tỷ lệ thống nhất.</li><li>Chèn hình vector, In Line with Text, lưu tệp vẽ gốc.</li></ul></div>\n<p>Có giáo án, đề thi Hóa nhiều công thức cấu tạo cần số hóa? Xem dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a>.</p>",
    "faq": [
      {
        "q": "Có phần mềm miễn phí để vẽ công thức cấu tạo không?",
        "a": "Có. ACD/ChemSketch có bản miễn phí cho mục đích cá nhân và học tập; MolView chạy trên trình duyệt; người dùng LaTeX có thể dùng gói chemfig. Hãy đọc điều khoản giấy phép của từng công cụ trước khi dùng."
      },
      {
        "q": "Chèn công thức cấu tạo vào Word thế nào để in rõ nét?",
        "a": "Xuất hình ở định dạng vector (EMF, SVG) hoặc PNG độ phân giải cao (từ 300 dpi), chèn với kiểu In Line with Text và không phóng to quá kích thước gốc."
      },
      {
        "q": "Công thức thu gọn và công thức khung khác nhau thế nào?",
        "a": "Công thức thu gọn viết các nhóm nguyên tử theo dòng (như CH3-CH2-OH); công thức khung chỉ vẽ mạch carbon bằng các đoạn thẳng gấp khúc, không ghi C và H gắn với C."
      }
    ],
    "cover": "/assets/img/blog/ve-cong-thuc-cau-tao-huu-co.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "cong-thuc-google-docs",
    "cat": "Học thuật",
    "date": "2026-10-06",
    "tags": [
      "Google Docs",
      "Công thức toán",
      "Chỉ số trên dưới",
      "Làm việc nhóm"
    ],
    "title": "Gõ công thức trong Google Docs: cú pháp nhanh, chỉ số trên - dưới và những giới hạn cần biết",
    "seoTitle": "Gõ công thức toán trong Google Docs: cú pháp và mẹo",
    "excerpt": "Gõ công thức trong Google Docs: chèn phương trình, cú pháp gạch chéo ngược, chỉ số trên - dưới, giới hạn và cách chuyển sang Word.",
    "body": "<p class=\"lead\">Nhóm học tập cùng soạn đề cương, giáo viên tổ bộ môn cùng làm ngân hàng câu hỏi - Google Docs rất tiện vì nhiều người cùng chỉnh sửa trực tuyến. Nhưng khi đến phần công thức, nhiều người lúng túng. Google Docs có trình soạn công thức riêng, đủ cho phần lớn nhu cầu phổ thông nếu bạn biết vài cú pháp cơ bản.</p>\n\n<h2>Chèn công thức</h2>\n<ol class=\"steps\">\n  <li>Vào <b>Chèn → Phương trình</b> (Insert → Equation). Thanh công cụ ký hiệu xuất hiện phía trên.</li>\n  <li>Chọn nhóm ký hiệu: chữ Hy Lạp, toán tử, quan hệ, phép toán, mũi tên.</li>\n  <li>Hoặc gõ trực tiếp bằng cú pháp gạch chéo ngược, nhấn phím cách để chuyển thành ký hiệu.</li>\n</ol>\n\n<h2>Cú pháp gõ nhanh hay dùng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn gõ</th><th>Gõ trong khung công thức</th></tr>\n  <tr><td>Phân số</td><td><span class=\"mono\">\\frac</span> rồi phím cách, điền tử và mẫu</td></tr>\n  <tr><td>Căn bậc hai</td><td><span class=\"mono\">\\sqrt</span></td></tr>\n  <tr><td>Số mũ, chỉ số</td><td><span class=\"mono\">x^2</span>, <span class=\"mono\">a_n</span></td></tr>\n  <tr><td>Chữ Hy Lạp</td><td><span class=\"mono\">\\alpha \\beta \\pi \\Delta</span></td></tr>\n  <tr><td>Tổng, tích phân</td><td><span class=\"mono\">\\sum</span>, <span class=\"mono\">\\int</span></td></tr>\n  <tr><td>Quan hệ</td><td><span class=\"mono\">\\leq \\geq \\neq \\approx</span></td></tr>\n  <tr><td>Mũi tên</td><td><span class=\"mono\">\\rightarrow \\Rightarrow</span></td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Sau khi gõ chỉ số hoặc số mũ, nhấn phím mũi tên phải để thoát ra khỏi ô chỉ số trước khi gõ tiếp - lỗi “dính” chữ vào số mũ rất hay gặp.</div></div>\n\n<h2>Chỉ số trên - dưới cho chữ thường</h2>\n<p>Không phải lúc nào cũng cần khung công thức. Với công thức hóa học trong câu văn như H₂O, CO₂, Fe³⁺, hãy chọn ký tự và dùng:</p>\n<ul>\n  <li><kbd>Ctrl</kbd> + <kbd>,</kbd> - chỉ số dưới (H<sub>2</sub>O).</li>\n  <li><kbd>Ctrl</kbd> + <kbd>.</kbd> - chỉ số trên (Fe<sup>3+</sup>).</li>\n</ul>\n<p>Cách này giữ chữ cùng dòng, cùng phông với văn bản, đẹp hơn khung công thức cho các ký hiệu ngắn. Quy tắc trình bày hóa học xem tại <a href=\"/blog/go-cong-thuc-hoa-hoc-trong-word\">gõ công thức hóa học</a>.</p>\n\n<h2>Giới hạn của Google Docs</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Phù hợp</b>Công thức phổ thông, phân số, căn, số mũ, chữ Hy Lạp; soạn nhóm, góp ý trực tiếp; đề cương ôn tập, bài tập về nhà.</div>\n  <div class=\"bad\"><b>Hạn chế</b>Ma trận lớn, hệ phương trình nhiều dòng căn thẳng, đánh số phương trình tự động, sơ đồ phức tạp; tài liệu cần in ấn chuẩn xác.</div>\n</div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Tiện ích bổ sung (add-on) hỗ trợ LaTeX trong Google Docs có thể giúp gõ công thức phức tạp hơn. Hãy kiểm tra quyền truy cập dữ liệu mà tiện ích yêu cầu trước khi cài đặt.</div></div>\n\n<h2>Chuyển đổi giữa Google Docs, Word và LaTeX</h2>\n<ol class=\"steps\">\n  <li>Soạn nhóm trên Google Docs cho giai đoạn góp ý nội dung.</li>\n  <li>Tải về <b>.docx</b> khi cần định dạng cuối cùng; mở lại kiểm tra từng công thức.</li>\n  <li>Tài liệu học thuật nhiều công thức nên chuyển hẳn sang Word Equation hoặc LaTeX - xem <a href=\"/blog/go-ma-tran-he-phuong-trinh-word\">gõ ma trận, hệ phương trình</a> và <a href=\"/blog/latex-cho-nguoi-moi\">LaTeX cho người mới</a>.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chụp ảnh công thức rồi dán vào Docs để “cho nhanh” - người khác không sửa được, tìm kiếm không thấy và in ra dễ mờ.</div></div>\n\n<h2>Google Sheets: ký hiệu trong bảng tính</h2>\n<p>Google Sheets không có trình soạn công thức hiển thị như Docs. Với ký hiệu đơn vị, có thể dùng hàm <span class=\"mono\">UNICHAR</span> (ví dụ <span class=\"mono\">=UNICHAR(937)</span> cho Ω) hoặc sao chép ký tự Unicode. Bảng số liệu cần trình bày công thức đẹp nên đưa vào Docs hoặc Word.</p>\n\n<h2>Mẹo làm việc nhóm với công thức</h2>\n<ul>\n  <li>Thống nhất trước quy ước: biến nghiêng, đơn vị đứng, dấu thập phân là dấu phẩy.</li>\n  <li>Dùng chức năng <b>Nhận xét</b> để góp ý từng công thức thay vì sửa trực tiếp bài của người khác.</li>\n  <li>Bật <b>Lịch sử phiên bản</b> để khôi phục khi công thức bị xóa nhầm.</li>\n  <li>Đặt tên phiên bản quan trọng (ví dụ “Bản chốt đề cương”) trước khi chỉnh sửa lớn.</li>\n</ul>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chèn → Phương trình; gõ cú pháp gạch chéo ngược rồi nhấn phím cách.</li><li>Ctrl + , và Ctrl + . cho chỉ số dưới, trên trong câu văn.</li><li>Docs hợp soạn nhóm; tài liệu cuối nên kiểm tra lại trong Word/LaTeX.</li><li>Không dùng ảnh chụp công thức.</li></ul></div>",
    "faq": [
      {
        "q": "Google Docs có gõ công thức được không?",
        "a": "Có. Vào Chèn (Insert) → Phương trình (Equation) để mở thanh công cụ công thức, sau đó gõ ký hiệu bằng menu hoặc bằng cú pháp gạch chéo ngược như \\frac, \\sqrt, \\alpha."
      },
      {
        "q": "Gõ chỉ số dưới H₂O trong Google Docs thế nào?",
        "a": "Với chữ thường (không phải công thức), chọn ký tự rồi dùng phím tắt Ctrl + , (dấu phẩy) cho chỉ số dưới và Ctrl + . (dấu chấm) cho chỉ số trên."
      },
      {
        "q": "Công thức Google Docs có giữ nguyên khi tải về Word không?",
        "a": "Thường được chuyển đổi khi tải về định dạng .docx, nhưng công thức phức tạp có thể thay đổi bố cục. Luôn mở lại và kiểm tra trước khi nộp hoặc in."
      }
    ],
    "cover": "/assets/img/blog/cong-thuc-google-docs.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "body": "\n<p class=\"lead\">Một lỗi chính tả trong hợp đồng, báo cáo hay hồ sơ xin việc có thể làm người đọc đánh giá thấp cả tài liệu. Trong công việc biên tập hằng ngày, chúng tôi nhận thấy phần lớn lỗi lặp lại ở một nhóm từ quen thuộc. Dưới đây là 12 lỗi phổ biến nhất kèm cách nhớ.</p>\n\n<h2>Nhóm 1: Từ Hán Việt hay viết sai</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Viết sai</th><th>Viết đúng</th><th>Mẹo nhớ</th></tr>\n  <tr><td class=\"no\">chuẩn đoán</td><td class=\"ok\">chẩn đoán</td><td>“Chẩn” là khám bệnh, như trong “chẩn trị”.</td></tr>\n  <tr><td class=\"no\">sơ xuất</td><td class=\"ok\">sơ suất</td><td>“Suất” là sơ ý, sót. Không liên quan đến “xuất” (đi ra).</td></tr>\n  <tr><td class=\"no\">sáng lạn</td><td class=\"ok\">xán lạn</td><td>“Xán lạn” nghĩa là rực rỡ; “sáng lạn” là cách nói sai do liên tưởng.</td></tr>\n  <tr><td class=\"no\">bàng quang (với)</td><td class=\"ok\">bàng quan</td><td>“Bàng quan” là thờ ơ đứng ngoài; “bàng quang” là bộ phận cơ thể.</td></tr>\n  <tr><td class=\"no\">yếu điểm (= điểm yếu)</td><td class=\"ok\">điểm yếu</td><td>“Yếu điểm” nghĩa là điểm quan trọng, trái nghĩa hoàn toàn.</td></tr>\n  <tr><td class=\"no\">tham quan/thăm quan lẫn lộn</td><td class=\"ok\">tham quan</td><td>“Tham quan” là cách viết chuẩn trong từ điển.</td></tr>\n</table></div>\n\n<h2>Nhóm 2: Phụ âm đầu dễ nhầm</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Viết sai</th><th>Viết đúng</th><th>Ghi chú</th></tr>\n  <tr><td class=\"no\">suất sắc</td><td class=\"ok\">xuất sắc</td><td>“Xuất” là vượt lên, nổi bật.</td></tr>\n  <tr><td class=\"no\">chỉnh chu</td><td class=\"ok\">chỉn chu</td><td>Không có chữ “nh”, dù đọc gần giống “chỉnh”.</td></tr>\n  <tr><td class=\"no\">dành giật/giành dụm</td><td class=\"ok\">giành giật/dành dụm</td><td>“Giành” là tranh lấy; “dành” là để dụm, để riêng.</td></tr>\n  <tr><td class=\"no\">trau chuốt/chau chuốt lẫn lộn</td><td class=\"ok\">trau chuốt</td><td>“Trau” là sửa sang cho đẹp, như “trau dồi”.</td></tr>\n</table></div>\n\n<h2>Nhóm 3: Dấu hỏi – dấu ngã</h2>\n<p>Đây là nhóm lỗi khó nhất vì nhiều vùng phát âm hỏi và ngã như nhau. Hai trường hợp hay gặp:</p>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>“Mặc dù vậy, chúng tôi vẫn <u>giử</u> nguyên giá.”<br>“Sản phẩm đã được <u>kiễm</u> tra.”</div>\n  <div class=\"good\"><b>Đúng</b>“Mặc dù vậy, chúng tôi vẫn <b>giữ</b> nguyên giá.”<br>“Sản phẩm đã được <b>kiểm</b> tra.”</div>\n</div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Mẹo “Huyền – Ngã – Nặng”: trong từ láy âm, nếu một tiếng mang dấu huyền hoặc nặng thì tiếng kia thường mang dấu <b>ngã</b> (“nhõng nhẽo”, “vội vã”, “lặng lẽ”). Nếu một tiếng mang dấu ngang hoặc sắc thì tiếng kia thường mang dấu <b>hỏi</b> (“thơ thẩn”, “hớt hải”, “vui vẻ”). Quy tắc có ngoại lệ nhưng đúng trong phần lớn trường hợp.</div></div>\n\n<h2>Nhóm 4: “Giả thiết” và “giả thuyết”</h2>\n<p>Hai từ này có nghĩa khác nhau và đều đúng chính tả. <b>Giả thiết</b> là điều cho trước để suy luận, như trong bài toán. <b>Giả thuyết</b> là điều đưa ra để kiểm chứng, như trong nghiên cứu khoa học. Luận văn thường cần “giả thuyết nghiên cứu”, không phải “giả thiết nghiên cứu”.</p>\n\n<h2>Quy trình tự soát lỗi trong 10 phút</h2>\n<ol class=\"steps\">\n  <li>Bật kiểm tra chính tả tiếng Việt trong Word hoặc Google Docs. Công cụ này không bắt được mọi lỗi, nhưng lọc được lỗi gõ phím.</li>\n  <li>Dùng <b>Tìm kiếm</b> (<kbd>Ctrl</kbd> + <kbd>F</kbd>) với danh sách các từ hay sai ở trên.</li>\n  <li>Đọc to văn bản. Tai thường bắt được câu lủng củng mà mắt bỏ qua.</li>\n  <li>Đọc lại vào lúc khác, sau khi đã nghỉ một lúc, để nhìn văn bản bằng con mắt mới.</li>\n</ol>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Phần lớn lỗi tập trung vào một nhóm từ quen thuộc: hãy lập danh sách riêng để dò.</li><li>Mẹo Huyền – Ngã – Nặng giúp xử lý phần lớn từ láy hỏi/ngã.</li><li>“Giả thuyết” dùng trong nghiên cứu; “giả thiết” dùng cho điều cho trước.</li><li>Công cụ kiểm tra chính tả chỉ là bước đầu, vẫn cần người đọc soát.</li></ul></div>\n<p>Tài liệu quan trọng cần hoàn hảo? Dịch vụ <a href=\"/dich-vu/bien-tap-tai-lieu\">biên tập, hiệu đính</a> của chúng tôi rà soát từng câu, có đánh dấu thay đổi để bạn dễ duyệt.</p>",
    "cover": "/assets/img/blog/loi-chinh-ta-tieng-viet.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "go-cong-thuc-vat-ly-don-vi-si",
    "cat": "Học thuật",
    "date": "2026-10-05",
    "tags": [
      "Công thức vật lý",
      "Đơn vị SI",
      "Vectơ",
      "Trình bày khoa học"
    ],
    "title": "Gõ công thức vật lý và đơn vị SI đúng chuẩn: vectơ, hằng số, chữ nghiêng hay đứng",
    "seoTitle": "Gõ công thức vật lý, đơn vị SI đúng chuẩn trình bày",
    "excerpt": "Khi nào viết nghiêng, khi nào viết đứng? Cách gõ vectơ, đơn vị SI, hằng số vật lý, khoảng cách giữa số và đơn vị đúng chuẩn trình bày khoa học trong Word và LaTeX.",
    "body": "<p class=\"lead\">Trong một bài giảng vật lý, “m” có thể là khối lượng hoặc mét, “s” có thể là quãng đường hoặc giây. Chính quy ước trình bày - chữ nghiêng hay chữ đứng, có dấu cách hay không - giúp người đọc phân biệt. Nắm vững vài quy tắc dưới đây, tài liệu của bạn sẽ chuẩn như sách giáo khoa và bài báo khoa học.</p>\n\n<h2>Quy tắc vàng: nghiêng cho đại lượng, đứng cho đơn vị</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thành phần</th><th>Kiểu chữ</th><th>Ví dụ</th></tr>\n  <tr><td>Ký hiệu đại lượng (biến)</td><td>Nghiêng</td><td><i>m</i>, <i>v</i>, <i>t</i>, <i>F</i>, <i>E</i></td></tr>\n  <tr><td>Ký hiệu đơn vị</td><td>Đứng</td><td>m, kg, s, N, J, Pa</td></tr>\n  <tr><td>Chỉ số mang tính mô tả</td><td>Đứng</td><td><i>E</i><sub>k</sub> (động năng), <i>v</i><sub>max</sub></td></tr>\n  <tr><td>Chỉ số là biến</td><td>Nghiêng</td><td><i>x<sub>i</sub></i>, <i>F<sub>n</sub></i></td></tr>\n  <tr><td>Hàm và toán tử</td><td>Đứng</td><td>sin, cos, log, d trong d<i>x</i></td></tr>\n  <tr><td>Số</td><td>Đứng</td><td>9,81; 3 × 10⁸</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Quy ước này được trình bày trong tiêu chuẩn quốc tế về đại lượng và đơn vị (bộ ISO/IEC 80000) và trong tài liệu hướng dẫn của Văn phòng Cân đo Quốc tế về hệ SI. Nhiều tạp chí khoa học yêu cầu tác giả tuân theo.</div></div>\n\n<h2>Số và đơn vị: những chi tiết dễ sai</h2>\n<ul>\n  <li><b>Có khoảng trắng giữa số và đơn vị</b>: 9,81 m/s², 220 V, 25 °C. Ngoại lệ phổ biến là độ góc: 30°.</li>\n  <li><b>Không thêm “s” số nhiều</b> và không viết tắt tùy tiện: “5 kg”, không phải “5 kgs” hay “5 Kg”.</li>\n  <li><b>Phân biệt chữ hoa, chữ thường</b>: k (kilo) khác K (kelvin); m (mili) khác M (mega).</li>\n  <li><b>Đơn vị ghép</b> dùng dấu chấm giữa hoặc khoảng trắng hẹp: N·m, kg·m/s².</li>\n  <li><b>Dấu thập phân</b>: tiếng Việt dùng dấu phẩy (9,81) - cần thống nhất trong toàn tài liệu.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Để số và đơn vị không bị tách ra hai dòng, chèn <b>khoảng trắng không ngắt dòng</b> bằng <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Space</kbd> trong Word, hoặc dùng dấu ngã <span class=\"mono\">~</span> trong LaTeX (<span class=\"mono\">9,81~m/s^2</span>).</div></div>\n\n<h2>Cách gõ vectơ</h2>\n<p>Có hai kiểu trình bày vectơ phổ biến, hãy chọn một và dùng thống nhất:</p>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Mũi tên phía trên</b>Thường dùng trong sách giáo khoa phổ thông Việt Nam: F⃗, v⃗. Trong Word Equation gõ <span class=\"mono\">F\\vec</span> rồi nhấn phím cách.</div>\n  <div class=\"good\"><b>Chữ đậm, đứng hoặc nghiêng</b>Phổ biến trong tài liệu đại học và bài báo: <b>F</b>, <b>v</b>. Trong LaTeX dùng <span class=\"mono\">\\mathbf{F}</span> hoặc gói hỗ trợ vectơ.</div>\n</div>\n\n<h2>Hằng số vật lý thường dùng</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Hằng số</th><th>Ký hiệu</th><th>Giá trị</th></tr>\n  <tr><td>Tốc độ ánh sáng trong chân không</td><td><i>c</i></td><td>299 792 458 m/s (chính xác)</td></tr>\n  <tr><td>Hằng số Planck</td><td><i>h</i></td><td>6,626 070 15 × 10⁻³⁴ J·s (chính xác)</td></tr>\n  <tr><td>Điện tích nguyên tố</td><td><i>e</i></td><td>1,602 176 634 × 10⁻¹⁹ C (chính xác)</td></tr>\n  <tr><td>Hằng số Avogadro</td><td><i>N</i><sub>A</sub></td><td>6,022 140 76 × 10²³ mol⁻¹ (chính xác)</td></tr>\n  <tr><td>Gia tốc trọng trường tiêu chuẩn</td><td><i>g</i><sub>n</sub></td><td>9,806 65 m/s² (quy ước)</td></tr>\n</table></div>\n<p>Từ năm 2019, các hằng số <i>c</i>, <i>h</i>, <i>e</i>, <i>N</i><sub>A</sub> được ấn định giá trị chính xác để định nghĩa lại các đơn vị cơ bản của hệ SI. Trong bài tập phổ thông, giá trị thường được làm tròn, ví dụ <i>g</i> ≈ 9,8 m/s².</p>\n\n<h2>Gõ trong Word hay LaTeX?</h2>\n<p>Word Equation (<kbd>Alt</kbd> + <kbd>=</kbd>) tự động in nghiêng các chữ cái - rất tiện cho biến nhưng sai với đơn vị. Hãy bôi đen đơn vị và chuyển sang <b>Normal Text</b>. Trong LaTeX, gói <span class=\"mono\">siunitx</span> xử lý tự động: <span class=\"mono\">\\qty{9.81}{m/s^2}</span> cho ra số và đơn vị đúng chuẩn, kèm khoảng trắng chuẩn xác. Xem thêm <a href=\"/blog/danh-may-cong-thuc-toan\">so sánh Word Equation, MathType và LaTeX</a>.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đừng trộn nhiều kiểu trình bày trong một tài liệu: chỗ vectơ có mũi tên, chỗ dùng chữ đậm; chỗ dấu phẩy thập phân, chỗ dấu chấm. Người chấm bài và phản biện rất dễ nhận ra.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Đại lượng viết nghiêng, đơn vị viết đứng.</li><li>Có khoảng trắng giữa số và đơn vị (trừ độ góc).</li><li>Chọn một kiểu vectơ và dùng thống nhất.</li><li>LaTeX với siunitx giúp trình bày đơn vị tự động, chuẩn xác.</li></ul></div>\n<p>Cần số hóa giáo trình, đề thi Vật lý nhiều công thức? Xem dịch vụ <a href=\"/dich-vu/danh-may-latex\">đánh máy LaTeX</a> và <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a>.</p>",
    "faq": [
      {
        "q": "Đơn vị đo có viết nghiêng không?",
        "a": "Không. Ký hiệu đơn vị (m, kg, s, N, J, °C) luôn viết đứng. Chỉ ký hiệu đại lượng biến thiên như m (khối lượng), v (vận tốc), t (thời gian) mới viết nghiêng."
      },
      {
        "q": "Có cần dấu cách giữa số và đơn vị không?",
        "a": "Có. Theo quy ước của hệ đơn vị SI, giữa giá trị số và ký hiệu đơn vị có một khoảng trắng: 9,81 m/s², 25 °C. Ngoại lệ thường gặp là ký hiệu độ góc: 30°."
      },
      {
        "q": "Gõ vectơ trong Word thế nào?",
        "a": "Trong khung phương trình (Alt + =), gõ ký hiệu rồi dùng Accent → mũi tên phía trên, hoặc gõ F\\vec rồi nhấn phím cách. Một số tài liệu dùng chữ đậm đứng cho vectơ thay cho mũi tên."
      }
    ],
    "cover": "/assets/img/blog/go-cong-thuc-vat-ly-don-vi-si.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "ky-hieu-dien-hoc-so-do-mach",
    "cat": "Học thuật",
    "date": "2026-10-04",
    "tags": [
      "Vật lý",
      "Sơ đồ mạch điện",
      "Ký hiệu đặc biệt",
      "Đề thi"
    ],
    "title": "Gõ ký hiệu điện học (Ω, µF, ε) và vẽ sơ đồ mạch điện cho đề thi Vật lý",
    "seoTitle": "Gõ ký hiệu điện học, vẽ sơ đồ mạch điện cho tài liệu Vật lý",
    "excerpt": "Cách gõ Ω, µ, Δ, ε bằng Alt + X trong Word và vẽ sơ đồ mạch điện chuẩn bằng draw.io, CircuiTikZ cho đề thi, giáo án Vật lý.",
    "body": "<p class=\"lead\">Đề thi Vật lý phần Điện thường dày đặc ký hiệu: Ω, µF, ε, ξ, ∆U, cùng các sơ đồ mạch điện có điện trở, tụ điện, nguồn, ampe kế. Gõ sai một ký hiệu (µ thành u, Ω thành W) hay vẽ mạch lệch dây đều khiến học sinh hiểu nhầm đề. Bài viết hướng dẫn cách gõ ký hiệu nhanh và vẽ sơ đồ mạch chuẩn.</p>\n\n<h2>Bảng ký hiệu và cách gõ nhanh trong Word</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Gõ mã rồi <kbd>Alt</kbd> + <kbd>X</kbd></th></tr>\n  <tr><td>Ω</td><td>Ôm (điện trở)</td><td><span class=\"mono\">03A9</span></td></tr>\n  <tr><td>µ</td><td>Tiền tố micro (µF, µA)</td><td><span class=\"mono\">00B5</span></td></tr>\n  <tr><td>Δ</td><td>Độ biến thiên (ΔU, Δt)</td><td><span class=\"mono\">0394</span></td></tr>\n  <tr><td>ε</td><td>Hằng số điện môi</td><td><span class=\"mono\">03B5</span></td></tr>\n  <tr><td>ξ</td><td>Suất điện động (một số sách)</td><td><span class=\"mono\">03BE</span></td></tr>\n  <tr><td>φ</td><td>Pha, từ thông</td><td><span class=\"mono\">03C6</span></td></tr>\n  <tr><td>°</td><td>Độ</td><td><span class=\"mono\">00B0</span></td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Ký hiệu dùng nhiều thì tạo AutoCorrect: ví dụ gõ “\\ohm” tự đổi thành Ω. Trong khung Equation (<kbd>Alt</kbd> + <kbd>=</kbd>), gõ \\Omega, \\mu, \\Delta rồi nhấn phím cách cũng được.</div></div>\n\n<h2>Đơn vị và tiền tố: tránh nhầm lẫn</h2>\n<ul>\n  <li><b>µ (micro, 10<sup>-6</sup>)</b> khác <b>m (mili, 10<sup>-3</sup>)</b>: 10 µF khác 10 mF tới 1000 lần.</li>\n  <li><b>Không thay µ bằng chữ u</b> trong tài liệu chính thức.</li>\n  <li><b>Ký hiệu đơn vị viết đứng</b>, đại lượng viết nghiêng: <i>R</i> = 10 Ω, <i>C</i> = 4,7 µF. Xem thêm <a href=\"/blog/go-cong-thuc-vat-ly-don-vi-si\">đơn vị SI đúng chuẩn</a>.</li>\n</ul>\n\n<h2>Vẽ sơ đồ mạch điện</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Công cụ</th><th>Ưu điểm</th><th>Lưu ý</th></tr>\n  <tr><td><b>draw.io (diagrams.net)</b></td><td>Miễn phí, chạy trên trình duyệt, có thư viện Electrical</td><td>Xuất SVG/PNG để chèn Word</td></tr>\n  <tr><td><b>CircuiTikZ (LaTeX)</b></td><td>Đẹp, chính xác, sửa bằng mã</td><td>Cần biết LaTeX</td></tr>\n  <tr><td>Phần mềm mô phỏng mạch</td><td>Vừa vẽ vừa kiểm tra mạch</td><td>Ký hiệu có thể khác chuẩn sách</td></tr>\n  <tr><td>Shapes trong Word</td><td>Có sẵn</td><td>Dây dễ lệch, khó sửa</td></tr>\n</table></div>\n<pre class=\"code\"><code>\\begin{circuitikz}\n  \\draw (0,0) to[battery1, l=$\\xi$] (0,2)\n        to[R, l=$R_1$] (3,2)\n        to[C, l=$C$] (3,0) -- (0,0);\n\\end{circuitikz}</code></pre>\n\n<h2>Quy tắc trình bày sơ đồ</h2>\n<ol class=\"steps\">\n  <li><b>Dây dẫn thẳng, gấp góc vuông</b>, không chéo trừ khi bắt buộc.</li>\n  <li><b>Điểm nối</b> đánh dấu chấm đậm; hai dây cắt nhau không có chấm nghĩa là không nối.</li>\n  <li><b>Nhãn linh kiện</b> (R<sub>1</sub>, R<sub>2</sub>, C, K) đặt gần ký hiệu, không đè lên dây.</li>\n  <li><b>Thống nhất chuẩn ký hiệu</b>: điện trở hình chữ nhật (IEC) hay răng cưa (ANSI) - chọn một.</li>\n  <li><b>Chiều dòng điện</b>, cực nguồn (+/-) ghi rõ nếu đề yêu cầu.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Sơ đồ chụp từ sách rồi chèn vào đề thường mờ khi photo nhiều lần. Vẽ lại bằng công cụ vector giúp đề in rõ ở mọi máy photo.</div></div>\n\n<h2>Đưa sơ đồ vào đề thi</h2>\n<p>Xuất hình dạng SVG hoặc EMF nếu có thể, đặt <b>In Line with Text</b>, căn giữa và thêm nhãn “Hình 1”. Với đề trắc nghiệm cần trộn đề, giữ hình nằm trong câu hỏi tương ứng để phần mềm trộn không làm lạc hình - xem <a href=\"/blog/so-hoa-de-thi-toan\">quy trình số hóa đề thi</a>.</p>\n\n<h2>Tiền tố đơn vị hay gặp trong phần Điện</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiền tố</th><th>Ký hiệu</th><th>Giá trị</th><th>Ví dụ</th></tr>\n  <tr><td>pico</td><td>p</td><td>10<sup>-12</sup></td><td>22 pF</td></tr>\n  <tr><td>nano</td><td>n</td><td>10<sup>-9</sup></td><td>100 nF</td></tr>\n  <tr><td>micro</td><td>µ</td><td>10<sup>-6</sup></td><td>4,7 µF</td></tr>\n  <tr><td>mili</td><td>m</td><td>10<sup>-3</sup></td><td>20 mA</td></tr>\n  <tr><td>kilo</td><td>k</td><td>10<sup>3</sup></td><td>2,2 kΩ</td></tr>\n  <tr><td>mega</td><td>M</td><td>10<sup>6</sup></td><td>1 MΩ</td></tr>\n</table></div>\n<p>Lưu ý chữ hoa, chữ thường: <b>m</b> (mili) và <b>M</b> (mega) chênh nhau 10<sup>9</sup> lần; <b>k</b> (kilo) luôn viết thường.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Gõ mã Unicode rồi Alt + X để có Ω, µ, Δ, ε nhanh.</li><li>Phân biệt µ và m; đơn vị viết đứng, đại lượng viết nghiêng.</li><li>Vẽ mạch bằng draw.io hoặc CircuiTikZ thay cho Shapes.</li><li>Thống nhất chuẩn ký hiệu và cách đánh dấu điểm nối.</li></ul></div>\n<p>Cần số hóa bộ đề Vật lý có nhiều sơ đồ mạch? Xem dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a> và <a href=\"/dich-vu/danh-may-latex\">đánh máy LaTeX</a>.</p>",
    "faq": [
      {
        "q": "Phím tắt gõ ký hiệu Ω trong Word là gì?",
        "a": "Gõ 03A9 rồi nhấn Alt + X, Word đổi thành Ω. Tương tự 00B5 + Alt + X cho µ, 0394 + Alt + X cho Δ. Trên bàn phím số có thể dùng Alt + 234 cho Ω."
      },
      {
        "q": "Nên vẽ sơ đồ mạch điện bằng công cụ gì?",
        "a": "draw.io (diagrams.net) miễn phí, có thư viện ký hiệu điện; người dùng LaTeX có gói CircuiTikZ. Tránh vẽ bằng Shapes rời rạc trong Word vì khó căn chỉnh."
      },
      {
        "q": "Ký hiệu điện trở hình chữ nhật hay răng cưa?",
        "a": "Hình chữ nhật theo chuẩn IEC, răng cưa theo chuẩn ANSI của Mỹ. Tài liệu tiếng Việt thường dùng ký hiệu hình chữ nhật; điều quan trọng là thống nhất trong toàn bộ tài liệu."
      }
    ],
    "cover": "/assets/img/blog/ky-hieu-dien-hoc-so-do-mach.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "phuong-trinh-oxi-hoa-khu",
    "cat": "Học thuật",
    "date": "2026-10-03",
    "tags": [
      "Oxi hóa - khử",
      "Hóa học",
      "Số oxi hóa",
      "Cân bằng phương trình"
    ],
    "title": "Trình bày phản ứng oxi hóa - khử trong Word: ghi số oxi hóa, quá trình nhường - nhận electron đúng chuẩn",
    "seoTitle": "Trình bày phản ứng oxi hóa - khử, cân bằng electron trong Word",
    "excerpt": "Cách ghi số oxi hóa phía trên nguyên tố, viết quá trình nhường - nhận electron và cân bằng phản ứng oxi hóa - khử trong Word, LaTeX.",
    "body": "<p class=\"lead\">Phản ứng oxi hóa - khử là phần mà giáo án, đề thi Hóa học cần trình bày cẩn thận nhất: số oxi hóa đặt phía trên nguyên tố, các quá trình nhường - nhận electron xếp thẳng hàng, hệ số nhân rõ ràng. Gõ bằng chữ thường và khoảng trắng thì chỉ cần đổi phông là vỡ hết. Bài viết hướng dẫn cách trình bày chuẩn, bền vững trong Word và LaTeX.</p>\n<figure><img src=\"/assets/img/blog/fig-oxi-hoa-khu.svg\" alt=\"Ví dụ trình bày số oxi hóa và quá trình nhường nhận electron\" loading=\"lazy\" width=\"960\"><figcaption>Ví dụ Cu + HNO₃ loãng: hai quá trình nhường - nhận electron ghi kèm số oxi hóa, xếp thẳng hàng, hệ số nhân ở bên phải.</figcaption></figure>\n\n<h2>Quy ước ghi số oxi hóa</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nội dung</th><th>Cách ghi</th><th>Ví dụ</th></tr>\n  <tr><td>Số oxi hóa</td><td>Dấu trước số, đặt phía trên nguyên tố</td><td>Fe với +3 ở trên</td></tr>\n  <tr><td>Điện tích ion</td><td>Số trước dấu, chỉ số trên bên phải</td><td>Fe<sup>3+</sup>, SO<sub>4</sub><sup>2−</sup></td></tr>\n  <tr><td>Số oxi hóa bằng 0</td><td>Ghi 0 phía trên đơn chất</td><td>Cu với 0 ở trên</td></tr>\n</table></div>\n\n<h2>Ví dụ: Cu tác dụng với HNO₃ loãng</h2>\n<p>Số oxi hóa thay đổi: Cu từ 0 lên +2; N từ +5 xuống +2.</p>\n<ul>\n  <li><b>Quá trình oxi hóa</b>: Cu<sup>0</sup> → Cu<sup>+2</sup> + 2e &nbsp; | × 3</li>\n  <li><b>Quá trình khử</b>: N<sup>+5</sup> + 3e → N<sup>+2</sup> &nbsp; | × 2</li>\n</ul>\n<p>Phương trình đã cân bằng: <b>3Cu + 8HNO<sub>3</sub> → 3Cu(NO<sub>3</sub>)<sub>2</sub> + 2NO↑ + 4H<sub>2</sub>O</b>.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Trong bài viết web, số oxi hóa được minh họa bằng chỉ số trên cho dễ đọc. Trong giáo án, đề thi nên đặt số oxi hóa đúng vị trí phía trên ký hiệu như hướng dẫn dưới đây.</div></div>\n\n<h2>Gõ trong Word</h2>\n<ol class=\"steps\">\n  <li>Nhấn <kbd>Alt</kbd> + <kbd>=</kbd> mở khung Equation.</li>\n  <li>Gõ <span class=\"mono\">Fe\\above(+3)</span> rồi phím cách để đặt +3 phía trên Fe (hoặc chọn mẫu đặt chữ phía trên trong nhóm cấu trúc).</li>\n  <li>Chuyển ký hiệu nguyên tố về chữ đứng (Normal Text) để đúng quy ước hóa học.</li>\n  <li>Các quá trình electron đặt trong một bảng hai cột không viền: cột trái là quá trình, cột phải là “× 3”, “× 2” - luôn thẳng hàng khi sửa.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng bảng không viền thay vì phím cách hoặc Tab để căn hệ số nhân. Khi đổi phông, đổi cỡ chữ, các cột vẫn thẳng.</div></div>\n\n<h2>Gõ trong LaTeX</h2>\n<pre class=\"code\"><code>\\usepackage{amsmath}\n\\usepackage[version=4]{mhchem}\n\n$\\overset{0}{\\mathrm{Cu}} \\rightarrow \\overset{+2}{\\mathrm{Cu}} + 2e \\quad | \\times 3$\n\n\\ce{3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO ^ + 4H2O}</code></pre>\n<p>Gói <span class=\"mono\">mhchem</span> tự xử lý chỉ số, mũi tên và ký hiệu khí bay lên; <span class=\"mono\">\\overset</span> đặt số oxi hóa phía trên. Xem thêm <a href=\"/blog/latex-cho-nguoi-moi\">LaTeX cho người mới</a>.</p>\n\n<h2>Lỗi trình bày thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>Viết số oxi hóa “3+” (nhầm với điện tích ion); căn quá trình electron bằng phím cách; thiếu dấu khí ↑, kết tủa ↓; quên “(loãng)”, “(đặc, nóng)” sau axit.</div>\n  <div class=\"good\"><b>Đúng</b>Số oxi hóa “+3” phía trên; bảng không viền cho hệ số nhân; ghi rõ điều kiện, trạng thái; kiểm tra lại tổng electron nhường = nhận.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Khi sao chép phương trình từ tài liệu PDF, chỉ số và số oxi hóa thường bị dồn xuống dòng chữ thường. Hãy kiểm tra lại từng chất sau khi dán.</div></div>\n\n<h2>Mẹo soạn nhanh nhiều phương trình</h2>\n<p>Với giáo án có hàng chục phản ứng, hãy tạo một bảng mẫu gồm hai cột quá trình electron và một dòng phương trình tổng, lưu vào Quick Parts. Mỗi phản ứng mới chỉ cần sao chép bảng mẫu và thay chất. Nếu soạn trong LaTeX, định nghĩa sẵn một lệnh tắt cho số oxi hóa (ví dụ <span class=\"mono\">\\newcommand{\\so}[2]{\\overset{#1}{\\mathrm{#2}}}</span>) để gõ <span class=\"mono\">\\so{+5}{N}</span> gọn hơn.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Số oxi hóa: dấu trước số, đặt phía trên nguyên tố.</li><li>Điện tích ion: số trước dấu, chỉ số trên bên phải.</li><li>Dùng Equation hoặc \\overset (LaTeX) thay cho căn tay.</li><li>Căn quá trình electron bằng bảng không viền.</li></ul></div>\n<p>Cần số hóa giáo án, đề thi Hóa học? Xem dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a>.</p>",
    "faq": [
      {
        "q": "Số oxi hóa và điện tích ion viết khác nhau thế nào?",
        "a": "Theo cách trình bày phổ biến trong sách giáo khoa Việt Nam, số oxi hóa ghi dấu trước số và đặt phía trên ký hiệu nguyên tố (+3), còn điện tích ion ghi số trước dấu ở chỉ số trên (Fe³⁺)."
      },
      {
        "q": "Làm sao đặt số phía trên ký hiệu nguyên tố trong Word?",
        "a": "Trong khung Equation có thể dùng cấu trúc đặt chữ phía trên (above), ví dụ gõ Fe\\above(+3) rồi phím cách; trong LaTeX dùng \\overset{+3}{\\mathrm{Fe}}."
      },
      {
        "q": "Phương pháp thăng bằng electron gồm những bước nào?",
        "a": "Xác định số oxi hóa thay đổi, viết quá trình oxi hóa và khử, tìm hệ số sao cho tổng electron nhường bằng tổng electron nhận, đặt hệ số vào phương trình rồi cân bằng các nguyên tố còn lại."
      }
    ],
    "cover": "/assets/img/blog/phuong-trinh-oxi-hoa-khu.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "latex-cho-nguoi-moi",
    "cat": "Học thuật",
    "date": "2026-10-03",
    "tags": [
      "LaTeX",
      "Overleaf",
      "Công thức toán",
      "Luận văn"
    ],
    "title": "LaTeX cho người mới bắt đầu: soạn tài liệu tiếng Việt có công thức trong 30 phút",
    "seoTitle": "LaTeX cho người mới: soạn tài liệu tiếng Việt từ A–Z",
    "excerpt": "LaTeX là chuẩn soạn thảo của giới Toán, Lý, Kỹ thuật. Hướng dẫn cho người mới: cấu trúc tệp, gõ tiếng Việt, công thức, bảng, hình, trích dẫn và các lỗi biên dịch hay gặp.",
    "body": "<p class=\"lead\">Nếu từng đọc một bài báo Toán, một giáo trình Vật lý đại học hay luận án Kỹ thuật, nhiều khả năng bạn đã xem một tài liệu soạn bằng LaTeX. Khác với Word “thấy gì được nấy”, LaTeX cho phép bạn viết nội dung và để máy lo phần trình bày. Bài viết giúp người mới viết được tài liệu tiếng Việt đầu tiên có công thức chỉ trong khoảng 30 phút.</p>\n<figure><img src=\"/assets/img/blog/fig-latex-cau-truc.svg\" alt=\"Cấu trúc một tệp LaTeX và bản PDF kết quả\" loading=\"lazy\" width=\"960\"><figcaption>Tệp .tex gồm phần khai báo (preamble) và phần nội dung; trình biên dịch tạo ra bản PDF trình bày chuẩn.</figcaption></figure>\n\n<h2>Vì sao nên học LaTeX?</h2>\n<ul>\n  <li><b>Công thức đẹp và nhất quán</b>, kể cả công thức nhiều tầng, ma trận, hệ phương trình.</li>\n  <li><b>Tự động đánh số</b> mục, hình, bảng, phương trình và tham chiếu chéo.</li>\n  <li><b>Quản lý tài liệu tham khảo</b> với BibTeX/BibLaTeX theo chuẩn APA, IEEE…</li>\n  <li><b>Tài liệu dài vẫn ổn định</b>: luận văn hàng trăm trang không bị “nhảy định dạng”.</li>\n  <li>Nhiều tạp chí, hội nghị cung cấp <b>mẫu LaTeX</b> chính thức.</li>\n</ul>\n\n<h2>Bắt đầu ở đâu: Overleaf hay cài trên máy?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Overleaf (trực tuyến)</b>Không cần cài đặt, có sẵn mẫu, cộng tác nhiều người. Phù hợp người mới và nhóm nghiên cứu.</div>\n  <div class=\"good\"><b>TeX Live/MiKTeX (trên máy)</b>Làm việc ngoại tuyến, tốc độ biên dịch ổn định với tài liệu lớn. Dùng kèm TeXstudio hoặc VS Code.</div>\n</div>\n\n<h2>Tệp LaTeX đầu tiên có tiếng Việt</h2>\n<p>Tạo dự án mới, dán đoạn mã sau và biên dịch:</p>\n<pre class=\"code\"><code>\\documentclass[12pt,a4paper]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage[vietnamese]{babel}\n\\usepackage{amsmath,amssymb}\n\n\\title{Bài tập Giải tích}\n\\author{Nguyễn Văn A}\n\n\\begin{document}\n\\maketitle\n\\section{Đạo hàm}\nĐạo hàm của hàm số $f(x) = x^2 + 3x$ là $f'(x) = 2x + 3$.\n\\end{document}</code></pre>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Nếu dùng XeLaTeX hoặc LuaLaTeX (khuyên dùng khi cần phông chữ riêng như Times New Roman), thay hai dòng inputenc/babel bằng gói <span class=\"mono\">fontspec</span> và lệnh chọn phông có hỗ trợ tiếng Việt.</div></div>\n\n<h2>Công thức: cú pháp cần nhớ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Muốn viết</th><th>Cú pháp LaTeX</th></tr>\n  <tr><td>Công thức trong dòng</td><td><span class=\"mono\">$a^2 + b^2 = c^2$</span></td></tr>\n  <tr><td>Công thức riêng dòng, có số</td><td><span class=\"mono\">\\begin{equation} ... \\end{equation}</span></td></tr>\n  <tr><td>Phân số, căn</td><td><span class=\"mono\">\\frac{a}{b}</span>, <span class=\"mono\">\\sqrt{x}</span>, <span class=\"mono\">\\sqrt[3]{x}</span></td></tr>\n  <tr><td>Chỉ số trên, dưới</td><td><span class=\"mono\">x^{2n}</span>, <span class=\"mono\">a_{ij}</span></td></tr>\n  <tr><td>Tổng, tích phân, giới hạn</td><td><span class=\"mono\">\\sum_{i=1}^{n}</span>, <span class=\"mono\">\\int_0^1</span>, <span class=\"mono\">\\lim_{x\\to 0}</span></td></tr>\n  <tr><td>Chữ Hy Lạp</td><td><span class=\"mono\">\\alpha, \\beta, \\Delta, \\pi</span></td></tr>\n  <tr><td>Hệ phương trình</td><td><span class=\"mono\">\\begin{cases} ... \\end{cases}</span></td></tr>\n  <tr><td>Ma trận</td><td><span class=\"mono\">\\begin{pmatrix} a &amp; b \\\\ c &amp; d \\end{pmatrix}</span></td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Trong Word, khung Equation (<kbd>Alt</kbd> + <kbd>=</kbd>) cũng hiểu nhiều lệnh LaTeX như <span class=\"mono\">\\frac</span>, <span class=\"mono\">\\alpha</span>. Học LaTeX giúp bạn gõ công thức nhanh hơn ở cả hai nơi.</div></div>\n\n<h2>Bảng, hình và tham chiếu chéo</h2>\n<p>Đặt nhãn bằng <span class=\"mono\">\\label{...}</span> và gọi lại bằng <span class=\"mono\">\\ref{...}</span>. Khi thêm, bớt hình hay phương trình, mọi số thứ tự tự cập nhật - điều mà Word rất dễ làm sai trong tài liệu dài.</p>\n<pre class=\"code\"><code>\\begin{figure}[ht]\n  \\centering\n  \\includegraphics[width=.7\\textwidth]{do-thi.png}\n  \\caption{Đồ thị hàm số}\n  \\label{fig:dothi}\n\\end{figure}\nNhư Hình~\\ref{fig:dothi} cho thấy...</code></pre>\n\n<h2>5 lỗi biên dịch người mới hay gặp</h2>\n<ol class=\"steps\">\n  <li><b>Thiếu dấu đóng</b> <span class=\"mono\">}</span> hoặc <span class=\"mono\">$</span>: đọc dòng báo lỗi, kiểm tra cặp ngoặc gần đó.</li>\n  <li><b>Ký tự đặc biệt</b> <span class=\"mono\">% &amp; # _</span> phải viết thành <span class=\"mono\">\\% \\&amp; \\# \\_</span>.</li>\n  <li><b>Lệnh chưa khai báo gói</b>: ví dụ dùng <span class=\"mono\">\\includegraphics</span> mà quên <span class=\"mono\">graphicx</span>.</li>\n  <li><b>Tiếng Việt lỗi dấu</b>: tệp không lưu UTF-8 hoặc chưa khai báo gói ngôn ngữ phù hợp.</li>\n  <li><b>Tham chiếu hiện “??”</b>: biên dịch thêm một lần để LaTeX cập nhật số thứ tự.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không chép công thức từ PDF vào LaTeX: ký hiệu thường bị đổi thành ký tự lạ. Hãy gõ lại hoặc nhờ người gõ chuyên nghiệp.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bắt đầu nhanh với Overleaf, không cần cài đặt.</li><li>Lưu UTF-8 và khai báo gói ngôn ngữ để hiển thị tiếng Việt.</li><li>Dùng \\label và \\ref để đánh số tự động.</li><li>Đọc kỹ dòng báo lỗi: phần lớn lỗi do thiếu ngoặc hoặc ký tự đặc biệt.</li></ul></div>\n<p>Có giáo trình, bài báo viết tay hay bản PDF cần chuyển sang LaTeX? Xem dịch vụ <a href=\"/dich-vu/danh-may-latex\">đánh máy LaTeX</a>, hoặc đọc thêm <a href=\"/blog/danh-may-cong-thuc-toan\">so sánh Word Equation, MathType và LaTeX</a>.</p>",
    "faq": [
      {
        "q": "Học LaTeX có khó không?",
        "a": "Phần cơ bản (cấu trúc tài liệu, công thức, mục, danh sách) có thể nắm trong một buổi. Phần nâng cao như tùy biến mẫu, vẽ hình TikZ cần thời gian luyện tập hơn."
      },
      {
        "q": "Có cần cài phần mềm để dùng LaTeX không?",
        "a": "Không bắt buộc. Có thể soạn trực tuyến trên Overleaf, chỉ cần trình duyệt. Nếu muốn làm việc ngoại tuyến, cài bộ TeX Live hoặc MiKTeX kèm trình soạn thảo như TeXstudio."
      },
      {
        "q": "Làm sao để LaTeX hiển thị đúng tiếng Việt?",
        "a": "Lưu tệp ở mã UTF-8. Với pdfLaTeX dùng gói babel với tùy chọn vietnamese; với XeLaTeX hoặc LuaLaTeX dùng gói fontspec và chọn phông có đủ dấu tiếng Việt."
      }
    ],
    "cover": "/assets/img/blog/latex-cho-nguoi-moi.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "bang-thuat-ngu-dich-ky-thuat",
    "cat": "Dịch thuật",
    "date": "2026-10-02",
    "tags": [
      "Thuật ngữ",
      "Dịch kỹ thuật",
      "Glossary",
      "Dịch thuật"
    ],
    "title": "Xây dựng bảng thuật ngữ (glossary) Anh - Việt cho dịch tài liệu kỹ thuật: mẫu và quy trình",
    "seoTitle": "Xây dựng bảng thuật ngữ Anh - Việt khi dịch tài liệu kỹ thuật",
    "excerpt": "Hướng dẫn xây dựng bảng thuật ngữ Anh - Việt khi dịch tài liệu kỹ thuật: các cột cần có, nguồn tra cứu, quy trình duyệt và cập nhật.",
    "body": "<p class=\"lead\">Trong một bộ tài liệu hướng dẫn máy móc, “bearing” lúc thì là “ổ bi”, lúc “vòng bi”, lúc “ổ đỡ”. Người đọc sẽ nghĩ đó là ba bộ phận khác nhau. Bảng thuật ngữ (glossary) là công cụ đơn giản nhưng hiệu quả nhất để tránh lỗi này, nhất là khi nhiều người cùng dịch một dự án.</p>\n\n<h2>Bảng thuật ngữ cần những cột nào?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cột</th><th>Nội dung</th><th>Ví dụ</th></tr>\n  <tr><td>Thuật ngữ gốc</td><td>Đúng chính tả, số ít</td><td>bearing</td></tr>\n  <tr><td>Thuật ngữ dịch</td><td>Một cách dịch đã chốt</td><td>ổ bi</td></tr>\n  <tr><td>Từ loại/lĩnh vực</td><td>Danh từ, động từ; cơ khí, điện…</td><td>Danh từ - cơ khí</td></tr>\n  <tr><td>Ngữ cảnh</td><td>Câu ví dụ trong tài liệu gốc</td><td>Replace the front wheel bearing…</td></tr>\n  <tr><td>Không dùng</td><td>Cách dịch bị loại</td><td>vòng bi, ổ đỡ</td></tr>\n  <tr><td>Ghi chú, nguồn</td><td>Tiêu chuẩn, tài liệu tham chiếu</td><td>Theo tài liệu của hãng</td></tr>\n  <tr><td>Trạng thái</td><td>Đề xuất/đã duyệt</td><td>Đã duyệt</td></tr>\n</table></div>\n\n<h2>Quy trình 5 bước</h2>\n<ol class=\"steps\">\n  <li><b>Trích thuật ngữ</b> từ bản gốc: danh từ chuyên ngành, tên bộ phận, tên chức năng trên giao diện, đơn vị đo.</li>\n  <li><b>Tra cứu</b> tiêu chuẩn quốc gia, tài liệu tiếng Việt chính thức của ngành, bản dịch trước đây của khách hàng.</li>\n  <li><b>Đề xuất</b> một cách dịch, ghi cách dịch bị loại và lý do.</li>\n  <li><b>Duyệt</b> với chuyên gia lĩnh vực hoặc khách hàng trước khi dịch hàng loạt.</li>\n  <li><b>Cập nhật</b> trong suốt dự án; mọi thay đổi thông báo cho cả nhóm dịch.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Bước trích thuật ngữ nhanh hơn nhiều khi bản gốc là văn bản chỉnh sửa được. Nếu chỉ có bản scan, hãy <a href=\"/blog/danh-may-ban-goc-truoc-khi-dich\">đánh máy bản gốc trước khi dịch</a>.</div></div>\n\n<h2>Những loại thuật ngữ cần đặc biệt chú ý</h2>\n<ul>\n  <li><b>Chữ trên giao diện phần mềm, nút bấm, nhãn máy</b>: phải khớp đúng với bản tiếng Việt của sản phẩm nếu có.</li>\n  <li><b>Từ viết tắt</b> (PLC, HVAC, PPE): quyết định giữ nguyên, dịch, hay ghi cả hai lần đầu xuất hiện.</li>\n  <li><b>Đơn vị và ký hiệu</b>: giữ ký hiệu SI, chỉ đổi dấu thập phân theo quy ước tiếng Việt khi khách hàng đồng ý.</li>\n  <li><b>Tên riêng, thương hiệu</b>: thường giữ nguyên.</li>\n  <li><b>Từ “bẫy”</b> có nghĩa thông dụng khác nghĩa chuyên ngành, ví dụ “mouse”, “cell”, “drive”.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Đừng dựa hoàn toàn vào dịch máy để quyết định thuật ngữ. Máy có thể chọn nghĩa thông dụng thay vì nghĩa chuyên ngành, và không giữ nhất quán giữa các câu.</div></div>\n\n<h2>Bảng thuật ngữ và công cụ dịch</h2>\n<p>Các công cụ dịch có hỗ trợ máy tính (CAT) cho phép nhập bảng thuật ngữ: khi gặp từ gốc, công cụ hiện ngay cách dịch đã chốt, và có thể cảnh báo khi bản dịch không dùng đúng thuật ngữ. Ngay cả khi không dùng CAT, một tệp Excel có bộ lọc cũng giúp người dịch và người hiệu đính tra cứu nhanh.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Lưu bảng thuật ngữ theo từng khách hàng. Dự án sau của cùng khách hàng sẽ nhanh hơn và nhất quán với các tài liệu trước.</div></div>\n\n<h2>Kiểm tra sau khi dịch</h2>\n<p>Người hiệu đính dùng bảng thuật ngữ như một danh sách kiểm tra: tìm từng thuật ngữ trong bản dịch, xác nhận dùng đúng cách đã duyệt, không lẫn cách dịch bị loại. Bước này đặc biệt quan trọng với tài liệu an toàn, hướng dẫn vận hành, hồ sơ thầu.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Mỗi thuật ngữ chỉ một cách dịch đã duyệt trong một dự án.</li><li>Ghi cả cách dịch bị loại để tránh dùng nhầm.</li><li>Duyệt với chuyên gia lĩnh vực trước khi dịch hàng loạt.</li><li>Dùng bảng thuật ngữ làm danh sách kiểm tra khi hiệu đính.</li></ul></div>\n<p>Cần bản gốc có thể chỉnh sửa để trích thuật ngữ? Dịch vụ <a href=\"/dich-vu/pdf-sang-word\">chuyển PDF sang Word</a> giữ nguyên văn và bố cục.</p>",
    "faq": [
      {
        "q": "Bảng thuật ngữ khác từ điển ở điểm nào?",
        "a": "Từ điển cho nhiều nghĩa chung; bảng thuật ngữ chốt một cách dịch duy nhất cho từng thuật ngữ trong phạm vi một dự án hoặc một khách hàng, kèm ngữ cảnh và ghi chú."
      },
      {
        "q": "Nên lập bảng thuật ngữ bằng công cụ gì?",
        "a": "Excel hoặc Google Sheets là đủ cho dự án vừa và nhỏ. Các công cụ dịch có hỗ trợ máy tính (CAT) cho phép nhập bảng thuật ngữ để tự gợi ý khi dịch."
      },
      {
        "q": "Ai là người duyệt bảng thuật ngữ?",
        "a": "Lý tưởng là chuyên gia lĩnh vực phía khách hàng hoặc kỹ sư am hiểu sản phẩm, phối hợp với người dịch và người hiệu đính."
      }
    ],
    "cover": "/assets/img/blog/bang-thuat-ngu-dich-ky-thuat.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "body": "<p class=\"lead\">OCR (Optical Character Recognition) là công nghệ nhận dạng ký tự từ hình ảnh. Với tài liệu in rõ nét, OCR có thể cho kết quả khá tốt chỉ trong vài giây. Tuy nhiên, thực tế công việc văn phòng hiếm khi “đẹp” như vậy.</p><h2>Khi nào OCR thất bại?</h2><ul><li>Bản scan nghiêng, mờ, thiếu sáng hoặc có vết gấp.</li><li>Tài liệu có dấu mộc, chữ ký, hình mờ đè lên chữ.</li><li>Chữ viết tay - đặc biệt là chữ viết nhanh, viết tắt.</li><li>Bảng biểu phức tạp, nhiều cột, ô gộp.</li><li>Tiếng Việt có dấu: lỗi dấu là lỗi phổ biến nhất của OCR.</li></ul><h2>Chi phí ẩn của OCR</h2><p>Một trang OCR “miễn phí” có thể mất 10–20 phút để soát lỗi và định dạng lại. Với tài liệu 100 trang, đó là cả tuần làm việc. Trong khi đó, dịch vụ đánh máy thủ công giao cho bạn văn bản sạch, đúng bố cục ngay từ đầu.</p><blockquote>Nguyên tắc đơn giản: nếu bạn cần độ chính xác trên 99% và không có thời gian soát lỗi, hãy chọn con người.</blockquote><h2>Kết luận</h2><p>OCR phù hợp để tra cứu nhanh tài liệu in đẹp. Đánh máy thủ công phù hợp khi bạn cần một tài liệu hoàn chỉnh, đáng tin cậy để sử dụng ngay - hợp đồng, luận văn, hồ sơ lưu trữ, sách tái bản.</p>",
    "cover": "/assets/img/blog/ocr-hay-danh-may-thu-cong.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "so-hoa-de-thi-toan",
    "cat": "Học thuật",
    "date": "2026-10-01",
    "tags": [
      "Đề thi",
      "Công thức toán",
      "Giáo viên",
      "Hình học"
    ],
    "title": "Số hóa đề thi Toán cho giáo viên: quy trình gõ đề, vẽ hình và trộn đề chuẩn",
    "seoTitle": "Số hóa đề thi Toán: quy trình gõ đề chuẩn cho giáo viên",
    "excerpt": "Biến chồng đề thi Toán viết tay, photo cũ thành ngân hàng đề Word chuẩn: quy trình gõ công thức, vẽ lại hình học, đánh số câu, định dạng trắc nghiệm để trộn đề dễ dàng.",
    "body": "<p class=\"lead\">Nhiều thầy cô có cả tủ đề thi tích lũy qua hàng chục năm: bản viết tay, bản photo, bản đánh máy cũ lỗi font. Số hóa chúng thành ngân hàng đề Word chuẩn không chỉ giúp in ấn đẹp mà còn cho phép trộn đề, chia sẻ cho tổ bộ môn và tái sử dụng lâu dài. Đây là quy trình chúng tôi áp dụng khi gõ đề Toán.</p>\n\n<h2>Bước 1: Phân loại trước khi gõ</h2>\n<p>Sắp xếp đề theo khối lớp, chủ đề, dạng đề (tự luận, trắc nghiệm, đúng/sai, trả lời ngắn). Đánh dấu những trang có hình vẽ, bảng biến thiên, đồ thị - đây là phần tốn công nhất và cần xử lý riêng. Nếu đề là bản scan, chụp thẳng và đủ sáng theo <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu</a>.</p>\n\n<h2>Bước 2: Gõ nội dung và công thức</h2>\n<ul>\n  <li><b>Công thức trong dòng</b> giữ cùng cỡ chữ với văn bản, không để công thức “to” hơn chữ.</li>\n  <li><b>Biến viết nghiêng, số và hàm viết đứng</b>: <i>f</i>(<i>x</i>) = sin <i>x</i> + 2.</li>\n  <li><b>Dùng ký hiệu đúng</b>: dấu trừ “−” khác gạch nối “-”; “≤” khác “&lt;=”; “∈”, “ℝ” chèn bằng Equation.</li>\n  <li><b>Thống nhất một công cụ</b> cho cả bộ đề: Equation của Word hoặc MathType.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Gõ công thức nhanh trong Word: nhấn <kbd>Alt</kbd> + <kbd>=</kbd> rồi gõ trực tiếp <span class=\"mono\">x^2</span>, <span class=\"mono\">\\sqrt(x)</span>, <span class=\"mono\">a/b</span>, nhấn phím cách để Word tự chuyển thành công thức.</div></div>\n\n<h2>Bước 3: Vẽ lại hình, đồ thị, bảng biến thiên</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại hình</th><th>Công cụ gợi ý</th><th>Lưu ý</th></tr>\n  <tr><td>Hình học phẳng, không gian</td><td>GeoGebra, phần mềm vẽ hình học</td><td>Nét khuất vẽ nét đứt; xuất ảnh độ phân giải cao</td></tr>\n  <tr><td>Đồ thị hàm số</td><td>GeoGebra, Desmos</td><td>Ghi rõ gốc tọa độ O, các trục <i>x</i>, <i>y</i></td></tr>\n  <tr><td>Bảng biến thiên</td><td>Bảng Word, TikZ (LaTeX)</td><td>Mũi tên đúng chiều, căn thẳng cột</td></tr>\n  <tr><td>Biểu đồ thống kê</td><td>Excel</td><td>Giữ dữ liệu gốc để sửa sau</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Khi vẽ lại hình, phải giữ đúng <b>giả thiết</b> của đề: tam giác vuông phải vuông, trung điểm phải đúng trung điểm. Hình sai tỉ lệ có thể khiến học sinh hiểu nhầm đề.</div></div>\n\n<h2>Bước 4: Định dạng để trộn đề</h2>\n<p>Phần mềm trộn đề trắc nghiệm thường yêu cầu cấu trúc rất chặt chẽ:</p>\n<ol class=\"steps\">\n  <li>Mỗi câu bắt đầu bằng <b>“Câu 1.”</b>, <b>“Câu 2.”</b>… (chữ đậm, có dấu chấm).</li>\n  <li>Phương án <b>A. B. C. D.</b> viết hoa, có dấu chấm, cách đều bằng Tab thay vì phím cách.</li>\n  <li>Đáp án đúng đánh dấu theo quy ước (gạch chân hoặc tô đỏ) - hỏi trước phần mềm đang dùng.</li>\n  <li>Hình vẽ đặt <b>In Line with Text</b> để không bị trôi khi trộn.</li>\n  <li>Không dùng khung text box, không ngắt trang thủ công giữa câu.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Với đề theo cấu trúc mới gồm nhiều phần (trắc nghiệm nhiều lựa chọn, đúng/sai, trả lời ngắn), hãy tạo một tệp mẫu chuẩn cho từng phần và gõ đề theo mẫu ngay từ đầu.</div></div>\n\n<h2>Bước 5: Soát lỗi - khâu không được bỏ qua</h2>\n<ul>\n  <li>Đối chiếu từng số, dấu, chỉ số với bản gốc. Một dấu trừ thiếu có thể thay đổi cả đáp án.</li>\n  <li>Giải lại vài câu ngẫu nhiên để chắc chắn đề không bị sai khi gõ.</li>\n  <li>In thử một trang để kiểm tra hình rõ nét, công thức không vỡ.</li>\n  <li>Lưu bản .docx gốc và một bản PDF để chia sẻ.</li>\n</ul>\n\n<h2>Tổ chức ngân hàng đề lâu dài</h2>\n<p>Đặt tên tệp theo quy tắc thống nhất, ví dụ <span class=\"mono\">Toan12_HamSo_TracNghiem_DeSo03.docx</span>, lưu theo thư mục khối lớp và chủ đề, sao lưu lên ổ đám mây của trường. Sau vài học kỳ, tổ bộ môn có một kho đề chuẩn, tìm và trộn đề chỉ trong vài phút.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Phân loại đề và đánh dấu trang có hình vẽ trước khi gõ.</li><li>Thống nhất một công cụ gõ công thức cho toàn bộ ngân hàng đề.</li><li>Vẽ lại hình đúng giả thiết, đặt In Line with Text.</li><li>Định dạng câu và phương án chặt chẽ để trộn đề không lỗi.</li></ul></div>\n<p>Thầy cô không có thời gian gõ đề? Dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a> nhận gõ đề Toán, Lý, Hóa từ bản viết tay, ảnh chụp, giữ đúng cấu trúc để trộn đề.</p>",
    "faq": [
      {
        "q": "Gõ đề Toán nên dùng Equation hay MathType?",
        "a": "Cả hai đều dùng được. Điều quan trọng là thống nhất một công cụ trong toàn bộ ngân hàng đề, vì trộn lẫn có thể gây lỗi khi chuyển định dạng hoặc dùng phần mềm trộn đề."
      },
      {
        "q": "Hình vẽ trong đề cũ có nên chụp lại rồi chèn vào không?",
        "a": "Chỉ nên dùng tạm. Ảnh chụp thường mờ, nghiêng, khó sửa. Vẽ lại bằng phần mềm hình học giúp hình sắc nét khi in và dễ chỉnh khi đổi số liệu."
      },
      {
        "q": "Định dạng đề trắc nghiệm thế nào để trộn đề được?",
        "a": "Mỗi câu bắt đầu bằng “Câu N.”, bốn phương án A, B, C, D trình bày thống nhất, đáp án đúng được đánh dấu theo quy ước của phần mềm trộn đề (gạch chân, tô màu…)."
      }
    ],
    "cover": "/assets/img/blog/so-hoa-de-thi-toan.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "dich-may-va-hau-bien-tap",
    "cat": "Dịch thuật",
    "date": "2026-09-30",
    "tags": [
      "Dịch máy",
      "AI",
      "Hậu biên tập",
      "Dịch thuật"
    ],
    "title": "Dịch máy, AI và hậu biên tập (post-editing): khi nào dùng được, khi nào cần người dịch?",
    "seoTitle": "Dịch máy, AI và hậu biên tập: khi nào dùng được?",
    "excerpt": "Dịch máy, AI dịch có dùng được cho hợp đồng, hồ sơ? Phân biệt hậu biên tập nhẹ và đầy đủ, lỗi thường gặp và cách chọn phương án phù hợp.",
    "body": "<p class=\"lead\">Chỉ cần dán văn bản vào ô dịch, vài giây sau đã có bản tiếng Việt trôi chảy. Dịch máy và các mô hình AI đã thay đổi cách nhiều người làm việc với ngoại ngữ. Nhưng “trôi chảy” không đồng nghĩa với “chính xác”. Bài viết giúp bạn biết khi nào dịch máy là đủ, khi nào cần hậu biên tập, và khi nào nên giao hẳn cho người dịch.</p>\n<figure><img src=\"/assets/img/blog/fig-hau-bien-tap.svg\" alt=\"Quy trình dịch máy kết hợp hậu biên tập\" loading=\"lazy\" width=\"960\"><figcaption>Bản gốc sạch → dịch máy → hậu biên tập bởi người có chuyên môn → kiểm tra thuật ngữ, số liệu → bản dịch cuối.</figcaption></figure>\n\n<h2>Dịch máy làm tốt điều gì?</h2>\n<ul>\n  <li>Nắm ý chính của email, bài báo, tài liệu tham khảo nhanh chóng.</li>\n  <li>Văn bản câu ngắn, cấu trúc rõ, ít thuật ngữ đặc thù.</li>\n  <li>Bản nháp đầu tiên để người dịch chỉnh sửa, tiết kiệm thời gian gõ.</li>\n</ul>\n\n<h2>Những lỗi “trông rất hợp lý”</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại lỗi</th><th>Ví dụ rủi ro</th></tr>\n  <tr><td>Phủ định bị đảo</td><td>“not later than” dịch thành “không muộn hơn” đúng, nhưng “not less than 30 days” có thể bị dịch ngược ý</td></tr>\n  <tr><td>Thuật ngữ sai ngành</td><td>Từ có nghĩa thông dụng được chọn thay cho nghĩa pháp lý, kỹ thuật</td></tr>\n  <tr><td>Bỏ sót</td><td>Mất một mệnh đề, một điều kiện trong câu dài</td></tr>\n  <tr><td>Số liệu, ngày tháng</td><td>Nhầm định dạng ngày tháng, dấu thập phân</td></tr>\n  <tr><td>Thiếu nhất quán</td><td>Cùng một từ dịch nhiều kiểu trong một tài liệu</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Lỗi của dịch máy nguy hiểm vì câu văn vẫn mượt. Người không đọc được bản gốc rất khó phát hiện, nhất là trong hợp đồng và tài liệu kỹ thuật.</div></div>\n\n<h2>Hậu biên tập nhẹ và đầy đủ</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Hậu biên tập nhẹ</b>Sửa lỗi sai nghĩa, bỏ sót, lỗi nghiêm trọng; chấp nhận văn phong chưa tự nhiên. Phù hợp tài liệu nội bộ, tham khảo.</div>\n  <div class=\"good\"><b>Hậu biên tập đầy đủ</b>Đạt chất lượng tương đương người dịch: đúng nghĩa, đúng thuật ngữ, văn phong tự nhiên, trình bày chuẩn. Phù hợp tài liệu phát hành.</div>\n</div>\n<p>Tiêu chuẩn ISO 18587 mô tả yêu cầu đối với dịch vụ hậu biên tập bản dịch máy, trong đó người hậu biên tập cần có năng lực tương đương người dịch chuyên nghiệp.</p>\n\n<h2>Chọn phương án theo loại tài liệu</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tài liệu</th><th>Phương án gợi ý</th></tr>\n  <tr><td>Email, tài liệu đọc tham khảo</td><td>Dịch máy, tự kiểm tra ý chính</td></tr>\n  <tr><td>Tài liệu nội bộ, hướng dẫn công việc</td><td>Dịch máy + hậu biên tập nhẹ</td></tr>\n  <tr><td>Website, catalogue, tài liệu phát hành</td><td>Hậu biên tập đầy đủ hoặc người dịch</td></tr>\n  <tr><td>Hợp đồng, hồ sơ pháp lý, y khoa</td><td>Người dịch có chuyên môn + hiệu đính</td></tr>\n  <tr><td>Giấy tờ cần chứng thực, công chứng</td><td>Người dịch đủ điều kiện theo quy định - xem <a href=\"/blog/chuan-bi-ho-so-dich-thuat-cong-chung\">checklist hồ sơ</a></td></tr>\n</table></div>\n\n<h2>Đầu vào sạch - bản dịch tốt hơn</h2>\n<p>Dịch máy rất nhạy với chất lượng văn bản gốc. Bản OCR lỗi dấu, câu bị ngắt dòng giữa chừng, bảng biểu vỡ cột sẽ cho bản dịch kém dù công cụ tốt đến đâu. Chuẩn bị bản gốc đánh máy sạch, không ngắt dòng cứng, có tiêu đề và bảng đúng cấu trúc là bước đơn giản giúp cả dịch máy lẫn người dịch làm việc hiệu quả hơn.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Kết hợp với <a href=\"/blog/bang-thuat-ngu-dich-ky-thuat\">bảng thuật ngữ</a>: chốt trước cách dịch các thuật ngữ quan trọng, người hậu biên tập chỉ cần đối chiếu và thay thống nhất.</div></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Với tài liệu nhạy cảm, hãy kiểm tra chính sách dữ liệu của công cụ dịch trực tuyến trước khi dán nội dung. Xem thêm <a href=\"/blog/bao-mat-khi-thue-ngoai-danh-may\">bảo mật khi thuê ngoài xử lý tài liệu</a>.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Dịch máy tốt cho nắm ý chính và bản nháp.</li><li>Lỗi dịch máy thường trông hợp lý - cần người đọc được bản gốc kiểm tra.</li><li>Chọn hậu biên tập nhẹ, đầy đủ hay người dịch theo mục đích tài liệu.</li><li>Bản gốc sạch giúp mọi phương án dịch cho kết quả tốt hơn.</li></ul></div>",
    "faq": [
      {
        "q": "Hậu biên tập (post-editing) là gì?",
        "a": "Là việc người dịch có chuyên môn đọc và sửa bản dịch do máy tạo ra để đạt chất lượng mong muốn. Có tiêu chuẩn quốc tế riêng cho dịch vụ này là ISO 18587."
      },
      {
        "q": "Có nên dùng dịch máy cho hợp đồng không?",
        "a": "Có thể dùng để hiểu nội dung sơ bộ. Với bản dịch dùng để ký kết, nộp cơ quan nhà nước hoặc làm căn cứ pháp lý, cần người dịch có chuyên môn kiểm tra toàn bộ hoặc dịch lại."
      },
      {
        "q": "Dịch máy có làm lộ thông tin tài liệu không?",
        "a": "Tùy dịch vụ. Một số công cụ trực tuyến có thể lưu hoặc dùng nội dung gửi lên. Với tài liệu mật, hãy đọc chính sách dữ liệu hoặc dùng giải pháp có cam kết bảo mật."
      }
    ],
    "cover": "/assets/img/blog/dich-may-va-hau-bien-tap.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "bang-bien-thien-word-latex",
    "cat": "Học thuật",
    "date": "2026-09-29",
    "tags": [
      "Bảng biến thiên",
      "Hàm số",
      "tkz-tab",
      "Đề thi Toán"
    ],
    "title": "Vẽ bảng biến thiên, bảng xét dấu chuẩn trong Word và LaTeX (tkz-tab) cho đề thi Toán",
    "seoTitle": "Vẽ bảng biến thiên chuẩn trong Word và LaTeX (tkz-tab)",
    "excerpt": "Dựng bảng biến thiên, bảng xét dấu không lệch trong Word và LaTeX với gói tkz-tab, kèm ví dụ hàm y = x³ − 3x cho đề thi Toán.",
    "body": "<p class=\"lead\">Bảng biến thiên có mặt trong gần như mọi đề thi Toán 12: khảo sát hàm số, tìm cực trị, biện luận số nghiệm. Đây cũng là phần khiến nhiều thầy cô mất thời gian nhất khi soạn đề, vì vẽ bằng Shapes thì mũi tên lệch, sửa một số là hỏng cả bảng. Có hai cách bền vững: dựng bằng bảng trong Word hoặc dùng gói tkz-tab trong LaTeX.</p>\n<figure><img src=\"/assets/img/blog/fig-bang-bien-thien.svg\" alt=\"Bảng biến thiên của hàm số y = x³ - 3x\" loading=\"lazy\" width=\"960\"><figcaption>Ví dụ hàm y = x³ − 3x: y' = 3x² − 3 bằng 0 tại x = ±1; cực đại 2 tại x = −1, cực tiểu −2 tại x = 1.</figcaption></figure>\n\n<h2>Ví dụ dùng trong bài</h2>\n<p>Hàm số <i>y</i> = <i>x</i><sup>3</sup> − 3<i>x</i> có <i>y</i>′ = 3<i>x</i><sup>2</sup> − 3, <i>y</i>′ = 0 khi <i>x</i> = −1 hoặc <i>x</i> = 1. Hàm số đồng biến trên (−∞; −1) và (1; +∞), nghịch biến trên (−1; 1); đạt cực đại bằng 2 tại <i>x</i> = −1 và cực tiểu bằng −2 tại <i>x</i> = 1.</p>\n\n<h2>Cách 1: Dựng bằng bảng trong Word</h2>\n<ol class=\"steps\">\n  <li>Chèn bảng 3 hàng: <b>x</b>, <b>y′</b>, <b>y</b>. Cột đầu ghi tên hàng, các cột sau cho giá trị và khoảng.</li>\n  <li>Hàng <b>x</b>: −∞, −1, 1, +∞ ở các cột “mốc”; cột xen giữa để trống.</li>\n  <li>Hàng <b>y′</b>: dấu + / − ở cột khoảng, số 0 ở cột mốc.</li>\n  <li>Hàng <b>y</b>: tăng chiều cao, đặt giá trị cực đại ở trên, cực tiểu ở dưới (căn ô Top/Bottom).</li>\n  <li>Vẽ mũi tên bằng đường thẳng trong ô, hoặc dùng ký hiệu ↗ ↘ cỡ lớn căn giữa.</li>\n  <li>Bỏ viền trong, giữ viền ngoài và đường kẻ ngang giữa các hàng.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lưu một bảng biến thiên mẫu vào Quick Parts (Insert → Quick Parts → Save Selection). Lần sau chỉ cần chèn và sửa giá trị.</div></div>\n\n<h2>Cách 2: LaTeX với gói tkz-tab</h2>\n<pre class=\"code\"><code>\\usepackage{tkz-tab}\n\n\\begin{tikzpicture}\n  \\tkzTabInit{$x$ /1, $y'$ /1, $y$ /2}{$-\\infty$, $-1$, $1$, $+\\infty$}\n  \\tkzTabLine{, +, z, -, z, +, }\n  \\tkzTabVar{-/ $-\\infty$, +/ $2$, -/ $-2$, +/ $+\\infty$}\n\\end{tikzpicture}</code></pre>\n<ul>\n  <li><span class=\"mono\">\\tkzTabInit</span>: khai báo các hàng và các mốc của <i>x</i>.</li>\n  <li><span class=\"mono\">\\tkzTabLine</span>: hàng dấu; <b>z</b> là số 0 tại mốc.</li>\n  <li><span class=\"mono\">\\tkzTabVar</span>: hàng biến thiên; <b>+</b> đặt giá trị ở trên, <b>−</b> đặt ở dưới, mũi tên tự vẽ.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Với hàm có giá trị không xác định (tiệm cận đứng), tkz-tab có ký hiệu riêng để vẽ hai vạch song song tại mốc đó - xem tài liệu của gói khi cần.</div></div>\n\n<h2>Bảng xét dấu</h2>\n<p>Bảng xét dấu chỉ gồm hàng <i>x</i> và các hàng dấu của từng thừa số, giải bất phương trình tích - thương. Trong Word dùng bảng tương tự; trong LaTeX chỉ cần <span class=\"mono\">\\tkzTabInit</span> và nhiều lệnh <span class=\"mono\">\\tkzTabLine</span>.</p>\n\n<h2>Lỗi thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>Mũi tên ngược chiều với dấu y′; giá trị cực đại đặt thấp hơn cực tiểu; thiếu số 0 tại nghiệm của y′; ghi “∞” thiếu dấu.</div>\n  <div class=\"good\"><b>Đúng</b>Dấu y′ khớp chiều mũi tên; cực đại ở trên, cực tiểu ở dưới; ghi rõ −∞, +∞; kiểm tra lại bằng cách tính giá trị.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Trước khi phát đề, hãy giải lại bài để chắc bảng biến thiên khớp với đề. Một mũi tên sai chiều có thể làm sai cả câu hỏi biện luận số nghiệm.</div></div>\n\n<h2>Đưa bảng biến thiên LaTeX vào Word</h2>\n<p>Nếu đề thi soạn bằng Word nhưng bạn thích vẽ bảng bằng tkz-tab, có thể biên dịch riêng từng bảng thành PDF hoặc SVG (dùng lớp tài liệu standalone), rồi chèn vào Word dạng hình vector. Bảng sắc nét khi in, và khi cần sửa chỉ cần sửa mã rồi xuất lại. Nhớ đặt hình <b>In Line with Text</b> để không bị trôi khi trộn đề.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Word: dựng bằng bảng, không vẽ rời bằng Shapes.</li><li>LaTeX: tkz-tab với \\tkzTabInit, \\tkzTabLine, \\tkzTabVar.</li><li>Dấu y′ phải khớp chiều mũi tên; cực đại trên, cực tiểu dưới.</li><li>Lưu bảng mẫu để soạn đề nhanh hơn.</li></ul></div>\n<p>Đọc thêm <a href=\"/blog/so-hoa-de-thi-toan\">quy trình số hóa đề thi Toán</a>, hoặc xem dịch vụ <a href=\"/dich-vu/danh-may-latex\">đánh máy LaTeX</a>.</p>",
    "faq": [
      {
        "q": "Vẽ bảng biến thiên trong Word bằng cách nào ổn định nhất?",
        "a": "Dùng bảng (Table) làm khung: hàng x, hàng f'(x), hàng f(x) chia nhiều cột; giá trị đặt trong ô, mũi tên vẽ bằng đường thẳng gắn trong ô hoặc dùng ký hiệu ↗ ↘. Tránh vẽ hoàn toàn bằng Shapes rời rạc."
      },
      {
        "q": "tkz-tab là gì?",
        "a": "tkz-tab là gói LaTeX chuyên vẽ bảng biến thiên và bảng xét dấu, dựa trên TikZ. Các lệnh chính là \\tkzTabInit, \\tkzTabLine và \\tkzTabVar."
      },
      {
        "q": "Bảng biến thiên có cần đúng tỷ lệ không?",
        "a": "Không cần tỷ lệ như đồ thị, nhưng vị trí các giá trị phải đúng: giá trị cực đại đặt cao, cực tiểu đặt thấp, mũi tên đi đúng chiều đồng biến - nghịch biến."
      }
    ],
    "cover": "/assets/img/blog/bang-bien-thien-word-latex.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "danh-may-ban-goc-truoc-khi-dich",
    "cat": "Dịch thuật",
    "date": "2026-09-29",
    "tags": [
      "Dịch thuật",
      "Bản gốc",
      "Công cụ CAT",
      "Tiết kiệm chi phí"
    ],
    "title": "Vì sao nên đánh máy bản gốc trước khi dịch? Tiết kiệm chi phí, tăng độ chính xác",
    "seoTitle": "Vì sao nên đánh máy bản gốc trước khi dịch thuật?",
    "excerpt": "Gửi bản scan, ảnh chụp cho bên dịch thuật thường tốn thời gian và chi phí hơn. Lợi ích của việc đánh máy bản gốc trước khi dịch: đếm từ chính xác, dùng công cụ CAT, giữ định dạng.",
    "body": "<p class=\"lead\">Bạn cần dịch một bộ hồ sơ, một cuốn sách cũ hay báo cáo kỹ thuật, nhưng trong tay chỉ có bản scan hoặc ảnh chụp. Nhiều người gửi thẳng cho bên dịch thuật và bất ngờ vì báo giá cao, thời gian lâu, bản dịch lệch định dạng. Bước “đánh máy bản gốc” - thường bị bỏ qua - chính là chìa khóa để quá trình dịch nhanh, rẻ và chính xác hơn.</p>\n<figure><img src=\"/assets/img/blog/fig-quy-trinh-dich.svg\" alt=\"Quy trình từ bản scan đến bản dịch hoàn chỉnh\" loading=\"lazy\" width=\"960\"><figcaption>Quy trình hợp lý: bản scan → đánh máy bản gốc → dịch bằng công cụ hỗ trợ → hiệu đính → dàn trang song song với bản gốc.</figcaption></figure>\n\n<h2>Bản scan gây khó gì cho người dịch?</h2>\n<ul>\n  <li><b>Không đếm được từ chính xác</b>: báo giá phải ước lượng, thường cộng thêm phần “xử lý tệp”.</li>\n  <li><b>Không dùng được công cụ CAT</b>: người dịch phải gõ lại hoặc dịch từ ảnh, dễ bỏ sót dòng.</li>\n  <li><b>Khó giữ định dạng</b>: bảng, cột, chú thích phải dựng lại từ đầu.</li>\n  <li><b>Dễ sai số liệu</b>: con số, tên riêng trên ảnh mờ bị đọc nhầm.</li>\n</ul>\n\n<h2>5 lợi ích khi có bản gốc đánh máy</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Lợi ích</th><th>Giải thích</th></tr>\n  <tr><td class=\"ok\">Báo giá minh bạch</td><td>Đếm từ tự động, khách và bên dịch cùng thấy một con số</td></tr>\n  <tr><td class=\"ok\">Dịch nhanh hơn</td><td>Người dịch tập trung vào ngôn ngữ, không mất công đọc ảnh</td></tr>\n  <tr><td class=\"ok\">Thuật ngữ nhất quán</td><td>Bộ nhớ dịch, bảng thuật ngữ áp dụng cho toàn bộ tài liệu</td></tr>\n  <tr><td class=\"ok\">Giữ bố cục</td><td>Bản dịch dàn trang theo đúng cấu trúc bản gốc</td></tr>\n  <tr><td class=\"ok\">Dễ kiểm tra</td><td>Đối chiếu song song từng đoạn giữa bản gốc và bản dịch</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Với tài liệu sẽ dịch sang nhiều ngôn ngữ, chi phí đánh máy bản gốc chỉ trả <b>một lần</b>, nhưng lợi ích được nhân lên ở mỗi ngôn ngữ.</div></div>\n\n<h2>Bản gốc cần đánh máy thế nào để dịch tốt?</h2>\n<ol class=\"steps\">\n  <li><b>Giữ nguyên văn</b>: không sửa câu chữ, không “chuẩn hóa” số liệu theo ý mình.</li>\n  <li><b>Đánh dấu chỗ không đọc được</b> bằng ký hiệu thống nhất, ví dụ [không rõ].</li>\n  <li><b>Ghi chú yếu tố không phải chữ</b>: [Dấu tròn đỏ], [Chữ ký], [Ảnh chân dung].</li>\n  <li><b>Dùng Styles cho tiêu đề</b> và bảng Word thật - công cụ dịch nhận diện cấu trúc tốt hơn.</li>\n  <li><b>Không ngắt dòng bằng Enter giữa câu</b>: công cụ CAT chia câu sai nếu câu bị cắt đôi.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Lỗi phổ biến nhất khi tự đánh máy là <b>ngắt dòng cứng</b> theo bản in. Khi đưa vào công cụ dịch, một câu bị tách thành 2–3 đoạn, bản dịch trở nên rời rạc và sai ngữ pháp.</div></div>\n\n<h2>Tài liệu cũ, viết tay, tiếng nước ngoài</h2>\n<p>Với giấy tờ cũ chữ đánh máy mờ, văn bản viết tay hoặc tài liệu tiếng Pháp, tiếng Anh thời trước, việc đánh máy càng quan trọng. Người gõ cần đọc kỹ ngữ cảnh để giải mã chữ khó, đánh dấu chỗ nghi vấn để người dịch và khách hàng cùng xác nhận. Đây cũng là bước cần thiết khi <a href=\"/blog/so-hoa-gia-pha-hoi-ky\">số hóa gia phả, hồi ký</a> để dịch cho con cháu ở nước ngoài.</p>\n\n<h2>Bảo mật khi chuyển tài liệu qua nhiều bên</h2>\n<p>Tài liệu đi qua khâu đánh máy, dịch, hiệu đính nghĩa là có nhiều người tiếp cận. Hãy chọn đơn vị có cam kết bảo mật, giới hạn quyền truy cập và xóa tệp sau khi hoàn tất. Xem <a href=\"/blog/bao-mat-khi-thue-ngoai-danh-may\">5 câu hỏi về bảo mật khi thuê ngoài</a>.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bản scan khiến báo giá dịch thiếu minh bạch và tốn thời gian.</li><li>Bản gốc đánh máy giúp dùng công cụ CAT, giữ thuật ngữ nhất quán.</li><li>Giữ nguyên văn, đánh dấu chỗ không rõ, không ngắt dòng cứng.</li><li>Đánh máy một lần, dùng cho bản dịch sang nhiều ngôn ngữ.</li></ul></div>\n<p>Đánh máy 247 nhận <a href=\"/dich-vu/pdf-sang-word\">chuyển bản scan, PDF sang Word</a> giữ nguyên văn và bố cục, sẵn sàng để bạn gửi cho đơn vị dịch thuật.</p>",
    "faq": [
      {
        "q": "Dịch thuật tính phí theo trang hay theo từ?",
        "a": "Tùy đơn vị: có nơi tính theo trang chuẩn, có nơi tính theo số từ của bản gốc. Khi bản gốc là tệp Word, việc đếm từ minh bạch và chính xác hơn so với bản scan."
      },
      {
        "q": "Công cụ CAT là gì?",
        "a": "CAT (Computer-Assisted Translation) là phần mềm hỗ trợ người dịch: chia văn bản thành từng câu, lưu bộ nhớ dịch và thuật ngữ để dịch nhất quán. Công cụ này cần văn bản có thể chỉnh sửa, không làm việc trực tiếp trên ảnh scan."
      },
      {
        "q": "Đánh máy bản gốc có làm thay đổi nội dung không?",
        "a": "Không. Bản đánh máy phải giữ nguyên từng chữ, con số, kể cả lỗi chính tả trong bản gốc nếu tài liệu có giá trị pháp lý, và có thể ghi chú những chỗ không đọc được."
      }
    ],
    "cover": "/assets/img/blog/danh-may-ban-goc-truoc-khi-dich.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "body": "\n<p class=\"lead\">Nghị định 30/2020/NĐ-CP về công tác văn thư quy định chi tiết cách trình bày văn bản hành chính, từ khổ giấy đến vị trí từng thành phần. Văn bản sai thể thức có thể bị trả lại, làm chậm cả quy trình xử lý. Bài viết tóm tắt những quy định hay dùng nhất để bạn trình bày đúng ngay từ đầu.</p>\n<figure><img src=\"/assets/img/blog/fig-le-nghi-dinh-30.svg\" alt=\"Sơ đồ khổ giấy A4 và lề văn bản theo Nghị định 30/2020\" loading=\"lazy\" width=\"960\"><figcaption>Khổ A4 với lề trái lớn hơn lề phải để chừa chỗ đóng tập, lưu trữ.</figcaption></figure>\n\n<h2>Khổ giấy, lề và phông chữ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Yếu tố</th><th>Quy định</th></tr>\n  <tr><td>Khổ giấy</td><td>A4 (210 × 297 mm), trình bày theo chiều dài</td></tr>\n  <tr><td>Lề trên/lề dưới</td><td>20–25 mm</td></tr>\n  <tr><td>Lề trái</td><td>30–35 mm</td></tr>\n  <tr><td>Lề phải</td><td>15–20 mm</td></tr>\n  <tr><td>Phông chữ</td><td>Phông tiếng Việt bộ mã Unicode (TCVN 6909:2001), thường dùng Times New Roman, màu đen</td></tr>\n  <tr><td>Cỡ chữ phần nội dung</td><td>13–14</td></tr>\n  <tr><td>Giãn dòng</td><td>Tối thiểu dòng đơn, tối đa 1,5 dòng; khoảng cách giữa các đoạn tối thiểu 6 pt</td></tr>\n  <tr><td>Thụt đầu dòng</td><td>1–1,27 cm</td></tr>\n</table></div>\n\n<h2>Phần đầu văn bản</h2>\n<p>Phần đầu được chia thành hai cột:</p>\n<ul>\n  <li><b>Bên trái</b>: tên cơ quan ban hành (in hoa, đứng, đậm), số và ký hiệu văn bản.</li>\n  <li><b>Bên phải</b>: Quốc hiệu “CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM” (in hoa, cỡ 12–13, đứng, đậm) và Tiêu ngữ “Độc lập - Tự do - Hạnh phúc” (in thường, cỡ 13–14, đứng, đậm, có đường kẻ ngang bên dưới), tiếp theo là địa danh, ngày tháng năm (in thường, nghiêng).</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng bảng 2 cột không viền để căn phần đầu thay vì dùng phím cách hay Tab. Bố cục sẽ không bị xô lệch khi người khác mở trên máy có phông khác.</div></div>\n\n<h2>Tên loại và trích yếu</h2>\n<p>Tên loại văn bản (QUYẾT ĐỊNH, TỜ TRÌNH, BÁO CÁO…) in hoa, cỡ 13–14, đứng, đậm, căn giữa. Trích yếu nội dung đặt ngay dưới, in thường, đứng, đậm, căn giữa. Riêng công văn thì trích yếu đặt dưới số và ký hiệu, cỡ 12–13.</p>\n\n<h2>Lỗi thể thức thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Thường gặp</b>Căn lề bằng phím cách; dùng phông .VnTime; tiêu ngữ thiếu gạch nối hoặc dùng sai dấu; số trang đặt ở trang đầu.</div>\n  <div class=\"good\"><b>Nên làm</b>Căn bằng bảng/tab; phông Unicode; tiêu ngữ có gạch nối giữa các cụm từ; số trang đặt giữa lề trên, không hiển thị ở trang thứ nhất.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Bài viết tóm tắt các quy định phổ biến để tham khảo nhanh. Với văn bản chính thức, hãy đối chiếu phụ lục của Nghị định 30/2020/NĐ-CP và hướng dẫn riêng của cơ quan bạn.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Khổ A4, lề trái 30–35 mm, lề phải 15–20 mm, lề trên/dưới 20–25 mm.</li><li>Phông Unicode (thường Times New Roman), cỡ 13–14 cho nội dung.</li><li>Căn phần đầu bằng bảng không viền thay vì phím cách.</li><li>Số trang đặt giữa lề trên, bỏ qua trang đầu.</li></ul></div>\n<p>Cần chuẩn hóa hàng loạt văn bản cũ theo đúng thể thức? Dịch vụ <a href=\"/dich-vu/danh-may-van-ban-phap-ly\">đánh máy văn bản hành chính, pháp lý</a> của chúng tôi bám sát Nghị định 30/2020.</p>",
    "cover": "/assets/img/blog/the-thuc-van-ban-nghi-dinh-30.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "dich-tom-tat-bai-bao-khoa-hoc",
    "cat": "Dịch thuật",
    "date": "2026-09-26",
    "tags": [
      "Abstract",
      "Bài báo khoa học",
      "Dịch học thuật",
      "Luận văn"
    ],
    "title": "Viết và dịch tóm tắt (abstract) bài báo khoa học Việt - Anh: cấu trúc, thì động từ, lỗi thường gặp",
    "seoTitle": "Viết và dịch tóm tắt (abstract) bài báo khoa học Việt - Anh",
    "excerpt": "Cấu trúc tóm tắt (abstract) theo IMRaD, cách dùng thì, từ khóa, số liệu khi dịch Việt - Anh và những lỗi khiến tạp chí trả bài.",
    "body": "<p class=\"lead\">Biên tập viên và người phản biện thường quyết định có đọc tiếp hay không chỉ sau vài phút với phần tóm tắt. Với nhà nghiên cứu Việt Nam, abstract tiếng Anh còn là “bộ mặt” khi bài đăng trên tạp chí trong nước được lập chỉ mục quốc tế. Một bản tóm tắt dịch sát chữ, sai thì động từ hay thiếu thông tin chính có thể làm giảm đáng kể sức thuyết phục của cả công trình.</p>\n\n<h2>Cấu trúc tóm tắt theo IMRaD</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phần</th><th>Trả lời câu hỏi</th><th>Độ dài gợi ý</th></tr>\n  <tr><td>Bối cảnh/mục tiêu</td><td>Vì sao nghiên cứu? Mục tiêu là gì?</td><td>1-2 câu</td></tr>\n  <tr><td>Phương pháp</td><td>Làm thế nào, đối tượng, cỡ mẫu?</td><td>1-2 câu</td></tr>\n  <tr><td>Kết quả</td><td>Phát hiện chính, có số liệu</td><td>2-3 câu</td></tr>\n  <tr><td>Kết luận/ý nghĩa</td><td>Điều gì rút ra, đóng góp gì?</td><td>1-2 câu</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Một số tạp chí yêu cầu tóm tắt có cấu trúc với tiêu đề con (Background, Methods, Results, Conclusions). Luôn kiểm tra hướng dẫn tác giả của tạp chí mục tiêu.</div></div>\n\n<h2>Thì động từ trong abstract tiếng Anh</h2>\n<ul>\n  <li><b>Hiện tại đơn</b> cho bối cảnh và kết luận chung: <i>Digital literacy is essential for…</i></li>\n  <li><b>Quá khứ đơn</b> cho việc đã làm trong nghiên cứu: <i>We surveyed 412 students…</i>, <i>The results showed…</i></li>\n  <li><b>Hiện tại hoàn thành</b> khi nói về các nghiên cứu trước: <i>Few studies have examined…</i></li>\n</ul>\n\n<h2>Lỗi thường gặp khi dịch tóm tắt Việt - Anh</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Nên tránh</b>Dịch từng chữ theo cấu trúc tiếng Việt; câu quá dài nhiều mệnh đề; viết tắt chưa giải thích; lặp lại tiêu đề; thiếu số liệu kết quả; dùng “we” và bị động lẫn lộn.</div>\n  <div class=\"good\"><b>Nên làm</b>Viết lại theo cách diễn đạt học thuật tiếng Anh; mỗi câu một ý; giải thích viết tắt lần đầu; nêu con số chính; thống nhất ngôi và thể trong toàn tóm tắt.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không đưa vào tóm tắt thông tin không có trong bài (kết quả chưa báo cáo, trích dẫn tài liệu). Phần lớn tạp chí cũng không khuyến khích trích dẫn trong abstract.</div></div>\n\n<h2>Từ khóa (keywords)</h2>\n<ol class=\"steps\">\n  <li>Chọn 3-6 từ khóa theo yêu cầu tạp chí, ưu tiên cụm từ người đọc sẽ tìm kiếm.</li>\n  <li>Tránh lặp nguyên văn các từ đã có trong tiêu đề nếu tạp chí khuyến nghị.</li>\n  <li>Dùng thuật ngữ chuẩn của ngành, kiểm tra trong các bài báo cùng lĩnh vực.</li>\n</ol>\n\n<h2>Số liệu, đơn vị và tên riêng</h2>\n<ul>\n  <li>Đổi dấu thập phân: tiếng Việt <b>3,5</b> → tiếng Anh <b>3.5</b>; dấu phân cách hàng nghìn: 1.200 → 1,200.</li>\n  <li>Giữ nguyên ký hiệu thống kê (p, n, SD, CI) và định dạng theo hướng dẫn tạp chí.</li>\n  <li>Tên địa phương, cơ quan: dùng tên tiếng Anh chính thức nếu có, nếu không giữ tên tiếng Việt.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lập một <a href=\"/blog/bang-thuat-ngu-dich-ky-thuat\">bảng thuật ngữ</a> nhỏ cho đề tài: khái niệm chính, tên thang đo, tên biến - dùng thống nhất giữa abstract, bài báo và luận văn.</div></div>\n\n<h2>Quy trình gợi ý</h2>\n<ol class=\"steps\">\n  <li>Viết tóm tắt tiếng Việt đầy đủ 4 phần, có số liệu.</li>\n  <li>Dịch theo ý, không theo chữ; đối chiếu với vài bài cùng lĩnh vực trên tạp chí mục tiêu.</li>\n  <li>Nhờ người am hiểu chuyên ngành và tiếng Anh học thuật hiệu đính.</li>\n  <li>Kiểm tra số từ, từ khóa, định dạng theo hướng dẫn tác giả.</li>\n</ol>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Tóm tắt theo 4 phần: bối cảnh, phương pháp, kết quả, kết luận.</li><li>Quá khứ đơn cho việc đã làm, hiện tại đơn cho kết luận chung.</li><li>Dịch theo ý, nêu số liệu chính, giải thích viết tắt.</li><li>Luôn đọc hướng dẫn tác giả của tạp chí mục tiêu.</li></ul></div>\n<p>Cần trình bày luận văn, bài báo đúng mẫu? Xem dịch vụ <a href=\"/dich-vu/danh-may-hoc-thuat\">đánh máy học thuật</a> và bài <a href=\"/blog/trich-dan-apa-ieee-word\">trích dẫn APA, IEEE trong Word</a>.</p>",
    "faq": [
      {
        "q": "Tóm tắt bài báo khoa học nên dài bao nhiêu từ?",
        "a": "Phụ thuộc yêu cầu từng tạp chí, phổ biến khoảng 150-250 từ. Hãy đọc kỹ hướng dẫn tác giả (author guidelines) của tạp chí trước khi viết."
      },
      {
        "q": "Dùng thì gì khi viết abstract tiếng Anh?",
        "a": "Thường dùng quá khứ đơn cho phương pháp và kết quả của nghiên cứu đã thực hiện, hiện tại đơn cho bối cảnh, kết luận và những điều được xem là đúng chung."
      },
      {
        "q": "Tên tác giả, địa danh tiếng Việt viết thế nào trong bản tiếng Anh?",
        "a": "Theo yêu cầu của tạp chí; nhiều tạp chí chấp nhận giữ dấu tiếng Việt. Điều quan trọng là thống nhất cách viết tên tác giả giữa các bài để không bị tách thành nhiều hồ sơ tác giả."
      }
    ],
    "cover": "/assets/img/blog/dich-tom-tat-bai-bao-khoa-hoc.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "chuan-bi-ho-so-dich-thuat-cong-chung",
    "cat": "Dịch thuật",
    "date": "2026-09-25",
    "tags": [
      "Dịch thuật công chứng",
      "Hồ sơ du học",
      "Chứng thực",
      "Giấy tờ"
    ],
    "title": "Chuẩn bị hồ sơ dịch thuật công chứng: checklist cho du học, visa, xuất khẩu lao động",
    "seoTitle": "Chuẩn bị hồ sơ dịch thuật công chứng: checklist đầy đủ",
    "excerpt": "Dịch thuật công chứng khác chứng thực thế nào? Checklist chuẩn bị bản gốc, bản sao, tên riêng, thời gian cần lưu ý để hồ sơ du học, visa, việc làm nước ngoài không bị trả lại.",
    "body": "<p class=\"lead\">Hồ sơ du học, xin visa, xuất khẩu lao động hay đăng ký kết hôn với người nước ngoài thường yêu cầu “bản dịch công chứng”. Chỉ một lỗi nhỏ - tên viết khác hộ chiếu, thiếu trang, bản sao mờ - cũng có thể khiến hồ sơ bị trả lại, lỡ hạn nộp. Checklist dưới đây giúp bạn chuẩn bị đúng ngay từ lần đầu.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bài viết mang tính hướng dẫn chung. Thủ tục và yêu cầu cụ thể có thể thay đổi theo quy định từng thời điểm và theo nơi nhận hồ sơ (trường học, đại sứ quán, cơ quan nước ngoài). Hãy luôn kiểm tra yêu cầu mới nhất từ nơi nhận hồ sơ.</div></div>\n\n<h2>“Công chứng” hay “chứng thực”: hiểu đúng thuật ngữ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Hình thức</th><th>Xác nhận điều gì</th><th>Thường thực hiện tại</th></tr>\n  <tr><td><b>Chứng thực chữ ký người dịch</b></td><td>Chữ ký trên bản dịch đúng là của người dịch</td><td>Cơ quan có thẩm quyền chứng thực theo quy định</td></tr>\n  <tr><td><b>Công chứng bản dịch</b></td><td>Công chứng viên xác nhận tính chính xác, hợp pháp của bản dịch</td><td>Phòng công chứng, văn phòng công chứng</td></tr>\n  <tr><td><b>Hợp pháp hóa lãnh sự</b></td><td>Con dấu, chữ ký trên giấy tờ được công nhận để dùng ở nước khác</td><td>Cơ quan ngoại giao, lãnh sự</td></tr>\n</table></div>\n<p>Trong giao tiếp hằng ngày, cả hai hình thức đầu đều được gọi chung là “dịch công chứng”. Điều quan trọng là hỏi nơi nhận hồ sơ: họ chấp nhận hình thức nào, có cần hợp pháp hóa lãnh sự hay không.</p>\n\n<h2>Checklist chuẩn bị giấy tờ</h2>\n<ol class=\"steps\">\n  <li><b>Liệt kê giấy tờ cần dịch</b> theo đúng danh mục nơi nhận yêu cầu: học bạ, bằng tốt nghiệp, bảng điểm, giấy khai sinh, xác nhận tài chính…</li>\n  <li><b>Kiểm tra bản gốc</b>: còn nguyên vẹn, đủ trang, dấu và chữ ký rõ ràng, không tẩy xóa.</li>\n  <li><b>Chuẩn bị bản sao hợp lệ</b> nếu không muốn đưa bản gốc, và hỏi trước nơi làm thủ tục có chấp nhận không.</li>\n  <li><b>Thống nhất tên riêng</b>: lấy hộ chiếu làm chuẩn cho họ tên, ngày sinh.</li>\n  <li><b>Lập bảng thuật ngữ</b>: tên trường, tên cơ quan, chức danh - dùng một cách dịch cho mọi giấy tờ.</li>\n  <li><b>Hỏi số lượng bản</b>: mỗi nơi nhận có thể cần bản riêng, làm dư một bộ để dự phòng.</li>\n  <li><b>Tính thời gian</b>: cộng thời gian dịch, chứng thực, hợp pháp hóa (nếu có) và gửi hồ sơ.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Lỗi khiến hồ sơ bị trả lại nhiều nhất là <b>thông tin không khớp</b>: tên trong bản dịch học bạ khác hộ chiếu, ngày sinh viết theo hai định dạng khác nhau, tên trường dịch mỗi giấy một kiểu.</div></div>\n\n<h2>Định dạng ngày tháng, số liệu trong bản dịch</h2>\n<ul>\n  <li>Ghi rõ định dạng ngày, ví dụ “16 October 2026” để tránh nhầm giữa ngày/tháng/năm và tháng/ngày/năm.</li>\n  <li>Điểm số giữ đúng thang điểm gốc (thang 10), kèm ghi chú nếu nơi nhận yêu cầu quy đổi.</li>\n  <li>Số tiền ghi rõ đơn vị tiền tệ (VND), dấu phân cách theo quy ước của ngôn ngữ đích.</li>\n</ul>\n\n<h2>Giấy tờ cũ, mờ, viết tay: xử lý thế nào?</h2>\n<p>Với giấy khai sinh cũ, học bạ viết tay, người dịch phải đọc được chính xác từng chữ. Nếu bản gốc khó đọc, nên <a href=\"/blog/danh-may-ban-goc-truoc-khi-dich\">đánh máy bản gốc trước khi dịch</a> và nhờ người trong gia đình xác nhận các tên riêng, địa danh cũ. Những chỗ không đọc được cần ghi chú rõ thay vì đoán.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Chụp hoặc scan toàn bộ giấy tờ thành PDF, đặt tên theo thứ tự (01_HoChieu, 02_KhaiSinh…) và lưu lên đám mây. Khi cần bổ sung hồ sơ, bạn có ngay bản điện tử để gửi.</div></div>\n\n<h2>Trình bày bản dịch giấy tờ</h2>\n<p>Bản dịch tốt nên phản ánh bố cục của bản gốc: quốc hiệu, tiêu đề, các mục thông tin theo đúng thứ tự; vị trí con dấu, chữ ký được ghi chú như “[Đã ký]”, “[Dấu: …]”. Bố cục tương ứng giúp cán bộ tiếp nhận đối chiếu nhanh giữa bản gốc và bản dịch.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Hỏi nơi nhận hồ sơ chấp nhận hình thức xác nhận nào trước khi làm.</li><li>Lấy hộ chiếu làm chuẩn cho họ tên, ngày sinh trong mọi bản dịch.</li><li>Lập bảng thuật ngữ thống nhất cho tên trường, cơ quan, chức danh.</li><li>Dự trù đủ thời gian cho dịch, chứng thực và hợp pháp hóa.</li></ul></div>\n<p>Giấy tờ của bạn là bản viết tay hoặc scan mờ? Đánh máy 247 nhận <a href=\"/dich-vu/danh-may-van-ban-phap-ly\">đánh máy văn bản, giấy tờ</a> giữ nguyên văn để bạn chuyển cho đơn vị dịch thuật.</p>",
    "faq": [
      {
        "q": "Dịch thuật công chứng là gì?",
        "a": "Cách gọi phổ biến để chỉ bản dịch được xác nhận về mặt pháp lý: chứng thực chữ ký người dịch tại cơ quan có thẩm quyền, hoặc công chứng bản dịch tại tổ chức hành nghề công chứng. Nơi nhận hồ sơ sẽ quy định hình thức nào được chấp nhận."
      },
      {
        "q": "Có cần mang bản gốc khi làm thủ tục không?",
        "a": "Thường là có. Cơ quan chứng thực hoặc công chứng cần đối chiếu bản dịch với bản chính hoặc bản sao hợp lệ của giấy tờ. Hãy hỏi trước nơi thực hiện để chuẩn bị đúng."
      },
      {
        "q": "Tên riêng trong bản dịch viết thế nào?",
        "a": "Tên người viết đúng như trong hộ chiếu (không dấu, thứ tự theo hộ chiếu). Tên trường, địa danh nên thống nhất trong toàn bộ hồ sơ để tránh bị coi là hai thông tin khác nhau."
      }
    ],
    "cover": "/assets/img/blog/chuan-bi-ho-so-dich-thuat-cong-chung.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 5
  },
  {
    "slug": "ky-hieu-hat-nhan-vat-ly",
    "cat": "Học thuật",
    "date": "2026-09-24",
    "tags": [
      "Vật lý hạt nhân",
      "Đồng vị",
      "Phóng xạ",
      "Công thức"
    ],
    "title": "Ký hiệu hạt nhân, đồng vị và phương trình phân rã: gõ đúng chuẩn trong Word và LaTeX",
    "seoTitle": "Ký hiệu hạt nhân, đồng vị, phương trình phân rã đúng chuẩn",
    "excerpt": "Viết đúng ký hiệu hạt nhân với số khối, nguyên tử số; phương trình phân rã alpha, beta và cách gõ trong Word Equation, LaTeX mhchem.",
    "body": "<p class=\"lead\">Chương Vật lý hạt nhân có những ký hiệu “khó gõ” nhất trong chương trình phổ thông: số khối và nguyên tử số đặt ở bên trái ký hiệu nguyên tố, phương trình phân rã có hạt alpha, electron, phản neutrino. Gõ sai vị trí chỉ số không chỉ xấu mà còn sai nghĩa. Bài viết tổng hợp quy ước và cách gõ chuẩn.</p>\n<figure><img src=\"/assets/img/blog/fig-ky-hieu-hat-nhan.svg\" alt=\"Ký hiệu hạt nhân với số khối A và nguyên tử số Z\" loading=\"lazy\" width=\"960\"><figcaption>Số khối A ở góc trên bên trái, nguyên tử số Z ở góc dưới bên trái ký hiệu nguyên tố X.</figcaption></figure>\n\n<h2>Quy ước ký hiệu</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Thành phần</th><th>Vị trí</th><th>Ý nghĩa</th></tr>\n  <tr><td>A - số khối</td><td>Trên, bên trái</td><td>Tổng số proton và neutron</td></tr>\n  <tr><td>Z - nguyên tử số</td><td>Dưới, bên trái</td><td>Số proton (điện tích hạt nhân)</td></tr>\n  <tr><td>X - ký hiệu</td><td>Giữa, chữ đứng</td><td>Nguyên tố hóa học</td></tr>\n</table></div>\n<p>Ví dụ: uranium 235 có <i>A</i> = 235, <i>Z</i> = 92; hạt alpha là hạt nhân heli với <i>A</i> = 4, <i>Z</i> = 2; electron trong phân rã beta trừ có <i>A</i> = 0, <i>Z</i> = −1.</p>\n\n<h2>Phương trình phân rã mẫu</h2>\n<ul>\n  <li><b>Phân rã alpha</b>: uranium 238 (A = 238, Z = 92) → thori 234 (A = 234, Z = 90) + hạt alpha (A = 4, Z = 2).</li>\n  <li><b>Phân rã beta trừ</b>: carbon 14 (A = 14, Z = 6) → nitơ 14 (A = 14, Z = 7) + electron (A = 0, Z = −1) + phản neutrino.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Kiểm tra nhanh: tổng số khối hai vế bằng nhau (238 = 234 + 4) và tổng nguyên tử số hai vế bằng nhau (92 = 90 + 2). Đây là cách soát lỗi gõ hiệu quả nhất.</div></div>\n\n<h2>Gõ trong Word</h2>\n<ol class=\"steps\">\n  <li>Nhấn <kbd>Alt</kbd> + <kbd>=</kbd> mở khung Equation.</li>\n  <li>Chọn <b>Script → Left Subscript-Superscript</b> (chỉ số trên - dưới bên trái).</li>\n  <li>Điền A vào ô trên, Z vào ô dưới, ký hiệu nguyên tố vào ô chính; chuyển ký hiệu về chữ đứng.</li>\n  <li>Mũi tên phản ứng: gõ <span class=\"mono\">\\rightarrow</span> rồi phím cách.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Gõ xong một hạt nhân chuẩn (ví dụ hạt alpha, electron, neutron), lưu bằng “Save as New Equation” để chèn lại nhanh trong cả bộ đề.</div></div>\n\n<h2>Gõ trong LaTeX</h2>\n<pre class=\"code\"><code>\\usepackage[version=4]{mhchem}\n\n\\ce{^{238}_{92}U -> ^{234}_{90}Th + ^{4}_{2}He}\n\\ce{^{14}_{6}C -> ^{14}_{7}N + ^{0}_{-1}e + \\bar{\\nu}_e}</code></pre>\n<p>Gói <span class=\"mono\">mhchem</span> căn số khối và nguyên tử số thẳng hàng về bên phải, tránh lỗi số có hai chữ số và một chữ số bị lệch nhau - lỗi rất hay gặp khi dùng chỉ số thường.</p>\n\n<h2>Định luật phóng xạ và chu kỳ bán rã</h2>\n<p>Số hạt nhân còn lại sau thời gian <i>t</i>: <i>N</i> = <i>N</i><sub>0</sub> · 2<sup>−<i>t</i>/<i>T</i></sup>, với <i>T</i> là chu kỳ bán rã. Khi gõ, chú ý số mũ là cả phân số −<i>t</i>/<i>T</i> (phải nằm trọn trong chỉ số trên), <i>N</i><sub>0</sub> có chỉ số dưới viết đứng hoặc nghiêng thống nhất trong toàn bài.</p>\n\n<h2>Lỗi thường gặp</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Sai</b>Đặt A, Z bên phải (nhầm với chỉ số hóa học); A và Z lệch cột; ký hiệu nguyên tố in nghiêng; số mũ −t/T chỉ có −t ở trên.</div>\n  <div class=\"good\"><b>Đúng</b>A, Z bên trái, căn phải thẳng hàng; ký hiệu đứng; số mũ đầy đủ; kiểm tra bảo toàn A và Z ở hai vế.</div>\n</div>\n\n<h2>Một số hạt thường gặp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Hạt</th><th>A</th><th>Z</th></tr>\n  <tr><td>Proton (hạt nhân hiđro)</td><td>1</td><td>1</td></tr>\n  <tr><td>Neutron</td><td>1</td><td>0</td></tr>\n  <tr><td>Hạt alpha (hạt nhân heli)</td><td>4</td><td>2</td></tr>\n  <tr><td>Electron (beta trừ)</td><td>0</td><td>−1</td></tr>\n  <tr><td>Positron (beta cộng)</td><td>0</td><td>+1</td></tr>\n</table></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>A ở trên, Z ở dưới, cả hai bên trái ký hiệu nguyên tố.</li><li>Word: Script → Left Subscript-Superscript; LaTeX: mhchem.</li><li>Soát lỗi bằng bảo toàn số khối và điện tích.</li><li>Số mũ của định luật phóng xạ phải chứa trọn −t/T.</li></ul></div>\n<p>Xem thêm <a href=\"/blog/go-cong-thuc-vat-ly-don-vi-si\">công thức vật lý và đơn vị SI</a>, hoặc dịch vụ <a href=\"/dich-vu/danh-may-cong-thuc\">đánh máy công thức</a>.</p>",
    "faq": [
      {
        "q": "Ký hiệu hạt nhân viết như thế nào?",
        "a": "Ký hiệu nguyên tố X kèm số khối A ở góc trên bên trái và nguyên tử số Z ở góc dưới bên trái, ví dụ uranium 235 có A = 235, Z = 92."
      },
      {
        "q": "Gõ ký hiệu có chỉ số bên trái trong Word thế nào?",
        "a": "Trong khung Equation, chọn cấu trúc chỉ số trên - dưới bên trái (Left Subscript-Superscript) trong nhóm Script, rồi điền A, Z và ký hiệu nguyên tố."
      },
      {
        "q": "Phương trình phân rã cần bảo toàn những gì?",
        "a": "Phương trình phản ứng hạt nhân phải bảo toàn số khối (tổng A hai vế bằng nhau) và bảo toàn điện tích (tổng Z hai vế bằng nhau)."
      }
    ],
    "cover": "/assets/img/blog/ky-hieu-hat-nhan-vat-ly.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "trich-dan-apa-ieee-word",
    "cat": "Học thuật",
    "date": "2026-09-23",
    "tags": [
      "Trích dẫn",
      "APA",
      "IEEE",
      "Tài liệu tham khảo"
    ],
    "title": "Trích dẫn APA 7, IEEE và tạo danh mục tài liệu tham khảo tự động trong Word",
    "seoTitle": "Trích dẫn APA 7, IEEE và tạo tài liệu tham khảo trong Word",
    "excerpt": "So sánh trích dẫn APA 7 và IEEE, cách tạo danh mục tài liệu tham khảo tự động bằng Word, Zotero, Mendeley và các lỗi cần tránh.",
    "body": "<p class=\"lead\">Trích dẫn sai chuẩn là một trong những lý do phổ biến khiến luận văn phải chỉnh sửa trước khi nộp: lúc ghi (Nguyễn, 2024), lúc ghi [3], danh mục tài liệu tham khảo thiếu nguồn, thừa nguồn, sắp xếp lộn xộn. Hiểu hai kiểu trích dẫn phổ biến nhất - APA và IEEE - và để máy tự quản lý danh mục sẽ giúp bạn tiết kiệm hàng giờ chỉnh sửa.</p>\n\n<h2>APA 7 và IEEE: so sánh nhanh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>APA 7</th><th>IEEE</th></tr>\n  <tr><td>Lĩnh vực hay dùng</td><td>Khoa học xã hội, giáo dục, tâm lý, kinh tế</td><td>Kỹ thuật, điện - điện tử, công nghệ thông tin</td></tr>\n  <tr><td>Trích dẫn trong bài</td><td>(Tác giả, năm) hoặc Tác giả (năm)</td><td>[1], [2]… theo thứ tự xuất hiện</td></tr>\n  <tr><td>Sắp xếp danh mục</td><td>Theo chữ cái tên tác giả</td><td>Theo số thứ tự</td></tr>\n  <tr><td>Định dạng danh mục</td><td>Thụt lề treo (hanging indent)</td><td>Số trong ngoặc vuông ở đầu mỗi mục</td></tr>\n</table></div>\n\n<h2>Ví dụ trích dẫn bài báo</h2>\n<p><b>APA 7</b> - trong bài: (Trần &amp; Lê, 2023). Trong danh mục:</p>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px\">Trần, A. B., &amp; Lê, C. D. (2023). Tên bài báo viết hoa chữ đầu câu. <i>Tên Tạp Chí</i>, <i>12</i>(3), 45-60. https://doi.org/10.xxxx/xxxxx</p>\n<p><b>IEEE</b> - trong bài: …như đã chỉ ra trong [4]. Trong danh mục:</p>\n<p class=\"mono\" style=\"background:var(--bg-grey);padding:12px;border-radius:8px\">[4] A. B. Trần and C. D. Lê, “Tên bài báo,” <i>Tên Tạp Chí</i>, vol. 12, no. 3, pp. 45-60, 2023, doi: 10.xxxx/xxxxx.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Đây là ví dụ minh họa cấu trúc. Hãy đối chiếu với tài liệu hướng dẫn chính thức của APA, IEEE và quy định riêng của trường hoặc tạp chí - đặc biệt cách ghi tên tác giả Việt Nam.</div></div>\n\n<h2>Tạo danh mục tự động bằng Word</h2>\n<ol class=\"steps\">\n  <li>Vào <b>References → Style</b>, chọn APA hoặc IEEE.</li>\n  <li><b>Insert Citation → Add New Source</b>: chọn loại nguồn (bài báo, sách, website), điền thông tin.</li>\n  <li>Lần sau trích lại nguồn đó, chọn trong danh sách đã lưu.</li>\n  <li>Đặt con trỏ ở cuối bài, chọn <b>Bibliography</b> để chèn danh mục; cập nhật bằng <kbd>F9</kbd>.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Với luận văn có hàng trăm nguồn, phần mềm quản lý trích dẫn miễn phí như Zotero hoặc Mendeley có tiện ích gắn vào Word: lấy thông tin nguồn từ DOI, đổi kiểu trích dẫn cả bài chỉ bằng một cú nhấp.</div></div>\n\n<h2>Lỗi trích dẫn thường gặp</h2>\n<ul>\n  <li><b>Trộn kiểu</b>: vừa (tác giả, năm) vừa [số] trong cùng tài liệu.</li>\n  <li><b>Danh mục không khớp</b>: nguồn trích trong bài không có trong danh mục, hoặc ngược lại.</li>\n  <li><b>Thiếu thông tin</b>: không có năm, số tập, số trang, DOI.</li>\n  <li><b>Sắp xếp sai</b>: APA không theo chữ cái; IEEE không theo thứ tự xuất hiện.</li>\n  <li><b>Gõ tay số [1], [2]</b>: chèn nguồn mới ở giữa bài là phải đánh số lại toàn bộ.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Trích dẫn đầy đủ không chỉ là hình thức: đó là cách thể hiện sự trung thực học thuật. Diễn giải ý của người khác mà không trích nguồn vẫn có thể bị coi là đạo văn.</div></div>\n\n<h2>Kiểm tra trước khi nộp</h2>\n<p>Dùng <kbd>Ctrl</kbd> + <kbd>F</kbd> tìm dấu “(” và “[” để rà nhanh các trích dẫn; đối chiếu từng nguồn với danh mục; kiểm tra định dạng thụt lề, phông chữ của danh mục theo mẫu của trường. Kết hợp với <a href=\"/blog/tao-muc-luc-tu-dong-word\">mục lục tự động</a> và <a href=\"/blog/dinh-dang-luan-van-chuan\">định dạng luận văn chuẩn</a> để hoàn thiện bản cuối.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>APA dùng tác giả - năm; IEEE dùng số theo thứ tự xuất hiện.</li><li>Chọn một kiểu và dùng thống nhất cả tài liệu.</li><li>Để Word, Zotero hoặc Mendeley quản lý danh mục tự động.</li><li>Đối chiếu trích dẫn trong bài và danh mục trước khi nộp.</li></ul></div>",
    "faq": [
      {
        "q": "APA và IEEE khác nhau thế nào?",
        "a": "APA dùng kiểu tác giả - năm trong ngoặc (Nguyễn, 2024), danh mục xếp theo tên tác giả. IEEE dùng số thứ tự trong ngoặc vuông [1] theo thứ tự xuất hiện, danh mục xếp theo số."
      },
      {
        "q": "Word có tự tạo danh mục tài liệu tham khảo không?",
        "a": "Có. Vào References → Insert Citation để thêm nguồn, chọn Style (APA, IEEE…), sau đó Bibliography để chèn danh mục. Với tài liệu dài, phần mềm quản lý trích dẫn như Zotero, Mendeley tiện hơn."
      },
      {
        "q": "Tên tác giả Việt Nam trích dẫn theo APA thế nào?",
        "a": "Mỗi trường, mỗi tạp chí có thể có quy định riêng cho tên người Việt: có nơi ghi đầy đủ họ tên, có nơi theo quy tắc họ - viết tắt tên. Hãy theo hướng dẫn của trường hoặc tạp chí và thống nhất trong toàn bài."
      }
    ],
    "cover": "/assets/img/blog/trich-dan-apa-ieee-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "dich-hop-dong-anh-viet",
    "cat": "Dịch thuật",
    "date": "2026-09-21",
    "tags": [
      "Dịch hợp đồng",
      "Dịch pháp lý",
      "Thuật ngữ",
      "Song ngữ"
    ],
    "title": "Dịch hợp đồng Anh - Việt: cấu trúc điều khoản, thuật ngữ pháp lý và những lỗi có thể gây tranh chấp",
    "seoTitle": "Dịch hợp đồng Anh - Việt: cấu trúc điều khoản và lỗi hay gặp",
    "excerpt": "Kinh nghiệm dịch hợp đồng Anh - Việt: cấu trúc điều khoản, dịch shall, may, including but not limited to và lỗi dễ gây tranh chấp.",
    "body": "<p class=\"lead\">Một từ dịch sai trong hợp đồng có thể biến nghĩa vụ thành quyền lựa chọn, biến “không ít hơn 30 ngày” thành “không quá 30 ngày”. Dịch hợp đồng vì thế đòi hỏi sự chính xác tuyệt đối về câu chữ, nhất quán về thuật ngữ và hiểu cấu trúc văn bản pháp lý. Bài viết chia sẻ kinh nghiệm thực tế khi làm việc với hợp đồng Anh - Việt.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bài viết mang tính chia sẻ kinh nghiệm ngôn ngữ, không phải tư vấn pháp lý. Nội dung hợp đồng và hiệu lực pháp lý cần được luật sư xem xét.</div></div>\n\n<h2>Cấu trúc thường gặp của hợp đồng tiếng Anh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phần</th><th>Tên tiếng Anh thường gặp</th><th>Gợi ý tiếng Việt</th></tr>\n  <tr><td>Phần mở đầu</td><td>Preamble, Parties</td><td>Phần mở đầu, Các bên</td></tr>\n  <tr><td>Căn cứ, bối cảnh</td><td>Recitals, Whereas</td><td>Xét rằng</td></tr>\n  <tr><td>Định nghĩa</td><td>Definitions and Interpretation</td><td>Định nghĩa và giải thích</td></tr>\n  <tr><td>Nghĩa vụ các bên</td><td>Obligations</td><td>Nghĩa vụ của các bên</td></tr>\n  <tr><td>Bất khả kháng</td><td>Force Majeure</td><td>Sự kiện bất khả kháng</td></tr>\n  <tr><td>Luật áp dụng</td><td>Governing Law</td><td>Luật điều chỉnh</td></tr>\n  <tr><td>Giải quyết tranh chấp</td><td>Dispute Resolution</td><td>Giải quyết tranh chấp</td></tr>\n</table></div>\n\n<h2>Những cụm từ cần dịch nhất quán</h2>\n<ul>\n  <li><b>shall</b> - nghĩa vụ (“phải”); <b>may</b> - quyền (“có thể”, “được quyền”); không được hoán đổi.</li>\n  <li><b>including but not limited to</b> - “bao gồm nhưng không giới hạn ở”.</li>\n  <li><b>notwithstanding</b> - “bất kể”, “mặc dù có quy định tại…”.</li>\n  <li><b>hereinafter referred to as</b> - “sau đây gọi là”.</li>\n  <li><b>subject to</b> - “tùy thuộc vào”, “với điều kiện tuân thủ”.</li>\n  <li><b>in writing</b> - “bằng văn bản”.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lập <a href=\"/blog/bang-thuat-ngu-dich-ky-thuat\">bảng thuật ngữ</a> ngay khi đọc phần Định nghĩa. Các từ được định nghĩa (thường viết hoa: “the Services”, “the Effective Date”) phải dùng đúng một cách dịch trong toàn hợp đồng.</div></div>\n\n<h2>Lỗi dịch có thể gây tranh chấp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Loại lỗi</th><th>Ví dụ rủi ro</th></tr>\n  <tr><td>Giới hạn số lượng, thời gian</td><td>“not less than 30 days” dịch nhầm thành “không quá 30 ngày”</td></tr>\n  <tr><td>Nghĩa vụ và quyền</td><td>“shall” dịch thành “có thể”</td></tr>\n  <tr><td>Phạm vi liệt kê</td><td>Bỏ “but not limited to” làm danh sách thành danh sách đóng</td></tr>\n  <tr><td>Số tiền, ngày tháng</td><td>Lệch dấu phân cách thập phân, định dạng ngày/tháng</td></tr>\n  <tr><td>Tham chiếu điều khoản</td><td>“Clause 5.2” trỏ sai sau khi bản dịch đánh số lại</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không “làm mượt” câu văn bằng cách gộp, tách điều khoản khác bản gốc. Bản dịch hợp đồng cần giữ cấu trúc tương ứng để đối chiếu từng điều.</div></div>\n\n<h2>Quy trình dịch hợp đồng an toàn</h2>\n<ol class=\"steps\">\n  <li><b>Chuẩn bị bản gốc chỉnh sửa được</b>: nếu chỉ có bản scan, hãy <a href=\"/blog/danh-may-ban-goc-truoc-khi-dich\">đánh máy bản gốc</a> giữ nguyên văn, đánh số điều khoản như bản gốc.</li>\n  <li><b>Đọc toàn bộ, chốt thuật ngữ</b> từ phần Định nghĩa.</li>\n  <li><b>Dịch theo cấu trúc</b>: giữ số điều, khoản; tham chiếu chéo cập nhật đúng.</li>\n  <li><b>Hiệu đính</b> bởi người thứ hai, đối chiếu từng câu với bản gốc.</li>\n  <li><b>Rà soát pháp lý</b> bởi luật sư khi hợp đồng có giá trị lớn.</li>\n  <li><b>Trình bày song ngữ</b> nếu cần - xem <a href=\"/blog/trinh-bay-ban-dich-song-ngu\">bố cục bản dịch song ngữ</a>.</li>\n</ol>\n\n<h2>Số tiền, ngày tháng, tên riêng</h2>\n<p>Ghi số tiền cả bằng số và bằng chữ như bản gốc; tiếng Việt dùng dấu chấm phân cách hàng nghìn (1.250.000) và dấu phẩy thập phân. Ngày tháng nên ghi rõ tên tháng để tránh nhầm thứ tự ngày - tháng. Tên công ty giữ đúng tên đăng ký, tên tiếng Anh đặt trong ngoặc nếu cần.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Giữ đúng cấu trúc, số điều khoản như bản gốc.</li><li>Chốt thuật ngữ từ phần Định nghĩa; shall/may dịch nhất quán.</li><li>Soát kỹ giới hạn số lượng, thời gian, số tiền.</li><li>Hiệu đính độc lập và rà soát pháp lý với hợp đồng quan trọng.</li></ul></div>",
    "faq": [
      {
        "q": "“Shall” trong hợp đồng nên dịch thế nào?",
        "a": "Trong ngữ cảnh hợp đồng, “shall” thường diễn đạt nghĩa vụ, hay được dịch là “phải” hoặc “có nghĩa vụ”. Cần dịch nhất quán trong toàn văn bản và phân biệt với “may” (được quyền) và “will” tùy ngữ cảnh."
      },
      {
        "q": "Hợp đồng song ngữ có bản nào được ưu tiên?",
        "a": "Nên có điều khoản quy định ngôn ngữ ưu tiên áp dụng khi hai bản có sự khác biệt. Nội dung điều khoản do các bên thỏa thuận và nên được luật sư xem xét."
      },
      {
        "q": "Có nên dùng dịch máy cho hợp đồng?",
        "a": "Chỉ nên dùng để nắm ý sơ bộ. Bản dịch dùng để ký kết, nộp cơ quan hoặc làm căn cứ giải quyết tranh chấp cần người dịch có chuyên môn pháp lý kiểm tra toàn bộ."
      }
    ],
    "cover": "/assets/img/blog/dich-hop-dong-anh-viet.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "trinh-bay-ban-dich-song-ngu",
    "cat": "Dịch thuật",
    "date": "2026-09-21",
    "tags": [
      "Song ngữ",
      "Dịch thuật",
      "Word",
      "Định dạng"
    ],
    "title": "Trình bày bản dịch song ngữ Anh – Việt trong Word: 3 bố cục chuẩn và mẹo dàn trang",
    "seoTitle": "Trình bày bản dịch song ngữ Anh–Việt đẹp trong Word",
    "excerpt": "Hợp đồng song ngữ, tài liệu đào tạo, sách đối chiếu: 3 cách trình bày bản dịch song ngữ Anh – Việt trong Word - hai cột, xen kẽ đoạn, trang đối diện - kèm mẹo căn dòng, phông chữ.",
    "body": "<p class=\"lead\">Hợp đồng với đối tác nước ngoài, quy trình nội bộ cho nhân viên đa quốc tịch, tài liệu học ngoại ngữ - tất cả đều cần bản song ngữ dễ đọc, dễ đối chiếu. Trình bày song ngữ tưởng đơn giản nhưng rất dễ lệch dòng, vỡ bố cục khi sửa. Dưới đây là 3 bố cục chuẩn và cách làm trong Word.</p>\n<figure><img src=\"/assets/img/blog/fig-song-ngu.svg\" alt=\"Ba bố cục trình bày bản dịch song ngữ\" loading=\"lazy\" width=\"960\"><figcaption>Ba bố cục phổ biến: hai cột song song, xen kẽ từng đoạn và hai trang đối diện.</figcaption></figure>\n\n<h2>3 bố cục song ngữ phổ biến</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bố cục</th><th>Phù hợp</th><th>Hạn chế</th></tr>\n  <tr><td><b>Hai cột song song</b></td><td>Hợp đồng, biên bản, điều khoản</td><td>Trang chật khi câu dài</td></tr>\n  <tr><td><b>Xen kẽ từng đoạn</b></td><td>Tài liệu đào tạo, bài học ngoại ngữ</td><td>Tài liệu dài gấp đôi</td></tr>\n  <tr><td><b>Hai trang đối diện</b></td><td>Sách in, tuyển tập thơ văn</td><td>Cần dàn trang kỹ, hợp với in ấn</td></tr>\n</table></div>\n\n<h2>Bố cục hai cột: làm bằng bảng, không dùng Columns</h2>\n<ol class=\"steps\">\n  <li>Chèn bảng 2 cột (<b>Insert → Table</b>), mỗi hàng là một cặp điều khoản hoặc đoạn văn.</li>\n  <li>Đặt độ rộng cột bằng nhau, bỏ viền (<b>Borders → No Border</b>) hoặc giữ viền mảnh nếu là hợp đồng.</li>\n  <li>Bật <b>Repeat Header Rows</b> cho hàng tiêu đề “English | Tiếng Việt” để lặp lại ở mỗi trang.</li>\n  <li>Cho phép hàng ngắt qua trang (<b>Allow row to break across pages</b>) với đoạn dài.</li>\n  <li>Tạo hai Style riêng, ví dụ “Song ngữ – EN” và “Song ngữ – VI”, gán ngôn ngữ kiểm tra chính tả tương ứng.</li>\n</ol>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng định dạng khác nhau nhẹ để phân biệt hai ngôn ngữ: tiếng Việt chữ thường, tiếng Anh chữ nghiêng hoặc màu xám đậm. Người đọc dò nhanh hơn mà trang vẫn trang nhã.</div></div>\n\n<h2>Bố cục xen kẽ đoạn</h2>\n<p>Mỗi đoạn tiếng Anh theo sau là đoạn tiếng Việt tương ứng, cách nhau một khoảng nhỏ. Thụt lề hoặc đổi màu đoạn bản dịch để tách bạch. Bố cục này dễ làm nhất, hợp với tài liệu học tập và văn bản có nhiều tiêu đề. Dùng <b>Heading</b> song ngữ (ví dụ “1. Scope/Phạm vi”) để mục lục tự động hiển thị cả hai.</p>\n\n<h2>Đánh số điều khoản đồng bộ</h2>\n<p>Với hợp đồng, số điều khoản ở hai bên phải luôn khớp: Điều 5.2 tiếng Việt tương ứng Article 5.2 tiếng Anh. Dùng <b>Multilevel List</b> cho từng cột thay vì gõ số tay; khi chèn thêm điều khoản, số tự cập nhật ở cả hai bên.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Hợp đồng song ngữ nên có điều khoản quy định <b>ngôn ngữ ưu tiên áp dụng</b> khi có khác biệt giữa hai bản. Nội dung điều khoản do các bên và luật sư quyết định, người trình bày chỉ đảm bảo hai bản khớp nhau về cấu trúc.</div></div>\n\n<h2>Mẹo dàn trang chuyên nghiệp</h2>\n<ul>\n  <li><b>Một phông cho cả hai ngôn ngữ</b>, cỡ 11–12 pt, giãn dòng 1,15–1,3.</li>\n  <li><b>Căn trái</b> thay vì căn đều hai bên trong cột hẹp để tránh khoảng trắng lớn giữa các từ.</li>\n  <li><b>Tiếng Việt thường dài hơn</b> bản tiếng Anh tương ứng; đặt cột tiếng Việt rộng hơn một chút nếu cần.</li>\n  <li><b>Đầu trang</b> ghi tên tài liệu bằng cả hai ngôn ngữ; <b>chân trang</b> đánh số “Trang 1/10 – Page 1 of 10”.</li>\n  <li><b>Kiểm tra bằng chế độ xem hai trang</b> (View → Multiple Pages) trước khi in.</li>\n</ul>\n\n<h2>Từ bản scan đến bản song ngữ</h2>\n<p>Nếu bản gốc chỉ là bản giấy hoặc PDF scan, cần <a href=\"/blog/danh-may-ban-goc-truoc-khi-dich\">đánh máy bản gốc</a> trước, sau đó đưa vào bảng song ngữ cùng bản dịch. Như vậy cả hai cột đều chỉnh sửa được, dễ cập nhật khi hợp đồng có phụ lục mới.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chọn bố cục theo mục đích: hai cột cho hợp đồng, xen kẽ cho tài liệu học.</li><li>Dùng bảng thay vì Columns để hai ngôn ngữ không lệch nhau.</li><li>Gán ngôn ngữ kiểm tra chính tả bằng Style riêng cho từng cột.</li><li>Đánh số điều khoản bằng Multilevel List để hai bên luôn khớp.</li></ul></div>\n<p>Cần dàn trang tài liệu song ngữ? Dịch vụ <a href=\"/dich-vu/dinh-dang-tai-lieu\">định dạng tài liệu</a> nhận trình bày bản dịch bạn cung cấp theo bố cục mong muốn.</p>",
    "faq": [
      {
        "q": "Nên dùng bảng hay chia cột để trình bày song ngữ?",
        "a": "Nên dùng bảng hai cột không viền. Chia cột (Columns) khiến văn bản chảy từ cột trái sang cột phải nên hai ngôn ngữ dễ lệch nhau; bảng giữ mỗi cặp đoạn trên cùng một hàng."
      },
      {
        "q": "Làm sao để Word kiểm tra chính tả đúng cho cả hai ngôn ngữ?",
        "a": "Bôi đen phần tiếng Anh, vào Review → Language → Set Proofing Language, chọn English; làm tương tự với phần tiếng Việt. Có thể gán ngôn ngữ vào Style riêng cho từng cột."
      },
      {
        "q": "Phông chữ nào phù hợp cho tài liệu song ngữ Anh – Việt?",
        "a": "Chọn phông Unicode có đủ dấu tiếng Việt và hiển thị tốt tiếng Anh như Times New Roman, Arial, Calibri, Cambria. Dùng cùng một phông cho cả hai ngôn ngữ để trang thống nhất."
      }
    ],
    "cover": "/assets/img/blog/trinh-bay-ban-dich-song-ngu.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "go-tieng-viet-dien-thoai",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-09-20",
    "tags": [
      "Gõ trên điện thoại",
      "Bàn phím tiếng Việt",
      "Nhập bằng giọng nói",
      "Telex"
    ],
    "title": "Gõ tiếng Việt trên điện thoại nhanh và ít sai: chọn bàn phím, Telex hay VNI, nhập bằng giọng nói",
    "seoTitle": "Gõ tiếng Việt trên điện thoại nhanh: bàn phím và giọng nói",
    "excerpt": "Cách gõ tiếng Việt nhanh trên điện thoại: chọn bàn phím, Telex hay VNI, gõ vuốt, nhập bằng giọng nói và làm sạch văn bản khi sang Word.",
    "body": "<p class=\"lead\">Ngày càng nhiều người soạn email, ghi chú, thậm chí cả báo cáo trên điện thoại. Nhưng màn hình nhỏ, phím sát nhau khiến việc gõ tiếng Việt có dấu dễ sai và chậm. Chỉ cần cài đặt đúng và tận dụng vài tính năng có sẵn, tốc độ soạn thảo trên điện thoại có thể cải thiện rõ rệt.</p>\n\n<h2>Chọn bàn phím phù hợp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bàn phím</th><th>Điểm mạnh</th><th>Lưu ý</th></tr>\n  <tr><td>Bàn phím mặc định iPhone</td><td>Có tiếng Việt Telex/VNI, nhập giọng nói tích hợp</td><td>Bật trong Cài đặt → Bàn phím</td></tr>\n  <tr><td>Gboard</td><td>Gõ vuốt, gợi ý từ, nhập giọng nói tiếng Việt</td><td>Thêm ngôn ngữ Tiếng Việt, chọn kiểu gõ</td></tr>\n  <tr><td>Laban Key</td><td>Phổ biến tại Việt Nam, nhiều tùy chọn gõ dấu</td><td>Cấp quyền bàn phím theo hướng dẫn</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Chỉ cài bàn phím từ kho ứng dụng chính thức. Bàn phím có thể đọc mọi thứ bạn gõ, nên tránh ứng dụng bàn phím không rõ nguồn gốc.</div></div>\n\n<h2>Telex, VNI hay gõ đơn giản?</h2>\n<p>Nếu bạn đã quen Telex trên máy tính, hãy dùng Telex trên điện thoại để giữ thói quen chung (xem <a href=\"/blog/telex-hay-vni\">Telex hay VNI</a>). Nhiều bàn phím còn có kiểu gõ hiện dấu bằng cách nhấn giữ phím nguyên âm, phù hợp người mới.</p>\n\n<h2>5 mẹo gõ nhanh hơn</h2>\n<ol class=\"steps\">\n  <li><b>Gõ vuốt</b>: vuốt ngón tay qua các chữ cái thay vì nhấn từng phím - nhanh với từ phổ biến.</li>\n  <li><b>Phím tắt văn bản</b>: tạo cụm ngắn như “dcbn” → “Địa chỉ: …”, “stk” → số tài khoản.</li>\n  <li><b>Nhấn đúp phím cách</b> để tự thêm dấu chấm và khoảng trắng (bật trong cài đặt).</li>\n  <li><b>Kéo phím cách</b> để di chuyển con trỏ chính xác thay vì chạm vào chữ.</li>\n  <li><b>Dùng gợi ý từ</b> phía trên bàn phím, nhất là với từ dài, tên riêng hay dùng.</li>\n</ol>\n\n<h2>Nhập bằng giọng nói tiếng Việt</h2>\n<p>Với ghi chú dài, nhập bằng giọng nói thường nhanh hơn gõ nhiều lần. Để kết quả tốt:</p>\n<ul>\n  <li>Nói rõ, tốc độ vừa phải, ở nơi yên tĩnh; đặt điện thoại gần miệng.</li>\n  <li>Nói từng câu trọn ý, dừng ngắn giữa các câu.</li>\n  <li>Đọc lại để sửa tên riêng, số liệu, thuật ngữ và dấu câu.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Với ghi âm dài như phỏng vấn, cuộc họp, nhận dạng giọng nói tự động thường sai nhiều khi có nhiều người nói, tiếng ồn hoặc giọng địa phương. Xem <a href=\"/blog/chuyen-am-phong-van-nghien-cuu\">chuyển âm phỏng vấn</a> để biết khi nào cần người nghe gõ.</div></div>\n\n<h2>Khi chuyển văn bản sang máy tính</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Lỗi hay gặp</b>Ngắt dòng giữa câu, khoảng trắng kép, dấu ngoặc kép cong lẫn thẳng, gạch nối lẫn gạch ngang, emoji trong văn bản chính thức.</div>\n  <div class=\"good\"><b>Cách làm sạch</b>Dán vào Word bằng <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd> (chỉ giữ chữ), dùng Find &amp; Replace thay hai dấu cách thành một, định dạng lại tiêu đề bằng Styles.</div>\n</div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Soạn trên ứng dụng ghi chú có đồng bộ đám mây, khi về máy tính chỉ cần mở lại để chỉnh sửa, không phải gửi qua tin nhắn.</div></div>\n\n<h2>Cầm máy và luyện tập đúng cách</h2>\n<p>Gõ bằng hai ngón cái nhanh và ít mỏi hơn gõ một ngón. Với văn bản dài, xoay ngang điện thoại để bàn phím rộng hơn, giảm chạm nhầm phím. Hãy dành vài phút mỗi ngày luyện gõ một đoạn văn có dấu, chú ý các từ hay sai như “nghiêng”, “khuỷu”, “quyết”. Khi đã quen, tốc độ tăng lên mà độ chính xác vẫn giữ được. Nếu phải soạn tài liệu dài thường xuyên, một bàn phím Bluetooth nhỏ gọn kết nối với điện thoại là khoản đầu tư đáng cân nhắc.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Nhiều điện thoại có chế độ hỗ trợ tiếp cận như phóng to bàn phím, rung khi chạm, đọc lại văn bản - hữu ích cho người lớn tuổi hoặc người có thị lực kém.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chọn bàn phím uy tín, dùng cùng kiểu gõ với máy tính.</li><li>Gõ vuốt, phím tắt văn bản, kéo phím cách giúp nhanh hơn.</li><li>Giọng nói tiện cho ghi chú, nhưng luôn đọc lại tên riêng và số liệu.</li><li>Làm sạch văn bản khi chuyển sang Word.</li></ul></div>",
    "faq": [
      {
        "q": "Điện thoại có gõ được tiếng Việt kiểu Telex không?",
        "a": "Có. Bàn phím mặc định của iPhone và các bàn phím phổ biến trên Android như Gboard, Laban Key đều hỗ trợ tiếng Việt với kiểu Telex hoặc VNI, chọn trong phần cài đặt ngôn ngữ của bàn phím."
      },
      {
        "q": "Nhập bằng giọng nói tiếng Việt có chính xác không?",
        "a": "Khá tốt với giọng rõ, môi trường yên tĩnh và câu nói tự nhiên. Tên riêng, thuật ngữ và dấu câu vẫn hay sai nên cần đọc lại và sửa trước khi gửi hoặc nộp."
      },
      {
        "q": "Văn bản soạn trên điện thoại chuyển sang Word bị lỗi gì?",
        "a": "Thường gặp là ngắt dòng thừa, khoảng trắng kép, dấu ngoặc kép và dấu gạch khác kiểu. Hãy dùng Find & Replace để làm sạch và định dạng lại bằng Styles."
      }
    ],
    "cover": "/assets/img/blog/go-tieng-viet-dien-thoai.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "ban-dia-hoa-website-phan-mem",
    "cat": "Dịch thuật",
    "date": "2026-09-18",
    "tags": [
      "Bản địa hóa",
      "Localization",
      "Website",
      "Phần mềm"
    ],
    "title": "Bản địa hóa (localization) website, phần mềm sang tiếng Việt: chuẩn bị chuỗi văn bản và tránh lỗi giao diện",
    "seoTitle": "Bản địa hóa website, phần mềm sang tiếng Việt: hướng dẫn",
    "excerpt": "Bản địa hóa website, ứng dụng sang tiếng Việt: chuẩn bị tệp chuỗi, giữ biến giữ chỗ, xử lý độ dài chữ, ngày giờ, tiền tệ và kiểm thử.",
    "body": "<p class=\"lead\">Ứng dụng di động, phần mềm quản lý, website bán hàng muốn tiếp cận người dùng Việt Nam đều cần tiếng Việt. Nhưng nhiều dự án dịch xong mới phát hiện nút bấm bị cắt chữ, câu ghép biến thành “Bạn có 1 tin nhắn mới(s)”, hay ngày tháng hiện theo kiểu Mỹ. Bản địa hóa tốt bắt đầu từ khâu chuẩn bị chuỗi văn bản.</p>\n\n<h2>Tệp chuỗi văn bản thường gặp</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Định dạng</th><th>Thường dùng cho</th><th>Lưu ý</th></tr>\n  <tr><td>JSON, YAML</td><td>Ứng dụng web</td><td>Chỉ dịch giá trị, không dịch khóa</td></tr>\n  <tr><td>.po / .pot</td><td>Phần mềm mã nguồn mở, WordPress</td><td>Có trường ngữ cảnh (msgctxt)</td></tr>\n  <tr><td>.strings, .xml</td><td>iOS, Android</td><td>Giữ ký tự thoát, định dạng số nhiều</td></tr>\n  <tr><td>.resx, .xliff</td><td>Phần mềm .NET, công cụ dịch</td><td>Mở bằng công cụ chuyên dụng</td></tr>\n</table></div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không dịch khóa (key) như <span class=\"mono\">\"btn.save\"</span>, không xóa dấu ngoặc, dấu phẩy trong JSON. Một ký tự sai có thể làm ứng dụng không chạy.</div></div>\n\n<h2>Biến giữ chỗ và câu ghép</h2>\n<ul>\n  <li>Giữ nguyên biến: <span class=\"mono\">{name}</span>, <span class=\"mono\">%s</span>, <span class=\"mono\">{{count}}</span>, thẻ <span class=\"mono\">&lt;b&gt;</span>.</li>\n  <li>Được đổi vị trí biến cho đúng ngữ pháp: “Welcome back, {name}!” → “Chào mừng {name} quay lại!”.</li>\n  <li>Tránh ghép câu từ nhiều mảnh (“You have” + số + “messages”); đề nghị lập trình viên dùng chuỗi trọn câu có biến.</li>\n  <li>Tiếng Việt không chia số nhiều; với định dạng có dạng số nhiều, có thể dùng cùng một câu cho các trường hợp.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Yêu cầu nhóm phát triển cung cấp <b>ảnh chụp màn hình</b> hoặc ghi chú ngữ cảnh cho từng chuỗi. “Open” là “Mở” hay “Đang mở cửa”? Không có ngữ cảnh, người dịch chỉ có thể đoán.</div></div>\n\n<h2>Độ dài chữ và phông</h2>\n<p>Chuỗi tiếng Việt thường dài hơn tiếng Anh tương ứng, lại có dấu phía trên và dưới chữ. Nút bấm, tiêu đề tab, thông báo đẩy dễ bị cắt chữ. Cách xử lý:</p>\n<ul>\n  <li>Thiết kế giao diện co giãn, cho phép xuống dòng ở những nơi hợp lý.</li>\n  <li>Đặt giới hạn ký tự cho chuỗi ngắn (nút, thông báo) và ghi rõ cho người dịch.</li>\n  <li>Kiểm tra phông chữ có đủ dấu tiếng Việt; tránh phông thiếu ký tự khiến dấu bị hiển thị bằng phông khác.</li>\n</ul>\n\n<h2>Ngày giờ, tiền tệ, đơn vị</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nội dung</th><th>Định dạng phổ biến tại Việt Nam</th></tr>\n  <tr><td>Ngày</td><td>16/10/2026 (ngày/tháng/năm)</td></tr>\n  <tr><td>Giờ</td><td>14:30 (24 giờ)</td></tr>\n  <tr><td>Tiền</td><td>1.250.000 đ hoặc 1.250.000 VND</td></tr>\n  <tr><td>Số thập phân</td><td>3,5 (dấu phẩy)</td></tr>\n</table></div>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Nên để phần mềm định dạng ngày, số, tiền theo thiết lập ngôn ngữ (locale) thay vì người dịch gõ tay trong chuỗi - vừa đúng, vừa không phải dịch lại khi đổi số liệu.</div></div>\n\n<h2>Giọng văn và xưng hô</h2>\n<p>Chọn cách xưng hô thống nhất: “bạn” thân thiện cho ứng dụng tiêu dùng; “Quý khách” trang trọng cho ngân hàng, bảo hiểm. Lập hướng dẫn văn phong ngắn và <a href=\"/blog/bang-thuat-ngu-dich-ky-thuat\">bảng thuật ngữ</a> (đăng nhập, tài khoản, giỏ hàng…) để nhiều người dịch vẫn nhất quán.</p>\n\n<h2>Kiểm thử sau khi dịch</h2>\n<ol class=\"steps\">\n  <li>Chạy thử ứng dụng với tiếng Việt trên màn hình nhỏ nhất được hỗ trợ.</li>\n  <li>Kiểm tra mọi trạng thái: lỗi, trống dữ liệu, thông báo, email tự động.</li>\n  <li>Ghi lại chuỗi bị cắt, sai ngữ cảnh và gửi lại người dịch.</li>\n</ol>\n\n<h2>Ước lượng khối lượng và chi phí</h2>\n<p>Khối lượng bản địa hóa thường tính theo số từ của tệp chuỗi. Hãy xuất danh sách chuỗi cần dịch, loại bỏ chuỗi trùng lặp và chuỗi không hiển thị cho người dùng (nhật ký hệ thống, mã lỗi nội bộ). Ở các lần cập nhật sau, chỉ gửi chuỗi mới hoặc đã thay đổi - công cụ quản lý bản dịch giúp làm việc này tự động, tiết kiệm thời gian và chi phí.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chỉ dịch giá trị, giữ nguyên khóa, biến giữ chỗ, thẻ.</li><li>Cung cấp ngữ cảnh, giới hạn ký tự cho người dịch.</li><li>Thiết kế co giãn và phông đủ dấu tiếng Việt.</li><li>Định dạng ngày, số, tiền theo locale; kiểm thử trên giao diện thật.</li></ul></div>",
    "faq": [
      {
        "q": "Bản địa hóa khác dịch thuật thế nào?",
        "a": "Dịch thuật chuyển ngôn ngữ; bản địa hóa còn điều chỉnh định dạng ngày giờ, tiền tệ, đơn vị, hình ảnh, cách xưng hô và kiểm tra giao diện để sản phẩm tự nhiên với người dùng địa phương."
      },
      {
        "q": "Biến giữ chỗ như {name} hay %s có được dịch không?",
        "a": "Không. Biến giữ chỗ phải giữ nguyên ký tự; người dịch chỉ có thể thay đổi vị trí của nó trong câu cho đúng ngữ pháp tiếng Việt."
      },
      {
        "q": "Vì sao giao diện bị vỡ sau khi dịch sang tiếng Việt?",
        "a": "Chuỗi tiếng Việt thường dài hơn tiếng Anh, có dấu cao hơn dòng chữ, và có thể thiếu phông hỗ trợ. Cần thiết kế giao diện co giãn và kiểm thử trên màn hình thật."
      }
    ],
    "cover": "/assets/img/blog/ban-dia-hoa-website-phan-mem.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "lam-phu-de-srt-chuan",
    "cat": "Chuyển âm",
    "date": "2026-09-17",
    "tags": [
      "Phụ đề",
      "SRT",
      "YouTube",
      "Chuyển âm"
    ],
    "title": "Cách làm phụ đề SRT chuẩn cho video YouTube, TikTok: định dạng, độ dài dòng, tốc độ đọc",
    "seoTitle": "Cách làm phụ đề SRT chuẩn cho video YouTube, TikTok",
    "excerpt": "Phụ đề giúp video tiếp cận nhiều người xem hơn. Hướng dẫn làm phụ đề SRT chuẩn: cấu trúc tệp, mốc thời gian, độ dài dòng, tốc độ đọc, ngắt câu và cách dùng để dịch phụ đề.",
    "body": "<p class=\"lead\">Rất nhiều người xem video trên điện thoại ở chế độ tắt tiếng - trên tàu xe, trong văn phòng, lúc khuya. Phụ đề giúp họ hiểu nội dung, đồng thời giúp người khiếm thính tiếp cận video và hỗ trợ dịch sang ngôn ngữ khác. Bài viết hướng dẫn làm phụ đề SRT đúng chuẩn, dễ đọc.</p>\n\n<h2>Cấu trúc một tệp SRT</h2>\n<pre class=\"code\"><code>1\n00:00:01,200 --&gt; 00:00:04,000\nXin chào các bạn,\nhôm nay chúng ta học gõ 10 ngón.\n\n2\n00:00:04,300 --&gt; 00:00:07,500\nTrước hết, hãy đặt tay\nlên hàng phím cơ sở.</code></pre>\n<ul>\n  <li><b>Số thứ tự</b> tăng dần từ 1.</li>\n  <li><b>Mốc thời gian</b> dạng <span class=\"mono\">giờ:phút:giây,mili giây</span>, dùng dấu phẩy trước mili giây và mũi tên <span class=\"mono\">--&gt;</span> giữa hai mốc.</li>\n  <li><b>Nội dung</b> tối đa 2 dòng.</li>\n  <li><b>Một dòng trống</b> ngăn cách các khối.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Lưu tệp ở mã <b>UTF-8</b> để tiếng Việt hiển thị đúng dấu. Tệp lưu sai mã hóa sẽ hiện ký tự lạ trên nhiều trình phát.</div></div>\n\n<h2>Quy tắc vàng cho phụ đề dễ đọc</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Khuyến nghị thường dùng</th></tr>\n  <tr><td>Độ dài dòng</td><td>Tối đa khoảng 42 ký tự</td></tr>\n  <tr><td>Số dòng mỗi khung</td><td>Tối đa 2 dòng</td></tr>\n  <tr><td>Thời gian hiển thị</td><td>Tối thiểu khoảng 1 giây, tối đa khoảng 7 giây</td></tr>\n  <tr><td>Khoảng cách giữa hai khung</td><td>Vài khung hình để mắt kịp nhận ra phụ đề mới</td></tr>\n  <tr><td>Tốc độ đọc</td><td>Không dồn quá nhiều chữ vào thời gian ngắn</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Video dọc trên TikTok, Reels có khung hẹp: nên rút ngắn dòng hơn nữa và đặt phụ đề tránh vùng nút bấm, chú thích ở cạnh dưới màn hình.</div></div>\n\n<h2>Ngắt câu thế nào cho tự nhiên?</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Ngắt sai</b>“Hôm nay chúng ta sẽ cùng/nhau tìm hiểu cách gõ” - tách “cùng nhau”, người xem phải đọc lại.</div>\n  <div class=\"good\"><b>Ngắt đúng</b>“Hôm nay chúng ta sẽ cùng nhau/tìm hiểu cách gõ 10 ngón” - ngắt theo cụm nghĩa, sau dấu phẩy hoặc trước liên từ.</div>\n</div>\n<ul>\n  <li>Không tách tính từ khỏi danh từ, động từ khỏi bổ ngữ, họ khỏi tên.</li>\n  <li>Dòng trên nên ngắn hơn hoặc bằng dòng dưới để mắt đọc thoải mái.</li>\n  <li>Mỗi khung là một ý trọn vẹn khi có thể.</li>\n</ul>\n\n<h2>Quy trình làm phụ đề</h2>\n<ol class=\"steps\">\n  <li><b>Chuyển âm</b> toàn bộ lời thoại thành văn bản chính xác (xem <a href=\"/blog/chuyen-am-phong-van-nghien-cuu\">chuyển âm phỏng vấn</a>).</li>\n  <li><b>Biên tập rút gọn</b>: lược từ đệm “à, ừm”, câu lặp - trừ khi cần phụ đề nguyên văn.</li>\n  <li><b>Chia khung</b> theo cụm nghĩa, đúng độ dài dòng.</li>\n  <li><b>Căn thời gian</b> (timing) khớp với lúc người nói bắt đầu và kết thúc.</li>\n  <li><b>Xem lại toàn bộ video</b> với phụ đề, sửa chỗ hiện quá nhanh, lệch tiếng.</li>\n</ol>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Phụ đề tự động thường sai tên riêng, thuật ngữ và dấu tiếng Việt. Với video bán hàng, đào tạo, phỏng vấn chuyên gia, một lỗi phụ đề có thể làm sai thông điệp và giảm uy tín thương hiệu.</div></div>\n\n<h2>Từ phụ đề tiếng Việt đến phụ đề đa ngôn ngữ</h2>\n<p>Tệp SRT tiếng Việt chuẩn là đầu vào lý tưởng để dịch sang tiếng Anh, tiếng Trung… Người dịch giữ nguyên mốc thời gian, chỉ thay nội dung, rồi điều chỉnh độ dài dòng cho phù hợp ngôn ngữ đích. Nhờ đó một video có thể có nhiều bản phụ đề mà không phải căn thời gian lại từ đầu.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>SRT gồm số thứ tự, mốc thời gian, nội dung và dòng trống; lưu UTF-8.</li><li>Tối đa khoảng 42 ký tự mỗi dòng, 2 dòng mỗi khung.</li><li>Ngắt dòng theo cụm nghĩa, không tách các từ đi liền nhau.</li><li>Phụ đề tự động chỉ là bản nháp - luôn biên tập lại.</li></ul></div>\n<p>Cần phụ đề chính xác cho video? Xem <a href=\"/dich-vu-chuyen-am\">dịch vụ chuyển âm và làm phụ đề SRT</a> của Đánh máy 247.</p>",
    "faq": [
      {
        "q": "Tệp SRT là gì?",
        "a": "SRT (SubRip Subtitle) là tệp văn bản thuần chứa phụ đề: mỗi khối gồm số thứ tự, mốc thời gian bắt đầu – kết thúc và nội dung lời thoại. Hầu hết nền tảng video và trình phát đều hỗ trợ định dạng này."
      },
      {
        "q": "Mỗi dòng phụ đề nên dài bao nhiêu ký tự?",
        "a": "Nhiều hướng dẫn phụ đề phổ biến khuyến nghị tối đa khoảng 42 ký tự mỗi dòng và không quá 2 dòng mỗi khung, để người xem kịp đọc mà không che quá nhiều hình."
      },
      {
        "q": "Phụ đề tự động của YouTube có dùng được không?",
        "a": "Dùng được làm bản nháp. Phụ đề tự động tiếng Việt thường sai dấu, sai tên riêng, thiếu dấu câu và ngắt câu chưa hợp lý, nên cần biên tập lại trước khi công bố."
      }
    ],
    "cover": "/assets/img/blog/lam-phu-de-srt-chuan.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "body": "\n<p class=\"lead\">Mỗi lần rời bàn phím để cầm chuột chỉ mất một hai giây, nhưng lặp lại hàng trăm lần mỗi ngày thì thành hàng chục phút. Các chuyên viên đánh máy gần như không dùng chuột khi soạn thảo. Dưới đây là 25 phím tắt Word họ dùng nhiều nhất, chia theo nhóm để dễ nhớ.</p>\n\n<h2>Định dạng chữ</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>B</kbd> · <kbd>Ctrl</kbd> + <kbd>I</kbd> · <kbd>Ctrl</kbd> + <kbd>U</kbd></td><td>Đậm · nghiêng · gạch chân</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>></kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd><</kbd></td><td>Tăng/giảm cỡ chữ</td></tr>\n  <tr><td><kbd>Shift</kbd> + <kbd>F3</kbd></td><td>Đổi kiểu chữ: thường → HOA → Hoa Đầu Từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>=</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>=</kbd></td><td>Chỉ số dưới (H₂O)/chỉ số trên (m²)</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Space</kbd></td><td>Xóa định dạng ký tự, trả về kiểu mặc định</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>C</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>V</kbd></td><td>Sao chép/dán định dạng (như cây cọ định dạng)</td></tr>\n</table></div>\n\n<h2>Đoạn văn và bố cục</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>L</kbd> · <kbd>Ctrl</kbd> + <kbd>E</kbd> · <kbd>Ctrl</kbd> + <kbd>R</kbd> · <kbd>Ctrl</kbd> + <kbd>J</kbd></td><td>Căn trái · giữa · phải · đều hai bên</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>Ctrl</kbd> + <kbd>5</kbd>/<kbd>Ctrl</kbd> + <kbd>2</kbd></td><td>Giãn dòng đơn/1,5/đôi</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> · <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> · <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd></td><td>Áp dụng Heading 1 · 2 · 3 (để tạo mục lục tự động)</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Q</kbd></td><td>Xóa định dạng đoạn văn</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Enter</kbd></td><td>Ngắt trang (không dùng Enter liên tục)</td></tr>\n  <tr><td><kbd>Shift</kbd> + <kbd>Enter</kbd></td><td>Xuống dòng nhưng vẫn cùng đoạn</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Hãy dùng <b>Heading</b> cho tiêu đề chương mục thay vì chỉ bôi đậm và tăng cỡ chữ. Bạn sẽ có mục lục tự động và khung điều hướng (Navigation Pane) chỉ với vài cú bấm.</div></div>\n\n<h2>Di chuyển và chọn nhanh</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Phím tắt</th><th>Tác dụng</th></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>←</kbd>/<kbd>Ctrl</kbd> + <kbd>→</kbd></td><td>Nhảy từng từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd></td><td>Chọn từng từ</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Home</kbd>/<kbd>Ctrl</kbd> + <kbd>End</kbd></td><td>Về đầu/cuối tài liệu</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>Backspace</kbd></td><td>Xóa cả từ phía trước</td></tr>\n  <tr><td><kbd>Ctrl</kbd> + <kbd>G</kbd></td><td>Đi tới trang, mục, bảng cụ thể</td></tr>\n</table></div>\n\n<h2>Những phím tắt “thần thánh”</h2>\n<ol class=\"steps\">\n  <li><kbd>F4</kbd>: <b>lặp lại thao tác vừa làm</b>. Vừa tô vàng một từ? Chọn từ khác và nhấn F4. Trên laptop có thể cần <kbd>Fn</kbd> + <kbd>F4</kbd>.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>H</kbd>: <b>Tìm và thay thế</b>, sửa hàng loạt lỗi chỉ trong một lần.</li>\n  <li><kbd>Alt</kbd> + <kbd>=</kbd>: <b>chèn phương trình</b> toán học.</li>\n  <li><kbd>F7</kbd>: <b>kiểm tra chính tả</b> toàn bộ tài liệu.</li>\n  <li><kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Ctrl</kbd> + <kbd>Y</kbd>: hoàn tác/làm lại.</li>\n</ol>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Phím tắt có thể khác đôi chút giữa các phiên bản Word và trên macOS (thay <kbd>Ctrl</kbd> bằng <kbd>⌘ Cmd</kbd>). Bảng trên áp dụng cho Word trên Windows.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Học theo nhóm: định dạng chữ, đoạn văn, di chuyển, rồi các phím đặc biệt.</li><li>F4 lặp lại thao tác là phím tiết kiệm thời gian nhất.</li><li>Dùng Heading để có mục lục tự động.</li><li>Ctrl + Enter để ngắt trang, không nhấn Enter liên tục.</li></ul></div>",
    "cover": "/assets/img/blog/phim-tat-word.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "so-hoa-vo-ghi-bai-giang",
    "cat": "Mẹo hay",
    "date": "2026-09-15",
    "tags": [
      "Số hóa",
      "Ghi chép",
      "Ôn thi",
      "Viết tay sang Word"
    ],
    "title": "Số hóa vở ghi bài giảng viết tay thành tài liệu ôn thi gọn gàng, dễ tìm kiếm",
    "seoTitle": "Số hóa vở ghi bài giảng viết tay thành tài liệu ôn thi",
    "excerpt": "Quy trình số hóa vở ghi bài giảng viết tay: chụp, sắp xếp theo chủ đề, đánh máy công thức, dựng đề cương và thẻ ôn tập.",
    "body": "<p class=\"lead\">Cuối học kỳ, nhiều sinh viên có trong tay vài cuốn vở ghi kín chữ: chữ viết vội, mũi tên chú thích, công thức chen ngang. Đến mùa thi, tìm lại một định lý hay một ví dụ mẫu mất cả buổi. Số hóa vở ghi biến những trang giấy đó thành tài liệu ôn thi có mục lục, tìm kiếm được và dễ in gọn.</p>\n\n<h2>Bước 1: Chụp đúng ngay từ đầu</h2>\n<ul>\n  <li>Dùng ứng dụng quét tài liệu trên điện thoại để tự cắt viền, làm phẳng trang và tăng tương phản.</li>\n  <li>Chụp theo thứ tự trang, đặt tên tệp theo môn và buổi học: <span class=\"mono\">GiaiTich_Buoi05_tr1.jpg</span>.</li>\n  <li>Đủ sáng, không bóng tay - xem <a href=\"/blog/meo-chup-tai-lieu-bang-dien-thoai\">7 mẹo chụp tài liệu</a>.</li>\n</ul>\n\n<h2>Bước 2: Sắp xếp theo chủ đề, không theo ngày</h2>\n<p>Vở ghi theo buổi học, nhưng đề thi theo chủ đề. Hãy lập dàn ý môn học (chương, mục) rồi xếp ảnh vào từng mục. Đây là lúc bạn nhìn lại toàn bộ môn học - một hình thức ôn tập hiệu quả.</p>\n\n<h2>Bước 3: Đánh máy phần cốt lõi</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Nội dung</th><th>Nên đánh máy?</th><th>Lý do</th></tr>\n  <tr><td>Định nghĩa, định lý</td><td class=\"ok\">Có</td><td>Cần chính xác từng chữ, hay ra thi</td></tr>\n  <tr><td>Công thức</td><td class=\"ok\">Có</td><td>Gõ bằng Equation để in rõ, tìm kiếm được</td></tr>\n  <tr><td>Ví dụ mẫu, bài giải</td><td class=\"ok\">Có</td><td>Dùng để luyện lại</td></tr>\n  <tr><td>Sơ đồ, hình vẽ</td><td>Tùy</td><td>Có thể giữ ảnh, vẽ lại nếu quan trọng</td></tr>\n  <tr><td>Ghi chú lan man</td><td class=\"no\">Không</td><td>Giữ ảnh là đủ</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Gõ công thức bằng Equation (<kbd>Alt</kbd> + <kbd>=</kbd>) ngay từ đầu - xem <a href=\"/blog/go-ma-tran-he-phuong-trinh-word\">gõ ma trận, hệ phương trình, tích phân</a>. Công thức dạng ảnh không tìm kiếm được và dễ mờ khi in.</div></div>\n\n<h2>Bước 4: Dựng đề cương ôn tập</h2>\n<ol class=\"steps\">\n  <li>Gán Heading cho chương, mục để có <a href=\"/blog/tao-muc-luc-tu-dong-word\">mục lục tự động</a>.</li>\n  <li>Đóng khung định nghĩa, tô màu công thức quan trọng một cách thống nhất.</li>\n  <li>Cuối mỗi chương thêm phần “Dạng bài thường gặp” và “Lỗi hay mắc”.</li>\n  <li>Xuất PDF để đọc trên điện thoại, in khổ A5 hai mặt để mang theo.</li>\n</ol>\n\n<h2>Bước 5: Tạo thẻ ôn tập (flashcard)</h2>\n<p>Từ đề cương, chuyển định nghĩa và công thức thành thẻ hỏi - đáp: mặt trước là câu hỏi “Điều kiện để hàm số liên tục tại một điểm?”, mặt sau là câu trả lời. Ôn bằng thẻ theo phương pháp lặp lại ngắt quãng giúp ghi nhớ lâu hơn đọc lại vở nhiều lần.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Vở ghi có thể chứa nội dung bài giảng thuộc quyền của giảng viên. Chia sẻ trong nhóm học tập thường không vấn đề, nhưng đừng đăng bán hay phát tán công khai khi chưa được phép.</div></div>\n\n<h2>Không có thời gian tự gõ?</h2>\n<p>Mùa thi, thời gian quý hơn bao giờ hết. Bạn có thể tự sắp xếp dàn ý và chụp ảnh, phần đánh máy công thức và định dạng giao cho dịch vụ <a href=\"/dich-vu/viet-tay-sang-word\">chuyển chữ viết tay sang Word</a> - nhận bản Word sạch đẹp để ôn tập. Nhiều tiệm photocopy gần trường cũng là <a href=\"/doi-tac\">đối tác của Đánh máy 247</a>, bạn có thể hỏi mã QR ngay tại quầy.</p>\n\n<h2>Gợi ý công cụ cho từng bước</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Bước</th><th>Công cụ gợi ý</th></tr>\n  <tr><td>Chụp và làm phẳng trang</td><td>Ứng dụng quét tài liệu trên điện thoại</td></tr>\n  <tr><td>Lưu trữ, đồng bộ</td><td>Thư mục đám mây chia theo môn học</td></tr>\n  <tr><td>Đánh máy, công thức</td><td>Word, Google Docs (Equation), LaTeX</td></tr>\n  <tr><td>Thẻ ôn tập</td><td>Ứng dụng flashcard có lặp lại ngắt quãng</td></tr>\n</table></div>\n<p>Không cần dùng nhiều công cụ: một thư mục đám mây sắp xếp tốt cùng một tệp Word có mục lục đã đủ để ôn thi hiệu quả.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chụp thẳng, đủ sáng, đặt tên tệp theo môn và buổi.</li><li>Sắp xếp theo chủ đề, không theo ngày học.</li><li>Đánh máy phần cốt lõi: định nghĩa, công thức, ví dụ mẫu.</li><li>Dựng đề cương có mục lục và tạo thẻ ôn tập.</li></ul></div>",
    "faq": [
      {
        "q": "Nên chụp hay scan vở ghi?",
        "a": "Điện thoại là đủ nếu chụp thẳng, đủ sáng và dùng ứng dụng quét tài liệu để tự cắt viền, làm phẳng trang. Máy scan phù hợp khi số trang rất nhiều."
      },
      {
        "q": "Có nên đánh máy toàn bộ vở ghi không?",
        "a": "Không nhất thiết. Hãy đánh máy phần cốt lõi: định nghĩa, công thức, ví dụ mẫu và phần thầy cô nhấn mạnh; phần còn lại có thể lưu dạng ảnh có mục lục."
      },
      {
        "q": "Chia sẻ vở ghi đã số hóa cho bạn bè có sao không?",
        "a": "Ghi chép của bạn có thể chứa nội dung bài giảng của giảng viên. Chia sẻ trong nhóm học tập thường được chấp nhận, nhưng không nên đăng bán hoặc phát tán công khai khi chưa được phép."
      }
    ],
    "cover": "/assets/img/blog/so-hoa-vo-ghi-bai-giang.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "go-tieng-trung-han-nhat",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-09-12",
    "tags": [
      "Tiếng Trung",
      "Tiếng Hàn",
      "Tiếng Nhật",
      "Bộ gõ"
    ],
    "title": "Gõ tiếng Trung, Hàn, Nhật trên Windows và điện thoại: cài bộ gõ, chọn phông và lỗi thường gặp",
    "seoTitle": "Gõ tiếng Trung, Hàn, Nhật trên Windows và điện thoại",
    "excerpt": "Cài bộ gõ tiếng Trung, Hàn, Nhật trên Windows và điện thoại, phân biệt giản thể - phồn thể, chọn phông và xử lý tài liệu song ngữ.",
    "body": "<p class=\"lead\">Hồ sơ du học Hàn Quốc, tài liệu kỹ thuật từ nhà máy Nhật Bản, hợp đồng với đối tác Trung Quốc - tài liệu song ngữ Việt - Trung, Việt - Hàn, Việt - Nhật ngày càng phổ biến. Gõ các ngôn ngữ này không khó nếu cài đúng bộ gõ và chọn phông phù hợp.</p>\n\n<h2>Thêm bộ gõ trên Windows</h2>\n<ol class=\"steps\">\n  <li>Mở <b>Cài đặt → Thời gian và ngôn ngữ → Ngôn ngữ và khu vực</b>.</li>\n  <li>Chọn <b>Thêm ngôn ngữ</b>: Tiếng Trung (giản thể hoặc phồn thể), Tiếng Hàn, Tiếng Nhật.</li>\n  <li>Chuyển bộ gõ bằng <kbd>Win</kbd> + <kbd>Space</kbd>.</li>\n</ol>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Ngôn ngữ</th><th>Bộ gõ phổ biến</th><th>Cách gõ</th></tr>\n  <tr><td>Tiếng Trung giản thể</td><td>Microsoft Pinyin</td><td>Gõ phiên âm Pinyin, chọn chữ trong danh sách</td></tr>\n  <tr><td>Tiếng Trung phồn thể</td><td>Bopomofo, Changjie, Pinyin phồn thể</td><td>Theo chú âm hoặc bộ thủ</td></tr>\n  <tr><td>Tiếng Hàn</td><td>Microsoft Korean IME</td><td>Bàn phím Hangul, ghép âm tiết tự động</td></tr>\n  <tr><td>Tiếng Nhật</td><td>Microsoft IME tiếng Nhật</td><td>Gõ romaji → kana → chuyển sang kanji bằng phím cách</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Khi làm tài liệu song ngữ, đặt phím tắt chuyển nhanh giữa bộ gõ tiếng Việt và bộ gõ ngoại ngữ. Nhớ tắt Unikey/EVKey khi gõ ngoại ngữ để tránh xung đột.</div></div>\n\n<h2>Trên điện thoại</h2>\n<p>Bàn phím phổ biến trên Android và iPhone đều cho phép thêm tiếng Trung, Hàn, Nhật trong phần cài đặt ngôn ngữ bàn phím; nhiều bàn phím hỗ trợ cả viết tay chữ Hán - tiện khi không biết phiên âm. Xem thêm <a href=\"/blog/go-tieng-viet-dien-thoai\">gõ tiếng Việt trên điện thoại</a>.</p>\n\n<h2>Giản thể hay phồn thể?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Giản thể</b>Trung Quốc đại lục, Singapore. Ví dụ: 学习 (học tập).</div>\n  <div class=\"good\"><b>Phồn thể</b>Đài Loan, Hồng Kông, Ma Cao. Ví dụ: 學習.</div>\n</div>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không tự chuyển đổi giản thể - phồn thể bằng công cụ tự động cho tài liệu chính thức: một số chữ có nhiều cách chuyển, và thuật ngữ giữa các vùng cũng khác nhau.</div></div>\n\n<h2>Phông chữ cho tài liệu đa ngôn ngữ</h2>\n<ul>\n  <li>Họ phông <b>Noto Sans CJK / Noto Serif CJK</b> hỗ trợ cả Trung, Nhật, Hàn, lại có tiếng Việt trong họ Noto.</li>\n  <li>Windows có sẵn phông cho từng ngôn ngữ, ví dụ Microsoft YaHei (Trung), Yu Gothic (Nhật), Malgun Gothic (Hàn).</li>\n  <li>Trong Word, đặt phông riêng cho chữ Đông Á: <b>Font → Asian text</b>, phần chữ Latin và tiếng Việt vẫn dùng phông chính.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Lưu tệp ở định dạng .docx hoặc PDF có nhúng phông. Gửi tệp .doc cũ hoặc văn bản thuần không rõ mã hóa là nguyên nhân thường gặp khiến chữ hiện thành ô vuông hoặc ký tự lạ.</div></div>\n\n<h2>Kiểm tra tài liệu song ngữ</h2>\n<ol class=\"steps\">\n  <li>Đối chiếu số trang, số mục giữa hai ngôn ngữ.</li>\n  <li>Tên riêng: thống nhất phiên âm hoặc giữ chữ gốc kèm phiên âm lần đầu.</li>\n  <li>Ngày tháng theo kiểu Đông Á thường là năm - tháng - ngày; ghi rõ khi chuyển sang tiếng Việt.</li>\n  <li>Trình bày song song theo <a href=\"/blog/trinh-bay-ban-dich-song-ngu\">bố cục song ngữ</a>.</li>\n</ol>\n\n<h2>Mẹo gõ nhanh với bộ gõ Đông Á</h2>\n<ul>\n  <li><b>Tiếng Trung</b>: gõ cả cụm từ bằng Pinyin (ví dụ “xuexi”) thay vì từng âm tiết - bộ gõ đoán đúng chữ nhanh hơn.</li>\n  <li><b>Tiếng Nhật</b>: gõ cả câu rồi mới chuyển kanji bằng phím cách; dùng phím mũi tên để chỉnh từng cụm nếu bộ gõ chuyển sai.</li>\n  <li><b>Tiếng Hàn</b>: nắm vị trí phụ âm bên trái, nguyên âm bên phải của bàn phím Hangul chuẩn là gõ khá nhanh.</li>\n  <li>Thêm từ chuyên ngành, tên riêng vào từ điển người dùng của bộ gõ để lần sau gợi ý đúng.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Khi đánh máy tài liệu tiếng Trung, Nhật từ bản scan mà không biết cách đọc chữ, có thể dùng chức năng viết tay của bàn phím điện thoại để tra từng chữ. Hãy đối chiếu kỹ các chữ có nét gần giống nhau.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Thêm ngôn ngữ trong Cài đặt, chuyển bộ gõ bằng Win + Space.</li><li>Hỏi rõ tài liệu dùng chữ giản thể hay phồn thể.</li><li>Dùng phông hỗ trợ CJK và tách phông Asian text trong Word.</li><li>Lưu .docx/PDF nhúng phông để tránh lỗi ô vuông.</li></ul></div>",
    "faq": [
      {
        "q": "Gõ tiếng Trung trên Windows bằng cách nào?",
        "a": "Vào Cài đặt → Thời gian và ngôn ngữ → Ngôn ngữ, thêm tiếng Trung. Bộ gõ Microsoft Pinyin cho phép gõ phiên âm Latin rồi chọn chữ Hán tương ứng."
      },
      {
        "q": "Chữ giản thể và phồn thể khác nhau thế nào?",
        "a": "Giản thể dùng phổ biến ở Trung Quốc đại lục, Singapore; phồn thể dùng ở Đài Loan, Hồng Kông, Ma Cao. Cần hỏi rõ tài liệu dùng hệ chữ nào trước khi gõ."
      },
      {
        "q": "Vì sao chữ Trung, Hàn, Nhật hiện thành ô vuông?",
        "a": "Máy hoặc phông chữ đang dùng không có ký tự đó. Hãy chọn phông hỗ trợ (ví dụ họ phông Noto Sans CJK) và lưu tệp ở mã Unicode."
      }
    ],
    "cover": "/assets/img/blog/go-tieng-trung-han-nhat.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "body": "<p class=\"lead\">Trong nghiên cứu định tính, bản chuyển âm phỏng vấn chính là dữ liệu gốc để phân tích. Chọn sai kiểu chuyển âm có thể khiến bạn mất nhiều thời gian xử lý lại.</p><h2>Nguyên văn (verbatim)</h2><p>Giữ lại mọi từ đệm, ngập ngừng, lặp từ, tiếng cười, khoảng lặng. Phù hợp với phân tích diễn ngôn, tâm lý học, ngôn ngữ học.</p><h2>Làm sạch (clean verbatim)</h2><p>Lược bỏ từ đệm và lỗi nói, giữ nguyên ý. Dễ đọc, phù hợp phần lớn đề tài xã hội học, kinh tế, giáo dục.</p><h2>Mốc thời gian</h2><p>Gắn [00:12:45] theo từng lượt nói giúp bạn nhanh chóng nghe lại đoạn cần trích dẫn - rất hữu ích khi viết báo cáo.</p><h2>Đạo đức nghiên cứu</h2><p>Hãy đảm bảo đơn vị chuyển âm cam kết bảo mật (NDA) và có thể ẩn danh tên người tham gia theo yêu cầu. Đánh máy 247 hỗ trợ cả hai.</p>",
    "cover": "/assets/img/blog/chuyen-am-phong-van-nghien-cuu.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 3
  },
  {
    "slug": "so-sach-hoa-don-sang-excel",
    "cat": "Mẹo hay",
    "date": "2026-09-09",
    "tags": [
      "Sổ sách",
      "Kế toán",
      "Excel",
      "Hộ kinh doanh"
    ],
    "title": "Số hóa sổ sách, chứng từ giấy sang Excel cho hộ kinh doanh và kế toán nhỏ: mẫu bảng và cách đối chiếu",
    "seoTitle": "Số hóa sổ sách, chứng từ giấy sang Excel cho hộ kinh doanh",
    "excerpt": "Số hóa sổ thu chi, phiếu nhập xuất kho, chứng từ giấy sang Excel: mẫu bảng, quy tắc nhập liệu, đối chiếu số dư và lưu chứng từ scan.",
    "body": "<p class=\"lead\">Nhiều hộ kinh doanh, cửa hàng nhỏ vẫn ghi sổ thu chi bằng tay, phiếu nhập kho để trong hộp giấy. Đến kỳ đối chiếu, cần tìm một khoản chi tháng trước là mất cả buổi. Đưa sổ sách sang Excel giúp tra cứu tức thì, tự cộng tổng và phát hiện chênh lệch - nếu bảng được thiết kế đúng ngay từ đầu.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bài viết hướng dẫn kỹ thuật nhập liệu. Mẫu sổ và nghĩa vụ kế toán, thuế cụ thể cần theo quy định hiện hành áp dụng cho loại hình kinh doanh của bạn; hãy hỏi kế toán hoặc cơ quan thuế khi cần.</div></div>\n\n<h2>Thiết kế bảng thu chi</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Cột</th><th>Kiểu dữ liệu</th><th>Ghi chú</th></tr>\n  <tr><td>Ngày</td><td>Ngày (dd/mm/yyyy)</td><td>Một định dạng duy nhất</td></tr>\n  <tr><td>Số chứng từ</td><td>Văn bản</td><td>Giữ số 0 đầu, không trùng</td></tr>\n  <tr><td>Diễn giải</td><td>Văn bản</td><td>Ngắn gọn, nhất quán</td></tr>\n  <tr><td>Nhóm</td><td>Danh sách thả xuống</td><td>Nguyên liệu, tiền điện, lương…</td></tr>\n  <tr><td>Thu / Chi</td><td>Số</td><td>Hai cột riêng, không nhập chữ “đ”</td></tr>\n  <tr><td>Số dư</td><td>Công thức</td><td>Số dư trước + Thu − Chi</td></tr>\n  <tr><td>Tệp chứng từ</td><td>Văn bản/liên kết</td><td>Tên tệp scan tương ứng</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Dùng <b>Data Validation</b> cho cột Nhóm để chọn từ danh sách - tránh “tiền điện”, “Tiền Điện”, “điện” bị coi là ba nhóm khác nhau khi tổng hợp. Xem thêm <a href=\"/blog/nhap-lieu-excel-chinh-xac\">10 nguyên tắc nhập liệu Excel</a>.</div></div>\n\n<h2>Quy trình số hóa theo tháng</h2>\n<ol class=\"steps\">\n  <li><b>Sắp xếp chứng từ</b> theo ngày, đánh số nếu chưa có.</li>\n  <li><b>Scan hoặc chụp</b> từng chứng từ, đặt tên theo số chứng từ: <span class=\"mono\">2026-09_PC015.pdf</span>.</li>\n  <li><b>Nhập liệu</b> vào bảng, mỗi chứng từ một dòng.</li>\n  <li><b>Đối chiếu</b> tổng thu, tổng chi, số dư cuối tháng với sổ gốc.</li>\n  <li><b>Khóa tháng</b>: lưu bản sao, không sửa trực tiếp dữ liệu tháng đã đối chiếu.</li>\n</ol>\n\n<h2>Các bước kiểm tra sai sót</h2>\n<ul>\n  <li><b>Trùng chứng từ</b>: tô màu giá trị trùng ở cột số chứng từ.</li>\n  <li><b>Số âm bất thường</b>: lọc số dư âm để tìm chỗ nhập nhầm cột Thu - Chi.</li>\n  <li><b>Đối chiếu ngân hàng</b>: so khoản chuyển khoản với sao kê.</li>\n  <li><b>Tổng hợp theo nhóm</b> bằng PivotTable để phát hiện khoản chi tăng đột biến.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Sổ viết tay hay có chữ số dễ nhầm (1 - 7, 4 - 9, 0 - 6). Khi nhập từ bản gốc khó đọc, hãy đánh dấu ô nghi vấn và đối chiếu lại với chứng từ, đừng đoán.</div></div>\n\n<h2>Phiếu nhập - xuất kho</h2>\n<p>Tạo bảng riêng: ngày, số phiếu, mã hàng, tên hàng, đơn vị tính, số lượng nhập, số lượng xuất, đơn giá. Dùng mã hàng thống nhất thay vì gõ tên tự do - một mặt hàng có nhiều cách gọi sẽ làm sai tồn kho. Tồn kho cuối kỳ có thể tính bằng hàm SUMIF theo mã hàng.</p>\n\n<h2>Lưu trữ an toàn</h2>\n<p>Giữ tệp Excel và thư mục chứng từ scan trên ổ đám mây có phân quyền, sao lưu định kỳ. Thông tin khách hàng, nhà cung cấp, lương nhân viên cần được bảo vệ - xem <a href=\"/blog/bao-ve-du-lieu-ca-nhan-so-hoa\">lưu ý về dữ liệu cá nhân</a>.</p>\n\n<h2>Báo cáo nhanh sau khi số hóa</h2>\n<p>Khi dữ liệu đã nằm gọn trong bảng, bạn có thể lập báo cáo trong vài phút: PivotTable tổng hợp thu chi theo tháng và theo nhóm, biểu đồ cột so sánh các tháng, bộ lọc tìm nhanh mọi khoản chi cho một nhà cung cấp. Đây là lợi ích lớn nhất của việc số hóa - thay vì lật sổ, bạn có số liệu để ra quyết định kinh doanh.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Thiết kế bảng phẳng: mỗi cột một loại dữ liệu, mỗi dòng một chứng từ.</li><li>Đặt tên tệp scan trùng số chứng từ để tra cứu nhanh.</li><li>Đối chiếu tổng, số dư, sao kê ngân hàng mỗi tháng.</li><li>Giữ chứng từ gốc theo quy định; bản số hóa chỉ để tra cứu.</li></ul></div>\n<p>Có hàng trăm trang sổ sách viết tay? Dịch vụ <a href=\"/dich-vu/word-sang-excel\">nhập liệu sang Excel</a> kiểm tra chéo số liệu trước khi bàn giao.</p>",
    "faq": [
      {
        "q": "Hộ kinh doanh nên lập sổ Excel gồm những cột nào?",
        "a": "Tối thiểu gồm ngày, số chứng từ, diễn giải, đối tượng, số tiền thu, số tiền chi, số dư và ghi chú. Mẫu sổ cụ thể nên theo hướng dẫn kế toán áp dụng cho loại hình kinh doanh của bạn."
      },
      {
        "q": "Làm sao phát hiện sai sót khi nhập sổ sách?",
        "a": "Đối chiếu tổng thu, tổng chi, số dư cuối kỳ với sổ gốc; kiểm tra trùng số chứng từ; so số dư tiền gửi với sao kê ngân hàng."
      },
      {
        "q": "Có cần giữ bản giấy sau khi số hóa không?",
        "a": "Có. Chứng từ kế toán phải được lưu trữ theo thời hạn quy định; bản số hóa giúp tra cứu nhanh nhưng không tự động thay thế nghĩa vụ lưu trữ chứng từ gốc."
      }
    ],
    "cover": "/assets/img/blog/so-sach-hoa-don-sang-excel.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
  },
  {
    "slug": "chuan-bi-ban-thao-sach",
    "cat": "Kiến thức",
    "date": "2026-09-05",
    "tags": [
      "Bản thảo",
      "Xuất bản",
      "Dàn trang",
      "Biên tập"
    ],
    "title": "Chuẩn bị bản thảo sách để in: từ đánh máy, biên tập đến dàn trang đúng quy trình",
    "seoTitle": "Chuẩn bị bản thảo sách để in: đánh máy, biên tập, dàn trang",
    "excerpt": "Quy trình chuẩn bị bản thảo sách để in: đánh máy bản gốc, biên tập, hiệu đính, dàn trang, đọc bông - tránh sửa đi sửa lại tốn kém.",
    "body": "<p class=\"lead\">Một cuốn hồi ký của ông bà, tập thơ tích lũy nhiều năm, giáo trình chuyên ngành - nhiều bản thảo bắt đầu từ những cuốn sổ viết tay hoặc hàng chục tệp Word rời rạc. Để thành một cuốn sách in đẹp, bản thảo cần đi qua một quy trình rõ ràng. Bỏ qua bước nào cũng có thể khiến bạn phải sửa đi sửa lại tốn kém.</p>\n<figure><img src=\"/assets/img/blog/fig-ban-thao-sach.svg\" alt=\"Quy trình chuẩn bị bản thảo sách từ đánh máy đến in\" loading=\"lazy\" width=\"960\"><figcaption>Đánh máy bản gốc → biên tập nội dung → hiệu đính → dàn trang → đọc bông → in.</figcaption></figure>\n\n<h2>Bước 1: Đánh máy và gom bản thảo</h2>\n<ul>\n  <li>Đánh máy bản viết tay giữ nguyên văn, đánh dấu chữ khó đọc để tác giả xác nhận - xem <a href=\"/blog/so-hoa-gia-pha-hoi-ky\">số hóa gia phả, hồi ký</a>.</li>\n  <li>Gom các tệp rời thành một cấu trúc: mỗi chương một tệp hoặc một tệp duy nhất có tiêu đề chương.</li>\n  <li>Dùng kiểu Heading cho tên phần, chương, mục; không định dạng bằng tay.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Đánh số phiên bản tệp rõ ràng: <span class=\"mono\">HoiKy_v03_bientap.docx</span>. Bản thảo qua nhiều người sửa rất dễ lẫn bản cũ - bản mới.</div></div>\n\n<h2>Bước 2: Biên tập nội dung</h2>\n<p>Biên tập viên đọc toàn bộ để thống nhất cấu trúc, mạch kể, cách xưng hô, mốc thời gian, tên riêng. Với hồi ký, đây là lúc kiểm tra ngày tháng, địa danh, tên người; với sách chuyên môn, kiểm tra thuật ngữ, số liệu, nguồn trích dẫn.</p>\n\n<h2>Bước 3: Hiệu đính chính tả và văn phong</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Hạng mục</th><th>Ví dụ cần thống nhất</th></tr>\n  <tr><td>Chính tả</td><td>Cách viết “i” hay “y” (kĩ thuật/kỹ thuật) theo một chuẩn</td></tr>\n  <tr><td>Viết hoa</td><td>Tên cơ quan, chức danh, địa danh</td></tr>\n  <tr><td>Số</td><td>Viết bằng chữ hay số; dấu phân cách hàng nghìn</td></tr>\n  <tr><td>Dấu câu</td><td>Ngoặc kép “ ” hay \" \"; gạch ngang trong lời thoại</td></tr>\n  <tr><td>Chú thích</td><td>Chú thích chân trang hay cuối chương</td></tr>\n</table></div>\n\n<h2>Bước 4: Dàn trang</h2>\n<ul>\n  <li>Chọn khổ sách (ví dụ 14,5 × 20,5 cm, 16 × 24 cm), lề trong rộng hơn lề ngoài để không mất chữ ở gáy.</li>\n  <li>Phông chữ dễ đọc có đủ dấu tiếng Việt, cỡ phù hợp khổ sách; giãn dòng đều.</li>\n  <li>Đầu trang/chân trang: tên sách, tên chương, số trang; trang đầu chương không cần đầu trang.</li>\n  <li>Ảnh có độ phân giải phù hợp in ấn (thường từ 300 dpi ở kích thước in).</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Dàn trang chuyên nghiệp thường dùng phần mềm dàn trang hoặc LaTeX; Word vẫn làm được với sách đơn giản nếu dùng Styles, Section Break và mục lục tự động.</div></div>\n\n<h2>Bước 5: Đọc bông</h2>\n<p>Đọc trên bản PDF đã dàn trang hoặc bản in thử: lỗi chính tả còn sót, chữ “mồ côi” đầu trang, ngắt dòng xấu, ảnh lệch, mục lục sai số trang. Đánh dấu sửa rõ ràng bằng ghi chú trên PDF để người dàn trang sửa đúng chỗ.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Không sửa nội dung lớn ở bước đọc bông - thêm bớt cả đoạn sẽ làm xô lệch toàn bộ số trang phía sau. Nội dung nên chốt ở bước biên tập.</div></div>\n\n<h2>Bước 6: In và phát hành</h2>\n<p>Làm việc với nhà xuất bản hoặc cơ sở in có giấy phép, hỏi rõ yêu cầu về tệp (PDF in, phông nhúng, khoảng chừa xén), giấy, bìa và số lượng. Tùy mục đích phát hành, thủ tục áp dụng có thể khác nhau - hãy tìm hiểu quy định hiện hành trước khi in.</p>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Đánh máy giữ nguyên văn, gom bản thảo theo cấu trúc chương.</li><li>Biên tập nội dung trước, hiệu đính chính tả sau.</li><li>Dàn trang theo khổ sách, lề gáy rộng hơn, ảnh đủ độ phân giải.</li><li>Đọc bông kỹ, không sửa nội dung lớn ở bước cuối.</li></ul></div>\n<p>Cần đánh máy bản thảo viết tay, gom tệp và trình bày? Xem dịch vụ <a href=\"/dich-vu/danh-may-ban-thao\">đánh máy bản thảo</a> và <a href=\"/dich-vu/bien-tap-tai-lieu\">biên tập, hiệu đính</a>.</p>",
    "faq": [
      {
        "q": "Bản thảo nộp cho nhà xuất bản nên ở định dạng nào?",
        "a": "Thường là tệp Word sạch: một tệp hoặc mỗi chương một tệp, dùng kiểu tiêu đề thống nhất, không dàn trang cầu kỳ. Hãy hỏi yêu cầu cụ thể của nhà xuất bản hoặc đơn vị liên kết."
      },
      {
        "q": "Đọc bông là gì?",
        "a": "Là bước đọc và sửa trên bản đã dàn trang (bản in thử hoặc PDF) trước khi in chính thức, nhằm phát hiện lỗi chính tả, lỗi dàn trang, ngắt dòng, đánh số trang, chú thích."
      },
      {
        "q": "Tự in sách để tặng có cần thủ tục gì không?",
        "a": "Tùy mục đích và hình thức phát hành mà áp dụng quy định khác nhau về xuất bản và in. Hãy tìm hiểu quy định hiện hành hoặc làm việc với nhà xuất bản, cơ sở in có giấy phép."
      }
    ],
    "cover": "/assets/img/blog/chuan-bi-ban-thao-sach.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "chon-ban-phim-danh-may",
    "cat": "Kỹ năng gõ phím",
    "date": "2026-09-02",
    "tags": [
      "Bàn phím",
      "Bàn phím cơ",
      "Công thái học",
      "Gõ phím"
    ],
    "title": "Chọn bàn phím cho người đánh máy nhiều: bàn phím cơ, switch, công thái học và bố cục",
    "seoTitle": "Chọn bàn phím cho người đánh máy nhiều: cơ, công thái học",
    "excerpt": "Chọn bàn phím cho người gõ nhiều: bàn phím màng hay cơ, switch linear - tactile - clicky, bố cục, bàn phím công thái học, tư thế gõ.",
    "body": "<p class=\"lead\">Với người đánh máy chuyên nghiệp, thư ký, lập trình viên hay sinh viên làm luận văn, bàn phím là công cụ dùng nhiều giờ mỗi ngày. Một bàn phím phù hợp không biến bạn thành người gõ nhanh nhất, nhưng giúp gõ chính xác hơn, ít mỏi hơn và bền bỉ hơn. Dưới đây là những tiêu chí cần cân nhắc.</p>\n\n<h2>Bàn phím màng hay bàn phím cơ?</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Tiêu chí</th><th>Bàn phím màng / cắt kéo</th><th>Bàn phím cơ</th></tr>\n  <tr><td>Cảm giác gõ</td><td>Nông, êm</td><td>Hành trình rõ, nhiều lựa chọn</td></tr>\n  <tr><td>Độ ồn</td><td>Thường yên tĩnh</td><td>Tùy switch, từ êm đến khá ồn</td></tr>\n  <tr><td>Độ bền, thay thế</td><td>Khó sửa từng phím</td><td>Thay keycap, switch được (tùy mẫu)</td></tr>\n  <tr><td>Giá</td><td>Dễ tiếp cận</td><td>Dải giá rộng</td></tr>\n  <tr><td>Mang theo</td><td>Mỏng nhẹ</td><td>Thường dày, nặng hơn</td></tr>\n</table></div>\n\n<h2>Các nhóm switch phổ biến</h2>\n<ul>\n  <li><b>Linear</b>: nhấn trơn từ trên xuống, không có điểm khựng - êm, hợp gõ nhanh.</li>\n  <li><b>Tactile</b>: có điểm khựng nhẹ báo phím đã nhận - giúp bớt nhấn quá sâu.</li>\n  <li><b>Clicky</b>: có điểm khựng và tiếng tách rõ - vui tai nhưng dễ làm phiền người xung quanh.</li>\n</ul>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Lực nhấn nhẹ vừa phải giúp đỡ mỏi ngón khi gõ hàng nghìn từ mỗi ngày. Nếu có thể, hãy thử gõ một đoạn văn tiếng Việt có dấu trên mẫu bàn phím trước khi mua.</div></div>\n\n<h2>Bố cục: full-size, TKL hay 75%?</h2>\n<div class=\"compare-grid\">\n  <div class=\"good\"><b>Full-size (có cụm phím số)</b>Hợp người nhập liệu Excel, kế toán - cụm phím số giúp gõ số nhanh. Xem <a href=\"/blog/nhap-lieu-excel-chinh-xac\">mẹo nhập liệu Excel</a>.</div>\n  <div class=\"good\"><b>TKL, 75% (gọn)</b>Chuột gần tay hơn, vai thoải mái hơn; hợp người gõ văn bản là chính. Có thể dùng thêm bàn phím số rời khi cần.</div>\n</div>\n\n<h2>Bàn phím công thái học</h2>\n<p>Thiết kế chia đôi, cong hoặc nghiêng giúp cổ tay giữ tư thế tự nhiên, vai mở rộng hơn. Đây là lựa chọn đáng cân nhắc nếu bạn gõ nhiều giờ và hay mỏi. Tuy nhiên cần vài tuần để làm quen, và nên kết hợp với kỹ thuật gõ 10 ngón đúng - xem <a href=\"/blog/go-10-ngon-30-ngay\">gõ 10 ngón trong 30 ngày</a>.</p>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Bố cục phím tiếng Việt không khác bố cục tiếng Anh: bạn gõ dấu bằng Telex hoặc VNI qua bộ gõ, nên bàn phím bố cục Mỹ thông dụng là phù hợp.</div></div>\n\n<h2>Tư thế quan trọng hơn bàn phím</h2>\n<ul>\n  <li>Bàn phím ngang tầm khuỷu tay, khuỷu tay khoảng 90°.</li>\n  <li>Cổ tay thẳng, không gập lên; dùng kê tay khi nghỉ, không tì khi đang gõ.</li>\n  <li>Nghỉ ngắn sau mỗi 30-60 phút, giãn cơ ngón tay, cổ tay.</li>\n</ul>\n<p>Xem chi tiết tại <a href=\"/blog/tu-the-ngoi-go-phim\">tư thế ngồi gõ phím đúng</a>.</p>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Nếu đau, tê tay kéo dài khi gõ phím, hãy đi khám để được tư vấn. Đổi bàn phím không thay thế được việc điều trị và điều chỉnh thói quen làm việc.</div></div>\n\n<h2>Chuột và phụ kiện đi kèm</h2>\n<p>Người đánh máy nhiều cũng dùng chuột liên tục để chọn chữ, định dạng. Chuột vừa tay, đặt sát bàn phím giúp vai không phải với xa. Lót chuột - kê tay mềm, độ cao bàn ghế phù hợp, màn hình ngang tầm mắt là những khoản đầu tư nhỏ nhưng giảm mỏi đáng kể. Nếu làm việc trên laptop cả ngày, hãy cân nhắc bàn phím rời và giá đỡ để màn hình cao hơn.</p>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Kết hợp bàn phím tốt với phím tắt Word, Excel giúp giảm thao tác chuột rất nhiều - xem <a href=\"/blog/phim-tat-word\">phím tắt Word hữu ích</a>.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Bàn phím cơ giúp phản hồi rõ, nhưng kỹ thuật gõ mới quyết định tốc độ.</li><li>Văn phòng nên chọn switch êm; nhập số nhiều nên có cụm phím số.</li><li>Bàn phím công thái học hợp người gõ nhiều giờ, cần thời gian làm quen.</li><li>Tư thế và thời gian nghỉ quan trọng hơn mọi thiết bị.</li></ul></div>",
    "faq": [
      {
        "q": "Bàn phím cơ có giúp gõ nhanh hơn không?",
        "a": "Không tự động làm bạn gõ nhanh hơn, nhưng phản hồi phím rõ ràng có thể giúp gõ chính xác, ít bấm thừa và thoải mái hơn khi gõ lâu. Kỹ thuật gõ 10 ngón vẫn là yếu tố quyết định."
      },
      {
        "q": "Switch nào hợp với văn phòng?",
        "a": "Switch linear hoặc tactile nhẹ, ít ồn thường hợp văn phòng hơn switch clicky có tiếng tách lớn. Nên thử trực tiếp nếu có thể."
      },
      {
        "q": "Bàn phím công thái học dành cho ai?",
        "a": "Phù hợp người gõ nhiều giờ mỗi ngày, hay mỏi vai, cổ tay. Thiết kế chia đôi hoặc cong giúp cổ tay thẳng hơn nhưng cần thời gian làm quen."
      }
    ],
    "cover": "/assets/img/blog/chon-ban-phim-danh-may.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
    "slug": "podcast-video-thanh-bai-viet",
    "cat": "Chuyển âm",
    "date": "2026-08-28",
    "tags": [
      "Podcast",
      "Video",
      "Chuyển âm",
      "Content marketing"
    ],
    "title": "Biến podcast, video thành bài viết chuẩn SEO: quy trình chuyển âm và biên tập nội dung",
    "seoTitle": "Biến podcast, video thành bài viết chuẩn SEO",
    "excerpt": "Biến podcast, video thành bài viết chuẩn SEO: chuyển âm, làm sạch văn nói, dựng dàn ý, tối ưu tiêu đề và tái sử dụng nội dung.",
    "body": "<p class=\"lead\">Bạn đầu tư làm một tập podcast, một video phỏng vấn chuyên gia - nội dung giá trị nhưng chỉ sống trên một nền tảng. Chuyển nội dung đó thành bài viết giúp tiếp cận người thích đọc, xuất hiện trên công cụ tìm kiếm và tái sử dụng cho bản tin, mạng xã hội. Điều quan trọng: bài viết tốt không phải bản chép lời dán lên web.</p>\n<figure><img src=\"/assets/img/blog/fig-podcast-bai-viet.svg\" alt=\"Quy trình biến podcast, video thành bài viết\" loading=\"lazy\" width=\"960\"><figcaption>Ghi âm/video → chuyển âm có mốc thời gian → làm sạch → dựng dàn ý → viết bài, tối ưu SEO → phân phối.</figcaption></figure>\n\n<h2>Bước 1: Chuyển âm chính xác</h2>\n<ul>\n  <li>Bản chép lời có <b>tên người nói</b> và <b>mốc thời gian</b> để dễ trích dẫn, đối chiếu.</li>\n  <li>Tên riêng, thương hiệu, số liệu cần chính xác - phần máy hay nghe sai nhất.</li>\n  <li>Đánh dấu đoạn không rõ để người làm nội dung nghe lại.</li>\n</ul>\n<div class=\"callout callout--info\"><span class=\"callout__ic\">i</span><div>Nghe thử mẫu chuyển âm phỏng vấn, họp nhóm và video ra phụ đề tại trang <a href=\"/mau\">Bài mẫu</a>.</div></div>\n\n<h2>Bước 2: Làm sạch văn nói</h2>\n<div class=\"compare-grid\">\n  <div class=\"bad\"><b>Văn nói nguyên văn</b>“Thì là… ừm, cái này em nghĩ là, kiểu như, mình phải nhìn vào cái số liệu ấy, số liệu tháng trước ấy, thì mới biết được.”</div>\n  <div class=\"good\"><b>Đã làm sạch</b>“Theo tôi, cần nhìn vào số liệu tháng trước mới đánh giá được.”</div>\n</div>\n<p>Giữ ý và giọng của người nói, lược từ đệm, câu lặp, đoạn chào hỏi. Với trích dẫn trực tiếp đặt trong ngoặc kép, chỉ chỉnh tối thiểu để không làm sai ý.</p>\n\n<h2>Bước 3: Dựng dàn ý</h2>\n<ol class=\"steps\">\n  <li>Đọc bản chép lời, đánh dấu các ý chính, ví dụ hay, con số đáng chú ý.</li>\n  <li>Sắp xếp theo logic người đọc (vấn đề → giải pháp → ví dụ), không nhất thiết theo thứ tự lúc nói.</li>\n  <li>Mỗi ý chính thành một tiêu đề H2; trích dẫn hay đặt thành khối nổi bật.</li>\n</ol>\n\n<h2>Bước 4: Viết bài và tối ưu SEO</h2>\n<div class=\"table-wrap\"><table class=\"tbl\">\n  <tr><th>Yếu tố</th><th>Gợi ý</th></tr>\n  <tr><td>Tiêu đề</td><td>Chứa từ khóa chính, rõ lợi ích, khoảng dưới 60 ký tự</td></tr>\n  <tr><td>Mô tả</td><td>Tóm tắt giá trị bài viết trong khoảng 150-160 ký tự</td></tr>\n  <tr><td>Tiêu đề phụ</td><td>Mỗi H2 trả lời một câu hỏi người đọc quan tâm</td></tr>\n  <tr><td>Nội dung</td><td>Đoạn ngắn, có danh sách, bảng, ví dụ cụ thể</td></tr>\n  <tr><td>Liên kết</td><td>Nhúng tập podcast/video gốc, liên kết bài liên quan</td></tr>\n</table></div>\n<div class=\"callout callout--tip\"><span class=\"callout__ic\">✓</span><div>Cuối bài thêm mục “Câu hỏi thường gặp” từ những câu khán giả hỏi trong tập - vừa hữu ích cho người đọc, vừa giúp bài viết bao phủ nhiều cách tìm kiếm.</div></div>\n\n<h2>Bước 5: Tái sử dụng nội dung</h2>\n<ul>\n  <li><b>Bản tin email</b>: tóm tắt 3-5 ý chính kèm liên kết.</li>\n  <li><b>Mạng xã hội</b>: trích dẫn ngắn, số liệu, đoạn video ngắn có phụ đề - xem <a href=\"/blog/lam-phu-de-srt-chuan\">làm phụ đề SRT</a>.</li>\n  <li><b>Tài liệu nội bộ</b>: bản chép lời đầy đủ cho đội ngũ tra cứu.</li>\n</ul>\n<div class=\"callout callout--warn\"><span class=\"callout__ic\">!</span><div>Hãy có sự đồng ý của khách mời về việc dùng nội dung cho bài viết, mạng xã hội. Kiểm tra lại số liệu, nhận định chuyên môn trước khi đăng - lời nói trong phỏng vấn đôi khi chưa chính xác tuyệt đối.</div></div>\n<div class=\"takeaways\"><b class=\"t\">Điểm chính cần nhớ</b><ul><li>Chuyển âm có người nói, mốc thời gian; soát kỹ tên riêng, số liệu.</li><li>Làm sạch văn nói nhưng giữ ý và giọng người nói.</li><li>Dựng dàn ý theo logic người đọc, mỗi ý một H2.</li><li>Tối ưu tiêu đề, mô tả, FAQ; tái sử dụng cho email, mạng xã hội.</li></ul></div>\n<p>Có nhiều tập podcast, video cần chép lời? Xem <a href=\"/dich-vu-chuyen-am\">dịch vụ chuyển âm</a> của Đánh máy 247.</p>",
    "faq": [
      {
        "q": "Đăng nguyên bản chép lời podcast lên web có tốt cho SEO không?",
        "a": "Bản chép lời giúp công cụ tìm kiếm hiểu nội dung, nhưng văn nói nguyên văn thường dài, lặp và khó đọc. Biên tập thành bài viết có cấu trúc rõ ràng thường mang lại trải nghiệm đọc tốt hơn."
      },
      {
        "q": "Một tập podcast 30 phút thành được bao nhiêu chữ?",
        "a": "Tùy tốc độ nói, bản chép lời 30 phút thường dài vài nghìn chữ. Sau khi biên tập thành bài viết, độ dài thường ngắn lại đáng kể vì lược bỏ phần lặp, chào hỏi, ngập ngừng."
      },
      {
        "q": "Có cần xin phép khách mời khi chuyển nội dung thành bài viết?",
        "a": "Nên thông báo và có sự đồng ý của khách mời về việc sử dụng nội dung ở các định dạng khác, đặc biệt khi trích dẫn nguyên văn hoặc dùng cho mục đích thương mại."
      }
    ],
    "cover": "/assets/img/blog/podcast-video-thanh-bai-viet.svg",
    "author": "Ban biên tập Đánh máy 247",
    "read": 4
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
