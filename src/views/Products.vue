<template>
<CategoryComponent />
<BannerComponent />
  <ProductsCard />
</template>

<script>
import ProductsCard from '../components/ProductsComponents/ProductsCard.vue'
import CategoryComponent from '../components/ProductsComponents/CategoryComponent.vue'
import BannerComponent from '../components/ProductsComponents/BannerComponent.vue'

export default {
  name: 'Products',
  components: {
    ProductsCard, CategoryComponent, BannerComponent
  }
}
</script>
