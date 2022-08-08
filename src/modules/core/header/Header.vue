<template>
  <header class="header">
    <auth></auth>
    <div class="container">
      <div class="header-left">
        <router-link to="/" class="logo">
          <img src="../../../assets/img/logo.svg" alt="" />
        </router-link>
        <nav class="menu" :class="{ 'menu-active': menuState }">
          <ul>
            <li @click="menuState = false">
              <router-link class="notranslate" to="/appeals">{{
                $t("header.appeals")
              }}</router-link>
            </li>
            <li @click="menuState = false">
              <router-link class="notranslate" to="/events">{{
                $t("header.events")
              }}</router-link>
            </li>
            <li @click="menuState = false">
              <router-link class="notranslate" to="/news">{{
                $t("header.news")
              }}</router-link>
            </li>
            <div class="header-mobile">
              <div class="header-lang">
                <div @click="changeLang('kk')" class="notranslate" to>
                  {{ $t("header.kk") }}
                </div>
                <span>|</span>
                <div @click="changeLang('ru')" class="notranslate" to>
                  {{ $t("header.ru") }}
                </div>
              </div>
              <div @click="menuState = false">
                <router-link to class="header-auth notranslate">{{
                  $t("header.login")
                }}</router-link>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div class="header-right">
        <div class="header-lang">
          <div class="notranslate" @click="changeLang('kk')">
            {{ $t("header.kk") }}
          </div>
          <span>|</span>
          <div class="notranslate" @click="changeLang('ru')">
            {{ $t("header.ru") }}
          </div>
        </div>
        <router-link
          @click.native="openModal"
          to
          class="header-auth notranslate"
          >{{ $t("header.login") }}</router-link
        >
      </div>
      <div class="gam" @click="menuState = !menuState">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
</template>

<script>
// import { setCookie } from "../../../utils/cookie/cookies";
import Auth from "../../auth/Auth.vue";
export default {
  components: {
    Auth,
  },
  data() {
    const lang = localStorage.getItem("lang") || "ru";
    return {
      menuState: false,
      lang: lang,
    };
  },
  methods: {
    openModal() {
      this.menuState = false;
      this.$store.dispatch("authForm", true);
    },
    changeLang(event) {
      localStorage.setItem("lang", event);
      this.$store.dispatch("addLang", event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/header";
</style>
