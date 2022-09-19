<template>
  <div>
    <div class="map" ref="cap"></div>
  </div>
</template>

<script>
import DG from "2gis-maps";
export default {
  props: {
    width: {
      default: 400,
    },
    height: {
      default: 400,
    },
    appeals: null
  },
  data() {
    return {
      map: null,
    }
  },
  mounted() {
    this.$refs.cap.style.width = this.width + "%";
    this.$refs.cap.style.height = this.height + "px";
    this.map = new DG.map(this.$refs.cap, {
        center: [49.949531, 82.617712],
        zoom: 13,
        minZoom: 10,
        fullscreenControl: false,
      });
      for (let item of this.appeals) {
        DG.marker([item.latitude, item.longitude], {}).addTo(this.map).bindPopup(`
          <a
            style="color:#fff;"
            href="/appeal-details/${item.id}"
            class="details notranslate"
            >${item.address}</a>
        `);
      }
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  },
};
</script>

<style lang="scss" scoped>
.map {
  border-radius: 10px;
}
</style>
