<template>
  <div class="container">
    <div class="row-container">
      <div
        class="row"
        v-for="starProduct in starProducts"
        :key="starProduct.id"
        :id="starProduct.category"
      >
        <div class="img-box">
        <img :src="starProduct.picture" :alt="starProduct.title" />
        <router-link to="/productos" @click="scrollToTop">
          <font-awesome-icon class="icon" icon="handshake" />
        </router-link>
        </div>
        <div class="flex">
        <h4>{{ starProduct.title }}</h4>
        <p class="availability">{{ starProduct.available ? "Disponible" : "No Disponible" }}</p>
        </div>
        <!-- <p>{{ starProduct.description }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import starProducts from '../../assets/data/productoDestacado.json'

export default {
  name: 'ProductsSection',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      starProducts: starProducts
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 85%;
  margin: 0 auto;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
}

.row {
  box-shadow: 1px 1px 4px 1px #cfcfcf;
  border-radius: 1rem;
  border: 2px solid #fff;
}

.row:hover {
  border: 2px solid #012bb3;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  margin-top: 1.5rem
}

.img-box {
  position: relative;
}

img {
  max-width: 100%;
  border-radius: 1rem 1rem 0 0;
}

.icon {
  position: absolute;
  bottom: -15px;
  color: #fff;
  font-size: 1.25rem;
  right: 40%;
  background: var(--main-color);
  border: 2px solid #fff;
  padding: 0.6rem;
  border-radius: 50%;
  text-align:center;
}

.availability {
  color: green;
  font-weight: 600;
  text-align: start;
}

h4 {
  margin: 0;
}

p {
  font-size: 15px;
  padding: 2px;
  margin: 0;
  margin-bottom: 0.5rem;
}

/* mediaqueries */
@media (min-width: 700px) {
  .row-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1000px) {
  .row-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1300px) {
  .container {
    max-width: 75%;
  }

  .flex {
    p {
      margin: 0 0 0 1rem;
    }
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 60%;
  }
}
</style>
