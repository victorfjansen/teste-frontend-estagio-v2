<template>
  <h1 class="title">
    {{ text }}
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: { type: String, required: true },
  },
})
</script>

<style scoped lang="scss">
.title {
  font-family: Inter;
  font-weight: 600;
  color: #1188ee;
  font-size: 1.25em;
  line-height: 0;
  text-decoration: none;
  list-style: none;
}
</style>
