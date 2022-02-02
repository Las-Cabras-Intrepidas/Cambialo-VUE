<template>
  <div>
    <div class="add-box">
      <h2>Subir Producto</h2>
      <form action="#" id="addProduct" method="GET" class="formulario__addProduct" @submit.prevent="addProduct">
          <label for="">
            <input id="titleP" type="text" placeholder="Titulo" required v-model="title">
          </label>
          <label for="">
            <input id="descP" type="textarea" placeholder="Descripcion" required v-model="description">
          </label>
          <label for="">
            <input  name="foto" type="file" accept="image/*" @change="buscarImagen($event)">
            <div class="mt-4">
              <img :src="datoImagen">
            </div>
          </label>
          <label for="">
            <select id="avalP" required v-model="available" name="selectdisp">
              <option value="">Seleccione Disponibilidad</option>
              <option value="Disponible">Disponible</option>
              <option value="No disponible">No disponible</option>
            </select>
          </label>
          <label for="">
            <select  id="catP"  required v-model="idCategory" name="selectcat">
              <option value="">Categoría</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Hogar">Hogar</option>
              <option value="Mascotas">Mascotas</option>
              <option value="Juegos">Juegos</option>
              <option value="Ropa">Ropa</option>
              <option value="Deporte">Deporte</option>
          </select>
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
        <td>
          <button @click.prevent="deleteProduct(item.id)"
          class="btn btn-danger">Eliminar
          </button>
        </td>
        <button @click="editProduct(item.id)">
            <router-link :to="{ name: 'EditProduct', params: { id: item.id } }">Editar</router-link>
          </button>
      </tr>
    </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore/lite'
import { getStorage, ref, uploadBytes } from 'firebase/storage'
export default {
  name: 'AddProductUser',
  data () {
    return {
      title: '',
      description: '',
      available: '',
      idUser: '',
      idCategory: '',
      productos: [],
      file: null,
      datoImagen: null
    }
  },
  methods: {
    async addProduct () {
      const db = getFirestore()
      const uid = this.$store.state.user.uid
      const storage = getStorage()
      const storageRef = ref(storage, this.file.name)
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
      })
      await addDoc(collection(db, 'Productos'), {
        title: this.title,
        description: this.description,
        available: this.available,
        idUser: uid,
        idCategory: this.idCategory,
        picture: this.file.name
      }).then(() => {
        this.error = 'Imagen subida con éxito'
        this.file = null
      })
        .then(() => {
          this.$router.go('/usuario')
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
      })
    },
    async deleteProduct (id) {
      const db = getFirestore()
      await deleteDoc(doc(db, 'Productos', id))
        .then(() => {
          this.$router.go()
        })
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
  },
  mounted () {
    this.showDates()
  }
}
</script>

<style>

</style>
