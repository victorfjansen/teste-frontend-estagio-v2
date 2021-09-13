<template>
  <div>
    <IndexTemplate v-if="data" />
    <Spin size="large" v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { data, truckStore } from '~/store'
import { Spin } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Spin,
  },
  data() {
    return {
      error: false,
    }
  },
  methods: {
    erro() {
      if (this.error) {
        this.$notification.open({
          message: 'Ops, algo deu errado',
          description: 'Verifique sua conexão e tente novamente',
        })
      }
    },
  },
  computed: {
    data() {
      return data.$equipment
    },
  },
  mounted() {
    this.erro()
  },
  async created() {
    try {
      await truckStore.fecthData()
    } catch {
      this.error = true
    }
  },
})
</script>

<style scoped></style>
