<template>
  <div v-if="loading">
    Cargando...
  </div>
  <div v-else>
    <div>
      <b-form-select @change="getYearData($event)" v-model="selected" :options="options"></b-form-select>
    </div>
    <div v-if="chartData.datasets[0].data.length !==0">
      <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
      />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    }
  },
  data () {
    return {
      options: [{ value: null, text: 'Seleccione un año' }],
      selected: null,
      loading: true,
      chartData: {
        labels: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre'
        ],
        datasets: [
          {
            label: 'Vendido ($)',
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
    async getYearData (year) {
      await fetch(`${process.env.VUE_APP_API_URL}/amount/years/${year}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.chartData.datasets[0].data = [...json.data]
          }
        })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/amount/years`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length !== 0) {
          this.options = [...this.options, ...json.data]
          this.loading = false
        }
      })
      .catch((error) => console.log(error))
  }
}
</script>
