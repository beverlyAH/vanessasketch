<template>
  <div id="gallery">
    <!-- check if the gallery is protected -->
    <gallery-protection v-if="isProtected" />
    <!-- if not, display the gallery -->
    <div v-else>
      <h1 class="place-self-center">{{ category }}</h1>
      <p v-html="galleryDescription" class="place-self-center"></p>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 mt-2.5 ml-8 mr-8 mb-2.5"
      >
        <gallery-thumbnail
          v-for="item of gallery"
          :key="item.id"
          :id="item.id"
          :thumbnail="item.fileThumbnail"
          :file="item.fileFullSize"
          :date="item.date"
          :title="item.title"
          :description="item.description"
          :category="category"
        ></gallery-thumbnail>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import GalleryProtection from "./GalleryProtection.vue";
import GalleryThumbnail from "./GalleryThumbnail.vue";
import TheLightbox from "./TheLightbox.vue";

import GALLERY from "../../data.js";

const store = useStore();
const route = useRoute();
const category = route.params.category;

// is this gallery protected?
const isProtected = ref(Boolean(route.query.protected));

// has the password been submitted?
const passwordSubmitted = computed(() => {
  return store.getters.passwordStatus;
});

// watch for password
watch(passwordSubmitted, () => {
  if (passwordSubmitted.value === true) {
    // password submitted, gallery is no longer protected
    isProtected.value = false;
  }
});

const gallery = GALLERY[category];
const galleryDescription = GALLERY.descriptions[category];
</script>

<style scoped>
h1 {
  text-transform: capitalize;
}
</style>