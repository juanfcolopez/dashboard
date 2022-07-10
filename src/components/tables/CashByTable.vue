<template>
  <div class="container">
    <div v-if="loading">
      Cargando...
    </div>
    <div v-else>
    <div>
      <h1>Recaudado por mesas</h1>
      <label for="example-datepicker">Fecha de Inicio</label>
      <b-form-datepicker id="start-cash-by-table" v-model="start" size="sm" class="sm"></b-form-datepicker>
      <label for="example-datepicker">Fecha de Término</label>
      <b-form-datepicker id="end-cash-by-table" v-model="end" size="sm" class="sm"></b-form-datepicker>
      <b-button @click="getTopTables(start, end)"> Buscar </b-button>
    </div>
      <div>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
        />
      </div>
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
  name: 'TopTables',
  components: {
    Bar
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    }
  },
  data () {
    return {
      loading: true,
      start: '2019-01-05',
      end: '2019-01-15',
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Recaudado',
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
    async getTopTables (start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/tables/cash/${start}/${end}/`)
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
    await this.getTopTables(this.start, this.end)
  }
}
</script>
