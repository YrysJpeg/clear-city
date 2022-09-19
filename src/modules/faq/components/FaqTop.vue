<template>
  <div class="faq-top">
    <div class="faq-top__left">
      <img src="../../../assets/img/faq.svg" alt="" />
    </div>
    <div class="faq-top__right">
      <h3 class="faq-top__title no-translate">{{ $t("faq.title") }}</h3>
      <div class="card" v-for="item in items" :key="item.id">
        <div class="card-header" @click.prevent="toggleExpand(item)">
          <span>{{ item.title }}</span>
          <div class="icon" :class="{ 'arrow-transform': item.isExpand }">
            <img src="../../../assets/img/accrd.svg" alt="" />
          </div>
        </div>

        <div
          class="card-body"
          :ref="'content' + item.id"
          :style="[item.isExpand ? { height: item.computedHeight } : {}]"
        >
          <hr />
          <div class="card-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Как подать обращение",
          content: "На странице обращений нажмите на кнопку 'создать обращение'. После заполните всю необходимую информацию и нажать на кнопку создать обращение. В скором времени обращение отобразиться на сайте",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 2,
          title: "Как я могу отследить исполнение обращения",
          content:
            "На странице конкретного обращения вы можете видеть статус этого обращения",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 3,
          title: "Могу ли я поддержать уже поданное обращение",
          content:
            "Да, можете. На странице обращения, которое вы хотите поддержать есть кнопка 'Поддержка'",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 4,
          title: "Видят ли пользователи мои данные",
          content:
            "Пользователи могу видеть данные организатора мероприятий и обращений для связи с инициатором. Во всех остальных случаях ваши данные не доступны.",
          isExpand: false,
          computedHeight: 0,
        },
        {
          id: 5,
          title: "Могу ли я подать обращение не по теме мусора в городе",
          content:
            "Нет, сайт предполагает только обращения по теме вывоза и утилизации ТБО , несанкционированных свалок на территориях г. Усть-Каменогорск. В дальнейшем география, возможно, будет расширена.",
          isExpand: false,
          computedHeight: 0,
        },
      ],
    };
  },
  methods: {
    toggleExpand(item) {
      item.isExpand = !item.isExpand;
    },
    getComputedHeight() {
      this.items.forEach((item) => {
        let content = this.$refs["content" + item.id][0];

        content.style.height = "auto";
        content.style.position = "absolute";
        content.style.visibility = "hidden";
        content.style.display = "block";

        var height = getComputedStyle(content).height;
        item.computedHeight = height;

        content.style.height = 0;
        content.style.position = null;
        content.style.visibility = null;
        content.style.display = null;
      });
    },
  },
  mounted() {
    this.getComputedHeight();
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 80%;
  height: auto;
  display: block;
  position: relative;
  margin: 8px 0;
  padding: 0 10px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

.card-header,
.card-content {
  margin: 10px 0;
}

.card-header {
  cursor: pointer;
}

.card-header span {
  font-weight: 600;
}

.card-body {
  height: 0;
  overflow: hidden;
  transition: 0.3s;
}

.icon {
  float: right;
}

hr {
  margin: 0;
  height: 1px;
  display: block;
  border-width: 0;
  border-top: 1px solid #aaa;
}
@import "../../../assets/css/faq";
</style>
