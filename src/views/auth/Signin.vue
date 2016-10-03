<script>
import Vue from 'vue'
import AppInput from '../../components/ui/Input.vue'
import { Validator } from 'vee-validate'

export default {
  data () {
    return {
      email: '',
      password: '',
      validator: null,
      handleErrors: []
    }
  },

  components: {
    AppInput
  },

  methods: {
    validateForm () {
      this.validator.validateAll({
        email: this.email,
        password: this.password
      })
    }
  },

  mounted () {
    this.validator = new Validator({
      email: 'required|email',
      password: 'required|min:6'
    })
    Vue.set(this, 'handleErrors', this.validator.errorBag)
  }
}
</script>

<template>
  <div class="page-wrap display-flex">
    <div class="container">
      <h1 class="text-align-center text-white font-weight-300">Voyager</h1>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
          <div class="panel border-radius-s shadow-level--1 bg-light">
            <h2 class="text-align-center text-voyager--light font-size-xl font-weight-300 padding-top-l">
              Sign in to your account
            </h2>
            <form class="padding-m" novalidate>
              <div v-if="handleErrors.errors !== undefined && handleErrors.errors.length" class="form-errors padding-s border-radius-s shadow-level--1 bg-red text-align-left">
                <span v-for="error in handleErrors.errors" class="text-white font-size-s">{{error.msg}}</span>
              </div>
              <div class="input-group">
                <div class="input-icon">
                  <app-input type="email" name="email" class="input input-m input--primary" placeholder="Email Address" v-model="email"></app-input>
                  <i class="icon-envelope"></i>
                </div>
              </div>
              <div class="input-group">
                <div class="input-icon">
                  <app-input type="password" name="password" class="input input-m input--primary" placeholder="Password" v-model="password"></app-input>
                  <i class="icon-lock"></i>
                </div>
              </div>
              <div class="input-group text-align-right">
                <a href="#" class="text-voyager--dark">Forgot your password?</a>
              </div>
              <button class="button button-l button--block button--flat bg-voyager" @click.prevent="validateForm">Sign in</button>
            </form>
            <div class="panel-footer border-radius-bottom-s padding-m text-align-center">
              Need an account? <router-link to="/join" class="text-voyager--dark">Sign up</router-link>
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
