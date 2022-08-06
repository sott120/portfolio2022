<template>
  <div id="contact" class="contact_wrap">
    <div class="circle circle_01">
      <span></span>
    </div>
    <div class="circle circle_02">
      <span></span>
    </div>
    <div class="circle circle_03">
      <span></span>
    </div>
    <div class="circle circle_04">
      <span></span>
    </div>
    <div class="circle circle_05">
      <span></span>
    </div>
    <div class="circle circle_06">
      <span></span>
    </div>
    <h2 class="eng">Contact me!</h2>
    <div class="arw_wrap">
      <img src="../static/img/icon/arrow_down.png" alt="down arrow">
      <img src="../static/img/icon/arrow_down.png" alt="down arrow">
    </div>
    <article class="cont_txt">
      <span>시간내어 읽어주셔서 감사드립니다.</span>
      <span>신입 웹 프론트엔드 개발자 <em>박소연</em>이었습니다.</span>
      <h4 class="eng">psy_sott120@naver.com</h4>
    </article>
  </div>
  <!-- <canvas id="canvas"></canvas> -->
  <footer>
    <div class="eng top_wrap">
      <div class="progress_wrap">
        <div id="progress_bar" class="progress_bar"></div>
      </div>
      <div class="top_btn" >
        <span id="btn_scroll" class="on">SCROLL</span>
        <span @click="goTop" id="btn_top">GO TOP</span>
      </div>
    </div>


    <div class="ft_wrap">
      <ul>
        <li @click="scrollNav2(event,'about')">About me</li>
        <li @click="scrollNav2(event,'main')">Main project</li>
        <li @click="scrollNav2(event,'sub')">Sub project</li>
        <li @click="scrollNav2(event,'blog')">New post</li>
        <li @click="scrollNav2(event,'contact')">Contact</li>
      </ul>
      <div class="icon_wrap">
        <a href="https://github.com/sott120" target='_blank'>
          <img src="../static/img/icon/github_white.svg" alt="깃허브 아이콘">
        </a>
        <a href="https://sott120.tistory.com/" target="_blank">
          <img src="../static/img/icon/tistory.svg" alt="티스토리 아이콘">
        </a>
      </div>  
      <p>
        © 2022 Soyeon Park - All rights reserved. <br>
        본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로 제작되었습니다.
      </p>
    </div>
  </footer>
</template>

<script>
// import gsap from 'gsap'
// import ScrollTrigger from 'gsap/ScrollTrigger'
export default {
  name: 'contact-page',
  props: {
  },
  mounted: function() {
    // this.scrollCircle();
  },
  created: function () {
    window.addEventListener('scroll', this.scrollE);
    window.addEventListener('scroll', this.setProgress);
    window.addEventListener('mousemove', this.circleMove);
  },
  methods: {
     scrollNav2: function(evt,secId){
      const section = document.getElementById(secId);
      if(section){
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
    setProgress: function(){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("progress_bar").style.height = scrolled + "%";
    },
    goTop: function(e){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    },
    scrollE: function(){
      let scroll = document.querySelector('#btn_scroll');
      let top = document.querySelector('#btn_top');
      if (window.scrollY >= 100) {
        top.classList.add('on');
        scroll.classList.remove('on');
    } else {
        top.classList.remove('on');
        scroll.classList.add('on');
    }
    },
    // scrollCircle : function() {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".circle_01", {scrollTrigger: ".circle_01", css:{scale: 1}, duration: 1})
    // gsap.to(".circle_02", {scrollTrigger: ".circle_02", css:{scale: 1}, duration: 1})
    // gsap.to(".circle_03", {scrollTrigger: ".circle_03", css:{scale: 1}, duration: 1})
    // gsap.to(".circle_04", {scrollTrigger: ".circle_04", css:{scale: 1}, duration: 1})
    // gsap.to(".circle_05", {scrollTrigger: ".circle_05", css:{scale: 1}, duration: 1})
    // gsap.to(".circle_06", {scrollTrigger: ".circle_06", css:{scale: 1}, duration: 1})
    // },
    circleMove: function(e){
      console.log(e.clientY)
      let circle = document.getElementsByClassName("circle");
      let strength = 0.05;
      circle[0].style.transform = `translate( calc(${e.clientX} * ${strength}px), calc(${e.clientY} * ${strength}px))`;
      circle[1].style.transform = `translate( calc(${e.clientX} * -${strength}px), calc(${e.clientY} * -${strength}px))`;
      circle[2].style.transform = `translate( calc(${e.clientX} * -${strength}px), calc(${e.clientY} * ${strength}px))`;
      circle[3].style.transform = `translate( calc(${e.clientX} * ${strength}px), calc(${e.clientY} * -${strength}px))`;
      circle[4].style.transform = `translate( calc(${e.clientX} * ${strength}px), calc(${e.clientY} * ${strength}px))`;
      circle[5].style.transform = `translate( calc(${e.clientX} * -${strength}px), calc(${e.clientY} * -${strength}px))`;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact_wrap{
  position: relative;
  text-align: center;
  scroll-margin: -300px;
  overflow: hidden;
}

.circle{
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}

.circle_01{
  top: 3.8%;
  left: 8.1%;
  width: 243px;
  height: 243px;
}
.circle_02{
  top: 20.8%;
  left: 80%;
  width: 500px;
  height: 500px;
}
.circle_03{
  top: 60.8%;
  left: 37.1%;
  width: 243px;
  height: 243px;
}
.circle_04{
  top: 36.8%;
  left: 26.1%;
  width: 130px;
  height: 130px;
}
.circle_05{
  top: 90.8%;
  left: 74.1%;
  width: 243px;
  height: 243px;
}
.circle_06{
  top: 70.8%;
  left: -4.1%;
  width: 500px;
  height: 500px;
}

.circle span{
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #1e3ab4ee;
}

h2{
  text-align: center;
  padding: 400px 0 80px;
}

.arw_wrap{
  margin: 50px auto 0;
}

.arw_wrap img{
  display: block;
  margin: auto;
}

.arw_wrap img:first-child{
  opacity: 0.5;
}

.cont_txt{
  color: #000;
  padding: 200px 0 400px;
  display: block;
}

.cont_txt span{
  display: block;
  margin: auto;
  font-size: 16px;
  font-weight: 400;
}

em{
  font-weight: 600;
}

h4{
  display: inline;
  font-size: 48px;
  padding-right: 54px;
  background-image: url(../static/img/icon/smile.svg);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 45px;
}

footer{
  width: 100%;
  background-color: #1E39B4;
  padding: 80px 0 40px;
}

.top_wrap{
  position: fixed;
  right: 57px;
  bottom: 20px;
  z-index: 500;
}

.progress_wrap{
  width: 3px;
  height: 208px;
  margin: 0 auto 127px;
  position: relative;
  background-color: #ececec;
}

.progress_bar{
  display: block;
  position: relative;
  width: 100%;
  background: #0078d7;
}

.progress_bar::after{
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: 14px;
  height: 13px;
  background-image: url(../static/img/icon/bluehrt.png);
  background-size: 14px auto;
  background-position: bottom;
  background-repeat: no-repeat;
}

.top_btn{
  display: block;
  width: 60px;
  height: 30px;
  position: absolute;
  top: 212px;
  left: 50%;
  font-size: 14px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #c7c7c7;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: center left;
  -ms-transform-origin: center left;
  transform-origin: center left;
}

.top_btn span{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  color: #000;
  -webkit-transition: opacity 300ms;
  transition: opacity 300ms;
  cursor: pointer;
  font-weight: 700;
}

.top_btn span.on{
  opacity: 1;
  visibility: visible;
}

.ft_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
  color: #fff;
}

.ft_wrap li{
  padding-bottom: 10px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat";
  cursor: pointer;
}

.ft_wrap p{
  font-size: 14px;
  font-weight: 300;
}

.icon_wrap{
  margin: 30px 0 20px;
}

.icon_wrap img{
  width: 37px;
  padding-right: 15px;
}
</style>
