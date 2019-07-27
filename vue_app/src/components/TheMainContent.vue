<template>
  <div class="content">
    <TheContentTopper />
    <div class="content__wrap">
      <router-view></router-view>
      <!-- <SectionAboutMe />
      <ProjectList /> -->
    </div>
  </div>
</template>

<script>
import TheContentTopper from "./TheContentTopper.vue";
import SectionAboutMe from "./SectionAboutMe.vue";
import ProjectList from "./ProjectList.vue";

export default {
  name: "TheMainContent",
  components: {
    TheContentTopper,
    SectionAboutMe,
    ProjectList
  }
};
</script>

<style lang="scss" scoped>
.content {
  background-color: white;
  position: relative;
  z-index: 5;

  &__wrap {
   	position: relative;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 1600px;
    background-color: white;
    z-index: 10; 
  }
}
</style>
