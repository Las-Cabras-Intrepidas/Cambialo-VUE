<template>
  <section class="mosaic-section">
    <div class="mosaic-container">
      <img
        id="hash-logo"
        src="../../assets/img/hero_banner.webp"
        alt="#LoQueNoUsesCambialo"
      />
      <h1>
        Conecta con otros usuarios y dale otra vida a lo que ya no usas.
      </h1>
      <button id="btnBorrar1" >
        <a href="login-register.html">Empieza aquí</a>
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
  background-image: url('../../assets/img/mosaic-image.webp');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem 0;
}

.mosaic-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffffe6;
  border: 1px solid var(--shadow-color);
  box-shadow: 5px 18px 18px 5px var(--shadow-color);
  color: black;
  width: 80%;

  img {
    width: 100%;
  }

  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 2rem;
    width: 85%;
    text-align: center;
  }

  button {
    padding: 8px 20px;
    border-radius: 30px;
    line-height: 1.5rem;
    font-size: 1.125rem;
    background-color: #fff;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    text-decoration: none;
    transition: all 300ms;
    margin-right: 0.5rem;
    margin-bottom: 1.5rem;
  }

  button:hover {
    background-color: var(--main-color);
    text-decoration: none;

    a {
      color: #fff;
    }
  }
}
</style>
