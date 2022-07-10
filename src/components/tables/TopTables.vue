<template>
  <div class="container">
    <div v-if="this.options.length === 0">
      Cargando...
    </div>
    <div v-else>
    <div>
      <h1>Top Mesas Más utilizadas </h1>
      <label for="example-datepicker">Fecha de Inicio</label>
      <b-form-datepicker id="example-datepicker-start" v-model="start" size="sm" class="sm"></b-form-datepicker>
      <label for="example-datepicker">Fecha de Término</label>
      <b-form-datepicker id="example-datepicker-end" v-model="end" size="sm" class="sm"></b-form-datepicker>
      <div>
        <label for="TopTables">Las Top mesas más visitadas</label>
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>
      <b-button @click="getTopTables(start, end)"> Buscar </b-button>
    </div>
      <div>
        <b-table striped hover
          sticky-header
          :items="items"
          :fields="fields"
          :sort-by="'Utilizada'"
          :sort-desc="true"
        >
        </b-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopTables',
  data () {
    return {
      loading: true,
      worker: '',
      options: [{ value: null, text: 'Seleccione de cuantas mesas será el top' }],
      selected: null,
      start: '2019-01-05',
      end: '2019-01-15',
      fields: [
        {
          key: 'Mesa',
          sortable: true
        },
        {
          key: 'Utilizada',
          sortable: true
        }
      ],
      items: []
    }
  },
  methods: {
    async getTopTables (start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/tables/${this.selected}/${start}/${end}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.items = [...json.data]
          }
        })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/tables/`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length !== 0) {
          this.options = [...this.options, ...json.data]
        }
      })
      .catch((error) => console.log(error))
  }
}
</script>
