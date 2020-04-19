<template>
  <div class="CardContainer" :style="{ backgroundImage: `url(${imgurl})` }">
    <div class="CardContent">
      <div class="CardHeader">
        <h3>{{ title }}</h3>
        <h5>{{ subtitle }}</h5>
      </div>
      <div class="CardBody">
        <p>{{ text }}</p>
      </div>
      <div class="CardFooter"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Card",
  props: {
    bgimg: String,
    title: String,
    subtitle: String,
    text: String
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

.CardContainer {
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: center;
  color: $grey;
  min-height: 300px;
}
.CardContent {
  padding: $size / 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  background-color: $tertiary;
  h3,
  h5 {
    margin: 0;
  }
  @media (min-width: 900px) {
    padding: $size;
    // height: 250px;
  }
}
</style>
