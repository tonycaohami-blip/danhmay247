# Đánh máy 247 - Sản phẩm của VietSCI Editing Services

Website dịch vụ đánh máy, chuyển âm và định dạng tài liệu, chạy bằng **Node.js** (Express). Máy chủ nhận đơn thật: lưu đơn hàng và tệp khách gửi, gửi email, đối soát chuyển khoản HDBank tự động, có trang quản trị.

## Cấu trúc

```
DanhMay247/
├── server.js            # Khởi động: website (URL sạch, gzip, ETag) + API /api
├── server/
│   ├── config.js        # Đọc biến môi trường / .env
│   ├── api.js           # API: đơn hàng, tệp, đăng nhập, tin nhắn, liên hệ, đánh giá, webhook, quản trị
│   ├── store.js         # Lưu dữ liệu JSON (ghi nguyên tử) trong DATA_DIR
│   ├── mailer.js        # Mẫu email tiếng Việt + gửi qua SMTP
│   ├── security.js      # Phiên đăng nhập ký HMAC, chống spam, chống CSRF
│   └── shared.js        # Dùng chung bảng giá với public/assets/js/data.js
├── public/              # Giao diện website (chỉ thư mục này được phục vụ ra ngoài)
├── test/e2e.js          # Kiểm thử tự động: npm test
└── .env.example         # Mẫu cấu hình
```

## Luồng hoạt động

1. **Khách đặt hàng** (`/dat-hang`): form + tệp (≤ 6 tệp, mỗi tệp ≤ 50MB) gửi lên máy chủ. **Máy chủ tự tính giá**, không tin giá trình duyệt gửi lên. Khách nhận email xác nhận kèm thông tin chuyển khoản và liên kết bí mật để theo dõi đơn. Quản trị nhận email "Đơn mới".
2. **Thanh toán**: khách quét mã VietQR (HDBank 3995588999, số tiền và nội dung = mã đơn điền sẵn) bằng app ngân hàng, MoMo hoặc ZaloPay.
   - Nếu bật **SePay**, ngân hàng báo tiền về → đơn tự chuyển sang "Đã thanh toán", khách nhận email và trang của khách tự cập nhật.
   - Nếu không bật, khách bấm "Tôi đã chuyển khoản" → quản trị nhận email "Cần đối soát" → kiểm tra app HDBank → bấm "Xác nhận đã nhận tiền" ở `/quan-tri`.
3. **Thực hiện**: quản trị đổi trạng thái, nhắn tin với khách (khách nhận email), tải tệp khách gửi, **gửi tệp hoàn thành** → khách nhận email và tải tệp tại trang đơn hàng.
4. **Khách đăng nhập** (`/tai-khoan`) bằng **liên kết gửi qua email**, không cần mật khẩu, để xem tất cả đơn. Không đăng nhập vẫn xem được các đơn đặt trên cùng thiết bị hoặc qua liên kết trong email.
5. Tệp được **tự xóa 30 ngày** sau khi đơn hoàn thành hoặc bị hủy, đúng như Chính sách bảo mật.

## Chạy trên máy

Cần **Node.js 20 trở lên**.

```bash
npm install
cp .env.example .env     # rồi điền ADMIN_PASSWORD, SMTP_PASS…
npm start                # http://localhost:3000
npm test                 # chạy 26 kiểm thử tự động
```

## Cấu hình (biến môi trường)

Xem `.env.example`. Trên Hostinger, khai báo trong hPanel → Node.js app → **Environment variables**.

| Biến | Bắt buộc | Ý nghĩa |
|---|---|---|
| `ADMIN_PASSWORD` | ✅ | Mật khẩu vào `/quan-tri`. Để trống thì trang quản trị bị khóa. |
| `SITE_URL` | ✅ | Ví dụ `https://danhmay247.com`, dùng cho liên kết trong email |
| `NODE_ENV` | ✅ | `production` (bật cookie Secure khi chạy HTTPS) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | ✅ | Để gửi email. Gmail: `smtp.gmail.com`, `465`, `trungtamdanhmay247@gmail.com` và **mật khẩu ứng dụng** |
| `ADMIN_EMAIL` | | Email nhận thông báo (mặc định trungtamdanhmay247@gmail.com) |
| `SEPAY_API_KEY` | | Bật đối soát chuyển khoản tự động |
| `DATA_DIR` | ⚠️ | Thư mục lưu đơn hàng và tệp. **Nên đặt ngoài thư mục code** |
| `SESSION_SECRET` | | Để trống thì tự tạo và lưu trong DATA_DIR |

### Gửi email bằng Gmail

1. Đăng nhập trungtamdanhmay247@gmail.com, bật **Xác minh 2 bước**.
2. Vào https://myaccount.google.com/apppasswords, tạo mật khẩu ứng dụng tên "Danh may 247".
3. Dán 16 ký tự (bỏ dấu cách) vào `SMTP_PASS`.

Gmail giới hạn khoảng 500 email/ngày. Nếu cần nhiều hơn, dùng email tên miền của Hostinger (`smtp.hostinger.com`, cổng 465).

### Đối soát chuyển khoản tự động (SePay)

1. Đăng ký https://sepay.vn và liên kết tài khoản **HDBank 3995588999**.
2. Vào Tích hợp **Webhooks** → Thêm webhook:
   - URL: `https://<ten-mien>/api/webhooks/sepay`
   - Sự kiện: **Có tiền vào**
   - Kiểu chứng thực: **API Key**. Đặt một chuỗi bí mật dài, dán chuỗi đó vào biến `SEPAY_API_KEY`.
3. Chuyển thử một khoản nhỏ với nội dung là mã một đơn test (ví dụ `DM123456`), rồi xem tab **Giao dịch ngân hàng** trong `/quan-tri`.

Máy chủ nhận mã đơn `DMxxxxxx` trong nội dung chuyển khoản, **cộng dồn** nếu khách chuyển nhiều lần và chỉ xác nhận khi đủ tiền. Mỗi giao dịch chỉ được tính một lần.

## Đưa lên GitHub

```bash
git init && git add . && git commit -m "Website Đánh máy 247"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

`.env`, `data/` và `node_modules/` đã được loại trừ trong `.gitignore`. **Không đưa mật khẩu lên GitHub.**

## Deploy lên Hostinger

**Gói Business / Cloud (Node.js Web App):**

1. hPanel → Websites → **Node.js Apps** → **Import Git repository**, chọn repo, nhánh `main`.
2. Node version **20** hoặc **22**. Build command để trống. Start: `npm start` (entry `server.js`).
3. Thêm các biến môi trường ở bảng trên.
4. **Quan trọng: `DATA_DIR`.** Đặt một thư mục **ngoài thư mục ứng dụng**, ví dụ `/home/<user>/danhmay247-data`. Hãy tạo trước bằng File Manager. Nếu để mặc định, dữ liệu nằm trong thư mục code và **có thể bị mất khi deploy lại**.
5. Deploy, gắn tên miền, bật SSL. Sau đó vào `/quan-tri` để đăng nhập.

**VPS:**

```bash
git clone https://github.com/<tai-khoan>/<ten-repo>.git danhmay247 && cd danhmay247
npm install --omit=dev
cp .env.example .env && nano .env
npm install -g pm2 && pm2 start server.js --name danhmay247 && pm2 save && pm2 startup
```

Rồi cấu hình Nginx reverse proxy tới `127.0.0.1:3000` (thêm `client_max_body_size 300m;` để nhận tệp lớn) và cài SSL bằng Certbot.

## Sao lưu

Toàn bộ dữ liệu nằm trong `DATA_DIR` (`db.json` + thư mục `uploads/`). Hãy sao lưu thư mục này định kỳ, ví dụ tải về hằng tuần qua File Manager hoặc dùng cron trên VPS.

## Chỉnh sửa nội dung

- `public/assets/js/data.js`: giá, mã giảm giá, liên hệ, tài khoản ngân hàng, dịch vụ, FAQ, blog. Máy chủ dùng chung tệp này để tính giá, **cần khởi động lại** sau khi đổi giá.
- `public/assets/css/style.css`: giao diện.

## Giới hạn còn lại

- Lưu trữ JSON phù hợp quy mô nhỏ–vừa (vài chục nghìn đơn). Khi lớn hơn nên chuyển sang MySQL (Hostinger có sẵn).
- Đánh giá và số liệu mẫu trên trang (trang Giới thiệu, "9.8/10", điểm Google/Facebook) cần thay bằng thông tin thật.
