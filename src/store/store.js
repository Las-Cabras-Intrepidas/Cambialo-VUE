import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  // Recibe datos de onAuthStateChanged (main.js)
  actions: {
    detectUsers ({ commit }, user) {
      commit('setUser', user)
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
