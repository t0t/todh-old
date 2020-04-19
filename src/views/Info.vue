<template>
  <div class="info">
    <Cover msg="Todo es relación" />

    <Brand />

    <Footer msg="Sergio Fores" />
  </div>
</template>

<script>
// @ is an alias to /src
import Cover from "@/components/Cover.vue";
import Brand from "@/components/Brand.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Info",
  components: {
    Cover,
    Brand,
    Footer,
  },
};
</script>
