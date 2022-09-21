<template>
  <div :class="{ 'active-menu': menuState }" class="bar">
    <aside class="my-account-bar notranslate">
      <section class="my-account-user">
        <go-back></go-back>
        <img :src="getProfile.avatar" alt="" />
        <p style="margin-top: 10px">
          {{ getProfile.first_name }} {{ getProfile.last_name }}
        </p>
        <label class="avatar-label" for="avatar">
          <img src="../../../assets/img/avatar-add.svg" alt="" />
        </label>
        <input id="avatar" type="file" @change="photoUpdate" v-show="false" />
      </section>

      <nav class="my-account-nav">
        <ul>
          <li @click="menuState = false">
            <router-link to="/account">{{ $t("account.my-acc") }}</router-link>
          </li>
          <li @click="menuState = false">
            <router-link to="/account/my-appeals">{{
              $t("account.my-appeals")
            }}</router-link>
          </li>
          <li @click="menuState = false">
            <router-link to="/account/my-events">{{
              $t("account.my-events")
            }}</router-link>
          </li>
          <li @click="menuState = false">
            <router-link to="/account/my-visit">{{
              $t("account.my-help")
            }}</router-link>
          </li>
          <li @click="logout">{{ $t("account.logut") }}</li>
        </ul>
      </nav>
    </aside>
    <div
      :class="{ 'show-menu__active': menuState }"
      class="show-menu"
      @click="menuState = !menuState"
    >
      <img src="../../../assets/img/arrow.png" alt="" />
    </div>
  </div>
</template>

<script>
import { removeCookie } from "../../../utils/cookie/cookies";
import GoBack from "../../core/back/Go-back.vue";
export default {
  components: { GoBack },
  data() {
    return {
      menuState: false,
      photo: [],
    };
  },
  computed: {
    getProfile() {
      return this.$store.getters.getProfile;
    },
  },
  methods: {
    logout() {
      removeCookie("test");
      this.$store.dispatch("isAuthorize");
      this.$router.push("/");
    },
    sidebarActive(e) {
      let nav = document.querySelectorAll(".my-account-nav ul > li > a");
      console.log(nav, e);
    },
    photoUpdate(e) {
      this.photo = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < this.photo.length; i++) {
        let file = this.photo[i];
        formData.append("file", file);
      }
      console.log(formData);
      this.$store.dispatch("updateAvatar", formData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/my-data";
.show-menu {
  z-index: 9999;
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ebebeb;
  display: none;
  justify-content: center;
  align-items: center;
  transform: rotate(-180deg);
  transition: 0.5s;
}
.show-menu__active {
  transform: rotate(0deg);
}
.active-menu {
  margin-left: 0% !important;
  transition: 0.5s;
}
.router-link-active {
  color: green;
}
.my-account-nav a {
  color: black;
}
.my-account-user {
  img {
    margin-top: 30px;
  }
}
@media (max-width: 768px) {
  .show-menu {
    display: flex;
  }
}
</style>
