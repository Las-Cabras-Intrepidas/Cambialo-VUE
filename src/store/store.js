import { createStore } from 'vuex'
import { getAuth } from 'firebase/auth'

const store = createStore({
  state () {
    return {
      email: '',
      password: ''
    }
  },
  mutations: {
    SET_USER (state, newEmail) {
      state.email = newEmail
    },
    SET_PASSWORD (state, newPassword) {
      state.password = newPassword
    }
  },
  actions: {
    async logIn ({ commit }, { newEmail, newPassword }) {
      const auth = getAuth()
      console.log(auth)
      commit('SET_USER', newEmail)
    },
    async setPassword ({ commit }, newPassword) {
      commit('SET_PASSWORD', newPassword)
    }
  }
})

export default store
