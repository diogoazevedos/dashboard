<script>
import AppInput from 'components/ui/Input.vue'

export default {
  name: 'AppBilling',

  components: {
    AppInput
  }
}
</script>

<template>
  <div class="row">
    <div class="col-xs-12 col-sm-10">
      <h2 class="font-weight-300">Usage Information</h2>

      <table class="table-fluid table-usage padding-s shadow-level--0 border-radius-s">
        <tbody>
          <tr>
            <td width="30%">Current Usage</td>
            <td>Unused</td>
          </tr>
          <tr>
            <td width="30%">Account Credits</td>
            <td>R$ 0,00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <hr class="line-divider">

    <div class="col-xs-12">
      <h2 class="font-weight-300">Payment Methods</h2>
      <p>Please enter your preferred payment method and add more credits to your account.</p>

      <div class="payment-card">

      </div>
    </div>

    <hr class="line-divider">

    <div class="col-xs-12">
      <h2 class="font-weight-300">Promotional Code</h2>
      <div class="padding-s shadow-level--0 border-radius-s">
        <p class="margin-bottom-m">
          Thanks to signup at Voyager? You automatically won a promotional credit of <span class="text-voyager">R$ 5,00</span>.
        </p>
        <p>If you have a promotional code, please enter it bellow.</p>
        <AppInput name="promotionalCode" class="input input-m input--primary" placeholder="Promo Code"></AppInput>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
@import 'src/assets/scss/variables';

.table-usage {
  padding-left: 0;
  padding-right: 0;

  tbody {
    tr > td {
      padding-left: 15px;
      padding-right: 15px;
      color: $gray-light;
    }

    tr:first-child > td {
      border-bottom: 1px solid $snow-dark;
    }
  }
}

.line-divider {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
</style>
