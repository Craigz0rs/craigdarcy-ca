<template>

</template>
<script>
import BaseAnchor from "./BaseAnchor.vue";
export default {
  name: "SocialAnchorList",
  components: {
    BaseAnchor
  },
  data() {
    return {
      anchors: [
        {
          id: "anchor1",
          title: "<i aria-hidden='true' class='fa fa-linkedin-square'></i>",
          target: "_blank",
          href: "http://www.linkedin.com/in/craigdarcy",
          classes: "social secondary"
        },
        {
          id: "anchor2",
          title: "<i class='fa fa-github-square' aria-hidden='true'></i>",
          target: "_blank",
          href: "https://github.com/Craigz0rs",
          classes: "social secondary"
        },
        {
          id: "anchor3",
          title: "<i class='fa fa-envelope' aria-hidden='true'></i>",
          target: "_blank",
          href: "mailto:hello@craigdarcy.ca",
          classes: "email secondary"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
