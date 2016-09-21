<script>
import AppNav from './components/Nav.vue'
import AppFooter from './components/Footer.vue'
export default {
  components: {
    AppNav, AppFooter
  }
}
</script>

<template>
  <div>
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<style lang='scss'>
  body { padding-top: 50px; }
</style>
