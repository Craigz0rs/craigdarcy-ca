<template>
  <div class="content__topper">
    <div class="nav__wrap">
      <BaseNavigation />
      <ListingSocialLinks :ulClass="'social__list--nav'" />
    </div>
  </div>
</template>

<script>
import ListingSocialLinks from "./ListingSocialLinks.vue";
import BaseNavigation from "./BaseNavigation.vue";

export default {
  name: "ContentTopper",
  components: {
    ListingSocialLinks,
    BaseNavigation
  },
  data() {
    return {
      buttons: [
        {
          id: "button1",
          title: "ABOUT ME",
          classes: ["navbutton", "nav-active"],
          isActive: true
        },
        {
          id: "button2",
          title: "MY WORK",
          classes: ["navbutton"],
          isActive: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.content__topper {
  height: 500px;
  width: 200vw;
  transform: rotate(-6deg);
  transform-origin: top left;
  position: absolute;
  z-index: 5;
  background-color: white;
}

.nav__wrap {
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: -47px;
  right: 104vw;

  ul {
    // display: flex;
    // justify-content: right;
  }
}
</style>
