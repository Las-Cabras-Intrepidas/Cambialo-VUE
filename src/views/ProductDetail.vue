<template>
  <ProductDetail
    :title="product.title"
    :category="product.category"
    :description="product.description"
    :picture="product.picture"
  />
  <FormExchange />
</template>
<script>
import FormExchange from '../components/ProductsComponents/FormExchange.vue'
import ProductDetail from '../components/ProductsComponents/ProductDetail.vue'
import products from '../assets/data/producto.json'

export default {
  name: 'ProductsExchange',
  component: {
    FormExchange
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      products: products,
      product: null
    }
  },
  // eslint-disable-next-line space-before-function-paren
  beforeMount() {
    const productName = this.$route.params.id
    this.product = this.products.find((product) => product.title === productName)
  },
  components: {
    FormExchange, ProductDetail
  }
}
</script>
