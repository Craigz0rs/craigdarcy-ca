<template>
  <nav class="nav nav--main" aria-label="Main Navigation" role="navigation">
    <ul class="nav__list">
      <li class="nav__item" :key="link.id" v-for="link in links">
        <router-link
          :to="link.href"
          :class="link.classes"
          v-html="link.title"
        />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BaseNavigation",
  data() {
    return {
      links: [
        {
          id: "button1",
          title: "ABOUT ME",
          href: "/",
          classes: ["nav__link"]
        },
        {
          id: "button2",
          title: "MY WORK",
          href: "/projects",
          classes: ["nav__link"]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.nav {
  &__list {
    display: flex;
    justify-content: right;
  }

  &__link {
    display: block;
    position: relative;
    bottom: -6px;
    width: 180px;
    margin: 0 26px 0 33px;
    padding: 12px 0;
    background: transparent;
    border: 2px solid $secondary;
    border-radius: 8px;
    color: $secondary;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    @media screen and (max-width: 499px) {
      bottom: -18px;
      font-size: 16px;
      margin: 0 0px 0 26px;
      padding: 7px 0;
      width: 130px;
    }

    &:hover,
    &:active {
      background: rgba(255, 255, 255, 0.2);
      transition: 0.2s;
    }
  }

  .router-link-exact-active {
    background-color: $secondary;
    color: $primary;
    transition: 0.2s;
    outline: 0;
  }
}
</style>
