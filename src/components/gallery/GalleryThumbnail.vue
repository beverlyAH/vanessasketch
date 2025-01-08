<template>
  <div @click="toggleLightbox">
    <img
      class="object-cover object-center w-full h-40 max-w-full rounded-lg mb-2.5"
      :src="thumbnailSrc"
      :alt="props.description"
    />
    <h2 class="place-self-center">{{ title }}</h2>
    <p class="place-self-center">{{ props.description }}</p>
    <the-lightbox
      :file="fullImageSrc"
      :title="props.title"
      :description="props.description"
      v-show="isFocused"
    ></the-lightbox>
  </div>
</template>

<script setup>
import TheLightbox from "./TheLightbox.vue";
import { ref, defineProps, computed } from "vue";

const isFocused = ref(false);

const toggleLightbox = () => {
  isFocused.value = !isFocused.value;
};

const props = defineProps([
  "id",
  "thumbnail",
  "file",
  "date",
  "title",
  "description",
  "category",
]);

const thumbnailSrc = computed(() => {
  return new URL(
    `/gallery/thumbnails/${props.category}/${props.thumbnail}`,
    import.meta.url
  ).href;
}).value;

const fullImageSrc = computed(() => {
  return new URL(
    `/gallery/full/${props.category}/${props.file}`,
    import.meta.url
  ).href;
}).value;
</script>

<style scoped>
</style>