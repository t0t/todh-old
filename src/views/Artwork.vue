<template>
  <div class="artwork">
    <Brand />
    <Cover
      title="Sergio Forés"
      subtitle="Holistic 3D-Printed Artwork & Hi-Res Web Prototyping"
      bgimg="img1.jpg"
    />

    <Gallery />

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

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import Brand from "@/components/Brand.vue";
import Gallery from "@/components/Gallery.vue";
import Cover from "@/components/Cover.vue";
import BioExcerpt from "@/components/BioExcerpt.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Artwork",
  components: {
    Brand,
    Cover,
    Gallery,
    BioExcerpt,
    Footer
  }
};
</script>
