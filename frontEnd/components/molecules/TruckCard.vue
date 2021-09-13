<template>
  <div>
    <NuxtLink :to="`/transportes/${data.id}`" v-if="status">
      <div class="card">
        <div class="imageContainer">
          <img :src="require(`@/assets/img/${src}`)" :alt="src" />
        </div>
        <div class="text">
          <Title :text="name" />
          <Subtitle :text="statusName" class="subtitle" />
        </div>
        <div class="sub-grid">
          <Progress
            class="progress"
            type="dashboard"
            :status="simbol"
            :stroke-color="{
              '100%': `${statusColor}`,
            }"
            :width="50"
            :percent="100"
          />
          <div class="info">
            <Subtitle text="Nome do Veículo:" />
            <Subtitle :text="data.name" />
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import {
  equipment,
  stateHistoryItem,
  state,
  statusColor,
  statusName,
} from '@/models'
import { $axios } from '~/utils/nuxt-instance'
import { Progress } from 'ant-design-vue'

export default Vue.extend({
  components: {
    Progress,
  },
  data() {
    return {
      src: '',
      name: '',
      possibleStates: [],
      stateHistory: [] as unknown as stateHistoryItem,
      status: {} as state,
    }
  },
  props: {
    data: { type: Object, required: true } as PropOptions<equipment>,
  },
  methods: {
    dados() {
      if (
        this.data.equipmentModelId === 'a3540227-2f0e-4362-9517-92f41dabbfdf'
      ) {
        this.src = 'caminhao.png'
        this.name = 'Caminhão de Carga'
      } else if (
        this.data.equipmentModelId === 'a4b0c114-acd8-4151-9449-7d12ab9bf40f'
      ) {
        this.src = 'carregador.png'
        this.name = 'Harvester'
      } else if (
        this.data.equipmentModelId === '9c3d009e-0d42-4a6e-9036-193e9bca3199'
      ) {
        this.src = 'escavadeira.png'
        this.name = 'Garra Traçadora'
      }
    },
    async fetchState() {
      const data = await $axios.$get('/equipmentState')
      this.possibleStates = data
    },
    async fetchStateHistory() {
      const data = await $axios.$get('/equipmentStateHistory')
      const filteredState = data.find(({ equipmentId }: stateHistoryItem) => {
        return equipmentId === this.data.id
      })
      this.stateHistory = filteredState
      this.finalStatus()
    },
    finalStatus() {
      const finalStatus = this.possibleStates.find(({ id }: state) => {
        return (
          id ===
          this.stateHistory.states[this.stateHistory.states.length - 1]
            .equipmentStateId
        )
      })
      const data = finalStatus as unknown as state
      this.status = data
    },
  },
  computed: {
    statusName(): statusName {
      if (this.status.name) {
        return this.status.name
      }
    },
    statusColor(): statusColor {
      if (this.status.color) {
        return this.status.color
      }
    },
    simbol(): string {
      if (this.status.name === 'Manutenção') {
        return `exception`
      } else if (this.status.name === 'Parado') {
        return `exception`
      } else {
        return `success`
      }
    },
  },
  created() {
    this.dados()
    this.fetchState()
    this.fetchStateHistory()
  },
})
</script>

<style scoped lang="scss">
.card {
  position: relative;
  width: 270px;
  height: 240px;
  background: #fff;
  text-decoration: none;
  list-style: none;
  border-radius: 40px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  transition: all linear 0.3s;
  &:hover {
    transform: translate3d(0, -5px, 0);
    box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.imageContainer {
  width: 5.75em;
  height: 5.18em;
  display: flex;
  background: #269bff;
  border-radius: 20px;
  justify-content: center;
  box-shadow: 0px 4px 7px -1px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  list-style: none;
  position: absolute;
  top: -45px;
  left: 90px;
  img {
    width: 3.31em;
    height: 3.31em;
    align-self: center;
  }
}

.sub-grid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.progress {
  margin: 0 auto;
}

.text {
  margin: 40px auto 30px auto;
  text-align: center;
}

.subtitle {
  margin-top: 20px;
  text-decoration: none;
  text-align: center;
}
</style>
