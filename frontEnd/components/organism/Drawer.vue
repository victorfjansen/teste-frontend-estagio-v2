<template>
  <div>
    <div @click="showDrawer" class="menu">
      <span class="hamburguer">.</span>
      <span class="hamburguer">.</span>
      <span class="hamburguer">.</span>
    </div>

    <a-drawer
      title="Aiko Actions"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <div @click="visible = !visible">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
    </a-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      placement: 'left',
    }
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
    onChange(e) {
      this.placement = e.target.value
    },
  },
}
</script>

<style scoped lang="scss">
.menu {
  cursor: pointer;

  .hamburguer {
    height: 30px;
    width: 5px;
    background-color: #5249d9;
    margin-top: 5px;
    color: #5249d9;
  }
}
</style>
