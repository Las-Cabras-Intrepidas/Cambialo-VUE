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
            <form id="contact" action method="post">
              <h2>Rellena el formulario para contactar</h2>
              <fieldset>
                <input placeholder="Nombre" type="text" />
              </fieldset>
              <fieldset>
                <input placeholder="usuario@email.com" type="email" />
              </fieldset>
              <fieldset>
                <input placeholder="Tu teléfono (opcional)" type="tel" />
              </fieldset>
              <fieldset>
                <input placeholder="¿Qué ofreces?" type="text" />
              </fieldset>
              <fieldset>
                <textarea placeholder="¿Necesitas dar más información?"></textarea>
              </fieldset>
              <button @click="showModal = false" class="button">Enviar</button>
            </form>
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
  justify-content: center;
  top: 15%;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.24);
  background: #fff;
  z-index: 999;
  transform: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  min-width: 550px;
  max-width: 750px;
  min-height: 400px;
  max-height: 600px;
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
  background: #2a3d50;
  opacity: 0.65;
}
#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact textarea,
#contact button[type="submit"] {
  font: 600 13px/16px Avenir, Helvetica, Arial, sans-serif;
}

#contact {
  padding: 40px;
  line-height: 30px;
  padding: 25px;

  .button {
    border-radius: 5px;
    background-color: var(--main-color);
    width: 100%;
    color: #fff;
    border: none;
    font-size: 1.2rem;
  }
  .button:hover {
    background-color: #000292;
  }
  h2 {
    display: block;
    font-size: 1.7em;
    font-weight: 600;
    margin-bottom: 35px;
  }
  input {
    width: 100%;
    text-indent: 8px;
    height: 2em;
  }
  textarea {
    height: 120px;
    width: 100%;
    max-width: 100%;
    resize: none;
  }
}

fieldset {
  border: medium none;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 2px;
  width: 100%;
}
#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}
#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
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
