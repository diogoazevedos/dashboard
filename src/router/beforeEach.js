import store from '../store/store'

const isAuthRoute = (route) => {
  return route.path.indexOf('/login') !== -1 || route.path.indexOf('/join') !== -1
}
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  console.log()
  if (!isAuthRoute(to) && !isLogged()) {
    next('/login')
  } else {
    next()
  }
}
