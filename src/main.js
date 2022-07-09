import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin, NavbarPlugin } from 'bootstrap-vue'
import Navbar from '@/components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(NavbarPlugin)
Vue.component('nav-bar', Navbar)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
