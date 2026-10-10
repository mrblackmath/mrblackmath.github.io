# Sổ quản lý website Mr Black NBK

Cập nhật: 10/10/2026 (22h)

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

## Các bài đã có
| Bài | Bài giảng | Luyện tập | Phiếu PDF | Kiểm tra |
|---|---|---|---|---|
| Toán 6 – Bài 16. Phép nhân số nguyên | ✅ | ✅ | ✅ | ✅ |
| Toán 12 – Bài 6. Vectơ trong không gian | ✅ (bản chờ gắn lời giảng, 56 slide) | ✅ (27 nhiệm vụ + 1 thử thách) | ✅ (5 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 7. Hệ trục toạ độ trong không gian | ✅ (bản chờ gắn lời giảng, 29 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (6 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 8. Biểu thức toạ độ của các phép toán vectơ | ✅ (bản chờ gắn lời giảng, 30 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 12 – Bài 9. Khoảng biến thiên và khoảng tứ phân vị | ✅ (bản chờ gắn lời giảng, 22 slide) | ✅ (14 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (13 câu, đề A/B) |
| Toán 12 – Bài 10. Phương sai và độ lệch chuẩn | ✅ (bản chờ gắn lời giảng, 19 slide) | ✅ (11 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (13 câu, đề A/B) |

## Lớp sửa chung đã áp dụng cho mọi trang bài học (áp dụng tiếp cho bài mới)
- Bản dành cho học sinh: ẩn nút "Giáo viên", ẩn "Làm lại từ đầu" của GV.
- iPhone: xin phiên âm thanh `playback` (dùng `navigator.audioSession`) kèm âm thanh rỗng giữ phiên, để vẫn nghe được khi máy đang ở chế độ im lặng.
- Nút toàn màn hình: iPhone không hỗ trợ nên hiện hướng dẫn "Ẩn thanh công cụ / Thêm vào MH chính" (hàm `window.mbFsHint`, gắn cuối trang cùng nút ⌂).
- Thẻ meta ứng dụng (apple-mobile-web-app-*, apple-touch-icon `../icon.png`) trong `<head>`.
- Khi mở như ứng dụng (standalone): có nút ⌂ về trang chủ; bài học mở ngay trong ứng dụng.
- Đường dẫn chéo giữa các phần dùng tên file tương đối, không dùng link claude.ai.
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
- Bài 7, 8, 9, 10 – Toán 12: khi có ghi âm thì thay bài giảng và xoá `chuaGiong`.
- Bổ sung HSA.
- Mua và gắn tên miền mrblackmath.vn.

## Nhật ký
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
