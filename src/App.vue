<template>
  <div id="app">
    <NavBar />
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from './components/Navbar.vue'

export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
