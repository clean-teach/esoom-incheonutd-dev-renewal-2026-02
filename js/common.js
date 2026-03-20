(function () {})();

/** 기타 공용 함수들 */

/** 현재 위치한 URL 클립보드에 복사 */
function copyCurrentUrl() {
  const url = window.location.href; // 현재 URL 가져오기
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 클립보드에 복사되었습니다!');
    })
    .catch((err) => {
      console.error('복사 실패: ', err);
    });
}
