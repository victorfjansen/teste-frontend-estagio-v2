<template>
  <div>
    <TransporteTemplate />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { data } from '~/store'

export default Vue.extend({
  async asyncData() {
    await data.doTheFetch()
  },
})
</script>

<style scoped></style>
