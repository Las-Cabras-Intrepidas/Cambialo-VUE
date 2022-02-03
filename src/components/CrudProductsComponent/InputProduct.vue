<template>
<div class="container">
  <h2>Edita tu producto => {{ idroute }}</h2>
  <p>➡ Nombre de producto:</p>
  <form @submit.prevent="updateProduct(idroute)">
  <div class="name">
    <input type="text" placeholder="Producto" v-model="title" />
  </div>
  <p>➡ Selecciona una categoría:</p>
  <div class="name">
    <input type="text" placeholder="Categoria" v-model="idCategory" />
  </div>
  <div class="picture">
    <p>➡ Sube una foto:</p>
    <input type="file" accept="image/*" @change="buscarImagen($event)"/>
    <div class="mt-4">
              <img :src="datoImagen">
            </div>
  </div>
  <p>➡ Descripción de producto:</p>
  <div class="description">
    <textarea
      placeholder="Descripción de tu producto"
      name
      id="textarea-1"
      cols="30"
      rows="10"
      v-model="description"
    ></textarea>
  </div>
    <button type="submit" id="addProductButton" value="AddProduct">
      <router-link to="/usuario" @click="scrollToTop">
        Subir
      </router-link>
    </button>
  </form>
</div>
</template>

<script>
import { getFirestore, doc, updateDoc } from 'firebase/firestore/lite'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
export default {
  name: 'InputProduct',
  data () {
    return {
      idroute: this.$route.params.id,
      title: '',
      description: '',
      idCategory: '',
      picture: '',
      file: null,
      datoImagen: null
    }
  },
  methods: {
    async updateProduct (id) {
      const db = getFirestore()
      const uid = this.$store.state.user.uid
      const productRef = doc(db, 'Productos', id)
      if (this.datoImagen != null) {
        const storage = getStorage()
        const rute = uid + '/' + this.file.name
        const storageRef = ref(storage, rute)
        await uploadBytes(storageRef, this.file)
          .then((snapshot) => {
            this.picture = this.file.name
          })
        await updateDoc(productRef, {
          title: this.title,
          description: this.description,
          idCategory: this.idCategory,
          picture: rute
        })
          .then(() => {
            this.error = 'Imagen subida con éxito'
            this.file = null
          })
          .then(() => {
            this.$router.go('/usuario')
          })
      } else {
        await updateDoc(productRef, {
          title: this.title,
          description: this.description,
          idCategory: this.idCategory
        })
          .then(() => {
            this.error = 'Imagen subida con éxito'
            this.file = null
          })
          .then(() => {
            this.$router.go('/usuario')
          })
      }
    },
    buscarImagen (event) {
      console.log(event.target.files[0])
      const tipoArchivo = event.target.files[0].type
      if (tipoArchivo === 'image/jpeg' || tipoArchivo === 'image/png') {
        this.file = event.target.files[0]
        this.error = null
      } else {
        this.error = 'Archivo no válido'
        this.file = null
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(this.file)
      reader.onload = (e) => {
        this.datoImagen = e.target.result
      }
    }

  }

}
</script>
<style lang="scss" scoped>
div {
  padding: 5px;

  input {
    font-size: 15px;
    border: 3px solid rebeccapurple;
    background: rgba(255, 255, 255, 0.781);
    color: #333;
    padding: 9.5px 9px;
    border-radius: 5px;
  }
}

textarea {
  font-size: 15px;
  font-family: var(--main-font);
  border: 3px solid rebeccapurple;
  background: rgba(255, 255, 255, 0.781);
  border-radius: 8px;
  width: 350px;
}

button {
  width: 100px;
  padding: 5px 10px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  background-color: rgb(255, 255, 255);
  color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  min-height: 2.5rem;
  margin: 0 auto;
}

button:hover {
  color: #fff;
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  cursor: pointer;
}

.category {
  display: flex;
  flex-direction: row;
}

p {
  text-align: center;
  font-weight: 600;
  margin: 2px;
  font-size: 18px;
}

.picture {
}

@media (max-width: 768px) {
  .category {
    flex-wrap: wrap;
  }
}
</style>
