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
    texto2: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.BioExcerpt {
  @include media(s2) {
    padding-top: #{$h4}em;
    padding-bottom: #{$h3}em;
  }
}
</style>
