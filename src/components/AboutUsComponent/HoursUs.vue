<template>
  <div>
    <h2>NUESTROS LOGROS COMO EQUIPO</h2>
  </div>
  <div class="container-circle">
    <div class="circle">
      <font-awesome-icon icon="stopwatch" class="icon" />
      <h2>125 horas</h2>
      <p>Dedicadas a la web</p>
    </div>
    <div class="circle">
      <font-awesome-icon icon="dollar-sign" class="icon" />
      <h2>Miles de Euros</h2>
      <p>Ahorro garantizado</p>
    </div>
    <div class="circle">
      <font-awesome-icon icon="recycle" class="icon" />
      <h2>1 Tonelada</h2>
      <p>De materiales reciclados</p>
    </div>
  </div>
  <section>
    <div class="container-of-containers">
      <div class="container-lifetime">
        <div>
          <h1>Noviembre 2021</h1>
        </div>
        <div>
          <h1>Diciembre 2021</h1>
        </div>
        <div>
          <h1>Enero 2022</h1>
        </div>
        <div>
          <h1>Febrero 2022</h1>
        </div>
      </div>
      <div class="container-arrows">
        <div>
          <font-awesome-icon icon="arrow-down" class="line" />
          <p>Ni nos conocíamos...</p>
        </div>
        <div>
          <font-awesome-icon icon="arrow-down" class="line" />
          <p>Ya éramos un grupo e íbamos avanzando...</p>
        </div>
        <div>
          <font-awesome-icon icon="arrow-down" class="line" />
          <p>Terminamos nuestro primer proyecto en Vainilla...</p>
        </div>
        <div>
          <font-awesome-icon icon="arrow-down" class="line" />
          <p>Fuimos capaces de migrarlo todo a Vue.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style scoped lang="scss">
.container-circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;

  .circle {
    font-size: 16px;
    margin: 20px;
    border: 1px solid #012bb323;
    border-radius: 50%;
    width: 190px;
    height: 190px;
    box-shadow: 2px 2px 9px 1px grey;
    background-color: #012bb323;
    transition: all 0.4s ease;

    .icon {
      font-size: 32px;
      margin-top: 20px;
      color: #f69ab0;
    }
  }

  .circle:hover {
    transform: scale(1.2);
  }
}

.container-lifetime {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    padding: 30px;
  }
}

.container-arrows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    margin-bottom: 30px;
    padding-right: 1px;
    margin-top: -30px;
    padding-right: 10px;
  }
}

.line {
  color: var(--main-color);
}

@media (max-width: 768px) {
  .container-circle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section {
    display: none;
  }
}
</style>
