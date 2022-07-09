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
      ],
      items: []
    }
  },
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/payments/amount`)
      .then((response) => response.json())
      .then((json) => {
        this.items = [...json.data]
      })
      .catch((error) => console.log(error))
  }
}
</script>
