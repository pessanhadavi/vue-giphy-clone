import Vue from "vue";
import Vuex from "vuex";
import GifService from "@/services/GifService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    gifSearch: "",
  },
  mutations: {
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },
    SET_GIF_SEARCH(state, gifSearch) {
      state.gifSearch = gifSearch;
    },
  },
  actions: {
    fetchGifs({ commit }, { querySearch, limit }) {
      return GifService.getGifs(querySearch, limit).then((response) => {
        commit("SET_GIFS", response.data.data);
      });
    },
    updateGifSearch({ commit }, gifSearch) {
      commit("SET_GIF_SEARCH", gifSearch);
    },
  },
});
