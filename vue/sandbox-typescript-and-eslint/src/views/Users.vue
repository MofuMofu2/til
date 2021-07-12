<template>
  <div class="users">
    <h1>params: {{ routeParam }}</h1>
    <h1>query: {{ queryParam }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    routeParam: function() {
      return this.$route.params.id
    },
    queryParam: function() {
      return this.$route.query.userId
    }
  }
})
</script>
