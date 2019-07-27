<template>
  <a :href="href" :target="target" :class="classes"></a>
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
    classes: String
  }
};
</script>

<style lang="scss" scoped>

</style>
