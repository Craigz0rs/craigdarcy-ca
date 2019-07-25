<template>
  <header>
    <ul class="social_fixed">
      <li v-for="anchor in anchors" :key="anchor.id">
        <BaseAnchor
          :href="anchor.href"
          :target="anchor.target"
          :classes="anchor.classes"
          v-html="anchor.icon"
        />
      </li>
      <br class="responsive-break" />
    </ul>
  </header>
</template>

<script>
import BaseAnchor from "./BaseAnchor.vue";
export default {
  name: "TheHeader",
  components: {
    BaseAnchor
  },
  data() {
    return {
      anchors: [
        {
          id: "1",
          href: "http://www.linkedin.com/in/craigdarcy",
          target: "_blank",
          classes: "social fixed",
          icon: "<i class='fa fa-linkedin-square' aria-hidden='true'></i>"
        },
        {
          id: "2",
          href: "https://github.com/Craigz0rs",
          target: "_blank",
          classes: "social fixed",
          icon: "<i class='fa fa-github-square' aria-hidden='true'></i>"
        },
        {
          id: "3",
          href: "mailto:hello@craigdarcy.ca",
          classes: "email fixed",
          icon: "<i class='fa fa-envelope' aria-hidden='true'></i>"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
@import url("../assets/styles/import.scss");

header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;
}

.social_fixed {
  display: flex;
  justify-content: flex-end;
}
</style>
