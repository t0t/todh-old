<template>
  <section class="Cover" :style="{ backgroundImage: `url(${imgurl})` }">
    <h1 class="CoverTitle">{{ title }}</h1>
    <h2 class="CoverSubtitle">{{ subtitle }}</h2>
  </section>
</template>

<script>
export default {
  name: "Cover",
  props: {
    title: String,
    subtitle: String,
    bgimg: String
  },
  computed: {
    imgurl() {
      return require("../assets/" + this.bgimg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Cover {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-color: $primary;
  height: 50vh;
  text-align: center;
  color: $white;
  @include media(s1) {
    height: 75vh;
  }
  @include media(s2) {
    height: 100vh;
    background-position: left;
  }
}

.CoverTitle {
  margin: 0;
}
.CoverSubtitle {
  padding: #{$h2}rem;
  
}

</style>
