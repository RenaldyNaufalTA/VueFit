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
  <footer></footer>
</template>
<style scoped>
/* .bg-img {
  background: url("../../assets/img/gym.jpg") no-repeat center center;
  background-size: cover;
} */
</style>
