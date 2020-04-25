<template>
  <div class="home">
    <Brand />
    <Cover
      title="Sergio Forés"
      subtitle="Original 3D-printed Artwork & Modern prototyping for the web"
      bgimg="img4.jpg"
    />
    <!-- <TresdeModel /> -->
    <Footer />
  </div>
</template>

<script>
import Brand from "@/components/atoms/Brand.vue";
import Cover from "@/components/organos/Cover.vue";
// import TresdeModel from "@/components/atoms/TresdeModel.vue";
import Footer from "@/components/molecules/Footer.vue";

export default {
  name: "Home",
  components: {
    Cover,
    Brand,
    Footer
    // TresdeModel,
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.home .Cover {
  height: 100vh;
  // flex-wrap: nowrap;
}
</style>
