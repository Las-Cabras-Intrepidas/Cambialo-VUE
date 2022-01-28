<template>
<div class="UserSection">
    <h1>Logout provisional</h1>
    <button @click="logOut">LogOut</button>
  </div>

  <UserNavBar />
  <router-view />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

import UserNavBar from '../components/UserSection/UserNavBar.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'

export default {
  name: 'UserSection',
  components: {
    UserNavBar, UserOptionsComponent, UserCategories
  },
  methods: {
    logOut () {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.replace('/')
        })
    }
  }
}
</script>
