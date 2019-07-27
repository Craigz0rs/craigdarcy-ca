<template>
  <nav class="nav">
    <ul>
      <li :key="link.id" v-for="link in links">
        <AnchorInternal
          :class="link.classes"
          v-html="link.title"
          :href="link.href"
          :target="link.target"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
import AnchorInternal from "./AnchorInternal.vue";

export default {
  name: "BaseNavigation",
  components: {
    AnchorInternal
  },
  data() {
    return {
      links: [
        {
          id: "button1",
          title: "ABOUT ME",
          href: "/",
          classes: ["nav__link", "nav-active"],
          target: "",
          isActive: true
        },
        {
          id: "button2",
          title: "MY WORK",
          href: "/projects",
          classes: ["nav__link"],
          target: "",
          isActive: false
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav {
  
  &__link {
    display: block;
    position: relative;
    bottom: -6px;
    border: 2px solid white;
    background: transparent;
    color: white;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    margin: 0 26px 0 33px;
    padding: 12px 0;
    width: 180px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    outline: 0;
  }

  .router-link-exact-active {
      background-color: white;
      color: #076697;
      transition: 0.2s;
      outline: 0;
  }
}
</style>
