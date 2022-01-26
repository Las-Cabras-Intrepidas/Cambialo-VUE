<template>
  <UserComponent />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import UserComponent from '../components/UserSection/UserComponent.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'

export default {
  name: 'UserSection',
  components: { UserComponent, UserOptionsComponent, UserCategories }
}
</script>
