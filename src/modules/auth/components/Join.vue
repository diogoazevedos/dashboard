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
      <h1 class="text-align-center text-white font-weight-300 margin-bottom-l margin-top-l">Voyager</h1>
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
            <router-view></router-view>
            <div class="panel-footer border-radius-bottom-s padding-m text-align-center">
              Already have an account? <router-link to="/login" class="text-voyager--dark">Sign in</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

