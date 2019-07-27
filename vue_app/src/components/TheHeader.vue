<template>
  <header class="header">
    <ul class="header__social-list">
      <li v-for="anchor in anchors" :key="anchor.id" class="header__social-listing">
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
          classes: ["link--social", "fixed"],
          icon: "<i class='fa fa-linkedin-square' aria-hidden='true'></i>"
        },
        {
          id: "2",
          href: "https://github.com/Craigz0rs",
          target: "_blank",
          classes: ["link--social", "fixed"],
          icon: "<i class='fa fa-github-square' aria-hidden='true'></i>"
        },
        {
          id: "3",
          href: "mailto:hello@craigdarcy.ca",
          classes: ["link--social", "fixed"],
          icon: "<i class='fa fa-envelope' aria-hidden='true'></i>"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
@import url("../assets/styles/import.scss");

.header {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 99;

  &__social-list {
    display: none;

    @media screen and (max-width: 759px) {
      display: flex;
      justify-content: flex-end;
    }

    @media only screen and (max-width: 499px) {
      justify-content: center;
    }
  }

  &__social-listing {
    > a {
      font-size: 1.7em;
      margin: 0;
      padding: 10px 15px;
    }
  }
}
</style>
