/* eslint-disable eol-last */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTshirt, faGamepad, faPaw, faTv, faCar, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { db } from './firebase'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTshirt, faUserSecret, faGamepad, faPaw, faTv, faCar, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt, faSearch, faFacebookSquare, faInstagram, faTwitterSquare)
console.log(db)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
