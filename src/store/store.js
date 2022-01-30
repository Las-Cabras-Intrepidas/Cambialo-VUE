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
      localStorage.setItem('products', JSON.stringify(state.products))
    },
    DELETE_PRODUCT (state, payload) {
      state.products = state.products.filter(product => product.id !== payload)
      localStorage.setItem('products', JSON.stringify(state.products))
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
      localStorage.setItem('products', JSON.stringify(state.products))
      router.push('/usuario')
    }
  },
  // Recibe datos de onAuthStateChanged (main.js)
  actions: {
    cargarLocalStorage ({ commit }) {
      if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'))
        commit('cargar', products)
        return
      }

      localStorage.setItem('products', JSON.stringify([]))
    },
    detectUsers ({ commit }, user) {
      commit('setUser', user)
    },
    setProduct ({ commit }, product) {
      commit('SET_PRODUCT', product)
    },
    deleteProduct ({ commit }, id) {
      commit('DELETE_PRODUCT', id)
    },
    searchProduct ({ commit }, id) {
      commit('SEARCH_PRODUCT', id)
    },
    updateProduct ({ commit }, id) {
      commit('UPDATE_PRODUCT', id)
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
