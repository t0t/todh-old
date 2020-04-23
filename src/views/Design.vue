<template>
  <div class="design">
    <Brand />

    <Cover
      title="Modern Frontend Design"
      subtitle="Me apasiona crear prototipos web que funcionan"
      bgimg="grafico-2.svg"
    />

    <Card
      bgimg="img4.jpg"
      title="When thoughts become things"
      subtitle="Desarrollo evolutivo desde el primer dia"
      text="Una visión holística y práctica del mundo del diseño de productos digitales a través de prototipos que evolucionan. Componentes reutilizables.  Haz de tu idea algo real. Orientado a pequeñas Startups con bajo presupuesto y mucha prisa."
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
import Card from "@/components/Card.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Design",
  components: {
    Brand,
    Cover,
    Card,
    Features,
    Footer
  }
};
</script>
