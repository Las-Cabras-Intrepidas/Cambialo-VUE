<template>
  <UserNavBar />
  <router-view />
  <AddProductUser />
  <GetProductUser />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

import UserNavBar from '../components/UserSection/UserNavBar.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'
import AddProductUser from '../components/CrudProductsComponent/AddProductUser.vue'
import GetProductUser from '../components/CrudProductsComponent/GetProductUser.vue'

export default {
  name: 'UserSection',
  components: {
    UserNavBar, UserOptionsComponent, UserCategories, AddProductUser, GetProductUser
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
