<template>
  <ul class="SocialLinks">
    <li>
      <a
        href="https://www.instagram.com/t.o.d.h/"
        target="_blank"
        rel="noopener"
        ><IconInstagram
      /></a>
      <a
        href="https://www.linkedin.com/in/sergiofores/"
        target="_blank"
        rel="noopener"
        ><IconLinkedin
      /></a>
      <a href="https://medium.com/@todh" target="_blank" rel="noopener"
        ><IconMedium
      /></a>
      <a href="https://twitter.com/t0tinspire" target="_blank" rel="noopener"
        ><IconTwitter
      /></a>
      <a href="https://github.com/t0t" target="_blank" rel="noopener"
        ><IconGithub
      /></a>
      <a
        href="https://www.facebook.com/TODH-2139705836275088"
        target="_blank"
        rel="noopener"
        ><IconFacebook
      /></a>
      <a href="https://unsplash.com/@todh" target="_blank" rel="noopener"
        ><IconUnsplash
      /></a>
    </li>
  </ul>
</template>

<script>
import IconLinkedin from "./icons/IconLinkedin.vue";
import IconInstagram from "./icons/IconInstagram.vue";
import IconMedium from "./icons/IconMedium.vue";
import IconTwitter from "./icons/IconTwitter.vue";
import IconGithub from "./icons/IconGithub.vue";
import IconUnsplash from "./icons/IconUnsplash.vue";
import IconFacebook from "./icons/IconFacebook.vue";

export default {
  name: "SocialLinks",
  components: {
    IconLinkedin,
    IconInstagram,
    IconMedium,
    IconTwitter,
    IconGithub,
    IconFacebook,
    IconUnsplash,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/styles/main.scss";

.SocialLinks {
  padding: ($size / 8) 0;
  a {
    margin-right: 10px;
    svg {
      &path {
        fill: $dark-grey;
        &:hover {
          fill: $grey;
        }
      }
      &polygon {
        fill: blue;
      }
      &rect {
        fill: red;
      }
    }
  }
}
</style>
