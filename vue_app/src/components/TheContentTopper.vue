<template>
  <div class="content__topper">
    <div class="nav__wrap">
      <BaseNavigation />
      <ListingSocialLinks :ulClass="'social__list--nav'"/>
      <!-- <li><button class="navbutton nav-active" @click="showProjects($event)" id="about-toggle">ABOUT ME</button></li>
      <li><button class="navbutton" @click="showProjects($event)" id="project-toggle">MY WORK</button></li>-->
      <!-- <li><a target="_blank" href="http://www.linkedin.com/in/craigdarcy" class="social secondary"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a target="_blank" href="https://github.com/Craigz0rs" class="social secondary"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
      <li><a href="mailto:hello@craigdarcy.ca" class="email secondary"><i class="fa fa-envelope" aria-hidden="true"></i></a><br class="responsive-break"></li>-->
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
  },
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