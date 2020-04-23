<template>
  <article class="CardContainer" :style="{ backgroundImage: `url(${imgurl})` }">
    <div class="CardContent">
      <header class="CardHeader">
        <h4>{{ title }}</h4>
        <h5>{{ subtitle }}</h5>
      </header>
      <div class="CardBody">
        <p>{{ text }}</p>
      </div>
    </div>
  </article>
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
      return require("../assets/" + this.bgimg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.CardContainer {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: $grey;
  @include media(s1) {
    display: flex;
    justify-content: flex-end;
  }
  p {
    padding-bottom: 0;
  }
}
.CardContent {
  padding: #{$h1}rem;
  background-color: $white;
  @include media(s1) {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: #{$h3}rem;
  }
}
</style>
