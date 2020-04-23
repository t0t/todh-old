<template>
  <footer class="Footer">
    <SocialLinks />
  </footer>
</template>

<script>
import SocialLinks from "./SocialLinks.vue";
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
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
