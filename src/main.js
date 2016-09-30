import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import attributes from './validator/attributes'

Vue.use(VeeValidate, {
  dictionary: attributes
})

sync(store, router)

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
