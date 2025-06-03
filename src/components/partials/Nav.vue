<script setup>
import { ref } from "vue";
defineProps({ brand: String });

const showMobileMenu = ref(false);
</script>
<template>
  <nav class="bg-transarent relative z-50">
    <div class="mx-auto max-w-7xl px-2 sm:px-6">
      <div class="relative flex h-16 items-center justify-between">
        <!-- Mobile menu button-->
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            @click="showMobileMenu = !showMobileMenu"
            class="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-inset"
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

        <!-- Logo and desktop menu -->
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex shrink-0 items-center">
            <router-link to="/">
              <h1 class="welcome text-2xl">{{ brand }}</h1>
            </router-link>
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
                  $route.name === 'Dashboard'
                    ? 'bg-black/70 text-white'
                    : 'bg-transparent '
                "
                class="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/60 hover:text-white"
                >Dashboard
              </router-link>
              <router-link
                to="/workout"
                :class="
                  $route.name === 'Workout'
                    ? 'bg-black/70 text-white'
                    : 'bg-transparent '
                "
                class="rounded-md px-3 py-2 text-sm font-medium hover:bg-black/60 hover:text-white"
                >Workout
              </router-link>
            </div>
          </div>
        </div>

        <!-- Right side buttons (notification, profile) -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <div class="relative ml-3">
            <!-- <button
              type="button"
              class="relative flex rounded text-sm"
              id="user-menu-button"
            >
              GitHub
              <svg
                class="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </button> -->
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-show="showMobileMenu" class="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <router-link
            to="/"
            :class="
              $route.name === 'Welcome'
                ? 'bg-black/70 text-white'
                : 'bg-transparent'
            "
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium hover:bg-black/60 hover:text-white"
            >Home
          </router-link>

          <router-link
            to="/dashboard"
            :class="
              $route.name === 'Dashboard'
                ? 'bg-black/70 text-white'
                : 'bg-transparent'
            "
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium hover:bg-black/60 hover:text-white"
            >Dashboard
          </router-link>
          <router-link
            to="/workout"
            :class="
              $route.name === 'Workout'
                ? 'bg-black/70 text-white'
                : 'bg-transparent'
            "
            class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium hover:bg-black/60 hover:text-white"
            >Workout
          </router-link>
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
