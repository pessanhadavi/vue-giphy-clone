<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="5">
        <SearchInput />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";

export default {
  components: {
    SearchInput,
  },
};
</script>

<style lang="scss" scoped></style>
