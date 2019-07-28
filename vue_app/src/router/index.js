import Vue from "vue";
import VueRouter from "vue-router";
import SectionAboutMe from "@/components/SectionAboutMe";
import ProjectList from "@/components/ProjectList";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "SectionAboutMe",
      component: SectionAboutMe
    },
    {
      path: "/projects",
      name: "ProjectList",
      component: ProjectList
    }
  ]
});