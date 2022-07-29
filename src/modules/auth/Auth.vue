<template>
  <div class="auth" v-if="authActive">
    <div class="auth-wrapper" :class="{ big: step == 'ind' }">
      <button class="auth-close" @click="authActive = false">
        <img src="../../assets/img/close.svg" alt="" />
      </button>
      <login v-if="step == 'login'"></login>
      <registration v-else-if="step == 'reg'"></registration>
      <sms v-else-if="step == 'sms'"></sms>
      <add-pass v-else-if="step == 'pass'"></add-pass>
      <individual v-else-if="step == 'ind'"></individual>
    </div>
  </div>
</template>

<script>
import AddPass from "./components/AddPass.vue";
import Individual from "./components/Individual.vue";
import Login from "./components/Login.vue";
import Registration from "./components/Registration.vue";
import Sms from "./components/Sms.vue";
export default {
  components: {
    Sms,
    Login,
    Registration,
    AddPass,
    Individual,
  },
  data() {
    return {
      authActive: false,
      step: "ind",
    };
  },
  methods: {
    openAuth() {
      this.authActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/auth";
</style>
