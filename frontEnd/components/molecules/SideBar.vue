<template>
  <aside class="sideBar">
    <Home />
    <Help class="help" />
  </aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped lang="scss">
.sideBar {
  height: 95vh;
  width: 7.2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #199ad2 0%, #2672cb 38.58%, #3b32c0 100%);
  border-radius: 40px;
}

@media (max-width: 990px) {
  .sideBar {
    height: 30px;
    width: 30px;
    border-radius: 10px;
    background: #443cbf;
    display: none;
    .help {
      display: none;
    }
  }
}
</style>
