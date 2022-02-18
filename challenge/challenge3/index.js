// 오늘의 강의: 바닐라JS로 크롬앱 만들기: From #4.0 to #4.7
// 오늘은 2일 챌린지 입니다! 48시간을 드려요!

// 조건
// 0에서 사용자가 지정한 숫자까지의 범위에서 랜덤 한 숫자를 찾으세요. (범위는 0 이상 입력값 이하가 됩니다.)
// 범위에는 음수가 포함될 수 없습니다.
// 실시간으로 범위 값을 업데이트해야 합니다.
// 유저가 숫자를 선택한 후에 게임을 플레이할 수 있습니다.
// 유저에게 게임의 승패를 알려야 합니다.
// Hint:
// To learn how to find random numbers watch this lecture
// 제출방법
// 코딩 챌린지는 Code Sandbox 라는 툴을 이용하여 제출합니다.사용방법
// 제출기간: 수요일 오전 6시까지!

// TA's 힌트
// 랜덤 한 숫자를 찾는 방법은 이 강의에서 공부할 수 있습니다. -> #6.0
// <form> : 사용자로부터 입력을 받을 수 있는 입력 폼(form)을 정의할 때 사용하는 태그입니다. 입력된 정보를 제출할 수 있습니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/HTML/Element/form

// querySelector : CSS 선택자 형식을 사용해 HTML의 요소를 JS에서 사용하도록 가져올 수 있습니다. 다만, 같은 클래스명을 가지고 있다면 가장 첫 번째 요소만을 가지고 옵니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/API/Document/querySelector

// preventDefault() : 이벤트마다 가지고 있는 브라우저에서 발생하는 고유 동작을 막기 위해 사용할 수 있습니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault

// Math.ceil() : 주어진 숫자를 올림 하기 위해 사용하는 함수입니다. 숫자는 정수 형태로 반환됩니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil

// parseInt() : 주어진 문자열을 정수형으로 변환해서 반환하는 함수입니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt

// innerHTML : 요소 내에 포함된 HTML을 나타내는 프로퍼티입니다. HTML을 읽어들이거나 설정할 수 있습니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/API/Element/innerHTML

const btn = document.querySelector("#submitBtn");
const totalNum = document.querySelector("#totalNum");
const myNum = document.querySelector("#myNum");
const result = document.querySelector("#result");
const ranForm = document.querySelector("#ranForm");
ranForm.addEventListener("submit", (e) => {
  const total = parseInt(totalNum.value);
  const my = parseInt(myNum.value);
  const ranNum = Math.ceil(Math.random() * (total + 1)) - 1;
  if (my == ranNum) {
    result.innerHTML = `<p>You chose: ${my}, the machinde chose: ${ranNum}.</p><p style='font-weight: bold'>You won!</p>`;
  } else {
    result.innerHTML = `<p>You chose: ${my}, the machinde chose: ${ranNum}.</p><p style='font-weight: bold'>You lost!</p>`;
  }
  e.preventDefault();
});
