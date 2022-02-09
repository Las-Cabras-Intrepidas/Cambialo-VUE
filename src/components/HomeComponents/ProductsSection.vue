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
          <router-link to="/productos" @click="scrollToTop">
            <img :src="starProduct.picture" :alt="starProduct.title" />
          </router-link>
          <router-link to="/productos" @click="scrollToTop">
            <font-awesome-icon class="icon" icon="handshake" />
          </router-link>
        </div>
        <div class="product-text">
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

    // eslint-disable-next-line space-before-function-paren
    scrollToTop() {
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
  box-shadow: 1px 1px 4px 1px #cfcfcf85;
  border-radius: 1rem;
  border: 1.5px solid #fff;
}

.row:hover {
  border: 3px solid #012bb3;
  transform: scale(1.05);
  transition-duration: 500ms, 250ms;
}

.product-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  min-height: 2rem;
  margin-top: 1.5rem;
}

.img-box {
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
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
  right: 30%;
  background: var(--main-color);
  border: 2.5px solid #fff;
  padding: 0.75rem;
  border-radius: 50%;
}

.availability {
  color: green;
  font-weight: 600;
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
@media (min-width: 600px) {
   .icon {
    right: 37%;
  }
}

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
  .icon {
    right: 38%;
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
  .icon {
    right: 38%;
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 60%;
  }
  .icon {
    right: 40%;
  }
}
</style>
