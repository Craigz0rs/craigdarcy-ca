<template>
  <div class="hero__particles">
    <BaseParticles
      v-for="p in $options.particles"
      :key="p.key"
      :id="p.id"
      :color="p.color"
      :particleOpacity="p.particleOpacity"
      :linesColor="p.linesColor"
      :particlesNumber="p.particlesNumber"
      :shapeType="p.shapeType"
      :particleSize="p.particleSize"
      :linesWidth="p.linesWidth"
      :lineLinked="p.lineLinked"
      :lineOpacity="p.lineOpacity"
      :linesDistance="p.linesDistance"
      :moveSpeed="p.moveSpeed"
      :moveDirection="p.moveDirection"
      :hoverEffect="p.hoverEffect"
      :hoverMode="p.hoverMode"
      :clickEffect="p.clickEffect"
      :clickMode="p.clickMode"
      :modeSize="p.modeSize"
      :modeDuration="p.modeDuration"
      :modeOpacity="p.modeOpacity"
      :modeDistance="p.modeDistance"
      :modeSpeed="p.modeSpeed"
    />
  </div>
</template>
<script>
import BaseParticles from "./BaseParticles.vue";
import particlesData from "@/assets/json/data.json";
export default {
  name: "ParticlesHome",
  components: {
    BaseParticles
  },
  particles: particlesData.particles.home
};
</script>
<style lang="scss">
.particles-js {
  width: 100%;
  height: 100vh;
  min-height: 740px;
  max-height: 1024px;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  z-index: 1;
  position: absolute;
}
</style>
