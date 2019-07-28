<template>
  <ul :class="`social__list ${ulClass}`">
    <li class="social__listing" v-for="link in anchors" :key="link.id">
      <a v-html="link.title" :href="link.href" :class="link.classes" target="_blank"></a>
    </li>
  </ul>
</template>
<script>
let socialClasses = ["social__link"];

export default {
  name: "ListingSocialLinks",
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
          classes: socialClasses + " social__link--email"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.social {
  &__link {
      display: block;
      position: relative;
      bottom: 0px;
      font-size: 3.5em;
      padding: 5px 15px;
      margin: 10px 10px;
      color: $white;
      text-decoration: none;
      transition: 0.3s ease;
  }

  &__list {
    display: flex;
    justify-content: right;

    &--nav {
      .social__link {
        bottom: calc(3.5rem - 50%);

        &--email {
          bottom: calc(3.5rem - 47%);
        }
      }

      @media screen and (max-width: 759px) {
        display: none;
      }
    }

    &--header {
      display: none;

      @media screen and (max-width: 759px) {
        display: flex;
        justify-content: flex-end;
      }

      @media only screen and (max-width: 499px) {
        justify-content: center;
      }

      .social__link {
        font-size: 1.7em;
        margin: 0;
        padding: 10px 15px;
      }
    }
  }
}
</style>
