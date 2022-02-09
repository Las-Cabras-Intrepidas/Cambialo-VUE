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
  /* eslint-disable space-before-function-paren */
  data() {
    return {
      value: '',
      categories: categories,
      products: products,
      filter: []
    }
  },
  /* eslint-disable space-before-function-paren */
  scrollToTop() {
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
  margin: auto 5%;

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
@media (max-width: 450px) {
  .container-categories {
    text-align: center;
    display: grid;
    grid-template-columns: 50px 1fr;
    column-gap: 14vh;
  }
}
</style>
