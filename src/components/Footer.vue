<template>
  <section>
    <AuthorBio msg="About" />
    <CV msg="CV" />
    <footer class="Footer">
      <!-- <img alt="Vue logo" src="../assets/logo-todh-2.svg" /> -->
      <small>{{ msg }}</small>
      <SocialLinks />
    </footer>
  </section>
</template>

<script>
import AuthorBio from "./AuthorBio.vue";
import SocialLinks from "./SocialLinks.vue";
import CV from "./CV.vue";
export default {
  name: "Footer",
  props: {
    msg: String,
  },
  components: {
    AuthorBio,
    CV,
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
