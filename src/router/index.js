import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/movie",
    },
    {
      path: "/movie",
      component: () => import("../views/movie/index.vue"),
    },
    {
      path: "/find",
      component: () => import("../views/find/index.vue"),
    },
    {
      path: "/movielist",
      component: () => import("../views/movielist/index.vue"),
    },
    {
      path: "/mine",
      component: () => import("../views/mine/index.vue"),
    },
    {
      path: "/add",
      component: () => import("../views/add/index.vue"),
    },
    {
      path: "/commoditylist",
      component: () => import("../views/commoditylist/index.vue"),
    },
    {
      path: "/login",
      component: () => import("../views/login/index.vue"),
    },
    {
      path: "/register",
      component: () => import("../views/register/index.vue"),
    },
    {
      path: "/fortune",
      component: () => import("../views/fortune/index.vue"),
    },
    {
      path: "/kitchen",
      component: () => import("../views/kitchen/index.vue"),
    },
    {
      path: "/tips",
      component: () => import("../views/tips/index.vue"),
    },
    {
      path: "/weather",
      component: () => import("../views/weather/index.vue"),
    },
    {
      path: "/bulletin",
      component: () => import("../views/bulletin/index.vue"),
    },
    {
      path: "/pub",
      component: () => import("../views/pub/index.vue"),
    },
    {
      path: "/details",
      component: () => import("../views/details/index.vue"),
    },
    {
      path: "/navclick",
      component: () => import("../views/navclick/index.vue"),
    },
    {
      path: "/cartlist",
      component: () => import("../views/cartlist/index.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
