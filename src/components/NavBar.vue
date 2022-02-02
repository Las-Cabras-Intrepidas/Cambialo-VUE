<template>
  <!-- Menu Desktop -->
  <nav v-if="!mobile" class="navbar desktop-bar flex">
    <!-- Logo -->
    <div class="logo-container">
      <router-link to="/" @click="scrollToTop">
        <img src="../assets/img/logo-small.jpg" alt="Logotipo" />
      </router-link>
      <router-link to="/" @click="scrollToTop">
        <p>CÁMBIALO</p>
      </router-link>
    </div>
    <!-- Barra de busqueda-->
    <div class="search-container desktop-search">
      <div class="inner-container">
        <input type="search" id="search" placeholder="Busca en todas las categorías..." />
        <button class="icon">
          <font-awesome-icon icon="search" />
        </button>
      </div>
    </div>
    <!-- Enlaces de navegacion-->
    <div class="link-container flex">
      <ul class="nav-list flex">
        <li>
          <router-link to="/" @click="scrollToTop">Inicio</router-link>
        </li>
        <li>
          <router-link to="/productos" @click="scrollToTop">Productos</router-link>
        </li>
        <li>
          <router-link to="/contacto" @click="scrollToTop">Contacto</router-link>
        </li>
      </ul>
      <!-- Botones Sign In -->
      <div id="botonesLogin" class="login-buttons">
        <button v-if="!existUser"  id="btnInicio">
          <router-link to="/login" @click="scrollToTop">Iniciar sesión</router-link>
        </button>
        <button v-if="!existUser" id="btnRegistro">
          <router-link to="/registrate" @click="scrollToTop">Registrarse</router-link>
        </button>
        <button v-if="existUser" id="btnUserPage">
          <router-link to="/usuario">{{$store.state.user.email}}</router-link>
        </button>
        <button v-if="existUser" @click="logOut" id="btnLogOut">
          <router-link to="/">Cerrar sesión</router-link>
        </button>
        <!-- <router-link to="/usuario">
          <font-awesome-icon v-if="existUser" :icon="['fas', 'user']" />
        </router-link>
        <router-link to="/">
          <font-awesome-icon v-if="existUser" @click="logOut" :icon="['fas', 'power-off']" />
        </router-link> -->
      </div>
    </div>
  </nav>

  <!-- Menu Mobile -->
  <nav v-else class="navbar mobile-bar">
    <div>
      <!-- Logo -->
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/img/logo-small.jpg" alt="Logotipo" />
        </router-link>
        <p>CÁMBIALO</p>
      </div>
      <!-- Boton Menu hamburguesa -->
      <button @click="toggleMobileNav" v-show="mobile" class="mobile-nav-toggle" :class="{ 'icon-active': mobileNav }">
        <span class="sr-only">Menu</span>
      </button>
      <!-- Enlaces de navegacion hamburguesa-->
      <transition v-show="mobileNav" class="nav-list mobile-navigation" name="mobile-nav">
        <div>
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
    </div>
    <!-- Barra de busqueda -->
    <div class="search-container mobile-search">
      <div class="inner-container">
        <input type="search" id="search" placeholder="Busca en todas las categorías..." />
        <button class="icon">
          <font-awesome-icon icon="search" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAuth, signOut } from 'firebase/auth'
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
      if (this.windowWidth <= 900) {
        this.mobile = true
      } else {
        this.mobile = false
        this.mobileNav = false
      }
    },
    // funcion boton logout
    logOut () {
      const auth = getAuth()
      signOut(auth)
        .then(() => {
          this.$router.replace('/')
        })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    ...mapGetters(['existUser'])
  }
}

</script>

<style lang="scss" scoped>

.icon {
  font-size: 24px;
  color: blue;
}

ul {
  padding: 0;
}

.flex {
  display: flex;
  align-items: center;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  position: sticky;
  background-color: #fff;
  top: 0;
  left: 0;
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

.desktop-bar {
  justify-content: space-between;
}

.desktop-search {
  width: 33%;
}

.logo-container {
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-top: 0.5rem;

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

.search-container {
  margin: 0.5rem 1.5rem;
  display: flex;
  background: none;
  align-content: center;
  justify-content: center;
  border: none;
  // overflow: hidden;

  .inner-container {
    display:flex;
    white-space: nowrap;
    width: 100%;
    font-size: 0.875rem;

    input {
      width: 100%;
      height: 3.125rem;
      background: #fff;
      border: 1px solid #a1a1a128;
      border-right: none;
      color: #000;
      padding-left: 1rem;
      border-radius: 25px 0 0 25px;
      outline: none;
      transition: 50ms;
    }

    button {
      border-radius: 0 25px 25px 0;
      border: 1px solid #a1a1a128;
      padding: 0;
      border-left: none;
      background: none;
      height: 3.125rem;
      width: 3.125rem;
      transition: all 550ms ease;
      color: var(--main-color);
      font-size: 1rem;
    }
  }

  .inner-container:hover,
  .inner-container:active,
  .inner-container:focus {
    input {
      border: 2px solid var(--main-color);
    }
    button {
      background: var(--main-color);
      cursor: pointer;
      color: #fff;
    }

    button:hover {
      background: var(--main-color);
      font-size: 1.25rem;
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

  a {
    border-bottom: 3px solid transparent;
  }

  a:hover {
    border-bottom: 3px solid var(--main-color);
    transition: all 300ms;
  }
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
  top: 1.5rem;
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

@media (max-width: 1200px) {
  #btnRegistro {
    display: none;
  }

  #btnInicio {
    white-space:nowrap;
  }
}

@media (min-width: 1350px) {
  .desktop-bar {
    margin: auto;
    justify-content: space-evenly;
  }
}

@media (min-width: 1560px) {

  .search-container {
    width: 40%;
  }
}

</style>
