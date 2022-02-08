<template>
  <div>
    <h2 class="title-section">Echa un vistazo...</h2>
  </div>
  <div class="container-categories">
    <div
      @click="scrollToTop"
      class="card-category"
      v-for="category in categories"
      :key="category.id"
    >
    <router-link to="/productos">
      <img class="img-category" :src="category.picture" :alt="category.category" />
      <h2>{{ category.category }}</h2>
    </router-link>
    </div>
  </div>
</template>

<script>
import categories from '../../assets/data/categoria.json'
import products from '../../assets/data/producto.json'

export default {
  name: 'Categories',
  data () {
    return {
      value: '',
      categories: categories,
      products: products,
      filter: []
    }
  },
  scrollToTop () {
    window.scrollTo(0, 0)
  }
}

</script>

<style lang="scss" scoped>
.title-section {
  text-align: left;
  margin-top: 2.5rem;
  margin-left: 15%;
}
.container-categories {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  justify-items: center;
  width: 70%;
  margin: 0 auto;

  .card-category {
    max-width: 45%;

    img {
      border-radius: 50%;
      opacity: 0.7;
      width: 100px;
      box-shadow: 0.5px 1px 5px black;
    }

    h2 {
      font-size: 22px;
    }
  }
}

@media (min-width: 768px) {
  .container-categories {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
