<template>
    <section id="projects">
        <h1>Projects</h1>
        <div class="project-list-wrapper">
            <ProjectListing v-for="project in projects" :key="project.id" :title="project.title" :image-src="project.imageSrc" :image-alt="project.imageAlt" :image-title="project.imageTitle" :url="project.url" />
        </div>
    </section>
</template>
<script>
import ProjectListing from "./ProjectListing.vue"

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
                    imageSrc: "../assets/teamhd.jpg", 
                    imageAlt: "HD Training Project", 
                    imageTitle: "HD Training Site Project", 
                    url: "https://hdtraining.maxrepmedia.com" 
                },
                {   
                    id: "project2", 
                    title: "JS Calculator", 
                    imageSrc: "../assets/jscalc.png", 
                    imageAlt: "JS Calculator Project", 
                    imageTitle: "JS Calculator App Project", 
                    url: "https://craigdarcy.ca/jscalculator/" 
                },
                {   
                    id: "project3", 
                    title: "Hangar 49", 
                    imageSrc: "../assets/hangar49.jpg", 
                    imageAlt: "Hangar 49 Project", 
                    imageTitle: "JS Calculator Site Project", 
                    url: "http://www.craigdarcy.ca/hangar49/" 
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


