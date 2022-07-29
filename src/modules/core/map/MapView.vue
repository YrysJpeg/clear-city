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
  },
  data() {
    return {
      map: null,
    };
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
    DG.marker([49.944428 ,82.623576], {}).addTo(this.map);
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
