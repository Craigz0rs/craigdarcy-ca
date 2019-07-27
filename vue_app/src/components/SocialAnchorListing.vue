<template>
  <ul :class="`link__listing${ulClass}`">
    <li v-for="link in anchors" :key="link.id">
      <BaseAnchor v-html="link.title" :target="link.target" :href="link.href" :classes="link.classes" />
    </li>
  </ul>
</template>
<script>
import BaseAnchor from "./BaseAnchor.vue";``
let socialClasses = ["link--social"];
export default {
  name: "SocialAnchorList",
  components: {
    BaseAnchor
  },
  props: {
    ulClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      anchors: [
        {
          id: "anchor1",
          title: "<i aria-hidden='true' class='fa fa-linkedin-square'></i>",
          href: "http://www.linkedin.com/in/craigdarcy",
          classes: socialClasses
        },
        {
          id: "anchor2",
          title: "<i class='fa fa-github-square' aria-hidden='true'></i>",
          href: "https://github.com/Craigz0rs",
          classes: socialClasses
        },
        {
          id: "anchor3",
          title: "<i class='fa fa-envelope' aria-hidden='true'></i>",
          href: "mailto:hello@craigdarcy.ca",
          classes: socialClasses
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.link {
  &__listing {
    &--main-nav {
      @media screen and (max-width: 759px){
        display: none;
      }
    }
  }

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
