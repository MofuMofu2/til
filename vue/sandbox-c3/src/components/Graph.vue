<template>
  <div class="c3-mock">
    <button @click="update()">update data1</button>
    <button @click="dismiss()">delete data1</button>
    <div id="chart"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { generate } from 'c3'

@Component
export default class Graph extends Vue {
  mounted() {
    this.chart()
  }

  chart() {
    return generate({
      bindto: '#chart',
      data: {
        xFormat: '%Y%m%d',
        json: [
          {name: '20210401', data1: 30, data2: 50},
          {name: '20210402', data1: 130, data2: 501},
          {name: '20210403', data1: 320, data2: 502},
          {name: '20210404', data1: 430, data2: 530},
          {name: '20210405', data1: 350, data2: 50},
          {name: '20210406', data1: 307, data2: 450}
        ],
        keys: {
          x: 'name',
          value: ['data1','data2']
        }
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y/%m/%d',
            culling: {
              max: 5
            },
          },
          localtime: false,
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
