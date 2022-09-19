import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import host from "../utils/setting";
import { setCookie, getCookie } from "../utils/cookie/cookies";

const token = getCookie("access_token");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "ru",
    authState: false,
    authStep: "login",
    authRegPhone: "",
    isAuth: false,
    profile: {
      access_type: "",
      avatar: "",
      email: "",
      first_name: "",
      gender: "",
      id: "",
      last_name: "",
      password: "",
      phone_number: "",
      username: "",
    },
    allApplications: [],
    applicationDetails: {
      address: "",
      app_status: "",
      app_type: "",
      created_date: "",
      first_name: "",
      id: "",
      last_name: "",
      latitude: "",
      longitude: "",
      message: "",
      patronymic: "",
      phone_number: "",
      photo_url: "",
      user_id: "",
      video_url: "",
    },
    eventDetails: {
        id:  "",
        address:  "",
        description:  "",
        date:  "",
        time:  "",
        organizer_info: "",
        document_url:  "",
        longitude:  null,
        latitude:  null,
        user_id:  "",
        created_date: ""
    },
    similarApplication: "",
    events: [],
    myAppeals: [],
    myEvents: [],
    news: '',
    newsDetails: {
      id: "",
      title: "",
      small_description: "",
      description: "",
      photo_url: "",
      author_id: "",
      created_date: ""
    }
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
    SET_PROFILE(state, data) {
      state.profile = data;
    },
    SET_ALL_APPLICATIONS(state, data) {
      state.allApplications = data;
    },
    SET_APPEAL_DETAILS(state, data) {
      state.applicationDetails = data;
    },
    SET_SIMILAR_APP(state, data) {
      state.similarApplication = data;
    },
    SET_IS_AUTH(state, bool) {
      state.isAuth = bool
    },
    SET_EVENTS(state, data) {
      state.events = data
    },
    SET_MY_APPEAL(state, data) {
      state.myAppeals = data
    },
    SET_MY_EVENT(state, data) {
      state.myEvents = data
    },
    SET_NEWS(state, data) {
      state.news = data
    },
    SET_NEWS_DETAILS(state, data) {
      state.newsDetails = data
    },
    // SET_EVENT_DETAIL(state, data) {
    //   state.eventDetails = data
    // }
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
      if (lang == "ru") setCookie("googtrans", "/ru/ru");
      else setCookie("googtrans", "/ru/kk");
      window.location.reload();
    },
    getProfile({ commit }) {
      axios
        .get(`/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          commit("SET_PROFILE", res.data);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    isAuthorize({commit}) {
      if (getCookie('access_token')) {
        commit('SET_IS_AUTH', true)
      } else {
        commit('SET_IS_AUTH', false)
      }
    },
    login({commit}, payload) {
      axios
        .post(`${host.host}/auth/login`, payload, {
          headers : {
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          setCookie("access_token", res.data.access_token, { expires: 1 });
          setCookie("refresh_token", res.data.refresh_token, { expires: 1 });
          commit('SET_IS_AUTH', true)
        })
        .catch((e) => {
          console.error(e);
        });
    },
    updateProfile(_, value) {
      axios
        .put(`${host.host}/auth/profile`, value, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    updateAvatar(_, data) {
      axios
        .put(`${host.host}/auth/avatar`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    createAppeals(_, data) {
      let mainData = data
      delete mainData['photo_url']
      return axios
        .post(`${host.host}/application/`, mainData)
        
    },
    createAppealsAuth(_, data) {
      axios
        .post(`${host.host}/application/create`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    getAppList({ commit }) {
      axios
        .get(`${host.host}/application/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          commit("SET_ALL_APPLICATIONS", res.data.applications);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    getApplicationObject({ commit }, id) {
      axios
        .get(`${host.host}/application/id?id=${id}`)
        .then(function (res) {
          commit("SET_APPEAL_DETAILS", res.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    sendFeedback(_, data) {
      axios
        .post(`${host.host}/feedback/`, data, {
          headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.error(e);
        });
    },
    similarApp({commit}, type) {
      axios
        .get(`${host.host}/application/type?type=${type}`)
        .then(function (res) {
          console.log(res.data);
          let random = res.data.sort(() => 0.5 - Math.random())
          let selected = random.slice(0, 3);
          commit("SET_SIMILAR_APP", selected);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    uploadPhoto(_, data) {
      axios
        .put(`${host.host}/application/file?id=${data.res}`, data.formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    getEventList({commit}) {
      axios
        .get(`${host.host}/event/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          console.log(res);
          commit("SET_EVENTS", res.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    getMyAppeal({commit}) {
      axios
        .get(`${host.host}/application/list`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          console.log(res);
          commit("SET_MY_APPEAL", res.data.applications);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    getMyEvent({commit}) {
      axios
      .get(`${host.host}/event/my`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        console.log(res);
        commit("SET_MY_EVENT", res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
    },
    getNewsList({commit}) {
      axios
      .get(`${host.host}/news/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (res) {
        console.log(res);
        commit("SET_NEWS", res.data);
      })
      .catch(function (e) {
        console.log(e);
      });
    },
    getNewsDetails({commit}, id) {
      axios
        .get(`${host.host}/news/id?id=${id}`)
        .then(function (res) {
          console.log(res);
          commit("SET_NEWS_DETAILS", res.data);
        })
        .catch(function (e) {
          console.log(e);
        });
    },
    // getEventDetails({commit}, id) {
    //   axios
    //   .get(`${host.host}/news/`, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then(function (res) {
    //     console.log(res);
    //     commit("SET_EVENT_DETAIL", res.data);
    //   })
    //   .catch(function (e) {
    //     console.log(e);
    //   });
    // }
  },
  getters: {
    getAuthState: (state) => state.authState,
    getAuthStep: (state) => state.authStep,
    getProfile: (state) => state.profile,
    getAllApplications: (state) => state.allApplications,
    getApplicationDetails: (state) => state.applicationDetails,
    getSimilarApp: (state) => state.similarApplication,
    getIsAuth: (state) => state.isAuth,
    getEvents: (state) => state.events,
    getMyAppeals: (state) => state.myAppeals,
    getMyEvents: (state) => state.myEvents,
    getNews: (state) => state.news,
    getNewsDetail: (state) => state.newsDetails,
    // getEventDetail: (state) => state.eventDetails
  },
});
