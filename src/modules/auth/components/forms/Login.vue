<script>
import AppInput from 'components/ui/Input.vue'
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
    this.$set(this, 'handleErrors', this.validator.errorBag)
  }
}
</script>

<template>
  <div>
    <h2 class="text-align-center text-voyager--light font-size-xl font-weight-300 padding-top-l">
      Sign in to your account
    </h2>
    <form class="padding-m" novalidate>
      <div v-if="handleErrors.errors !== undefined && handleErrors.errors.length" class="form-errors padding-s border-radius-s shadow-level--1 bg-red text-align-left">
        <span v-for="error in handleErrors.errors" class="text-white font-size-s">{{error.msg}}</span>
      </div>
      <div class="input-group">
        <div class="input-icon">
          <AppInput type="email" name="email" class="input input-m input--primary" placeholder="Email Address" v-model="email"></AppInput>
          <i class="icon-envelope"></i>
        </div>
      </div>
      <div class="input-group">
        <div class="input-icon">
          <AppInput type="password" name="password" class="input input-m input--primary" placeholder="Password" v-model="password"></AppInput>
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
</template>
