<template>
  <footer class="Footer">
    <SocialLinks />
  </footer>
</template>

<script>
<<<<<<< HEAD:src/components/organos/Footer.vue
import SocialLinks from "@/components/moleculas/SocialLinks.vue";
=======
import SocialLinks from "@/components/molecules/SocialLinks.vue";
>>>>>>> master:src/components/molecules/Footer.vue
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
  // position: sticky;
  // bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $light_grey;
  // margin-top: $h-2;
  // height: 200px;
  // background-color: red;
}
</style>
