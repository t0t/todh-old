<template>
  <div class="Gallery">
    <button @click="console.log();">Botón</button>

    <vue-load-image>
      <div
        slot="image"
        style="background-image: url(./gallery/image1.jpg)"
        data-src="./gallery/image1.jpg"
      ></div>
      <img slot="preloader" src="@/assets/loading.svg" />
      <div slot="error">image load fails</div>
    </vue-load-image>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  name: "Gallery",
  data: () => ({
    src: "./gallery/",
  }),
  methods: {
    handleChangeImage() {
      const randomImageNumber = Math.floor(Math.random() * 999) + 1;
      this.src =
        "./gallery/image" + randomImageNumber + ".jpg";
    },
  },
  components: {
    "vue-load-image": VueLoadImage,
  },
};
/* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Gallery {
  height: 100vh;
  background-color: #fff;
}
button {
  background-color: red;
  width: 500px;
  height: 50px;
}
.vue-load-image div {
  height: 400px;
  width: 50%;
}
</style>
