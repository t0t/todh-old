<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <title>{{ title }}</title>
    <rect x="5" width="6" height="4.5" />
    <polygon points="11 7 16 7 16 16 0 16 0 7 5 7 5 11.5 11 11.5 11 7" />
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "logo medium"
    }
  }
};
</script>
