<template>
  <UserNavBar />
  <router-view />
  <CrudProductUser />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

import UserNavBar from '../components/UserSection/UserNavBar.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'
import CrudProductUser from '../components/CrudProductsComponent/CrudProductUser.vue'

export default {
  name: 'UserSection',
  components: {
    UserNavBar, UserOptionsComponent, UserCategories, CrudProductUser
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
