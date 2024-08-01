import { createRouter, createWebHistory } from "vue-router";

import managementRoutes from "../applications/management/routes.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...managementRoutes],
});

export default router;
