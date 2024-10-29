import './style.css';

import { createApp } from 'vue'
import App from './App.vue'
import Vue3Marquee from 'vue3-marquee';

if (import.meta.env.DEV) {
  document.querySelector('body')?.classList.add('dev')
}

createApp(App).use(Vue3Marquee).mount('#app')
