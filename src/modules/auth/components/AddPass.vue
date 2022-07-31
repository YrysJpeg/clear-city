<template>
  <div class="pass notranslate">
    <div class="img">
      <img src="../../../assets/img/reg-code.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.send-pass") }}</h3>
      <div class="pass-enter">
        <p>{{ $t("forms.pass") }}</p>
        <input type="password" v-model="pass" v-if="passState" />
        <input type="text" v-model="pass" v-else />
        <button class="show-pass">
          <img
            src="../../../assets/img/showPass.svg"
            alt=""
            @click="passState = !passState"
          />
        </button>
      </div>
      <div class="pass-repeat">
        <p>{{ $t("forms.pass-repeat") }}</p>
        <input type="password" v-model="passRepeat" v-if="passRepeatState" />
        <input type="text" v-model="passRepeat" v-else />
        <button class="show-pass">
          <img
            src="../../../assets/img/showPass.svg"
            alt=""
            @click="passRepeatState = !passRepeatState"
          />
        </button>
      </div>
      <button @click="login" class="pass-login" :disabled="pass !== passRepeat">
        Войти
      </button>
      <button @click="persData" class="edit-data">
        {{ $t("forms.add-data") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pass: "",
      passState: true,
      passRepeat: "",
      passRepeatState: true,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("authForm", false);
      this.$store.dispatch("authStepAdd", "login");
    },
    persData() {
      this.$store.dispatch("authStepAdd", "ind");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
