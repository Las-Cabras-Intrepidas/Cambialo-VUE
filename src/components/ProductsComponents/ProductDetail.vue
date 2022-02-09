<template>
  <div class="container">
    <img
      :src="'https://firebasestorage.googleapis.com/v0/b/cambialo-eoi.appspot.com/o/' + picture.replace('/', '%2F') + '?alt=media'"
      :alt="title"
    />
    <div class="text-container">
      <h1>{{ this.title }}</h1>
      <p>{{ this.description }}</p>
      <button @click="showModal = true" class="button">Cambiar</button>
    </div>
  </div>
  <!-- Modal -->
  <transition name="fade" appear>
    <div class="modal-overlay flex" v-if="showModal">
      <transition name="pop" appear>
        <div class="modal" role="dialog" v-if="showModal">
          <span @click="showModal = false" class="button-close">
            <font-awesome-icon class="icon" icon="times-circle" />
          </span>
          <form id="contact">
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
            <button @click="showMessage = true" class="button">Enviar</button>
          </form>
        </div>
      </transition>
      <!--  invento -->
      <transition name="fade" appear v-if="showMessage" @click="showMessage = false">
        <transition name="pop" appear>
          <div class="modal-send flex" role="dialog" v-if="showMessage">
            <p class="msg">¡ENVIADO!</p>
          </div>
        </transition>
      </transition>
    </div>
  </transition>
</template>

<script>
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite'
export default {
  name: 'ProductDetail',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      idProduct: this.$route.params.id,
      title: '',
      description: '',
      idCategory: '',
      picture: '',
      showModal: false,
      showMessage: false
    }
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    async showProduct(idProduct) {
      const db = getFirestore()
      const docRef = doc(db, 'Productos', idProduct)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        this.title = docSnap.data().title
        this.description = docSnap.data().description
        this.idCategory = docSnap.data().idCategory
        this.picture = docSnap.data().picture
      }
    }
  },
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.showProduct(this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  background-color: aliceblue;
  border-radius: 1rem;
  margin: 5% auto;
  text-align: start;
  width: 40%;

  img {
    width: 25%;
    border-radius: 1rem;
    margin: 10px;
  }

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

/* estilos modal */

span {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 1.25rem;
  margin-top: 0.5rem;
}
.icon {
  color: #a19e9e;
  font-size: 35px;
  margin-top: 0.75rem;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay {
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  background: #2a3d5094;
  height: 100vh;
}

@media (max-width: 900px) {
  .modal-overlay {
    position: absolute;
    top: 135px;
  }
}
.modal {
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.24);
  background: #fff;
  transform: none;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  min-width: 30%;
  max-width: 80%;
}
.modal-send {
  position: absolute;
  background: rgb(144, 238, 144);
  border: 1px solid green;
  border-radius: 8px;
  top: 500px;
  width: 30%;
  box-shadow: 5px 12px 20px 3px #c1c1c1;
}

.msg {
  font-size: 18px;
  color: #000;
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
    min-height: 2.25rem;
    color: #fff;
    border: none;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  .button:hover {
    background-color: #000292;
  }
  h2 {
    font-size: 1.7em;
    font-weight: 600;
    margin-bottom: 35px;
    margin-top: 0;
  }
  input {
    text-indent: 8px;
    height: 2rem;
    box-sizing: border-box;
    width: 100%;
  }
  textarea {
    min-height: 120px;
    max-width: 100%;
    resize: none;
    margin-bottom: 20px;
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
}

fieldset {
  border: medium none;
  margin: 0 0 10px;
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

@media (max-width: 900px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 60%;

    img {
      width: 55%;
    }
  }
}
/* ---------------------------------- */
/* .fade-enter-active,
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
} */
/* mediaqueries */
</style>
