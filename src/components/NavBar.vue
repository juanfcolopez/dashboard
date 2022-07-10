<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand>Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/payments" class="nav-link">Pagos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Productos</router-link>
        </li>
         <li class="nav-item">
          <router-link to="/workers" class="nav-link">Trabajadores</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/sells" class="nav-link">Ventas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tables" class="nav-link">Mesas</router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
<router-view/>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
