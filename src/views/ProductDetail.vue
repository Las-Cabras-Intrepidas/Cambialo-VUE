<template>
  <div>
    <h1>Detalle Producto</h1>
    <div>{{ productName }}</div>
    <div class="container">
      <div class="row">
        <div class="column"></div>
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
/* import products from '../assets/data/producto.json' */

export default {
  name: 'ProductsExchange',
  props: ['products'],
  component: {
    FormExchange
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      product: {}
    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.name = this.$params.name
    this.product = this.products.find((product) => product.name === this.name)
  },
  components: { FormExchange }
}
</script>
