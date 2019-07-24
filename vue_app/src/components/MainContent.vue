<template>
    <div class="content">
        <ContentTopper />
        <AboutMe />
        <projects />
    </div>
</template>

<script>
import ContentTopper from "./ContentTopper.vue"
import AboutMe from "./AboutMe.vue"
import Projects from "./Projects.vue"

export default {
    name: 'MainContent',
    components: {
        ContentTopper,
        AboutMe,
        Projects
    }
};
</script>

<style lang="scss" scoped>

.content {
    background-color: white;
	position: relative;
	z-index: 5;
}

</style>

