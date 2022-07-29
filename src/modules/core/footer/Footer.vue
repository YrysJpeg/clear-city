<template>
  <footer class="footer">
    <div class="container notranslate">
      <router-link to="/">
        <img src="../../../assets/img/logo-footer.svg" alt="" />
      </router-link>
      <nav class="footer-nav">
        <ul>
          <li>
            <router-link to>{{ $t("header.contacts") }}</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t("header.about") }}</router-link>
          </li>
          <li>
            <router-link to="/faq">{{ $t("header.quest") }}</router-link>
          </li>
          <li>
            <router-link to>{{ $t("header.help") }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="social">
        <p>{{ $t("header.follow") }}</p>
        <div class="social-icons">
          <a href="#"
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
          <a href="#"
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
          <a href="#"
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
          <a href="#"
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
          <a href="#"
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../.././../assets/css/footer";
</style>
