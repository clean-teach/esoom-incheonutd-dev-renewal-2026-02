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

// 1. 카카오 SDK 초기화 (발급받은 JavaScript 키 입력)
Kakao.init('3cc204d402e5d8b5e7c5b243cdb329c9');

// 2. 공유하기 함수
function shareKakaoMessage() {
  // const isMobile = /Android|iPhone|iPad/i.test(navigator.userAgent);

  // if (!isMobile) {
  //   alert('카카오톡 공유는 모바일에서 이용해주세요.');
  //   return;
  // }

  /** 현재 위치 한 url */
  const currentUrl = window.location.href;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '인천유나이티드 FX',
      description: '인천유나이티드 프로축구단',
      imageUrl: 'https://incheonutd.com/img/2018/emb/md/K18.png', // 80kb 이하, 최소 200x200px
      link: {
        mobileWebUrl: currentUrl,
        webUrl: currentUrl,
      },
    },
    buttons: [
      {
        title: '웹으로 이동',
        link: {
          mobileWebUrl: currentUrl,
          webUrl: currentUrl,
        },
      },
    ],
  });
}
