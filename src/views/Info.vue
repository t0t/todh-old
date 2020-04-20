<template>
  <div class="info">
    <Brand />

    <Cover
      title="Observar. Discernir. Hacer. Transmitir."
      subtitle="T-O-D-H"
      bgimg="img2.jpg"
    />

    <BioExcerpt
      texto1="Sergio Forés es Diseñador Gráfico/Frontend especializado en desarrollo
        de prototipos evolutivos en alta resolución. Trabaja en remoto y,
        paralelamente, desarrolla su actividad como artista multidisciplinar."
      texto2="Así, orbitando varios mundos como son la tecnología, el arte y la
        sabiduría antigua, Sergio afianza con los años un corpus discursivo y
        práctico que llama TODH en torno al
        proceso mismo de la Creación y su dimensión estructural
        holística. En este sentido su proyecto aboga por una reconexión
        incursiva con la verdad que nos habita. Podríamos decir que su mirada
        se centra en las experiencias antes que en los objetos o los productos,
        defendiendo el desarrollo de la mente abstracta frente al de la mente
        concreta."
    />

    <Card
      bgimg="logo-todh-2.svg"
      title="When thoughts become things"
      subtitle="Desarrollo evolutivo desde el primer dia"
      text="Una visión holística y práctica del mundo del diseño de productos digitales a través de prototipos que evolucionan. Componentes reutilizables.  Haz de tu idea algo real. Orientado a pequeñas Startups con bajo presupuesto y mucha prisa."
    />

    <Features
      feature1="Coherencia"
      feature1b="Sentir orden. Formar conexión."
      feature2="Prototipado holístico de UI"
      feature2b="Modular. Fast. Holistic"
      feature3="Corpus teórico TODH"
      feature3b="Una visión incursiva del Misterio de la Creación."
    />

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Card from "@/components/Card.vue";
import BioExcerpt from "@/components/BioExcerpt.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    Brand,
    Card,
    BioExcerpt,
    Features,
    Footer
  }
};
</script>
