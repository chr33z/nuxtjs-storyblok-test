<template>
  <div v-editable="blok" id="container">
    <div id="pano" v-if="isPanolensLoaded && isThreejsLoaded"></div>
    <component v-for="hotspot in blok.hotspots" :key="hotspot._uid" :blok="blok" :is="blok.component" />
  </div>
</template>

<style>
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
}

#container {
  width: 100%;
  height: 100%;
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
  data() {
    return {
      isPanolensLoaded: false,
      isThreejsLoaded: false,
    };
  },
  head() {
    return {
      title: 'Pano Tour Test',
      script: [
        {
          hid: 'three',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r105/three.min.js',
          callback: () => {
            this.isThreejsLoaded = true;
            console.log('threejs loaded');
          },
        },
        {
          hid: 'panolens',
          src: '/lib/panolens.minified.js',
          callback: () => {
            this.isPanolensLoaded = true;
            console.log('panolens loaded');
          },
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(function () {
      this.setupPanorama();
    });
  },
  methods: {
    setupPanorama() {
      const pano_container = document.querySelector('#pano');
      const panorama = new PANOLENS.ImagePanorama(this.blok.panorama_image.filename);

      console.log(this.blok);

      //   this.blok.hotspots.forEach((hotspot) => {
      //     const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
      //     infospot.position.set(0, hotspot.position_x, hotspot.position_y);
      //     infospot.addHoverElement(panel, 150);
      //     panorama.add(infospot);
      //   });

      const viewer = new PANOLENS.Viewer({ container: pano_container, console: true });
      viewer.add(panorama);

      console.log('pano initialized');
    },
  },
};
</script>
