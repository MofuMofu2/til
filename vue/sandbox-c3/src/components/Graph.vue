<template>
  <div class="c3-mock">
    <button @click="update()">update data1</button>
    <button @click="dismiss()">delete data1</button>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import c3 from 'c3'

@Component
export default class Graph extends Vue {
  mounted() {
    this.chart()
  }

  chart() {
    return c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        xFormat: '%Y%m%d',
        columns: [
          // ['x', '2021-04-01', '2021-04-02','2021-04-03','2021-04-04','2021-04-05','2021-04-06'],
          ['x', '20210401','20210402','20210403','20210404','20210405','20210406'],
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y/%m/%d',
            count: 5
          },
          localtime: false
        }
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

  dismiss() {
    this.chart().unload({
      ids: ['data1']
    })
  }
}
</script>
