import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/design",
    name: "Design",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Design.vue")
  },
  {
    path: "/artwork",
    name: "Artwork",
    component: () => import("../views/Artwork.vue")
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("../views/Info.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
