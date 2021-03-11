<template>
  <div v-editable="blok">
    <h3>{{ blok.title }}</h3>
    <p>{{ blok.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
