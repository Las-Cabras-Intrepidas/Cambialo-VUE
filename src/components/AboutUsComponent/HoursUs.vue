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
        <font-awesome-icon icon="arrow-right" />
      </div>
      <div>
        <font-awesome-icon icon="arrow-right" />
      </div>
      <div>
        <font-awesome-icon icon="arrow-right" />
      </div>
      <div>
        <font-awesome-icon icon="arrow-right" />
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
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  div {
    padding: 40px;
  }
}

.container-arrows {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  div {
    margin-left: 70px;
    margin-bottom: 30px;
    padding-right: 180px;
  }
}
</style>
