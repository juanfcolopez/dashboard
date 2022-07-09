<template>
  <div class="home">
    <AmountChart/>
  </div>
</template>

<script>
// @ is an alias to /src
import AmountChart from '@/components/payments/AmountPayments.vue'

export default {
  name: 'HomeView',
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
