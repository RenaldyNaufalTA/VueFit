<script setup>
import { gymHealthFacts } from "../../utils";
import Grid from "../Grid.vue";
const randomTip =
  gymHealthFacts[Math.floor(Math.random() * gymHealthFacts.length)];
</script>
<template>
  <section id="dashboard" class="flex flex-col items-center justify-center">
    <div
      class="w-3/4 flex md:flex-row flex-col items-center justify-center gap-4 my-10"
    >
      <div class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl">
        <h2 class="text-2xl font-bold">Selamat Datang VueFit People👋😁</h2>
        <p class="font-bold mt-4">Tips hari ini</p>
        <div class="mt-2">
          <p class="text-lg italic">&tprime;{{ randomTip }}&tprime;</p>
        </div>
        <button class="neo focus:neo-pressed mt-3 bg-[#2d2d2d] text-white">
          Mulai Workout &rarr;
        </button>
      </div>
    </div>
    <Grid />
  </section>
</template>
<style scoped></style>
