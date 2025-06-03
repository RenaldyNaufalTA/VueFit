<script setup>
import { ref, provide, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import Layout from "./components/layouts/Layout.vue";
import { workoutProgram } from "./utils";

const router = useRouter();
const defaultData = {};
for (let workoutIdx in workoutProgram) {
  const workoutData = workoutProgram[workoutIdx];
  defaultData[workoutIdx] = {};
  for (let e of workoutData.workout) {
    defaultData[workoutIdx][e.name] = "";
  }
}

const data = ref(defaultData);
const selectedWorkout = ref(-1); // Default to no workout selected
const workoutTypes = ["Push", "Pull", "Legs"];

const isWorkoutComplete = computed(() => {
  const currWorkout = data.value?.[selectedWorkout.value];
  if (!currWorkout) return false;
  const isCompleteCheck = Object.values(currWorkout).every(
    (value) => value !== ""
  );
  console.log("Is workout complete:", isCompleteCheck);
  return isCompleteCheck;
});

const firstIncompleteWorkoutIndex = computed(() => {
  const allWorkouts = data.value;
  if (!allWorkouts) return -1;
  for (const [index, workout] of Object.entries(allWorkouts)) {
    const isComplete = Object.values(workout).every((value) => value !== "");
    if (!isComplete) {
      return parseInt(index);
    }
  }
  return -1; // All workouts are complete
});

function handleSaveWorkout() {
  // console.log("Workout data saved:", data.value);
  // Here you can implement the logic to save the workout data, e.g., to a server or local storage.
  localStorage.setItem("workouts", JSON.stringify(data.value));

  router.push("/dashboard");
  selectedWorkout.value = -1; // Reset to the first workout after saving
}

function handleResetWorkouts() {
  data.value = defaultData;
  localStorage.removeItem("workouts");
  selectedWorkout.value = -1; // Reset selected workout
  router.push("/");
}

function handleSelectWorkout(idx) {
  // Logic to handle workout selection
  selectedWorkout.value = idx;
  router.push("/workout");
}

onMounted(() => {
  if (!localStorage) {
    return;
  }
  if (localStorage.getItem("workouts")) {
    const saveData = JSON.parse(localStorage.getItem("workouts"));
    data.value = saveData;
    router.push("/");
  }
}),
  provide("workoutData", data);
provide("selectedWorkout", selectedWorkout);
provide("workoutTypes", workoutTypes);
provide("handleSelectWorkout", handleSelectWorkout);
provide("isWorkoutComplete", isWorkoutComplete);
provide("handleSaveWorkout", handleSaveWorkout);
provide("firstIncompleteWorkoutIndex", firstIncompleteWorkoutIndex);
provide("handleResetWorkouts", handleResetWorkouts);
</script>

<template>
  <div class="min-h-screen w-full bg-[#EEEAE2] pb-10">
    <Layout>
      <router-view></router-view>
    </Layout>
  </div>
</template>

<style scoped></style>
