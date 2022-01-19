<template>
      <div class="banner-products">
        <img
          class="img-banner-product"
          src="../../assets/img/bg5banner.png"
          alt="imagen muchos articulos"
        />
        <img class="img-slogan" src="../../assets/img/hero_banner.webp" />
      </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>

.banner-products {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-banner-product {
width: 80%;
border: 3px solid var(--main-color);
border-radius: 8px;
margin: 2rem 0;
}

.img-slogan {
  position: absolute;
  width: 70%;
}

</style>
