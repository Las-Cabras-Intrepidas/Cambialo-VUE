<template>
      <div class="banner-trading">
        <img
          class="img-banner-product"
          src="../../assets/img/Trading.jpg"
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

.img-banner-product {
max-width: 100%;
margin: 2rem 0;
opacity: 0.8;
}

.img-slogan {
  position: absolute;
  width: 70%;
}

</style>
