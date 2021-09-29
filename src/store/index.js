import Vue from "vue";
import Vuex from "vuex";
import GifService from "@/services/GifService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [],
    gifSearch: {
      querySearch: "",
      limit: 12,
      offset: 0,
    },
  },
  mutations: {
    SET_GIFS(state, gifs) {
      state.gifs = gifs;
    },
    SET_GIF_SEARCH(state, querySearch) {
      state.gifSearch.querySearch = querySearch;
    },
  },
  actions: {
    fetchGifs({ state, commit, dispatch }, { querySearch }) {
      dispatch("updateGifSearch", querySearch);
      return GifService.getGifs(
        querySearch,
        state.gifSearch.limit,
        state.gifSearch.offset
      ).then((response) => {
        commit("SET_GIFS", response.data.data);
      });
    },
    updateGifSearch({ commit }, querySearch) {
      commit("SET_GIF_SEARCH", querySearch);
    },
  },
});
