<template>
  <UserNavBar />
  <h2>Edita tu producto - {{ product.title }}</h2>
  <form @submit.prevent="updateProduct(product)">
    <InputProduct :product="product"/>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import InputProduct from '../components/UserSection/InputProduct.vue'

export default {
  name: 'EditProduct',
  components: {
    InputProduct
  },
  computed: {
    ...mapState(['product'])
  },
  methods: {
    ...mapActions(['searchProduct', 'updateProduct'])
  },
  created () {
    this.searchProduct(this.$route.params.id)
  }
}
</script>
