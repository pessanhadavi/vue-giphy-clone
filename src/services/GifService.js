import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://api.giphy.com/v1/gifs/search?api_key=${process.env.VUE_APP_ENV_VARIABLE}&q=`,
});

export default {
  getGifs(query, limit) {
    return apiClient.get(query + "&limit=" + limit);
  },
};
