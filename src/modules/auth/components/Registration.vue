<template>
  <div class="registr notranslate">
    <div class="registr-img">
      <img src="../../../assets/img/registr.svg" alt="" />
    </div>
    <div class="registr-form">
      <h3 class="rigistr-title">{{ $t("forms.reg") }}</h3>
      <div class="registr-form-item">
        <p>{{ $t("forms.phone") }}</p>
        <input type="text" v-model="phone" v-mask="'+7 ### ### ## ##'" />
      </div>
      <button @click="getSms" class="registr-login">
        {{ $t("forms.sms") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: "",
    };
  },
  methods: {
    getSms() {
      const num = this.phone.split(" ").join("");
      console.log(num);
      this.$store.dispatch("authStepAdd", "sms");
      this.$store.state.authRegPhone = num;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
