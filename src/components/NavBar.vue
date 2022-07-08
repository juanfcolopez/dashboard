<template>
<div>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="#">Dashboard</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Home</b-nav-item>
        <b-nav-item href="/about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
