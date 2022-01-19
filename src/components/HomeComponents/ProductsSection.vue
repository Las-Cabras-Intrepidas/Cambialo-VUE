<template>
  <div class="container">
    <div class="row-container">
    <div class="row" v-for="starProduct in starProducts" :key="starProduct.id" :id="starProduct.category">
      <img :src="starProduct.picture" :alt="starProduct.title" />
      <h4>{{ starProduct.title }}</h4>
      <p class="availability">{{ starProduct.available ? "Disponible" :  "No Disponible"}}</p>
      <p>{{ starProduct.description }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import starProducts from '../../assets/data/productoDestacado.json'

export default {
  name: 'ProductsSection',
  data () {
    return {
      starProducts: starProducts
    }
  }
}
</script>

<style lang="scss" scoped>

.container {
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 1rem;
}

.row {
  max-width: 80%;
  box-shadow: 1px 1px 4px 1px #afafaf;
}

.row:hover {
  border: 3px solid #012bb3;
  margin-top: -3px;
  margin-left: -3px;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 35px;
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
