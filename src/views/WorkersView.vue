<template>
  <div class="container">
    <h1>Trabajadores </h1>
    <div v-if="this.loading">
      Cargando...
    </div>
    <div v-else>
      <div v-if="items.length !== 0">
        <WorkersData :items="items"/>
      </div>
    </div>
  </div>
</template>

<script>

import WorkersData from '../components/workers/WorkersData.vue'

export default {
  name: 'TopSellerChart',
  components: {
    WorkersData
  },
  data () {
    return {
      loading: true,
      items: []
    }
  },
  async mounted () {
    await fetch(`${process.env.VUE_APP_API_URL}/workers`)
      .then((response) => response.json())
      .then((json) => {
        if (json.length !== 0) {
          this.items = [...json.data]
          this.loading = false
        }
      })
      .catch((error) => console.log(error))
  }
}
</script>
