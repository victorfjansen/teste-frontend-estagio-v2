<template>
  <div class="blank-content">
    <Title
      text="Histórico de Posições"
      :style="{ marginTop: '10px', marginBottom: '20px' }"
    />
    <a-table :columns="columns" :data-source="positions">
      <a slot="name" slot-scope="text">{{ text }}</a>
      <span slot="customTitle">Data</span>
    </a-table>
  </div>
</template>

<script lang="ts">
const columns = [
  {
    dataIndex: 'date',
    key: 'date',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'lat',
    dataIndex: 'lat',
    key: 'lat',
  },
  {
    title: 'lon',
    dataIndex: 'lon',
    key: 'lon',
  },
]

import Vue from 'vue'
import { data } from '~/store'

export default Vue.extend({
  data() {
    return {
      columns,
      positions: [] as any,
      id: '',
      visible: false,
    }
  },
  methods: {
    getId() {
      this.id = this.$route.params.id
    },
    getPositions() {
      const array = [...data.$equipmentPositionHistory]
      const positions = array.find((item) => {
        return item.equipmentId === this.id
      })

      let keyCount = 0

      this.positions = positions?.positions.reverse()

      this.positions.forEach((item: any) => {
        item.key = keyCount++
      })
      this.visible = true
    },
  },
  created() {
    this.getId()
    this.getPositions()
  },
})
</script>

<style scoped>
.blank-content {
  padding: 30px;
  border-radius: 20px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: #fff;
  margin-top: 30px;
}

@media (max-width: 500px) {
  .blank-content {
    width: 365px;
  }
}
</style>
