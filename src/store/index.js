import Vue from "vue";
import Vuex from "vuex";
import GifService from "@/services/GifService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
  },
  mutations: {
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },
  },
  actions: {
    fetchGifs({ commit }, { querySearch, limit }) {
      return GifService.getGifs(querySearch, limit).then((response) => {
        commit("SET_GIFS", response.data.data);
      });
    },
  },
});
