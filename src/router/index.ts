import Vue from 'vue'
import VueRouter, { RouteConfig, Route } from 'vue-router'
import Worlds from '../views/Worlds.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Worlds',
    component: Worlds,
    meta: { pathHeader: 'Worlds' }
  },
  {
    path: '/world/:world',
    name: 'World',
    component: () => import('../views/World.vue'),
    meta: { pathHeader: (route: Route) => `${route.params.world}`}
  }
]

const router = new VueRouter({
  routes
})

export default router
