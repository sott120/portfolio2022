<template>
  <div class="hello">
    <div class="about_title">
    <!-- <img src="../assets/about.svg" alt=""> -->
    <div class="main_visual_typo_strok">
      <span class="main_visual_typo_fake">ABOUT</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1009.586 223.199">
          <text x="0" y="0"><tspan dy="0.92em" x="0">ABOUT</tspan></text>
      </svg>
    </div>
    <h1>ME.</h1>
    </div>
    <div class="my_img">      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'about-page',
  props: {
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about_title{
  display: flex;
}

text {
  font-family: 'Montserrat', sans-serif;
    paint-order: stroke;
    stroke: #1e39b4;
    stroke-width: 2px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    fill: rgba(255, 255, 255, 0);
    font-size: 187px;
  font-weight: 700;
}

h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 187px;
  font-weight: 700;
  color: #1E39B4;
}

.my_img{
  max-width: 710px;
  width: 100%;
  height: 474px;
  background-color: beige;
}

.main_visual_typo_strok{
      display: inline-block;
    vertical-align: middle;
    margin-right: 38px;
    position: relative;
}

.main_visual_typo{
  font-size: 183px;
}

.main_visual_typo_fake{
  color: transparent;
    opacity: 0;
}

.main_visual_typo_strok svg {
    display: block;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 0;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

.main_visual_typo_strok text {
    paint-order: stroke;
    stroke: #1e39b4;
    stroke-width: 2px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    fill: rgba(255, 255, 255, 0);
}

.main_visual_typo_strok text tspan{
      font-size: 183px;
}
</style>
