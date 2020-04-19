<template>
  <div id="app">
    <div id="nav">
      <router-link to="/artwork">ARTWORK</router-link>
      <router-link to="/design">DESIGN</router-link>
      <router-link to="/info">Info</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  font-family: $primary_font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: $size;
  position: fixed;
  right: 0;
  z-index: 1;

  a {
    text-decoration: none;
    color: $white;
    padding: ($size / 8) ($size / 7);
    letter-spacing: 1px;

    &.router-link-exact-active {
      color: $tertiary;
      background-color: $black_light;

      &:hover {
        cursor: default;
      }
    }
  }
}
</style>
