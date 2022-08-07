# portfolio 사이트 제작

<br/>

## 사이트 기획
>블루 & 화이트 톤을 이용해 깔끔한 느낌을 주었고, ui/ux를 해치지 않는 선에서 동적인 요소를 적절히 활용하여 제작하였습니다.<br/> 
특히 ux적인 부분을 고려해서 사용자의 클릭 수를 최대한 줄이고 한눈에 볼 수 있도록 원페이지로 구성했으며,
주관적인 내용은 전부 배제하고 중요도가 낮은 내용들은 모달창으로 빼서 원하는 사람들만 선택적으로 볼 수 있도록 제작하였습니다.<br/>
반응형은 아직 구현되어있지 않습니다.

<br/>

-----

<br/>

## 개발 환경

### front
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)

### back
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

### deploy
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=white)

-----
<br/>

## 구현한 스크립트 기능

+ __Top, About__
  + Vanilla JS로 요소의 위치로 이동하는 네비게이션 버튼 구현
  + Vanilla JS로 특정 위치까지 요소 position: fixde 후 absolute로 전환 
  + Vue 템플릿 구문을 이용한 모달창 구현
  + TweenMax, GSAP의 ScrollTrigger를 이용하여 스크롤할때만 애니메이션이 실행되도록 구현
  
<br/>

+ __Main project__
  + 동영상 재생, 멈춤 구현
  
<br/>

+ __Side project__
  + Vanilla JS로 tab메뉴 클릭시 버튼에 .active추가/제거 
  + 탭메뉴 하위 컨텐츠는 버튼에 주어진 각각의 id를 switch 조건문으로 특정 id일때 type1, type2의 class .on을 추가/제거
  
<br/>

+ __Blog posting__
  + 블로그 포스팅 웹 크롤링
    + express로 서버를 열어서 api통신
    + axios와 cheerio로 원하는 주소와 요소를 배열에 저장
    + 6개만 가져오도록 slice()메서드로 자르기

<br/>

+ __Contact__
  + Vanilla JS로 clientX, clientY 좌표값을 이용해 마우스 커서의 위치를 구함
  + mousemove 이벤트핸들러를 이용하여 요소의 style.transform에 값을 계속적으로 변경하여 마우스 위치에 반응하는 원 제작
