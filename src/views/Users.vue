<template>
  <UserNavBar />
  <h2>Agrega un producto!</h2>
  <form @submit.prevent="addProduct">
    <InputProduct :product="product"/>
  </form>
  <hr>
  <ListProduct />
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { mapActions } from 'vuex'

import UserNavBar from '../components/UserSection/UserNavBar.vue'
import UserOptionsComponent from '../components/UserSection/UserOptionsComponent.vue'
import UserCategories from '../components/UserSection/UserCategories.vue'
import ListProduct from '../components/UserSection/ListProduct.vue'
import InputProduct from '../components/UserSection/InputProduct.vue'

const shortid = require('shortid')

export default {
  name: 'UserSection',
  components: {
    UserNavBar, InputProduct, UserOptionsComponent, UserCategories, ListProduct
  },
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
  methods: {
    logOut () {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.replace('/')
        })
    },
    ...mapActions(['setProduct']),
    addProduct () {
      console.log(this.product)
      if (this.product.title.trim() === '') {
        console.log('Campo Vacio')
      }
      console.log('No Campo Vacio')
      // generar id
      this.product.id = shortid.generate()
      console.log(this.product.id)
      // enviar datos
      this.setProduct(this.product)
      this.product = {
        id: '',
        title: '',
        category: [],
        shipping: '',
        description: '',
        picture: ''
      }
    }
  }
}
</script>
