<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div class="dropdown-menu border-radius-s" :class="{'dropdown-menu--open': isOpen}">
    <slot></slot>
  </div>
</template>
