<template>
    <div class="content">
        <TheContentTopper />
        <SectionAboutMe />
        <ProjectList />
    </div>
</template>

<script>
import TheContentTopper from "./TheContentTopper.vue"
import SectionAboutMe from "./SectionAboutMe.vue"
import ProjectList from "./ProjectList.vue"

export default {
    name: 'TheMainContent',
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
}

</style>

