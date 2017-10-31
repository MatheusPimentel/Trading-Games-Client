import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sessao: undefined
  },
  mutations: {
    inicializarSessao (state, payload) {
      state.sessao = payload
    },
    finalizarSessao (state, payload) {
      state.sessao = payload
    }
  }
})
