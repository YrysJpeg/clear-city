<template>
  <div class="my-account">
    <div class="container">
      <div class="my-account-row">
        <section class="my-account-content">
          <h3>Мои посещения</h3>
          <form action="#">
            <input type="text" placeholder="Поиск" />
            <input type="button" value="Найти" />
          </form>

          <div class="my-account-fil">
            <p>Сортировать по:</p>

            <select id="my-account-date">
              <option value="0">Дата создания</option>
              <option>Новые</option>
              <option>Старые</option>
            </select>

            <select id="my-account-status">
              <option value="0">Статус</option>
              <option>Скоро</option>
              <option>Завтра</option>
              <option>Прошедшие</option>
            </select>
          </div>

          <div class="my-account-inner">
            <div class="empty" v-if="empty">
              <img src="../../assets/img/Group220.png" alt="" />
              <p>
                Посещенные вами мероприятия появятся здесь. Чтобы перейти
                <a href="#">Список мероприятии</a>
              </p>
            </div>

            <div class="cnt" v-if="!empty">
              <figure class="my-account-card card">
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
                  <p class="card-p">Тип: Скопление мусора</p>
                  <p class="card-p">Адрес: Айтеке би, 54</p>
                  <p class="card-p">Дата создания: 22.10.2022 14:54</p>

                  <div class="card-btns">
                    <button class="card-btn">Подробнее</button>
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
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/my-data";
</style>
