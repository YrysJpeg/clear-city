import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'
// import {awsHost} from '../utils/setting'
// import {host} from '../utils/setting'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "ru",
    authState: false,
    authStep: "login",
    authRegPhone: "",
  },
  mutations: {
    SET_AUTH_STATE(state, boolean) {
      state.authState = boolean;
    },
    SET_AUTH_STEP(state, step) {
      state.authStep = step;
    },
    SET_REG_PHONE(state, phone) {
      state.authRegPhone = phone;
    },
    SET_LANG(state, lang) {
      state.lang = lang;
    },
  },
  actions: {
    authForm({ commit }, value) {
      commit("SET_AUTH_STATE", value);
    },
    authStepAdd({ commit }, step) {
      commit("SET_AUTH_STEP", step);
    },
    getSms({ commit }, phone) {
      commit("SET_REG_PHONE", phone);
    },
    addLang({ commit }, lang) {
      commit("SET_LANG", lang);
    },
  },
  getters: {
    getAuthState: (state) => state.authState,
    getAuthStep: (state) => state.authStep,
  },
});
