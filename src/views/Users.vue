<template>
  <UserNavBar />
  <h2>Agrega un producto!</h2>
  <form @submit.prevent="addProduct">
    <InputProduct :product="product"/>
  </form>
  <hr>
  <ListProduct :products="userProductList"/>
  <UserOptionsComponent />
  <UserCategories />
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'

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
      },
      userProductList: []
    }
  },
  created () {
    this.readProducts()
  },
  methods: {
    logOut () {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.replace('/')
        })
    },
    // agregar producto a firebase
    async addProductDB () {
      try {
        const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${this.$store.state.user.uid}/${this.product.id}.json`, {
          method: 'PUT',
          body: JSON.stringify(this.product)
        })
        const dataDB = await response.json()
        console.log(dataDB)
      } catch {
        console.log('error en subir')
      }
    },
    addProduct () {
      // generar id
      this.product.id = shortid.generate()
      // enviar datos
      this.addProductDB()
      // vaciar campos
      this.product = {
        id: '',
        title: '',
        category: [],
        shipping: '',
        description: '',
        picture: ''
      }
    },
    async readProducts () {
      try {
        const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${this.$store.state.user.uid}.json`)
        const dataDB = await response.json()
        const arrayProducts = []
        for (const index in dataDB) {
          arrayProducts.push(dataDB[index])
        }
        this.userProductList = arrayProducts
      } catch (error) {
        console.log('error en cargar')
      }
    }
  },
  updated () {
    this.readProducts()
  }
}
</script>
