<template>
  <div class="sms notranslate">
    <div class="img">
      <img src="../../../assets/img/reg-code.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.set-sms") }}</h3>
      <h4>{{ $t("forms.await-sms") }} {{ "99999" }}</h4>
      <label for="code" class="code">
        <div class="number">{{ number[0] }}</div>
        <div class="number">{{ number[1] }}</div>
        <div class="number">{{ number[2] }}</div>
        <div class="number">{{ number[3] }}</div>
      </label>
      <input id="code" type="text" v-model="number" maxlength="4" />
      <h5 @click="smsRepeat">
        {{ $t("forms.sms-timeout") }} <span>{{ $t("forms.sms-repeat") }}</span>
      </h5>
      <button @click="sendSms">{{ $t("forms.send") }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
    };
  },
  computed: {
    getPhone() {
      return this.$store.state.authRegPhone;
    },
  },
  methods: {
    smsRepeat() {
      this.$store.dispatch("getSms", this.getPhone);
    },
    sendSms() {
      this.$store.dispatch("authStepAdd", "pass");
      // отправка смс
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
