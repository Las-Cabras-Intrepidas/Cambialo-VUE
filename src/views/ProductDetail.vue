<template>
  <div>
    <h1>Detalle Producto</h1>
    <div class="container">
      <div class="row">
        <div class="column">
          <h2>{{ product.title}}</h2>
            <p>{{ product.category }}</p>
            <p>{{ product.description }}</p>
        </div>
        <div class="column2">
          <img :src="product.picture" alt />
        </div>
      </div>
    </div>
    <FormExchange />
  </div>
</template>
<script>
import FormExchange from '../components/ProductsComponents/FormExchange.vue'
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
    console.log(productName)
  },
  components: { FormExchange }
}
</script>
