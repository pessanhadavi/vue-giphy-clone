<template>
  <v-app>
    <Navbar />
    <v-main>
      <GifList />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import GifList from "@/views/GifList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    GifList,
  },
  data: () => ({
    //
  }),
};
</script>
