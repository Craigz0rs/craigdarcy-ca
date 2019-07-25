<template>
      <header>
        <ul class="social_fixed">
          <li><a target="_blank" href="http://www.linkedin.com/in/craigdarcy" class="social fixed"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
          <li><a target="_blank" href="https://github.com/Craigz0rs" class="social fixed"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
          <li><a href="mailto:hello@craigdarcy.ca" class="email fixed"><i class="fa fa-envelope" aria-hidden="true"></i></a><br class="responsive-break"></li>
        </ul>
      </header>
</template>

<script>
    export default {
        name: "TheHeader"
    };
</script>

<style lang="scss">
@import url("../assets/styles/import.scss");

header {
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 99;
}

.social_fixed {
    display: flex;
    justify-content: flex-end;
}

</style>

