import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import IndexView from '../views/IndexView.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: IndexView },
    { path: '*', redirect: '/' }
  ]
})

export default router
