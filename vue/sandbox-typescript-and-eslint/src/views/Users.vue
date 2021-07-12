<template>
  <div class="users">
    <h1>params: {{ routeParam }}</h1>
    <h1>userId: {{ userId }}</h1>
    <h1>name: {{ userName }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    routeParam: function() {
      return this.$route.params.id
    },
    userId: function() {
      return this.$route.query.userId
    },
    userName: function() {
      return this.$route.query.name
    }

  }
})
</script>
