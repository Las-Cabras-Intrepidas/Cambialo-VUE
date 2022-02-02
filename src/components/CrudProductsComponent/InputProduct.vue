<template>
<div class="container">
  <h2>Edita tu producto => {{ idroute }}</h2>
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
    <input type="file" accept="image/*" />
  </div>
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
  <button type="submit" id="addProductButton" value="AddProduct">Subir</button>
  </form>
</div>
</template>

<script>
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore/lite'
export default {
  name: 'InputProduct',
  data () {
    return {
      idroute: this.$route.params.id,
      title: '',
      description: '',
      idCategory: ''
    }
  },
  methods: {
    async updateProduct (id) {
      const db = getFirestore()
      const productRef = doc(db, 'Productos', id)
      // Set the "capital" field of the city 'DC'
      await updateDoc(productRef, {
        title: this.title,
        description: this.description,
        idCategory: this.idCategory
      }).then(() => {
        this.$router.go('/usuario')
      })
    },
    async created () {
      const db = getFirestore()
      const docRef = doc(db, 'Productos', this.$route.params.id)
      const docSnap = await getDoc(docRef)
        .then(() => {
          this.product = docSnap
          console.log(this.product)
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data())
            window.alert('bien')
          } else {
            // doc.data() will be undefined in this case
            console.log('No such document!')
            window.alert('va mal')
          }
        })
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
  text-align: left;
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
