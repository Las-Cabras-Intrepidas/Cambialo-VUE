/* eslint-disable eol-last */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTshirt, faGamepad, faPaw, faTv, faCar, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt, faArrowDown, faStopwatch, faDollarSign, faRecycle, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { db, auth, storage } from './firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTshirt, faUserSecret, faGamepad, faPaw, faTv, faCar, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt, faSearch, faFacebookSquare, faInstagram, faTwitterSquare, faArrowDown, faStopwatch, faDollarSign, faRecycle, faArrowRight, faArrowDown)
console.log(db)
console.log(auth)
console.log(storage)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
