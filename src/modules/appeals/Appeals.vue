<template>
  <div class="start">
    <appeals-from v-if="form" @close="close"></appeals-from>
    <div class="container">
      <div class="start-top">
        <div class="start-top__left">
          <h3>Сделаем Усть-Каменогорск чище вместе</h3>
          <p>
            Сервис созданный для улучшения экологии города и предотвращения
            загрязнении.
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
          <input type="text" placeholder="Поиск" />
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
        {{ $t("main.length") }}: <span>{{ events.length }}</span>
      </div>
      <div class="start-wrapper" v-if="!state">
        <div
          class="start-wrapper__card"
          v-for="(item, index) of events"
          :key="index"
        >
          <div class="start-wrapper__card-img">
            <button v-if="true" class="added notranslate">
              {{ $t("main.scheduled") }}
            </button>
            <button v-if="false" class="moderation notranslate">
              {{ $t("main.treatmet") }}
            </button>
            <button v-if="false" class="inprogress notranslate">
              {{ $t("main.in-progress") }}
            </button>
            <button v-if="false" class="complete notranslate">
              {{ $t("main.done") }}
            </button>
            <img :src="item.image" alt="" />
          </div>
          <div class="start-wrapper__card-info">
            <h3>{{ item.title }}</h3>
            <time>24.03.2022 14:53</time>
          </div>
          <div class="info notranslate">
            {{ $t("main.type") }}: <span>Скопление мусора</span>
          </div>
          <div class="info notranslate">
            {{ $t("main.address") }}: <span>Айтеке би, 54</span>
          </div>
          <router-link to class="details notranslate">{{
            $t("main.details")
          }}</router-link>
        </div>
      </div>
      <map-view v-if="state" width="100" height="500"></map-view>
      <button class="show-more notranslate">{{ $t("main.load-more") }}</button>
    </div>
  </div>
</template>

<script>
import AppealsFrom from "./components/AppealsForm.vue";
// import axios from "axios";
import MapView from "../core/map/MapView.vue";
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
    };
  },
  // async created() {
  //   await axios.get("/products").then((json) => {
  //     this.events = json.data;
  //     console.log(this.events);
  //   })
  // },
  methods: {
    close() {
      this.form = !this.form;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/start";
.active {
  color: #008037;
}
</style>
