<template>
  <footer>
    <nav class="link-container">
      <div class="desktop-bg">
        <ul class="footer-list">
          <li class="footer-link">
            <router-link to="/" @click="scrollToTop">INICIO</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/productos" @click="scrollToTop">PRODUCTOS</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/contacto" @click="scrollToTop">CONTACTO</router-link>
          </li>
        </ul>
      </div>

      <div class="desktop-bg">
        <ul class="footer-list icon-flex">
          <li class="footer-link">
            <a
              href="https://www.facebook.com/Cambialocom-111304798084313/"
              target="_blank"
              rel="noreferrer"
            >
              <font-awesome-icon :icon="['fab', 'facebook-square']" />
            </a>
          </li>
          <li class="footer-link">
            <a href="https://www.instagram.com/cambialo.eu/" target="_blank" rel="noreferrer">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li class="footer-link">
            <a href="https://twitter.com/CambialoES" target="_blank" rel="noreferrer">
              <font-awesome-icon :icon="['fab', 'twitter-square']" />
            </a>
          </li>
        </ul>
      </div>

      <div class="desktop-bg">
        <ul class="footer-list">
          <li class="footer-link">
            <a href="mailto:info@cambialo.es">SOPORTE</a>
          </li>
          <li class="footer-link">
            <router-link to="/terminos-y-condiciones" target="_blank">AVISO LEGAL</router-link>
          </li>
          <li class="footer-link">
            <router-link to="/conocenos" @click="scrollToTop">CONÓCENOS</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="footer-flex">
      <router-link to="/">
        <img class="logo" src="../assets/img/logo-small.jpg" alt />
      </router-link>
      <p>Cámbialo -</p>
      <p>Copyright © 2022, Intrepid Ibex ©</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  methods: {
    // eslint-disable-next-line space-before-function-paren
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--main-color);
  border-radius: 8px;
  padding: 1rem;
  width: 70%;
  margin: 0 auto;
  font-weight: 500;
}

.footer-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  a {
    width: 25px;
    height: 25px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  h4 {
    color: var(--darker-grey);
    font-family: var(--title-font);
    margin: 0;
    margin-left: 1rem;
    font-weight: 400;
  }

  p {
    font-family: var(--text-font);
    color: var(--darker-grey);
    margin: 0;
    margin-left: 0.5rem;
    text-align: center;
    font-size: 14px;
  }
}

.icon-flex {
  display: flex;
  justify-content: center;
}

.footer-list {
  list-style: none;
  text-align: center;
  font-family: var(--text-font);
  margin: 0;
  padding: 0;

  li {
    a {
      color: #fff;
      display: inline-block;
      width: 100%;
      margin-bottom: 0.75rem;

      svg {
        width: 5rem;
        font-size: 2rem;
      }
    }
  }
}

/* Media query */

@media (min-width: 600px) {
  .icon-flex {
    display: block;
  }

  .link-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}

@media (min-width: 1000px) {
  .icon-flex {
    display: flex;
  }

  .link-container {
    max-width: 60%;
  }
}
</style>
