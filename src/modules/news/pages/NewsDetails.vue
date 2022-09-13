<template>
  <div class="news-page">
    <div class="container">
    <go-back></go-back>
      <img :src="getDetails.photo_url" alt="" />
      <time>{{ getDetails.created_date }}</time>
      <h3 class="news-page__title">
        {{ getDetails.title }}
      </h3>
      <p>
        {{ getDetails.description }}
      </p>
    </div>
  </div>
</template>

<script>
import GoBack from '../../core/back/Go-back.vue'
export default {
  components: { GoBack },
  computed: {
    getDetails() {
      return this.$store.getters.getNewsDetail
    }
  },
  created() {
    this.$store.dispatch('getNewsDetails', this.$route.params.id)
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/css/news";
</style>
