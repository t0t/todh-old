<template>
  <div class="home">
      <Brand />

      <Cover
        title="Sergio Forés"
        subtitle="Holistic 3D-Printed Artwork & Hi-Res Web Prototyping"
        bgimg="img4.jpg"
      />

      <Card
        bgimg="logo-todh-2.svg"
        title="Titulo Card"
        subtitle="Subtitulo"
        text="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet."
      />
      <Card
        bgimg="grafico-1.svg"
        title="Titulo Card"
        subtitle="Subtitulo"
        text="Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure."
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
  name: "Home",
  components: {
    Cover,
    Brand,
    Card,
    Footer,
  },
};
</script>
