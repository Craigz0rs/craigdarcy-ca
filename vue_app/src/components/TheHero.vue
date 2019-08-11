<template>
  <div class="hero">
    <ParticlesHome />
    <div class="hero__intro">
      <img
        class="hero__logo"
        src="../assets/images/signature.svg"
        aria-hidden="true"
      />
      <h1>Craig D'Arcy</h1>
      <h2>Designer and Front-End Developer</h2>
    </div>
  </div>
</template>

<script>
import ParticlesHome from "./ParticlesHome.vue";
export default {
  name: "TheHero",
  components: {
    ParticlesHome
  }
};
</script>

<style lang="scss">
.hero {
  min-height: 530px;
  max-height: 1024px;
  background-color: $primary;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media only screen and (max-width: 499px) {
    min-height: 390px;
  }

  &__intro {
    max-width: 700px;
    margin-left: 5%;
    padding-top: 75px;
    text-align: center;
    line-height: 75px;
    color: $white;
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

    @media only screen and (max-width: 1045px) {
      margin-right: 30px;
    }

    @media only screen and (max-width: 759px) {
      text-align: center;
      color: white;
      line-height: 55px;
      margin: 0 auto;
      padding: 75px 30px;

      > h2 {
        font-size: 1.8em;
      }
    }

    @media only screen and (max-width: 649px) {
      > h2 {
        font-size: 1.5em;
      }
    }

    @media only screen and (max-width: 549px) {
      > h2 {
        font-size: 1.3em;
        margin-top: -14px;
        line-height: 20px;
        padding: 0 25px;
      }
    }

    @media only screen and (max-width: 499px) {
      padding: 100px 17px;
    }
    @media only screen and (max-width: 399px) {
      > h2 {
        font-size: 1.1em;
      }
    }
  }
}
</style>
