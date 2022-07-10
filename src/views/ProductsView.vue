<template>
  <div class="container">
    <h1>Productos </h1>
    <div v-if="this.loading">
      Cargando...
    </div>
    <div v-else>
       <div>
        <b-form-select @change="getProducts($event, start, end)" v-model="selected" :options="options"></b-form-select>
      </div>
      <div v-if="selected">
        <label for="example-datepicker">Fecha de Inicio</label>
        <b-form-datepicker id="products-start" v-model="start" size="sm" class="sm"></b-form-datepicker>
        <label for="example-datepicker">Fecha de Término</label>
        <b-form-datepicker id="products-end" v-model="end" size="sm" class="sm"></b-form-datepicker>
        <b-button @click="getProducts(selected,start, end)"> Buscar </b-button>
        <h1> Productos Categoría {{selected}} </h1>
        <TableProducts :items="items"/>
        <div v-if="this.quantity.length !== 0">
          <QuantityProducts :labels="labels" :quantity="quantity"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TableProducts from '../components/products/TableProducts.vue'
import QuantityProducts from '../components/products/QuantityProducts.vue'

export default {
  name: 'TopSellerChart',
  components: {
    TableProducts,
    QuantityProducts
  },
  data () {
    return {
      loading: true,
      quantity: [],
      labels: [],
      selected: null,
      options: [{ value: null, text: 'Seleccione una categoría' }],
      items: [],
      start: '2019-01-05',
      end: '2019-01-15'
    }
  },
  methods: {
    async getProducts (event, start, end) {
      await fetch(`${process.env.VUE_APP_API_URL}/products/sells/${event}/${start}/${end}`)
        .then((response) => response.json())
        .then((json) => {
          if (json.length !== 0) {
            this.quantity = [...json.data[1]]
            this.labels = [...json.data[0]]
            this.items = [...json.data[2]]
          }
        })
        .catch((error) => console.log(error))
    }
  },
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/products/categories`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length !== 0) {
          this.options = [...this.options, ...json.data]
          this.loading = false
        }
      })
      .catch((error) => console.log(error))
  }
}
</script>
