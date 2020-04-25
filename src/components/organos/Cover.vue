<template>
  <hgroup class="Cover" 
  :style="{ backgroundImage: `url(${imgurl})` }"
  role="banner"
  >
      <h1 class="CoverTitle">{{ title }}</h1>
      <h2 class="CoverSubtitle">{{ subtitle }}</h2>
  </hgroup>
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
      return require("@/assets/" + this.bgimg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Cover {
  // z-index: -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-color: $primary;
  // position: sticky;
  // top: 0;
  height: 50vh;
  text-align: center;
  color: $white;
  @include media(s1) {
    height: 75vh;
  }
  @include media(s2) {
    height: 100vh;
  }
}

.CoverTitle {
  // margin: 0;
}
.CoverSubtitle {
  margin-right: 0;
  
}

</style>
