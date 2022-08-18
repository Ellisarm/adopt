import cats from '../data/cats'
import dogs from '../data/dogs'
// this object is the default state in app
// data that im gonna be able to pull in any component that i want
export default {
  cats,
  dogs,
  pets: [...cats, ...dogs] // daca nu as pune cele 3 puncte s ar face nested arrays
} // separate arrays, then go to cats.vue and dogs.vue and import smth from 'vuex'
// All of the pets (cats and dogs) will be put in state and then pull the pet i want from state
