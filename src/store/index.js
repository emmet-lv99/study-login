import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {name: 'hoza', email: 'hoza@gmail.com', password: '1234'},
      {name: 'zaza', email: 'zaza@gmail.com', password: '1234'},
    ],
    isSuccess: false,
    isErr: false
  },
  mutations: {
    loginSuccess(state) {
      state.isSuccess = true
      state.isErr = false
    },
    loginErr(state) {
      state.isSuccess = false
      state.isErr = true
    }
  },
  actions: {
    login({state, commit}, payload) {
      let passUser = null
      let resUser = payload
      state.allUsers.forEach(user=>{
        if (user.email === resUser.email) {
          passUser = user
        }
      })
      if (passUser !== null) {
        if (passUser.password !== resUser.password) {
          commit('loginErr')
        } else {
          commit('loginSuccess')
        }
      } else {
        commit('loginErr')
      }
    }
  },
  modules: {
  }
})
