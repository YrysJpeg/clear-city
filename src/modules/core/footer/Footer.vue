<template>
  <footer class="footer">
    <div class="container notranslate">
      <router-link to="/">
        <img src="../../../assets/img/logo-footer.svg" alt="" />
      </router-link>
      <nav class="footer-nav">
        <ul>
          <li>
            <router-link to="/about">{{ $t("header.about") }}</router-link>
          </li>
          <li>
            <router-link to="/faq">{{ $t("header.quest") }}</router-link>
          </li>
          <!-- <li>
            <router-link to>{{ $t("header.help") }}</router-link>
          </li> -->
        </ul>
      </nav>
      <div class="social">
        <p>{{ $t("header.follow") }}</p>
        <div class="social-icons">
          <a href="https://www.instagram.com/emir_ecofond/ "
            ><img src="../../../assets/img/icon-instagram.svg" alt=""
          /></a>
        </div>
      </div>
      <div class="footer-nav-contact">
        <router-link to>{{ $t("header.contacts") }}</router-link>
        <a href="mailto:emir.fond@gmail.com">Email: emir.fond@gmail.com</a>
        <a href="tel:77051730813">Телефон: +77051730813</a>
      </div>
    </div>
    <div class="container develope">
      Разработка и поддержка <a href="https://setdata.kz/">setdata.kz</a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../.././../assets/css/footer";
</style>
