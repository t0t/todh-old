<template>
  <section class="Gallery">
    <img
      v-for="image in images"
      :src="image.src"
      :alt="image.text"
      :key="image"
    />
  </section>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      default: () => [
        {
          src: "./gallery/img1.jpg",
          text: "Img gallery 1"
        },
        {
          src: "./gallery/img2.jpg",
          text: "Img gallery 2"
        },
        {
          src: "./gallery/img3.jpg",
          text: "Img gallery 3"
        },
        {
          src: "./gallery/img4.jpg",
          text: "Img gallery 4"
        },
        {
          src: "./gallery/img5.jpg",
          text: "Img gallery 5"
        },
        {
          src: "./gallery/img6.jpg",
          text: "Img gallery 6"
        }
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Gallery {
  margin-bottom: $size / 2;
  padding: $size / 2;
  background-color: $tertiary;
}
.Gallery img {
  max-width: 500px;
}
</style>
