<template>
  <div class="info">
    <Brand />

    <Cover title="Todo es relación" subtitle="subtitulo" bgimg="img2" />

    <Features msg="Todo es relación" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    Brand,
    Features,
    Footer
  }
};
</script>
