<template>
  <div class="grid">
    <Container>
      <Nuxt />
    </Container>
    <RightSideBar class="rightBar" />
    <Drawer class="drawer" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
body {
  background: linear-gradient(to left, #fff 15%, #f1f1f1 15%);
  position: relative;
}

.grid {
  display: flex;
  padding: 30px;
  gap: 30px;
}

.sideBar {
  position: fixed;
  top: 30px;
  left: 30px;
}

.rightBar {
  position: fixed;
  top: 15px;
  right: 30px;
}

.drawer {
  display: none;
  position: absolute;
  left: 30px;
  top: 42px;
}

@media (max-width: 990px) {
  .sideBar {
    display: none;
  }
  .drawer {
    display: block;
  }
  .rightBar {
    position: absolute;
    top: 15px;
    right: 10px;
  }
}

@media (max-width: 1340px) {
  .rightBar {
    right: 10px;
  }
}
</style>
