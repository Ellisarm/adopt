// mutations are here for updating the state for u. You will call an action that calls a mutation that updates State. In actions you will make API calls
// from here we can mutate or update state
export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}
