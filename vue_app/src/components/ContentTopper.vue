<template>
    <div class="content-topper">
        <div class="contact-tab" id="nav-tabs">
        <ul>
            <li><button class="navbutton nav-active" @click="showProjects($event)" id="about-toggle">ABOUT ME</button></li>
            <li><button class="navbutton" @click="showProjects($event)" id="project-toggle">MY WORK</button></li>
            <li><a target="_blank" href="http://www.linkedin.com/in/craigdarcy" class="social secondary"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
            <li><a target="_blank" href="https://github.com/Craigz0rs" class="social secondary"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
            <li><a href="mailto:hello@craigdarcy.ca" class="email secondary"><i class="fa fa-envelope" aria-hidden="true"></i></a><br class="responsive-break"></li>
        </ul>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'ContentTopper'
};
</script>

<style lang="scss" scoped>

</style>