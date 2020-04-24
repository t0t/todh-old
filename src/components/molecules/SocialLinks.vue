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
import IconLinkedin from "@/components/atoms/icons/IconLinkedin.vue";
import IconInstagram from "@/components/atoms/icons/IconInstagram.vue";
import IconMedium from "@/components/atoms/icons/IconMedium.vue";
import IconTwitter from "@/components/atoms/icons/IconTwitter.vue";
import IconGithub from "@/components/atoms/icons/IconGithub.vue";
import IconUnsplash from "@/components/atoms/icons/IconUnsplash.vue";
import IconFacebook from "@/components/atoms/icons/IconFacebook.vue";

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
  padding: 0;
  li {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  a {
    // margin-right: $h0;
    @include media(s1) {
      // margin-right: $h2;
      width: $h3;
    }
    svg {
      width: $h2;
      @include media(s0) {
        width: $h1;
      }
      path,
      rect,
      polygon {
        fill: $primary;
        &:hover {
          fill: $grey;
        }
      }
    }
  }
}
</style>
