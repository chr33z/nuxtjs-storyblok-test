<template>
  <div v-editable="blok">
    <!-- <component v-for="hotspot in blok.hotspots" :key="hotspot._uid" :blok="blok" :is="blok.component" /> -->
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
  mounted() {
    console.log('PanoHotspot', blok);
  },
};
</script>
