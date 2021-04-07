<template>
  <div class="c3-mock">
    <button @click="update()">update data1</button>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import c3 from 'c3'

@Component
export default class Graph extends Vue {
  mounted() {
    this.chart();
  }

  chart() {
    return c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      }
    })
  }

  update() {
    this.chart().load({
      columns: [
        ['data1', 300, 100, 250, 150, 300, 150, 500]
      ]
    })
  }
}
</script>
