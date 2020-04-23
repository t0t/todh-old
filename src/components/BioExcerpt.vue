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
  max-width: 75%;
  @include media(s4) {
    padding-right: 20%;
    padding-left: 20%;
  }
  h3 {
    @include media(s4) {
      font-size: #{$h3}rem;
    }
  }
}
</style>
