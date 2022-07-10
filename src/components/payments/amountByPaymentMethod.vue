<template>
  <div class="container">
    <div v-if="this.loading">
      Cargando...
    </div>
    <div v-else>
      <h1>Dinero recibido por medio de pago</h1>
      <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AmountChart',
  props: {
    items: []
  },
  data () {
    return {
      loading: false,
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'Método',
          sortable: true
        },
        {
          key: 'Cantidad ($)',
          sortable: true
        }
      ]
    }
  }
}
</script>
