<template>
  <header class="bg-primary-color header">
    <mobile-nav id="mobile-nav" @go-home="goHome"></mobile-nav>
    <nav-menu id="fullscreen-nav" @go-home="goHome"></nav-menu>
  </header>
</template>

<script setup>
import MobileNav from "./navigation/MobileNav.vue";
import NavMenu from "./navigation/NavMenu.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/portfolio");
};
</script>

<style scoped>
header {
  height: 12vh;
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
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