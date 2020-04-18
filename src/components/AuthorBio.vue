<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Sergio Forés es Diseñador Gráfico/Frontend especializado en desarrollo de
      prototipos evolutivos en alta resolución. Trabaja en remoto y,
      paralelamente, desarrolla su actividad como artista multidisciplinar.
    </p>
    <p>
      Así, orbitando varios mundos como son la tecnología, el arte y la
      sabiduría antigua, Sergio afianza con los años un corpus discursivo y
      práctico que llama TODH en torno al
      <b>proceso mismo de la Creación</b> y su dimensión estructural holística.
      En este sentido su proyecto aboga por una reconexión incursiva con "la
      verdad" que nos habita. Podríamos decir que su mirada se centra en las
      experiencias antes que en los objetos o los productos, defendiendo el
      desarrollo de la mente abstracta frente al de la mente concreta.
    </p>
  </div>
</template>

<script>
export default {
  name: "AuthorBio",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

p {
  margin: 0 ($size / 2);
  padding-bottom: $size / 2;
}
</style>
