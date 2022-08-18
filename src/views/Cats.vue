<template>
  <div>
   <!--  <h1>Cats for Adoption</h1>
    <b-table striped hover :items="cats">
      <template #cell(name)="data">
        <! slot ="name" slot-scope = "data;; -->
        <!-- <router-link :to="`/pets/cats/${data.index}`"> -->
          <!-- the link gives me the index in the array-->
          <!-- {{ data.value }} -->
        <!-- </router-link> -->
      <!-- </template> -->
  <!--   </b-table> -->
    <!--voi face un dynamic href -->

    <PetTable
      species = "cats"
      :pets="cats"
    />
  </div>
</template>

<script>
// import cats from '@/data/cats' // @ este o scurtatura pentru src, unde am cats.js care este locul unde am exportat arrayul cu obiecte
import { mapState } from 'vuex' // smth from vuex
import PetTable from '@/components/PetTable.vue'

export default {
  data () {
    return {
      // cats // cats item equals to cats that i imported, shorthand
    }
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState([
      // spread operator, call the funtion and pass it an array of the items on state you would like to be able to acces from this component
      'cats' // i want to acces cats from state, i can get it directly from my vuex store
    ])
  }
}
</script>
