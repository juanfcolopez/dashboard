<template>
  <div class="home">
    <AmountChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import AmountChart from '@/components/payments/CountPaymentsMethod.vue'
export default {
  name: 'PaymentsView',
  components: {
    AmountChart
  }
}
</script>
<style scoped>
  .container {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
  }
</style>
