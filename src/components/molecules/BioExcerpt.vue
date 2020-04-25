<template>
  <section class="BioExcerpt">
    <h3>{{ texto1 }}</h3>
    <p>{{ texto2 }}</p>
  </section>
</template>

<script>
export default {
  name: "BioExcerpt",
  props: {
    texto1: String,
    texto2: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.BioExcerpt {
  background-color: $white;
  @include media(s2) {
    padding-top: $h4;
    padding-bottom: $h3;
  }
  @include media(s5) {
      padding-top: $h5;
      padding-bottom: $h4;
    }
  p {
    @include media(s5) {
      max-width: $h9;
      padding-right: 0;
      margin: auto;
      text-align: center;
    }
  }
}
</style>
