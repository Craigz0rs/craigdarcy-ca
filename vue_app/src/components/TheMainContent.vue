<template>
    <div class="content">
        <TheContentTopper />
        <AboutMe />
        <projects />
    </div>
</template>

<script>
import TheContentTopper from "./TheContentTopper.vue"
import AboutMe from "./AboutMe.vue"
import Projects from "./Projects.vue"

export default {
    name: 'TheMainContent',
    components: {
        TheContentTopper,
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

