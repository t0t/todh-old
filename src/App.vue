<template>
  <div id="app">
    <nav id="MainNav">
      <router-link to="/artwork">Artwork</router-link>
      <router-link to="/design">Prototyping</router-link>
      <router-link to="/info">TODH</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  font-family: $primary_font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#MainNav {
  z-index: 1;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  @include media(s1) {
    top: $h2;
    right: $h2;
  }
  a {
    color: $white;
    padding: $h0;
    @include media(s1) {
      padding: $h0;
      background-color: $secondary;
      font-size: $h1;
    }
    @include media(s2) {
      display: block;
      padding: $h1;
      background-color: transparent;
      font-size: $h1;
      &:hover {
        background-color: $secondary;
      }
    }
    @include media(s4) {
      font-size: $h2;
    }
    &.router-link-exact-active {
      color: $tertiary;
      background-color: $black;
      &:hover {
        cursor: default;
      }
    }
  }
}
</style>
