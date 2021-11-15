import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import store from "@/store";

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
  {
    path: "/roles",
    name: "Roles",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Role/Index.vue"),
  },
  {
    path: "/roles/create",
    name: "RoleCreate",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Role/Create.vue"),
  },
  {
    path: "/roles/edit",
    name: "RoleEdit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Role/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Login" && !store.login) {
    router.push({ name: "Login" });
  } else {
    next();
  }
});

export default router;
