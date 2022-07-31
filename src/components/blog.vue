<template>
  <div id="blog" class="blog_wrap">
    <h2 class="eng">New post</h2>
    <p class="gotoblog eng"><a href="https://sott120.tistory.com/" target="_blank">Go to blog</a></p>
    <ul class="crolling_ul">
    <li class="crolling_li">
      <img src="../static/img/sub/card.jpg" alt="썸네일 주소">
      <div class="blog_txt">
        <a href="">
          <h4>포스팅 제목입니다.</h4>
          <p>2022.07.11</p>
        </a>
      </div>
    </li>
    <li class="crolling_li">
      <img src="../static/img/sub/card.jpg" alt="썸네일 주소">
      <div class="blog_txt">
        <a href="">
          <h4>포스팅 제목입니다.</h4>
          <p>2022.07.11</p>
        </a>
      </div>
    </li>
    <li class="crolling_li">
      <img src="../static/img/sub/card.jpg" alt="썸네일 주소">
      <div class="blog_txt">
        <a href="">
          <h4>포스팅 제목입니다.</h4>
          <p>2022.07.11</p>
        </a>
      </div>
    </li>
    <li class="crolling_li">
      <img src="../static/img/sub/card.jpg" alt="썸네일 주소">
      <div class="blog_txt">
        <a href="">
          <h4>포스팅 제목입니다.</h4>
          <p>2022.07.11</p>
        </a>
      </div>
    </li>
  </ul>
  </div>
  
</template>

<script>
export default {
  name: 'blog-page',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.blog_wrap{
  width: 100%;
  max-width: 1440px;
  margin: auto;
  scroll-margin: -300px
}

h2{
  text-align: center;
  padding: 400px 0 80px;
}

.gotoblog{
  text-align: right;
  padding-bottom: 30px;
}

.gotoblog > a{
    padding-right: 16px;
    background-image: url(../static/img/icon/txt_arrow.png);
    background-repeat: no-repeat;
    background-position: right 5px;
    background-size: 7px;
    line-height: 2.5;
    color: #1E39B4;
}

.crolling_li{
  border: 2px solid #1E39B4;
  display: flex;
  margin-bottom: 30px;
}

.crolling_li img{
  object-fit: cover;
  width: 223px;
  height: 120px;
}

.blog_txt{
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}

.blog_txt h4{
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  color: #1E39B4;
}

.blog_txt p{
  font-size: 14px;
  color: rgba(30, 57, 180, 50%);
}
</style>
