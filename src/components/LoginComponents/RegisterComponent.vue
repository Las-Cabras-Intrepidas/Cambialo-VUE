<template>
  <section class="login-section">
    <div class="main-container">
      <div class="back-box">
        <div class="login-info">
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Iniciar sesión para entrar en la página</p>
          <button id="loginButton2">Iniciar sesión</button>
        </div>
        <div class="signin-info">
          <h3>¿Ya tienes una cuenta?</h3>
          <p>Iniciar sesión para entrar en la página</p>
          <button id="loginButton2">
            <router-link to="/login">Iniciar sesión</router-link>
          </button>
        </div>
      </div>

      <!--Formulario de Registro-->
      <div class="front-box">
        <form
          action="#"
          id="formRegister"
          method="GET"
          class="formulario__register"
          @submit.prevent="register"
        >
          <h2>Registrarse</h2>
          <label for>
            <input
              id="userRegister"
              type="text"
              placeholder="Correo electrónico"
              required
              v-model="email"
            />
          </label>
          <label for>
            <input
              id="pswRegister"
              type="password"
              placeholder="Contraseña"
              required
              v-model="password"
            />
          </label>

          <div class="check-container">
            <label class>
              <input id="checkTerms" type="checkbox" required />
              <span>
                Estoy de acuerdo con los
                <router-link to="/terminos-y-condiciones" target="_blank">términos y condiciones.</router-link>
              </span>
            </label>
          </div>
          <br />
          <button
            id="registerButton"
            type="submit"
            value="Login"
            style="background-color: var(--main-color)"
          >Registrarse</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('usuario')
        })
        .catch(function (error) {
          console.log(error.message)
        })
    }
  }
}

</script>
<style lang="scss" scoped>
.login-section {
  padding: 0;
  background-image: url("../../assets/img/mosaic-image.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.back-box {
  padding: 10px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--main-color);

  div {
    margin: 100px 40px;
    color: #fff;
    transition: all 500ms;

    p,
    button {
      margin-top: 30px;
    }

    p {
      font-size: 16px;
      font-weight: 300;
    }

    button {
      padding: 10px 40px;
      border: 2px solid #fff;
      font-size: 14px;
      background: transparent;
      font-weight: 600;
      cursor: pointer;
      color: #fff;
      outline: none;

      a {
        color: #fff;
      }
    }

    button:hover {
      background: #fff;
      a {
        color: var(--main-color);
      }
    }

    h3 {
      font-weight: 400;
      font-size: 26px;
    }
  }
}

/*Formularios*/

.front-box {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 380px;
  position: relative;
  top: -185px;
  left: 10px;

  /*La transicion va despues del codigo JS*/
  transition: left 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  form {
    width: 100%;
    padding: 80px 20px;
    background: #fff;
    position: absolute;
    border-radius: 20px;

    h2 {
      font-size: 30px;
      text-align: center;
      margin-bottom: 20px;
      color: var(--main-color);
    }

    input {
      width: 100%;
      margin-top: 20px;
      padding: 10px;
      border: none;
      background: #f2f2f2;
      font-size: 16px;
      outline: none;
    }

    button {
      padding: 10px 40px;
      margin-top: 40px;
      border: none;
      font-size: 14px;
      background: #46a2fd;
      font-weight: 600;
      cursor: pointer;
      color: #fff;
      outline: none;
    }
  }
}

.check-container {
  display: flex;
  margin-top: 1rem;
}

#checkTerms {
  width: 20%;
}

.formulario__login {
  opacity: 1;
  display: block;
}

@media screen and (max-width: 850px) {
  main {
    margin-top: 50px;
  }

  .back-box {
    max-width: 350px;
    height: 300px;
    flex-direction: column;
    margin: auto;
  }

  .back-box div {
    margin: 0px;
    position: absolute;
  }

  /*Formularios*/

  .front-box {
    top: -10px;
    left: -5px;
    margin: auto;
  }

  .front-box form {
    position: relative;
  }
}

@media (max-width: 580px) {
  .btn333 {
    display: none;
  }
  .signin-info {
    padding-left: 2rem;
  }
}
</style>
