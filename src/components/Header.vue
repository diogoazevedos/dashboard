<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      pageTitle: state => state.page.title,
      pageIcon: state => state.page.icon
    })
  }
}
</script>

<template>
  <header class="title-header bg-white-smoke display-flex">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-6 col-sm-6">
          <h2 class="font-weight-400">
            <i class="font-size-l" :class="pageIcon"></i>
            <span class="font-size-m">{{pageTitle}}</span>
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
@import '../assets/scss/variables';

header {
  margin-top: 53px;
  height: 60px;
  border-bottom: 1px solid darken($smoke, 10%);

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
