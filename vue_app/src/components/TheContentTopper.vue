<template>
  <div class="content__topper">
    <div class="contact-tab" id="nav-tabs">
      <ul>
        <li v-for="button in buttons" :key="button.id">
          <BaseButton v-html="button.title" :classes="button.classes" @click.native="toggle($event)" />
        </li>
      <!-- </ul>
      <ul> -->
        <li v-for="anchor in anchors" v-bind:key="anchor.id">
          <BaseAnchor
            v-html="anchor.title"
            v-bind:classes="anchor.classes"
            v-bind:target="anchor.target"
            v-bind:href="anchor.href"
          />
        </li>
      </ul>
        <!-- <li><button class="navbutton nav-active" @click="showProjects($event)" id="about-toggle">ABOUT ME</button></li>
        <li><button class="navbutton" @click="showProjects($event)" id="project-toggle">MY WORK</button></li>-->
        <!-- <li><a target="_blank" href="http://www.linkedin.com/in/craigdarcy" class="social secondary"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a target="_blank" href="https://github.com/Craigz0rs" class="social secondary"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
        <li><a href="mailto:hello@craigdarcy.ca" class="email secondary"><i class="fa fa-envelope" aria-hidden="true"></i></a><br class="responsive-break"></li>-->
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseAnchor from "./BaseAnchor.vue";

export default {
  name: "ContentTopper",
  components: {
    BaseButton,
    BaseAnchor
  },
  data() {
    return {
      buttons: [
        { id: "button1", title: "ABOUT ME", classes: ["navbutton", "nav-active"], isActive: true },
        { id: "button2", title: "MY WORK", classes: ["navbutton"], isActive: false }
      ],


      anchors: [
        {
          id: "anchor1",
          title: "<i aria-hidden='true' class='fa fa-linkedin-square'></i>",
          target: "_blank",
          href: "http://www.linkedin.com/in/craigdarcy",
          classes: "link--social secondary"
        },
        {
          id: "anchor2",
          title: "<i class='fa fa-github-square' aria-hidden='true'></i>",
          target: "_blank",
          href: "https://github.com/Craigz0rs",
          classes: "link--social secondary"
        },
        {
          id: "anchor3",
          title: "<i class='fa fa-envelope' aria-hidden='true'></i>",
          target: "_blank",
          href: "mailto:hello@craigdarcy.ca",
          classes: "link--social secondary"
        }
      ]
    };
  },
  methods: {
    toggle(event) {
      console.log(event)
      this.toggleButtonActive(event)
    },
    toggleButtonActive() {
      this.isActive = !this.isActive;
      console.log(this)
      // if(this.classes.includes("nav-active")) {
      //   let i = this.classes.indexOf(this.classes.includes("nav-active"));
        
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.content__topper {
  height: 500px;
  width: 200vw;
  transform: rotate(-6deg);
  transform-origin: top left;
  position: absolute;
  z-index: 5;
  background-color: white;
}

.contact-tab {
  position: absolute;
  top: -47px;
  right: 104vw;

  ul {
    display: flex;
    justify-content: right;
    padding-right: 5%;
  }
}
</style>