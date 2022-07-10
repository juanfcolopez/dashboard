<template>
    <div class="container">
      <div v-if="this.items.length === 0">
        Cargando...
      </div>
      <div v-else>
        <h1>Total recaudado por Mesa </h1>
        <b-table striped
          sticky-header
          :items="items"
          :fields="workerFields"
          :sort-by="'Mesa'"
          :sort-desc="false"
        />
        </div>
    </div>
</template>
<script>
export default {
  name: 'TableFrequency',
  props: {
    items: []
  },
  data () {
    return {
      workerFields: [
        {
          key: 'Mesa',
          sortable: true
        },
        {
          key: 'Dinero Total',
          sortable: true
        },
        {
          key: 'Atenciones',
          sortable: true
        }
      ]
    }
  }
}
</script>
