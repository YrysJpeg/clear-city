<template>
  <div class="individual notranslate">
    <div class="img">
      <img src="../../../assets/img/reg-code.svg" alt="" />
    </div>
    <div class="form">
      <h3>{{ $t("forms.personal-data") }}</h3>
      <div class="form-item__ind text">
        <p>{{ $t("forms.name") }}</p>
        <input type="text" v-model="name" />
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" v-model="lastname" />
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.birthday") }}</p>
        <input type="text" v-model="bday" />
      </div>
      <div class="form-item__ind gender">
        <p>{{ $t("forms.gender") }}</p>
        <div class="wrap">
          <div class="gender-item">
            <input
              name="gender"
              id="gen"
              type="radio"
              value="men"
              v-model="gender"
            />
            <label for="gen">{{ $t("forms.men") }}</label>
          </div>
          <div class="gender-item">
            <input
              name="gender"
              id="gen"
              type="radio"
              value="women"
              v-model="gender"
            />
            <label for="gen">{{ $t("forms.women") }}</label>
          </div>
        </div>
      </div>
      <div class="form-item__ind text">
        <p>{{ $t("forms.email") }}</p>
        <input type="text" v-model="email" />
      </div>
      <button
        @click="login"
        :disabled="!name || !lastname || !bday || !gender || !email"
        class="ind-login"
      >
        {{ $t("forms.login") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      lastname: "",
      bday: "",
      gender: "",
      email: "",
    };
  },
  methods: {
    login() {
      const data = {
        name: this.name,
        lastname: this.lastname,
        bday: this.bday,
        gender: this.gender,
        email: this.email,
      };

      console.log(data);

      this.$store.dispatch("authForm", false);
      this.$store.dispatch("authStepAdd", "login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/auth";
</style>
