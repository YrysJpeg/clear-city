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
        <input type="text" :value="getUserInfo.first_name" />
      </div>
      <div>
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" :value="getUserInfo.last_name" />
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
        <input type="text" name="example" v-model="type" list="exampleList" />
        <datalist id="exampleList">
          <option value="городской субботник">Городской субботник</option>
          <option value="Акция по сбору пластика/перерабатываемых отходов">
            Акция по сбору пластика/перерабатываемых отходов
          </option>
          <option value="озеленение города">Озеленение города</option>
        </datalist>
      </div>
      <div>
        <p>{{ $t("main.date-time") }}</p>
        <div class="input" @click="stateDate = !stateDate">
          {{ date }}, {{ time }}
          <img v-if="stateDate" src="../../../assets/img/close.svg" alt="" />
        </div>
        <select-input
          @time="getTimeEmit($event)"
          @date="getDateEmit($event)"
          v-if="stateDate"
        ></select-input>
      </div>
      <div>
        <p>{{ $t("forms.short-text") }}</p>
        <textarea
          name=""
          id=""
          v-model="description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <file-input @image="loadImage"></file-input>
      </div>
      <button @click="createEvents">{{ $t("forms.create-events") }}</button>
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
      img: "",
      type: "",
      val: "",
      mapResults: "",
      phone: "",
      date: "",
      time: "",
      address: "",
      description: "",
    };
  },
  computed: {
    getIsAuth() {
      return this.$store.getters.getIsAuth;
    },
    getUserInfo() {
      return this.$store.getters.getProfile;
    },
  },
  methods: {
    maps() {
      fetch(
        `https://catalog.api.2gis.com/3.0/suggests?q=${this.val}&city_id=12807734210592770&fields=items.point&location=82.617712,49.949531&key=rurbbn3446`
      )
        .then((res) => res.json())
        .then((json) => {
          this.mapResults = json.result.items;
          console.log((this.mapResults = json.result.items));
          this.lat = this.mapResults[0].point.lat;
          this.long = this.mapResults[0].point.lon;
        });
    },
    close() {
      this.state = true;
      this.$emit("close");
    },
    loadImage(data) {
      this.img = data;
    },
    createEvents() {
      // this.state = !this.state;
      const data = {
        app_type: this.type,
        description: this.description,
        organizer_info: this.phone,
        latitude: this.lat,
        longitude: this.long,
        address: this.val,
        document_url: this.img,
        date: this.date,
        time: this.time,
      };
      if (this.getIsAuth) {
        this.$store.dispatch("createEvent", data);
      } else {
        this.$notify({
          type: "warn",
          title: "Внимание",
          text: "Создать мероприятие может только авторизованный пользователь",
          duration: 10000,
        });
      }
    },
    getTimeEmit(x) {
      this.time = x;
    },
    getDateEmit(x) {
      this.date = x;
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
  display: flex;
  align-items: center;
  padding-left: 10px;
  position: relative;
  img {
    width: 15px;
    position: absolute;
    right: 10px;
  }
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
