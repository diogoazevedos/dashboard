<script>
</script>

<template>
  <div class="page-wrap display-flex">
    <div class="container">
      <h1 class="text-align-center text-white font-weight-300">Voyager</h1>
      <div class="row flex-alignment--center">
        <div class="col-sm-12 col-md-8 panel border-radius-s shadow-level--1 bg-light">
          <div class="row">
            <div class="col-sm-4">
              <b>Step 1</b>
              <p></p>
            </div>
            <div class="col-sm-4">
              <b>Step 2</b>
              <small>Billing</small>
            </div>
            <div class="col-sm-4">
              <b>Step 3</b>
            </div>
          </div>
          <div class="row flex-alignment--start">
            <div class="col-sm-6">
              <form class="padding-m" novalidate>
                <div class="input-group">
                  <label for="">Full name</label>
                  <div class="input-icon">
                    <input type="text" class="input input-m input--primary" placeholder="Full name">
                    <i class="icon-user"></i>
                  </div>
                </div>
                <div class="input-group">
                  <label for="">Email Address</label>
                  <div class="input-icon">
                    <input type="email" class="input input-m input--primary" placeholder="email@domain.com">
                    <i class="icon-envelope"></i>
                  </div>
                </div>
                <div class="input-group">
                  <label for="">Company name</label>
                  <div class="input-icon">
                    <input type="text" class="input input-m input--primary" placeholder="Company name">
                    <i class="icon-briefcase"></i>
                  </div>
                </div>
                <div class="input-group">
                  <label for="">Password</label>
                  <div class="input-icon">
                    <input type="password" class="input input-m input--primary" placeholder="Password">
                    <i class="icon-lock"></i>
                  </div>
                </div>
                <p class="font-size-s">
                  By clicking on "Create an account" below, you are agreeing to the <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a>.
                </p>
                <button class="button button-l button--block button--flat bg-voyager">Create an account</button>
              </form>
            </div>
            <div class="col-sm-6">
              <div class="padding-m">
                <h2 class="font-weight-300 font-size-xl text-voyager--dark">Unlimited products</h2>
                <p class="text-gray">Create as many products you want and pay only for those who are being monitored.</p>

                <h2 class="font-weight-300 font-size-xl text-voyager--dark">Unlimited e-commerces</h2>
                <p class="text-gray">Test our system free during the beta program and receive awards when Voyager be launched.</p>

                <h2 class="font-weight-300 font-size-xl text-voyager--dark">Unlimited marketplaces</h2>
                <p class="text-gray">Test our system free during the beta program and receive awards when Voyager be launched.</p>
              </div>
            </div>
          </div>
          <div class="panel-footer border-radius-bottom-s padding-m text-align-center reset-margin-row">
            Already have an account? <router-link to="/signin" class="text-voyager--dark">Login</router-link>
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
