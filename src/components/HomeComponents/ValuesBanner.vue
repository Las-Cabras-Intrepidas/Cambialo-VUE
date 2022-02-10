<template>
  <section class="central-cards">
    <div class="cards-container">
      <div class="card">
        <h3>Atencion al cliente</h3>
        <p>
          Contacta con nosotros y resolveremos cualquier duda o incidencia.
          Estamos a tu disposición las 24 horas del día. Puedes acceder a nuestros datos de contacto a través de nuestro
          <router-link to="/contacto">formulario</router-link>.
        </p>
      </div>
      <div class="card">
        <h3>Compromiso</h3>
        <p>
          Nuestro objetivo es ayudarte a realizar cambios fácilmente.
          Mejoramos para darte la mejor experiencia mientras das una segunda vida a las cosas que ya no necesitas.
        </p>
      </div>
      <div class="card">
        <h3>Gestión de incidencias</h3>
        <p>
          Con tecnología innovadora y estricta seguridad, reducimos riesgos para un mayor nivel de protección.
          Te
          <strong>garantizamos</strong> un trueque justo.
        </p>
      </div>
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

  .cards-container {
    display: flex;
    flex-direction: row;
    margin: 1.5rem 2rem;
    margin-bottom: 4rem;
  }

  div.card {
    border-radius: 0.5rem;
    width: 85%;
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

    h3 {
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

div.card:hover {
  box-shadow: 0 14px 28px rgba(36, 57, 77, 0.25),
    0 10px 10px rgba(44, 57, 95, 0.103);
}

@media (max-width: 1000px) {
  .central-cards {
    .cards-container {
      flex-direction: column;
    }
  }
}
</style>
