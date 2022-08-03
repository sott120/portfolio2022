import { createApp } from 'vue'
import App from './App.vue'

import './static/css/reset.css'
import './static/css/common.css'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// No need to export ScrollToPlugin or TextPlugin
// as you probably won't need to reference them directly
export { gsap, ScrollTrigger };


createApp(App).mount('#app')
