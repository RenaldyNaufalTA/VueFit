<script setup>
import Nav from "../partials/Nav.vue";
</script>
<template>
  <header class="relative px-8 py-3 w-full">
    <!-- Background image with dark overlay -->
    <!-- <div
      v-if="$route.name === 'Welcome'"
      class="absolute inset-0 bg-cover bg-center z-0 bg-img"
    >
      <div
        class="absolute inset-0 bg-black opacity-70 pointer-events-none"
      ></div>
    </div> -->

    <!-- Top Navigation -->
    <Nav v-bind:brand="'VueFit'" />

    <!-- Content -->
    <!-- <div
      v-if="$route.name === 'Welcome'"
      class="relative z-10 w-full h-auto flex justify-start items-start flex-row p-20"
    >
      <div class="basis-2/3 text-white">
        <h1 class="welcome text-3xl font-bold">Welcome to FitnessVue</h1>
        <p class="text-base text-desc mt-4">
          Your journey to a healthier life starts here. <br />
          Join us for workouts, nutrition tips, and community support.
        </p>

        <p class="text-base text-desc mt-4">
          Let's achieve your fitness goals together!
        </p>
        <button class="neo hover:neo-pressed my-2 text-white">
          <router-link to="/dashboard"> Begin &rarr; </router-link>
        </button>
      </div>
      <div class="basis-1/3"></div>
    </div> -->
  </header>
  <main>
    <slot />
  </main>
  <footer class="text-center mt-10">
    <p class="text-sm">
      Made with ❤️ by <strong>Renaldy </strong>
      <a href="https://github.com/RenaldyNaufalTA" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    </p>
  </footer>
</template>
<style scoped>
/* .bg-img {
  background: url("../../assets/img/gym.jpg") no-repeat center center;
  background-size: cover;
} */
</style>
