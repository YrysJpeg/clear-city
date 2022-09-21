<template>
  <div class="appeal-edit">
    <div class="container">
      <h3 class="appeal-edit__title">Редактирование обращения №UST46258391</h3>
      <h4>Данные организатора</h4>
      <div class="appeal-edit__item">
        <p>{{ $t("forms.name") }}</p>
        <input type="text" v-model="getApplicationData.first_name" />
        <img src="../../assets/img/pen.svg" alt="" />
      </div>
      <div class="appeal-edit__item">
        <p>{{ $t("forms.lastname") }}</p>
        <input type="text" v-model="getApplicationData.last_name" />
        <img src="../../assets/img/pen.svg" alt="" />
      </div>
      <div class="appeal-edit__item">
        <p>{{ $t("forms.phone") }}</p>
        <input
          type="text"
          placeholder="+7"
          v-mask="'+7 ### ### ## ##'"
          v-model="getApplicationData.phone_number"
        />
        <img src="../../assets/img/pen.svg" alt="" />
      </div>
      <h4>О мероприятии</h4>
      <div class="appeal-edit__item">
        <p>{{ $t("forms.address") }}</p>
        <input
          list="maplist"
          type="text"
          v-model="getApplicationData.address"
          @input="maps"
        />
        <img src="../../assets/img/pen.svg" alt="" />
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
      <div class="appeal-edit__item">
        <p>{{ $t("forms.type") }}</p>
        <input
          type="text"
          name="example"
          v-model="getApplicationData.app_type"
          list="exampleList"
        />
        <datalist id="exampleList">
          <option value="свалка">Свалка</option>
          <option value="крупногабаритные отходы">
            Крупногабаритные отходы
          </option>
          <option value="переполненные контейнеры">
            Переполненные контейнеры
          </option>
          <option value="переполненные урны ">переполненные урны</option>
        </datalist>
      </div>
      <div class="appeal-edit__item">
        <file-input @image="loadImage"></file-input>
      </div>
      <button>{{ $t("forms.create-appeals") }}</button>
    </div>
  </div>
</template>

<script>
import FileInput from "../core/form/FileInput.vue";
export default {
  components: {
    FileInput,
  },
  data() {
    return {
      val: "",
      mapResults: "",
      type: "",
      img: "",
      lat: "",
      long: "",
      phone: "",
      name: "",
      lastname: "",
      message: "",
    };
  },
  computed: {
    getApplicationData() {
      return this.$store.getters.getApplicationDetails;
    },
  },
  created() {
    this.$store.dispatch("getApplicationObject", this.$route.params.id);
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
    loadImage(data) {
      this.img = data;
      console.log(this.img);
    },
  },
};
</script>

<style lang="scss" scoped>
.appeal-edit {
  padding-top: 31px;
  padding-left: 33px;
  overflow-y: scroll;
  padding-bottom: 100px;
  h4 {
    font-family: "Roboto";
    font-weight: 500;
    font-size: 25px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 26px;
  }
  h3 {
    font-family: "Roboto";
    font-weight: 600;
    font-size: 30px;
    line-height: 100%;
    color: #000000;
    margin-bottom: 31px;
  }
  &__item {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #696969;
    margin-bottom: 26px;
    position: relative;

    input {
      // max-width: 288px;
      height: 48px;
      width: 100%;
      background: #f6f6f6;
      border-radius: 10px;
      box-sizing: border-box;
      padding-left: 20px;
    }
    img {
      position: absolute;
      right: 20px;
      top: 30px;
    }
  }

  button {
    width: 255px;
    height: 48px;
    background: #11ae55;
    border-radius: 10px;

    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    color: #ffffff;
  }
}
@media (max-width: 768px) {
  .appeal-edit {
    margin: auto;
    h3 {
      text-align: center;
      font-size: 22px;
    }
    &__item {
      input {
        max-width: 100%;
      }
    }
  }
}
</style>
