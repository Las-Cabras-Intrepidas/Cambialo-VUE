<template>
  <section class="banner-container">
    <div class="info">
      <h1>NUESTRO PROPÓSITO</h1>
      <p
        class="text-banner"
      >Crear un espacio seguro para la gran demanda de cambios que hemos venido estudiando, dándole al usuario esta opción, además de forma segura.</p>
    </div>
  </section>
  <section>
    <div class="our-movement">
      <h2>Nuestra web defiende la compra consciente</h2>
      <hr />
      <p
        class="movement"
      >Creemos que no hace falta comprar algo que otra persona tiene, está en buen estado y ya no usa. Promovemos el ahorro y la durabilidad de los artículos para así salvar el planeta.</p>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style scoped>
.banner-container {
  padding: 10px;
}
.info {
  color: black;
  background-image: url(../../assets/img/Trading23.png);
  background-repeat: repeat;
  width: 70%;
  border-radius: 19px;
  padding: 20px;
  margin: 0 auto;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h1 {
  text-shadow: 0px 3px 6px rgb(71, 71, 71);
}
.text-banner {
  font-size: 19px;
  font-weight: 600;
  margin-top: 0;
  padding: 0 170px;
}

.our-movement {
  width: 72%;
  margin: 0 auto;
  padding-top: 15px;
}
h2 {
  color: #022ab0;
}
hr {
  background-color: black;
  width: 250px;
  border: 1px solid black;
}
.movement {
  font-weight: 400;
  font-size: 19px;
  text-shadow: 0px 3px 6px #fff;
}
</style>
