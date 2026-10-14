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
   - `SMTP_PASS`: mật khẩu ứng dụng Gmail của vietsciediting@gmail.com (để gửi email, xem bên dưới)
   - `SMTP_HOST` = `smtp.gmail.com`, `SMTP_PORT` = `465`, `SMTP_USER` = `vietsciediting@gmail.com`
3. Bấm **Deploy**, gắn tên miền `danhmay247.com` và bật SSL.

Xong. Kiểm tra bằng cách đặt thử một đơn rồi vào `https://danhmay247.com/quan-tri`.

Mỗi lần sửa code: `git add . && git commit -m "..." && git push`, rồi bấm **Redeploy** trên Hostinger.

### Tạo mật khẩu ứng dụng Gmail

1. Đăng nhập **vietsciediting@gmail.com** → https://myaccount.google.com/signinoptions/two-step-verification → bật **Xác minh 2 bước**.
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

## Chạy trên máy

Cần Node.js 20 trở lên.

```bash
npm install
npm start      # http://localhost:3000
npm test       # 51 kiểm thử tự động (dùng thư mục tạm, không đụng dữ liệu thật)
```

Khi chạy trên máy, tạo tệp `.env` từ `.env.example` và đặt `ADMIN_PASSWORD` để vào được trang quản trị.

## Chỉnh sửa nội dung

- `public/assets/js/data.js`: giá, mã giảm giá, số điện thoại, email, tài khoản ngân hàng, dịch vụ, câu hỏi thường gặp, blog. Sau khi đổi giá cần **Redeploy** để máy chủ tính theo giá mới.
- `public/assets/css/style.css`: giao diện.
- Đánh giá mẫu và số liệu trên trang (trang Giới thiệu, "9.8/10") là nội dung minh họa, nên thay bằng thông tin thật.

## Cấu trúc mã nguồn

```
server.js                  Khởi động website + API
server/api.js              API: đơn hàng, tệp, tài khoản, tin nhắn, liên hệ, đánh giá, webhook, quản trị, xuất Excel
server/db.js               Chọn nơi lưu: tệp (mặc định) hoặc MySQL
server/store-json.js       Lưu trữ tệp db.json + sao lưu hằng ngày
server/store-mysql.js      Lưu trữ MySQL (tùy chọn)
server/mailer.js           Mẫu email tiếng Việt
server/security.js         Phiên đăng nhập, chống spam, chống CSRF
server/config.js           Đọc cấu hình
public/                    Giao diện website
test/e2e.js                Kiểm thử tự động
```
