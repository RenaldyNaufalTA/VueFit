import {
  createMemoryHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

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
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
