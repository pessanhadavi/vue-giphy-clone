<template>
  <div class="my-8">
    <v-form @submit.prevent="search">
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Search gif..."
            color="purple darken-4"
            v-model="querySearch"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <BaseButton type="submit">Search</BaseButton>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      querySearch: "",
    }
  },
  methods: {
    search() {
      this.$store.dispatch("fetchGifs", this.querySearch)
    },
  },
  mounted() {
    this.search()
  },
}
</script>
