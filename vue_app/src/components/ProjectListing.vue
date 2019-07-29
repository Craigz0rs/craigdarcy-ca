<template>
  <article class="project fadeInLeft trigger">
    <h1 class="project__title">{{ title }}</h1>
    <div class="project__overlay"></div>
    <img class="project__image" :src="imageSrcComputed" :alt="imageAlt" :title="imageTitle" />
    <a target="_blank" :href="url" class="project__link-overlay"></a>
    <div class="project__link">
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
  },
  computed: {
    imageSrcComputed() {
      return require(`@/assets/images/${this.imageSrc}`)
    }
  }
};
</script>
<style lang="scss">
.project {
  position: relative;
  width: calc(50% - 50px);
  height: 400px;
  margin: 0 25px 50px;
  overflow: hidden;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);

  &:hover,
  &:focus {
    .project__title {
      transition: 0.2s;
      color: white;
      z-index: 3;
    }

    .project__link {
      display: block;
      z-index: 11;
    }

    .project__image {
      transition: 0.2s ease-in-out;
      transform: scale(1.1);
      filter: grayscale(50%) blur(2px);
    }

    .project__overlay {
      transform: translateX(14%) rotate(-17deg);
      transition: 0.2s;
    }

    .project__link > a {
      color: white;
      border: 2px solid white;
      transition: 0.1s;
    }
  }

  &__title {
    position: absolute;
    left: 15%;
    top: 20%;
    text-align: center;
    color: transparent;
    font-size: 3em;
    font-weight: 100;
  }

  &__image {
    position: relative;
    object-fit: cover;
    object-position: top;
    height: 100%;
    width: 100%;
    transition: 0.2s;
  }

  &__link-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 0%;
    z-index: 10;
    transition: 0.1s;
  }

  &__link {
    position: absolute;
    top: 55%;
    left: 35%;
    display: block;
    transition: 0.2s;
    z-index: 11;

    > a {
      display: block;
      color: transparent;
      border: 2px solid transparent;
      text-decoration: none;
      font-weight: 200;
      font-size: 20px;
      text-align: center;
      padding: 10px 0;
      width: 180px;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.1s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
        transition: 0.2s;
      }
    }
  }
}
</style>
