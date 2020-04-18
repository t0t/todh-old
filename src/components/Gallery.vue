<template>
  <section class="Gallery">
    <h1 class="GalleryTitle">{{ msg }}</h1>
    <img alt="Img gallery" src="../assets/img1.jpg" />
    <img alt="Img gallery" src="../assets/img2.jpg" />
    <img alt="Img gallery" src="../assets/img3.jpg" />
    <img alt="Img gallery" src="../assets/img4.jpg" />
    <img alt="Img gallery" src="../assets/img5.jpg" />
    <img alt="Img gallery" src="../assets/img6.jpg" />
  </section>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Gallery {
  margin-bottom: $size / 2;
  padding: $size / 2;
  background-color: $white;

  &Title {
    margin-top: 0;
  }
}
.Gallery img {
  max-width: 300px;
}
</style>
