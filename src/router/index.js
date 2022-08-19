import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KnowView from '../views/KnowView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/know',
    name: 'know-view',
    component: () => import(/* webpackChunkName: "know-view" */ '../views/KnowView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
