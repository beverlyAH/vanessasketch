<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <img
        class="header-logo"
        src="../../assets/vanessasketch_logo.png"
        alt="Vanessa Cohen - illustration and concept art"
        @click="$emit('go-home')"
      />
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>
              <router-link to="/portfolio">Portfolio</router-link>
            </summary>
            <ul class="bg-base-100 rounded-t-none p-2 w-max">
              <li>
                <router-link to="/portfolio/personal">
                  Personal Projects
                </router-link>
              </li>
              <li>
                <router-link to="/portfolio/spongebob">
                  SpongeBob's Idle Adventures
                </router-link>
              </li>
              <li>
                <router-link to="/portfolio/environment"
                  >Environmental Art
                </router-link>
              </li>
              <li>
                <router-link to="/portfolio/hops?protected=true">
                  Protected
                </router-link>
              </li>
            </ul>
          </details>
        </li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emit = defineEmits(["go-home"]);
</script>

<style scoped>
.header-logo {
  max-width: 50%;
  max-height: 70px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>