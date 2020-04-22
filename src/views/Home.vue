<template>
  <div class="home">
    <Brand />

    <Cover
      title="Sergio Forés"
      subtitle="Holistic 3D-Printed Artwork - Hi-Res Web Prototyping"
      bgimg="img4.jpg"
    />
    <Footer />
  </div>
</template>

<script>
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Cover,
    Brand,
    Footer
  }
};
</script>
