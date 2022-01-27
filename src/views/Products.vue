<template>
  <!--   <CategoryComponent /> -->
  <BannerComponent />
  <ProductsCard />
  <LastBannerComponent />
</template>

<script>
import ProductsCard from '../components/ProductsComponents/ProductsCard.vue'
/* import CategoryComponent from '../components/ProductsComponents/CategoryComponent.vue' */
import BannerComponent from '../components/ProductsComponents/BannerComponent.vue'
import LastBannerComponent from '../components/ProductsComponents/LastBannerComponent.vue'

export default {
  name: 'Products',
  components: {
    ProductsCard,
    /*     CategoryComponent, */
    BannerComponent,
    LastBannerComponent
  }
}
</script>
