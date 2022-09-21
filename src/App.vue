<template>
  <div id="app">
    <Translator :countries="countries" v-show="false" />
    <notifications />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { Translator } from "vue-google-translate";
import Footer from "./modules/core/footer/Footer.vue";
import Header from "./modules/core/header/Header.vue";
export default {
  data() {
    return {
      countries: [
        {
          code: "ru|ru",
          title: "Russian",
        },
        {
          code: "kk|kk",
          title: "Kazakh",
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Translator,
  },
  updated() {
    setTimeout(() => {
      let test = (document.createElement("span").innerHTML = "");
      document.body.append(test);
    }, 500);
    this.$store.dispatch("isAuthorize");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.v-picker__title {
  background: #11ae55 !important;
  padding: 0 !important;
}
.v-time-picker-title {
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
.v-time-picker-title {
  justify-content: center !important;
  height: initial !important;
  font-family: "Roboto";
}
.v-picker__title__btn {
  font-size: 24px !important;
  height: initial !important;
}
.v-time-picker-title__time span {
  font-size: 24px !important;
  height: initial !important;
}
.theme--light.v-time-picker-clock {
  background: #fff !important;
}
.theme--light.v-time-picker-clock--indeterminate
  .v-time-picker-clock__item--active,
.theme--light.v-time-picker-clock--indeterminate .v-time-picker-clock__hand,
.v-time-picker-clock__hand,
.v-time-picker-clock__item--active {
  background: #11ae55 !important;
}
.v-time-picker-clock__container {
  font-family: "Roboto" !important;
}
.v-date-picker-header {
  background: #f4f4f4;
}
.v-btn--fab.v-size--default .v-icon,
.v-btn--fab.v-size--small .v-icon,
.v-btn--icon.v-size--default .v-icon,
.v-btn--icon.v-size--small .v-icon {
  height: 24px;
  font-size: 24px;
  width: 24px;
  background: #11ae5564;
  border-radius: 50%;
}
.v-date-picker-title__date {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 14px !important;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  padding-left: 20px;
  padding-bottom: 20px !important;
}
.v-picker__body {
  font-family: "Roboto";
}
.v-card > .v-card__progress + :not(.v-btn):not(.v-chip):not(.v-avatar),
.v-card > :first-child:not(.v-btn):not(.v-chip):not(.v-avatar) {
  border-top-left-radius: none !important;
  border-top-right-radius: none !important;
}
.theme--light.v-date-picker-table th {
  color: #11ae55 !important;
}
.v-date-picker-title__year {
  font-family: "Roboto";
  font-weight: 700;
  font-size: 12px !important;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;
  padding-left: 20px;
  padding-top: 10px;
}
::-webkit-scrollbar {
  width: 15px;
}
button,
input {
  font-size: initial !important;
  font-weight: initial !important;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
div {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.container {
  max-width: 1120px !important;
  width: 100%;
  margin: auto;
  padding: initial !important;
  padding-left: 1em !important;
  padding-right: 1em !important;
}
button,
input,
textarea {
  outline: none;
  border: none;
}
@media (max-width: 1200px) {
  section,
  header,
  footer {
    padding-left: 10px;
    padding-right: 10px;
  }
}
body {
  top: 0 !important;
}

.skiptranslate,
#goog-gt-tt,
.goog-te-spinner-pos {
  display: none !important;
  position: absolute;
  opacity: 0 !important;
  left: 2200% !important;
  z-index: -100 !important;
  width: 0px !important;
}
.goog-text-highlight {
  background: transparent !important;
  box-shadow: none !important;
}
</style>
