<template>
  <div class="home">
    <div v-if="this.quantity.length === 0">
      Cargando...
    </div>
    <div v-else>
      <h1>Cantidad de transacciones por medio de pago</h1>
     <Pie
          :chart-options="chartOptions"
          :chart-data="chartData"
        />
    </div>
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
