<template>
    <div class="content__topper">
        <div class="contact-tab" id="nav-tabs">
        <ul>
            <Button v-for="button in buttons" v-bind:key="button.id" v-bind:title="button.title" v-bind:classes="button.classes" />
            <Anchor v-for="anchor in anchors" v-bind:key="anchor.id" v-bind:title="anchor.title" v-bind:classes="anchor.classes" v-bind:target="anchor.target" v-bind:href="anchor.href" />
            <!-- <li><button class="navbutton nav-active" @click="showProjects($event)" id="about-toggle">ABOUT ME</button></li>
            <li><button class="navbutton" @click="showProjects($event)" id="project-toggle">MY WORK</button></li> -->
            <!-- <li><a target="_blank" href="http://www.linkedin.com/in/craigdarcy" class="social secondary"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a target="_blank" href="https://github.com/Craigz0rs" class="social secondary"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
            <li><a href="mailto:hello@craigdarcy.ca" class="email secondary"><i class="fa fa-envelope" aria-hidden="true"></i></a><br class="responsive-break"></li> -->
        </ul>
        </div>
    </div> 
</template>

<script>
import Button from "./Button.vue"
import Anchor from "./Anchor.vue"

export default {
    name: 'ContentTopper',
    components: {
        Button,
        Anchor
    },
    data() {
        return {
            buttons: [
                { id: "button1", title: "ABOUT ME", classes: "navbutton" },
                { id: "button2", title: "MY WORK", classes: "navbutton" }
            ],

            anchors: [
                { id: "anchor1", title: "<i aria-hidden='true' class='fa fa-linkedin-square'></i>", target: "_blank", href: "http://www.linkedin.com/in/craigdarcy", classes: "social secondary" }
            ]
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

</style>