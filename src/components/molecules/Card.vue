<template>
  <aside class="CardContainer">
    <div class="CardContent">
      <aside
        class="CardImage"
        :style="{ backgroundImage: `url(${imgurl})` }"
      ></aside>
      <hgroup class="CardHeader">
        <h4>{{ title }}</h4>
        <small>{{ subtitle }}</small>
      </hgroup>
      <main class="CardBody">
        <p>{{ text }}</p>
      </main>
    </div>
  </aside>
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
      return require("@/assets/" + this.bgimg);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.CardContainer {
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  p {
    padding-bottom: 0;
  }
  small {
    font-style: italic;
    padding-bottom: 0;
  }
}
.CardContent {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  background-color: $light_grey;
}
.CardHeader {
  padding-top: $h2;
  padding-left: $h2;
  padding-right: $h2;
  @include media(s5) {
    padding-top: $h4;
    padding-left: 0;
    padding-right: 0;
    background-color: $light_grey;
    small {
      line-height: $h3;
    }
    h4 {
    }
  }
}
.CardBody {
  padding: $h2;
  @include media(s5) {
    padding-bottom: $h4;
    padding-top: $h4;
    padding-left: 0;
    padding-right: 0;
  }
  p {
    @include media(s5) {
      margin-right: $h4;
      margin-left: $h4;
    }
  }
}
.CardImage {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: auto;
  @include media(s4) {
    width: $h8;
  }
  @include media(s5) {
    width: $h9;
  }
}
</style>
