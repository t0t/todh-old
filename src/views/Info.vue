<template>
  <div class="info">
    <Brand />
    <Footer msg="Sergio Fores" />
  </div>
</template>

<script>
// @ is an alias to /src
import Brand from "@/components/Brand.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Info",
  components: {
    Brand,
    Footer
  },
};
</script>
