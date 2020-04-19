<template>
  <section class="Cover" :style="{ backgroundImage: `url(${imgurl})` }">
    <h2 class="CoverTitle">{{ title }}</h2>
    <h3 class="CoverSubtitle">{{ subtitle }}</h3>
    <p>Catálogo de obras impresas en 3D</p>
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  height: 100vh;
  padding: $size / 2;
}

.CoverTitle {
  margin-top: 100px;
  text-align: left;
  width: 75%;
  color: $white;
  font-size: 80px;
}

.CoverSubtitle {
  text-align: left;
  width: 30%;
  color: $white;
}
</style>
