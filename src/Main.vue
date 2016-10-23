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
    <AppNav></AppNav>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

