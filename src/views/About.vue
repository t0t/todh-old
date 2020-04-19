<template>
  <div class="home">
    <Brand />

    <Cover
      title="Sentir orden forma conexión"
      subtitle="Sentir orden forma conexión"
      bgimg="img5"
    />

    <BioExcerpt msg="Areas de investigación" />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Brand from "@/components/Brand.vue";
import Cover from "@/components/Cover.vue";
import BioExcerpt from "@/components/BioExcerpt.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Brand,
    Cover,
    BioExcerpt,
    Footer
  }
};
</script>
