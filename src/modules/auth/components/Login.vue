<template>
  <div class="login notranslate">
    <div class="img">
      <img src="../../../assets/img/login.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.login") }}</h3>
      <div class="form-item">
        <p>{{ $t("forms.phone") }}</p>
        <!-- v-mask="'+7 ### ### ## ##'" -->
        <input type="text" v-model="phone" />
      </div>
      <div class="form-item">
        <p>{{ $t("forms.pass") }}</p>
        <div>
          <input type="text" v-model="pass" v-if="passState" />
          <input type="password" v-model="pass" v-else />
          <button class="show-pass" @click="passState = !passState">
            <img src="../../../assets/img/showPass.svg" alt="" />
          </button>
        </div>
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
      passState: false,
    };
  },
  methods: {
    login() {
      const data = {
        username: this.phone.split(" ").join(""),
        password: this.pass,
      };
      this.$store.dispatch("authForm", false);
      this.$store.dispatch("login", JSON.stringify(data));
    },
    reg() {
      this.$store.dispatch("authStepAdd", "reg");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
.show-pass {
  position: relative;
  left: -30px;
}
</style>
