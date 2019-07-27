<template>
  <router-link
    :class="classes"
    :to="href"
    :target="target"
  ></router-link>
</template>

<script>
import BaseAnchor from './BaseAnchor';

export default {
  extends: BaseAnchor,
  name: "AnchorInternal",
};
</script>

<style lang="scss" scoped>

</style>
