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
          <option value="свалка">Свалка</option>
          <option value="крупногабаритные отходы">
            Крупногабаритные отходы
          </option>
          <option value="переполненные контейнеры">
            Переполненные контейнеры
          </option>
          <option value="переполненные урны">переполненные урны</option>
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
  computed: {
    getIsAuth() {
      return this.$store.getters.getIsAuth
    }
  },
  methods: {
    maps() {
      fetch(
        `https://catalog.api.2gis.com/3.0/suggests?q=${this.val}&type=street,building,adm_div.living_area&fields=items.point&location=82.617712,49.949531&key=rurbbn3446`
      )
        .then((res) => res.json())
        .then((json) => {
          this.mapResults = json.result.items;
          console.log(this.mapResults = json.result.items);
          this.lat = this.mapResults[0].point.lat
          this.long = this.mapResults[0].point.lon
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
        app_type: this.type,
        message: "камеру убирай бля1",
        first_name: this.name,
        last_name: this.lastname,
        patronymic: "none",
        phone_number: this.phone,
        latitude: this.lat,
        longitude: this.long,
        address: this.val,
        photo_url: this.img
      };
      console.log(data);
      if (this.getIsAuth) {
        this.$store.dispatch("createAppealsAuth", data)
          .then(res => {
            let data = {
              res: res.data.id,
              formData: this.img
            }
            console.log(data);
            this.$store.dispatch('uploadPhoto', data)
            this.state = !this.state
          })
          .catch(e => {
            console.log(e);
          })
      } else {
        this.$store.dispatch("createAppeals", data)
          .then(res => {
            let data = {
              res: res.data.id,
              formData: this.img
            }
            this.$store.dispatch('uploadPhoto', data)
            this.state = !this.state
          })
          .catch(e => {
            console.log(e);
          })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/appeals";
</style>
