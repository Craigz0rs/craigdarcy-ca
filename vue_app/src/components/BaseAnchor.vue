<template>
  <a
    :class="classes"
    :href="href"
    :target="target"
  ></a>
</template>

<script>
export default {
  name: "BaseAnchor",
  props: {
    href: String,
    target: {
      type: String,
      default: "_blank"
    },
    classes: Array
  }
};
</script>

<style lang="scss" scoped>

</style>
