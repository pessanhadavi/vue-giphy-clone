<template>
  <div class="gif-wrapper">
    <div class="gif-content">
      <a :href="gif.images.downsized.url">
        <v-img :src="gif.images.downsized.url" height="150px" width="250px" />
      </a>
    </div>
    <Loader class="gif-background" />
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue"

export default {
  components: {
    Loader,
  },
  props: {
    gif: Object,
  },
}
</script>

<style lang="scss" scoped>
.gif-wrapper {
  position: relative;
  border: 5px solid#4A148C;
  background-color: #4a148c;
  margin: 10px 6px;
  &:hover {
    border-color: #148c6e;
  }
}

.gif-content {
  position: relative;
  z-index: 100;
}

.gif-background {
  position: absolute;
  top: 40%;
  left: 45%;
  z-index: 0;
  color: white;
}
</style>
