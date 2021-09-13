<template>
  <NuxtLink class="home" to="/">
    <img src="@/assets/img/home.svg" alt="Home Button" />
  </NuxtLink>
</template>

<style scoped lang="scss">
.home {
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  &:hover {
    background-color: #443cbf;
  }
}
</style>
