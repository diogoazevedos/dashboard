import Main from '../Main.vue'
import dashboard from '../modules/dashboard/routes'
import products from '../modules/products/routes'
import settings from '../modules/settings/routes'
import authentication from '../modules/auth/routes'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    component: Main,
    children: [ ...dashboard, ...products, ...settings ]
  },
  ...authentication,
  { path: '*', redirect: '/' }
]

export default routes
