<template>
  <section class="login">
    <!-- Contenedor general -->
    <section class="login__container">
      <h2>Inicia sesión</h2>
      <form
        class="login__container--form"
        action="#"
        id="formLogin"
        method="GET"
        @submit.prevent="logIn"
      >
        <label for>
          <input
            class="input"
            id="userLogin"
            type="text"
            placeholder="Correo electrónico"
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
        <button class="button" id="loginButton" type="submit" value="Login">Iniciar sesión</button>
        <button
          class="button"
          id="loginButtonGoogle"
          @click="logInWithGoogle"
          style="background-color: #21c08b;"
        >Entrar con Google</button>
        <div class="login__container--remember-me"></div>
      </form>
      <section class="login__container--social-media"></section>
      <p class="login__container--register">
        ¿No tienes cuenta?
        <router-link to="/registrate">Regístrate</router-link>
      </p>
    </section>
  </section>
</template>

<script>
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    logIn () {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.replace('usuario')
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    logInWithGoogle () {
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
  flex-direction: column;
  padding: 3%;
  min-height: calc(100vh - 200px);
  margin-bottom: 2%;
}

.login__container {
  background: linear-gradient(#1db8c2, #012db3);
  border: 5px solid white;
  border-radius: 40px;
  color: white;
  padding: 60px 68px 40px;
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
}

.login__container--form label {
  font-size: 14px;
}

.login__container--remember-me {
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.login__container--remember-me a {
  color: white;
  font-size: 14px;
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
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.login__container--register a:hover {
  text-decoration: underline;
}

.input {
  background-color: transparent;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 2px solid white;
  font-family: "Muli", sans-serif;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0px 0px 5px 20px;
  padding-bottom: 5px;
}

::placeholder {
  color: white;
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
</style>
