<template>
  <div class="home">
    <div v-if="this.quantity.length === 0">
      Cargando...
    </div>
    <div v-else>
     <Pie
          :chart-options="chartOptions"
          :chart-data="chartData"
        />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

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
  name: 'QuantityProducts',
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
    },
    labels: [],
    quantity: []
  },
  data () {
    return {
      chartData: {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: this.quantity
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  updated () {
    this.chartData.labels = this.labels
    this.chartData.datasets[0].data = this.quantity
  }
}
</script>
