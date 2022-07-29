<template>
  <div class="appeals notranslate">
    <div v-if="state" class="appeals-form">
      <img
        @click="close"
        class="close"
        src="../../../assets/img/close.svg"
        alt=""
      />
      <h3>{{ $t("forms.create-events") }}</h3>
      <h4>{{ $t("forms.data") }}</h4>
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
      <h4>{{ $t("forms.event-info") }}</h4>
      <div>
        <p>{{ $t("forms.address") }}</p>
        <input type="text" />
      </div>
      <div>
        <p>{{ $t("forms.theme") }}</p>
        <input type="text" name="example" list="exampleList" />
        <datalist id="exampleList">
          <option value="A">asdsadsad</option>
          <option value="B">asdasdasdsad</option>
        </datalist>
      </div>
      <div>
        <p>{{ $t("main.date-time") }}</p>
        <div class="input" @click="stateDate = !stateDate"></div>
        <select-input v-if="stateDate"></select-input>
      </div>
      <div>
        <p>{{ $t("forms.short-text") }}</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <button @click="createAppeals">{{ $t("forms.create-events") }}</button>
    </div>
    <div v-if="!state" class="appeals-complete">
      <img
        @click="close"
        class="close"
        src="../../../assets/img/close.svg"
        alt=""
      />
      <h3>{{ $t("forms.event-greate") }}</h3>
      <p>
        {{ $t("forms.event-text") }}
        <br />
        <router-link to>{{ $t("account.my-events") }}</router-link>
      </p>
      <img class="form-img" src="../../../assets/img/appeals-done.svg" alt="" />
    </div>
  </div>
</template>

<script>
import SelectInput from '../../core/form/SelectInput.vue';
export default {
  components: { SelectInput },
  data() {
    return {
      state: true,
      stateDate: false
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
textarea {
  background: #f6f6f6;
  resize: none;
  border-radius: 10px;
  width: 288px;
}
.input {
  width: 288px;
  height: 48px;
  background: #F6F6F6;
  border-radius: 10px;
}
</style>
