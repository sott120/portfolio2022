<template>
  <top></top>
  <about></about>
  <project></project>
  <subproject></subproject>
  <blog></blog>
  <contact id="contact"></contact>
</template>

<script>
import top from './components/top.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import subproject from './components/subproject.vue'
import contact from './components/contact.vue'
import blog from './components/blog.vue'

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
    subproject,
    contact,
    blog
  }
}
</script>

<style>
</style>
