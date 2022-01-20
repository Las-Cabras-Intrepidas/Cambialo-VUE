<template>
  <HeroBanner />
  <SloganBanner />
  <CategoriesBanner />
  <ValuesBanner />
  <ProductsSection />
  <SecondBanner />
</template>

<script>
import HeroBanner from '../components/HomeComponents/HeroBanner.vue'
import SloganBanner from '../components/HomeComponents/SloganBanner.vue'
import CategoriesBanner from '../components/HomeComponents/CategoriesBanner.vue'
import ValuesBanner from '../components/HomeComponents/ValuesBanner.vue'
import ProductsSection from '../components/HomeComponents/ProductsSection.vue'
import SecondBanner from '../components/HomeComponents/SecondBanner.vue'

export default {
  name: 'Home',
  components: {
    HeroBanner, SloganBanner, CategoriesBanner, ValuesBanner, ProductsSection, SecondBanner
  }
}
</script>
