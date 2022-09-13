<template>
  <div class="details">
    <div class="open-image" v-if="imageState">
      <button class="close" @click="imageState = !imageState">
        <img src="../../assets/img/close.svg" alt="" />
      </button>
      <button class="prev" @click="prevImage"></button>
      <img :src="imageSrc" alt="" />
      <button class="next" @click="nextImage"></button>
    </div>
    <div class="container">
      <go-back></go-back>
      <h3 class="notranslate">{{ $t("details.appeal") }} №UST46258391</h3>
      <section class="details-cnt">
        <div class="details-img">
          <div class="details-img-l" @click="openImage">
            <img :src="getApplicationData.photo_url" alt="" />
            <h5>Запланировано</h5>
          </div>

          <div class="details-img-r" @click="openImage">
            <img src="../../assets/img/details/menty.png" alt="" />
            <img src="../../assets/img/details/menty.png" alt="" />
            <div>
              <img src="../../assets/img/details/menty.png" alt="" />
              <p>+2</p>
            </div>
          </div>
        </div>

        <div class="details-info">
          <div class="details-info-user">
            <img src="../../assets/img/details/pacan.png" alt="" />
            <p>{{ getApplicationData.first_name }}</p>
          </div>
          <p class="details-info-text">
            {{ getApplicationData.message }}
          </p>
          <div class="details-btns">
            <button class="details-btn">{{ $t("details.help") }} (12)</button>
            <button
              class="details-btn details-btn--t notranslate"
              @click="sharePage"
            >
              {{ $t("details.share") }}
              <img src="../../assets/img/details/share.png" alt="" />
            </button>
          </div>
        </div>
      </section>
      <section class="details-tabs">
        <ul>
          <li
            class="details-tabs-li notranslate"
            :class="{ 'li-checked': switcher }"
            @click="switcher = true"
          >
            {{ $t("details.main") }}
          </li>
          <li
            class="details-tabs-li notranslate"
            :class="{ 'li-checked': !switcher }"
            @click="switcher = false"
          >
            {{ $t("details.comment") }} (5)
          </li>
        </ul>
        <section class="details-gen-info" v-if="switcher">
          <div class="details-gen-info-l">
            <div
              class="details-gen-info-progress"
              :class="{
                'details-gen-info-progress-active': checkStatusStep >= 1,
              }"
            >
              <div class="details-gen-info-circle">
                <div></div>
              </div>
              <p
                class="details-gen-info-title notranslate"
                :class="{ 'info-title-active': checkStatusStep >= 1 }"
              >
                {{ $t("details.check") }}
              </p>
            </div>

            <div
              class="details-gen-info-progress"
              :class="{
                'details-gen-info-progress-active': checkStatusStep >= 2,
              }"
            >
              <div class="details-gen-info-circle">
                <div></div>
              </div>
              <p
                class="details-gen-info-title notranslate"
                :class="{ 'info-title-active': checkStatusStep >= 2 }"
              >
                {{ $t("details.reg") }}
              </p>
            </div>

            <div
              class="details-gen-info-progress"
              :class="{
                'details-gen-info-progress-active': checkStatusStep >= 3,
              }"
            >
              <div class="details-gen-info-circle">
                <div></div>
              </div>
              <p
                class="details-gen-info-title notranslate"
                :class="{ 'info-title-active': checkStatusStep >= 3 }"
              >
                {{ $t("main.in-progress") }}
              </p>
            </div>

            <div
              class="details-gen-info-progress"
              :class="{
                'details-gen-info-progress-active': checkStatusStep >= 4,
              }"
            >
              <div class="details-gen-info-circle">
                <div></div>
              </div>
              <p
                class="details-gen-info-title notranslate"
                :class="{ 'info-title-active': checkStatusStep >= 4 }"
              >
                {{ $t("main.done") }}
              </p>
            </div>
          </div>
          <div class="details-gen-info-r">
            <map-view
              :lat="getApplicationData.latitude"
              :long="getApplicationData.longitude"
              width="100"
              height="280"
            ></map-view>
          </div>
        </section>
        <section class="details-comments" v-if="!switcher">
          <div class="details-comments-top notranslate">
            <p v-if="!getIsAuth">
              {{ $t("details.no-login") }}
              <a href="#">{{ $t("details.loggin") }}</a> {{ $t("details.or") }}
              <a href="#">{{ $t("details.regged") }}.</a>
            </p>
            <input type="text" :placeholder="$t('details.send-comment')" />
            <input type="button" :disabled="!getIsAuth" :value="$t('forms.send')" />
          </div>
          <div class="details-comments-mid">
            <div class="details-comment">
              <div class="details-comment-user">
                <img src="../../assets/img/details/telka.png" alt="" />
                <p>Зарина</p>
                <span>22.04.2022 14:53</span>
              </div>
              <p class="details-comment-text">
                Пожалуй, не имеет смысла объяснять, насколько почва является
                важной частью жизни человека. Большую часть еды, которой
                питается человек, чтобы так продолжалось и дальше, необходимо
                поддерживать состояние грунта на должном уровне для...
                <span>Узнать больше</span>
              </p>
            </div>

            <div class="details-comment">
              <div class="details-comment-user">
                <img src="../../assets/img/details/telka.png" alt="" />
                <p>Зарина</p>
                <span>22.04.2022 14:53</span>
              </div>
              <p class="details-comment-text">
                Пожалуй, не имеет смысла объяснять, насколько почва является
                важной частью жизни человека. Большую часть еды, которой
                питается человек, чтобы так продолжалось и дальше, необходимо
                поддерживать состояние грунта на должном уровне для...
                <span>Узнать больше</span>
              </p>
            </div>

            <button class="details-comment-btn">Показать все</button>
          </div>
        </section>
      </section>
      <section class="details-appeals">
        <h4 class="notranslate">{{ $t("details.copy-appeal") }}</h4>
        <div class="details-appeals-row">
          <div class="details-appeals-card details-card" v-for="(item, index) of getSimilarApp" :key="index">
            <div class="details-card-img">
              <img :src="item.photo_url" alt="" v-if="item.photo_url" />
              <img src="../../assets/img/Rectangle 11.png" alt="" v-else />
              <p>Скоро</p>
            </div>
            <div class="details-card-info">
              <p class="details-card-title"></p>
              <span>{{ item.created_date }}</span>
            </div>
            <p class="details-card-title">
              {{ $t("main.type") }}: {{ item.app_type }}
            </p>
            <p class="details-card-title">
              {{ $t("main.address") }}: {{ item.address }}
            </p>
            <button @click="goPage(item)" class="details-card-btn notranslate">
              {{ $t("main.details") }}
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import MapView from "../core/map/MapView.vue";
import GoBack from '../core/back/Go-back.vue'
export default {
  components: { MapView, GoBack },
  data() {
    return {
      switcher: true,
      image: [
        "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349",
        "https://the-tech.kz/wp-content/uploads/2021/07/SONATA-hero-option1-764A5360-edit.jpg",
        "https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg",
        "https://static.tcimg.net/vehicles/oem/05dde861dc976504/2023-Acura-Integra.jpg",
        "https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg",
      ],
      imageState: false,
      imageIndex: 0,
      imageSrc: "",
    };
  },
  created() {
    this.$store.dispatch("getApplicationObject", this.$route.params.id);
  },
  mounted() {
    this.$store.dispatch('similarApp', this.getApplicationData.app_type)
  },
  computed: {
    getApplicationData() {
      return this.$store.getters.getApplicationDetails;
    },
    checkStatusStep() {
      if (this.getApplicationData.app_status == "ожидание") {
        return 1;
      } else if (this.getApplicationData.app_status == "2") {
        return 2;
      } else if (this.getApplicationData.app_status == "3") {
        return 3;
      } else {
        return 4;
      }
    },
    getSimilarApp() {
      return this.$store.getters.getSimilarApp
    },
    getIsAuth() {
      return this.$store.getters.getIsAuth
    }
  },
  methods: {
    sharePage() {
      navigator.share({
        title: "test",
        text: "chlen",
        url: "https://google.com",
      });
    },
    goPage(item) {
      this.$router.push({name: 'appeal-details', params: { id: item.id }})
    },
    openImage() {
      this.imageState = true;
      this.imageSrc = this.image[this.imageIndex];
    },
    close() {
      this.imageState = !this.imageState;
      this.imageIndex = 0;
    },
    nextImage() {
      this.imageIndex++;
      if (this.imageIndex > this.image.length - 1) this.imageIndex = 0;
      this.imageSrc = this.image[this.imageIndex];
    },
    prevImage() {
      this.imageIndex--;
      if (this.imageIndex < 0) this.imageIndex = this.image.length - 1;
      this.imageSrc = this.image[this.imageIndex];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/event-detauls";
.open-image {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0);
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .prev,
  .next {
    background: rgba(255, 255, 255, 0.153);
    width: 10%;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 30px;
    left: 50%;
    width: 50px;
    height: 50px;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);

    img {
      width: 100%;
      height: 100%;
    }
  }
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
}
</style>
