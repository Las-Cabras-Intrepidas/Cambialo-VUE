<template>
  <div class="slogan-banner">
    <h2 class="slogan-title">
      <strong>¿Cuál va a ser tu próximo cambio?</strong>
    </h2>
    <p class="slogan-text">
      Cámbialo te ofrece la oportunidad de darle valor a lo que creías que ya no lo tenía
    </p>
  </div>
<hr />
</template>

<script>
export default {
  name: 'SloganBanner'
}
</script>

<style lang="scss" scoped>

  .slogan-banner {
  margin: auto;
  width: 80%;
  margin-top: 3rem;
  text-align: center;

    p {
    color: var(--darker-gray);
    margin-bottom: 1rem;
    }

    h2 {
    font-size: 2rem;
    }
  }

  hr {
    background: #012bb3b3;
    border: 2.5px solid #012bb3b3;
    border-radius: 25px;
    width: 20rem;
    margin: 2rem auto;
    padding: 0px 7%;
  }
</style>
