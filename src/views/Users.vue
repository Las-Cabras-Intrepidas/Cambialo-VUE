
<template>
  <UserNavBar />
  <h2>¡Agrega un producto!</h2>
  <form @submit.prevent="addProduct">
    <InputProduct :product="product" />
  </form>
  <hr />
  <ListProduct :products="userProductList" />
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
  // eslint-disable-next-line space-before-function-paren
  data() {
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
  // eslint-disable-next-line space-before-function-paren
  created() {
    this.readProducts()
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    logOut() {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.replace('/')
        })
    },
    // agregar producto a firebase
    // eslint-disable-next-line space-before-function-paren
    async addProductDB() {
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
    // eslint-disable-next-line space-before-function-paren
    addProduct() {
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
    // eslint-disable-next-line space-before-function-paren
    async readProducts() {
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
  // eslint-disable-next-line space-before-function-paren
  updated() {
    this.readProducts()
  }
}
</script>
<style lang="scss" scoped>
form {
  font-size: 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 450px;
  min-height: 380px;
  padding: 2rem;
  background: rgba(2, 42, 176, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0.5px);
  -webkit-backdrop-filter: blur(1px);
  border-radius: 10px;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  form {
    width: 350px;
  }
}
</style>
