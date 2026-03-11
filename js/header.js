(function () {
  /** 스크롤 방향을 감지하기 위한 변수 */
  let lastScrollTop = 0;
  /** header 선택자 */
  const $header = document.querySelector('#header');
  /** 전체 메뉴 버튼 선택자 */
  const $totalMenuButton = document.querySelector('#totalMenuButton');
  /** 전체 메뉴 버튼 선택자 */
  const $siteMap = document.querySelector('#siteMap');
  /** 전체 메뉴 닫기 버튼 선택자 */
  const $totalMenuCloseButton = $siteMap.querySelector('.close-button');
  /** 스크롤 위로 가기 버튼 선택자 */
  const $scrollTopButton = document.querySelector('.scroll-top-button');

  /** 브라우저 전체 화면 스크롤 핸들러 */
  const handleScroll = (event) => {
    if (window.pageYOffset > 0) {
      if (lastScrollTop < window.pageYOffset) {
        $header.classList.add('active');
      } else {
        $header.classList.remove('active');
      }
    } else {
      $header.classList.remove('active');
    }
    lastScrollTop = window.pageYOffset;
  };

  window.addEventListener('scroll', handleScroll);

  $totalMenuButton.addEventListener('click', () => {
    $siteMap.classList.toggle('active');
  });
  $totalMenuCloseButton.addEventListener('click', () => {
    $siteMap.classList.remove('active');
  });
  $scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
