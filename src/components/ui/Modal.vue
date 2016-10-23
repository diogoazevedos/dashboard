<script>
export default {
  name: 'AppModalComponent',

  replace: true,

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  computed: {},

  methods: {
    show () {
      this.$el.style.display = 'block'
    }
  }
}
</script>

<template>
  <div style="display: none">
    <div class="modal">
      <slot></slot>
    </div>
    <div class="backdrop" :class="{'backdrop-visible': show}"></div>
  </div>
</template>

<style lang='scss' scoped>

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  background-color: #000;
  transform: translateZ(0px);
  opacity: 0;
}
.backdrop-visible {
  opacity: .85;
}
</style>
