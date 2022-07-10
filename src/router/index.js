import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import(/* webpackChunkName: "about" */ '../views/PaymentsView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/workers',
    name: 'workers',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorkersView.vue')
  },
  {
    path: '/sells',
    name: 'sells',
    component: () => import(/* webpackChunkName: "about" */ '../views/SellByDateView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
