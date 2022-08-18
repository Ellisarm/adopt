export default {
  addPet: ({ commit }, payload) => { // This object comes from VueX(commit) and payload is the custom paramater that we gonna be passing
    commit('appendPet', payload) // this will call an mutation for me
  }
}
