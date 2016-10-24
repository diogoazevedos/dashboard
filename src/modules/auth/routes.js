import Main from './components/Main.vue'
import Join from './components/Join.vue'
import FormLogin from './components/forms/Login.vue'
import FormReset from './components/forms/Reset.vue'
import FormAccount from './components/forms/Account.vue'
import FormPayment from './components/forms/Payment.vue'

const routes = [
  {
    path: '/login',
    component: Main,
    children: [
      { path: '/', component: FormLogin }
    ]
  },
  {
    path: '/password',
    component: Main,
    children: [
      { path: 'reset', component: FormReset }
    ]
  },
  {
    path: '/join',
    component: Join,
    children: [
      { path: '/', component: FormAccount },
      { path: 'payment', component: FormPayment }
    ]
  }
]

export default routes
