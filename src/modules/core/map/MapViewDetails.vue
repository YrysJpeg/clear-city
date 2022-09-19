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
    lat: {
      default: "",
    },
    long: {
      default: "",
    },
  },
  data() {
    return {
      map: null,
      longs: this.long,
      lats: this.lat
    };
  },
  mounted() {
    this.$refs.cap.style.width = this.width + "%";
    this.$refs.cap.style.height = this.height + "px";
      this.map = new DG.map(this.$refs.cap, {
      center: [this.lats, this.longs],
      zoom: 13,
      minZoom: 10,
      fullscreenControl: false,
    });
    DG.marker([this.lats, this.longs], {}).addTo(this.map)
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
