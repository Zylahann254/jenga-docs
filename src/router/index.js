import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Receipt from '../views/Receipt.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  
  {
    path: '/home',
    name: 'main',
    component: Receipt
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
