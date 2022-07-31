<template>
  <div class="auth" v-if="authState">
    <div class="auth-wrapper" :class="{ big: authStep == 'ind' }">
      <button class="auth-close" @click="close">
        <img src="../../assets/img/close.svg" alt="" />
      </button>
      <login v-if="authStep == 'login'"></login>
      <registration v-else-if="authStep == 'reg'"></registration>
      <sms v-else-if="authStep == 'sms'"></sms>
      <add-pass v-else-if="authStep == 'pass'"></add-pass>
      <individual v-else-if="authStep == 'ind'"></individual>
    </div>
  </div>
</template>

<script>
const AddPass = () => import("./components/AddPass.vue");
const Individual = () => import("./components/Individual.vue");
const Login = () => import("./components/Login.vue");
const Registration = () => import("./components/Registration.vue");
const Sms = () => import("./components/Sms.vue");

export default {
  components: {
    Sms,
    Login,
    Registration,
    AddPass,
    Individual,
  },
  mounted() {
    console.log(this.authState);
    console.log(this.authStep);
  },
  computed: {
    authState() {
      return this.$store.getters.getAuthState;
    },
    authStep() {
      return this.$store.getters.getAuthStep;
    },
  },
  methods: {
    openAuth() {
      this.$store.dispatch("authForm", true);
    },
    close() {
      this.$store.dispatch("authForm", false);
      this.$store.dispatch("authStepAdd", "login");
      this.$store.state.authRegPhone = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/auth";
</style>
