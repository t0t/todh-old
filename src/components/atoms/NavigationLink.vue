<template>
  <a :href="url" class="Clase">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "navigation-link",
  props: {
    url: String
  }
};
</script>