<template>
  <section class="Cover" :style="{ backgroundImage: `url(${imgurl})` }">
    <div class="test"></div>
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  height: 100vh;
  padding: 0 ($size / 2);
}

.CoverTitle {
  margin: 0;
  color: $white;
  // @media (min-width: 900px) {
  //   font-size: 5em;
  // }
}

.CoverSubtitle {
  margin: 0;
  padding: $size / 2;
  color: $white;
}
</style>
