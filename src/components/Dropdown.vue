<script>
import Vue from 'vue'

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    position: {
      type: String,
      default: 'left'
    }
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    toggle () {
      this.show = !this.show
    }
  }
}
</script>

<template>
  <div ref="dropdown" class="dropdown-container">
    <div class="dropdown-toggle" @click.prevent="toggle()">
      <slot></slot>
    </div>
    <div class="dropdown-menu border-radius-s"
         :style="position === 'left' ? 'left: 0' : 'right: 0'"
         :class="{'dropdown-menu--open': show}">
      <slot name="custom-item"></slot>
      <a v-for="item in items" :href="item.href" class="dropdown-menu--item">
        <i v-if="item.icon" :class="item.icon"></i>
        {{item.label}}
      </a>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.dropdown-container {
  position: relative;
}
</style>
