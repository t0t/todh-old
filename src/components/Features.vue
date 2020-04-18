<template>
  <section class="Features">
    <img alt="Feature img" src="@/assets/grafico-1.svg" />
    <h2 class="FeaturesTitle">{{ msg }}</h2>
    <dl class="FeaturesList">
      <dt>Arte visual</dt>
      <dd>Modelado/Impresión 3D</dd>
      <dt>Prototipado rápido de Interfaces de usuario</dt>
      <dd>Pr wefrefer f</dd>
      <dd>ewf rwf wrf 4rfw4</dd>
      <dd>Wef rrtretgr wrf 4rfw4</dd>
      <dt>TODH</dt>
      <dd>Percepción holística</dd>
      <dd>Corpus filosófico</dd>
    </dl>
  </section>
</template>

<script>
export default {
  name: "Features",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Features {
  padding: $size / 2;
  display: block;

  img {
    max-height: 100px;
  }

  &Title {
    width: 100%;
  }
}
</style>
