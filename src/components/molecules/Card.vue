<template>
  <article class="CardContainer">
    <div class="CardContent">
      <div
        class="CardImage"
        :style="{ backgroundImage: `url(${imgurl})` }"
      ></div>
      <header class="CardHeader">
        <h4>{{ title }}</h4>
        <small>{{ subtitle }}</small>
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
    text: String,
  },
  computed: {
    imgurl() {
      return require("@/assets/" + this.bgimg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.CardContainer {
  color: $grey;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  p {
    padding-bottom: 0;
  }
  small {
    font-style: italic;
    color: $secondary;
    padding-bottom: 0;
  }
}
.CardContent {
  background-color: $light_grey;
  @include media(s1) {
    // padding-bottom: #{$h3}rem;
  }
}
.CardHeader {
  padding-top: #{$h2}rem;
  padding-left: #{$h2}rem;
  padding-right: #{$h2}rem;
  @include media(s5) {
    padding-top: #{$h4}rem;
  }
}
.CardBody {
  padding-top: #{$h2}rem;
  padding-left: #{$h2}rem;
  padding-right: #{$h2}rem;
  padding-bottom: #{$h2}rem;
  @include media(s5) {
    padding-bottom: #{$h4}rem;
  }
}
.CardImage {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: #{$h6}em;
  @include media(s5) {
    height: #{$h8}em;
  }
}
</style>
