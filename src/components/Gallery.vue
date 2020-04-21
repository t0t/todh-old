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
          <h4 class="ItemCaptionTitle">{{ image.titulo }}</h4>
          <small>{{ image.titulo }}</small>          
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
          titulo: "Img gallery 1"
        },
        {
          src: "./gallery/image2.jpg",
          titulo: "Img gallery 2"
        },
        {
          src: "./gallery/image3.jpg",
          titulo: "Img gallery 3"
        },
        {
          src: "./gallery/image4.jpg",
          titulo: "Img gallery 4"
        },
        {
          src: "./gallery/image5.jpg",
          titulo: "Img gallery 5"
        },
        {
          src: "./gallery/image6.jpg",
          titulo: "Img gallery 6"
        },
        {
          src: "./gallery/image7.jpg",
          titulo: "Img gallery 7"
        },
        {
          src: "./gallery/image8.jpg",
          titulo: "Img gallery 8"
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
  margin-bottom: $size / 2;
  padding: $size /4;

  @media (min-width: 750px) {
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
    height: 300px;
  }
  figure {
    margin: 0;
    background-color: $tertiary;
    background-size: cover;
  }
}
.ItemCaption {
  background-color: $light_grey;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 20%;
  padding: $size / 8;

  &Title {
    margin: 0;
    padding-bottom: $size / 8;
  }
}
</style>
