<template>
  <form
    id="contact"
    ref="contact"
    class="place-self-center w-1/2 flex flex-col my-5"
    @submit.prevent="handleSubmit"
  >
    <label for="name"> Name: </label>
    <span class="error ml-2" v-if="formContent.name.isValid === false">
      {{ formContent.name.error }}
    </span>
    <input
      v-model="formContent.name.value"
      placeholder="Your name."
      type="text"
      name="name"
      id="name"
      class="block w-full p-2 my-2"
      @blur="validateForm('name')"
      required
    />
    <label for="email" class="my-2">Email address</label>
    <span class="error ml-2" v-if="formContent.email.isValid === false">
      {{ formContent.email.error }}
    </span>
    <input
      v-model="formContent.email.value"
      placeholder="Your email address."
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      class="block w-full p-2 my-2"
      @blur="validateForm('email')"
      required
    />
    <label for="message">Message:</label>
    <span class="error ml-2" v-if="formContent.message.isValid === false">
      {{ formContent.message.error }}
    </span>
    <textarea
      v-model="formContent.message.value"
      placeholder="Your message."
      name="message"
      id="message"
      cols="20"
      rows="5"
      class="block w-full p-2 my-2"
      @blur="validateForm('message')"
      required
    ></textarea>
    <label class="honeypot">Leave this field empty:</label>
    <input class="honeypot" name="_gotcha" v-model="honeypot" />
    <div id="contact-buttons" class="flex flex-rows justify-between">
      <button class="justify-start">Clear</button>
      <button class="justify-end" type="submit" @submit.prevent="handleSubmit">
        Submit
      </button>
    </div>
    <div
      v-if="userAlert"
      id="user-alert"
      class="place-self-center border-2 p-3"
    >
      <span class="mt-2">{{ userAlert }}</span>
    </div>
  </form>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();

const store = useStore();
const contactStatus = computed(() => {
  return store.getters.didEmailSend;
});

const userAlert = ref(null);

watch(contactStatus, () => {
  if (contactStatus.value === true) {
    router.replace("/contact/success/");
  } else {
    userAlert.value = "There was an error sending your message.";
  }
});

const honeypot = ref("");

const formContent = reactive({
  name: {
    value: "",
    isValid: null,
    error: "Please enter a name.",
  },
  email: {
    value: "",
    isValid: null,
    error: "Please enter an email address.",
  },
  message: {
    value: "",
    isValid: null,
    error: "Please enter a message.",
  },
});

const validateForm = (field) => {
  const value = formContent[field].value;

  if (value === "") {
    formContent[field].isValid = false;
    userAlert.value = "Please resolve any errors.";
  } else {
    formContent[field].isValid = true;
  }
};

const handleSubmit = async (event) => {
  if (honeypot.value) {
    // bot detected
    return;
  }

  if (
    formContent.name.isValid === false ||
    formContent.email.isValid === false ||
    formContent.message.isValid === false
  ) {
    return;
  }

  store.dispatch("sendEmail", {
    name: formContent.name.value,
    email: formContent.email.value,
    message: formContent.message.value,
  });
};
</script>

<style scoped>
input,
textarea {
  color: black;
}

.error {
  color: red;
}

.honeypot {
  display: none;
}

form {
  margin-top: 20vh;
}
</style>