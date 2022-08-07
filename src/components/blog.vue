<template>
  <div id="blog" class="blog_wrap">
    <h2 class="eng">Blog posting</h2>
    <p class="gotoblog eng"><a href="https://sott120.tistory.com/" target="_blank">Go to blog</a></p>
    <ul class="crawling_ul">
    <li v-for="(item, index) in datas" v-bind:key="index.list" class="crawling_li">
      <a :href="item.link" target="_blank">
        <img :src="item.img" alt="썸네일 이미지">
        <div class="blog_txt">
          <h4>{{ item.title }}</h4>
          <p>{{ item.date }}</p>
        </div>
      </a>
    </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'blog-page',
  props: {
  },
  data(){
    return{
      datas: [],
    }
  },
  created: function () {
    window.addEventListener('load', this.crawlingData);
  },
  methods:{
    crawlingData: async function(){
      this.datas= await axios.post("http://localhost:1234/tistory").then(res => {
        return res.data
      })
    },
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
  position: relative;
  padding-right: 16px;
  background-image: url(../static/img/icon/txt_arrow.png);
  background-repeat: no-repeat;
  background-position: 95% 5px;
  background-size: 7px;
  line-height: 2.5;
  color: #1E39B4;
  transition: background-position 0.3s ease-in-out;
}

.gotoblog > a::before{
  position: absolute;
  content: '';
  display: block;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #1E39B4;
  transition: width .3s ease-in-out;
  -webkit-transition: width .3s ease-in-out;
}


.gotoblog > a:hover{
  background-position: 100% 5px;
}

.gotoblog > a:hover::before{
  width: 100%;
}

.crawling_li{
  background-color: rgba(229, 240, 255, 0);
  transition: background-color 0.3s ease-in-out ;
}

.crawling_li:hover{
  background-color: rgba(229, 240, 255, 1);
}

.crawling_li > a{
  display: block;
  border: 2px solid #1E39B4;
  display: flex;
  margin-bottom: 30px;
}

.crawling_li img{
  object-fit: cover;
  max-width: 223px;
  width: 100%;
  min-width: 220px;
  height: 120px;
}

.blog_txt{
  width: 65%;
  padding: 30px;
  box-sizing: border-box;
}

.blog_txt h4{
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
  color: #1E39B4;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.blog_txt p{
  font-size: 14px;
  color: rgba(30, 57, 180, 50%);
}
</style>
