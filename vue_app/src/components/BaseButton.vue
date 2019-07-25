<template>
  <button :class="classes"></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    classes: String
  }
};
</script>

<style lang="scss">
.navbutton {
  position: relative;
  bottom: -6px;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 20px;
  margin: 0 26px 0 33px;
  padding: 10px 0;
  width: 180px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
  outline: 0;
}
</style>