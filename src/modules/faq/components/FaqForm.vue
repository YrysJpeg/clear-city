<template>
  <div class="faq-form notranslate">
    <div class="container">
      <div class="faq-form__left">
        <h3>{{ $t("faq.quest") }}</h3>
        <h4>{{ $t("faq.subtitle") }}</h4>
        <div class="form">
          <div>
            <p>{{ $t("forms.name") }}</p>
            <input type="text" />
          </div>
          <div>
            <p>{{ $t("forms.lastname") }}</p>
            <input type="text" />
          </div>
          <div>
            <p>{{ $t("faq.quest-text") }}</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <button>{{ $t("forms.send") }}</button>
      </div>
      <div class="faq-form__right">
        <img src="../../../assets/img/faqform.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/faq";
</style>
