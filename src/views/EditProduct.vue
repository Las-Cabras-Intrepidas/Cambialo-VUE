<template>
  <UserNavBar />
  <h2>Edita tu producto - {{ product.title }}</h2>
  <form @submit.prevent="updateProduct(product)">
    <InputProduct :product="product"/>
  </form>
</template>

<script>
import InputProduct from '../components/CrudProductsComponent/InputProduct.vue'
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore/lite'

export default {
  name: 'EditProduct',
  data () {
    return {
      product: {
        title: '',
        description: '',
        available: '',
        idUser: '',
        idCategory: ''
      }
    }
  },
  components: {
    InputProduct
  },
  methods: {
    async updateProduct (id) {
      const db = getFirestore()
      const productRef = doc(db, 'Productos', id)
      // Set the "capital" field of the city 'DC'
      await updateDoc(productRef, {
        capital: true
      }).then(() => {
        this.$router.go('/usuario')
      })
    },
    async created () {
      const db = getFirestore()
      const docRef = doc(db, 'Productos', this.$route.params.id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data())
        this.data.product = docSnap
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    }
  }
}
</script>
