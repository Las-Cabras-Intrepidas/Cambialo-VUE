<template>
  <div class="slogan-banner">
    <h2>
      <strong>¿Quieres devolver tu regalo de Reyes y Navidad?</strong>
    </h2>
    <p>Te damos la posibilidad de cambiar los regalos sin dejar la moral de tu familia y amigos por los suelos.</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
.slogan-banner {
  padding: 2rem 0;
}
h2 {
  font-size: 30px;
  color: black;
}

hr {
  min-width: 300px;
  max-width: 400px;
  background: #012bb3;
  border: 3px solid #012bb3;
  border-radius: 8px;
}

p {
  font-size: 19px;
}
</style>
