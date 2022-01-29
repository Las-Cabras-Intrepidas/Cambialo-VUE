<template>
  <section class="central-cards">
    <div>
      <h2>Atencion al cliente</h2>
      <p>
        Contacta con nosotros y resolveremos cualquier duda o incidencia.
        <br>
      Estamos a tu disposición las 24 horas del día. Puedes acceder a nuestros datos de contacto
        <router-link to="/contacto">aquí</router-link>.
      </p>
    </div>
    <div>
      <h2>Compromiso</h2>
      <p>Nuestro objetivo es ayudarte a realizar tus cambios fácilmente.
      <br>
        Mejoramos para darte la mejor experiencia mientras das una segunda vida a las cosas que ya no necesitas.</p>
    </div>
    <div>
      <h2>Gestión de incidencias</h2>
      <p>Con tecnología innovadora y estricta seguridad, reducimos riesgos brindántote un mayor nivel de protección.
      <br>
      Te garantizamos un trueque justo.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ValuesBanner'
}
</script>

<style lang="scss" scoped>
.central-cards {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 2rem;
  margin-bottom: 4rem;

  div {
    width: 75%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #113ccc;
    color: #fff;
    margin: 10px;
    padding: 1rem;
    padding-bottom: 1.5rem;

    h2 {
      font-weight: 600;
      font-size: 1.25rem;
    }

    p {
      font-size: 1rem;
      text-align: center;
      font-weight: 500;
      max-width: 80%;
      margin: 0.5rem 0;

      a {
        color: #fff;
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: 750px) {
  .central-cards{
    div {
      width: 65%;
    }
  }
}

@media (min-width: 1000px) {
  .central-cards {
    flex-direction: row;
    justify-content: center;
    div {
      width: 25%;
    }
  }
}

@media (min-width: 1500px) {
    .central-cards{
    div {
      width: 20%;
      }
    }
}
</style>
