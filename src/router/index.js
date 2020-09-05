import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 解决路由重复报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const localAccessdRoutes = {};
// 找到system下面的router/index.js
// !!框架约定：各系统的路由需要组合到各系统下的router/index.js下面
const systemRouterFiles = require.context(
  "../systems",
  true,
  /router\/index\.js$/
);
const sysRoutes = systemRouterFiles.keys().map(path => {
  const key = path.split("/")[1];
  const value = systemRouterFiles(path);
  localAccessdRoutes[key] = value.default.map(i => i.path);
  localAccessdRoutes[key].unshift("/" + key);
  return value.default;
});
export { localAccessdRoutes };
// 平台内所支持的所有系统的路由
export const asyncRoutes = [].concat(...sysRoutes);

export const constantRoutes = [
  {
    name: "Login",
    path: "/",
    component: () => import("./../views/login/Login.vue")
  },
  {
    name: "Main",
    path: "/main",
    component: () => import("../views/main/Main.vue"),
    children: [...asyncRoutes]
  },
  {
    name: "404",
    path: "/404",
    component: () => import("./../views/errorPage/404.vue")
  }
];

const allRoutes = [...constantRoutes];
console.log(allRoutes);
const createRouter = () =>
  new VueRouter({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: allRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes
// });

export default router;
