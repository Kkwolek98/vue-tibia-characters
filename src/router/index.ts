import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Worlds from '../views/Worlds.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Worlds',
    component: Worlds,
    meta: { pathHeader: 'Worlds' }
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
