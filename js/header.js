(function () {
  /** 스크롤 방향을 감지하기 위한 변수 */
  let lastScrollTop = 0;
  /** header 선택자 */
  const $header = document.querySelector('#header');
  /** 전체 메뉴 버튼 선택자 */
  const $totalMenuButton = document.querySelector('#totalMenuButton');
  /** 전체 메뉴 선택자 */
  const $fullMenu = document.querySelector('#fullMenuWrap');
  /** 전체 메뉴(PC 버전) 선택자 */
  const $siteMap = document.querySelector('#siteMap');
  /** 전체 메뉴(PC 버전) 닫기 버튼 선택자 */
  const $siteMapCloseButton = $siteMap.querySelector('.close-button');
  /** 전체 메뉴(모바일 버전) 선택자 */
  const $mobileNav = document.querySelector('#mobileNav');
  /** 전체 메뉴(모바일 버전) 닫기 버튼 선택자 */
  const $mobileNavCloseButton = $mobileNav.querySelector('.btn-wrap .close');
  /** 스크롤 위로 가기 버튼 선택자 */
  const $scrollTopButton = document.querySelector('.scroll-top-button');
  /** Header 메뉴 - 유틸리티 메뉴 선택자 */
  const $utilNav = $header.querySelector('.util-nav');
  /** Header 메뉴 - 유틸리티 메뉴 - "Ticket" 드롭다운 영역 선택자 */
  const $ticketArea = $utilNav.querySelector('.ticket .drop-box');
  /** Header 메뉴 - 유틸리티 메뉴 - "Ticket" 드롭다운 영역 선택자 */
  const $userArea = $utilNav.querySelector('.user .drop-box');

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
    $fullMenu.classList.toggle('active');
  });
  $siteMapCloseButton.addEventListener('click', () => {
    $fullMenu.classList.remove('active');
  });
  $mobileNavCloseButton.addEventListener('click', () => {
    $fullMenu.classList.remove('active');
  });
  $scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  $utilNav
    .querySelector('.ticket>button')
    .addEventListener('click', (event) => {
      $userArea.classList.remove('view');
      $ticketArea.classList.toggle('view');
    });
  $utilNav.querySelector('.user>button').addEventListener('click', (event) => {
    $ticketArea.classList.remove('view');
    $userArea.classList.toggle('view');
  });
})();
