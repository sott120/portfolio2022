<template>
  <div id="about" class="about_wrap">
    <div class="about_title">
      <section class="left_side">  
        <svg id="aboutSvg" style="enable-background:new 0 0 706.5 207.4;">
            <text x="5px" y="207px"  >ABOUT</text>
        </svg>
      </section>
      <section class="right_side">  
        <div class="iam_wrap">
          <h1 id="iam" class="me">ME.</h1>
        </div>
        <article  v-show="modal == true" class="info_modal">
          <div class="inner">
            <div @click="[modal = false, noScroll()]" class="close">
              <div class="close_l"></div>
              <div class="close_r"></div>
            </div>
            <div class="my">
              <h2 class="eng">I am</h2>
              <div class="modal_cont">
                <div class="txt_wrap">
                  <span><em>박소연  Soyeon Park</em></span>
                  <span>1997.01.20</span>
                  <span>서울특별시 성북구</span>
                </div>
                <div class="icon_wrap">
                  <a href="https://github.com/sott120" target='_blank'>
                  <img src="../static/img/icon/github_white.svg">
                  </a>
                  <a href="https://sott120.tistory.com/" target="_blank">
                  <img src="../static/img/icon/tistory.svg">
                  </a>
                </div>  
              </div>  
            </div>
            <div class="history">
              <h2 class="eng">History</h2>
              <ul class="modal_cont">
                <li>
                  <div class="his_num">
                    <span>2022.02 ~ 2022.08</span>
                    <span>(6개월)</span>
                  </div>
                  <div>
                    <span><em>그린컴퓨터아카데미</em></span>
                    <span>스마트 뷰(Vue) 활용 프론트엔드 웹개발자 양성 과정 수료</span>
                  </div>
                </li>
                <li>
                  <div class="his_num">
                    <span>2020.05 ~ 2021.06</span>
                    <span>(1년 2개월)</span>
                  </div>
                  <div>
                    <span><em>스마트웰컴퍼니 주식회사</em>  ( 아트팀 사원 / 웹디자이너 )</span>
                    <span>
                      카페24 기반 쇼핑몰 관리 및 배너, 이벤트페이지 디자인<br>
                      홈페이지 유지보수 작업과 광고 마케팅, seo등 유입 관리
                    </span>
                  </div>
                </li>
                <li>
                  <div class="his_num">
                    <span>2020.01 ~ 2020.04</span>
                    <span>(4개월)</span>
                  </div>
                  <div>
                    <span><em>주식회사 카우치포테이토</em> ( 인턴 / 디자인보조 )</span>
                    <span>
                      패키지 디자인 보조 및 모션그래픽 영상 제작<br>자사 캐릭터 드로잉, sns 업로드<br>
                      실습 인턴 계약만료 후 알바로 전환
                    </span>
                  </div>
                </li>
                <li>
                  <div class="his_num">
                    <span>2017.03 ~ 2020.02</span>
                  </div>
                  <div>
                    <span><em>인덕대학교 멀티미디어디자인학과 졸업</em> ( 4.0 / 4.5 )</span>
                  </div>
                </li>
                <li>
                  <div class="his_num">
                    <span>2013.03 ~ 2016.02</span>
                  </div>
                  <div>
                    <span><em>서울 성신여자고등학교 졸업</em></span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="awards">
              <h2 class="eng">Awards · Certificate</h2>
                <ul class="modal_cont">
                  <li>
                    <div class="awd_num">
                      <span>2021.09</span>
                      <span>(자격증)&nbsp;&nbsp;&nbsp;</span>
                    </div>
                    <div>
                      <span><em>한국산업인력공단</em></span>
                      <span>웹디자인기능사 최종합격</span>
                    </div>
                  </li>
                  <li>
                    <div class="awd_num">
                      <span>2019.12</span>
                      <span>(수상내역)</span>
                    </div>
                    <div>
                      <span><em>한국디자인트렌드학회</em></span>
                      <span>2019국제사이버디자인트렌드공모전 입선</span>
                    </div>
                  </li>
                  <li>
                    <div class="awd_num">
                      <span>2019.10</span>
                      <span>(수상내역)</span>
                    </div>
                    <div>
                      <span><em>인덕대학교</em></span>
                      <span>2019년 멀티미디어학과 졸업전시회 우수상</span>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </article>
        <article class="iam ml_122">
          <div class="title eng mb_80">
              <h2>I am</h2>
            <span @click="[modal = true, noScroll()]">more info</span>
          </div>
          <div class="iam_cont mt_80">
              <span>안녕하세요,</span><br>
              <span>예쁜것을 보고 사는것이 인생의 원동력인,</span>
              <span>
              디자인과 퍼블리싱, 개발 모두 소통이 가능한 인재 <em>박소연</em>입니다.
              </span>
          </div>
        </article>
        <article id="skills" class="skills ml_122">
          <div class="main_skill">
            <div class="title eng mb_80">
              <h2>Skills</h2>
            </div>
            <ul class="skills_cont mb_100 eng">
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/html.svg" height="33px">
                    <span>HTML5</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/css.svg" height="30px">
                    <span>CSS3</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/javascript.svg" height="30px">
                    <span>javascript</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/vue.svg" height="30px">
                    <span>Vue.js</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/nodejs.svg" height="30px">
                    <span>Node.js</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/database.svg" height="30px">
                    <span>MySQL</span>
                  </div>
                </li>
                <li>
                  <div class="skill_L">
                    <img src="../static/img/icon/git.svg" height="30px">
                    <span>Git</span>
                  </div>
                </li>
            </ul>
          </div>
          <div class="other_skill">  
            <div class="title eng mb_80">
              <h2>Others</h2>
            </div>
            <ul class="skill_others eng">
              <li>
                <span>Develop tools</span>
                <ul class="skills_cont mb_100 eng">
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/vscode.png" height="20px">
                      <span>vscode</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/heroku.svg" height="25px">
                      <span>heroku</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/firebase.svg" height="25px">
                      <span>firebase</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span>Design tools</span>
                <ul class="skills_cont mb_100 eng">
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/figma.png" height="20px">
                      <span>figma</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/ai.png" height="20px">
                      <span>Illustrator</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/ps.png" height="20px">
                      <span>Photoshop</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/ae.png" height="20px">
                      <span>After effects</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/id.png" height="20px">
                      <span>Indesign</span>
                    </div>
                  </li>
                  <li>
                    <div class="skill_L">
                      <img src="../static/img/icon/pr.png" height="20px">
                      <span>Premiere pro</span>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <span>Document tools</span>
                <p>
                  Power point, 한글, word, Excel
                </p>
              </li>
            </ul>
          </div>  
        </article>
      </section>  
    </div>
    <div id="profile" class="my_img">
      <img src="../static/img/profile_blue.jpg" alt="프로필사진">
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
export default {
  name: 'about-page',
  props: {
  },
  mounted: function() {
    this.scrollAnimation1();
    this.scrollAnimation2();
  },
  data(){
    return{
      modal : false,
    }
  },
  created: function () {
    window.addEventListener('scroll', this.imgFix);
  },
  methods: {
    noScroll : function(){
      let body = document.getElementsByTagName('body')[0];
      if(this.modal === true){
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'visible';
      }
    },
    imgFix : function(){
      const profile = document.getElementById('profile');
      const skills = document.getElementById('skills');
      const aboutSvg = document.getElementById('aboutSvg');
      const aboutiam = document.getElementById('iam');

      let skillsPosition = skills.getBoundingClientRect().top + 10;
      const scrolledTopLength = window.pageYOffset;
      const absoluteTop = scrolledTopLength + skillsPosition;
        if(scrolledTopLength > absoluteTop){
            profile.classList.add('end')
            aboutSvg.classList.add('end')
            aboutiam.classList.add('end')
        } else {
          profile.classList.remove('end')
          aboutSvg.classList.remove('end')
          aboutiam.classList.remove('end')
        }
    },
    scrollAnimation1 : function() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
      scrollTrigger: {
        trigger: ".iam",
        start: "center center",
        end: "top top",
        scrub: true,
      }
    })
    .from(".iam", { opacity: 1 })
    },
    scrollAnimation2 : function() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.timeline({
      scrollTrigger: {
        trigger: ".main_skill",
        start: "center center",
        end: "top top",
        scrub: true,
      }
    })
    .from(".main_skill", { opacity: 1 })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
  scroll-margin: 80px
}

.about_title{
  display: flex;
}

.left_side{
  flex: 5;
  width: 50%;
}

.right_side{
  flex: 5;
  width: 50%;
}

.about_title svg{
  max-width: 1440px;
  width : 100%;
  height: 225px;
  position : fixed;
  top: 50px;
}

.about_title svg.end{
  position: absolute;
  top: 1092px;
}

text {
    font-family: 'Montserrat';
    paint-order: stroke;
    stroke: #1e39b4;
    stroke-width: 2px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    fill: rgba(255, 255, 255, 0);
    font-size: 185px;
    font-weight: 700;
}

.iam_wrap{
    position: relative;
    width: 100%;
    height: 225px;
}

.me{
  font-family: 'Montserrat';
  font-size: 187px;
  font-weight: 700;
  color: #1E39B4;
  margin-left: 122px;
  position: fixed;
  top: 52px;
}

.me.end{
  position: absolute;
  top: 1013px;
}

.my_img{
  max-width: 710px;
  width: 100%;
  height: 500px;
  background-color: #1E39B4;
  position: fixed;
  top: 300px;
  overflow: hidden;
}

.end.my_img{
  position: absolute;
  top: 1340px;
}

.my_img img{
  position: relative;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 110%;
  object-fit: cover;
}

/* 모달시작 */
.info_modal{
  position : fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,50%);
  z-index: 99999;
}

.info_modal .inner{
  position : absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  max-width: 1440px;
  width: 100%;
  height: 80vh; 
  margin: auto;
  padding : 130px 64px 79px;
  box-sizing: border-box;
  background-color : #1E39B4;
  color: #fff;
}

.close{
  position: absolute;
  width: 50px;
  height: 50px;
  right: 64px;
  top: 64px;
  cursor: pointer;
}

.close > div{
  width: 70px;
  height: 1px;
  background-color: #fff;
}

.close .close_l{
  transform: rotate(45deg);
  transform-origin:0;
}
.close .close_r{
    transform: rotate(-45deg);
    transform-origin: 0;
    position: relative;
    top: 49px;
}

.inner > div > h2{
  display: inline-block;
  margin-bottom: 50px;
}

.modal_cont{
  box-sizing: border-box;
  border-right: 1px solid #fff; 
  max-height: 460px;
  height: 100%;
}

.inner em{
  font-weight: 700;
}

.inner span{
  display: block;
  font-weight: 300;
}

.inner .my{
  flex: 1.5;
}

.my h2{
  padding-right: 35px;
  background-image: url(../static/img/icon/smile.svg);
  background-size: 31px 31px;
  background-repeat: no-repeat;
  background-position: right center;
}

.my .modal_cont{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right:49px;
}

.my .modal_cont > .txt_wrap{
  line-height: 2;
}

.icon_wrap img{
  width: 37px;
  padding-right: 15px;
}

.inner .history{
  flex: 5;
}

.history h2{
  margin-left: 49px;
}

.history .modal_cont{
  padding: 0 49px;
}

.history li{
  display: flex;
  padding-bottom: 50px;
}

.his_num{
  padding-right: 45px;
  white-space: nowrap;
}

.inner .awards{
  flex: 3;
}

.awards h2{
  margin-left: 49px;
}

.awards .modal_cont{
  padding-left: 49px;
  border: none;
}

.awards li{
  display: flex;
  padding-bottom: 50px;
}

.awd_num{
    padding-right: 25px;
    white-space: nowrap;
}
/* 모달 끝 */

.iam{
  margin-top: 150px;
  margin-bottom: 340px;
  opacity: 0;
}

.main_skill{
  opacity: 0;
}

.title{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.title span{
  padding-right: 20px;
  background-image: url(../static/img/icon/plus.png);
  background-repeat: no-repeat;
  background-position: right center;
  line-height: 2.5;
  cursor: pointer;
}

.iam_cont span{
  display: block;

}

.iam_cont span em{
  font-weight: 600;
}

.skills_cont{
  display: flex;
  flex-wrap: wrap;
}

.skills_cont li{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
  margin-right: 45px;
}

.skill_L{
  flex:2.5;
  display: flex;
  align-items: center;
}

.skill_L img{
  padding-right: 10px;
}

.skill_L span{
  font-size: 18px;
  display: table-cell;
  vertical-align: middle;
}

.skill_R{
  flex:7.5;
  margin-top: 14px;
}

.skill_full{
  width: 100%;
  height: 4px;
  background-color: #e3e3e3;
  position: relative;
}

.skill_gage{
  position: relative;
  top: -4px;
  height: 4px;
  background-color: #1E39B4;
  margin-bottom: 10px;
}

.skill_gage.g80{
  width: 80%;
}

.skill_gage.g70{
  width: 70%;
}

.skill_gage.g60{
  width: 60%;
}

.skill_gage.g50{
  width: 50%;
}

.skill_dsc{
  font-family: "NotoSansKr";
  font-weight: 400;
  font-size: 16px;
  color: rgba(30,57,180,60%);
  display: none;
}

.skill_others li{
  margin-bottom: 30px;
}

.skill_others .skills_cont{
  margin: 20px 0 30px;
}

.skill_others .skills_cont li{
    margin-bottom: 20px;
    margin-right: 30px;
}


.skill_others .skills_cont > li span {
  font-size: 16px;
  font-weight: 400;
  color: rgba(30,57,180,60%)
}

.skill_others span{
  font-size: 18px;
}

.skill_others p{
  font-weight: 400;
  color: rgba(30,57,180,60%)
}

</style>
