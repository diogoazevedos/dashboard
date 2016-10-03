<script>
import Cleave from 'cleave.js'

export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    options: {
      type: Object,
      default: () => ({})
    }
  },

  data () {
    return {
      cleave: null
    }
  },

  methods: {
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  },

  mounted () {
    if (this.options) {
      this.cleave = new Cleave(this.$el, this.options)
    }
  },

  beforeDestroy () {
    if (this.options) {
      this.cleave.destroy()
    }
  }
}
</script>

<template>
  <input :type="type" :value="value" @input="onInput">
</template>

<style lang='scss'>
</style>
