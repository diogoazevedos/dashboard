<script>
import AppCheckbox from './Checkbox.vue'

export default {
  name: 'AppCheckListComponent',

  props: {
    options: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      currentValue: ''
    }
  },

  components: {
    AppCheckbox
  }
}
</script>

<template>
  <section class="checklist">
    <div v-for="option in options" class="checklist-item">
      <app-checkbox :value="option.value || option"
                    :disabled="option.disabled"
                    :label="option.label || option"></app-checkbox>
    </div>
  </section>
</template>

<style lang='scss' scoped>
.checklist-item {
  display: block;
}
</style>
