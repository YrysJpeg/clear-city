<template>
  <div class="form">
    <div class="btns">
      <button :class="{ active: state }" @click="state = true">Дата</button>
      <button :class="{ active: !state }" @click="state = false">Время</button>
    </div>
    <div class="pickers">
      <v-time-picker
        @change="emitTime"
        format="24hr"
        v-model="time"
        v-if="!state"
      ></v-time-picker>
      <v-date-picker
        @change="emitDate"
        v-model="date"
        class="mt-4"
        v-if="state"
      ></v-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
      time: "",
      state: true,
    };
  },
  methods: {
    emitTime() {
      this.$emit("time", this.time);
    },
    emitDate() {
      this.$emit("date", this.date);
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  top: -20px;
  max-width: 290px;
}
.btns {
  max-width: 290px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 14px;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #ffffff;

  button {
    background: #11ae55;
    width: 100%;
    border: none !important;
    height: 35px;
  }
  .active {
    background: #6dcf97;
  }
}
@media (max-width: 768px) {
  .form {
    margin: auto;
  }
}
</style>
