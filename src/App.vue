<template>
  <main id="app" role="main">
    <MainMenu></MainMenu>
    <router-view />
  </main>
</template>

<script>
import MainMenu from "@/components/atoms/MainMenu.vue";

export default {
  components: {
    MainMenu,
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  font-family: $primary_font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
