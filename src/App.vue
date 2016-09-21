<script>
</script>

<template>
  <main>
    <router-view></router-view>
    <div class="app-backdrop fixed-top fixed-bottom"></div>
  </main>
</template>

<style lang="scss">
$simple-line-font-path: "~simple-line-icons/fonts/";
@import '~voyager-assets/scss/voyager';
@import '~simple-line-icons/scss/simple-line-icons';

.app-backdrop {
  opacity: 0;
  pointer-events: none;
  z-index: 999;
}
</style>
