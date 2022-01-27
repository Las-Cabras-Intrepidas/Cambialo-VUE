<template>
  <BannerUs />
  <BoxesUs />
  <HoursUs />
</template>
<script>
import BannerUs from '../components/AboutUsComponent/BannerUs.vue'
import BoxesUs from '../components/AboutUsComponent/BoxesUs.vue'
import HoursUs from '../components/AboutUsComponent/HoursUs.vue'
export default {
  name: 'About',
  components: {
    BannerUs, BoxesUs, HoursUs
  }
}
</script>
<style>
</style>
