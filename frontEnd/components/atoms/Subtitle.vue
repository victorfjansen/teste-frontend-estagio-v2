<template>
  <p class="subtitle">
    {{ text }}
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Subtitle',
  props: {
    text: { type: undefined, required: true },
  },
})
</script>

<style scoped lang="scss">
.subtitle {
  font-family: Inter;
  font-weight: 400;
  color: #445566;
  font-size: 0.875em;
  line-height: 0;
}
</style>
