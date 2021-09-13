<template>
  <form class="search" @submit.prevent="buscarProdutos">
    <input
      type="text"
      name="busca"
      id="busca"
      v-model="busca"
      class="input"
      :placeholder="text"
    />
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
import { truckStore } from '~/store'

export default Vue.extend({
  props: {
    text: { type: String, default: 'Pesquise pelo nome do veículo aqui!' },
  },
  data() {
    return {
      busca: '',
    }
  },
  methods: {
    buscarProdutos() {
      const query = this.$route.query as any
      truckStore.querySearch(query)
    },
  },
  watch: {
    busca() {
      this.$router.push({ query: { q: this.busca } })
    },
  },
})
</script>

<style scoped lang="scss">
.search {
  .input {
    width: 402px;
    height: 55px;
    padding: 19px 70px 19px 40px;
    border: none;
    border-radius: 50px;
    background: #fff;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    color: #a3a3a3;
    margin-bottom: 120px;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.08);
  }
}

@media (max-width: 990px) {
  .search {
    .input {
      width: 300px;
      font-size: 10px;
      height: 30px;
      margin-top: 90px;
      margin-bottom: 90px;
    }
  }
}
</style>
