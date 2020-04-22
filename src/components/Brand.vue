<template>
  <div class="Brand">
    <router-link to="/">
      <IcoLogo />
    </router-link>
  </div>
</template>

<script>
import IcoLogo from "./icons/IcoLogo.vue";

export default {
  name: "Brand",
  components: {
    IcoLogo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Brand {
  z-index: 2;
  position: fixed;
  left: #{$h2}rem;
  @include media(s1) {
    background-color: #fff;
  }

  & path.sentir {
    fill: $black_light;
    stroke: none;
  }
  & path.hacer {
    stroke: $dark_grey;
    stroke-width: 0.5px;
  }
  & circle {
    fill: $secondary;
  }
  svg {
    width: #{$h4}em;
    height: #{$h4}em;
  }
}
</style>
