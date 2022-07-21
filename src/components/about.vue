<template>
  <div class="hello">
    <div class="about_title">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1009.586 223.199">
      <text x="0" y="0">
        <tspan dy="0.92em" x="0">ABOUT</tspan>
      </text>
    </svg>
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
</style>
