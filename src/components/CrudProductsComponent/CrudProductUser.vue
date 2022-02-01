<template>
  <div>
    <div class="add-box">
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
    <div class=getProduct-box>
      <h2>Productos de {{$store.state.user.email}}</h2>
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Disponible</th>
        <th scope="col">Categoria</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in productos" :key="index">
        <td>{{item.title}}</td>
        <td>{{item.description}}</td>
        <td>{{item.available}}</td>
        <td>{{item.idCategory}}</td>
      </tr>
    </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, query, where, getDocs } from 'firebase/firestore/lite'
export default {
  name: 'AddProductUser',
  data () {
    return {
      title: '',
      description: '',
      available: '',
      idUser: '',
      idCategory: '',
      productos: []
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
    },
    async showDates () {
      const db = getFirestore()
      const uid = this.$store.state.user.uid
      const q = query(collection(db, 'Productos'), where('idUser', '==', uid))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
        console.log(producto)
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data())
      }).then(() => {
        this.$forceUpdate()
      })
    }
  },
  mounted () {
    this.showDates()
  }
}
</script>

<style>

</style>
