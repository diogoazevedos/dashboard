<script>
import Vue from 'vue'
import AppInput from '../../../components/ui/Input.vue'
import { Validator } from 'vee-validate'

export default {
  computed: {
    cardOptions () {
      return {
        creditCard: true,
        onCreditCardTypeChanged: (type) => {
          // Show icons
        }
      }
    }
  },

  data () {
    return {
      fullName: '',
      cardNumber: '',
      expirationDate: '',
      securityCode: '',
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
        cardNumber: this.cardNumber,
        expirationDate: this.expirationDate,
        securityCode: this.securityCode
      })
    }
  },

  mounted () {
    this.validator = new Validator({
      fullName: 'required',
      cardNumber: 'required|digits:19',
      expirationDate: 'required',
      securityCode: 'required|min:3,max:3'
    })
    Vue.set(this, 'handleErrors', this.validator.getErrors())
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <form class="padding-m" @keyup.enter.prevent="validateForm" novalidate>
        <div v-if="handleErrors.errors !== undefined && handleErrors.errors.length" class="form-errors padding-s border-radius-s shadow-level--1 bg-red text-align-left">
          <span v-for="error in handleErrors.errors" :key="error.field" class="text-white font-size-s">{{error.msg}}</span>
        </div>
        <div class="input-group">
          <label for="fullName">Full Name</label>
          <div class="input-icon">
            <app-input name="fullName" class="input input-m input--primary" placeholder="Full Name" v-model="fullName"></app-input>
            <i class="icon-user"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="expirationDate">Credit Card Number</label>
          <div class="input-icon">
            <app-input name="cardNumber" class="input input-m input--primary" placeholder="Card Number" maxlength="19" v-model="cardNumber" :options="cardOptions"></app-input>
            <i class="icon-credit-card"></i>

          </div>
        </div>
        <div class="input-group">
          <label for="expirationDate">Expiration Date</label>
          <div class="input-icon">
            <app-input name="expirationDate" class="input input-m input--primary" placeholder="MM/YYYY" maxlength="7" v-model="expirationDate" :options="{ date: true, datePattern: ['m', 'Y'] }"></app-input>
            <i class="icon-calendar"></i>
          </div>
        </div>
        <div class="input-group">
          <label for="securityCode">Security Code (CVV)</label>
          <div class="input-icon">
            <app-input name="securityCode" class="input input-m input--primary" placeholder="123" maxlength="3" v-model="securityCode"></app-input>
            <i class="icon-lock"></i>
          </div>
        </div>
        <button class="button button-l button--block button--flat bg-voyager" @click.prevent="validateForm">Next Step</button>
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

<style lang='scss'>
</style>
