<script>
export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
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
