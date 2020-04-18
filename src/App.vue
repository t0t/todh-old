<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
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
    // font-weight: bold;
    text-decoration: none;
    color: $white;

    &.router-link-exact-active {
      color: $secondary;
    }
  }
}
</style>
