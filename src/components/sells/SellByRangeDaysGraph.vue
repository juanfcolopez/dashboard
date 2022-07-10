<template>
  <div class="container">
    <div>
      <label for="datepicker-start-date-sells">Fecha de Inicio</label>
      <b-form-datepicker id="datepicker-start-sells" v-model="start" size="sm" class="sm"></b-form-datepicker>
      <label for="datepicker-end-date-sells">Fecha de Término</label>
      <b-form-datepicker id="datepicker-end-sells" v-model="end" size="sm" class="sm"></b-form-datepicker>
      <b-button @click="getSellsByRange(start, end)"> Buscar </b-button>
    </div>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
    />
  </div>
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'SellByDaysRangeChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    graphLabels: [],
    graphData: []
  },
  data () {
    return {
      start: '2019-01-05',
      end: '2019-01-15',
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Ventas diarias',
            backgroundColor: '#00A300',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    async getSellsByRange (start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/amount/${start}/${end}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.chartData.labels = [...json.data[0]]
            this.chartData.datasets[0].data = [...json.data[1]]
            this.loading = false
          }
        })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    await this.getSellsByRange(this.start, this.end)
  }
}
</script>
