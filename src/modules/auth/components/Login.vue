<template>
  <div class="login notranslate">
    <div class="img">
      <img src="../../../assets/img/login.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.login") }}</h3>
      <div class="form-item">
        <p>{{ $t("forms.phone") }}</p>
        <input type="text" v-model="phone" v-mask="'+7 ### ### ## ##'" />
      </div>
      <div class="form-item">
        <p>{{ $t("forms.pass") }}</p>
        <input type="password" v-model="pass" />
      </div>
      <router-link to>{{ $t("forms.reset") }}</router-link>
      <button @click="login" class="form-login">{{ $t("forms.login") }}</button>
      <p class="not-acc">{{ $t("forms.no-acc") }}</p>
      <button @click="reg" class="form-reg">{{ $t("forms.reg") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
      pass: "",
    };
  },
  methods: {
    login() {
      const data = {
        phone: this.phone.split(" ").join(""),
        pass: this.pass,
      };
      console.log(data);
      this.$store.dispatch("authForm", false);
      // тут запрос на вход и чистим состояние дата для отправки
    },
    reg() {
      this.$store.dispatch("authStepAdd", "reg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
