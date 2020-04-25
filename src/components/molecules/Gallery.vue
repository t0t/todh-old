<template>
  <div class="Gallery">
    <ul :style="listLength">
      <li v-for="(card, index) in cards" 
      :key="index" 
      :style="listPosition">
        <GalleryItem :item="card" :active="index == currentIndex" />
      </li>
    </ul>
  </div>
</template>

<script>
// CARD-LIST
  import GalleryItem from '@/components/molecules/GalleryItem'

export default {
  name: "Gallery",
  data: () => {
      return {
        touch: {
          startX: 0,
          endX: 0
        }
      }
    },
  computed: {
    cards() {
      return this.$store.getters.cards;
    },
    currentIndex() {
      return this.$store.getters.currentIndex;
    },
    listLength() {
      return { width: this.cards.length * 100 + '%' };
    },
    listPosition() {
      return { transform: 'translateX(-'+ this.currentIndex * 100 +'%)' };
    }
  },
  components: {
    GalleryItem
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
      if(!this.touch.endX || Math.abs(this.touch.endX - this.touch.startX) < 20)
        return;
        
      if(this.touch.endX < this.touch.startX)
        this.$store.commit('nextIndex');
      else
        this.$store.commit('prevIndex');
    }
  },
  mounted() {
    this.$el.addEventListener('touchstart', event => this.touchstart(event));
    this.$el.addEventListener('touchmove', event => this.touchmove(event));
    this.$el.addEventListener('touchend', () => this.touchend());
  }
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
  figure {
    //bg
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
