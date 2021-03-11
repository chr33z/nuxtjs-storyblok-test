<template>
  <div v-editable="blok" :v-if="isThreejsLoaded && isPanolensLoaded">
    <!-- <div id="pano"></div> -->
    <pano-hotspot v-for="hotspot in blok.hotspots" :key="hotspot._uid" :blok="hotspot" />
    <!-- <div id="panel"></div> -->
  </div>
</template>

<style>
html,
body {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin: 0;
}

#pano {
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
      script: [
        {
          hid: 'three',
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r105/three.min.js',
          callback: () => {
            this.isThreejsLoaded = true;
          },
        },
        {
          hid: 'panolens',
          src: '/lib/panolens.minified.js',
          callback: () => {
            this.isPanolensLoaded = true;
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

      this.blok.hotspots.forEach((hotspot) => {
        // Find correct hotspot element by quering the uid in its attributes
        const hotspotElements = document.querySelectorAll('.pano-hotspot');
        const hotspotElement = Array.from(hotspotElements).find((hotspotElement) => {
          const data = JSON.parse(hotspotElement.getAttribute('data-blok-c'));
          return data.uid === hotspot._uid;
        });

        if (hotspotElement) {
          console.log('Found hotspot element', hotspotElement);
          const infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
          console.log(hotspot.position_x, hotspot.position_y, hotspot.position_z);
          infospot.position.set(hotspot.position_x, hotspot.position_y, hotspot.position_z);
          infospot.addHoverElement(hotspotElement, 150);
          panorama.add(infospot);
        }
      });

      const viewer = new PANOLENS.Viewer({ container: pano_container, output: 'console', autoHideInfospot: false });
      viewer.add(panorama);
    },
  },
};
</script>
