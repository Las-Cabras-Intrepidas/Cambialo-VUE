<template>
  <div class="title-user">
    <h1 class="left-align">¡Hola, {{$store.state.user.email}}!</h1>
    <hr />
    <h2>¿Que quieres cambiar hoy?</h2>
  </div>
</template>
<script>
export default {
  name: 'UserComponent'
}
</script>
<style lang="scss" scoped>
.title-user{
  h1{
    text-align: center;
    margin-bottom: 1.5rem;
  }
}

hr {
  max-width: 400px;
  min-width: 300px;
  background: #012bb3;
  border: 3px solid #012bb3;
  border-radius: 8px;
}

.left-align {
  text-align: left;
  margin-left: 1rem;
  margin-bottom: 3rem;
}
</style>
