<template>
  <div class="pano-hotspot" v-editable="blok">
    <component v-for="blok in blok.content" :key="blok._uid" :blok="blok" :is="blok.component" />
  </div>
</template>

<style>
.pano-hotspot {
  width: 320px;
  height: 240px;
  background-color: white;
  display: none;
}
</style>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.blok);
  },
};
</script>
