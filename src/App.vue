<template>
  <top></top>
  <about></about>
  <project></project>
  <clone></clone>
  <contact id="contact"></contact>
</template>

<script>
import top from './components/top.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import clone from './components/clone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  methods: {
    // goContact(){
    //   const contact = document.getElementById('contact');
    //   if(contact){
    //     contact.scrollIntoView({ behavior: 'smooth' })
    //   }
    // }
  },
  components: {
    top,
    about,
    project,
    clone,
    contact,
  }
}
</script>

<style>
body{
  margin: auto;
  max-width: 1440px;
  width: 100%;
}
</style>
