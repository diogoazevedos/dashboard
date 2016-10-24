import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'
import SignupAccount from './components/signup/Account.vue'
import SignupPayment from './components/signup/Payment.vue'

const routes = [
  { path: '/login', component: Signin },
  { path: '/join',
    component: Signup,
    children: [
      { path: '/', component: SignupAccount },
      { path: 'payment', component: SignupPayment }
    ]
  }
]

export default routes
