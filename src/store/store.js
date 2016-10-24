import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules
})

export default store
