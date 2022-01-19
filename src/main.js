/* eslint-disable eol-last */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { db } from './firebase'
console.log(db)

createApp(App).use(router).mount('#app')