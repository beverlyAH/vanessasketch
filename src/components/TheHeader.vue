<template>
  <header class="bg-primary-color header">
    <mobile-nav id="mobile-nav"></mobile-nav>
    <nav-menu id="fullscreen-nav"></nav-menu>
  </header>
</template>

<script setup>
import MobileNav from "./navigation/MobileNav.vue";
import NavMenu from "./navigation/NavMenu.vue";
</script>

<style scoped>
header {
  height: 12vh;
  display: flex;
  justify-content: center;
}

#mobile-nav {
  @media screen and (min-width: 768px) {
    display: none;
  }
}

#fullscreen-nav {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>