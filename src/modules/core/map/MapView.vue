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
    };
  },
  computed: {
    getAllApplications() {
      return this.$store.getters.getAllApplications;
    },
  },
  mounted() {
    this.$refs.cap.style.width = this.width + "%";
    this.$refs.cap.style.height = this.height + "px";
    if (this.long && this.lat) {
      this.map = new DG.map(this.$refs.cap, {
        center: [this.long, this.lat],
        zoom: 13,
        minZoom: 10,
        fullscreenControl: false,
      });
      DG.marker([this.long, this.lat], {}).addTo(this.map);
    } else {
      this.map = new DG.map(this.$refs.cap, {
        center: [49.949531, 82.617712],
        zoom: 13,
        minZoom: 10,
        fullscreenControl: false,
      });
      DG.marker([49.949531, 82.623576], {}).addTo(this.map);
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
