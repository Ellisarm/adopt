// tot ce am in views voi importa aici
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Dogs from '../views/Dogs.vue'
import Pet from '../views/Pet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: Dogs
  },
  {
    path: '/pets/:species/:id', // dinamic route matchind, the id its pets; de asemenea prin species vreau sa stiu pe ce animal sunt, pentru compoonenta PET
    name: 'pet',
    component: Pet
  }
]
// all four routs that are gonna be used in the application
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
