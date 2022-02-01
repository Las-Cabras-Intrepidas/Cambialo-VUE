<template>
  <div class="container">
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
</template>

<script>
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite'
export default {
  name: 'AddProductUser',
  data () {
    return {
      productos: []
    }
  },
  methods: {
    async showDates () {
      /* const db = getFirestore()
      const querySnapshot = await getDocs(collection(db, 'Productos'))
      querySnapshot.forEach((doc) => {
        const producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
        console.log(producto)
      }) */

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
