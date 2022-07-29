import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);
import ru from '../assets/i18n/ru.json'
import kk from '../assets/i18n/kk.json'


const opts = {
    lang: {
        locales: { ru, kk},
        current: ru
    }
};

export default new Vuetify(opts);
