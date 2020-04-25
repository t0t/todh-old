<template>
  <div class="info">
    <Cover
      title="T-O-D-H"
      subtitle="Observar. Discernir. Hacer. Transmitir."
      bgimg="svg_anim.svg"
    />

    <Card
      bgimg="svg_anim.svg"
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
      texto2="Desde la tecnología, el arte y la
        sabiduría antigua, Sergio afianza con los años un corpus discursivo y
        práctico en torno al proceso mismo de la Creación y su dimensión estructural
        holística."
    />

    <section class="content">
      <p>
        En este sentido su proyecto aboga por una reconexión incursiva con la
        verdad que nos habita. Podríamos decir que su mirada se centra en las
        experiencias antes que en los objetos o los productos, defendiendo el
        desarrollo de la mente abstracta frente al de la mente concreta.
      </p>
      <p>
        En este sentido su proyecto aboga por una reconexión incursiva con la
        verdad que nos habita. Podríamos decir que su mirada se centra en las
        experiencias antes que en los objetos o los productos, defendiendo el
        desarrollo de la mente abstracta frente al de la mente concreta.
      </p>
      <p>
        En este sentido su proyecto aboga por una reconexión incursiva con la
        verdad que nos habita. Podríamos decir que su mirada se centra en las
        experiencias antes que en los objetos o los productos, defendiendo el
        desarrollo de la mente abstracta frente al de la mente concreta.
      </p>
      <p>
        En este sentido su proyecto aboga por una reconexión incursiva con la
        verdad que nos habita. Podríamos decir que su mirada se centra en las
        experiencias antes que en los objetos o los productos, defendiendo el
        desarrollo de la mente abstracta frente al de la mente concreta.
      </p>

      <List
        texto1="Elemento de lista 1"
        texto2="Otro elemento"
        texto3="Otro elemento"
        texto4="Otro elemento"
        texto5="Otro elemento..."
        texto6=""
      />
    </section>

    <Card
      bgimg="svg_anim.svg"
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
import BioExcerpt from "@/components/molecules/BioExcerpt.vue";
import List from "@/components/molecules/List.vue";
import Card from "@/components/molecules/Card.vue";
import Footer from "@/components/molecules/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    BioExcerpt,
    List,
    Card,
    Footer
  }
};
</script>
