<template>
    <article class="project fadeInLeft trigger">
        <h1 class="project-tile-overlay-item" :v-html="title"></h1>
        <div class="article-overlay"></div>
            <img :src="imageSrc" :alt="imageAlt" :title="imageTitle">
            <a target="_blank" :href="aUrl" class="project-link-overlay">
            </a>
        <div class="project-link"><a target="_blank" :href="aUrl">View Site</a></div>
    </article>
</template>
<script>
export default {
    name: 'ProjectListing',
    props: [
        'title',
        'imageSrc',
        'imageAlt',
        'imageTitle',
        'aUrl'
    ]
}
</script>
<style lang="scss" scoped>

</style>
