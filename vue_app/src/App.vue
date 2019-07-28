<template>
  <div id="app">
    <TheHeader />
    <TheHero />
    <TheMainContent />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import TheMainContent from "./components/TheMainContent.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheHero,
    TheMainContent
  }
};
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
