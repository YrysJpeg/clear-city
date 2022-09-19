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
          Платформа «Чистый город» создана ОФ «ЭМИР» для решения многолетней проблемы мусора в Усть-Каменогорске. Если Вы встретили в черте города несанкционированную свалку, переполненные контейнеры возле жилых домов, переполненные урны в общественных места, то оставьте свое обращение на этом сайте, достаточно указать адрес (можно отметить на карте) и приложить фото/видео, а также оставить свои данные для связи. Остальное мы сделаем за Вас.
          <br><br>
          Также на сайте располагается раздел «Мероприятия» если Вы хотите организовать какую-либо акцию, то составьте описание мероприятия, укажите свои данные, как организатора, определите время и место и распространите эту информацию в социальных сетях для приглашения заинтересованных горожан.
          <br><br>
          Любой житель города может поддержать Ваше обращение или мероприятие и тогда Мы все ВМЕСТЕ сможем решить нашу актуальную мусорную проблему. 

        </p>
      </div>
    </div>
    <div class="container about-bottom">
      Данный сервис разработан в рамках программы экстренной помощи «QOLDA» в партнерстве с компанией «Шеврон» и Фондом Евразия Центральной Азии
      <div class="about-partners">
        <div>
          <img src="../../assets/img/partners/cvx.png" alt="">
        </div>
        <div>
          <img src="../../assets/img/partners/qolda.png" alt="">
        </div>
        <div>
          <img src="../../assets/img/partners/jastar.png" alt="">
        </div>
        <div>
          <img src="../../assets/img/partners/efca.png" alt="">
        </div>
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
