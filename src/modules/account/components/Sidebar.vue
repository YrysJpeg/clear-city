<template>
  <div :class="{ 'active-menu': menuState }" class="bar">
    <aside class="my-account-bar notranslate">
      <section class="my-account-user">
        <img src="../../../assets/img/telka.png" alt="" />
        <p>Айгерим Сабитова</p>
      </section>

      <nav class="my-account-nav">
        <ul>
          <li>{{ $t("account.my-acc") }}</li>
          <li class="active">{{ $t("account.my-appeals") }}</li>
          <li>{{ $t("account.my-events") }}</li>
          <li>{{ $t("account.my-help") }}</li>
          <li>{{ $t("account.logut") }}</li>
        </ul>
      </nav>
    </aside>
    <div
      :class="{ 'show-menu__active': menuState }"
      class="show-menu"
      @click="menuState = !menuState"
    >
      <img src="../../../assets/img/arrow.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuState: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/css/my-data";
.show-menu {
  z-index: 9999;
  position: fixed;
  bottom: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ebebeb;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-180deg);
  transition: 0.5s;
}
.show-menu__active {
  transform: rotate(0deg);
}
.active-menu {
  margin-left: 0% !important;
  transition: 0.5s;
}
</style>
