# Đánh máy 247 - Sản phẩm của VietSCI Editing Services

Website dịch vụ đánh máy, chuyển âm và định dạng tài liệu, chạy bằng **Node.js**. Máy chủ nhận đơn hàng thật, lưu đơn và tệp khách gửi, gửi email, xác nhận chuyển khoản HDBank, có trang quản trị.

## Đơn hàng được lưu ở đâu?

**Không cần cài đặt gì.** Mọi đơn hàng tự động lưu vào thư mục `danhmay247-data` trong thư mục gốc của tài khoản hosting, ví dụ `/home/u123456789/danhmay247-data/` trên Hostinger:

```
danhmay247-data/
├── db.json        ← toàn bộ đơn hàng, khách hàng, tin nhắn, liên hệ, đánh giá
├── uploads/       ← tệp khách gửi và tệp bạn bàn giao (mỗi đơn một thư mục)
└── backups/       ← bản sao lưu tự động mỗi ngày (giữ 30 ngày gần nhất)
```

- Thư mục này nằm **ngoài thư mục code**, nên deploy lại từ GitHub **không làm mất đơn**.
- Đơn mới được ghi xuống đĩa **ngay lập tức**.
- Trong `/quan-tri` có nút **"Tải danh sách đơn (Excel)"** để tải toàn bộ đơn về máy bất cứ lúc nào.
- Nên thỉnh thoảng tải thư mục `danhmay247-data` về máy qua **File Manager** của hPanel để có thêm một bản dự phòng.

> Tùy chọn nâng cao: nếu sau này muốn dùng MySQL, chỉ cần khai báo `DB_HOST`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`. Bảng sẽ tự được tạo và dữ liệu cũ trong `db.json` tự được chuyển sang. Không khai báo thì website dùng lưu trữ tệp như trên.

## Deploy lên Hostinger (chỉ 3 bước)

1. hPanel → **Websites** → **Node.js Apps** → **Import Git repository** → chọn repo `danhmay247`, nhánh `main`. Chọn Node **20** hoặc **22**, để trống Build command, Start command `npm start`.
2. Mục **Environment variables**, thêm:
   - `ADMIN_PASSWORD`: mật khẩu vào trang quản trị (bắt buộc)
   - `SMTP_PASS`: mật khẩu ứng dụng Gmail của trungtamdanhmay247@gmail.com (để gửi email, xem bên dưới)
   - `SMTP_HOST` = `smtp.gmail.com`, `SMTP_PORT` = `465`, `SMTP_USER` = `trungtamdanhmay247@gmail.com`
3. Bấm **Deploy**, gắn tên miền `danhmay247.com` và bật SSL.

Xong. Kiểm tra bằng cách đặt thử một đơn rồi vào `https://danhmay247.com/quan-tri`.

Mỗi lần sửa code: `git add . && git commit -m "..." && git push`, rồi bấm **Redeploy** trên Hostinger.

### Tạo mật khẩu ứng dụng Gmail

1. Đăng nhập **trungtamdanhmay247@gmail.com** → https://myaccount.google.com/signinoptions/two-step-verification → bật **Xác minh 2 bước**.
2. Mở https://myaccount.google.com/apppasswords → tên ứng dụng `Danh may 247` → **Tạo**.
3. Sao chép 16 ký tự, **bỏ dấu cách**, dán vào biến `SMTP_PASS` trên Hostinger.

Chưa có `SMTP_PASS` thì website vẫn nhận và lưu đơn bình thường, chỉ là không gửi được email.

## Luồng đơn hàng

1. Khách đặt hàng tại `/dat-hang`, có thể gửi kèm tối đa 6 tệp. Máy chủ tự tính giá và lưu đơn. Khách nhận email xác nhận, bạn nhận email "Có đơn hàng mới".
2. Khách quét mã VietQR (HDBank 3995588999, số tiền và nội dung là mã đơn, đã điền sẵn) rồi bấm "Tôi đã chuyển khoản". Bạn kiểm tra app HDBank và bấm **"Xác nhận đã nhận tiền"** trong `/quan-tri`.
   - Muốn tự động xác nhận: đăng ký https://sepay.vn, liên kết tài khoản HDBank, tạo webhook `https://danhmay247.com/api/webhooks/sepay` kiểu **API Key**, rồi đặt cùng khóa đó vào biến `SEPAY_API_KEY`.
3. Trong `/quan-tri`: đổi trạng thái, nhắn tin với khách, tải tệp khách gửi, **gửi tệp hoàn thành** (khách nhận email và tải về).
4. Khách xem đơn tại `/tai-khoan`, qua liên kết trong email hoặc đăng nhập bằng email.
5. Tệp tự xóa 30 ngày sau khi đơn hoàn thành hoặc hủy, đúng như Chính sách bảo mật.

## Giao đơn cho nhân viên

1. **Tạo tài khoản:** `/quan-tri` → tab **Nhân viên** → nhập họ tên, tên đăng nhập (vd `lan.nv`), email (để nhận thông báo giao việc) và mật khẩu ban đầu. Gửi cho nhân viên địa chỉ `https://danhmay247.com/nhan-vien` cùng tên đăng nhập và mật khẩu.
2. **Giao đơn:** mở đơn → ô **Giao cho nhân viên** → chọn người → **Giao đơn**. Nhân viên nhận email (nếu đã cấu hình SMTP và có email).
3. **Nhân viên làm việc** tại `/nhan-vien`: xem đơn được giao, tải tài liệu gốc, bấm **Bắt đầu làm**, tải tệp kết quả lên, ghi chú cho quản trị, rồi bấm **Gửi quản trị kiểm tra**.
4. **Quản trị duyệt:** đơn hiện nút **Kiểm tra**. Tải tệp của nhân viên về xem, rồi bấm **Duyệt & hoàn thành đơn** (khách nhận email và tải được tệp) hoặc nhắn lại nhân viên trong khung trao đổi nội bộ.

**Nhân viên KHÔNG thấy:** tên, email, số điện thoại của khách; giá, mã giảm giá, số tiền đã trả; tin nhắn giữa khách và quản trị; ghi chú riêng của quản trị. **Khách KHÔNG thấy:** nhân viên phụ trách, trao đổi nội bộ, tệp nhân viên chưa được duyệt.

Lưu ý: nếu khách tự ghi thông tin cá nhân vào phần hướng dẫn hoặc tên tệp, nhân viên vẫn đọc được phần đó.

Nhân viên chỉ thấy đơn được giao cho mình, không tự hoàn thành đơn được. Khi khóa tài khoản hoặc đặt lại mật khẩu, nhân viên bị đăng xuất ngay.

## Chương trình đối tác (affiliate) - hoa hồng 30%

Dành cho cửa hàng photocopy, văn phòng phẩm, giáo viên, cộng tác viên… giới thiệu khách cần đánh máy.

- **Trang đăng ký riêng:** `/dang-ky-doi-tac` (có trong sitemap).
- **Trang giới thiệu (SEO):** `/doi-tac` - lợi ích, cách hoạt động, máy tính thu nhập, câu hỏi thường gặp (có dữ liệu FAQPage), form đăng ký. Có trong menu, chân trang và sitemap.
- **Trang đối tác:** `/doi-tac-tai-khoan` - mã giới thiệu, liên kết, **mã QR**, nút **in poster A4**, tin nhắn mẫu gửi khách, lượt bấm, đơn giới thiệu, hoa hồng (chờ / đã duyệt / đã chi trả), lịch sử chi trả, thông tin ngân hàng, đổi mật khẩu, chuông thông báo.
- **Ghi nhận khách:** khách quét QR / bấm `https://danhmay247.com/?ref=MÃ` → trình duyệt nhớ 30 ngày (lần bấm gần nhất được tính), ô "Mã giới thiệu" ở trang đặt hàng tự điền. Khách cũng có thể tự nhập mã. Quản trị có thể gắn mã cho đơn khách quên nhập (trong cửa sổ quản lý đơn).
- **Hoa hồng:** 30% giá trị đơn, chỉ được duyệt khi đơn **hoàn thành**; đơn hủy không tính; không tính khi đối tác tự đặt (trùng email hoặc số điện thoại).
- **Quản trị:** tab **Đối tác** - duyệt / khóa đối tác (đối tác nhận email khi được duyệt), đổi tỷ lệ riêng, xem đơn theo đối tác, nút **Chi trả** (chuyển khoản xong rồi bấm xác nhận, đối tác nhận email). Tệp Excel xuất đơn có thêm cột mã giới thiệu và hoa hồng.
- **Quyền riêng tư:** đối tác chỉ thấy mã đơn, dịch vụ, giá trị và hoa hồng - không thấy tên, email, số điện thoại của khách.
- **Cấu hình:** `public/assets/js/data.js` → `DM.affiliate = { rate: 0.3, cookieDays: 30, minPayout: 100000, payoutDay: 5 }`.

## Khung chat "Hỗ trợ Đánh máy 247"

- Bộ tri thức `public/assets/js/chat-kb.js` (chỉ tải khi khách mở chat): khoảng 30 chủ đề chuyên sâu - hướng dẫn đặt hàng từng bước, bảng giá, thời hạn, thanh toán VietQR, theo dõi đơn, tệp gửi/nhận, chỉnh sửa, hoàn tiền, bảo mật, công thức Toán - Lý - Hóa, LaTeX, chuyển âm, phụ đề, Excel, định dạng luận văn, dịch thuật, mã giảm giá, doanh nghiệp, đối tác…
- **Báo giá ngay trong chat:** khách gõ "giá 20 trang viết tay 3 ngày" hoặc "45 phút ghi âm 2 người" → tính theo đúng bảng giá trong `data.js`, kèm nút đặt hàng với cấu hình đó.
- Mỗi câu trả lời có nút gợi ý câu hỏi tiếp theo; thanh chủ đề nhanh phía dưới. Giá, thời hạn, tài khoản ngân hàng luôn đọc từ `data.js` nên tự cập nhật.

## Mẫu chuyển âm có tiếng (trang /mau)

- 4 mẫu: phỏng vấn nghiên cứu, họp nhóm 3 người → biên bản, bài giảng Vật lý có công thức, video → phụ đề SRT. Nhân vật, nội dung là giả định.
- Bấm phát: đọc bằng **giọng tiếng Việt có sẵn trên thiết bị** của người xem (Microsoft Edge, iPhone, Android…), mỗi người nói một giọng, câu đang đọc được tô sáng. Thiết bị không có giọng tiếng Việt thì phát mô phỏng.
- Muốn dùng **tệp ghi âm thật**: đặt MP3 vào `public/assets/audio/`, thêm `audio: "/assets/audio/ten-tep.mp3"` cho mẫu trong `DM.audioSamples` (data.js) và `t` (giây bắt đầu) cho từng câu - trình phát tự dùng tệp và tô sáng theo thời gian.

## Thông báo (biểu tượng chuông)

Trang quản trị, trang nhân viên và trang khách hàng có **chuông thông báo** ở góc trên bên phải, kèm số chưa đọc, số trên tiêu đề tab, thông báo nổi và âm báo (bật/tắt được). Có thể bấm **"Bật thông báo trên máy tính"** để nhận thông báo cả khi đang mở tab khác. Bấm vào một thông báo để mở thẳng đơn hàng đó.

| Ai | Được báo khi |
|---|---|
| Quản trị (`/quan-tri`, kiểm tra mỗi 15 giây) | Có đơn mới; khách bấm "Tôi đã chuyển khoản"; tiền về tự động qua SePay; khách nhắn tin hoặc tự hủy đơn; nhân viên ghi chú, tải tệp, gửi kiểm tra; có liên hệ mới, đánh giá chờ duyệt |
| Nhân viên (`/nhan-vien`, mỗi 20 giây) | Được giao đơn; quản trị nhắn trong trao đổi nội bộ; quản trị duyệt / thu hồi tệp; đơn được thanh toán, hoàn thành hoặc bị hủy. Không chứa thông tin khách hay giá |
| Khách hàng (`/tai-khoan`, mỗi 25 giây) | Mọi tin từ Đánh máy 247: xác nhận thanh toán, đổi trạng thái, gửi tệp hoàn thành, trả lời tin nhắn. Không thấy trao đổi nội bộ hay tên nhân viên |

Thông báo được tổng hợp từ dữ liệu đơn hàng, không cần cấu hình thêm. Trạng thái "đã đọc" được nhớ trên từng trình duyệt. Email vẫn được gửi như trước (nếu đã cấu hình SMTP).

## SEO (đã cài sẵn trong code)

- **Bài viết và trang dịch vụ được máy chủ dựng sẵn HTML** (`server/seo.js`): Google, Cốc Cốc, Bing, Facebook, Zalo đọc được tiêu đề, mô tả, nội dung mà không cần chạy JavaScript.
- **Đường dẫn đẹp:** `/blog/<slug>`, `/dich-vu/<slug>`. Đường dẫn cũ `/bai-viet?slug=…`, `/dich-vu?slug=…` tự chuyển hướng 301.
- **Mọi trang công khai** có `canonical`, Open Graph, Twitter card với ảnh PNG 1200×630 (`public/assets/img/og/`).
- **Dữ liệu có cấu trúc (JSON-LD):** Organization + WebSite (trang chủ), BlogPosting + BreadcrumbList (bài viết), Service (dịch vụ), FAQPage (hỏi đáp). Không gắn điểm đánh giá vì các đánh giá mẫu chưa phải đánh giá thật.
- **`/sitemap.xml`** tự sinh: 12 trang công khai + mọi trang dịch vụ + mọi bài viết (kèm ngày cập nhật và ảnh). Thêm bài vào `posts.js` là sitemap tự có, không cần sửa tay.
- **IndexNow** (`server/indexnow.js`): sau mỗi lần Redeploy khoảng 90 giây, máy chủ tự báo các URL mới hoặc vừa cập nhật cho Bing và các công cụ hỗ trợ IndexNow (tệp khóa `public/26c6ca444b5c59134efd40581c369de2.txt`). Xem log Hostinger dòng `[IndexNow]`. Tắt bằng biến `INDEXNOW=0`.

**Khi thêm bài viết mới:** thêm vào `posts.js` → `node scripts/make-blog-images.js` (ảnh bìa) → `npm install --no-save @resvg/resvg-js && node scripts/make-og-images.js` (ảnh chia sẻ PNG) → commit, push, Redeploy.

**Việc cần làm trên công cụ bên ngoài:** khai báo website và gửi `https://danhmay247.com/sitemap.xml` trong Google Search Console, Cốc Cốc Webmaster, Bing Webmaster Tools; kiểm tra ảnh xem trước khi chia sẻ bằng Facebook Sharing Debugger (developers.facebook.com/tools/debug).

## Bảo mật

Đã có sẵn trong code:

- **Đăng nhập:** phiên lưu trong cookie ký số HMAC (`HttpOnly`, `SameSite=Lax`, `Secure` khi chạy HTTPS). Đổi `ADMIN_PASSWORD` là mọi phiên quản trị cũ hết hiệu lực. Mật khẩu nhân viên băm bằng scrypt; đổi mật khẩu hoặc khóa tài khoản là nhân viên bị đăng xuất ngay.
- **Chống dò mật khẩu và spam:** giới hạn số lần thử theo IP cho đăng nhập quản trị/nhân viên, đặt hàng, tin nhắn, liên hệ, đánh giá.
- **Chống CSRF:** mọi yêu cầu thay đổi dữ liệu phải đến từ chính website (kiểm tra Origin/Referer).
- **Header bảo mật:** Content-Security-Policy (chỉ cho chạy mã của website, Google Fonts, ảnh VietQR; cấm nhúng trang vào website lạ), HSTS khi chạy HTTPS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy, ẩn phiên bản máy chủ.
- **Tệp tải lên:** chặn tệp chạy được (.exe, .js, .html, .svg…), lưu ngoài thư mục website với tên ngẫu nhiên, chỉ tải được khi có quyền, luôn tải về dạng tệp đính kèm trong "hộp cát", tự xóa sau 30 ngày.
- **Phân quyền:** khách chỉ xem đơn của mình (đăng nhập hoặc mã truy cập riêng của đơn); nhân viên chỉ thấy đơn được giao, không thấy thông tin khách và giá; webhook SePay cần khóa API.
- **Dữ liệu:** mã truy cập đơn lưu dạng băm; tệp CSV xuất ra chặn công thức Excel độc hại; nội dung người dùng nhập luôn được mã hóa trước khi hiển thị (chống XSS).

Việc bạn nên làm trên Hostinger: đặt `ADMIN_PASSWORD` **tối thiểu 12 ký tự** (máy chủ sẽ cảnh báo trong log nếu ngắn hơn), bật SSL cho tên miền, đặt thêm `NODE_ENV=production`, không chia sẻ mật khẩu quản trị qua tin nhắn, và định kỳ tải bản sao thư mục `danhmay247-data` về máy.

## Chạy trên máy

Cần Node.js 20 trở lên.

```bash
npm install
npm start      # http://localhost:3000
npm test       # 163 kiểm thử tự động (dùng thư mục tạm, không đụng dữ liệu thật)
```

Khi chạy trên máy, tạo tệp `.env` từ `.env.example` và đặt `ADMIN_PASSWORD` để vào được trang quản trị.

## Chỉnh sửa nội dung

- `public/assets/js/data.js`: giá, mã giảm giá, số điện thoại, email, tài khoản ngân hàng, dịch vụ, câu hỏi thường gặp.
- `public/assets/js/posts.js`: **bài viết blog** (55 bài). Mỗi bài gồm tiêu đề, chuyên mục, ngày, thẻ, tóm tắt và nội dung HTML; tùy chọn `seoTitle` (thẻ title ngắn gọn cho Google) và `faq` (mục Câu hỏi thường gặp + dữ liệu FAQPage). Có sẵn các khối trình bày: `<p class="lead">` (đoạn mở đầu), hộp `callout--tip / --warn / --info`, `<figure>`, bảng `class="tbl"`, danh sách bước `class="steps"`, phím `<kbd>`, khung `takeaways` (điểm chính). Mục lục được tạo tự động từ các tiêu đề `<h2>`.
- Ảnh bìa và hình minh họa blog: `public/assets/img/blog/*.svg`, tạo lại bằng `node scripts/make-blog-images.js`. Bài mới cần thêm ảnh bìa trùng tên với `slug`.
- `https://danhmay247.com/sitemap.xml` tự cập nhật theo danh sách bài viết; hãy khai báo địa chỉ này trong Google Search Console. Sau khi đổi giá cần **Redeploy** để máy chủ tính theo giá mới.
- `public/assets/css/style.css`: giao diện.
- Đánh giá mẫu và số liệu trên trang (trang Giới thiệu, "9.8/10") là nội dung minh họa, nên thay bằng thông tin thật.

## Cấu trúc mã nguồn

```
server.js                  Khởi động website + API + sitemap.xml
server/seo.js              SEO: dựng sẵn bài viết/dịch vụ, canonical, Open Graph, JSON-LD
scripts/make-og-images.js  Tạo ảnh chia sẻ PNG cho Facebook/Zalo
scripts/make-blog-images.js  Tạo ảnh bìa / hình minh họa SVG cho blog
server/affiliate.js        Chương trình đối tác: đăng ký, mã giới thiệu, QR, hoa hồng, chi trả
server/api.js              API: đơn hàng, tệp, tài khoản, tin nhắn, liên hệ, đánh giá, webhook, quản trị, nhân viên, xuất Excel
server/db.js               Chọn nơi lưu: tệp (mặc định) hoặc MySQL
server/store-json.js       Lưu trữ tệp db.json + sao lưu hằng ngày
server/store-mysql.js      Lưu trữ MySQL (tùy chọn)
server/mailer.js           Mẫu email tiếng Việt
server/security.js         Phiên đăng nhập, chống spam, chống CSRF
server/config.js           Đọc cấu hình
public/                    Giao diện website
test/e2e.js                Kiểm thử tự động
```
