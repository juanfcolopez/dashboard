<template>
  <div class="home">
    <h1>Métodos de pago</h1>
    <div>
     <AmountChart/>
    </div>
    <div>
      <CountChart/>
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
  }
}
</script>
