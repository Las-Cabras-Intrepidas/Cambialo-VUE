<template>
  <div class="container">
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
      <div v-for="(item, index) in productos" :key="index" class="products-cards-container">
        <div class="products-card">
          <div class="product-image-container">
            <img
              v-bind:src="'https://firebasestorage.googleapis.com/v0/b/cambialo-eoi.appspot.com/o/' + item.picture.replace('/', '%2F') + '?alt=media'"
              class="product-image"
            />
          </div>
          <div class="info-container">
            <div class="sections-container">
              <div class="product-name">
                <span>{{ item.title }}</span>
              </div>
              <div class="product-availability">
                <span>{{ item.available }}</span>
              </div>
              <div class="product-description">
                <span>{{ item.description }}</span>
              </div>
              <div class="product-category">
                <span>{{ item.idCategory }}</span>
              </div>
              <div class="product-buttons">
                <div class="product-edit">
                  <font-awesome-icon
                    icon="trash"
                    class="edit-button"
                    @click.prevent="deleteProduct(item.id, item.picture)"
                  ></font-awesome-icon>
                </div>
                <div class="product-edit">
                  <router-link :to="{ name: 'EditProduct', params: { id: item.id } }">
                    <font-awesome-icon
                      @click="editProduct(item.id)"
                      icon="edit"
                      class="edit-button"
                    />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore/lite'
import { getStorage, ref, uploadBytes, deleteObject } from 'firebase/storage'
export default {
  name: 'AddProductUser',
  // eslint-disable-next-line space-before-function-paren
  data() {
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
    // eslint-disable-next-line space-before-function-paren
    async addProduct() {
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
    // eslint-disable-next-line space-before-function-paren
    async showDates() {
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
    // eslint-disable-next-line space-before-function-paren
    async deleteProduct(id, urlImg) {
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
    // eslint-disable-next-line space-before-function-paren
    buscarImagen(event) {
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
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.showDates()
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-color: rgba(156, 156, 156, 0.041);
  padding-top: 10px;
  padding-bottom: 45px;
}
@keyframes over-and-back {
  0% {
    transform: rotate(0) scale(1.05);
  }
  50% {
    transform: rotate(-10deg) scale(1.1);
  }
  75% {
    transform: rotate(10deg) scale(1.15);
  }
  100% {
    transform: rotate(0) scale(1.2);
  }
}

.products-cards-container {
  display: flex;
  border: 1.5px solid #81818133;
  background-color: rgb(253, 253, 253);
  width: 80%;
  min-height: 100px;
  border-radius: 15px;
  margin: 10px;

  &:hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(36, 57, 77, 0.25);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform: scale(1.05);
    transform: translateY(-5px);
    background-color: rgba(175, 175, 175, 0.096);
  }
  .products-card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: auto;

    .product-image-container {
      aspect-ratio: auto 1 / 1;
      position: relative;
      overflow: hidden;
      border-radius: 15px;
      height: 100%;

      margin-right: 2%;
      .product-image {
        position: absolute;
        object-fit: fill;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        min-height: 100%;
        height: auto;

        border-radius: 15px;
        background-size: cover;
      }
    }
    .info-container {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 2px;
      overflow: hidden;
      box-sizing: border-box;
      height: 100%;

      .sections-container {
        flex-direction: row;
        display: flex;
        justify-content: space-around;
        text-align: justify;
        width: 100%;
        padding: 15px;
        align-items: center;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        height: 100% !important;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;

        .product-name {
          flex: 0 0 15%;
          max-width: 15;
          font-weight: 500;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        .product-availability {
          flex: 0 0 15%;
          max-width: 15%;
          margin-left: 2%;
          margin-right: 2%;
          align-items: center;
          text-align: center;
          span {
            color: #018a1e;
            font-weight: 600;
          }
        }
        .product-description {
          flex: 0 0 15%;
          max-width: 15%;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          margin-left: 2%;
          margin-right: 2%;
          align-items: center;
          text-align: center;
        }
        .product-category {
          flex: 0 0 15%;
          max-width: 15%;
          font-weight: 600;
          align-items: center;
          text-align: center;
        }
        .product-buttons {
          flex: 0 0 30%;
          max-width: 30%;
          display: flex;
          flex-direction: row;
          align-items: center;
          text-align: center;
          .product-delete {
            flex: 0 0 50%;

            width: auto;
          }
          .product-edit {
            flex: 1 1 50%;
            width: 100%;
            margin-right: 3%;

            .edit-button {
              color: var(--main-color);

              font-size: 2rem;

              max-width: 50%;

              &:hover {
                animation: over-and-back 400ms;
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }
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
  }
  .sections-container {
    display: flex;
    flex-direction: column;
    padding: 1px;
  }
  @media (max-width: 630px) {
    .sections-container {
      padding: -15px;
      margin-right: -43px;

      .product-name {
        flex: 0 0 32% !important;
        margin-right: 16%;
      }
      .product-availability {
        display: none;
        overflow: hidden;
      }
      .product-description {
        overflow: hidden;
        display: none;
      }
      .product-category {
        display: none;
        overflow: hidden;
      }
      .product-edit {
        min-width: 50px;
        margin: -10%;
        padding-right: -16%;
        .edit-button {
          font-size: 3rem;

          max-width: 100%;
        }
      }
    }
  }
}
</style>
