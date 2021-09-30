<template>
  <v-app-bar id="nav-bar" app color="purple darken-4" dark>
    <div class="d-flex align-center">
      <a href="/"> <h1>Giphy-like</h1></a>
    </div>

    <v-spacer></v-spacer>

    <v-btn href="https://giphy.com/" target="_blank" text>
      <span class="mr-2">Visit real giphy</span>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
#nav-bar {
  z-index: 1000;
}

h1 {
  color: white;
}

a {
  text-decoration: none;
}
</style>
