<template>
  <aside class="Features">
    <img alt="Feature img" src="@/assets/grafico-1.svg" />
    <dl class="FeaturesList">
      <div>
        <dt>{{ feature1 }}</dt>
        <dd>{{ feature1b }}</dd>
      </div>
      <div>
        <dt>{{ feature2 }}</dt>
        <dd>{{ feature2b }}</dd>
      </div>
      <div>
        <dt>{{ feature3 }}</dt>
        <dd>{{ feature3b }}</dd>
      </div>
    </dl>
  </aside>
</template>

<script>
export default {
  name: "Features",
  props: {
    feature1: String,
    feature1b: String,
    feature2: String,
    feature2b: String,
    feature3: String,
    feature3b: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Features {
  padding: $size / 2;
  display: block;

  &Title {
    width: 100%;
  }

  &List {
    display: flex;
    justify-content: space-between;
    div {
      width: 20%;
      flex-grow: 1;
    }
  }

  img {
    max-height: 100px;
  }
}
</style>
