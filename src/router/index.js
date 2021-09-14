import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Modal from "../components/Modal"
import Reg1 from "../components/Reg1"
import Reg2 from "../components/Reg2"
import Reg3 from "../components/Reg3"
import Teachers from "../components/Teachers"
import Header from "../components/Header"
import HeaderSmall from "../components/HeaderSmall"





Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Modal",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/Register1",
    name: "Reg1",
    component: Reg1,
  },
  {
    path: "/Register2",
    name: "Reg2",
    component: Reg2,
  },
  {
    path: "/Register3",
    name: "Reg3",
    component: Reg3,
  },
  {
    path: "/Teachers",
    name: "Teachers",
    component: Teachers,
  },
  {
    path: "/HeaderSmall",
    name: "HeaderSmall",
    component: HeaderSmall,
  },
  {
    path: "/Header",
    name: "Header",
    component: Header,
  },


  

  
  
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
