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
    LOAD_MORE(state, moreGifs) {
      state.gifs.push(...moreGifs);
    },
    SET_GIF_SEARCH_QUERY(state, querySearch) {
      state.gifSearch.querySearch = querySearch;
    },
    SET_GIF_SEARCH_OFFSET(state, offset) {
      state.gifSearch.offset += offset;
    },
  },
  actions: {
    fetchGifs({ state, commit, dispatch }, querySearch) {
      dispatch("updateGifSearch", {
        element: querySearch,
        kind: "query",
      });
      return GifService.getGifs({
        query: querySearch,
        limit: state.gifSearch.limit,
        offset: state.gifSearch.offset,
      }).then((response) => {
        commit("SET_GIFS", response.data.data);
      });
    },

    fetchMoreGifs({ state, commit, dispatch }, offset) {
      dispatch("updateGifSearch", {
        element: offset,
        kind: "offset",
      });
      return GifService.getGifs({
        query: state.gifSearch.querySearch,
        limit: state.gifSearch.limit,
        offset: state.gifSearch.offset,
      }).then((response) => {
        commit("LOAD_MORE", response.data.data);
      });
    },

    updateGifSearch({ commit }, { element, kind }) {
      switch (kind) {
        case "query":
          commit("SET_GIF_SEARCH_QUERY", element);
          break;
        case "offset":
          commit("SET_GIF_SEARCH_OFFSET", element);
          break;
      }
    },
  },
  getters: {
    getGifsLength: (state) => {
      return state.gifs.length;
    },
  },
});
