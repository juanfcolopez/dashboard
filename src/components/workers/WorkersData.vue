<template>
  <div class="container">
    <div v-if="this.items.length === 0">
      Cargando...
    </div>
    <div v-else>
      <div v-if="worker === ''">
        <b-table striped hover
          :items="items"
          :fields="fields"
          :sort-by="'Nombre'"
          :sort-desc="false"
        >
          <template #cell(Perfil)="row">
            <b-button size="sm" @click="workerProfile(row.item.Nombre)" class="mr-2">
              Visitar
            </b-button>
          </template>
        </b-table>
      </div>
      <div size="sm" v-else-if="worker !== ''" class="mr-2">
        <b-button @click="backToTable()">Volver</b-button>
        <h1>Información de {{worker}}</h1>
         <label for="example-datepicker">Fecha de Inicio</label>
          <b-form-datepicker id="start-worker-table" v-model="start" size="sm" class="sm"></b-form-datepicker>
          <label for="example-datepicker">Fecha de Término</label>
          <b-form-datepicker id="end-worker-table" v-model="end" size="sm" class="sm"></b-form-datepicker>
          <b-button @click="getTablesInformation(worker, start, end)"> Buscar </b-button>
        <TableFrequency
          :items="workerItems"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TableFrequency from './TableFrequency.vue'
export default {
  name: 'WorkersData',
  components: {
    TableFrequency
  },
  props: {
    items: []
  },
  data () {
    return {
      loading: true,
      worker: '',
      start: '2019-01-05',
      end: '2019-01-15',
      fields: [
        {
          key: 'Nombre',
          sortable: true
        },
        {
          key: 'Cargo',
          sortable: true
        },
        {
          key: 'Perfil'
        }
      ],
      workerItems: []
    }
  },
  methods: {
    async workerProfile (name) {
      this.worker = name
      await this.getTablesInformation(name, this.start, this.end)
    },
    async getTablesInformation (name, start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/worker/table/attention/${name}/${start}/${end}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.workerItems = [...json.data]
          }
        })
        .catch((error) => console.log(error))
    },
    backToTable () {
      this.worker = ''
    }
  }
}
</script>
