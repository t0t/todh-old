<template>
  <nav id="MainNav" role="navigation">
    <button class="toggle" v-on:click="show = !show">|||</button>
    <transition name="fade">
      <ul v-if="show">
        <router-link to="/artwork">Artwork</router-link>
        <router-link to="/design">Prototyping</router-link>
        <router-link to="/info">TODH</router-link>
      </ul>
    </transition>
  </nav>
</template>

<script>
export default {
  name: "MainMenu",
  data: () => {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

button.toggle {
  position: fixed;
  top: 0;
  right: 0;
  background-color: $dark_grey;
  width: $h4;
  height: $h4;
  border: none;
  color: white;
  font-size: $h2;
  font-weight: bold;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
}

#MainNav {
  ul {
    position: fixed;
    right: $h4;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 1;
    padding: 0;
    height: $h4;
    margin-right: 0;
    background-color: $dark_grey;
    // @include media(s1) {
    //   top: $h2;
    //   right: $h2;
    // }
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
      border-bottom: $h-1 solid $black_light;

      &:hover {
        cursor: default;
      }
    }
  }
}
</style>
