<template>
  <div class="artwork">
    <Brand />
    <Cover
      title="Consciousness come down"
      subtitle="to the way things vibrate"
      bgimg="img1.jpg"
    />
    <Gallery />
    <BioExcerpt
      texto1="Actividad como artista multidisciplinar."
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
/* eslint-disable */
import Brand from "@/components/atoms/Brand.vue";
import Gallery from "@/components/molecules/Gallery.vue";
import Cover from "@/components/organos/Cover.vue";
import BioExcerpt from "@/components/molecules/BioExcerpt.vue";
import Footer from "@/components/molecules/Footer.vue";

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
