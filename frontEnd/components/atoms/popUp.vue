<template>
  <div class="grid">
    <div class="subgrid">
      <img :src="require('@/assets/img/Alvo.svg')" alt="Alvo svg" />
      <Subtitle text="Objetivos" class="subtitle" />
      <button @click.prevent="showModal">
        <img :src="require('@/assets/img/SetaDireita.svg')" alt="SetaDireita" />
      </button>
    </div>

    <a-modal v-model="visible" title="Objetivos" @ok="handleOk">
      <p>
        Acompanhe todos os KPIs e indicadores cruciais para a inteligência
        operacional.
      </p>
      <p>
        Veja os dados referentes aos veículos de transporte contatando seus
        estados atuais.
      </p>
    </a-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk() {
      this.visible = false
    },
  },
})
</script>

<style scoped lang="scss">
.grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  .subgrid {
    display: flex;
    gap: 10px;
    .subtitle {
      margin: auto 0;
    }

    img {
      margin: auto 0;
    }
  }

  .grid::after {
    content: '';
    width: 100%;
    height: 1px;
    background: #ff3726;
    margin-top: -25px;
    border-bottom: 2px 6px 7px rgba(0, 0, 0, 0.8);
  }
  button {
    margin: auto 10px;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    background: #fff;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
