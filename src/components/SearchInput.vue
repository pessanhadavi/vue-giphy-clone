<template>
  <div>
    <v-form>
      <v-text-field
        label="Search gif..."
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
    };
  },
  methods: {
    search() {
      this.$store.dispatch("fetchGifs", this.querySearch);
    },
  },
};
</script>

<style lang="scss" scoped></style>
