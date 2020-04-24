<template>
  <section class="List">
    <ul>
        <li>{{ texto1 }}</li>
        <li>{{ texto2 }}</li>
        <li>{{ texto3 }}</li>
        <li>{{ texto4 }}</li>
        <li>{{ texto5 }}</li>
        <li>{{ texto6 }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "List",
  props: {
    texto1: String,
    texto2: String,
    texto3: String,
    texto4: String,
    texto5: String,
    texto6: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.List {
  @include media(s2) {
    padding-top: $h4;
    padding-bottom: $h3;
  }
}
</style>
