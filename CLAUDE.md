# Sổ quản lý website Mr Black NBK

Cập nhật: 09/10/2026 (tối)

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
- Bài giảng chưa gắn lời giảng: thêm `chuaGiong: true` vào bài đó trong `LINKS`. Trang chủ sẽ ghi "Lời giảng của thầy đang được bổ sung" thay cho "Có giọng thầy giảng" (nguyên tắc: trang chủ phải ghi đúng tình trạng thật).

## Quy tắc của thầy
- Bản mới nhất luôn là bản chuẩn. Không giữ bản cũ.
- Chỉ phiếu PDF được tải về. Bài giảng, luyện tập, kiểm tra chỉ xem trên web.
- Học sinh không cần đăng ký, không cần tài khoản.
- Mục lục bám SGK Kết nối tri thức. HSA bổ sung sau.

## Các bài đã có
| Bài | Bài giảng | Luyện tập | Phiếu PDF | Kiểm tra |
|---|---|---|---|---|
| Toán 6 – Bài 16. Phép nhân số nguyên | ✅ | ✅ | ✅ | ✅ |
| Toán 12 – Bài 6. Vectơ trong không gian | ✅ (bản chờ gắn lời giảng, 56 slide) | ✅ (27 nhiệm vụ + 1 thử thách) | ✅ (5 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 7. Hệ trục toạ độ trong không gian | ✅ (bản chờ gắn lời giảng, 29 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (6 trang, bản HS) | ✅ (16 câu, đề A/B) |

## Lớp sửa chung đã áp dụng cho mọi trang bài học (áp dụng tiếp cho bài mới)
- Bản dành cho học sinh: ẩn nút "Giáo viên", ẩn "Làm lại từ đầu" của GV.
- iPhone: xin phiên âm thanh `playback` (dùng `navigator.audioSession`) kèm âm thanh rỗng giữ phiên, để vẫn nghe được khi máy đang ở chế độ im lặng.
- Nút toàn màn hình: iPhone không hỗ trợ nên hiện hướng dẫn "Ẩn thanh công cụ / Thêm vào MH chính" (hàm `window.mbFsHint`, gắn cuối trang cùng nút ⌂).
- Thẻ meta ứng dụng (apple-mobile-web-app-*, apple-touch-icon `../icon.png`) trong `<head>`.
- Khi mở như ứng dụng (standalone): có nút ⌂ về trang chủ; bài học mở ngay trong ứng dụng.
- Đường dẫn chéo giữa các phần dùng tên file tương đối, không dùng link claude.ai.

## Quy trình thêm một bài mới
1. Thầy gửi các file mới nhất của bài.
2. Claude kiểm tra nội dung và áp lớp sửa chung.
3. Claude đặt tên file theo quy ước, cập nhật `LINKS` trong `index.html` và chụp slide 1 làm ảnh xem trước.
4. Claude thử trên khổ máy tính, điện thoại dọc và điện thoại ngang.
5. Claude commit và đẩy thẳng lên nhánh `main`.
6. Chờ GitHub Pages cập nhật (khoảng 1–2 phút).
7. Claude kiểm tra web thật và báo cáo.

## Việc còn chờ
- Chụp lại ảnh xem trước bài giảng Bài 16 (ảnh cũ còn nút "GIÁO VIÊN").
- Bài 6 – Toán 12: khi thầy gửi ghi âm, chỉ thay `bai-hoc/toan12-bai6-bai-giang.html` (giữ tên) và chụp lại ảnh xem trước bài giảng.
  - Khi gắn ghi âm xong: xoá dòng `chuaGiong: true` của `lop12-bai6` trong `LINKS` (index.html) để trang chủ ghi lại "Có giọng thầy giảng".
- Bài 7 – Toán 12: khi có ghi âm thì thay bài giảng và xoá `chuaGiong`. Gói gốc ghi WARNING: toạ độ N(2; 5; 4) ở Luyện tập 2 (đọc từ lưới H2.39) cần thầy đối chiếu SGK.
- Ô liên hệ (Gmail + Zalo) đã có sẵn trong `index.html` nhưng đang ẩn; chờ thầy gửi Gmail riêng cho web và số Zalo để điền vào khối `CONTACT` (lưu dạng mã hoá: đảo ngược chuỗi rồi base64).
- Bổ sung HSA.
- Mua và gắn tên miền mrblackmath.vn.

## Nhật ký
- 09/10/2026 (22h): Gắn phiếu PDF Bài 7 (bản HS, 6 trang) từ gói `T12_Bai7_HeTrucToaDo.zip`. 3 file HTML trong gói trùng khớp bản đã lên web. Sửa luôn nhãn đè chữ z ở bìa trên 2 artifact bài giảng Bài 7 (GV, HS) trên Claude.
- 09/10/2026 (khuya): Đưa Bài 7 – Toán 12 (Hệ trục toạ độ trong không gian) lên web: bài giảng (chờ gắn lời giảng), tự luyện, tự kiểm tra — lấy bản HS từ các artifact trên Claude cập nhật 09/10/2026. Chưa có phiếu PDF.
  - Áp lớp sửa chung; sửa nhãn "Bản chờ hoàn thiện" đè chữ z ở bìa bài giảng; chụp ảnh xem trước; thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang.
  - Thêm khung ô liên hệ (đang ẩn).
- 09/10/2026 (tối): Đưa đủ 4 phần Bài 6 – Toán 12 lên web từ gói `T12_Bai6_VectoTrongKhongGian.zip` (bản HS).
  - Thay app luyện tập 33 câu cũ bằng bản Tự luyện mới (bản mới nhất là bản chuẩn).
  - Áp lớp sửa chung, chụp ảnh xem trước 3 ô, thử máy tính / điện thoại dọc / ngang: 0 lỗi JS, không tràn ngang.
  - Từ nay Claude đẩy thẳng lên GitHub, không cần gói CapNhat-N.zip.
  - Sửa theo yêu cầu "phải trung thực": ô bài giảng Bài 6 ở trang chủ ghi "Lời giảng của thầy đang được bổ sung" (cờ `chuaGiong`); bỏ câu "để nghe giọng thầy" ở khung hướng dẫn điện thoại của bài này.
  - Sửa bìa bài giảng Bài 6 (cả bản GV và HS): nhãn "Bản chờ hoàn thiện" không còn đè lên chữ B của hình hộp; chụp lại ảnh xem trước.
- 09/10/2026: Chuyển website sang GitHub Pages.
  - Đưa 4 trang bài học sang GitHub, bỏ hẳn phụ thuộc Claude, nên học sinh không còn bị bắt đăng nhập.
  - Sửa lỗi mất tiếng trên iPhone. Thêm hướng dẫn toàn màn hình và chế độ mở như ứng dụng.
  - Thêm khung "Học trên điện thoại".
  - Xóa 5 bản cũ trên Claude.
- 09/10/2026: Làm video intro "bản chạy thử – mời góp ý" (dọc 9:16 cho TikTok, ngang 16:9 cho YouTube, 43 giây, 60 fps).
  - YouTube: đã đăng bản ngang.
  - TikTok: bài đầu bị chặn nhầm ("Spam"), có thể do link web trong mô tả; đã khiếu nại. Lần sau KHÔNG để link trong mô tả TikTok, chỉ để ở trang cá nhân.
