<template>
  <div class="home">
    <h1>Métodos de pago</h1>
     <label for="datepicker-start-date-payments">Fecha de Inicio</label>
      <b-form-datepicker id="payments-start" v-model="start" size="sm" class="sm"></b-form-datepicker>
      <label for="datepicker-end-date-payments">Fecha de Término</label>
      <b-form-datepicker id="payments-end" v-model="end" size="sm" class="sm"></b-form-datepicker>
      <b-button @click="getPaymentsData(start, end)"> Buscar </b-button>
    <div>
     <AmountChart
      :items="items"
     />
    </div>
    <div>
      <CountChart
        :quantity="quantity"
        :labels="labels"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountChart from '@/components/payments/CountPaymentsMethod.vue'
import AmountChart from '@/components/payments/amountByPaymentMethod.vue'
export default {
  name: 'PaymentsView',
  components: {
    CountChart,
    AmountChart
  },
  data () {
    return {
      loading: true,
      quantity: [],
      labels: [],
      items: [],
      start: '2019-01-05',
      end: '2019-01-15'
    }
  },
  methods: {
    async getPaymentsData (start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/payments/count/${start}/${end}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.quantity = [...json.data[1]]
            this.labels = [...json.data[0]]
            this.items = [...json.data[2]]
          }
        })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    await this.getPaymentsData(this.start, this.end)
  }
}
</script>
