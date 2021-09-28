<template>
  <div>
    <v-icon class="load-icon" dark>mdi-timer-sand-empty</v-icon>
  </div>
</template>

<style lang="scss" scoped>
.load-icon {
  -webkit-animation: spin 5s linear infinite;
  animation: spin 5s linear infinite;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
