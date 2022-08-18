<template>
    <div>
        <h1>{{ animal.name}} ({{$route.params.species}})</h1>
        <p>Age: {{ animal.age}} years old</p>
        <p> Breed: {{ animal.breed}}</p> <!--// return correct animal name -->
        <!--{{ $route.params.species}}
        {{$route.params.id}} are legatura cu indexul din router, unde la componenta Pet am pus species si id -->
    </div>
</template>

<script>
// import dogs from '@/data/dogs'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([ // spread operator, call the funtion and pass it an array of the items on state you would like to be able to acces from this comonent
      'dogs',
      'cats' // i want to acces cats from state, i can get it directly from my vuex store
    ])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id] // this will return cats or dogs; this.cats aceeasi chestei cu this['cats']
    this.animal = animal
  }
}
</script>
