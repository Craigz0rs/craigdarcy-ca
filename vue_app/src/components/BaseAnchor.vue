<template>
  <a :href="href" :target="target" :class="classes"></a>
</template>

<script>
export default {
  name: "BaseAnchor",
  props: {
    href: String,
    target: String,
    classes: String
  }
};
</script>

<style lang="scss" scoped>
.link {
  &--social {
    position: relative;
    bottom: 0px;
    font-size: 3.5em;
    padding: 5px 15px;
    margin: 10px 10px;
    color: white;
    text-decoration: none;
    transition: 0.3s ease;
  }
}
</style>
