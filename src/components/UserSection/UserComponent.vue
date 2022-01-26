<template>
  <div>
    <h1 class="left-align">¡Hola, Bárbara!</h1>
  </div>
  <div class="users-options">
    <div>
      <font-awesome-icon icon="boxes" class="icon" />
      <p>Mis Productos</p>
    </div>
    <div>
      <font-awesome-icon icon="envelope" class="icon" />
      <p>Mis Mensajes</p>
    </div>
    <div>
      <font-awesome-icon icon="star" class="icon" />
      <p>Mis Favoritos</p>
    </div>
    <div>
      <font-awesome-icon icon="box" class="icon" />
      <p>Mis Solicitudes</p>
    </div>
    <div>
      <font-awesome-icon icon="sync-alt" class="icon" />
      <p>Mis Cambios</p>
    </div>
    <div>
      <font-awesome-icon icon="search" class="icon" />
      <p>Mis Reseñas</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserComponent'
}
</script>
<style lang="scss" scoped>
.left-align {
  text-align: left;
  margin-left: 1rem;
  margin-bottom: 3rem;
}

.users-options {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  p {
    font-size: 18px;
  }
}

.icon {
  font-size: 24px;
  color: rebeccapurple;
}

@media (min-width: 768px) {
  .users-options {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
