<template>
  <div>
    <h1>Detalle Producto</h1>
    <div>{{ productName }}</div>
    <FormExchange />
  </div>
</template>
<script>
import FormExchange from '../components/ProductsComponents/FormExchange.vue'
// import producto from '../assets/data/producto.json'

export default {
  name: 'ProductsExchange',
  component: {
    FormExchange
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {}
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    productName() {
      return this.$route.params.name
    }
  },
  components: { FormExchange }
}
</script>
