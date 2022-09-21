<template>
  <div class="faq-form notranslate">
    <div class="container">
      <div class="faq-form__left">
        <h3>{{ $t("faq.quest") }}</h3>
        <h4>{{ $t("faq.subtitle") }}</h4>
        <div class="form">
          <div>
            <p>{{ $t("forms.name") }}</p>
            <input type="text" v-model="name" />
          </div>
          <div>
            <p>{{ $t("forms.phone") }}</p>
            <input type="text" v-model="phone" v-mask="'+7 ### ### ## ##'" />
          </div>
          <div>
            <p>{{ $t("faq.quest-text") }}</p>
            <textarea
              name=""
              class="form-message"
              id=""
              cols="30"
              v-model="message"
              rows="10"
            ></textarea>
          </div>
        </div>
        <button @click="sendMessage">{{ $t("forms.send") }}</button>
      </div>
      <div class="faq-form__right">
        <img src="../../../assets/img/faqform.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      const data = {
        full_name: this.name,
        phone_number: this.phone,
        message: this.message,
      };
      this.$store.dispatch("sendFeedback", data);
      this.name = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/faq";
.form-message {
  padding: 20px;
}
</style>
