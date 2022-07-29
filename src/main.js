import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";
import notify from "./plugins/notify";

const lang = localStorage.getItem("lang") || "ru";
axios.defaults.headers["Accept-Language"] = lang;

Vue.config.productionTip = false;
Vue.config.performance = true;

new Vue({
  router,
  store,
  i18n,
  axios,
  vuetify,
  notify,
  render: (h) => h(App),
}).$mount("#app");
