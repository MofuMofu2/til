<template>
  <div class="c3-mock">
    <h1>This is an c3 graph mock.</h1>
    <Graph/>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from '@/components/Graph.vue'

export default {
  name: 'About',
  components: {
    Graph
  }
}
</script>
