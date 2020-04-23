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
      title='"Todo según el peso, el número y la medida."'
      subtitle="Pitágoras. 500 a.C."
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
    <BioExcerpt
      texto1="Una visión basada en hechos reales"
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
    <section class="content">
      <h3>Formato</h3>
      <p>
        <a href="#">Lorem ipsum dolor sit amet</a>
        <strong> consectetur</strong>
        adipisicing elit. <i>Delectus</i> This is <sup>superscripted</sup> text.
        a nulla, asperiores <mark>marked</mark> cupiditate ullam tempora
        <del>blue</del>? Delectus facilis reiciendis incidunt! Harum repudiandae
        repellat <em>This text is emphasized.</em>
      </p>

      <ul style="list-style-type:circle;">
        <li>Elemento de l ista 1</li>
        <li>Elemento uhg iuyg uiyg oiuyi</li>
        <li>Elemento de un lista</li>
        <li>Elemento de l ista 1</li>
        <li>Elemento de l ista 1</li>
      </ul>
    </section>

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
import Cover from "@/components/organos/Cover.vue";
import Brand from "@/components/atoms/Brand.vue";
import BioExcerpt from "@/components/molecules/BioExcerpt.vue";
import Card from "@/components/molecules/Card.vue";
import Footer from "@/components/molecules/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    Brand,
    BioExcerpt,
    Card,
    Footer,
  },
};
</script>
