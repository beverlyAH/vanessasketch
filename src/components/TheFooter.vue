<template>
  <footer class="footer text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
      <p>© Vanessa Cohen {{ date }}</p>
    </aside>
    <nav class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        href="https://bsky.app/profile/vanessasketch.bsky.social"
        target="_blank"
      >
        <div
          id="bsky"
          aria-label="butterfly icon"
          alt="find Vanessa Cohen on Bluesky"
        ></div>
      </a>
    </nav>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const date = computed(() => {
  return new Date().getFullYear();
});
</script>

<style scoped>
#bsky {
  width: 24px;
  height: 24px;
  background-image: url("../assets/bsky_logo_white.png");
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  background-size: contain, contain;
}

#bsky:hover {
  background-image: url("../assets/bsky_logo_green.png");
}
</style>