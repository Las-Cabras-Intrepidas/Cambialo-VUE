<template>
  <div class="category-container">
    <div>
        <i class="fas fa-tshirt"></i>
        <p>Ropa</p>
    </div>
    <div>
        <i class="fas fa-gamepad"></i>
        <p>Juegos</p>
    </div>
    <div>
        <i class="fas fa-paw"></i>
        <p>Mascotas</p>
    </div>
    <div>
        <i class="fas fa-tv"></i>
        <p>Consolas</p>
    </div>
    <div>
        <i class="fas fa-car"></i>
        <p>Coches</p>
    </div>
    <div>
        <i class="fas fa-bowling-ball"></i>
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
      font-size: 18px;
      font-family: var(--text);
      margin-top: 1rem;
    }
  }
}
</style>
