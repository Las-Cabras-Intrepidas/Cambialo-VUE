<template>
<CategoryComponent />
  <ProductsCard />
</template>

<script>
import ProductsCard from '../components/ProductsComponents/ProductsCard.vue'
import CategoryComponent from '../components/ProductsComponents/CategoryComponent.vue'

export default {
  name: 'Products',
  components: {
    ProductsCard, CategoryComponent
  }
}
</script>
