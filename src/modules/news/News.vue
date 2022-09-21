<template>
  <div class="news">
    <div class="container">
      <go-back></go-back>
      <router-link
        :to="{ name: `/news-details/${idUrl}`, params: { id: idUrl } }"
        class="news-top"
      >
        <div class="news-top__img">
          <img :src="getNews[0].photo_url" alt="" />
        </div>
        <div class="news-top__info">
          <h3>{{ getNews[0].title }}</h3>
          <p>
            {{ getNews[0].small_description }}
          </p>
          <time>{{ getNews[0].created_date }}</time>
        </div>
      </router-link>
      <div class="news-bottom">
        <news-card></news-card>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "../core/back/Go-back.vue";
import NewsCard from "./components/NewsCard.vue";
export default {
  data() {
    return {
      idUrl: "",
    };
  },
  components: { NewsCard, GoBack },
  computed: {
    getNews() {
      return this.$store.getters.getNews;
    },
  },
  created() {
    this.$store.dispatch("getNewsList");
    console.log(this.getNews[0]);
    this.idUrl = this.getNews[0].id;
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/news";
.news {
  &-top {
    margin-top: 30px;
  }
}
</style>
