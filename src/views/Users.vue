<template>
  <UserNavBar />
  <router-view />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import UserNavBar from '../components/UserSection/UserNavBar.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'

export default {
  name: 'UserSection',
  components: { UserNavBar, UserOptionsComponent, UserCategories }
}
</script>
