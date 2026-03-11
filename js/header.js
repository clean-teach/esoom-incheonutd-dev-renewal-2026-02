(function () {
  /** 스크롤 방향을 감지하기 위한 변수 */
  let lastScrollTop = 0;
  /** */
  const $header = document.querySelector('#header');

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
})();
