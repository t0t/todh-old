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
    <h3>Formato</h3>
    <p>
      <a href="#">Lorem ipsum dolor sit amet</a>
      <strong> consectetur</strong>
      adipisicing elit. <i>Delectus</i> This is <sup>superscripted</sup> text. a
      nulla, asperiores <mark>marked</mark> cupiditate ullam tempora
      <del>blue</del>? Delectus facilis reiciendis incidunt! Harum repudiandae
      repellat <em>This text is emphasized.</em>
    </p>
    <blockquote cite="#url">
      For nearly 60 years, WWF has been protecting the future of nature. The
      world's leading conservation organization, WWF works in 100 countries and
      is supported by more than one million members in the United States and
      close to five million globally.
    </blockquote>
    <address>
      Written by John Doe.<br />
      Visit us at:<br />
      Example.com<br />
      Box 564, Disneyland<br />
      USA
    </address>
    <p>
      The <abbr title="World Health Organization">WHO</abbr> was founded in
      1948.
    </p>
    <img src="img_the_scream.jpg" width="220" height="277" alt="The Scream" />
    <p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

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
import Brand from "@/components/atomos/Brand.vue";
import BioExcerpt from "@/components/organos/BioExcerpt.vue";
import Card from "@/components/organos/Card.vue";
import Footer from "@/components/organos/Footer.vue";

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
