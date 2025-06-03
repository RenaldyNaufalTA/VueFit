<script setup>
import { defineProps, inject } from "vue";
import { workoutProgram } from "../utils";
const handleSelectWorkout = inject("handleSelectWorkout");
const workoutTypes = inject("workoutTypes");
const firstIncompleteWorkoutIndex = inject("firstIncompleteWorkoutIndex");
const handleResetWorkouts = inject("handleResetWorkouts");
</script>
<template>
  <section id="grid" class="w-full flex flex-col items-center justify-center">
    <div
      class="w-3/4 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mt-4"
    >
      <button
        disabled="firstIncompleteWorkoutIndex === -1"
        :class="{
          'cursor-not-allowed opacity-50':
            workoutIdx > 0 && workoutIdx > firstIncompleteWorkoutIndex,
        }"
        :key="workoutIdx"
        @click="handleSelectWorkout(workoutIdx)"
        v-bind:key="workoutIdx"
        v-for="(workout, workoutIdx) in Object.keys(workoutProgram)"
        class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
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
      <button
        @click="handleResetWorkouts"
        disabled="firstIncompleteWorkoutIndex != -1"
        :class="{
          'cursor-not-allowed opacity-50': firstIncompleteWorkoutIndex != -1,
        }"
        class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
      >
        <div class="flex items-center justify-center">
          <img
            src="../assets/icons/power-reset.svg"
            alt="Reset Icon"
            class="w-6 h-6 text-end"
          />
          <span class="ml-2 text-base font-semibold">Reset Workouts</span>
        </div>
      </button>
    </div>
  </section>
</template>
<style scoped></style>
