<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Not Found'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <header class="title-header bg-snow display-flex">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-6 col-sm-6">
          <h2 class="font-weight-300">
            <i class="font-size-l" :class="icon"></i>
            <span class="font-size-m" v-text="title"></span>
          </h2>
          <slot name="left"></slot>
        </div>
        <div class="col-xs-6 col-sm-6 flex-alignment--end">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
@import '../assets/scss/variables';

header {
  margin-bottom: 25px;
  height: 60px;
  border-bottom: 1px solid $snow-dark;

  h2 {
    position: relative;
    margin: 0;
    line-height: 58px;
    i {
      position: relative;
      top: 2px;
    }
  }
}
</style>
