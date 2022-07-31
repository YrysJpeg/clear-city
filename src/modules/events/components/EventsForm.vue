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
        <input
          type="text"
          placeholder="+7"
          v-mask="'+7 ### ### ## ##'"
          v-model="phone"
        />
      </div>
      <h4>{{ $t("forms.event-info") }}</h4>
      <div>
        <p>{{ $t("forms.address") }}</p>
        <input list="maplist" type="text" v-model="val" @input="maps" />
        <datalist id="maplist">
          <option
            v-for="(item, index) of mapResults"
            :key="index"
            :value="item.name"
          >
            {{ item.name }}
          </option>
        </datalist>
      </div>
      <div>
        <p>{{ $t("forms.theme") }}</p>
        <input type="text" name="example" list="exampleList" />
        <datalist id="exampleList">
          <option value="Свалка">Свалка</option>
          <option value="Крупногабаритные отходы">
            Крупногабаритные отходы
          </option>
          <option value="Переполненные контейнеры">
            Переполненные контейнеры
          </option>
          <option value="Переполненные урны">Переполненные урны</option>
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
      <div>
        <file-input></file-input>
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
import SelectInput from "../../core/form/SelectInput.vue";
import FileInput from "../../core/form/FileInput.vue";
export default {
  components: { SelectInput, FileInput },
  data() {
    return {
      state: true,
      stateDate: false,
      phone: "",
      val: "",
      mapResults: "",
    };
  },
  methods: {
    maps() {
      fetch(
        `https://catalog.api.2gis.com/3.0/suggests?q=${this.val}&type=street,building,adm_div.living_area&fields=items.point&location=82.617712,49.949531&key=rurbbn3446`
      )
        .then((res) => res.json())
        .then((json) => {
          this.mapResults = json.result.items;
          console.log(this.mapResults);
        });
    },
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
  background: #f6f6f6;
  border-radius: 10px;
}
datalist {
  width: 100%;
  background: green;

  option {
    width: 100%;
    background: green;
  }
}
</style>
