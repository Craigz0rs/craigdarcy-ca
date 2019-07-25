<template>
  <article class="project fadeInLeft trigger">
    <h1 class="project-tile-overlay-item" :v-html="title"></h1>
    <div class="article-overlay"></div>
    <img :src="imageSrc" :alt="imageAlt" :title="imageTitle" />
    <a target="_blank" :href="url" class="project-link-overlay"></a>
    <div class="project-link">
      <a target="_blank" :href="url">View Site</a>
    </div>
  </article>
</template>
<script>
export default {
  name: "ProjectListing",
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String,
    imageTitle: String,
    url: String
  }
};
</script>
<style lang="scss" scoped>
</style>
