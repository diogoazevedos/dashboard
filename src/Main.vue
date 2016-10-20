<script>
import AppNav from './components/Nav.vue'
import AppFooter from './components/Footer.vue'
export default {
  name: 'MainComponent',
  components: {
    AppNav, AppFooter
  }
}
</script>

<template>
  <div style="padding-top: 50px">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
