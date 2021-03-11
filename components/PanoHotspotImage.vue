<template>
  <div v-editable="blok">
    <img :src="blok.image.filename" />
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
