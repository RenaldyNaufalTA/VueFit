<script setup>
import { workoutProgram } from "../../utils";
import Grid from "../Grid.vue";
const selectedWorkout = 4;
const { workout, warmup } = workoutProgram[selectedWorkout];
// console.log(workout, warmup);
</script>
<template>
  <section id="dashboard" class="flex flex-col items-center justify-center">
    <div class="w-3/4 gap-4 mt-10">
      <div class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl">
        <h2 class="text-lg font-bold">
          Day
          {{
            selectedWorkout < 9
              ? "0" + (selectedWorkout + 1)
              : selectedWorkout + 1
          }}
        </h2>
        icon
        <h3>Type</h3>
      </div>
      <div class="workout-grid grid grid-cols-2">
        <div class="workout-item">
          <h4 class="font-bold">Warmup</h4>
          <p>Sets</p>
          <p>Reps</p>
          <p>Weight</p>
          <div class="workout-grid" v-for="(w, wIdx) in warmup" :key="wIdx">
            <div class="workout-grid flex gap-2">
              <p>{{ w.name }}</p>
              <button
                class="bg-yellow-50 text-yellow-800 ring-1 ring-yellow-600/20 rounded-full px-2 py-1 text-xs"
              >
                ?
              </button>
            </div>
            <p>{{ w.sets }}</p>
            <p>{{ w.reps }}</p>
            <input type="text" placeholder="14kg" class="input-weight" />
          </div>
        </div>
        <div class="workout-item">
          <h4 class="font-bold">Workout</h4>
          <p>Sets</p>
          <p>Reps</p>
          <p>Weight</p>
          <div class="workout-grid" v-for="(w, wIdx) in workout" :key="wIdx">
            <div class="workout-grid flex gap-2">
              <p>{{ w.name }}</p>
              <button
                class="bg-yellow-50 text-yellow-800 ring-1 ring-yellow-600/20 rounded-full px-2 py-1 text-xs"
              >
                ?
              </button>
            </div>
            <p>{{ w.sets }}</p>
            <p>{{ w.reps }}</p>
            <input type="text" placeholder="14kg" class="input-weight" />
          </div>
        </div>
        <div class="">
          <button class="neo focus:neo-pressed mt-3 bg-[#2d2d2d] text-white">
            Save & Exit
          </button>
          <button class="neo focus:neo-pressed mt-3 bg-[#2d2d2d] text-white">
            Complete
          </button>
        </div>
      </div>
    </div>
    <Grid />
  </section>
</template>
<style scoped></style>
