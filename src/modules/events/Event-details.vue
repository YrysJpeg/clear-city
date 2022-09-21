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
      <h3 class="notranslate">{{ $t("details.event") }}</h3>
      <section class="details-cnt">
        <div class="details-img">
          <div class="details-img-l" @click="openImage">
            <img src="../../assets/img/details/lyudi.png" alt="" />
            <h5>Запланировано</h5>
          </div>

          <div class="details-img-r" @click="openImage">
            <img src="../../assets/img/details/lyudi.png" alt="" />
            <img src="../../assets/img/details/lyudi.png" alt="" />
            <div>
              <img src="../../assets/img/details/lyudi.png" alt="" />
              <p>+2</p>
            </div>
          </div>
        </div>

        <div class="details-info-2">
          <div class="details-info-text2">
            <img src="../../assets/img/details/details-date.svg" alt="" />
            <p class="detaild-info-text">Суббота, 22 марта 2022 г.</p>
          </div>
          <div class="details-info-text2">
            <img src="../../assets/img/details/details-clock.svg" alt="" />
            <p class="detaild-info-text">14:00</p>
          </div>
          <div class="details-info-text2">
            <img src="../../assets/img/details/details-loc.svg" alt="" />
            <p class="detaild-info-text">Айтеке би, 54 (Центральный парк)</p>
          </div>
          <h4 class="notranslate">{{ $t("details.short-text") }}</h4>
          <p class="details-info-text details-info-text-2">
            Пришла весна…Это не только время пробуждения природы, но и пора
            наведения чистоты и порядка. В нашей школе стало хорошей традицией
            проводить весенние субботники... <span>Узнать больше</span>
          </p>
          <div class="details-btns notranslate">
            <button class="details-btn">{{ $t("details.help") }} (12)</button>
            <button class="details-btn details-btn--t" @click="sharePage">
              {{ $t("details.share") }}
              <img src="../../assets/img/details/share.png" alt="" />
            </button>
          </div>
        </div>
      </section>
      <section class="details-tabs">
        <ul class="notranslate">
          <li
            class="details-tabs-li"
            :class="{ 'li-checked': switcher }"
            @click="switcher = true"
          >
            {{ $t("details.main") }}
          </li>
          <li
            class="details-tabs-li"
            :class="{ 'li-checked': !switcher }"
            @click="switcher = false"
          >
            {{ $t("details.comment") }} (5)
          </li>
        </ul>
        <section class="details-gen-info details-gen-info-2" v-if="switcher">
          <div class="details-info">
            <h4 class="notranslate">{{ $t("details.org-data") }}</h4>
            <div class="details-info-user">
              <img src="../../assets/img/details/pacan.png" alt="" />
              <p>Арман</p>
            </div>
            <p class="details-info-text">
              Пожалуй, не имеет смысла объяснять, насколько почва является
              важной частью жизни человека. Большую часть еды, которой питается
              человек, приносит почва: от злаковых культур до редких видов
              фруктов и овощей.... <span>Узнать больше</span>
            </p>
            <div class="details-btns notranslate">
              <button class="details-btn">{{ $t("details.help") }} (12)</button>
              <button class="details-btn details-btn--t" @click="sharePage">
                {{ $t("details.share") }}
                <img src="../../assets/img/details/share.png" alt="" />
              </button>
            </div>
          </div>
          <div class="details-gen-info-r-2">
            <map-view width="100" height="310"></map-view>
          </div>
        </section>
        <section class="details-comments" v-if="!switcher">
          <div class="details-comments-top notranslate">
            <p>
              {{ $t("details.no-login") }},
              <a href="#">{{ $t("details.loggin") }}</a> {{ $t("details.or") }}
              <a href="#">{{ $t("details.regged") }}.</a>
            </p>
            <input type="text" :placeholder="$t('details.send-comment')" />
            <input type="button" disabled :value="$t('details.no-login')" />
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

            <button class="details-comment-btn notranslate">
              {{ $t("details.show-all") }}
            </button>
          </div>
        </section>
      </section>
      <section class="details-appeals">
        <h4 class="notranslate">{{ $t("details.copy-appeal") }}</h4>
        <div class="details-appeals-row">
          <div class="details-appeals-card details-card">
            <div class="details-card-img">
              <img src="../../assets/img/details/lyudi.png" alt="" />
              <p>Скоро</p>
            </div>
            <div class="details-card-info">
              <p class="details-card-title">Эко-субботник</p>
              <span>24.03.2022 14:53</span>
            </div>
            <p class="details-card-title">
              {{ $t("main.date-time") }}: 22 августа 2022г. 14:00
            </p>
            <p class="details-card-title">
              {{ $t("main.geo") }}: Айтеке би, 54 (Центральный парк)
            </p>
            <div class="details-card-btn notranslate">
              {{ $t("main.details") }}
            </div>
          </div>

          <div class="details-appeals-card details-card">
            <div class="details-card-img">
              <img src="../../assets/img/details/lyudi.png" alt="" />
              <p>Скоро</p>
            </div>
            <div class="details-card-info">
              <p class="details-card-title">Эко-субботник</p>
              <span>24.03.2022 14:53</span>
            </div>
            <p class="details-card-title">
              Дата и время: 22 августа 2022г. 14:00
            </p>
            <p class="details-card-title">
              Место проведения: Айтеке би, 54 (Центральный парк)
            </p>
            <div class="details-card-btn">Подробнее</div>
          </div>

          <div class="details-appeals-card details-card">
            <div class="details-card-img">
              <img src="../../assets/img/details/lyudi.png" alt="" />
              <p>Скоро</p>
            </div>
            <div class="details-card-info">
              <p class="details-card-title">Эко-субботник</p>
              <span>24.03.2022 14:53</span>
            </div>
            <p class="details-card-title">
              Дата и время: 22 августа 2022г. 14:00
            </p>
            <p class="details-card-title">
              Место проведения: Айтеке би, 54 (Центральный парк)
            </p>
            <div class="details-card-btn">Подробнее</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GoBack from "../core/back/Go-back.vue";
import MapView from "../core/map/MapView.vue";
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
  // computed: {
  //   getEventDetails() {
  //     return this.$store.getters.getEventDetail
  //   }
  // },
  // created() {
  //   this.$store.dispatch('getEventDetails', this.$route.params.id)
  // },
  methods: {
    sharePage() {
      navigator.share({
        title: "test",
        text: "chlen",
        url: "https://google.com",
      });
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
