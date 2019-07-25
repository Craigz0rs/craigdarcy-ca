<template>
    <div class="content">
        <TheContentTopper />
        <AboutMe />
        <ProjectList />
    </div>
</template>

<script>
import TheContentTopper from "./TheContentTopper.vue"
import AboutMe from "./AboutMe.vue"
import ProjectList from "./ProjectList.vue"

export default {
    name: 'TheMainContent',
    components: {
        TheContentTopper,
        AboutMe,
        ProjectList
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

