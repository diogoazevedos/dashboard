<script>
export default {
  computed: {
    currentRoute () {
      return this.$route.path
    }
  }
}
</script>

<template>
  <div class="page-wrap display-flex">
    <div class="container">
      <h1 class="text-align-center text-white font-weight-300">Voyager</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
          <div class="panel border-radius-s shadow-level--1 bg-light">
            <div class="row">
              <div class="col-xs-4 col-sm-4">
                <div class="padding-top-m padding-left-m padding-right-m">
                  <i class="icon-user" :class="[(currentRoute === '/join') ? 'text-voyager' : 'text-gray--light']"></i>
                  <b class="padding-left-xs" :class="[(currentRoute === '/join') ? 'text-voyager' : 'text-gray--light']">Account</b>
                  <p class="font-size-s margin-bottom-reset" :class="[(currentRoute === '/join') ? 'text-gray' : 'text-gray--light']">Set up your user account</p>
                </div>
              </div>
              <div class="col-xs-4 col-sm-4">
                <div class="padding-top-m padding-left-m padding-right-m">
                  <i class="icon-credit-card" :class="[(currentRoute === '/join/payment') ? 'text-voyager' : 'text-gray--light']"></i>
                  <b class="padding-left-xs" :class="[(currentRoute === '/join/payment') ? 'text-voyager' : 'text-gray--light']">Payment</b>
                  <p class="font-size-s margin-bottom-reset" :class="[(currentRoute === '/join/payment') ? 'text-gray' : 'text-gray--light']">Choose a payment method</p>
                </div>
              </div>
              <div class="col-xs-4 col-sm-4">
                <div class="padding-top-m padding-left-m padding-right-m">
                  <i class="icon-settings" :class="[(currentRoute === '/join/settings') ? 'text-voyager' : 'text-gray--light']"></i>
                  <b class="padding-left-xs" :class="[(currentRoute === '/join/settings') ? 'text-voyager' : 'text-gray--light']">Settings</b>
                  <p class="font-size-s margin-bottom-reset" :class="[(currentRoute === '/join/settings') ? 'text-gray' : 'text-gray--light']">Choose a payment method</p>
                </div>
              </div>
            </div>
            <!-- Router view -->
            <router-view></router-view>
            <!-- ./Router view -->
            <div class="panel-footer border-radius-bottom-s padding-m text-align-center">
              Already have an account? <router-link to="/login" class="text-voyager--dark">Sign in</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import '../../assets/scss/variables';

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
