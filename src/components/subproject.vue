<template>
  <div class="sub">
    <section class="sub_wrap">
      <h1>WEB PUBLISHER &amp;&amp; WEB FRONT-END DEVELOPER</h1>
      <h2 class="eng">SUB PROJECT</h2>
      <ul class="tab_ul eng">
        <li class="tab_li active">All</li>
        <li class="tab_li">Web clone</li>
        <li class="tab_li">Toy project</li>
      </ul>
      <ul class="tab_cont_ul">
        <li class="tab_cont_li">
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
          
        </li>
        <li class="tab_cont_li">
          <img src="../static/img/sub/daejeon.jpg" alt="memo image">
          <div class="hov_txt">
            <span class="sub_title"><em>나만의 메모장</em></span>
            <span class="sub_stack"><em>#html #css #js #node.js #mysql</em></span>
            <span class="sub_desc">
              node.js와 mysql을 이용한 기본 CRUD 메모장입니다.
            </span>
            <div class="hov_btn_wrap clone">
              <div class="go_site"><a href="">Main</a></div>
              <div class="go_sub small"><a href="">Sub</a></div>
              <div class="go_github small"><a href="">Git</a></div>
          </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'sub-page',
  props: {
  
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
}

.sub_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
}

h1{
  font-family: "Montserrat";
  display: inline-block;
  color: #fff;
  white-space: nowrap;
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
  position: relative;
  overflow: hidden;
  width: calc(25% - 20px);
  height: 283px;
  margin: 10px;
}

.tab_cont_li img{
  width: 100%;
  height: auto;
}

.tab_cont_li .hov_txt{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 80%);
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
