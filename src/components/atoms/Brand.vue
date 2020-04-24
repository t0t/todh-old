<template>
  <div class="Brand">
    <router-link to="/">
      <IcoLogo />
    </router-link>
  </div>
</template>

<script>
import IcoLogo from "@/components/atoms/icons/IcoLogo.vue";

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
  position: fixed;
  top: $h2;
  left: $h2;
  z-index: 0;
  @include media(s2) {
    z-index: 2;
    background-color: alpha($color: white);
  }
  & path.sentir {
    fill: $white;
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
    width: $h4;
    height: $h4;
  }
}
</style>
