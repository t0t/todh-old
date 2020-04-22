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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Design.vue")
  },
  {
    path: "/artwork",
    name: "Artwork",
    component: () =>
      import(/* webpackChunkName: "artwork" */ "../views/Artwork.vue")
  },
  {
    path: "/info",
    name: "Info",
    component: () => import(/* webpackChunkName: "info" */ "../views/Info.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
