<template>
  <div class="category-container">
    <div>
      <font-awesome-icon icon="tshirt" />
      <p>Ropa</p>
    </div>
    <div>
      <font-awesome-icon icon="gamepad" />
      <p>Juegos</p>
    </div>
    <div>
      <font-awesome-icon icon="paw" />
      <p>Mascotas</p>
    </div>
    <div>
      <font-awesome-icon icon="tv" />
      <p>Tecnología</p>
    </div>
    <div>
      <font-awesome-icon icon="home" />
      <p>Hogar</p>
    </div>
    <div>
      <font-awesome-icon icon="bowling-ball" />
      <p>Deportes</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriesBanner'
}
</script>

<style lang="scss" scoped>
svg {
  font-size: 40px;
}
.category-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 15%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto;
    width: 30%;

    i {
      font-size: 2.5rem;
    }

    p {
      font-size: 20px;
      font-family: var(--text);
      margin-top: 1rem;
    }
  }
}

@media (min-width: 1000px) {
  .category-container {
    margin: 0 20%;
  }
}

@media (min-width: 1400px) {
  .category-container {
    margin: 0 25%;
  }
}
</style>
