import Products from './components/Index.vue'
import CreateProduct from './components/Create.vue'

const routes = [
  { path: '/products', component: Products },
  { path: '/products/create', component: CreateProduct }
]

export default routes
