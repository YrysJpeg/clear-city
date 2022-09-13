<template>
  <div class="about">
    <div class="container">
      <go-back></go-back>
    </div>
    <div class="container">
      <div class="about-left">
        <img src="../../assets/img/rafiki2.svg" alt="" />
      </div>
      <div class="about-right">
        <h3 class="about-title notranslate">{{ $t("header.about") }}</h3>
        <p class="about-info">
          Мобильное приложение TrashOut – это интерактивная карта
          несанкционированных свалок, с помощью которой можно отмечать места
          скопления мусора в районе, городе или в любой другой точке мира и
          сообщить о ней сообществу.
          <br /><br />
          Проект позволяет каждому пользователю сделать свой вклад в работу по
          улучшению состояния окружающей среды. Данные, собранные пользователями
          TrashOut, помогут местным институтам, организациям и правительствам
          исправить экологическую ситуацию в мире.
          <br /><br />
          Если вы нашли несанкционированную свалку, сфотографируйте ее с помощью
          приложения TrashOut, там же можно выбрать размер, затем новая отметка
          появится на карте мусора. Приложение автоматически определяет
          местоположение свалки.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from '../core/back/Go-back.vue';
export default {
  components: { GoBack },};
</script>

<style lang="scss" scoped>
@import "../../assets/css/about";
</style>
