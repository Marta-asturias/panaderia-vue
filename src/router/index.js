import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Header from "../components/Header.vue";
import ProductCreate from "../components/ProductCreate.vue";
import ProductsView from '@/views/ProductsView.vue';
import Footer from '@/components/Footer.vue';
import ListProductView from '@/views/ListProductView.vue'
import IngresarProductoView from '@/views/IngresarProductoView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: HomeView,
        aside: Header,
        aside: Footer,
      },
    },

    {
      path: "/Products",
      name: "products",
      components: {
        default: ProductsView,
        aside: Header,
      },
    },
    
    {
      path: "/IngresarProducto",
      name: "IngresarProducto",
      components:{
        default:IngresarProductoView /* ProductCreate */,
        aside: Header,
      },
    },

    {
      path: "/ListProduct",
      name: "ListProduct",
      components:{
        default: ListProductView,
        aside: Header,
        aside: Footer,
      },
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
