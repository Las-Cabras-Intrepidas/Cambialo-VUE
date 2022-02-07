<template>
    <!-- Barra de busqueda-->
  <div class="search-container desktop-search">
    <div class="inner-container">
      <input type="search" id="search" v-model="buscar" placeholder="iPhone 11, balón, camisa..."
      @keyup.enter="productSearch"/>
      <button @click="productSearch">
        <font-awesome-icon class="search-icon" icon="search" />
        <span class="sr-only">Buscar</span>
      </button>
    </div>
  </div>
  <div class="container-categories">
    <div
      @click="categorySearch(category.category)"
      class="card-category"
      v-for="category in categories"
      :key="category.id"
    >
      <img class="img-category" :src="category.picture" :alt="category.category" />
      <h2>{{ category.category }}</h2>
    </div>
  </div>
  <div>
    <button class="btn" @click="showAll">Mostrar Todos</button>
  </div>
  <!-- Productos buscados -->
  <div class="container" v-if="showFiltered">
    <div class="row-container">
      <div class="row" v-for="filteredProduct in filteredProducts" :key="filteredProduct.id" :id="filteredProduct.category">
        <div class="img-box">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: filteredProduct.id } }"
            @click="scrollToTop"
          >
            <img
              :src="'https://firebasestorage.googleapis.com/v0/b/cambialo-eoi.appspot.com/o/' + filteredProduct.picture.replace('/', '%2F') + '?alt=media'"
              :alt="filteredProduct.description"
            />
          </router-link>
          <router-link
            :to="{ name: 'ProductDetail', params: { id: filteredProduct.id } }"
            @click="scrollToTop"
          >
            <font-awesome-icon class="icon" icon="handshake" />
          </router-link>
        </div>
        <div class="flex">
          <h4>{{ filteredProduct.title }}</h4>
          <!--<p class="availability">{{product.available ? "Disponible" : "No Disponible" }}</p>-->
          <p class="availability">Disponible</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Productos no buscados -->
  <div class="container" v-else>
    <div class="row-container">
      <div class="row" v-for="product in shownProducts" :key="product.id" :id="product.category">
        <div class="img-box">
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            @click="scrollToTop"
          >
            <img
              :src="'https://firebasestorage.googleapis.com/v0/b/cambialo-eoi.appspot.com/o/' + product.picture.replace('/', '%2F') + '?alt=media'"
              :alt="product.description"
            />
          </router-link>
          <router-link
            :to="{ name: 'ProductDetail', params: { id: product.id } }"
            @click="scrollToTop"
          >
            <font-awesome-icon class="icon" icon="handshake" />
          </router-link>
        </div>
        <div class="flex">
          <h4>{{ product.title }}</h4>
          <!--<p class="availability">{{product.available ? "Disponible" : "No Disponible" }}</p>-->
          <p class="availability">Disponible</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categories from '../../assets/data/categoria.json'
// import products from '../../assets/data/producto.json'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore/lite'

export default {
  name: 'ProductsCard',
  props: {
    msg: String
  },
  data () {
    return {
      value: '',
      categories: categories,
      selectedCategory: null,
      productos: [],
      products: this.productos,
      idProduct: '',
      buscar: '',
      filteredProducts: [],
      showFiltered: false
    }
  },
  computed: {
    shownProducts () {
      if (this.selectedCategory) {
        return this.productos
          .filter(productos => productos.idCategory === this.selectedCategory)
      }
      return this.productos
    }
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    async downloadProducts () {
      const db = getFirestore()
      const q = query(collection(db, 'Productos'), where('available', '==', 'Disponible'))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const producto = doc.data()
        producto.id = doc.id
        this.productos.push(producto)
      })
    },
    showAll () {
      this.selectedCategory = null
      this.showFiltered = false
    },
    productSearch () {
      // Buscar en el array de productos los elementos que incluyen la string que este en 'buscar'
      // Se incluye una funcion de normalizar y regex para que tambien se tomen en cuenta los acentos.
      // eslint-disable-next-line prefer-const
      let filteredProducts = this.productos
        .filter(product =>
          product.title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(this.buscar)
        )
      // Devolver los datos
      this.filteredProducts = filteredProducts
      this.showFiltered = true
    },
    categorySearch (category) {
      this.selectedCategory = category
      console.log(category)
      const filteredProducts = this.productos
        .filter(product =>
          product.idCategory
            .includes(this.selectedCategory))
      // Devolver los datos
      this.filteredProducts = filteredProducts
      this.showFiltered = true
    }
  },
  mounted () {
    this.downloadProducts()
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px 20px;
  font-weight: 600;
  border-radius: 30px;
  line-height: 1.5rem;
  font-size: 1rem;
  background-color: #fff;
  color: var(--main-color);
  border: 2px solid var(--main-color);
  text-decoration: none;
  transition: all 300ms;
  margin: 1.5rem 0.5rem;

  a {
    color: var(--main-color);
  }
}
.btn:hover {
  background-color: var(--main-color);
  text-decoration: none;
  color: #fff;
  cursor: pointer;
}

.container {
  max-width: 85%;
  margin: 0 auto;
}

.row-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 2rem;
}

.row {
  box-shadow: 1px 1px 4px 1px #cfcfcf;
  border-radius: 1rem;
  border: 2px solid #fff;
}

.row:hover {
  border: 2px solid #012bb3;
}

.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  margin-top: 1.5rem;
}

.img-box {
  position: relative;
}

img {
  max-width: 100%;
  border-radius: 1rem 1rem 0 0;
  height: 200px;
}

.icon {
  position: absolute;
  bottom: -15px;
  color: #fff;
  font-size: 1.25rem;
  right: 40%;
  background: var(--main-color);
  border: 2px solid #fff;
  padding: 0.6rem;
  border-radius: 50%;
  text-align: center;
}

.availability {
  color: green;
  font-weight: 600;
  text-align: start;
}

h4 {
  margin: 0;
}

p {
  font-size: 15px;
  padding: 2px;
  margin: 0;
  margin-bottom: 0.5rem;
}

/* mediaqueries */
@media (min-width: 700px) {
  .row-container {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 1000px) {
  .row-container {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (min-width: 1300px) {
  .container {
    max-width: 75%;
  }

  .flex {
    p {
      margin: 0 0 0 1rem;
    }
  }
}

@media (min-width: 1600px) {
  .container {
    max-width: 60%;
  }
}
.container-categories {
  display: flex;
  justify-content: space-evenly;
  margin: 2rem auto;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;

  .card-category {
    transition: all 0.4s ease;
    max-width: 45%;

    img {
      border-radius: 50%;
      width: 130px;
      box-shadow: 0.5px 1px 5px black;
    }

    h2 {
      font-size: 22px;
    }
  }

  .card-category:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .img-category {
    height: 140px;
  }
}

.search-container {
  margin: 0.5rem auto;
  display: flex;
  background: none;
  align-content: center;
  justify-content: center;
  border: none;
  width: 50%;

  .inner-container {
    display: flex;
    white-space: nowrap;
    width: 90%;
    font-size: 0.875rem;

    input {
      width: 95%;
      height: 3.125rem;
      background: #fff;
      border: 1.5px solid #a1a1a167;
      border-right: none;
      color: #000;
      padding-left: 1rem;
      border-radius: 25px 0 0 25px;
      outline: none;
      transition: 50ms;
    }

    button {
      border-radius: 0 25px 25px 0;
      border: 1.5px solid #a1a1a167;
      padding: 0;
      border-left: none;
      background: none;
      height: 3.125rem;
      width: 3.125rem;
      transition: all 550ms ease;
      color: var(--main-color);
      font-size: 1rem;
    }
  }

  .inner-container:hover,
  .inner-container:active,
  .inner-container:focus {
    input {
      border: 2px solid var(--main-color);
    }
    button {
      background: var(--main-color);
      cursor: pointer;
      color: #fff;
    }

    button:hover {
      background: var(--main-color);
      font-size: 1.25rem;
    }
  }

  .desktop-bar {
  justify-content: space-between;
  }

  .desktop-search {
    width: 50%;
  }
}
</style>
