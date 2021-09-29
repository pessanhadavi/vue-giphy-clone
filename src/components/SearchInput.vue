<template>
  <div class="my-8">
    <v-form>
      <v-text-field
        label="Search gif..."
        color="purple darken-4"
        v-model="querySearch"
        @input="search"
      />
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      querySearch: "",
      limit: 32,
    };
  },
  methods: {
    search() {
      this.$store.dispatch("updateGifSearch", this.querySearch);
      this.$store.dispatch("fetchGifs", {
        querySearch: this.querySearch,
        limit: this.limit,
      });
    },
  },
  mounted() {
    this.search();
  },
};
</script>
