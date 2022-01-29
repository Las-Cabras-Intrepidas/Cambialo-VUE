<template>
  <div class="container-categories">
    <div
      @click="selectedCategory = category.category;"
      class="card-category"
      v-for="category in categories"
      :key="category.id"
    >
      <img class="img-category" :src="category.picture" :alt="category.category" />
      <h2>{{ category.category }}</h2>
    </div>
  </div>

  <div>
    <button @click="selectedCategory = null">Mostrar Todos</button>
  </div>
  <!-- Productos -->
  <div class="container">
    <div class="row-container">
      <div class="row" v-for="product in shownProducts" :key="product.title" :id="product.category">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.title } }">
          <img :src="product.picture" :alt="product.title" />
          <h4>{{ product.title }}</h4>
          <p class="availability">{{ product.available ? "Disponible" : "No Disponible" }}</p>
          <p>{{ product.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../../assets/data/categoria.json'
import products from '../../assets/data/producto.json'

export default {
  name: 'ProductsCard',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      value: '',
      categories: categories,
      selectedCategory: null,
      products: products
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    shownProducts() {
      if (this.selectedCategory) {
        return this.products.filter(product => product.category === this.selectedCategory)
      }
      return this.products
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 1.5rem 1rem;
}

.row {
  max-width: 90%;
  box-shadow: 1px 1px 4px 1px #cfcfcf;
  border: 3px solid #afafaf;
  border-radius: 4px;
  margin-top: -3px;
  margin-left: -3px;

  img {
    width: 100%;
  }
}

.row:hover {
  border: 3px solid var(--main-color);
  margin-top: -3px;
  margin-left: -3px;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 25px;
}

img {
  max-width: 100%;
}

.availability {
  font-size: 17px;
  color: green;
  font-weight: 600;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
}

h4 {
  margin: 2px;
  font-size: 17px;
}

p {
  font-size: 16px;
  padding: 2px;
}

/* mediaqueries */
@media (min-width: 350px) and (max-width: 600px) {
  .row-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
.container-categories {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  flex-direction: row;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  .card-category {
    transition: all 0.4s ease;
    max-width: 45%;

    img {
      border-radius: 50%;
      width: 130px;
      box-shadow: 0.5px 1px 5px black;
    }

    h2 {
      font-size: 22px;
    }
  }

  .card-category:hover {
    transform: scale(1.3);
  }
}
</style>
