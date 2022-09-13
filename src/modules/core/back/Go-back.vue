<template>
  <div>
    <button @click="goMain">
        <img src="../../../assets/img/arrow.png" alt=""> Вернуться на главную
    </button>
  </div>
</template>

<script>
export default {
    methods: {
        goMain() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    display: flex;
    align-items: center;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #000000;
    img {
        margin-right: 10px;
    }
}
@media (max-width: 1040px) {
    button {
        margin-top: 30px;
    }
}
</style>