<template>
  <div>
    <h1>Detalle Producto</h1>
    <div>{{ productName }} </div>
  </div>
</template>
<script>

// import producto from '../assets/data/producto.json'

export default {
  name: 'products',
  data () {
    return {
    }
  },
  computed: {
    productName () {
      return this.$route.params.name
    }
  }
}
</script>
