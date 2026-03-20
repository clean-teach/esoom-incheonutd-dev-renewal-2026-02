(function () {
  /** "공유하기 버튼 영역"들 선택자 */
  const $shareButtonWraps = document.querySelectorAll('.share-button-wrap');

  $shareButtonWraps.forEach((item) => {
    /** "공유 버튼 영역 여/닫기 버튼 선택자" */
    const $shareButton = item.querySelector('.share-button');

    $shareButton.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
})();
