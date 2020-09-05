// import Vue from "vue";
import router from "@/router";
// import store from "@/store";

const notFoundPath = "/404";

// 验证是否存在本地路由路径
function validateHasRoute(to) {
  // 查找router中是否存在对应路由
  return !!to.matched.length;
}
async function authGuard(to, from, next) {
  // 页面是否存在，不存在404
  if (!validateHasRoute(to)) {
    console.log(404);
    next({ path: notFoundPath, replace: true });
    return;
  }
  next();
}

router.beforeEach(authGuard);
