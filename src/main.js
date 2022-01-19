import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { db } from './firebase'
console.log(db)

// eslint-disable-next-line eol-last
createApp(App).use(router).mount('#app')
