<template>
  <div class="news-bottom">
    <div v-for="(item, index) of getNews" :key="index">
      <router-link :to="{ path: `/news-details/${item.id}`, params: {id: item.id} }" class="news-card">
        <img :src="item.photo_url" alt="" />
        <div class="news-card__layer"></div>
        <div class="news-card__content">
          <h3>{{ item.title }}</h3>
          <time>{{ item.created_date }}</time>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getNews() {
      return this.$store.getters.getNews
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/news";
</style>
