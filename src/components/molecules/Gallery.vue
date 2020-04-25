<template>
  <div class="Gallery">
    <button @click.prevent="change.image(0)">Botón 1</button>
    <button @click.prevent="change.image(1)">Botón 1</button>
    <button @click.prevent="change.image(2)">Botón 1</button>
    <button @click.prevent="change.image(3)">Botón 1</button>

    <img
    class="GalleryItem"
    v-for="(image, idx) in images"
    :src="image.src" 
    :alt="image.titulo"
    :key="idx"
    />
    <!-- <div
        slot="image"
        style="background-image: url(./gallery/image1.jpg)"
        data-src="./gallery/image1.jpg"
      ></div>
      <img slot="preloader" src="@/assets/loading.svg" /> -->
    <!-- <div slot="error">image load fails</div> -->
  </div>
</template>

<script>
// import VueLoadImage from "vue-load-image";

export default {
  name: "Gallery",
  mounted() {
    console.log("Galeria cargada")
  },
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
  },
  // methods: {
  //   handleChangeImage() {
  //     const randomImageNumber = Math.floor(Math.random() * 999) + 1;
  //     this.src =
  //       "./gallery/image" + randomImageNumber + ".jpg";
  //   },
  // },
  components: {
    // "vue-load-image": VueLoadImage,
  },
};
/* eslint-disable */
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
