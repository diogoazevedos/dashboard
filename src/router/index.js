import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../Main.vue'
import Dashboard from '../views/dashboard/Index.vue'
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import SignupAccount from '../views/auth/signup/Account.vue'
import SignupPayment from '../views/auth/signup/Payment.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/dashboard',
          component: Dashboard
        }
      ]
    },
    { path: '/login', component: Signin },
    { path: '/join',
      component: Signup,
      children: [
        {
          path: '',
          component: SignupAccount
        },
        {
          path: 'payment',
          component: SignupPayment
        }
      ]
    },
    { path: '*', redirect: '/dashboard' }
  ]
})

export default router
