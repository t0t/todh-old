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
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  color: $white;

  svg {
    width: 60%;
    
    @media (min-width: 1024px) {
      width: 200px;
      font-size: 5em;
    }
  }

  a {
    padding: $size / 4;
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
}
</style>
