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
        <input type="text" v-model="name" />
      </div>
      <div>
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" v-model="lastname" />
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
        <p>{{ $t("forms.type") }}</p>
        <input type="text" name="example" v-model="type" list="exampleList" />
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
        <file-input @image="loadImage"></file-input>
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
        {{ $t("forms.appeal-text") }}
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
      test: "",
      val: "",
      mapResults: "",
      type: "",
      img: "",
      lat: "",
      long: "",
      phone: "",
      name: "",
      lastname: "",
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
    loadImage(data) {
      this.img = data;
      console.log(this.img);
    },
    createAppeals() {
      const data = {
        address: this.val,
        // description : ,
        // date : ,
        // time :"17:00",
        organizer_info: this.phone.split(" ").join(""),
        document_url: this.img,
        longitude: this.mapResults[0].point.lon,
        latitude: this.mapResults[0].point.lat,
      };
      console.log(data);
      this.state = !this.state;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/appeals";
</style>
