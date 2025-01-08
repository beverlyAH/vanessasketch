<template>
  <div class="grid max-w-fit">
    <img
      class="header-logo align-self-center"
      src="../../assets/vanessasketch_logo_mobile.png"
      alt="Vanessa Cohen - illustration and concept art"
    />
    <ul class="menu bg-base-100 rounded-box">
      <li>
        <details class="max-w-1/2">
          <summary>
            <router-link to="/portfolio"> Portfolio </router-link>
          </summary>
          <ul class="bg-base-100 rounded-box">
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
              <router-link to="/portfolio/environment">
                Environmental Art
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
</template>

<style scoped>
.menu {
  justify-content: space-between;
  align-content: center;
  height: 9vh;
}
.header-logo {
  display: inline-block;
  width: 60%;
  margin-top: 1rem;
  place-self: center;
}
</style>