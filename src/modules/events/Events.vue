<template>
  <div class="start">
    <events-form v-if="form" @close="close"></events-form>
    <div class="container">
      <div class="start-top">
        <div class="start-top__left">
          <h3>Сделаем Усть-Каменогорск чище вместе</h3>
          <p>
            Сервис созданный для улучшения экологии города и предотвращения
            загрязнении.
          </p>
          <button class="notranslate" @click="close">
            {{ $t("main.create-events") }}
          </button>
        </div>
        <div class="start-top__right img-fix">
          <img src="../../assets/img/events--img.svg" alt="" />
        </div>
      </div>
      <div class="start-bottom">
        <h3>{{ $t("details.events") }}</h3>
        <div class="start-bottom__head notranslate">
          <input type="text" placeholder="Поиск" />
          <button class="search">{{ $t("main.find") }}</button>
          <button
            class="btn-map"
            @click="state = true"
            :class="{ active: state }"
          >
            <img v-if="!state" src="../../assets/img/geo-none.svg" alt="" />
            <img v-if="state" src="../../assets/img/geo-active.svg" alt="" />
            {{ $t("main.map") }}
          </button>
          <button
            class="btn-list"
            @click="state = false"
            :class="{ active: !state }"
          >
            <img v-if="state" src="../../assets/img/list-none.svg" alt="" />
            <img v-if="!state" src="../../assets/img/list-active.svg" alt="" />
            {{ $t("main.list") }}
          </button>
        </div>
        <div class="start-bottom__status notranslate">
          <button class="added">{{ $t("main.ago") }}</button>
          <button class="moderation">{{ $t("main.today") }}</button>
          <button class="inprogress">{{ $t("main.lated") }}</button>
        </div>
      </div>
      <div class="search-length notranslate">
        {{ $t("main.length") }}: <span>{{ getEventList.length }}</span>
      </div>
      <div class="start-wrapper" v-if="!state">
        <div class="start-wrapper__card" v-for="(item, index) of getEventList" :key="index">
          <div class="start-wrapper__card-img notranslate">
            <button v-if="true" class="added">{{ $t("main.ago") }}</button>
            <button v-if="false" class="moderation">
              {{ $t("main.today") }}
            </button>
            <button v-if="false" class="inprogress">
              {{ $t("main.lated") }}
            </button>
            <img :src="item.photo_url" alt="" v-if="item.photo_url" />
            <img src="../../assets/img/Rectangle 11.png" alt="" v-else />
          </div>
          <div class="start-wrapper__card-info">
            <h3>№UST46258391</h3>
            <time>{{ item.created_date }}</time>
          </div>
          <h5 class="event-type">Эко-субботник</h5>
          <div class="info">
            Дата и время: <span>{{ item.date }} {{ item.time }}</span>
          </div>
          <div class="info">
            Место проведения: <span>{{ item.address }}</span>
          </div>
          <router-link 
            :to="{
              path: `/event-details/${item.id}`,
              params: { id: item.id },
            }" 
            class="details"
            >
            {{ $t("main.details") }}
            </router-link>
        </div>
      </div>
      <map-view v-if="state" width="100" height="500"></map-view>
      <button class="show-more">{{ $t("main.load-more") }}</button>
    </div>
  </div>
</template>

<script>
import MapView from "../core/map/MapView.vue";
import EventsForm from "./components/EventsForm.vue";
export default {
  components: { EventsForm, MapView },
  data() {
    return {
      form: false,
      state: false,
    };
  },
  computed: {
    getEventList() {
      return this.$store.getters.getEvents
    }
  },
  created() {
    this.$store.dispatch('getEventList')
  },
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
