<template>
  <div>
    <div class="add-box">
      <h2>Subir Producto</h2>
      <form
        action="#"
        id="addProduct"
        method="GET"
        class="formulario__addProduct"
        @submit.prevent="addProduct"
      >
        <div class="formUpload">
          <label for>
            <input
              id="titleP"
              class="textCards"
              type="text"
              placeholder="Titulo"
              required
              v-model="title"
            />
          </label>
          <label for>
            <input
              id="descP"
              class="textCards"
              type="textarea"
              placeholder="Descripcion"
              required
              v-model="description"
            />
          </label>
          <label for>
            <input
              id="uploadFile"
              name="foto"
              type="file"
              accept="image/*"
              @change="buscarImagen($event)"
              required
            />
            <div class="mt-4">
              <img :src="datoImagen" />
            </div>
          </label>
          <label for>
            <select id="catP" required v-model="idCategory" name="selectcat">
              <option value>Categoria</option>
              <option value="Tecnología">Tecnología</option>
              <option value="Hogar">Hogar</option>
              <option value="Mascotas">Mascotas</option>
              <option value="Juegos">Juegos</option>
              <option value="Ropa">Ropa</option>
              <option value="Deporte">Deporte</option>
            </select>
          </label>
          <button
            class="inputUpdate"
            id="addProductButton"
            type="submit"
            value="AddProduct"
            style="background-color: var(--main-color); color: white; width: 150px"
          >Subir</button>
        </div>
      </form>
    </div>
    <div class="getProduct-box">
      <h2>Productos de {{ $store.state.user.email }}</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Disponibilidad</th>
            <th scope="col">Categoría</th>
            <th scope="col">Imagen</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in productos" :key="index">
            <td>{{ item.title }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.available }}</td>
            <td>{{ item.idCategory }}</td>
            <td>
              <img
                v-bind:src="'https://firebasestorage.googleapis.com/v0/b/cambialo-eoi.appspot.com/o/' + item.picture.replace('/', '%2F') + '?alt=media'"
              />
            </td>
            <td>
              <button @click.prevent="deleteProduct(item.id, item.picture)" class="btnBlue">Eliminar</button>
            </td>
            <td>
              <button class="btnBlue" @click="editProduct(item.id)">
                <router-link :to="{ name: 'EditProduct', params: { id: item.id } }">Editar</router-link>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore/lite'
import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage'
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
      const rute = uid + '/' + this.file.name
      const storageRef = ref(storage, rute)
      // 'file' comes from the Blob or File API
      uploadBytes(storageRef, this.file).then((snapshot) => {
        console.log('Uploaded a blob or file!')
      })
      await addDoc(collection(db, 'Productos'), {
        title: this.title,
        description: this.description,
        available: 'Disponible',
        idUser: uid,
        idCategory: this.idCategory,
        picture: rute
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
    async deleteProduct (id, urlImg) {
      const storage = getStorage()
      const desertRef = ref(storage, urlImg)
      deleteObject(desertRef).then(() => {
      }).catch((error) => {
        console.log(error)
      })
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
table {
  align-content: center;
  align-items: center;
  text-align: center;
  border-collapse: collapse;
  border: solid 2px blue;
  margin: 40px;
}

th {
  border: solid 2px blue;
}
td {
  border-bottom: solid 2px blue;
}
th,
td {
  padding: 20px;

  margin: 0;
}

td img {
  height: 100px;
  width: 140px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.getProduct-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.inputUpdate {
  font-size: 15px;
  border: 3px solid rebeccapurple;
  background: rgba(255, 255, 255, 0.781);
  color: #333;
  padding: 9.5px 9px;
  border-radius: 5px;
}

.textCards {
  font-size: 15px;
  font-family: var(--main-font);
  border: 3px solid rebeccapurple;
  background: rgba(255, 255, 255, 0.781);
  border-radius: 8px;
  width: 350px;
}

.btnBlue {
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

.btnBlue:hover {
  color: #fff;
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  cursor: pointer;
}
.formUpload {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.mt-4 > img {
  max-width: 150px;
}

#catP,
#uploadFile,
#titleP,
#descP {
  width: 300px;
  height: 30px;
  margin: 5px;
}
@media (max-width: 768px) {
  .category {
    flex-wrap: wrap;
  }
}
</style>
