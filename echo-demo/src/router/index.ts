import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login/login.vue"),
    },
    {
      path: "/main",
      name: "main",
      component: () => import("../views/main/main.vue"),
    },
    {
      path: "/",
      redirect: "login",
    },
  ],
});

export default router;
