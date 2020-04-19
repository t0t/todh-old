<template>
  <section class="Gallery">
    <h1 class="GalleryTitle">{{ msg }}</h1>
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
    msg: String,
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
  background-color: $white;

  &Title {
    margin-top: 0;
  }
}
.Gallery img {
  max-width: 300px;
}
</style>
