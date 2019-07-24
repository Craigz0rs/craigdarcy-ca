<template>
    <section id="projects">
        <h1>Projects</h1>
        <div class="project-list-wrapper">
            <Project v-for="project in projects" :key="project.id" :title="project.title" :imageSrc="project.imageSrc" :imageAlt="project.imageAlt" :imageTitle="project.imageTitle" :aUrl="project.aUrl" />
        </div>
    </section>
</template>
<script>
import Project from "./Project.vue"

export default {
    name: "projects",
    components: {
        Project
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
                    aUrl: "https://hdtraining.maxrepmedia.com" 
                },
                {   
                    id: "project2", 
                    title: "JS Calculator", 
                    imageSrc: "../assets/jscalc.png", 
                    imageAlt: "JS Calculator Project", 
                    imageTitle: "JS Calculator App Project", 
                    aUrl: "https://craigdarcy.ca/jscalculator/" 
                },
                {   
                    id: "project3", 
                    title: "Hangar 49", 
                    imageSrc: "../assets/hangar49.jpg", 
                    imageAlt: "Hangar 49 Project", 
                    imageTitle: "JS Calculator Site Project", 
                    aUrl: "http://www.craigdarcy.ca/hangar49/" 
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


