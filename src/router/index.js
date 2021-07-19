import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Home = () => import("../views/home/Home");
const Cate = () => import("../views/Cate/Cate");
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
    meta: {
      footShow: true, // true显示，false隐藏
    },
  },
  {
    path: "/cate",
    component: Cate,
    meta: {
      footShow: true, // true显示，false隐藏
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      footShow: true, // true显示，false隐藏
    },
  },
  {
    path: "/category",
    component: Category,
    meta: {
      footShow: true, // true显示，false隐藏
    },
  },
  {
    path: "/detail/:iid",
    component: Detail,
    meta: {
      footShow: false, // true显示，false隐藏
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
