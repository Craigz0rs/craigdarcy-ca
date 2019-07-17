<template>
    <div class="content">
        <ContentTopper />
    </div>
</template>

<script>
import ContentTopper from "./ContentTopper.vue"

export default {
    name: 'MainContent',
    components: {
        ContentTopper
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

