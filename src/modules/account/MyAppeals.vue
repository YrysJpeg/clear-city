<template>
  <div class="my-account">
    <div class="container">
      <div class="my-account-row">
        <section class="my-account-content">
          <h3 class="notranslate">{{ $t("account.my-appeals") }}</h3>
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
            <div class="empty" v-if="getMyAppeal.length == 0">
              <img src="../../assets/img/Group220.png" alt="" />
              <p>
                {{ $t("account.appeal-text") }}
                <a href="#">{{ $t("account.create-appeal") }}</a>
              </p>
            </div>
            <div class="cnt" v-if="getMyAppeal.length !== 0">
              <figure class="my-account-card card" v-for="(item, index) of getMyAppeal" :key="index">
                <div class="card-left">
                  <img
                    class="card-img"
                    :src="item.photo_url"
                    alt=""
                  />
                  <figcaption class="card-status">{{ item.app_status }}</figcaption>
                </div>

                <div class="card-right">
                  <span class="card-num">№UST46258391</span>
                  <p class="card-p">Тип: {{ item.app_type }}</p>
                  <p class="card-p">Адрес: {{ item.address }}</p>
                  <p class="card-p">Дата создания: {{ item.created_date }}</p>

                  <div class="card-btns notranslate">
                    <button @click="appealDetails(item)" class="card-btn">{{ $t("main.details") }}</button>
                    <button class="card-btn card-btn--s">
                      {{ $t("account.edit-appeal") }}
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
  data() {
    return {
      empty: false,
    };
  },
  computed: {
    getMyAppeal() {
      return this.$store.getters.getMyAppeals
    }
  },
  created() {
    this.$store.dispatch('getMyAppeal')
  },
  methods: {
    appealDetails(item) {
      this.$router.push({name: 'appeal-details', params: { id: item.id }})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/my-data";
</style>
