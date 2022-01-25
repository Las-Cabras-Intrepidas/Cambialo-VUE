<template>
  <div class="banner-trading">
    <div class="color-banner"></div>
    <img
      class="img-banner-product"
      src="../../assets/img/Trading2.jpg"
      alt="imagen muchos articulos"
    />
    <img class="img-slogan" src="../../assets/img/hero_banner.webp" />
  </div>
</template>

<script>
export default {
  name: 'SecondBanner'
}
</script>

<style lang="scss" scoped>
.banner-trading {
  display: flex;
  justify-content: center;
  align-items: center;
}
.color-banner {
  background-color: #012bb379;
  width: 100%;
  height: 65%;
  position: absolute;
}
.img-banner-product {
  height: 450px;
  width: 100%;
  margin: 3rem 0;
  background-size: cover;
}

.img-slogan {
  position: absolute;
  width: 80%;
}
</style>
