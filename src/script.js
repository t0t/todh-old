Vue.component("slider", {
  data() {
    return {
      currentSlide: 0,
      images: [
        {
          src: "http://via.placeholder.com/350x150?text=1",
          text: "some text",
        },
        {
          src: "http://via.placeholder.com/350x150?text=2",
          text: "test images",
        },
        {
          src: "http://via.placeholder.com/350x150?text=3",
          text: "some more images",
        },
        {
          src: "http://via.placeholder.com/350x150?text=4",
          text: "heyoo",
        },
      ],
    };
  },
  template: `
<div class="container">
<div class="slider">
<div class="slide">
<img :src="getCurrentImage.src" :alt="getCurrentImage.text">
</div>
</div>
<button @click="nextSlide" :disabled="currentSlide===images.length - 1">Next Slide</button>
<button @click="prevSlide" :disabled="currentSlide===0">Prev Slide</button>
</div>
`,
  computed: {
    getCurrentImage() {
      return this.images[this.currentSlide];
    },
  },
  methods: {
    nextSlide() {
      let max = this.images.length - 1;
      let current = this.currentSlide;
      if (current != max) this.currentSlide++;
    },
    prevSlide() {
      let min = 0;
      let current = this.currentSlide;
      if (current >= min) this.currentSlide--;
    },
  },
});

new Vue({
  el: "#app",
});
