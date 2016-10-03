import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueMoment from 'vue-moment'

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(VeeValidate, {
  dictionary: attributes
})
Vue.use(VueMoment, {
  moment
})

import App from './App.vue'
import store from './store/store'
import router from './router'
import { sync } from 'vuex-router-sync'
import attributes from './validator/attributes'

sync(store, router)

const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
