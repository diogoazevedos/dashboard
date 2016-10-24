<script>
import Vue from 'vue'
import AppInput from 'components/ui/Input.vue'
import { Validator } from 'vee-validate'

export default {
  data () {
    return {
      fullName: '',
      email: '',
      company: '',
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
        fullName: this.fullName,
        email: this.email,
        password: this.password
      })
    }
  },

  mounted () {
    this.validator = new Validator({
      fullName: 'required',
      email: 'required|email',
      password: 'required|min:6'
    })
    Vue.set(this, 'handleErrors', this.validator.errorBag)
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <form class="padding-m" novalidate>
        <div v-if="handleErrors.errors !== undefined && handleErrors.errors.length" class="form-errors padding-s border-radius-s shadow-level--1 bg-red text-align-left">
          <span v-for="error in handleErrors.errors" class="text-white font-size-s">{{error.msg}}</span>
        </div>
        <div class="input-group">
          <label for="fullName">Full name</label>
          <div class="input-icon">
            <AppInput name="fullName" v-model="fullName" class="input input-m input--primary" placeholder="Full name"></AppInput>
            <i class="icon-user"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="email">Email Address</label>
          <div class="input-icon">
            <AppInput type="email" name="email" class="input input-m input--primary" placeholder="Email Address" v-model="email"></AppInput>
            <i class="icon-envelope"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="company">Company name</label>
          <div class="input-icon">
            <AppInput name="company" class="input input-m input--primary" placeholder="Company name" v-model="company"></AppInput>
            <i class="icon-briefcase"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <div class="input-icon">
            <AppInput type="password" name="password" class="input input-m input--primary" placeholder="Password" v-model="password"></AppInput>
            <i class="icon-lock"></i>
          </div>
        </div>
        <p class="font-size-s">
          By clicking on "Create an account" below, you are agreeing to the <a href="#">Terms of Service</a> and our <a href="#">Privacy Policy</a>.
        </p>
        <button class="button button-l button--block button--flat bg-voyager" @click.prevent="validateForm">Create an account</button>
      </form>
    </div>
    <div class="col-xs-12 col-sm-6">
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
</template>
