<template>
    <div class="hero">
        <div class="hero__intro">
          <img src="../assets/images/signature.svg" alt="Craig D'Arcy"/>
          <h1>Craig D'Arcy</h1>
          <h2>Designer and Front-End Developer</h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TheHero"
    };
</script>

<style lang="scss">
    .hero {
        min-height: 530px;
        max-height: 1024px;
        background-color: #076697;
        margin: 0 auto;
        position: relative;
        z-index: 1;

        &__intro {
            max-width: 700px;
            margin-left: 5%;
            padding-top: 75px;
            text-align: center;
            line-height: 75px;
            color: white;
            position: relative;
            z-index: 2;

            > img {
                transform: rotate(-6deg);
            }

            > h1 {
                height: 0.1px;
                font-size: 0.1px;
                color: transparent;
            }

            > h2 {
                margin-top: -50px;
                font-size: 1.9em;
                font-weight: 200;
            }
        }
    }
</style>