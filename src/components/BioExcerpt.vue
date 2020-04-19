<template>
  <section class="BioExcerpt">
    <div>
      <h3>
        Sergio Forés es Diseñador Gráfico/Frontend especializado en desarrollo
        de prototipos evolutivos en alta resolución. Trabaja en remoto y,
        paralelamente, desarrolla su actividad como artista multidisciplinar.
      </h3>
      <p>
        Así, orbitando varios mundos como son la tecnología, el arte y la
        sabiduría antigua, Sergio afianza con los años un corpus discursivo y
        práctico que llama TODH en torno al
        <b>proceso mismo de la Creación</b> y su dimensión estructural
        holística. En este sentido su proyecto aboga por una reconexión
        incursiva con "la verdad" que nos habita. Podríamos decir que su mirada
        se centra en las experiencias antes que en los objetos o los productos,
        defendiendo el desarrollo de la mente abstracta frente al de la mente
        concreta.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "BioExcerpt",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.BioExcerpt {
  padding: $size / 2;
}

@media (min-width: 900px) {
  .BioExcerpt div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 ($size * 2);
  }
}
</style>
