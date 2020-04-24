<template>
  <div class="artwork">
    <Brand />
    <Cover
      title="Consciousness come down"
      subtitle="to the way things vibrate"
      bgimg="img5.jpg"
    />
    <Gallery />
    <BioExcerpt
      texto1="Incursión a la Creación misma"
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
    <Features
      title=":)"
      feature1="Materiales"
      feature1b="PLA, Epoxi&Damar resins, Wax, Sand..."
      feature2="Idea"
      feature2b="Arte consciente"
      feature3="Proceso"
      feature3b="Sin fin"
    />
    <Footer />
  </div>
</template>

<script>
/* eslint-disable */
import Brand from "@/components/atoms/Brand.vue";
import Gallery from "@/components/molecules/Gallery.vue";
import Cover from "@/components/organos/Cover.vue";
import BioExcerpt from "@/components/molecules/BioExcerpt.vue";
import Features from "@/components/molecules/Features.vue";
import Footer from "@/components/molecules/Footer.vue";

export default {
  name: "Artwork",
  components: {
    Brand,
    Cover,
    Gallery,
    BioExcerpt,
    Features,
    Footer
  }
};
</script>
