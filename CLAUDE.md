# Sổ quản lý website Mr Black NBK

Cập nhật: 11/10/2026 (13h)

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
| Toán 6 – Bài 17. Phép chia hết. Ước và bội của một số nguyên | ✅ (bản chờ gắn lời giảng, 18 slide) | ✅ (17 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều | ✅ (bản chờ gắn lời giảng, 17 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | ✅ (bản chờ gắn lời giảng, 18 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 6 – Bài 20. Chu vi và diện tích của một số tứ giác đã học | ✅ (bản chờ gắn lời giảng, 20 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (2 trang, bản HS) | ✅ (12 câu) |
| Toán 11 – Bài 10. Đường thẳng và mặt phẳng trong không gian | ✅ (bản chờ gắn lời giảng, 37 slide) | ✅ (21 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 11. Hai đường thẳng song song | ✅ (bản chờ gắn lời giảng, 25 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (13 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 12. Đường thẳng và mặt phẳng song song | ✅ (bản chờ gắn lời giảng, 23 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (12 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 13. Hai mặt phẳng song song | ✅ (bản chờ gắn lời giảng, 36 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (11 trang, bản HS) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 14. Phép chiếu song song | ✅ (bản chờ gắn lời giảng, 25 slide) | ✅ (20 nhiệm vụ + 1 thử thách) | ✅ (12 trang, bản HS, đã sửa 2 lỗi) | ✅ (16 câu, đề A/B) |
| Toán 11 – Bài 15. Giới hạn của dãy số | ✅ (bản chờ gắn lời giảng, 38 slide) | ✅ (18 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (15 câu, đề A/B) |
| Toán 11 – Bài 16. Giới hạn của hàm số | ✅ (bản chờ gắn lời giảng, 44 slide) | ✅ (16 nhiệm vụ + 1 thử thách) | ✅ (9 trang, bản HS) | ✅ (15 câu, đề A/B) |
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
- Bài 7, 8, 9, 10 – Toán 12: khi có ghi âm thì thay bài giảng và xoá `chuaGiong`.
- Bài 10–16 – Toán 11: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bài 17, 18, 19, 20 – Toán 6: khi có ghi âm thì thay bài giảng (giữ tên file), chụp lại ảnh xem trước và xoá `chuaGiong`.
- Bổ sung HSA.
- Mua và gắn tên miền mrblackmath.vn.

## Nhật ký
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
