const router = [
  {
    name: "wwd",
    path: "/wwd",
    component: () => import("@/systems/wwd/views/study/Study.vue"),
    children: [
      {
        name: "Study",
        path: "study",
        component: () => import("@/systems/wwd/views/study/Study.vue"),
        meta: {
          title: "学习",
          icon: "",
          componentName: "Study"
        }
      }
    ]
  }
];
// 遍历路由配置数组，给每个配置的path属性添加各系统的标识和前缀
// router.forEach(r => (r.path = `/wwd/${r.path}`));

export default router;
