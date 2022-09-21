<template>
  <div class="start">
    <appeals-from v-if="form" @close="close"></appeals-from>
    <div class="container">
      <div class="start-top">
        <div class="start-top__left">
          <h3>Сделаем Усть-Каменогорск чище вместе</h3>
          <p>
            Наш сервис является помощником в подаче официальных обращений в
            государственные органы для решения городских проблем с мусором. Вам
            нужно только заполнить форму остальное мы сделаем за Вас.
          </p>
          <button class="notranslate" @click="close">
            {{ $t("main.create-appeals") }}
          </button>
        </div>
        <div class="start-top__right">
          <img src="../../assets/img/events.svg" alt="" />
        </div>
      </div>
      <div class="start-bottom">
        <h3 class="notranslate">{{ $t("main.appeals") }}</h3>
        <div class="start-bottom__head">
          <div>
            <input type="text" placeholder="Поиск" />
            <img src="../../assets/img/search.svg" alt="" />
          </div>
          <button class="search notranslate">{{ $t("main.find") }}</button>
          <button
            class="btn-map notranslate"
            @click="state = true"
            :class="{ active: state }"
          >
            <img v-if="!state" src="../../assets/img/geo-none.svg" alt="" />
            <img
              v-if="state"
              class="notranslate"
              src="../../assets/img/geo-active.svg"
              alt=""
            />
            {{ $t("main.map") }}
          </button>
          <button
            class="btn-list"
            @click="state = false"
            :class="{ active: !state }"
          >
            <img v-if="state" src="../../assets/img/list-none.svg" alt="" />
            <img
              v-if="!state"
              class="notranslate"
              src="../../assets/img/list-active.svg"
              alt=""
            />
            {{ $t("main.list") }}
          </button>
        </div>
        <div class="start-bottom__status">
          <button class="added notranslate">{{ $t("main.scheduled") }}</button>
          <button class="moderation notranslate">
            {{ $t("main.treatmet") }}
          </button>
          <button class="inprogress notranslate">
            {{ $t("main.in-progress") }}
          </button>
          <button class="complete notranslate">{{ $t("main.done") }}</button>
        </div>
      </div>
      <div class="search-length notranslate">
        {{ $t("main.length") }}: <span>{{ getAllApplications.length }}</span>
      </div>
      <div class="start-wrapper" v-if="!state">
        <div
          class="start-wrapper__card"
          v-for="(item, index) of getAllApplications"
          :key="index"
        >
          <div class="start-wrapper__card-img">
            <button v-if="false" class="added notranslate">
              {{ $t("main.scheduled") }}
            </button>
            <button
              v-if="item.app_status == 'ожидание'"
              class="moderation notranslate"
            >
              {{ $t("main.treatmet") }}
            </button>
            <button v-if="false" class="inprogress notranslate">
              {{ $t("main.in-progress") }}
            </button>
            <button v-if="false" class="complete notranslate">
              {{ $t("main.done") }}
            </button>
            <img :src="item.photo_url" alt="" v-if="item.photo_url" />
            <img src="../../assets/img/Rectangle 11.png" alt="" v-else />
          </div>
          <div class="start-wrapper__card-info">
            <h3>{{ item.title }}</h3>
            <time>{{ item.created_date }}</time>
          </div>
          <div class="info notranslate">
            {{ $t("main.type") }}: <span>{{ item.app_type }}</span>
          </div>
          <div class="info notranslate">
            {{ $t("main.address") }}: <span>{{ item.address }}</span>
          </div>
          <router-link
            :to="{
              path: `/appeal-details/${item.id}`,
              params: { id: item.id },
            }"
            class="details notranslate"
            >{{ $t("main.details") }}</router-link
          >
        </div>
      </div>
      <map-view
        :appeals="getAllApplications"
        v-if="state"
        :key="clickState"
        width="100"
        height="500"
      ></map-view>
      <button @click="showMore" class="show-more notranslate">
        {{ $t("main.load-more") }}
      </button>
    </div>
  </div>
</template>

<script>
const AppealsFrom = () => import("./components/AppealsForm.vue");
const MapView = () => import("../core/map/MapView.vue");
export default {
  components: {
    AppealsFrom,
    MapView,
  },
  data() {
    return {
      form: false,
      events: "",
      state: false,
      clickState: 0,
    };
  },
  methods: {
    close() {
      this.form = !this.form;
    },
    showMore() {
      this.clickState += 1;
    },
  },
  computed: {
    getAllApplications() {
      return this.$store.getters.getAllApplications;
    },
  },
  created() {
    console.log(this.getAllApplications);
    this.$store.dispatch("getAppList");
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/start";
.active {
  color: #008037;
}
.start-bottom__head {
  > div {
    position: relative;

    img {
      position: absolute;
      right: 15px;
      top: 20px;
    }
  }
}
</style>
