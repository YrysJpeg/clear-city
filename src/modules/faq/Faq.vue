<template>
  <div class="container faq-container">
    <go-back></go-back>
    <faq-top></faq-top>
    <faq-form></faq-form>
  </div>
</template>

<script>
import FaqTop from "../faq/components/FaqTop.vue";
import FaqForm from "../faq/components/FaqForm.vue";
import GoBack from "../core/back/Go-back.vue";
export default {
  components: { FaqTop, FaqForm, GoBack },
};
</script>

<style lang="scss" scoped>
.faq-container {
  margin-top: 30px;
  @media (min-width: 990px) {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>
