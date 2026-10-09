# Sổ quản lý website Mr Black NBK

Cập nhật: 09/10/2026

## Địa chỉ và nơi lưu
- **Website:** https://mrblackmath.github.io
- **Mã nguồn:** GitHub, tài khoản `mrblackmath`, repo `mrblackmath.github.io`, nhánh `main`.
  - Repo có tên `<tên>.github.io` nên GitHub tự bật trang web.
- **Tên miền dự kiến:** mrblackmath.vn (chưa mua). Khi mua chỉ cần trỏ DNS, không phải làm lại web.
- **Cách cập nhật:** Claude đẩy thẳng lên GitHub (GitHub đã kết nối, ứng dụng Claude đã cài cho repo, ngày 09/10/2026). Thầy không cần tải file thủ công nữa.
- **Không còn bản nào trên Claude.** Đã xóa 5 bản cũ ngày 09/10/2026. GitHub là nơi duy nhất, là bản chuẩn.

## Cấu trúc repo
```
index.html              Trang chủ: menu lớp → chương → bài, 4 ô học liệu, khung hướng dẫn học trên điện thoại
icon.png, icon-192.png, icon-512.png, manifest.webmanifest   Biểu tượng khi "Thêm vào màn hình chính"
.nojekyll, README.md
hoc-lieu/               Phiếu PDF (được phép tải về)
bai-hoc/                Các trang bài học (chỉ xem trực tuyến)
```

## Quy ước đặt tên file
- `bai-hoc/toan<lớp>-bai<số>-bai-giang.html`
- `bai-hoc/toan<lớp>-bai<số>-luyen-tap.html`
- `bai-hoc/toan<lớp>-bai<số>-kiem-tra.html`
- `hoc-lieu/toan<lớp>-bai<số>-phieu-tu-luyen.pdf`

Trong `index.html`, khối `LINKS` khai báo đường dẫn cho từng bài, khóa dạng `lop<lớp>-bai<số>`. Ô nào để trống thì hiện "Sắp ra mắt".

## Quy tắc của thầy
- Bản mới nhất luôn là bản chuẩn. Không giữ bản cũ.
- Chỉ phiếu PDF được tải về. Bài giảng, luyện tập, kiểm tra chỉ xem trên web.
- Học sinh không cần đăng ký, không cần tài khoản.
- Mục lục bám SGK Kết nối tri thức. HSA bổ sung sau.

## Các bài đã có
| Bài | Bài giảng | Luyện tập | Phiếu PDF | Kiểm tra |
|---|---|---|---|---|
| Toán 6 – Bài 16. Phép nhân số nguyên | ✅ | ✅ | ✅ | ✅ |
| Toán 12 – Bài 6. Vectơ trong không gian | — | ✅ (app 33 câu) | — | — |

## Lớp sửa chung đã áp dụng cho mọi trang bài học (áp dụng tiếp cho bài mới)
- Bản dành cho học sinh: ẩn nút "Giáo viên", ẩn "Làm lại từ đầu" của GV.
- iPhone: xin phiên âm thanh `playback` (dùng `navigator.audioSession`) kèm âm thanh rỗng giữ phiên, để vẫn nghe được khi máy đang ở chế độ im lặng.
- Nút toàn màn hình: iPhone không hỗ trợ nên hiện hướng dẫn "Ẩn thanh công cụ / Thêm vào MH chính".
- Khi mở như ứng dụng (standalone): có nút ⌂ về trang chủ; bài học mở ngay trong ứng dụng.
- Đường dẫn chéo giữa các phần dùng tên file tương đối, không dùng link claude.ai.

## Quy trình thêm một bài mới
1. Thầy gửi các file mới nhất của bài.
2. Claude kiểm tra nội dung và áp lớp sửa chung.
3. Claude đặt tên file theo quy ước, cập nhật `LINKS` trong `index.html` và chụp slide 1 làm ảnh xem trước.
4. Claude thử trên khổ máy tính, điện thoại dọc và điện thoại ngang.
5. Claude đóng gói `CapNhat-N.zip`.
6. Thầy tải lên GitHub.
7. Claude kiểm tra web thật và báo cáo.

## Việc còn chờ
- Chụp lại ảnh xem trước bài giảng Bài 16 (ảnh cũ còn nút "GIÁO VIÊN").
- Bài giảng, phiếu PDF, kiểm tra của Bài 6 – Toán 12.
  - Trên Claude có artifact "Bài 6 · Vectơ trong không gian" cập nhật 09/10/2026, chưa gắn vào web.
- Bổ sung HSA.
- Mua và gắn tên miền mrblackmath.vn.

## Nhật ký
- 09/10/2026: Chuyển website sang GitHub Pages.
  - Đưa 4 trang bài học sang GitHub, bỏ hẳn phụ thuộc Claude, nên học sinh không còn bị bắt đăng nhập.
  - Sửa lỗi mất tiếng trên iPhone. Thêm hướng dẫn toàn màn hình và chế độ mở như ứng dụng.
  - Thêm khung "Học trên điện thoại".
  - Xóa 5 bản cũ trên Claude.
- 09/10/2026: Làm video intro "bản chạy thử – mời góp ý" (dọc 9:16 cho TikTok, ngang 16:9 cho YouTube, 43 giây, 60 fps).
  - YouTube: đã đăng bản ngang.
  - TikTok: bài đầu bị chặn nhầm ("Spam"), có thể do link web trong mô tả; đã khiếu nại. Lần sau KHÔNG để link trong mô tả TikTok, chỉ để ở trang cá nhân.
