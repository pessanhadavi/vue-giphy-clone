<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <SearchInput />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="pl-10">
          <h2 v-if="gifSearch.querySearch">
            Results for: "{{ gifSearch.querySearch }}"
          </h2>
          <h2 v-else>Find that gif you are looking for!</h2>
        </div>
        <div class="d-flex flex-wrap justify-center">
          <Gif v-for="gif in gifs" :key="gif.id" :gif="gif" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import Gif from "@/components/Gif.vue";
import { mapState } from "vuex";

export default {
  components: {
    SearchInput,
    Gif,
  },
  computed: mapState(["gifs", "gifSearch"]),
};
</script>

<style lang="scss" scoped></style>
