<template>
  <UserNavBar />
  <h2>Edita tu producto - {{ product.title }}</h2>
  <form @submit.prevent="updateProduct(product)">
    <InputProduct :product="product"/>
  </form>
</template>

<script>
import InputProduct from '../components/UserSection/InputProduct.vue'
import router from '../router'

export default {
  name: 'EditProduct',
  data () {
    return {
      product: {
        id: '',
        title: '',
        category: [],
        shipping: '',
        description: '',
        picture: ''
      }
    }
  },
  components: {
    InputProduct
  },
  methods: {
    async updateProduct (product) {
      try {
        const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${this.$store.state.user.uid}/${product.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(product)
        })
        const dataDB = await response.json()
        router.push('/usuario')
        console.log(dataDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created () {
    try {
      const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${this.$store.state.user.uid}/${this.$route.params.id}.json`)
      const dataDB = await response.json()
      this.product = dataDB
    } catch (error) {
      console.log('error en cargar')
    }
  }
}
</script>
