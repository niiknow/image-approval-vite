import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
const history = createWebHistory();

const routes = [
  { path: "/", component: Home },
  { path: "/image-approval-vite/", component: Home },
  { path: "/image-approval-vite/dist/", component: Home }
];

const router = createRouter({ history, routes });
export default router;
