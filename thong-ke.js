/* Thống kê truy cập (Google Analytics 4) cho toàn bộ web Mr Black.
   Chỉ cần điền mã đo lường dạng G-XXXXXXXXXX vào ID dưới đây; để trống thì không đếm.
   Không bật Google Signals và quảng cáo cá nhân hoá; không thu tên, số điện thoại của học sinh. */
(function () {
  var ID = '';
  if (!ID) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
})();
