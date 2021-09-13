<template>
  <transition name="fade" appear>
    <div class="grid">
      <Search />
      <TruckList class="list" />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped>
.grid {
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
}
</style>
