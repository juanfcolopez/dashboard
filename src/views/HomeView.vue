<template>
  <div class="home">
    <LandingMessage msg="Landing"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingMessage from '@/components/LandingMessage.vue'

export default {
  name: 'HomeView',
  components: {
    LandingMessage
  }
}
</script>
