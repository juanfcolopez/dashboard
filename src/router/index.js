import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'sells',
    component: () => import(/* webpackChunkName: "about" */ '../views/SellByDateView.vue')
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
    path: '/tables',
    name: 'tables',
    component: () => import(/* webpackChunkName: "about" */ '../views/TablesView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
