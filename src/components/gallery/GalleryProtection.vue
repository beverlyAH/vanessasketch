<template>
  <form
    id="protected"
    @submit.prevent="validateAndSubmit"
    class="place-self-center m-10"
  >
    <h1 class="mb-3">Protected</h1>
    <p class="my-3">
      Please use the password provided to you to access this gallery.
    </p>
    <label for="password" class="block my-3">Password:</label>
    <span class="text-red-500" v-if="error">{{ error }}</span>
    <input
      type="password"
      placeholder="Please enter the password provided."
      class="input input-bordered w-full max-w-xs form-input"
      v-model="password"
    />
    <button type="submit" class="submit ml-3">Submit</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const error = ref(null);
const password = ref("");

const validateAndSubmit = () => {
  if (password.value === import.meta.env.VITE_PASSWORD) {
    store.commit("setPassword");
    return;
  } else if (password.value === "") {
    error.value = "You must enter a password.";
    return;
  } else {
    error.value = "Incorrect password. Please try again.";
    return;
  }
};
</script>

<style scoped>
.form-input {
  background-color: #340534;
  color: white;
}

button:focus {
  padding: 0.5rem;
}
</style>