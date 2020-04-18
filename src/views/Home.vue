<template>
  <div class="home">
    <Cover msg="Sentir orden forma conexión" />
    <Brand />
    <Features msg="Areas de investigación" />
    <Gallery msg="Artwork" />
    <Footer msg="Sergio Fores" />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Features from "@/components/Features.vue";
import Gallery from "@/components/Gallery.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Cover,
    Brand,
    Features,
    Gallery,
    Footer
  },
};
</script>
