<template>
  <div class="container">
    <img :src="picture" alt />
    <div class="text-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button @click="showModal = true" class="button">Cámbialo Ahora</button>
      <div class="modal-container">
        <transition name="fade" appear>
          <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="pop" appear>
          <div class="modal" role="dialog" v-if="showModal">
            <div class="form-container">
              <h4>Si te interesa este artículo rellena este form para empezar tu intercambio</h4>
              <form class="contact" action method="get">
                <label>
                  <h3>Nombre de usuario</h3>
                  <input
                    class="first-input"
                    placeholder="Tu Usuario"
                    type="text"
                    tabindex="1"
                    required
                    autofocus
                  />
                </label>
                <label>
                  <h3>¿Qué ofreces?</h3>
                  <input placeholder="Artículos" type="text" tabindex="2" required autofocus />
                </label>
                <label>
                  <h3>Introduce tu correo electrónico</h3>
                  <input
                    placeholder="tucorreo@tucorreo.com"
                    type="email"
                    tabindex="3"
                    required
                    autofocus
                  />
                </label>
                <label>
                  <h3>¿Necesitas dar más información?</h3>
                  <textarea
                    class="text-form"
                    placeholder="Escribe detalles del intercambio..."
                    tabindex="4"
                    required
                    autofocus
                  ></textarea>
                </label>
                <label></label>
              </form>
            </div>
            <button @click="showModal = false" class="button">Enviar</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  props: {
    title: {
      type: String
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
    picture: {
      type: String
    }
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: aliceblue;
  border-radius: 1rem;
  margin: 5%;
  text-align: start;

  img {
    width: 25%;
    border-radius: 1rem;
    margin: 10px;
  }

  div {
    margin-left: 1rem;

    button {
      cursor: pointer;
      font-size: 1rem;
      background-color: white;
      border: 2px solid var(--main-color);
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-weight: 600;
      color: var(--main-color);
    }

    button:hover {
      background-color: var(--main-color);
      color: #fff;
    }
  }
}
/* estilos modal */

.modal {
  position: absolute;
  position: fixed;
  top: 10%;
  left: 25%;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
}

h4 {
  margin: 0 auto;
  font-size: 18px;
  color: var(--main-color);
  text-shadow: 1px 1px 2px grey;
}

.modal-container {
  display: flex;
  justify-content: center;
  margin: auto;
}
.contact {
  display: flex;
  flex-direction: column;

  .form-container {
    margin: auto;
  }

  label {
    flex-direction: column;
    font-weight: bold;

    h3 {
      font-weight: bolder;
    }

    input {
      border-radius: 6px;
      padding: 3px;
      border: 2px solid var(--main-color);
      font-size: 16px;
    }

    .text-form {
      padding: 15px;
      border: 2px solid var(--main-color);
      border-radius: 6px;
      font-size: 1em;
      font-family: var(--main-font);
    }
  }
}

.modal h1 {
  margin: 0 0 1rem;
}

.modal-overlay {
  content: "";
  position: absolute;
  position: fixed;
  justify-content: center;
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
}

/* ---------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
