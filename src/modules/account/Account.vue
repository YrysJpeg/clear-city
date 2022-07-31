<template>
  <div class="my-account">
    <div class="container">
      <div class="my-account-row">
        <sidebar></sidebar>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/my-data";
</style>
