<template>
  <div class="login notranslate">
    <div class="img">
      <img src="../../../assets/img/login.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.login") }}</h3>
      <div class="form-item">
        <p>{{ $t("forms.phone") }}</p>
        <input type="text" />
      </div>
      <div class="form-item">
        <p>{{ $t('forms.pass') }}</p>
        <input type="text" />
      </div>
      <router-link to>{{ $t("forms.reset") }}</router-link>
      <button class="form-login">{{ $t("forms.login") }}</button>
      <p class="not-acc">{{ $t("forms.no-acc") }}</p>
      <button class="form-reg">{{ $t("forms.reg") }}</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
