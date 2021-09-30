<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <SearchForm />
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
          <div
            v-if="startIndex + 1 > this.getGifsLength"
            class="d-flex flex-wrap justify-center"
          >
            <Gif
              v-for="gif in gifs.slice(startIndex, endIndex)"
              :key="gif.id"
              :gif="gif"
            />
          </div>
        </div>
        <v-row class="my-2">
          <v-col cols="12" class="d-flex justify-center">
            <BaseButton @click="loadMore">Load More</BaseButton>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue"
import Gif from "@/components/Gif.vue"
import BaseButton from "@/components/BaseButton.vue"
import { mapGetters, mapState } from "vuex"

export default {
  components: {
    SearchForm,
    Gif,
    BaseButton,
  },
  data() {
    return {
      startIndex: -1,
      endIndex: 0,
      offsetIncrease: 12,
    }
  },
  methods: {
    loadMore() {
      this.startIndex += this.getGifsLength
      this.endIndex = this.startIndex + this.offsetIncrease
      this.$store.dispatch("fetchMoreGifs", this.offsetIncrease)
    },
  },
  computed: {
    ...mapState(["gifs", "gifSearch"]),
    ...mapGetters(["getGifsLength"]),
  },
}
</script>

<style lang="scss" scoped></style>
