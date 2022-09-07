<template>
  <form class="my-account-form notranslate">
    <h3>{{ $t("account.personal-data") }}</h3>
    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="name">{{ $t("forms.name") }}</label>
      <input v-model="getProfile.first_name" id="name" type="text" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="surname">{{ $t("forms.lastname") }}</label>
      <input v-model="getProfile.last_name" id="surname" type="text" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="date">{{ $t("forms.birthday") }}</label>
      <input id="date" type="date" v-model="date" />
    </div>

    <label>{{ $t("forms.gender") }}</label>
    <div class="gender">
      <input
        name="male"
        id="male"
        type="radio"
        v-model="getProfile.gender"
        value="male"
        :checked="getProfile.gender == 'male'"
      />
      <label for="male">{{ $t("forms.men") }}</label>

      <input
        name="male"
        id="male"
        type="radio"
        v-model="getProfile.gender"
        value="female"
        :checked="getProfile.gender == 'female'"
      />
      <label for="male">{{ $t("forms.women") }}</label>
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="email">{{ $t("forms.email") }}</label>
      <input v-model="getProfile.email" id="email" type="email" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="tel">{{ $t("forms.phone") }}</label>
      <input v-model="getProfile.phone_number" id="tel" type="tel" />
    </div>

    <div class="label-wrap">
      <img src="../../../assets/img/pen.svg" alt="" />
      <label class="pen" for="password">{{ $t("forms.pass") }}</label>
      <input v-model="getProfile.password" id="password" type="password" />
    </div>

    <input @click="saveData" type="button" :value="$t('account.save')" />

    <p>
      {{ $t("account.delete-text") }}. <span>{{ $t("account.delete") }}</span>
    </p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      date: "2012-11-12",
    };
  },
  computed: {
    getProfile() {
      return this.$store.getters.getProfile;
    },
  },
  methods: {
    saveData(e) {
      e.preventDefault();
      const data = {
        first_name: this.getProfile.first_name,
        last_name: this.getProfile.last_name,
        email: this.getProfile.email,
        phone_number: this.getProfile.phone_number,
        gender: this.getProfile.gender,
      };
      this.$store.dispatch("updateProfile", data);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/my-data";
.label-wrap {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 288px;

  img {
    position: absolute;
    right: 20px;
    top: 35px;
    width: 14px;
    height: 14px;
  }
}
</style>
