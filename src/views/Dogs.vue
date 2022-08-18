<template>
    <div>
       <PetTable
      species = "dogs"
      :pets="dogs"
    />
    </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'
export default {
  data () {
    return {
    //  dogs
    }
  },
  components: {
    PetTable
  },
  computed: {
    ...mapState([ // spread operator, call the funtion and pass it an array of the items on state you would like to be able to acces from this comonent
      'dogs' // i want to acces cats from state, i can get it directly from my vuex store
    ])

  }
}
</script>
