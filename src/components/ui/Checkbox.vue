<script>
export default {
  props: {
    value: [Number, String, Array],
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      currentValue: this.value
    }
  },

  watch: {
    value (value) {
      this.currentValue = value
    },
    currentValue (value) {
      this.$emit('input', value)
    }
  },

  created () {
    window.console.log(this.currentValue)
  }
}
</script>

<template>
  <label class="input-checkbox input-checkbox-s" :class="{'input-disabled': disabled}">
    <input type="checkboxdev
           :value="value"
           :disabled="disabled">
    <span class="input-checkbox--indicator border-radius-s">
      <svg class="input-checkbox--icon" viewBox="0 0 30 30" data-reactid=".0.1.2.0.a.1.0.0.0.1.0"><path d="M13.08,16.53l-2.08-2a1.7,1.7,0,0,0-2.48,0,1.88,1.88,0,0,0,0,2.59L12,20.46a1.71,1.71,0,0,0,1.27.54,1.75,1.75,0,0,0,1.3-.55l6.91-8.23a2,2,0,0,0,0-2.66,1.73,1.73,0,0,0-2.54,0l-5.85,7h0Z" data-reactid=".0.1.2.0.a.1.0.0.0.1.0.0"></path></svg>
    </span>
    <span class="input-checkbox--text" v-if="label" v-text="label"></span>
  </label>
</template>
