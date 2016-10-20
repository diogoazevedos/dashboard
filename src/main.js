// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import attributes from './validator/attributes'

Vue.use(VeeValidate, {
  dictionary: attributes
})

import App from './App.vue'
import store from './store/store'
import router from './router'
import { sync } from 'vuex-router-sync'

sync(store, router) // Globally register vuex-router-sync

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
