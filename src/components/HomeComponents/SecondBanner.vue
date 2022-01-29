<template>
  <div class="center">
    <div class="color-banner flex">
      <div>
      <h3>¡Compra sin dinero!</h3>
      <h4>Únete a la nueva plataforma de intercambio</h4>
      </div>
      <button>Empieza Aqui</button>
    </div>
  </div>
    <img class="hashtag" src="../../assets/img/hero_banner.webp" />
</template>

<script>
export default {
  name: 'SecondBanner'
}
</script>

<style lang="scss" scoped>

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex {
  display: flex;
}
.color-banner {
  background: url('../../assets/img/Trading2.webp');
  background-position-y: center;
  background-size: cover;
  box-shadow: inset 0 0 0 200px rgba(66, 96, 194, 0.75);
  justify-content: space-around;
  width: 100%;
  margin: 3rem 0;
  margin-bottom: 0;
  color: rgb(255, 255, 255);
  align-items: center;

  div {
    text-align: start;
    margin: 5rem 2rem;
    max-width: 50%;

    h3, h4 {
      margin: 0;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    h4 {
      font-size: 1.3rem;
    }

  }

  button {
    padding: 5px 20px;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    background-color: rgb(255, 255, 255);
    color: var(--main-color);
    border: 2px solid var(--main-color);
    text-decoration: none;
    transition: all 300ms;
    min-height: 3rem;
    margin-right: 0.5rem;

    a {
      color: var(--main-color);
    }
  }

  button:hover {
    color: #fff;
    background-color: var(--main-color);
    border: 2px solid #fff;
    text-decoration: none;
    cursor: pointer;

    a {
      color: #fff;
    }
  }
}

img {
  max-width: 90%;
}

  @media (min-width: 700px) {
    .hashtag {
    max-width: 75%;
    }
  }

  @media (min-width: 900px) {
    .hashtag {
    max-width: 60%;
    }
  }

  @media (min-width: 1100px) {
    .hashtag {
    max-width: 45%;
    }
  }

  @media (min-width: 1300px) {
    .hashtag {
    max-width: 40%;
    }
  }
</style>
