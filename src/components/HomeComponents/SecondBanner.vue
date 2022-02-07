<template>
  <div class="center">
    <div class="color-banner flex">
      <div>
        <h3>¡Compra sin dinero!</h3>
        <h4>Únete a la nueva plataforma de intercambio</h4>
      </div>
      <router-link
        v-if="!existUser"
        to="/registrate"
        @click="scrollToTop"
        class="button"
      >Empieza aquí</router-link>
    </div>
  </div>
  <img class="hashtag" src="../../assets/img/hero_banner.webp" alt="Banner intercambio libros" />
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SecondBanner',
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
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
}
.color-banner {
  background: url("../../assets/img/Trading2.webp");
  background-position-y: center;
  background-size: cover;
  box-shadow: inset 0 0 0 200px rgba(66, 96, 194, 0.75);
  justify-content: space-around;
  width: 100%;
  margin: 3rem 0;
  margin-bottom: 0;
  color: rgb(255, 255, 255);
  align-items: center;

  div {
    text-align: start;
    margin: 5rem 2rem;
    max-width: 50%;

    h3,
    h4 {
      margin: 0;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.3rem;
    }
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

  .button {
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
      width: 0px;
      background-color: var(--main-color);
      z-index: -1;
      transition: all 0.5s;
      border-radius: 30px;
    }
    &:hover::before {
      width: 100%;
      transition: 0.55s;
      transform: scale(1.1);
      border: 1px solid #fff;
      border-radius: 30px;
    }
  }
}

img {
  max-width: 90%;
}

@media (min-width: 700px) {
  .hashtag {
    max-width: 75%;
  }
}

@media (min-width: 900px) {
  .hashtag {
    max-width: 60%;
  }
}

@media (min-width: 1100px) {
  .hashtag {
    max-width: 45%;
  }
}

@media (min-width: 1300px) {
  .hashtag {
    max-width: 40%;
  }
}
</style>
