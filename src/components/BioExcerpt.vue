<template>
  <section class="BioExcerpt">
    <div>
      <h3>{{ texto1 }}</h3>
      <p>{{ texto2 }}</p>
    </div>
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
  padding: $size / 2;
}

@media (min-width: 900px) {
  .BioExcerpt div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 ($size * 2);
  }
}
</style>
