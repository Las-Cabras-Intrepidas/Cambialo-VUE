<template>
  <UserNavBar />
    <InputProduct/>
</template>

<script>
import InputProduct from '../components/CrudProductsComponent/InputProduct.vue'

export default {
  name: 'EditProduct',
  components: {
    InputProduct
  }
}
</script>
