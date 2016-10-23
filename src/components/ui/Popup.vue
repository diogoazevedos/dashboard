<script>
import Popup from 'tether-drop'

export default {
  name: 'AppPopupComponent',

  props: {
    trigger: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'bottom left'
    }
  },

  data () {
    return {
      popup: null
    }
  },

  mounted () {
    this.popup = new Popup({
      target: this.$parent.$refs[this.trigger][0] || this.$parent.$refs[this.trigger],
      content: this.$refs.popup,
      position: this.position,
      openOn: 'click'
    })
  }
}
</script>

<template>
  <div ref="popup" class="popup dropdown-menu border-radius-s">
    <slot></slot>
  </div>
</template>

<style lang='scss'>
.drop-open {
  .drop-after-open {
    opacity: 1;
    pointer-events: auto;
  }
}

.drop {
  opacity: 0;
  pointer-events: none;
  transition: opacity ease 0.1s;

  .popup {
    margin-top: 0;
    transition: margin ease 0.1s;
  }
}
</style>
