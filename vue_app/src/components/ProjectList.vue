<template>
  <section class="projects">
    <h1>Projects</h1>
    <div class="projects__list">
      <ProjectListing
        v-for="project in $options.projects"
        :key="project.id"
        :title="project.title"
        :image-src="project.imageSrc"
        :image-alt="project.imageAlt"
        :image-title="project.imageTitle"
        :url="project.url"
      />
    </div>
  </section>
</template>
<script>
import ProjectListing from "./ProjectListing.vue";
import siteData from "@/assets/json/data.json";

export default {
  name: "ProjectList",
  components: {
    ProjectListing
  },
  projects: siteData.projects
};
</script>
<style lang="scss" scoped>
.projects {
  padding-top: 25px;

  > h1 {
    font-size: 0.1px;
    color: transparent;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
  }
}
</style>
