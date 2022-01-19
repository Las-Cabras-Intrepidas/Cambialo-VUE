<template>
  <HeroBanner />
  <SloganBanner />
  <CategoriesBanner />
  <ValuesBanner />
  <ProductsSection />
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import HeroBanner from '../components/HomeComponents/HeroBanner.vue'
import SloganBanner from '../components/HomeComponents/SloganBanner.vue'
import CategoriesBanner from '../components/HomeComponents/CategoriesBanner.vue'
import ValuesBanner from '../components/HomeComponents/ValuesBanner.vue'
import ProductsSection from '../components/HomeComponents/ProductsSection.vue'

export default {
  name: 'Home',
  components: {
    HeroBanner, SloganBanner, CategoriesBanner, ValuesBanner, ProductsSection
  }
}
</script>
