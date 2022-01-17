<template>
  <br>
    <section class="central-cards">
        <div>
            <h2>Atencion al cliente</h2>
            <p>Contacta con nosotros para resolver cualquier tipo de incidencia o duda. Estamos a tu disposición las 24 horas del día. Puedes acceder a nuestros datos de contacto <router-link to="/contacto">aquí</router-link>.</p>
        </div>
        <div>
            <h2>Compromiso</h2>
            <p> Nuestro objetivo es ayudarlo a realizar sus cambios fácilmente. Comprometidos mejorar nuestro servicio cada día para que intercambiar y darle una segunda vida a cosas que ya no necesitas.</p>
        </div>
        <div>
            <h2>Gestión de incidencias</h2>
            <p> Con tecnología innovadora y estricta seguridad, reducimos riesgos y brindamos un mayor nivel de protección en el intercambio, garantizando un trueque justo.</p>
        </div>
    </section>
    <br>
</template>

<script>
export default {
  name: 'ValuesBanner'
}
</script>

<style lang="scss" scoped>

.central-cards {
  display: flex;
  justify-content: baseline;
  align-items: center;
  margin: 30px 0px 50px 50px;

  div {
    width: 80%;
    height: 190px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: justify;
    background-color: #284ab6;
    color: #fff;
    margin: 10px;
    padding: 15px;

    h2 {
      font-weight: 500;
      font-size: 1.1rem;
    }

    p {
      padding: 10px;
      font-size: 0.9rem;
    }

    a {
      text-decoration: none;
      }
    }
}

@media (max-width: 580px) {
  .central-cards {
    display: flex;
    flex-direction: column;

    div {
      height: 260px;
    }
  }
}
@media (min-width: 580px) and (max-width: 1030px) {
  .central-cards {
    display: flex;
    flex-direction: column;

    div {
      height: 140px;
    }
  }
}

@media (min-width: 2300px) {

  .central-cards {
    div {
      height: 130px;
    }
  }
}
</style>
