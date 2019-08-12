<template>
  <article class="project fadeInLeft trigger">
    <a
      :aria-label="`External link to ${title} project website`"
      target="_blank"
      :href="url"
      class="project__link-overlay"
    >
      <h1 class="project__title">{{ title }}</h1>
      <div class="project__overlay project__overlay--main"></div>
      <div class="project__overlay project__overlay--bottom" :style="projectStyles">
        <ul class="project__tools" aria-label="Tools used in this project include:">
          <li class="project__tool" v-for="tool in projectToolsOrdered" :key="tool.id">
            <div
              class="project__svg-wrap project__svg-wrap--external"
              v-if="!tool.prefix"
              v-html="externalSvg(tool.name)"
            >
              <span class="screenreader__text">{{ tool.name }}</span>
            </div>
            <div class="project__svg-wrap" v-if="tool.prefix">
              <font-awesome-icon :icon="[tool.prefix, tool.name]" class="project__icon"></font-awesome-icon>
              <span class="screenreader__text">{{ tool.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <progressive-img class="project__image" :src="imageSrcComputed" :alt="imageAlt" />
      <div class="project__action">
        <span>View Site</span>
      </div>
    </a>
  </article>
</template>
<script>
import gridsome from "!raw-loader!@/assets/images/icons/gridsome.svg";

const externalIcons = {
  gridsome: gridsome
};

import {
  faVuejs,
  faJs,
  faWordpress,
  faCss3,
  faHtml5,
  faSass,
  faPhp
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faVuejs, faJs, faWordpress, faCss3, faHtml5, faSass, faPhp);

export default {
  name: "ProjectListing",
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String,
    imageTitle: String,
    url: String,
    projectStyles: Object,
    projectSpecs: String,
    projectTools: Array
  },
  computed: {
    imageSrcComputed() {
      return require(`@/assets/images/${this.imageSrc}`);
    },
    projectToolsOrdered() {
      let ordered = this.projectTools.sort((a, b) => (a.id < b.id ? -1 : 1));
      if (ordered.length > 3) {
        ordered.length = 3;
      }
      return ordered.reverse();
    }
  },
  methods: {
    externalSvg(icon) {
      if (externalIcons.hasOwnProperty(icon)) {
        return externalIcons[icon];
      }
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

  @media screen and (max-width: 1023px) {
    width: calc(100% - 50px);
    margin: 0 50px 50px;
    height: 500px;
  }

  @media screen and (max-width: 799px) {
    margin: 0 25px 40px;
    height: 400px;
  }

  @media screen and (max-width: 500px) {
    width: calc(100vw - 30px);
    margin: 0 15px 30px;
    height: calc(100vw - 60px);
  }

  &__overlay {
    position: absolute;

    &--main {
      top: -50%;
      left: -25%;
      height: 200%;
      width: 0%;
      transform: rotate(-24deg);
      background: rgba(0, 0, 0, 0.6);
      z-index: 2;
      transition: 0.2s;
    }

    &--bottom {
      bottom: -40%;
      left: -10%;
      height: 40%;
      width: 120%;
      background: rgba(255, 255, 255, 0.8);
      transform: rotate(0deg);
      transform-origin: top left;
      z-index: 3;
      transition: 0.2s ease-in-out;
    }
  }

  &:hover,
  &:focus {
    .project {
      &__overlay {
        &--main {
          width: 100%;
          transition: 0.2s;
        }

        &--bottom {
          bottom: -32%;
          box-shadow: 0 -13px 27px -5px rgba(50, 50, 93, 0.25),
            0 -8px 16px -8px rgba(0, 0, 0, 0.3),
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
          transform: rotate(-7deg);
          transition: 0.2s ease-in-out;
        }
      }
    }

    .project__title {
      transition: 0.2s;
      color: $white;
      z-index: 3;
    }

    .project__action {
      display: block;
      z-index: 11;

      @media screen and (max-width: 650px) {
        left: calc(50% - 90px);
      }
    }

    .project__image {
      img {
        transition: 0.2s ease-in-out;
        transform: scale(1.1);
        filter: grayscale(50%) blur(2px);
      }
    }

    .project__action > span {
      color: $white;
      border: 2px solid $white;
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

    @media screen and (max-width: 500px) {
      left: 0;
      width: 100%;
      padding: 0 50px;
    }

    @media screen and (max-width: 400px) {
      font-size: 2.6em;
      padding: 0 25px;
    }
  }

  &__image {
    height: 100%;

    img {
      object-fit: cover;
      object-position: top;
      min-height: 100%;
      width: 100%;
      min-height: 100%;
      transition: 0.2s;
    }
  }

  // .progressive-image-main {
  //   min-height: 100%;
  // }

  &__link-overlay {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 10;
    transition: 0.1s;
  }

  &__action {
    position: absolute;
    top: 55%;
    left: 35%;
    display: block;
    transition: 0.2s;
    z-index: 11;

    > span {
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

  &__tools {
    display: flex;
    justify-content: flex-end;
    padding-right: 15%;
  }

  &__svg-wrap--external {
    > svg {
      padding: 0.5rem;
    }
  }

  &__tool {
    margin: 0.75rem 0.75rem;

    svg {
      display: block;
      height: 4vw;
      width: 4vw !important;

      @media screen and (max-width: 1023px) {
        height: 9vw;
        width: 9vw !important;
      }
    }

    &:last-of-type {
      margin-top: 0.4rem;

      svg {
        height: 7vw;
        width: 7vw !important;
        max-height: 110px;
        max-width: 110px;

        @media screen and (max-width: 1023px) {
          height: 12vw;
          width: 12vw !important;
        }
      }
    }
  }
}
</style>
