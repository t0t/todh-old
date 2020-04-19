<template>
  <div class="Brand">
    <a href="/" rel="">
      <IcoLogo />
    </a>
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
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  color: $white;

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
}
</style>
