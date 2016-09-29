<script>
</script>

<template>
  <div class="page-wrap display-flex">
    <div class="container">
      <h1 class="text-align-center text-white font-weight-300">Voyager</h1>
      <div class="row flex-alignment--center">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <div class="panel border-radius-s shadow-level--1 bg-light">
            <h2 class="text-align-center text-voyager--light font-size-xl font-weight-300 padding-top-l">
              Sign in to your account
            </h2>
            <form class="padding-m" novalidate>
              <div class="input-group">
                <div class="input-icon">
                  <input type="text" class="input input-m input--primary" placeholder="email@domain.com">
                  <i class="icon-envelope"></i>
                </div>
              </div>
              <div class="input-group">
                <div class="input-icon">
                  <input type="password" class="input input-m input--primary" placeholder="Password">
                  <i class="icon-lock"></i>
                </div>
              </div>
              <div class="input-group text-align-right">
                <a href="#" class="text-voyager--dark">Forgot your password?</a>
              </div>
              <button class="button button-l button--block button--flat bg-voyager">Sign in</button>
            </form>
            <div class="panel-footer border-radius-bottom-s padding-m text-align-center">
              Need an account? <router-link to="/signup" class="text-voyager--dark">Register</router-link>
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
