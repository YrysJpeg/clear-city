<template>
  <div class="my-account">
    <div class="container">
      <div class="my-account-row">
        <section class="my-account-content">
          <h3 class="notranslate">{{ $t("account.my-events") }}</h3>
          <form action="#" class="notranslate">
            <input type="text" :placeholder="$t('main.find')" />
            <input type="button" :value="$t('main.search')" />
          </form>

          <div class="my-account-fil notranslate">
            <p>{{ $t("account.sorted") }}:</p>

            <select id="my-account-date">
              <option value="0">{{ $t("account.date") }}</option>
              <option>Новые</option>
              <option>Старые</option>
            </select>

            <select id="my-account-status">
              <option value="0">{{ $t("account.status") }}</option>
              <option>Скоро</option>
              <option>Завтра</option>
              <option>Прошедшие</option>
            </select>
          </div>

          <div class="my-account-inner">
            <div class="empty" v-if="getMyEvent.length == 0">
              <img src="../../assets/img/Group220.png" alt="" />
              <p>
                {{ $t("account.event-text") }}
                <a href="#">{{ $t("account.create-event") }}</a>
              </p>
            </div>

            <div class="cnt" v-if="getMyEvent.length !== 0">
              <figure
                class="my-account-card card"
                v-for="(item, index) of getMyEvent"
                :key="index"
              >
                <div class="card-left">
                  <img
                    class="card-img"
                    src="../../assets/img/menty.png"
                    alt=""
                  />
                  <figcaption class="card-status">Запланировано</figcaption>
                </div>

                <div class="card-right">
                  <span class="card-num">№UST46258391</span>
                  <p class="card-p">Тип: Эко-субботник</p>
                  <p class="card-p">
                    Дата и время: {{ item.date }} {{ item.time }}
                  </p>
                  <p class="card-p">Место проведения: {{ item.address }}</p>
                  <p class="card-p">Дата создания: {{ item.created_date }}</p>

                  <div class="card-btns notranslate">
                    <button @click="appealDetails(item)" class="card-btn">
                      {{ $t("main.details") }}
                    </button>
                    <button class="card-btn card-btn--s">
                      {{ $t("account.edit") }}
                    </button>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getMyEvent() {
      return this.$store.getters.getMyEvents;
    },
  },
  created() {
    this.$store.dispatch("getMyEvent");
  },
  methods: {
    appealDetails(item) {
      this.$router.push({ name: "event-details", params: { id: item.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/my-data";
</style>
