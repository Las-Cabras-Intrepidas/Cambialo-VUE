<template>
  <nav class="link-container">
    <div class="desktop-bg">
      <ul class="footer-list">
        <li class="footer-link">
          <router-link to="/">INICIO</router-link>
          <!-- <a href="../views/Home.vue">INICIO</a> -->
        </li>
        <li class="footer-link">
          <a href="product.html">PRODUCTOS</a>
        </li>
        <li class="footer-link">
          <a href="#form">CONTACTO</a>
        </li>
      </ul>
    </div>

    <div class="desktop-bg">
      <ul class="footer-list icon-flex">
        <li class="footer-link">
          <a
            href="https://www.facebook.com/Cambialocom-111304798084313/"
            target="_blank"
            ><i class="rrss-icon fab fa-facebook-square"></i
          ></a>
        </li>
        <li class="footer-link">
          <a href="https://www.instagram.com/cambialo_es/" target="_blank"
            ><i class="rrss-icon fab fa-instagram"></i
          ></a>
        </li>
        <li class="footer-link">
          <a href="https://twitter.com/CambialoES" target="_blank"
            ><i class="rrss-icon fab fa-twitter-square"></i
          ></a>
        </li>
      </ul>
    </div>

    <div class="desktop-bg">
      <ul class="footer-list">
        <li class="footer-link">
          <a href="mailto:info@cambialo.es">SOPORTE</a>
        </li>
        <li class="footer-link">
          <a href="terms-conditions.html">AVISO LEGAL</a>
        </li>
        <li class="footer-link">
          <a href="#">CONOCENOS</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="footer-flex">
    <a href="#">
      <img class="logo" src="img/logotipo3.svg" width="25" height="25" alt="" />
    </a>
    <h4 class="footer-title">Cámbialo -</h4>
    <p class="footer-rights">Copyright © 2021, Cámbialo ©</p>
  </div>
</template>

<script>
export default {
  name: 'FooterBar'
}
</script>

<style scoped>
.link-container {
  background-color: var(--action-color);
  border-radius: 8px;
  padding: 1rem;
  width: 70%;
  margin: 0 auto;
}

.footer-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-flex a {
  padding-left: 1rem;
}

.footer-title {
  color: #fff;
  font-family: var(--title-font);
  margin-left: 1rem;
}

.footer-rights {
  font-family: var(--text-font);
  color: #fff;
  margin-left: 0.5rem;
  text-align: center;
  font-size: 14px;
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
}

.footer-link a {
  color: #fff;
  display: inline-block;
  width: 100%;
  margin-bottom: 0.75rem;
}

.footer-flex a img {
  width: 25px;
  height: 25px;
}

.rrss-icon {
  width: 5rem;
  font-size: 2rem;
}

/* Media query */

@media (min-width: 600px) {
  .icon-flex {
    display: block;
  }

  .link-container {
    display: flex;
    justify-content: space-between;
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
