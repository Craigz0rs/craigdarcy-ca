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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
