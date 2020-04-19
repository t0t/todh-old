<template>
  <section class="Cover" :style="{ backgroundImage: `url(${imgurl})` }">
    <h2 class="CoverTitle">{{ title }}</h2>
    <h3 class="CoverSubtitle">{{ subtitle }}</h3>
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
      return require("../assets/" + this.bgimg + ".jpg");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Cover {
  display: flex;
  flex-wrap: nowrap;
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
  font-size: 5em;
}

.CoverSubtitle {
  margin: 0;
  padding: $size;
  width: 40%;
  color: $white;
}
</style>
