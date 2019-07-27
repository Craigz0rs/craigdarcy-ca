<template>
  <section class="projects">
    <h1>Projects</h1>
    <div class="projects__list">
      <ProjectListing
        v-for="project in projects"
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

export default {
  name: "ProjectList",
  components: {
    ProjectListing
  },
  data: function() {
    return {
      projects: [
        {
          id: "project1",
          title: "HD Training",
          imageSrc: require("../assets/images/teamhd.jpg"),
          imageAlt: "HD Training Project",
          imageTitle: "HD Training Site Project",
          url: "https://hdtraining.maxrepmedia.com"
        },
        {
          id: "project2",
          title: "JS Calculator",
          imageSrc: require("../assets/images/jscalc.png"),
          imageAlt: "JS Calculator Project",
          imageTitle: "JS Calculator App Project",
          url: "https://craigdarcy.ca/jscalculator/"
        },
        {
          id: "project3",
          title: "Hangar 49",
          imageSrc: require("../assets/images/hangar49.jpg"),
          imageAlt: "Hangar 49 Project",
          imageTitle: "JS Calculator Site Project",
          url: "http://www.craigdarcy.ca/hangar49/"
        },
        {
          id: "project4",
          title: "Glenwood Academy",
          imageSrc: require("../assets/images/hangar49.jpg"),
          imageAlt: "Glenwood Academy Project",
          imageTitle: "Glenwood Academy Site Project",
          url: "https://craigdarcy.ca/gacademy/"
        }
      ]
    };
  }
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


