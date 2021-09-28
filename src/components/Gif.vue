<template>
  <div>
    <a :href="gif.images.downsized.url">
      <v-img :src="gif.images.downsized.url" height="100px" width="200px" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    gif: Object,
  },
};
</script>

<style lang="scss" scoped></style>
