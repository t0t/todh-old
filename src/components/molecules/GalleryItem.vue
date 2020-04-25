<template>
  <div class="GalleryItem" 
    :class="{'open': open && active}"
    @click="open = !open">
    <div class="img" :style="backgroundImage"></div>
    <div class="title">{{ item.title }}</div>
    <div class="description">{{ item.description }}</div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        open: false
      }
    },
    props: [
      'item',
      'active'
    ],
    computed: {
      backgroundImage() {
        return { 'background-image': 'url('+ require('../../assets'+ this.item.img) +')' };
      }
    }
  }
</script>

<style lang="scss">
@import "@/styles/main.scss";

  .GalleryItem {
    position: relative;
    width: 100%;
    height: 600px;
    overflow: hidden;
    transition: all .5s ease;

    &.open {
      height: 800px;
      transform: translateY(-50px);
    }

    .img {
      width: 400px;
      height: 100px;
      background-position: center;
      background-size: cover; 
    }

    .title {
      position: absolute;
      top: 50px;
      width: calc(100vw - 10%);
      height: 40px;
      background-color: $secondary;
    }

    .description {}
  }
</style>