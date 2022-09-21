<template>
  <div class="file">
    <div class="file-zone">
      <div class="file-item" v-for="(item, index) in images" :key="index">
        <img
          ref="close"
          class="close"
          src="../../../assets/img/close-imgsvg.svg"
          alt=""
          @click="deleteImg(index)"
        />
        <img class="inner" :src="item" alt="" />
      </div>
    </div>
    <label for="file" @drop="onFileChange">
      <div class="file-info">
        <img src="../../../assets/img/icon-photo.svg" alt="" />
        <p>Перетащите сюда или <span>загрузите фото</span></p>
      </div>
    </label>
    <input
      @change="onFileChange"
      id="file"
      type="file"
      accept="image/*"
      multiple
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      files: "",
    };
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files;
      const files_count = files.length;
      const fileArr = [];
      for (let i = 0; i < files_count; i++) {
        const reader = new FileReader();
        reader.onload = function (e) {
          fileArr.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }

      this.images = fileArr;

      this.files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append("file", file);
      }
      console.log(formData);

      this.$emit("image", formData);
    },
    deleteImg(index) {
      this.images.splice(index, 1);
      this.$emit("image", this.images);
    },
  },
};
</script>

<style lang="scss" scoped>
#file {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
  visibility: hidden;
}
.file {
  position: relative;
  padding: 10px;
  border: 1px dashed #787878;
  border-radius: 10px;
  display: block;

  &-info {
    text-align: center;
    p {
      max-width: 175px;
      width: 100%;
      margin: auto;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #989898;
    }
  }

  &-zone {
    display: flex;
    flex-wrap: wrap;
  }

  &-item {
    width: 145px;
    height: 95px;
    border: 1px solid rgba(128, 128, 128, 0.445);
    border-radius: 10px;
    position: relative;
    margin-right: 10px;
    margin-bottom: 10px;

    img {
      text-align: left !important;
      object-fit: cover;
    }

    .inner {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .close {
      position: absolute;
      right: -5px;
      top: -5px;
      z-index: 1;
    }
  }
}
</style>
