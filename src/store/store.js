import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    user: null,
    products: [],
    product: {
      id: '',
      title: '',
      category: [],
      shipping: '',
      description: '',
      picture: ''
    }
  },
  mutations: {
    cargar (state, payload) {
      state.products = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    SET_PRODUCT (state, payload) {
      state.products.push(payload)
    },
    DELETE_PRODUCT (state, payload) {
      state.products = state.products.filter(product => product.id !== payload)
    },
    SEARCH_PRODUCT (state, payload) {
      if (!state.products.find(product => product.id === payload)) {
        router.push('/usuario')
        return
      }
      state.product = state.products.find(product => product.id === payload)
    },
    UPDATE_PRODUCT (state, payload) {
      state.products = state.products.map(product => product.id === payload.id ? payload : product)
      router.push('/usuario')
    }
  },
  // Recibe datos de onAuthStateChanged (main.js)
  actions: {
    async cargarLocalStorage ({ commit }) {
      try {
        const response = await fetch('https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-4.json')
        const dataDB = await response.json()
        const arrayProducts = []
        for (const index in dataDB) {
          arrayProducts.push(dataDB[index])
        }
        commit('cargar', arrayProducts)
        console.log(dataDB)
      } catch (error) {
        console.log(error)
      }
    },
    detectUsers ({ commit }, user) {
      commit('setUser', user)
    },
    async setProduct ({ commit }, product) {
      try {
        // eslint-disable-next-line no-undef
        const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/userList-${user.uid}/${product.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        })

        const dataDB = await response.json()
        console.log(dataDB)
      } catch {
        console.log('error')
      }commit('SET_PRODUCT', product)
    },
    async deleteProduct ({ commit }, id) {
      try {
        await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/productsList/${id}.json`, {
          method: 'DELETE'
        })
        commit('DELETE_PRODUCT', id)
      } catch (error) {
        console.log(error)
      }
    },
    searchProduct ({ commit }, id) {
      commit('SEARCH_PRODUCT', id)
    },
    async updateProduct ({ commit }, product) {
      try {
        const response = await fetch(`https://cambialo-eoi-default-rtdb.europe-west1.firebasedatabase.app/productsList/${product.id}.json`, {
          method: 'PATCH',
          body: JSON.stringify(product)
        })
        const dataDB = await response.json()
        commit('UPDATE_PRODUCT', dataDB)
      } catch (error) {
        console.log(error)
      }
    }
  },
  // Devuelve true/false si existe un usuario
  getters: {
    existUser (state) {
      if (state.user === null) {
        return false
      } else {
        return true
      }
    }
  }
})
