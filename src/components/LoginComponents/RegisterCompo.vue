<template>
  <section class="login">
    <!-- Contenedor general -->
    <section class="login__container">
      <h2>Registrarse</h2>
      <form
        class="login__container--form"
        action="#"
        id="formRegister"
        method="GET"
        @submit.prevent="register"
      >
        <label for>
          <input
            class="input"
            id="userRegister"
            type="text"
            placeholder="Dirección de email"
            required
            v-model="email"
          />
        </label>
        <label for>
          <input
            class="input"
            id="pswLogin"
            type="password"
            placeholder="Contraseña"
            required
            v-model="password"
          />
        </label>
        <button class="button" id="loginButton" type="submit" value="Login">Registrarse</button>
        <button
          class="button"
          id="loginButtonGoogle"
          @click="logInWithGoogle"
          style="background-color: #21c08b;"
        >Entrar con Google</button>
      </form>
      <section class="login__container--social-media"></section>
      <p class="login__container--register">
        <input id="checkTerms" type="checkbox" required />
        <span>
          Estoy de acuerdo con los
          <router-link to="/terminos-y-condiciones" target="_blank">términos y condiciones.</router-link>
        </span>
      </p>
      <p class="login__container--register">
        ¿Ya tienes cuenta?
        <router-link to="/login">Inicia sesión.</router-link>
      </p>
    </section>
  </section>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default {
  name: 'Register',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    register() {
      const auth = getAuth()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('usuario')
        })
        .catch(function (error) {
          console.log(error.message)
        })
    },
    // eslint-disable-next-line space-before-function-paren
    logInWithGoogle() {
      const provider = new GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      const auth = getAuth()
      auth.languageCode = 'es'
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result)
          const token = credential.accessToken
          // The signed-in user info.
          const user = result.user
          console.log(token)
          console.log(user)
          // ...
        })
        .then(() => {
          this.$router.replace('usuario')
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
  background-image: url("../../assets/img/mosaic-image.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
    color: #253238;
  flex-direction: column;
  padding: 3%;
  min-height: calc(100vh - 200px);
  margin-bottom: 2%;
}

.login__container {

  background: #fff;

  border: 5px solid white;
  border-radius: 40px;
  color: #253238;
  padding: 60px 48px 40px;
  min-height: 500px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // box-shadow: 0px 0px 30px rgb(0, 0, 0, 0.3);
}

.login__container--form {
  display: flex;
  flex-direction: column;
    color: #253238;
}

.login__container--form label {
  font-size: 18px;
    color: #253238;

    align-items: center;
}

.login__container--remember-me {
    color: #253238;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.login__container--remember-me a {
   color: #253238;
  font-size: 18px;
  text-decoration: none;
}

.login__container--remember-me a:hover {
  text-decoration: underline;
}

.login__container--social-media > div {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
}

.login__container--social-media > div > img {
  width: 30px;
  margin-right: 10px;
}

.login__container--register {
  margin-top: -50px;
}

.login__container--register a {
  font-size: 16px;
  color: #151515;
  font-weight: bold;
  text-decoration: none;
}

.login__container--register a:hover {
  text-decoration: underline;
  color: #253238;
}

.input {
  background-color: transparent;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid #253238;
  font-family: "Avenir", sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0px 0px 5px 20px;
  padding-bottom: 5px;
   color: #253238;
}

::placeholder {
  color: #253238;
}

.login__container--form > button {
  font-family: "Muli", sans-serif;
  margin-top: 20px;
  border-radius: 40px;
  height: 50px;
  font-size: 16px;
  background-color: rgb(255, 255, 255, 0.3);
  border: 0px;
  color: white;
  font-weight: bold;
  letter-spacing: 0.7px;
  cursor: pointer;
}

.login__container--remember-me {
  padding-top: 10px;
  width: 100%;
}

.login__container--remember-me > a {
  margin-top: 2px;
}
#checkTerms {
  border: 1px solid #253238;
}

#formRegister {
  label {}
}
#loginButton {
  background-color: var(--main-color);
}
</style>
