import ru from "./assets/i18n/ru.json";
import kk from "./assets/i18n/kk.json";
import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: localStorage.getItem("lang") || "ru",
  messages: {
    ru: ru,
    kk: kk,
  },
});
