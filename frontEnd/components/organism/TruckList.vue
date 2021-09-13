<template>
  <div>
    <div class="main" v-if="$trucks.length">
      <TruckCard v-for="truck in $trucks" :key="truck.id" :data="truck" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { truckStore } from '~/store'

export default Vue.extend({
  computed: {
    $trucks() {
      return truckStore.$dados
    },
  },
})
</script>

<style scoped>
.main {
  width: 1000px;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-auto-rows: 280px;
  gap: 40px;
  margin: 0 auto 0 12px;
}

@media (max-width: 1340px) {
  .main {
    grid-template-columns: 300px 300px;
    width: 700px;
    margin: 0 auto 0 65px;
  }
}

@media (max-width: 990px) {
  .main {
    grid-template-columns: 300px;
    width: 300px;
    margin: 0 auto 0 12px;
  }
}
</style>
