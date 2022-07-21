<template>
<div>
<nav>
  <ul>
    <li>intro</li>
    <li>about</li>
    <li>project</li>
    <li>clone</li>
    <li v-on:click="goContact">contact</li>
  </ul>
</nav>
  <intro></intro>
  <about></about>
  <project></project>
  <clone></clone>
  <contact id="contact"></contact>
  </div>
</template>

<script>
import intro from './components/intro.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import clone from './components/clone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  methods: {
    goContact(){
      const contact = document.getElementById('contact');
      if(contact){
        contact.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  components: {
    intro,
    about,
    project,
    clone,
    contact,
  }
}
</script>

<style scoped>
nav ul{
  display: flex;
}

nav ul li{
  padding: 5px 20px;
  font-size: 20px;
  cursor: pointer;
}
</style>
