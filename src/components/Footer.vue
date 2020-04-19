<template>
  <footer class="Footer">
    <img alt="Vue logo" src="@/assets/logo-todh-2.svg" />
    <small>Sergio Forés</small>
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
  margin-bottom: $size / 2;
}
.Footer img {
  max-width: 20px;
  margin-right: $size / 4;
}
</style>
