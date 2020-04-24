<template>
  <div class="design">
    <Brand />

    <Cover
      title="The power of Now"
      subtitle="Holistic Framework for Rapid prototyping"
      bgimg="grafico-2.svg"
    />

    <Card
      bgimg="img4.jpg"
      title="Thoughts become things"
      subtitle="...and vice versa"
      text="Una visión holística y práctica del mundo del diseño de productos digitales a través de prototipos que evolucionan. Componentes reutilizables.  Haz de tu idea algo real. Orientado a pequeñas Startups con bajo presupuesto y mucha prisa."
    />

    <Features
      title=":)"
      feature1="Tech Stack"
      feature1b="CSS/Html, Vuejs, Github Pages, Sass, NPM, Nucleo Icons"
      feature2="Prototipado holístico de UI"
      feature2b="Componentización, Atomic Design"
      feature3="Static site deployed in seconds"
      feature3b="Testing on real devices"
    />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Brand from "@/components/atoms/Brand.vue";
import Card from "@/components/molecules/Card.vue";
import Features from "@/components/molecules/Features.vue";
import Footer from "@/components/molecules/Footer.vue";
import Cover from "@/components/organos/Cover.vue";

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
