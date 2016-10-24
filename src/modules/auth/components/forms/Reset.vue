<script>
import AppInput from 'components/ui/Input.vue'
import { Validator } from 'vee-validate'

export default {
  name: 'AppResetPassword',

  data () {
    return {
      email: '',
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
        email: this.email
      })
    }
  },

  mounted () {
    this.validator = new Validator({
      email: 'required|email'
    })
    this.$set(this, 'handleErrors', this.validator.errorBag)
  }
}
</script>

<template>
  <div>
    <h2 class="text-align-center text-voyager--light font-size-xl font-weight-300 padding-top-l">
      Reset Password
    </h2>
    <p class="text-align-center">Enter your email bellow to reset your password.</p>
    <form class="padding-right-m padding-bottom-m padding-left-m" novalidate>
      <div v-if="handleErrors.errors !== undefined && handleErrors.errors.length" class="form-errors padding-s border-radius-s shadow-level--1 bg-red text-align-left">
        <span v-for="error in handleErrors.errors" class="text-white font-size-s">{{error.msg}}</span>
      </div>
      <div class="input-group">
        <div class="input-icon">
          <AppInput type="email" name="email" class="input input-m input--primary" placeholder="Email Address" v-model="email"></AppInput>
          <i class="icon-envelope"></i>
        </div>
      </div>
      <button class="button button-l button--block button--flat bg-voyager" @click.prevent="validateForm">Reset Password</button>
    </form>
  </div>
</template>
