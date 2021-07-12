<template>
  <div class="users">
    <h1>{{ routeParam }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  computed: {
    routeParam: function() {
      return this.$route.params.id
    }
  }
})
</script>
