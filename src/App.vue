<template>
  <div id="app">
    <nav id="MainNav">
      <router-link to="/artwork">ARTWORK</router-link>
      <router-link to="/design">DESIGN</router-link>
      <router-link to="/info">INFO</router-link>
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
  left: 0;
  display: flex;
  justify-content: flex-end;
  background-color: $grey;
  @include media(s1) {
  }

  a {
    // display: block;
    color: $white;
    padding: #{$h-2}em #{$h-1}em;
    background-color: $grey;

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
