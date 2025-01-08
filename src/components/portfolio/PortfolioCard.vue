<template>
  <div
    class="h-fit portfolio-category bg-base-100 text-neutral-content items-center mb-5"
  >
    <router-link :to="categoryPath"
      ><img
        class="portfolio-listing-image align-self-center"
        :src="props.imagePath"
        :alt="props.categoryName"
    /></router-link>
    <h3>
      <router-link :to="categoryPath">{{ props.categoryName }}</router-link>
    </h3>
    <p class="text-sm">
      {{ props.description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps([
  "categoryName",
  "imagePath",
  "routePath",
  "description",
]);

const categoryPath = computed(() => {
  return "/portfolio" + props.routePath;
});
</script>

<style scoped>
.portfolio-category {
  display: inline-block;
  width: 20rem;
  margin: 0.5rem;
  justify-content: space-between;
  border-radius: 25px;
  background-color: #340534;
  padding: 0 0 10px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }
}
.portfolio-category,
p,
h3 {
  padding: 0.5rem;
}

img {
  margin-bottom: 0.5rem;
  object-fit: cover;
  object-position: center center;
}
.portfolio-listing-image {
  width: 100%;
  height: 20rem;
  border-radius: 25px;
}
</style>

