<template>
  <div class="container">
    <div class="row-container">
    <div class="row" v-for="product in products" :key="product.id">
      <img :src="product.picture" :alt="product.title" />
      <h4>{{ product.title }}</h4>
      <p class="availability">{{ product.available ? "Disponible" :  "No Disponible"}}</p>
      <p>{{ product.description }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import products from '../../assets/data/producto.json'

export default {
  name: 'ProductsCard',
  data () {
    return {
      products: products
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 1rem;
}

.row {
  border: 3px solid grey;
  border-radius: 8px;
  max-width: 80%;
  box-shadow: 1px 1px 7px 1px grey;
}

.row:hover {
  border: 4px solid #012bb3;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 25px;
}

img {
  max-width: 90%;
}

.availability {
  color: green;
  font-weight: 600;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
}

h4 {
  margin: 2px;
}

p {
  font-size: 15px;
  padding: 2px;
}

/* mediaqueries */
@media (min-width: 350px) and (max-width: 600px) {
  .row-container {
      grid-template-columns: repeat(2, 1fr);
  }
}
</style>
