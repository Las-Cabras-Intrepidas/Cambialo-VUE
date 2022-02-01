<template>
  <div class="container">
    <h2>Subir Producto</h2>
    <form action="#" id="addProduct" method="GET" class="formulario__addProduct" @submit.prevent="addProduct">
          <label for="">
            <input id="titleP" type="text" placeholder="Titulo" required v-model="title">
          </label>
          <label for="">
            <input id="descP" type="text" placeholder="Descripcion" required v-model="description">
          </label>
          <label for="">
            <input id="avalP" type="text" placeholder="Disponible" required v-model="available">
          </label>
          <label for="">
            <input id="catP" type="text" placeholder="Categoria" required v-model="idCategory">
          </label>
          <button id="addProductButton" type="submit" value="AddProduct" style="background-color: var(--main-color)">
            Subir Producto
          </button>
        </form>
  </div>
  <div>

  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite'
export default {
  name: 'AddProductUser',
  data () {
    return {
      title: '',
      description: '',
      available: '',
      idUser: '',
      idCategory: ''
    }
  },
  methods: {
    async addProduct () {
      const db = getFirestore()
      const uid = this.$store.state.user.uid
      const docRef = await addDoc(collection(db, 'Productos'), {
        title: this.title,
        description: this.description,
        available: this.available,
        idUser: uid,
        idCategory: this.idCategory
      })
        .then(() => {
          console.log(docRef.id)
          console.log('Documento añadido')
        })
        .catch(function (error) {
          console.error('Error al añadir el documento: ', error)
        })
    }
  }
}

</script>

<style>

</style>
