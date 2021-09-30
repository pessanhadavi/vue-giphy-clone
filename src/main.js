import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import vuetify from "./plugins/vuetify"
import BaseButton from "@/components/BaseButton.vue"

Vue.component("BaseButton", BaseButton)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
