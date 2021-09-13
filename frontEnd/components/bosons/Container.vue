<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1700px;
  margin: 0 auto;
}

@media (max-width: 1500px) {
  .container {
    margin: 0;
  }
}

@media (max-width: 1300px) {
  .container {
    max-width: 900px;
  }
}

@media (max-width: 1090px) {
  .container {
    max-width: 700px;
    margin: 0 auto;
  }
}

@media (max-width: 990px) {
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 700px) {
  .container {
    max-width: 500px;
  }
}
</style>
