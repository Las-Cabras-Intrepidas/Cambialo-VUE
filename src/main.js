import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'

import { db } from './firebase'
console.log(db)

// eslint-disable-next-line eol-last
createApp(App).use(router).mount('#app')
