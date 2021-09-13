<template>
  <a-tooltip
    placement="top"
    title="Clique no botão Home para voltar ao menu inicial"
  >
    <div class="help">
      <img src="@/assets/img/Help.svg" alt="Help icon" />
    </div>
  </a-tooltip>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {},
})
</script>

<style scoped>
.help {
  position: absolute;
  bottom: 50px;
  right: 40;
  left: 40;
}
</style>
