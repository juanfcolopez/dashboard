<template>
  <div v-if="this.loading">
    Cargando...
  </div>
  <div v-else>
    <h1>Métodos de pago</h1>
    <Pie
      :chart-options="chartOptions"
      :chart-data="chartData"
    />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'AmountChart',
  components: {
    Pie
  },
  props: {
    chartId: {
      type: String,
      default: 'pie-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    }
  },
  data () {
    return {
      loading: true,
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
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
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/payments`)
      .then((response) => response.json())
      .then((json) => {
        this.chartData.labels = [...json.data[0]]
        this.chartData.datasets[0].data = [...json.data[1]]
        this.loading = false
      })
      .catch((error) => console.log(error))
  }
}
</script>
