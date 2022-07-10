<template>
  <div>
      <h1>Mesas</h1>
      <TopTables />
      <CashByTable />
  </div>
</template>

<script>
// @ is an alias to /src
import TopTables from '../components/tables/TopTables.vue'
import CashByTable from '../components/tables/CashByTable.vue'
export default {
  name: 'HomeView',
  components: {
    TopTables,
    CashByTable
  }
}
</script>
