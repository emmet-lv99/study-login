import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {name: 'hoza', email: 'hoza@gmail.com', password: '123456'},
      {name: 'zaza', email: 'zaza@gmail.com', password: '123456'},
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
