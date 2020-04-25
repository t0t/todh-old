<template>
  <section>
    <ul class="Gallery" :style="listLength">
    <li 
      v-for="(obra, index) in obras" 
      :key="index" 
      :style="listPosition"
    >
      <GalleryItem :item="obra" :active="index == currentIndex" />
    </li>
  </ul>
  </section>
</template>

<script>
import GalleryItem from "@/components/molecules/GalleryItem";

export default {
  name: "Gallery",
  data: () => {
    return {
      touch: {
        startX: 0,
        endX: 0,
      },
      counter: 0,
      show: true
    };
  },
  computed: {
    obras() {
      return this.$store.getters.obras;
    },
    currentIndex() {
      return this.$store.getters.currentIndex;
    },
    listLength() {
      return { width: this.obras.length * 300 + "px" };
    },
    listPosition() {
      return { transform: "translateX(-" + this.currentIndex * 100 + "%)" };
    }
  },
  components: {
    GalleryItem,
  },
  methods: {
    touchstart(event) {
      this.touch.startX = event.touches[0].clientX;
      this.touch.endX = 0;
    },
    touchmove(event) {
      this.touch.endX = event.touches[0].clientX;
    },
    touchend() {
      if (
        !this.touch.endX ||
        Math.abs(this.touch.endX - this.touch.startX) < 20
      )
        return;

      if (this.touch.endX < this.touch.startX) this.$store.commit("nextIndex");
      else this.$store.commit("prevIndex");
    }
  },
  mounted() {
    this.$el.addEventListener("touchstart", (event) => this.touchstart(event));
    this.$el.addEventListener("touchmove", (event) => this.touchmove(event));
    this.$el.addEventListener("touchend", () => this.touchend());
  },
};
/* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Gallery {
  margin-right: 0;
  margin-left: 0;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  height: 500px;
  background-color: $black;
  overflow: hidden;
  transition: all 0.5s ease;
  &.open {
    height: 600px;
    transform: translateY(-100px);
  }
  .img {
    width: 50%;
    height: 500px;
    background-position: center;
    background-size: cover;
  }
  .title {
    position: absolute;
    top: 50px;
    padding: $h0 $h1;
    height: 40px;
    background-color: rgba($color: $light_grey, $alpha: 0.2);
    color: $white;
  }
  .description {
    padding: 20px;
    color: $white;
  }
}
</style>
