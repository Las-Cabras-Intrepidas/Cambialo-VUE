<template>
  <section class="mosaic-section">
    <div class="hero-container">
      <img id="hash-logo" src="../../assets/img/hero_banner.webp" alt="#LoQueNoUsesCambialo" />
      <h1>Conecta con otros usuarios y dale otra vida a lo que ya no usas.</h1>
      <button id="btnBorrar1">
        <router-link to="/registrate">Empieza aquí</router-link>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>

<style lang="scss" scoped>
.mosaic-section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/img/mosaic-image.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffffe6;
  color: black;
  width: 80%;
  padding: 1rem 0;

  img {
    width: 100%;
  }

  h1 {
    font-weight: 500;
    font-size: 1.25rem;
    margin: 2rem;
    width: 85%;
    text-align: center;
  }

  button {
    padding: 8px 20px;
    font-weight: 600;
    border-radius: 30px;
    line-height: 1.5rem;
    font-size: 1rem;
    background-color: #fff;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    text-decoration: none;
    transition: all 300ms;
    margin-right: 0.5rem;
    margin-bottom: 1.5rem;

    a {
      color: var(--main-color);
    }
  }

  button:hover {
    background-color: var(--main-color);
    text-decoration: none;

    a {
      color: #fff;
    }
  }
}

@media (min-width: 850px) {
  .hero-container{
    width: 70%;
    padding: 2rem 0;

    h1 {
      font-size: 1.5rem;
    }
  }
}

@media (min-width: 1200px) {
  .hero-container{
    width: 65%;
    margin: 1.5rem 0;
    img {
      width: 85%;
    }
    h1 {
      font-size: 1.65rem;
    }
  }
}

@media (min-width: 1500px) {
  .hero-container{
    margin: 2.5rem 0;
    width: 55%;
    img {
      width: 75%;
    }
    h1 {
      font-size: 1.65rem;
    }
  }
}
</style>
