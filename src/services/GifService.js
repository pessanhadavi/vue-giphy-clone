import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://api.giphy.com/v1/gifs/`,
});

const getURL = (keyword, query, limit, offset) => {
  return `${keyword}?api_key=${process.env.VUE_APP_ENV_VARIABLE}&q=${query}&limit=${limit}&offset=${offset}`;
};

export default {
  getGifs(query, limit, offset) {
    if (query) {
      return apiClient.get(getURL("search", query, limit, offset));
    } else {
      return apiClient.get(getURL("trending", query, limit, offset));
    }
  },
};
