import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../Main.vue'
import Dashboard from '../views/dashboard/Index.vue'
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '',
          component: Dashboard
        }
      ]
    },
    { path: '/signin', component: Signin },
    { path: '/signup', component: Signup },
    { path: '*', redirect: '/' }
  ]
})

export default router
