<template>
  <div>
    <InfoTruck class="info" />
    <div class="grid">
      <Map />
      <PositionHistory />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.grid {
  display: grid;
}
</style>
