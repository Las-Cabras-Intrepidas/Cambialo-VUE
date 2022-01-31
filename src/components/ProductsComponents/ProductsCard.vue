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
        <div class="img-box">
          <img :src="product.picture" :alt="product.title" />
          <router-link :to="{ name: 'ProductDetail', params: { id: product.title } }">
            <font-awesome-icon class="icon" icon="handshake" />
          </router-link>
        </div>
        <div class="flex">
          <h4>{{ product.title }}</h4>
          <p class="availability">{{ product.available ? "Disponible" : "No Disponible" }}</p>
        </div>
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
button {
  padding: 8px 20px;
  font-weight: 600;
  border-radius: 30px;
  line-height: 1.5rem;
  font-size: 1rem;
  background-color: #fff;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  transition: all 300ms;
  margin-right: 0.5rem;
  margin-bottom: 1.5rem;

  a {
    color: var(--main-color);
  }
}
button:hover {
  background-color: var(--main-color);
  text-decoration: none;
  color: #fff;
}

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
  margin-top: 1.5rem;
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
  text-align: center;
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
.container-categories {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2rem;
  flex-direction: row;
  margin-bottom: 2rem;
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
