import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters // computed properties for your vuex
  // in need this to be actual object in each file
})// im gonna export this store
// global object, any funcations or variables, any data, anything taht u want to use in multiple parts of your application you store here and import in every component that u want
