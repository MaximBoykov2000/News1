import Vue from 'vue'
import VueRouter from 'vue-router'
import TheRus from '../views/TheRus.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: TheRus
  },
  {
    path: '/ru',
    component: TheRus
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
