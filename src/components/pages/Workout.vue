<script setup>
import { computed, inject, ref } from "vue";
import { workoutProgram, exerciseDescriptions } from "../../utils";
import Grid from "../Grid.vue";
import Portal from "../Portal.vue";

const data = inject("workoutData");
const selectedWorkout = inject("selectedWorkout");
const workoutTypes = inject("workoutTypes");
const isWorkoutComplete = inject("isWorkoutComplete");
const handleSaveWorkout = inject("handleSaveWorkout");
const { workout, warmup } = workoutProgram[selectedWorkout.value];
let selectedExercise = ref(null);

const exerciseDescription = computed(
  () => exerciseDescriptions[selectedExercise.value]
);
function closeExerciseDescription() {
  selectedExercise.value = null;
}
</script>
<template>
  <Portal
    v-if="selectedExercise"
    :close="closeExerciseDescription"
    :title="selectedExercise"
    :description="exerciseDescription"
  />
  <section id="workout" class="flex flex-col items-center justify-center">
    <div class="w-3/4 gap-4 mt-10">
      <div class="bg-[#F8F8F9] w-full p-6 rounded-lg shadow-2xl">
        <div class="flex flex-row items-center justify-between">
          <h4 class="mb-2">
            Day
            {{
              selectedWorkout < 9
                ? "0" + (selectedWorkout + 1)
                : selectedWorkout + 1
            }}
          </h4>
          <img
            v-if="selectedWorkout % 3 === 0"
            class="w-5 h-5"
            src="../../assets/icons/weights-fitness.svg"
            alt="weights-fitness"
          />
          <img
            v-else-if="selectedWorkout % 3 === 1"
            class="w-6 h-6"
            src="../../assets/icons/fitness-weight-heavy.svg"
            alt="fitness-weight-heavy"
          />
          <img
            v-else-if="selectedWorkout % 3 === 2"
            class="w-6 h-6"
            src="../../assets/icons/fitness-watch.svg"
            alt="fitness-watch"
          />
        </div>
        <h3 class="text-2xl font-bold text-start mt-2">
          {{ workoutTypes[selectedWorkout % workoutTypes.length] }} Workout
        </h3>
      </div>
      <div class="workout-grid mt-8">
        <!-- Warmup -->
        <div class="workout-item grid grid-cols-7 gap-4">
          <h4 class="col-start-1 col-end-4">Warmup</h4>
          <h4>Sets</h4>
          <h4>Reps</h4>
          <h4>Weight</h4>
          <template v-for="(w, wIdx) in warmup" :key="wIdx">
            <div
              class="workout-grid flex justify-start items-center gap-2 col-start-1 col-end-4 group"
            >
              <h6>{{ w.name }}</h6>
              <button
                @click="() => (selectedExercise = w.name)"
                class="invisible group-hover:visible btn-info hover:btn-info"
              >
                ?
              </button>
            </div>
            <h6>{{ w.sets }}</h6>
            <h6>{{ w.reps }}</h6>
            <input
              type="text"
              placeholder="14kg"
              class="neo focus:neo-pressed bg-white focus:outline-none col-start-6 col-span-2"
            />
          </template>
        </div>
        <!-- End Warmup -->

        <hr class="border-1 my-4" />

        <!-- Workout -->
        <div class="workout-item grid grid-cols-7 gap-4 mt-5">
          <h4 class="col-start-1 col-end-4">Workout</h4>
          <h4>Sets</h4>
          <h4>Reps</h4>
          <h4>Weight</h4>
          <template v-for="(w, wIdx) in workout" :key="wIdx">
            <div
              class="workout-grid flex justify-start items-center gap-2 col-start-1 col-end-4 group"
            >
              <h6>{{ w.name }}</h6>
              <button
                @click="() => (selectedExercise = w.name)"
                class="invisible group-hover:visible btn-info hover:btn-info"
              >
                ?
              </button>
            </div>
            <h6>{{ w.sets }}</h6>
            <h6>{{ w.reps }}</h6>
            <input
              v-model="data[selectedWorkout][w.name]"
              type="text"
              placeholder="14kg"
              class="neo focus:neo-pressed bg-white focus:outline-none col-start-6 col-span-2"
            />
          </template>
        </div>

        <!-- Button -->
        <div class="flex justify-start gap-2 mt-2">
          <button
            @click="handleSaveWorkout"
            class="neo focus:neo-pressed bg-primary text-white mr-2"
          >
            Simpan & Keluar
          </button>
          <button
            :disabled="!isWorkoutComplete"
            :class="{
              'neo opacity-50 cursor-not-allowed': !isWorkoutComplete,
              'neo focus:neo-pressed bg-primary text-white': isWorkoutComplete,
            }"
            @click="handleSaveWorkout"
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
    <!-- <Grid /> -->
  </section>
</template>
<style scoped>
h4 {
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.02em;
}
h6 {
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.02em;
}
</style>
