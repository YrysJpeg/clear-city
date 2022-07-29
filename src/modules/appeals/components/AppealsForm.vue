<template>
  <div class="appeals notranslate">
    <div v-if="state" class="appeals-form">
      <img
        @click="close"
        class="close"
        src="../../../assets/img/close.svg"
        alt=""
      />
      <h3>{{ $t("forms.create-appeals") }}</h3>
      <div>
        <p>{{ $t("forms.name") }}</p>
        <input type="text" />
      </div>
      <div>
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" />
      </div>
      <div>
        <p>{{ $t("forms.phone") }}</p>
        <input type="text" placeholder="+7" />
      </div>
      <div>
        <p>{{ $t("forms.address") }}</p>
        <input type="text" />
      </div>
      <div>
        <p>{{ $t("forms.type") }}</p>
        <input type="text" name="example" list="exampleList" />
        <datalist id="exampleList">
          <option value="A">asdsadsad</option>
          <option value="B">asdasdasdsad</option>
        </datalist>
      </div>
      <div>
        <file-input></file-input>
      </div>
      <button @click="createAppeals">{{ $t("forms.create-appeals") }}</button>
    </div>
    <div v-if="!state" class="appeals-complete">
      <img
        @click="close"
        class="close"
        src="../../../assets/img/close.svg"
        alt=""
      />
      <h3>{{ $t("forms.appeal-greate") }}</h3>
      <p>
        {{ $t("forms.appeal=text") }}
        <br />
        <router-link to>{{ $t("account.my-appeals") }}</router-link>
      </p>
      <img class="form-img" src="../../../assets/img/appeals-done.svg" alt="" />
    </div>
  </div>
</template>

<script>
import FileInput from "../../core/form/FileInput.vue";
export default {
  components: {
    FileInput,
  },
  data() {
    return {
      state: true,
    };
  },
  methods: {
    close() {
      this.state = true;
      this.$emit("close");
    },
    createAppeals() {
      this.state = !this.state;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/appeals";
</style>
