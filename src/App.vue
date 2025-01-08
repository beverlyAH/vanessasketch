
<template>
  <the-header></the-header>
  <div id="main">
    <router-view :key="$route.fullPath"></router-view>
  </div>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style>
#main {
  margin-top: 12vh;
  height: 80vh;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
}
</style>
