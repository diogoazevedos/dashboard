<script>
import AppNav from './components/Nav.vue'
import AppFooter from './components/Footer.vue'
import AppHeader from './components/Header.vue'
export default {
  name: 'MainComponent',
  components: {
    AppNav, AppFooter, AppHeader
  }
}
</script>

<template>
  <div>
    <app-nav></app-nav>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
