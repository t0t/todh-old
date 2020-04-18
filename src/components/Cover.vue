<template>
  <section class="Cover">
    <h2 class="CoverTitle">{{ msg }}</h2>
    <h3 class="CoverSubtitle">Catálogo de obras impresas en 3D</h3>
      <h3 class="CoverSubtitle"> Prototipado evolutivo de sitios web</h3>
      <h3 class="CoverSubtitle"> Corpus teórico sobre el proceso de la creación.</h3>
  </section>
</template>

<script>
export default {
  name: 'Cover',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.Cover {
  background-image: url('../assets/img4.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 30% 50%;
  height: 100vh;
  padding: $size / 2;
}

.CoverTitle {
  margin-top: 100px;
  text-align: left;
  width: 75%;
  color: $primary;
  font-size: 80px;
}

.CoverSubtitle {
  text-align: left;
  width: 30%;
  color: $white;
}

</style>
