<template>
  <div>
    <h1>{{ msg }}</h1>
    <dl>
      <dt>
        Formación
      </dt>
      <dd>Artes Aplicadas y procedimientos pictóricos en Junyent y Subirà (Vic, Barcelona).</dd>
      <dd>Arte Electrónico y Diseño Digital en Mecad, EsDi (Sabadell).</dd>
      <dd>Estancia en varias Quincenas de Arte de Montesquieu, QUAM (Sant Quirze, Barcelona)</dd>
      <dd>Diversas formaciones on-line sobre: Javascript, Git, Vuejs, Preprocesadores, Axure, Agile, etc</dd>
    </dl>

    <dl>
      <dt>1999-2001</dt>
      <dd>
        Diseñador web en 96Com (Sabadell, Barcelona). Presencial.
      </dd>
      <dt>2001-2004</dt>
      <dd>
        Diseñador gráfico y desarrollo en Wordpress. (Peñíscola, Castellón).
        Freelance.
      </dd>
      <dt>2004-2013</dt>
      <dd>
        Diseño editorial en Editorial Antinea (Vinaròs, Castellón).
        Presencial/Freelance.
      </dd>
      <dt>2014-2018</dt>
      <dd>
        Maquetador Front-end y UX Product Designer en Tinsa (Madrid). Remoto.
      </dd>
      <dt>2020...</dt>
      <dd>
        Holistic Designer en Icarus. Remoto.
      </dd>
      <dd>Artista Holistico</dd>
    </dl>
    <dl>
      <dt>
        Tools
      </dt>
      <dd>CSS(Sass)/Html</dd>
      <dd>Rapid prototyping on Vuejs CLI</dd>
      <dd>Ultimaker S5 (3D Printer)</dd>
      <dd>Cura</dd>
      <dd>Blender 3D</dd>
      <dd>Git</dd>
      <dd>Nucleo</dd>
      <dt>
        Experience with
      </dt>
      <dd>NPM, Jira, Wordpress development, Pug, Photoshop, InDesign, Axure RP, Sketch, Affinity Suite, Nucleo, Prepross </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: "CV",
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
