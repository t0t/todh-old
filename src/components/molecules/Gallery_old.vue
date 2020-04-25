<template>
  <main class="Gallery">
    <figure
      class="GalleryItem"
      v-for="(image, idx) in images"
      :src="image.src"
      :alt="image.titulo"
      :key="idx"
      :style="{ backgroundImage: `url(${image.src})` }"
    >
      <figcaption class="ItemCaption">
        <small class="ItemCaptionTitle">{{ image.titulo }}</small>
      </figcaption>
    </figure>
  </main>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      default: () => [
        {
          src: "./gallery/image1.jpg",
          titulo: "091120"
        },
        {
          src: "./gallery/image2.jpg",
          titulo: "240520"
        },
        {
          src: "./gallery/image3.jpg",
          titulo: "191120"
        },
        {
          src: "./gallery/image4.jpg",
          titulo: "011120"
        },
        {
          src: "./gallery/image5.jpg",
          titulo: "011120"
        },
        {
          src: "./gallery/image6.jpg",
          titulo: "041120"
        },
        {
          src: "./gallery/image7.jpg",
          titulo: "011120"
        },
        {
          src: "./gallery/image8.jpg",
          titulo: "231120"
        }
      ]
    }
  }
};/* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Gallery {
  @include media(s3) {
    display: flex;
    flex-flow: wrap;
    flex-direction: row-reverse;
    order: 2;
    &:last-child {
      order: 1;
    }
  }
  &Item {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-grow: 1;
    flex-basis: 400px;
    height: $h7;
  }
  figure { //bg
    background-color: $tertiary;
    background-size: cover;
  }
}
.ItemCaption {
  text-align: center;
  width: $h4;
  padding-top: $h0;
  padding-left: $h0;
  padding-right: $h0;
  background-color: $light_grey;
  &Title {
    padding-bottom: $h0;
    margin-left: 0;
  }
}
</style>
