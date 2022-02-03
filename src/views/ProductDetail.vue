<template>
  <ProductDetail/>
  <!-- <FormExchange /> -->
</template>
<script>
// import FormExchange from '../components/ProductsComponents/FormExchange.vue'
import ProductDetail from '../components/ProductsComponents/ProductDetail.vue'
// import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'

export default {
  name: 'ProductsExchange',
  component: {
    // FormExchange
  },
  components: {
    // FormExchange,
    ProductDetail
  }
}
</script>
