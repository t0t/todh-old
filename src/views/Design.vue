<template>
  <div class="design">
    <Brand />

    <Cover
      title="Modern Hi-Res Digital Prototyping Services"
      subtitle="Fast, Scalable"
      bgimg="img5"
    />

    <BioExcerpt
      texto1="Una visión holística y práctica del mundo del diseño de productos digitales a través de prototipos que evolucionan."
      texto2="Componentes reutilizables. Desarrollo evolutivo desde el primer dia. Falla rápido y bien. Haz de tu idea algo real. Orientado a pequeñas Startups con bajo presupuesto y mucha prisa. :)"
    />

    <Features
      feature1="Tech Stack"
      feature1b="Vuejs, Github Pages, JAMStack, Sass, NPM, Nucleo Icons"
      feature2="Prototipado holístico de UI"
      feature2b="Atomic Design"
      feature3="Prototipado evolutivo"
      feature3b="Diviértete mientras creces"
    />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Brand from "@/components/Brand.vue";
import Cover from "@/components/Cover.vue";
import BioExcerpt from "@/components/BioExcerpt.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Design",
  components: {
    Brand,
    Cover,
    BioExcerpt,
    Features,
    Footer
  }
};
</script>
