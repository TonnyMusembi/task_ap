import { createRouter, createWebHistory } from "vue-router";
import TaskTwo from "../components/TaskTwo.vue";

const routes = [{ path: "/tasktwo", name: "taaktwo", component: TaskTwo }];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
