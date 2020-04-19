<template>
  <div class="home">
    <Brand />
    
    <Cover 
    title="Sentir orden forma conexión" 
    subtitle="Sentir orden forma conexión" 
    bgimg="img4"
    />

    <Features msg="Areas de investigación" />

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
  },
};
</script>
