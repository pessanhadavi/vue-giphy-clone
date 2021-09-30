import Vue from "vue"
import Vuex from "vuex"
import GifService from "@/services/GifService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gifs: [],
    gifSearch: {
      querySearch: "",
      limit: 12,
      offset: 0,
      increaseOffset: 12,
    },
  },
  mutations: {
    SET_GIFS(state, gifs) {
      state.gifs = gifs
    },
    LOAD_MORE(state, moreGifs) {
      state.gifs.push(...moreGifs)
    },
    SET_GIF_SEARCH_QUERY(state, querySearch) {
      state.gifSearch.querySearch = querySearch
    },
    SET_GIF_SEARCH_OFFSET(state) {
      state.gifSearch.offset += state.gifSearch.increaseOffset
    },
  },
  actions: {
    fetchGifs({ state, commit, dispatch }, querySearch) {
      dispatch("updateGifSearch", querySearch)
      return GifService.getGifs({
        query: querySearch,
        limit: state.gifSearch.limit,
        offset: state.gifSearch.offset,
      }).then((response) => {
        commit("SET_GIFS", response.data.data)
      })
    },

    fetchMoreGifs({ state, commit, dispatch }) {
      dispatch("updateGifSearch", state.gifSearch.increaseOffset)
      return GifService.getGifs({
        query: state.gifSearch.querySearch,
        limit: state.gifSearch.limit,
        offset: state.gifSearch.offset,
      }).then((response) => {
        commit("LOAD_MORE", response.data.data)
      })
    },

    updateGifSearch({ commit }, element) {
      switch (typeof element) {
        case "string":
          commit("SET_GIF_SEARCH_QUERY", element)
          break
        case "number":
          commit("SET_GIF_SEARCH_OFFSET")
          break
      }
    },
  },
  getters: {
    getGifsLength: (state) => {
      return state.gifs.length
    },
  },
})
