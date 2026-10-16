# Sổ quản lý website Mr Black NBK

Cập nhật: 16/10/2026 (14h)

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
- Bài Ôn tập chương (số chương viết bằng chữ số Ả Rập):
  - `bai-hoc/toan<lớp>-on-tap-chuong<số>-tong-hop.html` (ô 1: Tổng hợp kiến thức Chương x)
  - `bai-hoc/toan<lớp>-on-tap-chuong<số>-luyen-tap.html`, `…-kiem-tra.html`
  - `hoc-lieu/toan<lớp>-on-tap-chuong<số>-phieu-tu-luyen.pdf`

Trong `index.html`, khối `LINKS` khai báo đường dẫn cho từng bài, khóa dạng `lop<lớp>-bai<số>`. Ô nào để trống thì hiện "Sắp ra mắt".
- Bài Ôn tập chương: mọi lớp, cuối mỗi chương có 1 mục "Ôn tập chương x" (trang chủ tự sinh). Khóa trong `LINKS` là `lop<lớp>-ontap<số thứ tự chương>` (vd `lop6-ontap3` = Ôn tập chương III Toán 6). Vẫn 4 ô; ô 1 ghi "Tổng hợp kiến thức Chương x" (khóa `giang`); ô 4 ghi "Tự kiểm tra cuối chương" (khóa `kiemtra`); ô 2, 3 (luyen, pdf) như bài thường. Số "bài" ở cột trái và bảng chào chỉ đếm bài học, không đếm Ôn tập chương.
- Bài giảng chưa gắn lời giảng: thêm `chuaGiong: true` vào bài đó trong `LINKS`. Trang chủ sẽ ghi "Lời giảng của thầy đang được bổ sung" thay cho "Có giọng thầy giảng" (nguyên tắc: trang chủ phải ghi đúng tình trạng thật).

## Quy tắc của thầy
- Lỗi trình bày, lỗi kĩ thuật phát hiện được thì Claude sửa luôn, không cần chờ thầy cho phép (thầy dặn 09/10/2026).
- Bản mới nhất luôn là bản chuẩn. Không giữ bản cũ.
- Chỉ phiếu PDF được tải về. Bài giảng, luyện tập, kiểm tra chỉ xem trên web.
- Học sinh không cần đăng ký, không cần tài khoản.
- Mục lục bám SGK Kết nối tri thức. HSA bổ sung sau.
- Mọi báo cáo gửi thầy luôn ghi tổng số bài đã có trên web, kể cả các bài Ôn tập chương (thầy dặn 11/10/2026).
- Từ 11/10/2026 (chiều) mỗi lần đưa bài lên đều qua Pull Request; thầy nhắn "gộp" thì mới gộp vào `main`.
- Khi kiểm phiếu thấy chỗ "nên sửa" (đáp án trả lời ngắn quá 4 kí tự, hình lộ đáp số, diễn đạt chưa chặt, hình sai tỉ lệ, nhãn đè…) thì sửa luôn cả .tex bản HS và GV, biên dịch lại, rồi báo trong báo cáo; không để thầy tự sửa (thầy dặn 11/10/2026). Lỗi làm sai đáp án/đề vẫn hỏi thầy trước khi sửa.

## Các bài đã có
| Bài | Bài giảng | Luyện tập | Phiếu PDF | Kiểm tra |
|---|---|---|---|---|
| Toán 6 – Bài 16. Phép nhân số nguyên | ✅ | ✅ | ✅ | ✅ |
| Toán 6 – Bài 17. Phép chia hết. Ước và bội của một số nguyên | ✅ (bản chờ gắn lời giảng, 18 slide) | ✅ (17 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều | ✅ (bản chờ gắn lời giảng, 17 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | ✅ (bản chờ gắn lời giảng, 18 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 20. Chu vi và diện tích của một số tứ giác đã học | ✅ (bản chờ gắn lời giảng, 20 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Ôn tập Chương III. Số nguyên | ✅ Tổng hợp kiến thức | ✅ | ✅ (3 trang, bản HS) | ✅ |
| Toán 6 – Ôn tập Chương IV. Một số hình phẳng trong thực tiễn | ✅ Tổng hợp kiến thức | ✅ | ✅ (4 trang, bản HS) | ✅ |
| Toán 7 – Bài 7. Tập hợp các số thực | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (3 trang, bản HS) | ✅ |
| Toán 7 – Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (4 trang, bản HS) | ✅ |
| Toán 7 – Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (6 trang, bản HS) | ✅ |
| Toán 7 – Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (5 trang, bản HS) | ✅ |
| Toán 7 – Bài 11. Định lí và chứng minh định lí | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (5 trang, bản HS) | ✅ |
| Toán 8 – Bài 10. Tứ giác | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (6 trang, bản HS, đã sửa 1 lỗi) | ✅ |
| Toán 8 – Bài 11. Hình thang cân | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (7 trang, bản HS) | ✅ |
| Toán 8 – Bài 12. Hình bình hành | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (7 trang, bản HS) | ✅ |
| Toán 8 – Bài 13. Hình chữ nhật | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (7 trang, bản HS) | ✅ |
| Toán 8 – Bài 14. Hình thoi và hình vuông | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (7 trang, bản HS, đã sửa 1 lỗi) | ✅ |
| Toán 9 – Bài 11. Tỉ số lượng giác của góc nhọn | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (4 trang, bản HS) | ✅ |
| Toán 9 – Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (4 trang, bản HS) | ✅ |
| Toán 9 – Ôn tập Chương IV. Hệ thức lượng trong tam giác vuông | ✅ Tổng hợp kiến thức | ✅ | ✅ (4 trang, bản HS) | ✅ |
| Toán 9 – Bài 13. Mở đầu về đường tròn | ✅ (bản chờ gắn lời giảng, 18 slide) | ✅ (12 nhiệm vụ + 1 thử thách) | ✅ (3 trang, bản HS, đã sửa 5 chỗ) | ✅ (11 câu, đề A/B) |
| Toán 9 – Bài 14. Cung và dây của một đường tròn | ✅ (bản chờ gắn lời giảng, 17 slide) | ✅ (12 nhiệm vụ + 1 thử thách) | ✅ (3 trang, bản HS, đã sửa 2 chỗ) | ✅ (11 câu, đề A/B) |
| Toán 9 – Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên | ✅ (bản chờ gắn lời giảng, 17 slide) | ✅ (12 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS, đã sửa 4 chỗ) | ✅ (12 câu, đề A/B) |
| Toán 9 – Bài 16. Vị trí tương đối của đường thẳng và đường tròn | ✅ (bản chờ gắn lời giảng, 16 slide) | ✅ (12 nhiệm vụ + 1 thử thách) | ✅ (3 trang, bản HS, đã sửa 5 chỗ) | ✅ (11 câu, đề A/B) |
| Toán 9 – Bài 17. Vị trí tương đối của hai đường tròn | ✅ (bản chờ gắn lời giảng, 14 slide) | ✅ (12 nhiệm vụ + 1 thử thách) | ✅ (3 trang, bản HS, đã sửa 4 chỗ) | ✅ (11 câu, đề A/B) |
| Toán 9 – Ôn tập Chương V. Đường tròn | ✅ Tổng hợp kiến thức (13 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (3 trang, bản HS, đã sửa 3 chỗ) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 17. Hàm số liên tục | ✅ Bài giảng (chờ gắn lời giảng) | ✅ | ✅ (12 trang, bản HS) | ✅ |
| Toán 11 – Ôn tập Chương IV. Quan hệ song song trong không gian | ✅ Tổng hợp kiến thức | ✅ | ✅ (11 trang, bản HS) | ✅ |
| Toán 12 – Ôn tập Chương III. Các số đặc trưng đo mức độ phân tán | ✅ Tổng hợp kiến thức | ✅ | ✅ (9 trang, bản HS, đã sửa 1 lỗi) | ✅ |
| Toán 10 – Ôn tập Chương II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn | ✅ Tổng hợp kiến thức | ✅ | ✅ (11 trang, bản HS, đã sửa 4 chỗ) | ✅ |
| Toán 11 – Bài 10. Đường thẳng và mặt phẳng trong không gian | ✅ (bản chờ gắn lời giảng, 37 slide) | ✅ (21 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 11. Hai đường thẳng song song | ✅ (bản chờ gắn lời giảng, 25 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (13 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 12. Đường thẳng và mặt phẳng song song | ✅ (bản chờ gắn lời giảng, 23 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (12 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 13. Hai mặt phẳng song song | ✅ (bản chờ gắn lời giảng, 36 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 14. Phép chiếu song song | ✅ (bản chờ gắn lời giảng, 25 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (12 trang, bản HS, đã sửa 2 lỗi) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 15. Giới hạn của dãy số | ✅ (bản chờ gắn lời giảng, 38 slide) | ✅ (18 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (15 câu, đề A/B) |
| Toán 11 – Bài 16. Giới hạn của hàm số | ✅ (bản chờ gắn lời giảng, 44 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (15 câu, đề A/B) |
| Toán 11 – Ôn tập Chương V. Giới hạn. Hàm số liên tục | ✅ Tổng hợp kiến thức | ✅ | ✅ (9 trang, bản HS) | ✅ |
| Toán 11 – Bài 5. Dãy số | ✅ (bản chờ gắn lời giảng, 33 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 2 chỗ) | ✅ (14 câu) |
| Toán 11 – Bài 6. Cấp số cộng | ✅ (bản chờ gắn lời giảng, 27 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 2 hình) | ✅ (14 câu) |
| Toán 11 – Bài 7. Cấp số nhân | ✅ (bản chờ gắn lời giảng, 27 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 2 chỗ) | ✅ (14 câu) |
| Toán 11 – Ôn tập Chương II. Dãy số. Cấp số cộng và cấp số nhân | ✅ Tổng hợp kiến thức | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 1 hình) | ✅ (21 câu) |
| Toán 12 – Bài 6. Vectơ trong không gian | ✅ (bản chờ gắn lời giảng, 56 slide) | ✅ (27 nhiệm vụ + 1 thử thách) | ✅ (5 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 7. Hệ trục toạ độ trong không gian | ✅ (bản chờ gắn lời giảng, 29 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (6 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 8. Biểu thức toạ độ của các phép toán vectơ | ✅ (bản chờ gắn lời giảng, 30 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 9. Khoảng biến thiên và khoảng tứ phân vị | ✅ (bản chờ gắn lời giảng, 22 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (13 câu, đề A/B) |
| Toán 12 – Bài 10. Phương sai và độ lệch chuẩn | ✅ (bản chờ gắn lời giảng, 19 slide) | ✅ (11 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (13 câu, đề A/B) |
| Toán 12 – Bài 11. Nguyên hàm | ✅ (bản chờ gắn lời giảng, 27 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 5 hình) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 12. Tích phân | ✅ (bản chờ gắn lời giảng, 25 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 2 chỗ) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 13. Ứng dụng hình học của tích phân | ✅ (bản chờ gắn lời giảng, 26 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 5 nhãn hình) | ✅ (16 câu, đề A/B) |
| Toán 12 – Ôn tập Chương IV. Nguyên hàm và tích phân | ✅ Tổng hợp kiến thức (14 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (8 trang, bản HS, đã sửa 7 chỗ) | ✅ (20 câu, đề A/B) |
| Toán 12 – Bài 14. Phương trình mặt phẳng | ✅ (bản chờ gắn lời giảng, 49 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 4 chỗ) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 15. Phương trình đường thẳng trong không gian | ✅ (bản chờ gắn lời giảng, 41 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 5 chỗ) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 16. Công thức tính góc trong không gian | ✅ (bản chờ gắn lời giảng, 23 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 4 nhãn hình) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 17. Phương trình mặt cầu | ✅ (bản chờ gắn lời giảng, 27 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 9 chỗ) | ✅ (16 câu, đề A/B) |
| Toán 12 – Ôn tập Chương V. Phương pháp toạ độ trong không gian | ✅ Tổng hợp kiến thức (15 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (7 trang, bản HS, đã sửa 3 chỗ) | ✅ (20 câu, đề A/B) |

## Lớp sửa chung đã áp dụng cho mọi trang bài học (áp dụng tiếp cho bài mới)
- Bản dành cho học sinh: ẩn nút "Giáo viên", ẩn "Làm lại từ đầu" của GV.
- iPhone: xin phiên âm thanh `playback` (dùng `navigator.audioSession`) kèm âm thanh rỗng giữ phiên, để vẫn nghe được khi máy đang ở chế độ im lặng.
- Nút toàn màn hình: iPhone không hỗ trợ nên hiện hướng dẫn "Ẩn thanh công cụ / Thêm vào MH chính" (hàm `window.mbFsHint`, gắn cuối trang cùng nút ⌂).
- Thẻ meta ứng dụng (apple-mobile-web-app-*, apple-touch-icon `../icon.png`) trong `<head>`.
- Khi mở như ứng dụng (standalone): có nút ⌂ về trang chủ; bài học mở ngay trong ứng dụng.
- Đường dẫn chéo giữa các phần dùng tên file tương đối, không dùng link claude.ai.
- File tải từ claude.ai có thể bọc trong 1 lớp vỏ (`<!doctype html><html><head><meta charset=utf8>…<style>…</style></head><body>` rồi mới đến tài liệu thật). Bỏ vỏ, NHƯNG phải giữ phần CSS của bài nằm sau quy tắc `[hidden]…display:none!important}` trong `<style>` của vỏ (đặt lại vào đầu `<head>` tài liệu thật) — luyện tập/kiểm tra Toán 11 để CSS giao diện ở đó.
- Xoay máy: cuối mọi trang bài học có khối "Xoay máy: co giãn lại sân khấu…" (bắt orientationchange, screen.orientation, matchMedia, ResizeObserver; co giãn lại nhiều nhịp 0–1,6 giây). Áp tiếp cho bài mới.
- Thống kê truy cập: mọi trang (kể cả `index.html`) nạp `thong-ke.js` trong `<head>` (`<script src="../thong-ke.js" defer>` với trang bài học). Mã Google Analytics 4 chỉ điền một chỗ trong `thong-ke.js`.

## Quy trình thêm một bài mới
1. Thầy gửi các file mới nhất của bài.
2. Claude kiểm tra nội dung và áp lớp sửa chung.
3. Claude đặt tên file theo quy ước, cập nhật `LINKS` trong `index.html` và chụp slide 1 làm ảnh xem trước.
4. Claude thử trên khổ máy tính, điện thoại dọc và điện thoại ngang.
5. Claude commit và đẩy thẳng lên nhánh `main`.
6. Chờ GitHub Pages cập nhật (khoảng 1–2 phút).
7. Claude kiểm tra web thật và báo cáo.

## Việc còn chờ
- Bài 6 – Toán 12: khi thầy gửi ghi âm, chỉ thay `bai-hoc/toan12-bai6-bai-giang.html` (giữ tên) và chụp lại ảnh xem trước bài giảng.
  - Khi gắn ghi âm xong: xoá dòng `chuaGiong: true` của `lop12-bai6` trong `LINKS` (index.html) để trang chủ ghi lại "Có giọng thầy giảng".
- Bài 7–17 – Toán 12: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bài 7–11 – Toán 7; Bài 10–14 – Toán 8; Bài 11–17 – Toán 9: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bài 5–7, 10–17 – Toán 11: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bài 17, 18, 19, 20 – Toán 6: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bổ sung HSA.
- Mua và gắn tên miền mrblackmath.vn.

## Nhật ký
- 16/10/2026 (14h): Lô Toán 9 Chương V từ gói `T9_Bai13_MoDauVeDuongTron_TongHop.zip`, `T9_Bai14_CungVaDay_TongHop.zip`, `T9_Bai15_DoDaiCungDienTichQuat_TongHop.zip`, `T9_Bai16_ViTriDuongThangDuongTron_TongHop.zip`, `T9_Bai17_ViTriHaiDuongTron_TongHop.zip`, `T9_OnTapChuong5_TongHop.zip` (bản HS): Bài 13–17 (`lop9-bai13..17`, `chuaGiong`) và Ôn tập Chương V (`lop9-ontap5`), qua Pull Request (nhánh `claude/toan9-chuong5`). Kiểm độc lập 6 phiếu GV (81 câu, 194 ý; câu tính và làm tròn với π kiểm bằng Python): không lỗi làm sai đáp án/đề; phiếu HS không lộ đáp án.
  - Sửa luôn (cả .tex HS + GV, 22 chỗ): B13 hình B1, B3 vẽ sẵn đường tròn lộ kết luận (bỏ), B2 bỏ nhãn H thừa, D2 "M và H nằm cùng phía đối với O" + dời nhãn H, N, đáp án GV B3c bỏ "chẳng hạn"; B14 dời nhãn H (B1), lời giải GV C2a thêm trường hợp M ≡ A, B; B15 dời nhãn "10 cm" (B2), C3 vẽ riêng bán kính 5, 10 + thêm "viết kết quả theo π", D2 viết lại câu mô tả phần tô màu; B16 vẽ lại đúng tỉ lệ B1 (4 hình tròn chồng nhau), B3 (góc AMB 60°), C2 (AC : BD = 4 : 9), D1 (R : OM = 3 : 5) + đề D1 "(O; R)"; B17 B1 bỏ kí hiệu vuông lộ OO′ ⊥ AB, B2 vẽ lại AB = 8, AC = 4 + "(B, C khác A)", C3 vẽ lại AD = 12; ÔT C5 C2 nêu rõ vị trí M, lời giải GV C3b, D2c thêm bước trung gian. XeLaTeX ×2: 0 lỗi, 0 thiếu kí tự, 0 Overfull, số trang giữ nguyên (HS 3, 3, 2, 3, 3, 3).
  - Áp lớp sửa chung (meta ứng dụng + `audioSession`, `thong-ke.js`, nút toàn màn hình có `mbFsHint`, nút ⌂, khối xoay máy; bỏ thẻ `</head><body>` lặp ở cả 18 trang; ÔT C5 đổi link `../01_TongHopKienThuc/…`, `../02_LuyenTapTongHop/…` sang tên file trên web; nút GV vốn ẩn; không có link claude.ai); ảnh xem trước 18 ô; thử 3 khổ màn hình (57 lượt kể cả trang chủ): 0 lỗi JS, không tràn ngang, nút GV ẩn. Trang chủ: 56 mục LINKS (45 bài học + 11 ôn tập chương), 224 đường dẫn đủ file, 0 lỗi JS. Pull Request #15; thầy nhắn "gộp" (16/10, 13h49): đã gộp vào `main`; web thật mở được trang Bài 13 bài giảng, Bài 16 luyện tập, ÔT C5 kiểm tra và phiếu Bài 17 (bản đã sửa).
- 16/10/2026 (13h30): Báo cáo website theo lớp: 50 mục = 40 bài học + 10 ôn tập chương (T6 7, T7 5, T8 5, T9 3, T10 1, T11 14, T12 15); 200/200 đường dẫn có file. Thiếu so với SGK: T10 chỉ có ÔT C2 (chưa có Bài 3, 4); T6 Chương III thiếu Bài 13–15; chưa có ÔT T7 C2, C3, T8 C3, T12 C2.
- 13/10/2026 (20h): Lô Toán 11 Chương II từ gói `T11B5_GoiBaiHoc.zip`, `T11B6_GoiBaiHoc.zip`, `T11B7_GoiBaiHoc.zip`, `T11C2_GoiOnTapChuong.zip` (bản HS): Bài 5, 6, 7 (`lop11-bai5/6/7`, `chuaGiong`) và Ôn tập Chương II (`lop11-ontap2`), qua Pull Request. Kiểm độc lập 4 phiếu GV (418 câu/ý: B5 99, B6 101, B7 119, ÔT C2 99; câu tính kiểm bằng Python): không lỗi làm sai đáp án/đề; phiếu HS không lộ đáp án.
  - Sửa luôn (cả .tex HS + GV): B5 III.10 đáp án 0,125 quá 4 kí tự → đổi $u_n=n/(n^2+4)$, đáp án 0,25; B5 NC2.1 112,65 → hỏi tiền lãi, làm tròn hàng phần mười, đáp án 12,6; B7 III.6 370368 → rút còn $3+33+333+3\,333$, đáp án 3702; B7 NC2.2 61,99 → làm tròn hàng phần mười, đáp án 62,0; B6 I.12 nhãn "15 viên" đè đường nền (dời nhãn); B6 NC1.3 hình ghi sẵn 204; 186; 168 lộ ý a (bỏ 3 nhãn); ÔT C2 NC2.1 nhãn "5 cm" đè nét lõi cáp (vẽ lại mũi tên bán kính). XeLaTeX ×2: 0 lỗi, 0 thiếu kí tự, 0 Overfull, số trang giữ nguyên (HS 8 trang cả 4 phiếu).
  - Áp lớp sửa chung (meta ứng dụng + `audioSession`, `thong-ke.js`, nút toàn màn hình có `mbFsHint`, nút ⌂, khối xoay máy; bỏ "· HS" ở tiêu đề tab; nút GV vốn ẩn; gói không có lớp vỏ claude.ai, không có link chéo); ảnh xem trước 12 ô; thử 3 khổ màn hình (36 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn. Trang chủ: 50 mục LINKS (40 bài học + 10 ôn tập chương), 200 đường dẫn đủ file, 0 lỗi JS. Pull Request #14; thầy nhắn "gộp" (14/10, 8h35): đã gộp vào `main`.
- 12/10/2026 (22h): Báo cáo website. Trên web 46 mục = 37 bài học + 9 Ôn tập chương (T6: 5 bài + ÔT C3, C4; T7: 5 bài; T8: 5 bài; T9: 2 bài + ÔT C4; T10: ÔT C2; T11: 8 bài + ÔT C4, C5; T12: 12 bài + ÔT C3, C4, C5); 184/184 đường dẫn có file, mọi trang nạp `thong-ke.js`; 1 bài có lời giảng (T6 Bài 16), 36 bài `chuaGiong`. Google Analytics 10–11/10 (12/10 chưa xử lí xong): 107 người dùng, 161 phiên, 215 lượt xem; 11/10: 71 người dùng, 100 phiên, 137 lượt xem. Nguồn: mạng xã hội 85 phiên (TB 27 giây), trực tiếp 73 (TB 1 phút 54 giây), video 2, Google 1. Trang chủ 162 lượt (75%, TB 29 giây/người); bài giảng T12 Bài 6: 32 lượt/21 người (TB 3 phút 41 giây); luyện tập T12 Bài 6: 5 lượt/3 người (TB 12 phút); bài giảng T6 Bài 16: 4. Thời gian thực 21h55: 6 người dùng/30 phút (5 người mới), đang xem T12 Bài 6. Thầy nhắn "gộp" (22h01): đã gộp PR #11 (sổ quản lý BT 5.15, 5.20) và PR #12 (báo cáo này).
- 12/10/2026 (21h40): Thầy xác nhận BT 5.15 (Bài 15) và 5.20 (Bài 16) – Toán 12 tập hai: tử số thứ hai là "(y+1)" — cách hiểu của gói đúng, không phải sửa. (Trên web, bài giảng chỉ giao 5.20 làm bài tập về nhà, không in đề.) Xoá khỏi Việc còn chờ.
- 12/10/2026 (18h35): Lô Toán 12 Chương V từ gói `T12_Bai14_PhuongTrinhMatPhang.zip`, `T12_Bai15_PhuongTrinhDuongThang.zip`, `T12_Bai16_CongThucTinhGoc.zip`, `T12_Bai17_PhuongTrinhMatCau.zip`, `T12_OnTapChuong5.zip` (bản HS): Bài 14–17 (`lop12-bai14..17`, `chuaGiong`) và Ôn tập Chương V (`lop12-ontap5`), qua Pull Request. Kiểm độc lập 5 phiếu GV (485 câu/ý; Bài 16 tính lại toàn bộ góc bằng Python): không đáp án nào sai.
  - Sửa luôn (cả .tex HS + GV): 13 đáp án TLN quá 4 kí tự hoặc lệch yêu cầu làm tròn → đổi yêu cầu làm tròn (B14 III.9 1,6, NC2.5 12,6; B15 NC2.1 6,4, NC2.3 102; B17 III.8 6672, III.9 3336, NC2.1 452, NC2.2 20,8, NC2.3 5004, NC2.5 50,3; ÔT C5 III.10 1668, NC2.4 51, NC2.5 5004); B17 II.8c 10 007,6 → 10 007,5 và NC1.3c 1 111,7 → 1 112 (số liệu lệch do làm tròn radian giữa chừng, đáp án Đúng giữ nguyên); hình lộ đáp số: B15 NC1.1 (bỏ D trong tấm bìa), NC1.2 (bỏ điểm gặp C, vẽ vectơ vận tốc); hình sai/thừa: B15 NC2.2 bỏ tấm bìa thừa, B17 NC2.4 vẽ lại vùng phủ sóng đúng bán kính 5; nhãn: B14 NC1.3 "S = 24" (sát nét đứt của S = 27), NC1.1 C, B16 nhãn C bể kính, "tia nắng", A. XeLaTeX ×2: 0 lỗi, số trang giữ nguyên. Ghi nhận: B15 NC2.2 trùng dữ liệu Phần II câu 10.
  - Áp lớp sửa chung; ảnh xem trước 15 ô; thử 3 khổ màn hình (45 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn. Trang chủ: 46 mục LINKS (37 bài học + 9 ôn tập chương), 184 đường dẫn đủ file, 0 lỗi JS.
- 12/10/2026 (17h15): Lô Toán 12 Chương IV từ gói `T12_Bai11_NguyenHam.zip`, `T12_Bai12_TichPhan.zip`, `T12_Bai13_UngDungHinhHocTichPhan.zip`, `T12_OnTapChuong4.zip` (bản HS): Bài 11, 12, 13 (`lop12-bai11/12/13`, `chuaGiong`) và Ôn tập Chương IV (`lop12-ontap4`), qua Pull Request. Kiểm độc lập 4 phiếu GV (388 câu/ý); mọi đáp án TLN ≤ 4 kí tự.
  - Lỗi đáp án (thầy đồng ý sửa 15h42, chỉ bản GV): Bài 13 Phần II câu 7d "thể tích bằng 16π/3" ghi [Đúng] → [Sai] (V = 8π, ý c đã ghi 8π Đúng).
  - Sửa luôn các chỗ nên sửa (cả .tex HS + GV): B11 bỏ mốc lộ đáp số ở NC1 câu 1 (14), 3 (8000), 4 (550, 1250), 5 (29, 6), NC2 câu 1 (85, 4); B12 Phần II câu 9d viết lại "(T(0)+T(6))/2 = 32" (đáp án giữ Sai), NC1 câu 4 bỏ mốc 28; B13 dời nhãn y = x² (NC1 câu 2, dễ nhầm nhánh √x), "vườn cỏ"/mốc 4 (NC1 câu 1), mốc 3 (NC1 câu 5), mốc 2 (NC2 câu 1); ÔT C4 Phần III câu 10 "phần trăm" → "phần mười" (đáp án 3,9), bỏ mốc 10 (NC1 câu 1), 20 ở hai trục (NC1 câu 5), 4 (NC2 câu 1), dời nhãn "mặt cắt"/mốc 4 (NC1 câu 2), mốc ±4 (NC2 câu 3). XeLaTeX ×2: 0 lỗi, 0 thiếu kí tự, 0 Overfull, số trang giữ nguyên.
  - Áp lớp sửa chung (bỏ thẻ `</head><body>` lặp, nút GV vốn ẩn); ảnh xem trước 12 ô; thử 3 khổ màn hình (36 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn. Trang chủ: 41 mục LINKS (33 bài học + 8 ôn tập chương), 164 đường dẫn đủ file, 0 lỗi JS.
- 11/10/2026 (22h45): Đưa Ôn tập Chương II – Toán 10 (`lop10-ontap2`, mục đầu tiên của Toán 10) từ gói `T10C2_OnTapChuongII.zip` (bản HS); thầy dặn "đưa lên web, làm xong gửi báo cáo" nên tạo Pull Request rồi gộp luôn. Kiểm độc lập 98 câu/ý phiếu GV: không lỗi sai. Theo quy tắc mới, sửa luôn 4 chỗ nên sửa (cả .tex GV và HS): I.21 phương án A "một trong các đỉnh của đa giác"; nới vùng gạch hình I.10, I.11, I.18, II.5 phủ hết phần không thuộc miền nghiệm; I.19, I.20, II.7, II.8 ghi "(miền tô màu)"; II.5 bỏ mốc 3 và 6 trên trục (lộ đáp số ý a, d). XeLaTeX ×2: 0 lỗi, số trang giữ nguyên (GV 15, HS 11). Thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang, nút GV ẩn. Trên web: 37 mục (30 bài học + 7 ôn tập chương).
- 11/10/2026 (19h): Theo lời thầy, sửa toàn bộ các chỗ "nên sửa" đã ghi ở 23 phiếu (T6 ÔT C3, C4; T7 Bài 8–11; T8 Bài 10, 12, 13, 14; T9 Bài 11, 12, ÔT C4; T11 Bài 10–17, ÔT C4, C5; T12 ÔT C3): đáp án ngắn quá 4 kí tự → thêm yêu cầu làm tròn/đổi đại lượng hỏi (T11 B15: 54,6; 101; 16,4 · T11 B17: 12m = −2 · T11 ÔT C5: 133 · T12 ÔT C3: 162; 17,1); bỏ nhãn/điểm lộ đáp số ở hình bản HS (T6 ÔT C3 B7, B8; T9 B11 D2; T11 ÔT C5 NC2 câu 1, 2, 4); vẽ lại hình sai tỉ lệ (T11 B11 bể kính; T11 B13 câu 16, sàn ba tầng; T11 ÔT C4 PII.9, NC2.2, NC2.4; T8 B12 I.2, II.1, III.6, III.7; T8 B13 NC2.4; T7 B8 B6); diễn đạt chặt chẽ hơn (thêm "luôn", "theo định nghĩa", AB > BC, AB ≠ CD, B nằm giữa A và C, tầng trệt là tầng 0, định nghĩa góc trong cùng phía…); T11 B10 NC2 câu 2 sửa "từ N qua M"; T7 B10 A1d viết lại ([Đúng]). Mỗi thư mục có CHANGES.md chi tiết. Biên dịch XeLaTeX ×2: 0 lỗi, 0 thiếu kí tự, 0 Overfull, số trang giữ nguyên. Kiểm định độc lập toàn bộ thay đổi: không có lỗi phải sửa. Thay 21 phiếu HS trên web (T11 B16, T7 B11, T9 ÔT C4 bản HS không đổi). Gửi thầy gói `PhieuDaSua_11-10.zip` (tex + pdf GV, HS).
- 11/10/2026 (18h10): Báo cáo website. Trên web 36 mục = 30 bài học + 6 Ôn tập chương (T6: 5 bài + ÔT C3, C4; T7: 5 bài; T8: 5 bài; T9: 2 bài + ÔT C4; T11: 8 bài + ÔT C4, C5; T12: 5 bài + ÔT C3); 1 bài có lời giảng (T6 Bài 16). Google Analytics, 7 ngày đến hết 10/10 (thực chất là ngày 10/10): 41 người dùng, 61 phiên, 78 lượt xem; nguồn: Zalo 30 phiên, trực tiếp 26, Google 1; Hà Nội 34 người dùng; trang xem nhiều: trang chủ 63, bài giảng T12 Bài 6: 9, T6 Bài 16: 3, T12 Bài 8: 2. Thời gian thực lúc 18h: 12 người dùng trong 30 phút (10 người mới).
- 11/10/2026 (18h): Đưa Ôn tập Chương V – Toán 11 (`lop11-ontap5`) từ gói `T11C5_GoiOnTapChuong.zip` (bản HS), qua Pull Request. Kiểm độc lập 109 câu/ý phiếu GV: không lỗi toán; phiếu HS không có lời giải. Ghi nhận (chưa sửa): Nâng cao 2 câu 1 đáp án 133,3 dài 5 kí tự và hình HS ghi sẵn 400/3; câu 2 hình HS đánh dấu sẵn (16; 40); câu 4 hình HS vẽ sẵn các bước chia đôi. Thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang, nút GV ẩn.
- 11/10/2026 (17h45): Đưa Bài 17 – Toán 11 (Hàm số liên tục) từ gói `T11B17_GoiBaiHoc.zip` (bản HS), qua Pull Request. Kiểm độc lập 103 câu/ý phiếu GV: không đáp án nào sai; phiếu HS không lộ đáp án. Ghi nhận (chưa sửa): Phần III câu 3 đáp án −0,17 dài 5 kí tự; bản GV có khoảng trắng lớn ở trang đầu Nâng cao 1. Thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang, nút GV ẩn. Cùng lúc thầy gửi lại gói Bài 15, 16 – Toán 11 (17h33) và gói Ôn tập T12 C3, T11 C4, T9 C4 (17h29): trùng khớp bản đã lên, không thay (riêng phiếu T12 C3 web giữ bản đã sửa R′).
- 11/10/2026 (14h30): Lô 17 gói gửi chiều 11/10, qua Pull Request: Toán 6 Ôn tập Chương III, IV; Toán 7 Bài 7–11; Toán 8 Bài 10–14; Toán 9 Bài 11, 12, Ôn tập Chương IV; Toán 11 Ôn tập Chương IV; Toán 12 Ôn tập Chương III (bản HS). Gói T6 Ôn tập C4 và T7 Bài 11 thầy gửi lại trùng khớp gói trước. (Trước đó, theo lời thầy, đã bỏ hẳn một bản dựng Toán 7 Bài 7–11 chưa đẩy lên, và xoá nhánh trùng `claude/amazing-johnson-6ekzu2`.)
  - Bài Ôn tập: khoá `lop<lớp>-ontap<số chương>`, file `…-on-tap-chuong<số>-tong-hop/luyen-tap/kiem-tra.html`; không có cờ `chuaGiong` (không có lời giảng). Đổi link claude.ai (T6 C3, C4) và đường dẫn thư mục `../01_…` (T9 C4) sang tên file trên web. T11 C4 có lớp vỏ claude.ai: bỏ vỏ, giữ CSS. Tiêu đề tab "Tự kiểm tra Chương X · Chương X ·" sửa thành "Tự kiểm tra cuối chương · Ôn tập Chương X ·".
  - Kiểm độc lập toàn bộ 17 phiếu GV: không đáp án tính toán nào sai; 3 lỗi bắt buộc, thầy đồng ý cho sửa (sửa .tex HS + GV, XeLaTeX ×2: 0 lỗi, số trang giữ nguyên): T8 Bài 10 NC1 câu 2 khung diều dữ kiện mâu thuẫn (BD = 61,28 theo ABD, 59,17 theo CBD) → CB = CD = 72,5 cm; T8 Bài 14 Phần I câu 13 có 3 phương án đúng → A "hình bình hành không phải hình chữ nhật", B "hình chữ nhật không phải hình vuông"; T12 Ôn tập C3 Phần I câu 3 `R\'` in thành "Ŕ" → R′.
  - Ghi nhận "nên sửa" (chưa sửa): T6 C3 câu B7, B8 hình vẽ lộ đáp số, B8 thiếu quy ước tầng trệt là tầng 0; T6 C4 câu A1b (120°) có thể vượt phạm vi chương; T7 Bài 9 A1c, A2c dùng "góc trong cùng phía" (cần đối chiếu SGK); T7 Bài 10 A1d diễn đạt hai nghĩa, C1/D1 chưa khai báo A ∈ xx′, B ∈ yy′; T7 Bài 11 A2 phần Chú ý phản ví dụ chưa khớp; T8 Bài 13 II.1c, NC1.5d cần "AB > BC"; T8 Bài 14 I.1, I.3, I.8 nên thêm "Theo định nghĩa"/"không là hình vuông"; T8 Bài 12 III.7, Bài 13 NC2.4 hình lệch tỉ lệ; T9 Bài 11 D2 hình ghi sẵn 15°; T11 C4 PII câu 9, 11 nên thêm "luôn"; T12 C3 III.3 (162,3) và NC2.1 (17,08) quá 4 kí tự, NC1.1b "khoảng 75%" dễ tranh cãi, NC2.4 cột "?" vẽ trùng vạch 12.
  - Áp lớp sửa chung; ảnh xem trước 51 ô; thử 3 khổ màn hình (153 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn; trang chủ 34 mục LINKS, mọi đường dẫn có file, cú pháp hợp lệ.
- 11/10/2026 (13h): Đưa đủ 4 phần Bài 14 – Toán 11 (Phép chiếu song song) từ gói `T11_Bai14.zip` (bản HS), qua Pull Request. Kiểm độc lập 132 câu/ý phiếu GV: phát hiện 2 lỗi, thầy đồng ý cho sửa: (1) NC1 câu 1d "A′C′ = AC" phiếu ghi Sai — đường chéo AC nằm ngang, song song với sàn nên đúng phải là Đúng; sửa ý d) thành "Đường chéo AC nằm ngang như hình vẽ. Khi đó A′C′ = AC" [Đúng]; (2) NC2 câu 5 cho A′B′ = 1,5 m mâu thuẫn (AB nằm ngang nên A′B′ = AB = 1,2 m); đổi thành A′D′ = 1,5 m, hỏi về A′D′ (đáp án vẫn 0,5). Sửa cả .tex HS và GV, biên dịch XeLaTeX ×2: 0 lỗi, 0 thiếu kí tự, 0 Overfull, số trang giữ nguyên (HS 12, GV 17); web dùng PDF HS đã sửa. Ghi nhận thêm (chưa sửa): NC2 câu 3 cách hiểu "tiếp xúc mép vạch" ngược với NC1 câu 2c–d; NC1 câu 1b nên thêm chữ "luôn". Áp lớp sửa chung; ảnh xem trước; thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang, nút GV ẩn.
- 11/10/2026 (12h30): Đưa đủ 4 phần Bài 12, Bài 13 (Chương IV) và Bài 16 (Chương V) – Toán 11 từ gói `T11_Bai12.zip`, `T11_Bai13.zip`, `T11B16_GoiBaiHoc.zip` (bản HS); thay trang tự luyện Bài 11 bằng bản mới trong gói `T11_Bai11.zip` gửi 8h17 (chỉ khác nhiệm vụ p05 được thu gọn cho khỏi tràn; các file khác trùng bản đã lên). Kiểm độc lập toàn bộ đáp án 3 phiếu GV (Bài 12: 110 câu/ý; Bài 13: 101; Bài 16: 100): không câu nào sai; phiếu HS không lộ đáp án; mọi đáp án trả lời ngắn ≤ 4 kí tự. Ghi nhận điểm nên sửa ở bản gốc (chưa sửa): Bài 12 – NC2 câu 3 nên ghi "AB ∥ CD", chân thang AB vẽ nét đứt nên đổi nét liền; NC1 câu 1 chữ "mặt đất" đè nhãn M. Bài 13 – NC2 câu 2 hình sàn ba tầng ngược tỉ lệ số liệu; hình câu 16 (dùng lại ở câu 17, 18) vẽ AB dài hơn BC trái dữ kiện; Phần III câu 4 hình thừa nhãn C₁, C₂. Bài 16 – NC1 câu 5 đồ thị bắt đầu từ O trong khi h(0) = 0,5 (rất nhỏ). Áp lớp sửa chung; bỏ lớp vỏ claude.ai và giữ CSS giao diện trong vỏ; nới khoảng cách nhãn "Bản chờ hoàn thiện" với trục y ở bìa Bài 16. Ảnh xem trước; thử 3 khổ màn hình (36 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn. Gửi qua Pull Request #1; thầy duyệt, đã gộp 12h25, web thật 16/16 đường dẫn mở được.
- 11/10/2026 (8h30): Đưa đủ 4 phần Bài 10, Bài 11 (Chương IV) và Bài 15 (Chương V) – Toán 11 lên web từ gói `T11_Bai10.zip`, `T11_Bai11.zip`, `T11B15_GoiBaiHoc.zip` (gói Bài 15 thầy gửi lại lúc 7h58 trùng khớp nội dung gói trước, chỉ thêm LINKS.txt). Kiểm độc lập toàn bộ đáp án 3 phiếu GV (Bài 10: 82 câu/ý; Bài 11: 98; Bài 15: 122; câu tính kiểm lại bằng toạ độ/tính số Python): không câu nào sai đáp án; phiếu HS không lộ đáp án. Ghi nhận các điểm nên sửa ở bản gốc (chưa sửa vì là PDF của thầy): Bài 10 – NC2 câu 2 đề ghi "từ M qua N kéo dài chạm đất" phải là "từ N qua M"; Phần I câu 18 phương án A "đường thẳng qua S cắt a" cũng thoả nên dễ tranh cãi; hình Phần III câu 7 vẽ M gần trung điểm SA (đề SM = 2MA). Bài 11 – NC2 câu 4 hình bể kính vẽ CD ngắn trái số liệu CD = 50, DA = 12; Phần II câu 12c nên thêm AB ≠ CD. Bài 15 – 3 đáp án trả lời ngắn dài quá 4 kí tự (III.10: 54,63; NC2.1: 100,53; NC2.4: 16,36). Áp lớp sửa chung; bỏ lớp vỏ claude.ai và giữ CSS giao diện trong vỏ; bỏ "· Bản Học sinh"/"· HS" ở tiêu đề tab; nới khoảng cách nhãn "Bản chờ hoàn thiện" với chữ S ở bìa Bài 10. Ảnh xem trước; thử 3 khổ màn hình (27 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn. Cả 3 bài chưa có lời giảng (`chuaGiong`).
- 11/10/2026 (8h): Đưa đủ 4 phần Bài 17, 18, 19, 20 – Toán 6 (Chương III: Bài 17; Chương IV: Bài 18–20) lên web từ gói `T6_Bai17-20_TronBo.zip` (bản HS; bài kiểm tra dùng chung 1 bản). Kiểm tra độc lập đáp án cả 4 phiếu bản GV (Phần A–D): đều đúng; phiếu HS (2 trang) không lộ đáp án. Áp lớp sửa chung: thẻ meta ứng dụng + `audioSession`, `thong-ke.js`, nút toàn màn hình có dự phòng `mbFsHint`, nút ⌂, khối xoay máy; đổi 3 link claude.ai trong luyện tập/kiểm tra sang tên file tương đối; bỏ thẻ `</head><body>` lặp ở 4 bài giảng. Cả 4 bài chưa có lời giảng (`chuaGiong`). Ảnh xem trước 12 ô; thử 3 khổ màn hình (36 lượt): 0 lỗi JS, không tràn ngang, nút GV ẩn.
- 10/10/2026 (22h30): Thầy báo bài giảng Toán 12 (trừ Bài 16 – Toán 6) trên điện thoại không quay ngang được. Giả lập iPhone 13 / Pixel 7 (Chromium): cả 18 trang đều xoay và co giãn đúng, chưa tái hiện được lỗi; mã xoay/co giãn của Toán 12 giống Bài 16, không trang nào khoá hướng màn hình. Đã: (1) thêm khối co giãn lại nhiều nhịp sau khi xoay cho cả 18 trang; (2) bỏ thẻ `</head><body>` bị lặp trong 15 trang Toán 12. Chờ thầy cho biết máy/trình duyệt và hiện tượng cụ thể để thử lại.
- 10/10/2026 (22h): Đưa đủ 4 phần Bài 9 (Khoảng biến thiên và khoảng tứ phân vị) và Bài 10 (Phương sai và độ lệch chuẩn) – Toán 12 lên web từ gói `T12_Bai9.zip`, `T12_Bai10.zip` (bản HS). Kiểm tra độc lập bằng Python các đáp án Phần III của 2 phiếu (Bài 9: 5 câu + Nâng cao 1; Bài 10: 9 câu): khớp hết; phiếu HS không lộ đáp án. Áp lớp sửa chung (bản HS đã sẵn ẩn nút GV); ảnh xem trước; thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang. Cả 2 bài chưa có lời giảng (`chuaGiong`).
- 10/10/2026 (22h): Theo lời thầy, ô 4 của bài Ôn tập chương đổi thành "Tự kiểm tra cuối chương" (bài thường vẫn "Tự kiểm tra cuối bài").
- 10/10/2026 (17h30): Theo yêu cầu thầy, thêm bài "Ôn tập chương x" cuối mỗi chương cho tất cả các lớp (6–12; 63 chương). Có trong menu chương (dưới bài cuối, ngăn bằng nét đứt), tìm kiếm ("ôn tập" lên đầu), nút bài trước/sau. Ô 1 đổi thành "Tổng hợp kiến thức Chương x". Hiện cả 4 ô đều "Sắp ra mắt". Thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang.
- 10/10/2026 (17h): Báo cáo Google Analytics ngày đầu (10/10, số liệu trong ngày, chưa chốt): 35 người dùng, 42 phiên, 52 lượt xem, thời gian tương tác TB 43 giây/người. Nguồn: Organic Social 28 phiên (TB 17 giây/phiên), Direct 14 phiên (TB 1 phút 12 giây). Trang: trang chủ 42 lượt; bài giảng Bài 6 – Toán 12: 7 lượt (5 người, TB 1 phút); bài giảng Bài 16 – Toán 6: 2; kiểm tra Bài 6 – Toán 12: 1. Chưa ai mở luyện tập. Có lẫn 1 lượt thử của Claude lúc 7h31.
- 10/10/2026 (7h30): Bật thống kê Google Analytics 4, mã đo lường G-SHEVYZQC9S (tài khoản Gmail của thầy). Xem tại analytics.google.com hoặc ứng dụng Google Analytics.
  - Claude đọc báo cáo qua trình duyệt tích hợp của ứng dụng Claude trên máy thầy (đã đăng nhập sẵn Google). Tài sản: a411389003p558315789. Khi thầy hỏi "báo cáo" thì vào đó lấy số liệu.
  - 7h31: Thời gian thực ghi nhận 1 người dùng (Việt Nam) – lượt thử của Claude. Báo cáo chuẩn có số sau khoảng 24 giờ.
  - 7h35: Theo lời thầy, đổi "Giữ lại dữ liệu" sự kiện từ 2 tháng lên 14 tháng (dữ liệu người dùng vốn 14 tháng). Có hiệu lực sau 24 giờ.
- 10/10/2026 (7h): Thầy chọn Google Analytics để đếm lượt truy cập và thời gian truy cập. Đã gắn `thong-ke.js` vào trang chủ và 12 trang bài học (chưa đếm vì chưa có mã). Đã thử với mã giả: trang gọi đúng Google Analytics, 0 lỗi.
- 10/10/2026 (7h): Kiểm tra định kì: 4 bài, 16/16 đường dẫn (12 trang bài học + 4 phiếu PDF) đều mở được, trang chủ 0 lỗi, ô liên hệ hiển thị. Chụp lại ảnh xem trước bài giảng Bài 16 (bỏ ảnh cũ còn nút "GIÁO VIÊN").
- 10/10/2026 (0h): Đưa đủ 4 phần Bài 8 – Toán 12 (Biểu thức toạ độ của các phép toán vectơ) lên web từ gói `T12_Bai8_BieuThucToaDo.zip` (bản HS). Áp lớp sửa chung; nới khoảng cách để nhãn "Bản chờ hoàn thiện" không sát chữ z ở bìa (cả bản GV, HS trong gói); ảnh xem trước; thử 3 khổ màn hình: 0 lỗi JS, không tràn ngang.
- 09/10/2026 (22h): Ô liên hệ nhỏ đặt ngay dưới ảnh thầy ở đầu trang (điện thoại: dưới ô tìm kiếm vì ảnh ẩn): câu "Liên hệ với thầy khi cần thiết" + 2 nút nhỏ Zalo (0978577983, mở zalo.me) và Gmail (quangphonsn@gmail.com). Số và Gmail lưu dạng mã hoá trong khối `CONTACT` của index.html (đảo ngược chuỗi rồi base64). Đã bỏ ô liên hệ to ở chân trang.
- 09/10/2026 (22h): Gắn phiếu PDF Bài 7 (bản HS, 6 trang) từ gói `T12_Bai7_HeTrucToaDo.zip`. 3 file HTML trong gói trùng khớp bản đã lên web. Đối chiếu SGK Toán 12 tập một (trang 62, Hình 2.39): N(2; 5; 4) ĐÚNG — gỡ cảnh báo của gói. Sửa luôn nhãn đè chữ z ở bìa trên 2 artifact bài giảng Bài 7 (GV, HS) trên Claude.
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
