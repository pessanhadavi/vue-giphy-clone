<template>
  <v-btn
    color="purple darken-4"
    dark
    x-large
    width="300px"
    v-on="$listeners"
    v-bind="$attrs"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>
