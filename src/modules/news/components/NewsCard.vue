<template>
  <div class="news-bottom">
    <router-link :to="{ name: 'news-details' }" class="news-card">
      <img src="../../../assets/img/test-news.jpg" alt="" />
      <div class="news-card__layer"></div>
      <div class="news-card__content">
        <h3>Почти 5000 саженцев деревьев высадили в городе</h3>
        <time>20 мая 2022г. 14:45</time>
      </div>
    </router-link>
    <router-link :to="{ name: 'news-details' }" class="news-card">
      <img src="../../../assets/img/test-news.jpg" alt="" />
      <div class="news-card__layer"></div>
      <div class="news-card__content">
        <h3>Почти 5000 саженцев деревьев высадили в городе</h3>
        <time>20 мая 2022г. 14:45</time>
      </div>
    </router-link>
    <router-link :to="{ name: 'news-details' }" class="news-card">
      <img src="../../../assets/img/test-news.jpg" alt="" />
      <div class="news-card__layer"></div>
      <div class="news-card__content">
        <h3>Почти 5000 саженцев деревьев высадили в городе</h3>
        <time>20 мая 2022г. 14:45</time>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/news";
</style>
