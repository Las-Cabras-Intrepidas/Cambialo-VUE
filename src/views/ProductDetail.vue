<template>
  <ProductDetail
    :title="product.title"
    :category="product.idcategory"
    :description="product.description"
    :picture="product.picture"
  />
  <!-- <FormExchange /> -->
</template>
<script>
// import FormExchange from '../components/ProductsComponents/FormExchange.vue'
import ProductDetail from '../components/ProductsComponents/ProductDetail.vue'
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'

export default {
  name: 'ProductsExchange',
  component: {
    // FormExchange
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      productos: [],
      product: null
    }
  },
  async showProduct (idProduct) {
    const db = getFirestore()
    const docRef = doc(db, 'Productos', idProduct)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      this.product = docSnap.data()
    }
  },
  // eslint-disable-next-line space-before-function-paren
  beforeMount() {
    const productName = this.$route.params.id
    this.product = this.showProduct(productName)
  },
  components: {
    // FormExchange,
    ProductDetail
  }
}
</script>
