import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Main from '../Main.vue'
import Dashboard from '../views/dashboard/Index.vue'
import Products from '../views/products/Index.vue'
import Settings from '../views/settings/Index.vue'
import Profile from '../views/settings/Profile.vue'
import Signin from '../views/auth/Signin.vue'
import Signup from '../views/auth/Signup.vue'
import SignupAccount from '../views/auth/signup/Account.vue'
import SignupPayment from '../views/auth/signup/Payment.vue'

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: Main,
      children: [
        { path: 'dashboard', component: Dashboard },
        { path: 'products', component: Products },
        {
          path: '/settings',
          redirect: '/settings/profile',
          component: Settings,
          children: [
            { path: 'profile', component: Profile }
          ]
        }
      ]
    },
    { path: '/login', component: Signin },
    { path: '/join',
      component: Signup,
      children: [
        { path: '', component: SignupAccount },
        { path: 'payment', component: SignupPayment }
      ]
    },
    { path: '*', redirect: '/' }
  ]
})

export default router
