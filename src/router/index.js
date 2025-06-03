import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../components/pages/Welcome.vue"),
  },
  {
    path: "/workout",
    name: "Workout",
    component: () => import("../components/pages/Workout.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../components/pages/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
