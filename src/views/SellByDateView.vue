<template>
  <div class="container">
    <h1>Ventas</h1>
    <div v-if="this.loading">
      Cargando...
    </div>
    <div v-else>
      <div>
        <h1>Ventas diarias</h1>
        <SellByDaysRangeChart />
      </div>
      <div>
        <h1>Ventas Anuales por mes</h1>
        <SellByYearChart />
      </div>
    </div>
  </div>
</template>

<script>
import SellByDaysRangeChart from '../components/sells/SellByRangeDaysGraph.vue'
import SellByYearChart from '../components/sells/SellByYearGraph.vue'

export default {
  name: 'SellByDaysRange',
  components: {
    SellByDaysRangeChart,
    SellByYearChart
  },
  data () {
    return {
      loading: false,
      quantity: [],
      labels: [],
      selected: null
    }
  }
}
</script>
