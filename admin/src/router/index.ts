import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog/Index.vue"),
  },
  {
    path: "/blogs/create",
    name: "BlogCreate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog/Create.vue"),
  },
  {
    path: "/blogs/edit",
    name: "BlogEdit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Blog/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
