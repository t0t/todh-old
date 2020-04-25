<template>
  <div id="app">
    <div
      class="BrandToggle"
      role="logo"
      v-on:click="show = !show"
    >
      <IcoLogo />
    </div>
    <nav id="MainNav" role="navigation">
      <transition name="fade">
        <ul v-if="show">
          <router-link to="/artwork">Artwork</router-link>
          <router-link to="/design">Prototyping</router-link>
          <router-link to="/info">TODH</router-link>
        </ul>
      </transition>
    </nav>
    <router-view />
  </div>
</template>

<script>
import IcoLogo from "@/components/atoms/icons/IcoLogo.vue";

export default {
  data: () => {
    return {
      show: false,
    };
  },
  components: {
    IcoLogo
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

#app {
  font-family: $primary_font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.toggle {
  position: fixed;
  top: 0;
  right: 0;
  background-color: $dark_grey;
  width: $h4;
  height: $h4;
  border: none;
  color: $white;
  font-size: $h2;
  font-weight: bold;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.BrandToggle {
  & path.sentir {
    fill: $white;
    stroke: none;
  }
  & path.hacer {
    stroke: $dark_grey;
    stroke-width: 0.5px;
  }
  & circle {
    fill: $secondary;
  }
  svg {
    width: $h4;
    height: $h4;
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
        cursor: pointer;
      }
    }
  }
}
</style>
