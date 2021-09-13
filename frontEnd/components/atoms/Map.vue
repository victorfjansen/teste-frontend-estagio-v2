<template>
  <div class="blank-content">
    <div class="info-windows">
      <a-tooltip placement="bottom" title="Ultima posição">
        <google-map :center="{ lat, lng }">
          <google-map-marker :position="{ lat: -19.126536, lng: -45.947756 }" />
        </google-map>
      </a-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { data } from '~/store'

export default Vue.extend({
  data() {
    return {
      equipmentPositionHistory: {} as any,
      id: '',
      infoWIndowContex: '',
    }
  },
  methods: {
    getId() {
      this.id = this.$route.params.id
    },
    fetchData() {
      const dados = data.$equipmentPositionHistory
      const itemData = dados.find((item) => {
        return item.equipmentId === this.id
      })

      this.equipmentPositionHistory =
        itemData?.positions[itemData?.positions.length - 1]
    },
    lng() {
      this.lng = this.equipmentPositionHistory.lon
    },
    lat() {
      this.lat = this.equipmentPositionHistory.lat
    },
  },

  created() {
    this.getId()
    this.fetchData()
    this.lng()
    this.lat()
  },
})
</script>

<style scoped>
.info-windows {
  max-width: 100%;
  height: 100%;
  min-height: 100px;
  border-radius: 50px;
  min-width: 400px;
}

.blank-content {
  padding: 30px;
  border-radius: 20px;
  box-shadow: 3px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  background: #fff;
  margin-top: 30px;
  min-height: 400px;
}

@media (max-width: 500px) {
  .info-windows,
  .vue-google-map {
    width: 300px;
  }
  .blank-content {
    width: 365px;
  }
}
</style>
