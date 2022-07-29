<template>
  <form action="#" class="my-account-form notranslate">
    <h3>{{ $t("account.personal-data") }}</h3>
    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="name">{{ $t("forms.name") }}</label>
      <input id="name" type="text" />
    </div>
    
    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="surname">{{ $t("forms.lastname") }}</label>
      <input id="surname" type="text" />
    </div>
    

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="date">{{ $t("forms.birthday") }}</label>
      <input id="date" type="date" v-model="date" />
    </div>

    <label>{{ $t("forms.gender") }}</label>
    <div class="gender">
      <input id="male" type="radio" />
      <label for="male">{{ $t("forms.men") }}</label>

      <input id="male" type="radio" />
      <label for="male">{{ $t("forms.women") }}</label>
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="email">{{ $t("forms.email") }}</label>
      <input id="email" type="email" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="tel">{{ $t("forms.phone") }}</label>
      <input id="tel" type="tel" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="">
      <label class="pen" for="password">{{ $t("forms.pass") }}</label>
      <input id="password" type="password" />
    </div>

    <input type="button" :value="$t('account.save')" />

    <p>
      {{ $t("account.delete-text") }}. <span>{{ $t("account.delete") }}</span>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: "2012-11-12",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/my-data";
.label-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 288px;

  img {
    position: absolute;
    right: 20px;
    top: 35px;
    width: 14px;
    height: 14px;
  }
}
</style>