<script>
export default {
  name: 'AppComponent'
}
</script>

<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang='scss'>
$simple-line-font-path: "~simple-line-icons/fonts/";
$font-family-base: "Ubuntu", sans-serif;
@import '~simple-line-icons/scss/simple-line-icons';
@import './assets/scss/voyager';
</style>
