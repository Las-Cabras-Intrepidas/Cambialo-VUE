<template>
  <!-- Logo -->
  <div class="nav-bar">
    <div class="logo-box">
      <router-link to="/">
        <img src="../assets/img/logo-small.jpg" alt="Logotipo" />
      </router-link>
      <p>CÁMBIALO</p>
    </div>
  <!-- Barra de busqueda -->
    <div class="search-bar">
      <div class="inner-container">
        <input
          type="search"
          id="search"
          placeholder="Busca en todas las categorías ..."
          />
        <button class="icon"><i class="fa fa-search"></i></button>
      </div>
    </div>
  <!-- Botnon Menu hamburguesa -->
    <button class="mobile-nav-toggle" aria-controls="main-menu" aria-expanded="false">
      <span class="sr-only">Menu</span>
    </button>
  <!-- Enlaces de navegacion-->
    <nav class="link-box" data-visible="false">
      <ul id="main-menu">
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/productos">Productos</router-link></li>
        <li><router-link to="/contacto">Contacto</router-link></li>
      </ul>
    </nav>
  <!-- Botones Sign In -->
    <div id="botonesLogin" class="login-buttons">
      <button id="btnInicio">
        <router-link to="/login">Iniciar sesión</router-link>
      </button>
      <button id="btnInicio">
        <router-link to="/login">Registrarse</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}

</script>

<style lang="scss" scoped>

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
}

.logo-box {

  display: flex;

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
      -moz-border-radius-topright: 25px;
      -moz-border-radius-bottomright: 25px;
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

  .inner-container:hover, .inner-container:active, .inner-container:focus {
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

.link-box {
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  li {
    font-weight: 600;
    color: #000;
    font-size: 1.125rem;
  }

  li + li {
    margin-left: 1rem;
  }

  li:hover {
    border-bottom: 3px solid var(--main-color);
    transition: all 200ms;
  }
}

.login-buttons {

  button {
    padding: 8px 20px;
    border-radius: 30px;
    font-size: 16px;
    background-color: #fff;
    color: var(--main-color);
    border: 2px solid var(--main-color);
    text-decoration: none;
    transition: all 300ms;
    margin-right: 0.5rem;
  }

  button:hover {
    color: #fff;
    background-color: var(--main-color);
    text-decoration: none;

    a {
      color: #fff;
    }
  }
}

.mobile-nav-toggle {
  display: none;
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

</style>
