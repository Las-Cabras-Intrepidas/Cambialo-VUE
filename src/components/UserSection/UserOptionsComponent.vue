<template>
  <div>
    <!-- <h2>¿Qué quieres cambiar hoy?</h2> -->
  </div>
  <!-- <div class="buttons">
    <button>Subir Artículo</button>
    <button>Mirar la tienda</button>
  </div> -->
</template>
<script>
export default {
  name: 'UserOptionsComponent'
}
</script>
<style lang="scss" scoped>
h2 {
  margin-top: 2rem;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  button {
    background-color: #022ab0;
    color: #fff;
    font-weight: 600;
    font-size: 16px;
    padding: 1.5rem 1rem;
    border-radius: 8px;
    border: 1px solid #022ab0;
  }
}

@media (min-width: 768px) {
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
      margin: 1rem;
    }
  }
}
</style>
