<template>
  <li>
    <slot>
      <navigation-link url="#laurl"> </navigation-link>
    </slot>
  </li>
</template>

<script>
import NavigationLink from "@/components/atoms/NavigationLink.vue";

export default {
  name: "item-list",
  props: {},
  components: {
    NavigationLink,
  },
};
</script>
