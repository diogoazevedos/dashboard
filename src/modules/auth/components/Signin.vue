<template>
  <div class="page-wrap display-flex">
    <div class="container">
      <h1 class="text-align-center text-white font-weight-300 margin-bottom-l margin-top-l">Voyager</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
          <div class="panel border-radius-s shadow-level--1 bg-light">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import 'src/assets/scss/variables';

.page-wrap {
  min-height: 100vh;
  background: -webkit-linear-gradient(left, $primary 0%, $primary-light 100%);
  background: linear-gradient(to right, $primary, $primary-light);
}

.panel-footer {
  background-color: lighten($gray-light, 30%);
  border-top: 1px solid $gray-light;
}
</style>
