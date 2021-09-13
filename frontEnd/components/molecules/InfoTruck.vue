<template>
  <div class="blank-container">
    <div class="imageContainer">
      <img :src="require(`@/assets/img/${src}`)" :alt="src" />
    </div>
    <div class="info">
      <div class="info1">
        <Title :text="equipment.name" class="title" />
        <div class="subtitle-top">
          <p class="bold">Equipment ID:</p>
          <Subtitle :text="EquipmentId" />
        </div>
        <div class="subtitle-info">
          <p class="bold">Model ID:</p>
          <Subtitle :text="ModelId" />
        </div>
      </div>
      <div class="info2">
        <Title :text="`Estado atual:  ${lastState.name}`" class="title" />
        <Subtitle :text="lastDate" class="subtitle-top" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { state } from '@/models'
import { data } from '~/store'

export default Vue.extend({
  data() {
    return {
      id: '',
      equipment: {} as any,
      possibleStates: [],
      lastState: {} as state,
      date: '',
      src: '',
    }
  },
  methods: {
    getImage() {
      if (
        this.equipment?.equipmentModelId ===
        'a3540227-2f0e-4362-9517-92f41dabbfdf'
      ) {
        this.src = 'caminhao.png'
      } else if (
        this.equipment?.equipmentModelId ===
        'a4b0c114-acd8-4151-9449-7d12ab9bf40f'
      ) {
        this.src = 'carregador.png'
      } else if (
        this.equipment?.equipmentModelId ===
        '9c3d009e-0d42-4a6e-9036-193e9bca3199'
      ) {
        this.src = 'escavadeira.png'
      }
    },
    getId() {
      this.id = this.$route.params.id
    },
    getEquipment() {
      this.equipment = data.$equipment.find((item) => {
        return item.id === this.id
      })
      this.getImage()
    },
    getLastState() {
      const state1 = data.$equipmentStateHistory.find((item) => {
        return item.equipmentId === this.id
      })

      const lastState =
        state1?.states[state1.states.length - 1].equipmentStateId
      const lastDate = state1?.states[state1.states.length - 1].date

      this.date = lastDate!

      this.possibleStates = data.$equipmentState as state[] as never[]

      const nameOfLastState = this.possibleStates.find((item: state) => {
        return item.id === lastState
      })

      this.lastState = nameOfLastState!
    },
  },
  computed: {
    EquipmentId(): string | undefined {
      return `${this.equipment?.id}`
    },
    ModelId(): string | undefined {
      return `${this.equipment?.equipmentModelId}`
    },
    lastDate(): string {
      const horario = new Date(this.date).toLocaleString('pt-BR')
      return `Horário declarado: ${horario}`
    },
  },
  created() {
    this.getId()
    this.getEquipment()
    this.getLastState()
  },
})
</script>

<style scoped lang="scss">
.blank-container {
  background: #fff;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin-top: 90px;
  position: relative;
  width: 1102px;
  .subtitle-top {
    margin-top: 30px;
    p.bold {
      font-weight: bold;
    }
  }
  .subtitle-info {
    margin-top: 20px;
    p.bold {
      font-weight: bold;
    }
  }

  .info {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 10px;
    .info1 {
      display: flex;
      flex-direction: column;
    }
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
  top: -50px;
  left: 0;
  img {
    width: 3.31em;
    height: 3.31em;
    align-self: center;
  }
}

@media (max-width: 1300px) {
  .blank-container {
    width: 900px;
    padding: 50px;
  }
}

@media (max-width: 1090px) {
  .blank-container {
    width: 100%;
    margin-top: 140px;
  }
  .info {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
