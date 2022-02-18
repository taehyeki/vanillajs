// Time Until Christmas!
// 오늘의 강의: 바닐라JS로 크롬앱 만들기: From #5.0 to #5.3
// 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하세요.
// 제출기간: 익일 오전 6시까지
// Challenge goals:
// Date와setInterval함수들을 사용해 크리스마스까지 며칠이 남았는지 알려주는 시계를 만드세요. (12월 25일)

// hint!
// Date 생성자 [new Date()] : 시간을 나타내는 Date 객체를 생성하는 생성자입니다. Date 객체를 사용하기 위해 먼저 선언해 주어야 합니다.
// 참고 자료 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date

// Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수입니다.
// 참고 자료 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

// Math.floor : 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수입니다.
// 참고 자료 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

// setInterval : 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수입니다.
// 참고 자료 https://developer.mozilla.org/en-US/docs/Web/API/setInterval

const clockTitle = document.querySelector(".js-clock");

const untilEve = new Date(2022, 11, 24);
const dDay = () => {
  now = new Date();
  secondUntilEve = untilEve - now;
  secondUntilEve /= 1000;
  day = Math.floor(
    (secondUntilEve % (60 * 60 * 24 * 365)) / (60 * 60 * 24)
  ).toString();
  hour = Math.floor((secondUntilEve % (60 * 60 * 24)) / (60 * 60))
    .toString()
    .padStart(2, "0");
  minuate = Math.floor((secondUntilEve % (60 * 60)) / 60)
    .toString()
    .padStart(2, "0");
  second = Math.floor(secondUntilEve % 60)
    .toString()
    .padStart(2, "0");

  clockTitle.innerText = `${day}d ${hour}h ${minuate}m ${second}s`;
};
dDay();
setInterval(dDay, 1000);
