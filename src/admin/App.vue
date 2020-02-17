<template lang="pug">
  .adminPanel
      adminHeader
      adminTabs
</template>

<script>

import adminHeader from './components/adminHeader.vue'
import adminTabs from './components/adminTabs.vue'

export default {
  name: 'app',
  components: {
    adminHeader,
    adminTabs
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="postcss" src=./main.pcss></style>