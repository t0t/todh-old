<template>
  <aside class="Features">
    <div class="FeaturesList">
      <dl>
        <dt>{{ feature1 }}</dt>
        <dd>{{ feature1b }}</dd>
      </dl>
      <dl>
        <dt>{{ feature2 }}</dt>
        <dd>{{ feature2b }}</dd>
      </dl>
      <dl>
        <dt>{{ feature3 }}</dt>
        <dd>{{ feature3b }}</dd>
      </dl>
    </div>
    <img alt="Feature img" src="@/assets/grafico-1.svg" />
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
  padding: #{$h2}rem #{$h2}rem 0 #{$h2}rem;
  display: block;
  &Title {
    width: 100%;
  }
  &List {
    // padding: #{$h-1}rem;
    @include media(s2) {
      display: flex;
      justify-content: space-between;
    }
    dl {
      margin-bottom: #{$h-2}rem;
      @include media(s0) {
        font-size: #{$h1}rem;
      }
      @include media(s1) {
        padding: #{$h-1}rem;
      }
      @include media(s2) {
        flex-grow: 1;
        max-width: 29.03%;
        background-color: $tertiary;
        padding: #{$h0}rem;
      }
      @include media(s4) {
        padding: #{$h3}rem;
        font-size: #{$h2}rem;
      }
    }
  }
  img {
    max-height: #{$h5}rem;
    margin-top: #{$h1}rem;
    @include media(s4) {
      max-height: #{$h6}rem;
    }
  }
}
</style>
