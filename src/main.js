import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Pharmacy from './pharmacy.vue'
import Prescription from './prescription.vue'
import Inventory from './inventory.vue'
import Login from './login'
const routes = [
  { path: '/', component: Login },
  { path: '/pharmacy',name:'pharmacy', component: Pharmacy, props: true },
  { path: '/prescription', component: Prescription },
  { path: '/inventory', component: Inventory },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
