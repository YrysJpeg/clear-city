<template>
  <div class="individual notranslate">
    <div class="img">
      <img src="../../../assets/img/reg-code.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.personal-data") }}</h3>
      <div class="form-item__ind text">
        <p>{{ $t("forms.name") }}</p>
        <input type="text" />
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" />
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.birthday") }}</p>
        <input type="text" />
      </div>
      <div class="form-item__ind gender">
        <p>{{ $t("forms.gender") }}</p>
        <div class="wrap">
          <div class="gender-item">
            <input name="gender" id="gen" type="radio" />
            <label for="gen">{{ $t("forms.men") }}</label>
          </div>
          <div class="gender-item">
            <input name="gender" id="gen" type="radio" />
            <label for="gen">{{ $t("forms.women") }}</label>
          </div>
        </div>
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.email") }}</p>
        <input type="text" />
      </div>
      <button class="ind-login">{{ $t("forms.login") }}</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
