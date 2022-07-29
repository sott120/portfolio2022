<template>
  <div class="contact_wrap">
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
  <footer>
    <div class="ft_wrap">
      <ul>
        <li><a href="">About me</a> </li>
        <li><a href="">Main project</a> </li>
        <li><a href="">Sub project</a> </li>
        <li><a href="">New post</a> </li>
        <li><a href="">Contact</a> </li>
      </ul>
      <div class="icon_wrap">
        <a href="https://github.com/sott120" target='_blank'>
          <img src="../static/img/icon/github_white.svg">
        </a>
        <a href="https://sott120.tistory.com/" target="_blank">
          <img src="../static/img/icon/tistory.svg">
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
export default {
  name: 'contact-page',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact_wrap{
  text-align: center;
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
  font-size: 18px;
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

.ft_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
  color: #fff;
}

.ft_wrap li{
  padding-bottom: 10px;
}

.ft_wrap li > a{
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  font-family: "Montserrat";
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
