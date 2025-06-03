<script setup>
import { ref } from "vue";
defineProps({ brand: String });

const showMobileMenu = ref(false);
</script>
<template>
  <nav class="bg-transarent relative z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Logo and desktop menu -->
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <router-link to="/">
              <h1 class="welcome text-2xl">{{ brand }}</h1>
            </router-link>
          </div>
          <!-- Mobile menu button-->
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              @click="showMobileMenu = !showMobileMenu"
              class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-primary neo focus:neo-pressed hover:text-white focus:outline-none focus:ring-inset"
              aria-controls="mobile-menu"
              :aria-expanded="showMobileMenu.toString()"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>

              <!-- Hamburger icon -->
              <svg
                v-if="!showMobileMenu"
                class="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <!-- Close icon -->
              <svg
                v-else
                class="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <router-link
                to="/"
                :class="
                  $route.name === 'Welcome'
                    ? 'bg-black/80 text-white'
                    : 'bg-transparent '
                "
                class="rounded px-3 py-2 text-sm font-medium hover:bg-black/70 hover:text-white"
                >Home
              </router-link>
              <router-link
                to="/dashboard"
                :class="
                  $route.name === 'Dashboard' || $route.name === 'Workout'
                    ? 'bg-black/70 text-white'
                    : 'bg-transparent '
                "
                class="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/60 hover:text-white"
                >Dashboard
              </router-link>
              <!-- <router-link
                to="/workout"
                :class="
                  $route.name === 'Workout'
                    ? 'bg-black/70 text-white'
                    : 'bg-transparent '
                "
                class="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/60 hover:text-white"
                >Workout
              </router-link> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="showMobileMenu" class="sm:hidden" id="mobile-menu">
        <div class="flex flex-col gap-1 px-2 pt-2 pb-3">
          <router-link
            to="/"
            :class="
              $route.name === 'Welcome'
                ? 'bg-primary text-white'
                : 'bg-transparent'
            "
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-primary/90 hover:text-white neo focus:neo-pressed"
            >Home
          </router-link>

          <router-link
            to="/dashboard"
            :class="
              $route.name === 'Dashboard' || $route.name === 'Workout'
                ? 'bg-primary text-white'
                : 'bg-transparent'
            "
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-primary/90 hover:text-white neo focus:neo-pressed"
            >Dashboard
          </router-link>
          <!-- <router-link
            to="/workout"
            :class="
              $route.name === 'Workout'
                ? 'bg-primary text-white'
                : 'bg-transparent'
            "
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-primary/90 hover:text-white neo focus:neo-pressed"
            >Workout
          </router-link> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.welcome {
  font-weight: 900;
  line-height: 0.9;
  color: white;
  letter-spacing: -0.1ch;
  text-align: center;
  -webkit-text-stroke: 2px #000;
  text-shadow: 2px 4px #000;
  paint-order: stroke fill;
}
</style>
