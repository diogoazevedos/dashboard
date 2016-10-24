<script>
import AppHeader from 'components/Header.vue'
import http from 'src/http'

export default {
  name: 'AppDashboard',

  components: {
    AppHeader
  },

  mounted () {
    http.get('http://pokeapi.co/api/v2/pokemon/1')
      .then(response => response.data)
      .then(data => {
        console.log(data)
      })
  }
}
</script>

<template>
  <div>
    <app-header title="Dashboard" icon="icon-grid"></app-header>
  </div>
</template>
