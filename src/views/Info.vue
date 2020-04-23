<template>
  <div class="info">
    <Brand />

    <Cover
      title="T-O-D-H"
      subtitle="Observar. Discernir. Hacer. Transmitir."
      bgimg="img2.jpg"
    />

    <Card
      bgimg="img7.jpg"
      title="Sergio Forés es Diseñador Gráfico/Frontend especializado en desarrollo
        de prototipos evolutivos en alta resolución. Trabaja en remoto y,
        paralelamente, desarrolla su actividad como artista multidisciplinar."
      subtitle="#sentirordenformaconexion"
      text="Así, orbitando varios mundos como son la tecnología, el arte y la
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
      bgimg="img6.jpg"
      title="La raíz profunda de la Creación es el orden y sentirlo nos reconecta dando forma a la conexión de todo cuanto existe."
      subtitle="#sentirordenformaconexion"
      text="Así, orbitando varios mundos como son la tecnología, el arte y la
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
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    Brand,
    Card,
    Footer
  }
};
</script>
