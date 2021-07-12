import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/Home");
const Cate = () => import("../views/Cate");
const Profile = () => import("../views/Profile");
const Category = () => import("../views/Category/Category");
const Detail = () => import("../views/detail/Detail");

// vue报错:NavigationDuplicated 的解决方案 重复触发了同一个路由
const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/cate",
    component: Cate,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/detail/:iid",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
