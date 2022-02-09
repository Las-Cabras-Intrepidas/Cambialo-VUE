/* eslint-disable eol-last */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPowerOff, faUserSecret, faTshirt, faGamepad, faPaw, faTv, faHome, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt, faArrowDown, faStopwatch, faDollarSign, faRecycle, faArrowRight, faHandshake, faHandshakeAltSlash, faTimesCircle, faPenSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
/* import { } from '@fortawesome/free-regular-svg-icons' */
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { db, auth, storage, firestore } from './firebase'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

library.add(faUser, faPowerOff, faTshirt, faUserSecret, faGamepad, faPaw, faTv, faHome, faBowlingBall, faSearch, faBoxes, faEnvelope, faStar, faBox, faSyncAlt, faSearch, faFacebookSquare, faInstagram, faTwitterSquare, faArrowDown, faStopwatch, faDollarSign, faRecycle, faArrowRight, faArrowDown, faHandshake, faHandshakeAltSlash, faTimesCircle, faPenSquare, faEdit, faTrash)
console.log(db)
console.log(auth)
console.log(storage)
console.log(firestore)

createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

// Función: al cambiar el estado de autenticidad
const authUser = getAuth()
onAuthStateChanged(authUser, (user) => {
  if (user) {
    console.log(user)
    const userActive = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectUsers', userActive)
    console.log(userActive)
    // ...
  } else {
    console.log(user)
    store.dispatch('detectUsers', user)
    // User is signed out
    // ...
  }
})
