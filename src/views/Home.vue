<template>
  <div class="home">
    <Brand />

    <Cover
      title="Sergio Forés"
      subtitle="Holistic 3D-Printed Artwork & Hi-Res Web Prototyping"
      bgimg="img4"
    />

    <Features
      feature1="Piezas de arte impresas en 3D"
      feature1b="Sentir orden. Formar conexión."
      feature2="Prototipado holístico de UI"
      feature2b="Modular. Fast. Holistic"
      feature3="Corpus teórico TODH"
      feature3b="Una visión incursiva del Misterio de la Creación."
    />

    <Gallery msg="Artwork" />

    <Footer />
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
  }
};
</script>
