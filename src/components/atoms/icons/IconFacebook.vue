<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <title>{{ title }}</title>
  <path d="M15.3,0H0.7C0.3,0,0,0.3,0,0.7v14.7C0,15.7,0.3,16,0.7,16H8v-5H6V8h2V6c0-2.1,1.2-3,3-3 c0.9,0,1.8,0,2,0v3h-1c-0.6,0-1,0.4-1,1v1h2.6L13,11h-2v5h4.3c0.4,0,0.7-0.3,0.7-0.7V0.7C16,0.3,15.7,0,15.3,0z" />
  </svg>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "logo facebook"
    }
  }
};
</script>
