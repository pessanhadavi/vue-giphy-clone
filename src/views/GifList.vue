<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="5">
        <SearchInput />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-wrap justify-center">
          <Gif />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import Gif from "@/components/Gif.vue";

export default {
  components: {
    SearchInput,
    Gif,
  },
};
</script>

<style lang="scss" scoped></style>
