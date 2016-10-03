<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => ([])
    },
    data: {
      type: Object,
      required: true
      default: () => ({})
    },
    allowSelection: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th v-if="allowSelection">
            <input type="checkbox">
          </th>
          <th v-for="(index, column) in columns">{{ column }}</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <th></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang='scss'>
</style>
