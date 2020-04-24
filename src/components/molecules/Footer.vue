<template>
  <footer class="Footer">
    <SocialLinks />
  </footer>
</template>

<script>
import SocialLinks from "@/components/molecules/SocialLinks.vue";
export default {
  name: "Footer",
  props: {
    msg: String
  },
  components: {
    SocialLinks
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Footer {
  z-index: -1;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $light_grey;
}
</style>
