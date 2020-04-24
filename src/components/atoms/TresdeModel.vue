<template>
  <div class="TresdeObject">
      <model-stl
    :rotation="rotation"
    @on-load="onLoad"
    :controlsOptions="controlsOptions"
    src="./models/001.stl"
  >
  </model-stl>
  </div>
</template>

<script>
import { ModelStl } from "vue-3d-model";
// controls = new THREE.OrbitControls( camera );
export default {
  data: () => ({
    rotation: {
      y: -Math.PI / 2,
      x: 0,
      z: 0,
    },
    controlsOptions: {
      enableZoom: false,
    },
    renderer: {
        alpha: true
    }
  }),
  methods: {
    onLoad() {
      this.rotate();
      this.enableZoom = false;
    },
    rotate() {
      this.rotation.y += 0.01;
      requestAnimationFrame(this.rotate);
    },
  },
  components: {
    ModelStl
  },
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

canvas {
    background-color: blue;
}
</style>
