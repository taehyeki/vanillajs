# 노마드 코더 바닐라 JS를 수강하고 챌린지 결과물입니다.

:seedling: 전에 이 강의를 수강하였지만 JS를 한 동안 사용하지 않아 감을 기르기 위해서 재수강 하였고 , 그때는 단순히 강의만 듣고 챌린지 과제는 하지 않았습니다. 하지만 과제를 함으로써 저의 실력을 확인할 수 있었고, 단순히 저건 저렇게 하면 되겠네 라고 넘겼던 것들이 실제로 해보니까 시간이 걸리고 어려운 것들이 꽤 많았습니다. 따라서 코드를 보기만 하고 넘기지 않고 한 번이라도 더 쳐보고 확인하는 습관을 들여야겠습니다.

### 이 과제에 사용한 언어는 다음과 같습니다.
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">


### 다음은 구성한 화면 입니다.  
![image](https://user-images.githubusercontent.com/79139076/154630940-978cded0-5559-46f3-8da8-59ffd774ca63.png)

js폴더는 5개의 파일로 구성되어있습니다.  
배경화면을 랜덤으로 보여주는 background.js,  
시간을 보여주는 clock.js,  
실시간 코로나 확진자를 보여주는 corona.js,  
이름을 적으면 인사해주는 greeting.js,  
오늘 할일을 나타내는 todo.js,  
현재 날씨와 미세먼지의 상태를 나타내주는 weather.js 이렇게 구성하였습니다.  
  
먼저 우측 상단을 보시면 이름을 적으라는 input창이 있습니다. 
![image (1)](https://user-images.githubusercontent.com/79139076/154631613-6de7c0be-8e45-4167-8381-9fd12a8ccbb8.png)

이름을 적으면 localStorage에 그 값을 넣어 새로고침을 해도 사라지지 않고 읽어 오도록 하였습니다.  
  
좌측 상단을 보시면 현재 날짜와, 충청북도(제가 사는 지역), 전국의 코로나 확진자 수를 나타내도록 표현하였습니다.
이는 오픈API를 활용하여 값을 가져왔습니다.
  
또 가운데를 보시면 시간이 흘러가고 있습니다. setInterval로 초마다 업데이트 되도록 하였고, 그 밑에보이는 문구도 현재 제가 살고있는 곳의 기온과, 미세먼지 상태를 받아옵니다.
이를 통해서 미세먼지의 상황에따라 문구가 달라지도록 5가지를 설정하였습니다. 

![image (2)](https://user-images.githubusercontent.com/79139076/154632061-017305f3-20ae-4183-b45f-a35b8afdf34f.png)
가운데를 보시면 TO DO LIST를 만들었습니다. 이 역시 값을 localStorage에 저장하여 새로고침하여도 사라지지 않도록 하였습니다. localStroage를 사용하면서 통신을 학 위해 JSON을 사용해야 한다는 것을 배울 수 있었습니다.
  
마지막으로 맨 아래에 보시면 동기부여가 되도록 공부명언을 넣었습니다. 7초마다 랜덤으로 바뀌도록 설정하였습니다.

  
그 외의 자세한 내용은 코드를 참조해주시기 바랍니다.

금방 끝날 줄 알았지만 전체적인 구획을 짜는 것, 중간에 오류를 해결하는 것에 시간이 꽤 걸렸습니다. 특히 css부분에서 시간이 많이걸려 이 부분을 공부해봐야겠다는 생각이 들었고 노마드 코더의 css강의를 들어볼 생각입니다. 
  
읽어주셔서 감사합니다.


