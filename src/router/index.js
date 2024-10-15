import { createRouter, createWebHistory } from "vue-router";
import Nav from "@/views/Nav.vue";
import Tasktwo from "@/views/Tasktwo.vue";
import Taskone from "@/views/Taskone.vue";
import Sidebar from "@/views/Sidebar.vue";
import Navbar from "@/views/Navbar.vue";

const routes = [
  {
    path: "/",
    component: Nav,
    children: [
      { path: "/", name: "taskone", component: Taskone },
      { path: "/tasktwo", name: "tasktwo", component: Tasktwo },
      { path: "/sidebar", name: "sidebar", component: Sidebar },
      { path: "/navbar", name: "navbar", component: Navbar },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
