<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang='scss'>
$simple-line-font-path: "~simple-line-icons/fonts/";
@import '~simple-line-icons/scss/simple-line-icons';
@import './assets/scss/voyager';
html, body { height: 100%; }
.container, .container-fluid {
  margin-top: 50px;
}
a {
  color: $blue-dark;
  &:active {
    color: $primary-light;
  }
}
</style>
