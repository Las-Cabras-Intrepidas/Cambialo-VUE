<template>
  <section class="mosaic-section">
    <div class="hero-container">
      <img id="hash-logo" src="../../assets/img/hero_banner.webp" alt="Mosaico de artículos" />
      <h1>Conecta con otros usuarios y dale otra vida a lo que ya no usas.</h1>
      <router-link
        v-if="!existUser"
        to="/registrate"
        @click="scrollToTop"
        class="btnBorrar1"
      >Empieza aquí</router-link>
    </div>
  </section>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'HeroBanner',
  methods: {
    // eslint-disable-next-line space-before-function-paren
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapGetters(['existUser'])
  }
}
</script>

<style lang="scss" scoped>
.mosaic-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/img/mosaic-image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffffe6;
  color: black;
  width: 80%;
  padding: 1rem 0;

  img {
    width: 100%;
  }

  h1 {
    font-weight: 500;
    font-size: 1.25rem;
    margin: 2rem;
    width: 85%;
    text-align: center;
  }

  @mixin colorChange($color, $num) {
    @if $num == 1 {
      animation: colorize 0.5s ease-in-out forwards;

      @keyframes colorize {
        0% {
          color: $color;
        }
        25% {
          color: $color;
        }
        100% {
          color: white;
        }
      }
    }
  }

  .btnBorrar1 {
    cursor: pointer;
    font-weight: 600;
    position: relative;
    font-size: 1.25rem;
    transition: all 2s;
    background-color: #fff;
    color: var(--main-color);
    z-index: 5;
    border-radius: 30px;
    padding: 10px 17px;
    text-align: center;
    border: 2px solid var(--main-color);
    transition: all 0.5s;
    min-height: 1.5rem;
    margin-right: 0.5rem;

    &:hover {
      @include colorChange(var(--main-color), 1);
    }
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 0%;
      background-color: var(--main-color);
      z-index: -1;
      transition: all 0.5s;
      border-radius: 30px;
    }
    &:hover::before {
      width: 100%;
      transition: 0.55s;
      transform: scale(1.1);
      border-radius: 30px;
    }
  }
}

@media (min-width: 850px) {
  .hero-container {
    width: 70%;
    padding: 2rem 0;

    h1 {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 1200px) {
  .hero-container {
    width: 65%;
    margin: 1.5rem 0;
    img {
      width: 85%;
    }
    h1 {
      font-size: 1.65rem;
    }
  }
}

@media (min-width: 1500px) {
  .hero-container {
    margin: 2.5rem 0;
    width: 55%;
    img {
      width: 75%;
    }
    h1 {
      font-size: 1.65rem;
    }
  }
}
</style>
