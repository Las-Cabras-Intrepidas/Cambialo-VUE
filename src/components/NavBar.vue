<template>
  <!-- Logo -->
  <nav class="nav-bar">
    <div class="logo-box">
      <router-link to="/">
        <img src="../assets/img/logo-small.jpg" alt="Logotipo" />
      </router-link>
      <p>CÁMBIALO</p>
    </div>
    <!-- Barra de busqueda -->
    <!-- <div class="search-bar">
      <div class="inner-container">
        <input type="search" id="search" placeholder="Busca en todas las categorías ..." />
        <button class="icon">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>-->
    <div >
      <!-- Enlaces de navegacion-->
      <div v-if="!mobile" class="flex">
        <ul class="nav-list window-navigation">
          <li>
            <router-link to="/">Inicio</router-link>
          </li>
          <li>
            <router-link to="/productos">Productos</router-link>
          </li>
          <li>
            <router-link to="/contacto">Contacto</router-link>
          </li>
        </ul>
        <!-- Botones Sign In -->
        <div v-show="!mobile" id="botonesLogin" class="login-buttons">
          <button id="btnInicio">
            <router-link to="/login">Iniciar sesión</router-link>
          </button>
          <button id="btnInicio">
            <router-link to="/registrate">Registrarse</router-link>
          </button>
        </div>
      </div>

      <!-- Enlaces de navegacion hamburguesa-->
      <transition v-else name="mobile-nav">
        <div v-show="mobileNav" class="nav-list mobile-navigation">
          <ul>
            <li>
              <router-link to="/">Inicio</router-link>
            </li>
            <li>
              <router-link to="/productos">Productos</router-link>
            </li>
            <li>
              <router-link to="/contacto">Contacto</router-link>
            </li>
          </ul>
          <div id="botonesLogin" class="login-buttons">
            <button id="btnInicio">
              <router-link to="/login">Iniciar sesión</router-link>
            </button>
            <button id="btnInicio">
              <router-link to="/registrate">Registrarse</router-link>
            </button>
          </div>
        </div>
      </transition>

      <!-- Boton Menu hamburguesa -->
      <button @click="toggleMobileNav" v-show="mobile" class="mobile-nav-toggle" :class="{ 'icon-active': mobileNav }">
        <span class="sr-only">Menu</span>
      </button>
    </div>
  </nav>
</template>

<script>
/* eslint-disable space-before-function-paren */
export default {
  name: 'NavBar',
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
      } else {
        this.mobile = false
        this.mobileNav = false
      }
    }
  }
}

</script>

<style lang="scss" scoped>

ul {
  padding: 0;
}

.nav-bar {
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  border-bottom: 2px solid var(--shadow-color);
  box-shadow: 0px 18px 15px -10px var(--shadow-color);
  z-index: 10;
  padding: 0;

  a {
    display: inline-block;
  }

  nav {
    margin-right: 1rem;
  }
}

.logo-box {
  display: flex;
  align-items: center;

  img {
    width: 4rem;
  }

  p {
    margin-left: 10px;
    font-weight: 600;
    letter-spacing: 0.75px;
    font-size: 1.25rem;
  }
}

.search-bar {
  margin: 25px;
  width: 40%;
  display: flex;
  background: none;
  align-content: center;
  justify-content: center;
  border: none;
  overflow: hidden;

  .inner-container {
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;

    input {
      width: 100%;
      height: 50px;
      background: #fff;
      border: 1px solid #a1a1a128;
      font-size: 10pt;
      float: left;
      color: #000;
      padding-left: 15px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      border-radius: 25px;
    }

    button {
      -webkit-border-top-right-radius: 25px;
      -webkit-border-bottom-right-radius: 25px;
      border-top-right-radius: 25px;
      border-bottom-right-radius: 25px;

      border: none;
      background: #012bb3;
      height: 50px;
      width: 50px;
      color: #fff;
      opacity: 0;
      font-size: 10pt;

      -webkit-transition: all 0.55s ease;
      -moz-transition: all 0.55s ease;
      -ms-transition: all 0.55s ease;
      -o-transition: all 0.55s ease;
      transition: all 0.55s ease;
    }
  }

  .inner-container:hover,
  .inner-container:active,
  .inner-container:focus {
    button {
      outline: none;
      opacity: 1;
      margin-left: -50px;
    }

    button:hover {
      background: #fff;
    }
  }
}

.nav-list {
  li {
    font-weight: 600;
    color: #000;
    font-size: 1.125rem;
    list-style: none;
    margin-right: 1rem;
  }

  a:hover {
    border-bottom: 3px solid var(--main-color);
    transition: all 300ms;
  }
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-navigation {
  position: fixed;
  inset: 0 0 0 35%;
  background: #d7e4f0f8;
  display: block;
  padding: 5rem 2rem;
  gap: 2em;
  transition: all 300ms;

  @supports (backdrop-filter: blur(1rem)) {
    .link-box {
      background: #5175b51a;
        backdrop-filter: blur(1rem);
      }
   }

  li {
    margin-bottom: 2.5rem;
  }

  button {
    margin-bottom: 1.5rem;
  }
}

.window-navigation {
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
}

.login-buttons {
  button {
    padding: 11px 20px;
    padding-top: 11px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    background-color: #ffffffe1;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    text-decoration: none;
    transition: all 300ms;
    margin-right: 0.5rem;

    a {
      color: var(--main-color);
    }
  }

  button:hover {
    color: #fff;
    background-color: var(--main-color);
    text-decoration: none;
    cursor: pointer;

    a {
      color: #fff;
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 600ms ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(100%);
}

.mobile-nav-enter-to {
  transform: translateX(0px);
}

.mobile-nav-toggle {
  position: absolute;
  background: url('../assets/img/square.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 2rem;
  aspect-ratio: 1;
  top: 1rem;
  right: 1.5rem;
  z-index: 50;
  border: none;
  display: block;
  }

  .mobile-nav-toggle:hover {
    cursor: pointer;
  }

  .icon-active {
    background-image: url('../assets/img/cancel.png');
   }

.sr-only {
  display: none;
}

#btnCierreSesion {
  background-color: var(--main-color);
  border: solid black 0.5px;
  border-radius: 5px;
  color: #fff;
  height: 28px;
  width: 90px;
}

@media (max-width: 900px) {

}

</style>
