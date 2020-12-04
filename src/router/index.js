import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import Bake from '../views/Bake.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menus',
    name: 'Menus',
    component: Menus
  },
  {
    path: '/bake',
    name: 'Bake',
    component: Bake
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
