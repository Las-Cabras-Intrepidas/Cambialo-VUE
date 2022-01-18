<template>
  <div class="container-categories">
    <div class="card-category" v-for="category in categories" :key="category.id">
      <a href="#{category.category}">
        <img
          class="img-category"
          :src="category.picture"
          :alt="category.category"
        />
        <h2>{{ category.category }}</h2>
      </a>
    </div>
  </div>
</template>

<script>
import categories from '../../assets/data/categoria.json'

export default {
  name: 'Categories',
  data () {
    return {
      categories: categories
    }
  }
}
</script>

<style lang="scss" scoped>

.container-categories {
  display: flex;
  justify-content: space-evenly;
  margin-top: 2.5rem;
  flex-direction: row;
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
