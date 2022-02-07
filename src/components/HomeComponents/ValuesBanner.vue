<template>
  <section class="central-cards">
    <div>
      <h1>Atencion al cliente</h1>
      <p>
        Contacta con nosotros y resolveremos cualquier duda o incidencia.
        Estamos a tu disposición las 24 horas del día. Puedes acceder a nuestros datos de contacto
        <router-link to="/contacto">aquí</router-link>.
      </p>
    </div>
    <div>
      <h1>Compromiso</h1>
      <p>
        Nuestro objetivo es ayudarte a realizar cambios fácilmente.
        Mejoramos para darte la mejor experiencia mientras das una segunda vida a las cosas que ya no necesitas.
      </p>
    </div>
    <div>
      <h1>Gestión de incidencias</h1>
      <p>
        Con tecnología innovadora y estricta seguridad, reducimos riesgos para un mayor nivel de protección.
        Te
        <strong>garantizamos</strong> un trueque justo.
      </p>
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
  flex: 1 1 800px;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 2rem;
  margin-bottom: 4rem;
  width: 100%;
  height: 100%;

  div {
    border-radius: 0.5rem;
    display: flex;
    text-align: justify;
    flex-direction: column;
    align-items: center;
    background-color: #113ccc;
    color: #fff;
    margin: 12.5px;
    padding: 0.7rem;
    padding-bottom: 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(36, 57, 77, 0.25);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

    h1 {
      font-weight: 800;
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
      text-align: justify;
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
div:hover {
  box-shadow: 0 14px 28px rgba(36, 57, 77, 0.25),
    0 10px 10px rgba(44, 57, 95, 0.103);
}

@media (min-width: 750px) {
  .central-cards {
    div {
    }
  }
}

@media (min-width: 1000px) {
  .central-cards {
    flex-direction: row;
    justify-content: center;
    div {
    }
  }
}

@media (min-width: 1500px) {
  .central-cards {
    div {
    }
  }
}
</style>
