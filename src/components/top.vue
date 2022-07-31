<template>
    <header>
    <h1 @click="scrollNav(event,'about')">SOYEON</h1>
    <nav>
      <ul>
        <li @click="scrollNav(event,'about')"></li>
        <li @click="scrollNav(event,'main')"></li>
        <li @click="scrollNav(event,'sub')"></li>
        <li @click="scrollNav(event,'blog')"></li>
        <li @click="scrollNav(event,'contact')"></li>
      </ul>
    </nav>
    </header>
</template>

<script>
export default {
  name: 'intro-page',
  props: {
  },
  data(){
    return{
      
    }
  },
   methods: {
     scrollNav(evt,secId){
      const section = document.getElementById(secId);
      if(section){
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  max-width: 1440px;
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 999;
  mix-blend-mode: difference;
}
h1{
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  font-family: 'Montserrat', sans-serif;
  font-size: 34px;
  font-weight: 900;
  color: #1E39B4;
  cursor: pointer;
}
nav ul{
  display: flex;
}

nav ul li{
  margin: 0 5px;
  width: 38px;
  height: 10px;
  background-color: #1E39B4;
  cursor: pointer;
}
</style>
