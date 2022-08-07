<template>
  <div id="sub" class="sub">
    <section class="sub_wrap">
      <div class="txtani_wrap">
      <span class="txtani_li">
        <h1>WEB PUBLISHER &amp;&amp; WEB FRONT-END DEVELOPER</h1>
        <h1>WEB PUBLISHER &amp;&amp; WEB FRONT-END DEVELOPER</h1>
      </span>
      <span class="txtani_wrap">
        <h1>WEB PUBLISHER &amp;&amp; WEB FRONT-END DEVELOPER</h1>
        <h1>WEB PUBLISHER &amp;&amp; WEB FRONT-END DEVELOPER</h1>
      </span>
      </div>
      <h2 class="eng">Side project</h2>
      <ul class="tab_ul eng">
        <li @click="subTab" id="all" class="tab_li active">All</li>
        <li @click="subTab" id="clone" class="tab_li">Web clone</li>
        <li @click="subTab" id="toy" class="tab_li">Toy project</li>
      </ul>
      <ul class="tab_cont_ul">
        <!-- <li class="tab_cont_li on type2">
          <img src="../static/img/sub/daejeon.jpg" alt="memo image">
          <div class="hov_txt">
            <span class="sub_title"><em>나만의 메모장</em></span>
            <span class="sub_stack"><em>#html #css #js #node.js #mysql</em></span>
            <span class="sub_desc">
              node.js와 mysql을 이용한 기본 CRUD 메모장입니다.
            </span>
            <div class="hov_btn_wrap">
              <div class="go_site"><a href="">Go to site</a></div>
              <div class="go_github"><a href="">Go github</a></div>
            </div>
          </div>
        </li> -->
        <li class="tab_cont_li on type2">
          <img src="../static/img/sub/todo.jpg" alt="todo image">
          <div class="hov_txt">
            <span class="sub_title"><em>To do list</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              할일을 추가하고 삭제할 수 있는 to do list입니다.
            </span>
            <div class="hov_btn_wrap">
              <div class="go_site"><a href="https://sott120.github.io/todolist/">Go to site</a></div>
              <div class="go_github"><a href="https://github.com/sott120/todolist">Go github</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on type1">
          <img src="../static/img/sub/daejeon.jpg" alt="memo image">
          <div class="hov_txt">
            <span class="sub_title"><em>대전문화재단</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              대전문화재단 웹사이트 클론코딩입니다.
            </span>
            <div class="hov_btn_wrap clone"> 
              <div class="go_site"><a href="http://pki0120.dothome.co.kr/dcaf/index.html" target="_blank">Main</a></div>
              <div class="go_sub small"><a href="http://pki0120.dothome.co.kr/dcaf/sub/sub.html" target="_blank">Sub</a></div>
              <div class="go_github small"><a href="https://github.com/sott120/Daejeon-culture-foundation" target="_blank">Git</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on type1">
          <img src="../static/img/sub/pollex.jpg" alt="pollex zone image">
          <div class="hov_txt">
            <span class="sub_title"><em>Pollex zone</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              폴렉스존 웹사이트 클론코딩입니다.
            </span>
            <div class="hov_btn_wrap clone">
              <div class="go_site"><a href="http://pki0120.dothome.co.kr/pollexzone/index.html" target="_blank">Main</a></div>
              <div class="go_sub small"><a href="http://pki0120.dothome.co.kr/pollexzone/sub/intro.html" target="_blank">Sub</a></div>
              <div class="go_github small"><a href="https://github.com/sott120/pollex-zone" target="_blank">Git</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on type1">
          <img src="../static/img/sub/garden.jpg" alt="싱그러운집 image">
          <div class="hov_txt">
            <span class="sub_title"><em>싱그러운집</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              싱그러운집 웹사이트 클론코딩입니다.
            </span>
            <div class="hov_btn_wrap clone">
              <div class="go_site"><a href="http://pki0120.dothome.co.kr/s_garden/index.html" target="_blank">Main</a></div>
              <div class="go_sub small"><a href="http://pki0120.dothome.co.kr/s_garden/sub/community.html" target="_blank">Sub</a></div>
              <div class="go_github small"><a href="https://github.com/sott120/s-house-garden" target="_blank">Git</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on type2">
          <img src="../static/img/sub/card2.jpg" alt="등록증만들기 image">
          <div class="hov_txt">
            <span class="sub_title"><em>나만의 등록증 만들기</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              나만의 등록증을 만들고 jpg파일로 저장할 수 있는 사이트입니다.
            </span>
            <div class="hov_btn_wrap">
              <div class="go_site"><a href="https://sott120.github.io/card/" target="_blank">Go to site</a></div>
              <div class="go_github"><a href="https://github.com/sott120/card" target="_blank">Go github</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on type2">
          <img src="../static/img/sub/rcp.jpg" alt="가위바위보 image">
          <div class="hov_txt">
            <span class="sub_title"><em>컴퓨터와 가위바위보</em></span>
            <span class="sub_stack"><em>#html #css #js</em></span>
            <span class="sub_desc">
              컴퓨터와 가위바위보 게임을 할 수 있는 사이트입니다.
            </span>
            <div class="hov_btn_wrap">
              <div class="go_site"><a href="https://sott120.github.io/RPS/" target="_blank">Go to site</a></div>
              <div class="go_github"><a href="https://github.com/sott120/RPS" target="_blank">Go github</a></div>
            </div>
          </div>
        </li>
        <li class="tab_cont_li on smile">
          <img src="../static/img/sub/smile.png" alt="빈공간 image">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sub-page',
  props: {
  },
  methods: {
    subTab : function(e){
      // 탭이름
      const tabLi = document.querySelectorAll('.tab_li');
      const type1 = document.querySelectorAll('.type1');
      const type2 = document.querySelectorAll('.type2');
      const contLi = document.querySelectorAll('.tab_cont_li');
      tabLi[0].classList.remove('active');
      tabLi[1].classList.remove('active');
      tabLi[2].classList.remove('active');
      const targetId = e.currentTarget;
      targetId.classList.add('active');
      // 탭컨텐츠
      contLi.forEach(function (el) {
          el.classList.add('on');
      });
      let tabId = targetId.id;
      switch (tabId) {
          case 'clone':
              type2.forEach(function (el) {
                  el.classList.remove('on');
              });
              break;
          case 'toy':
              type1.forEach(function (el) {
                  el.classList.remove('on');
              });
              break;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sub{
  width: 100%;
  height: 100%;
  background-color: #1e39b4;
  padding-bottom: 400px;
  overflow: hidden;
  scroll-margin: -400px
}

.sub_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
}

.txtani_wrap{
  white-space: nowrap;
}

.txtani_li{
  display: inline-block;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: Marquee;
  animation-name: Marquee;
  animation-duration: 40s;
}
@-webkit-keyframes Marquee {
    from {-webkit-transform: translateX(0%);transform: translateX(0%);}
    to {-webkit-transform: translateX(-100%);transform: translateX(-100%);}
}
@keyframes Marquee {
    from {-webkit-transform: translateX(0%);transform: translateX(0%);}
    to {-webkit-transform: translateX(-100%);transform: translateX(-100%);}
}

h1{
  font-family: "Montserrat";
  display: inline;
  color: #fff;
  white-space: nowrap;
  margin-left: 50px;
}

h2{
  color: #fff;
  text-align: center;
  padding: 200px 0 80px;
}

em{
  font-weight: 500;
}

.tab_ul{
  color: #fff;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}

.tab_li{
    padding: 10px 0;
    margin: 0 20px;
    font-size: 18px;
    width: 10%;
    text-align: center;
    cursor: pointer;
}

.tab_li.active{
  background-color: #000;
}

.tab_cont_ul{
  width: calc(100% + 20px);
  margin-left: -10px;
  display: flex;
  flex-wrap: wrap;
}

.tab_cont_li {
  display: none;
  position: relative;
  overflow: hidden;
  width: calc(25% - 20px);
  height: 283px;
  margin: 10px;
  background-color: #fff;
  transition: all .3s ease-in-out;
}

.tab_cont_li.on{
  display: block;
}

.tab_cont_li img{
  width: 100%;
  height: auto;
}

.tab_cont_li.smile{
  background-color: transparent;
}

.tab_cont_li.smile img{
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tab_cont_li .hov_txt{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(229, 240, 255, 80%);
  padding: 40px 30px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.tab_cont_li:hover .hov_txt{
  opacity: 1;
}

.hov_txt span{
  display: block;
  padding-bottom: 10px;
}

.hov_txt .sub_title{
  font-size: 24px;
  padding-bottom: 5px;
}

.hov_txt .sub_stack{
  font-size: 18px;
}

.hov_btn_wrap{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
}

.hov_btn_wrap .go_site{
  width: 50%;
  height: 62px;
  background-color: #000;
}

.hov_btn_wrap .go_github{
  width: 50%;
  height: 62px;
  background-color: #0000ee;
}
.hov_btn_wrap.clone .go_github{
  width: 25%;
  height: 62px;
  background-color: #0000ee;
}

.hov_btn_wrap .go_sub{
  width: 25%;
  height: 62px;
  background-color: #fff;
}

.hov_btn_wrap .go_site a,
.hov_btn_wrap .go_sub a,
.hov_btn_wrap .go_github a{
  position: relative;
  font-family: "Montserrat";
  font-weight: 400;
  color: #fff;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 62px;
}

.hov_btn_wrap .go_sub a{
  color: #000;
}

.hov_btn_wrap > .go_site a::after,
.hov_btn_wrap > .go_github a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 12px;
  bottom: 15px;
  left: 5px;
  background-image: url(../static/img/icon/btn_arrow_big.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateX(-20px);
  transition: transform 0.3s, opacity 0.3s ease-in-out;
}
.hov_btn_wrap > .go_site:hover a::after,
.hov_btn_wrap > .go_github:hover a::after {
  opacity: 1;
  transform: translateX(0);
}

.hov_btn_wrap > div.go_sub a::after,
.hov_btn_wrap.clone > div.go_github a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 12px;
  bottom: 15px;
  left: 6px;
  background-image: url(../static/img/icon/btn_arrow_small.png);
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0;
  transform: translateX(-20px);
  transition: transform 0.3s, opacity 0.3s ease-in-out;
}
.hov_btn_wrap > div.go_sub:hover a::after,
.hov_btn_wrap.clone > div.go_github:hover a::after {
  opacity: 1;
  transform: translateX(0);
}
</style>
