<script>
import { mapActions } from 'vuex'

export default {
  name: 'AppDashboard',

  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },

  methods: {
    ...mapActions(['changePageInfos'])
  },

  mounted () {
    const payload = {
      title: 'Dashboard',
      icon: 'icon-grid'
    }
    this.changePageInfos(payload)
  }
}
</script>

<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="container">
        <img src="../../assets/logo.png">
        <h1>{{ msg }}</h1>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
</style>
