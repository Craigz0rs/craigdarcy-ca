<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <TheHeader/>
    <TheHero/>
    <MainContent/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/TheHeader.vue";
import TheHero from "./components/TheHero.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "app",
  components: {
    TheHeader,
    TheHero,
    MainContent
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
