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



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApNx7mfe6is0Cg6Wp9B61ZcZ__feq6gQc",
  authDomain: "sott120-portfolio.firebaseapp.com",
  databaseURL: "https://sott120-portfolio-default-rtdb.firebaseio.com",
  projectId: "sott120-portfolio",
  storageBucket: "sott120-portfolio.appspot.com",
  messagingSenderId: "748811021419",
  appId: "1:748811021419:web:b4d89a3668bf1cadeb952e"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App).mount('#app')
