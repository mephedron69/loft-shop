import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "AboutView",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "ContactView",
    component: () => import("../views/ContactView.vue"),
  },

  {
    path: "/profile",
    name: "ProfileView",
    component: () => import("../views/ProfileView.vue"),
  },

  {
    path: "/basket",
    name: "BasketView",
    component: () => import("../views/BasketView.vue")
  },
  {
    path: "/favour",
    name: "FavourView",
    component: () => import("../views/FavourView.vue")
  },
  {
    path: "/living",
    name: "LivingView",
    component: () => import("../views/LivingView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
