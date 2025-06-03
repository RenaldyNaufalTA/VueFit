<script setup>
import { workoutProgram } from "../utils";
const workoutTypes = ["Push", "Pull", "Legs"];
</script>
<template>
  <section id="grid" class="w-full flex flex-col items-center justify-center">
    <div
      class="w-3/4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-4"
    >
      <button
        :key="workoutId"
        v-for="(workout, workoutIdx) in Object.keys(workoutProgram)"
        class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl cursor-pointer"
      >
        <div class="flex flex-row items-center justify-between">
          <p class="text-lg font-bold mb-2">
            Day {{ workoutIdx < 9 ? "0" + (workoutIdx + 1) : workoutIdx + 1 }}
          </p>
          <img
            v-if="workoutIdx % 3 === 0"
            class="w-5 h-5"
            src="../assets/icons/weights-fitness.svg"
            alt="weights-fitness"
          />
          <img
            v-else-if="workoutIdx % 3 === 1"
            class="w-6 h-6"
            src="../assets/icons/fitness-weight-heavy.svg"
            alt="fitness-weight-heavy"
          />
          <img
            v-else-if="workoutIdx % 3 === 2"
            class="w-6 h-6"
            src="../assets/icons/fitness-watch.svg"
            alt="fitness-watch"
          />
        </div>
        <h3 class="text-2xl font-bold text-start">
          {{ workoutTypes[workoutIdx % workoutTypes.length] }}
        </h3>
      </button>
    </div>
  </section>
</template>
<style scoped></style>
