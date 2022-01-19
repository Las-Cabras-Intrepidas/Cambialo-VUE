/* eslint-disable eol-last */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { db } from './firebase'
console.log(db)

library.add(faUserSecret)

createApp(App).use(router).mount('#app')