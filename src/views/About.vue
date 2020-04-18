<template>
  <div class="home">
    <Brand />
    <Features msg="Areas de investigación" />
    <AuthorBio msg="About" />
    <CV msg="CV" />
    <Footer msg="Sergio Fores" />
  </div>
</template>

<script>
// @ is an alias to /src
import Brand from "@/components/Brand.vue";
import Features from "@/components/Features.vue";
import AuthorBio from "@/AuthorBio.vue";
import CV from "@/CV.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Brand,
    Features,
    AuthorBio,
    CV,
    Footer,
  },
};
</script>
