<template>
  <div class="container">
    <div v-if="this.items.length === 0">
      Cargando...
    </div>
    <div v-else>
      <b-table striped hover
        :items="items"
        :fields="fields"
        :sort-by="'Cantidad ($)'"
        :sort-desc="true"
      />
    </div>
  </div>
</template>
<script>

export default {
  name: 'TableProducts',
  props: {
    items: []
  },
  data () {
    return {
      loading: true,
      fields: [
        {
          key: 'Nombre',
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
