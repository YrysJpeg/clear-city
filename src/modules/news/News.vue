<template>
  <div class="news">
    <div class="container">
      <router-link :to="{ name: 'news-details' }" class="news-top">
        <div class="news-top__img">
          <img src="../../assets/img/test-news.jpg" alt="" />
        </div>
        <div class="news-top__info">
          <h3>Почти полмиллиона саженцев деревьев высадили в городе</h3>
          <p>
            «В своем Послании «Казахстан в новой реальности: время действий»
            Касым-Жомарт Токаев уделил большое внимание расширению площади лесов
            в Казахстане. Перед всеми нами стоит задача к 2025 году высадить 2
            млрд деревьев. В том числе в нашей области 7 млн 75 тыс. саженцев»,
            - сообщил исполняющий обязанности руководителя отдела инспекции
            лесного хозяйства и животного ... Читать полностью
          </p>
          <time>20 мая 2022г. 14:45</time>
        </div>
      </router-link>
      <div class="news-bottom">
        <news-card></news-card>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "./components/NewsCard.vue";
export default {
  components: { NewsCard },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/news";
</style>
