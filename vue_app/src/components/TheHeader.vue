<template>
  <header class="header">
    <ListingSocialLinks :ul-class="'social__list--header'" />
    <br class="responsive-break" />
  </header>
</template>

<script>
import ListingSocialLinks from "./ListingSocialLinks.vue";
export default {
  name: "TheHeader",
  components: {
    ListingSocialLinks
  },
};
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>
