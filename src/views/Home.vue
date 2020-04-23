<template>
  <div class="home">
    <Brand />
    <Cover
      title="Sergio Forés"
      subtitle="Original 3D-printed Artwork & Modern prototyping for the web"
      bgimg="img4.jpg"
    />
    <Footer />
  </div>
</template>

<script>
import Cover from "@/components/organos/Cover.vue";
import Brand from "@/components/atomos/Brand.vue";
import Footer from "@/components/organos/Footer.vue";

export default {
  name: "Home",
  components: {
    Cover,
    Brand,
    Footer
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
