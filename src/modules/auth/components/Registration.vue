<template>
  <div class="registr notranslate">
    <div class="registr-img">
      <img src="../../../assets/img/registr.svg" alt="" />
    </div>
    <div class="registr-form">
      <h3 class="rigistr-title">{{ $t("forms.reg") }}</h3>
      <div class="registr-form-item">
        <p>{{ $t("forms.phone") }}</p>
        <input type="text" />
      </div>
      <button class="registr-login">{{ $t("forms.sms") }}</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
