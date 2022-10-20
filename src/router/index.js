import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Header from "../components/Header.vue";
import ProductCreate from "../components/ProductCreate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        aside: Header,
      },
    },
    {
      path: "/IngresarProducto",
      name: "IngresarProducto",
      components:{
        default: ProductCreate,
      }
       

 
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () => import("../views/AboutView.vue"),
        aside: Header,
      },
    },
  ],
});

export default router;
