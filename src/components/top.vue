<template>
  <div class="hello">
    <header>
    <h1>SOYEON</h1>
    <nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li v-on:click="goContact"></li>
      </ul>
    </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'intro-page',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
h1{
  font-family: 'Montserrat', sans-serif;
  font-size: 34px;
  font-weight: 900;
  color: #1E39B4;
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
